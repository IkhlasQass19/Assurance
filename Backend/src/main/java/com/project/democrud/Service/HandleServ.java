package com.project.democrud.Service;

import com.project.democrud.UserRepo.DossRep;
import com.project.democrud.UserRepo.EtatRep;
import com.project.democrud.entity.Dossier;
import com.project.democrud.entity.Etat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class HandleServ {

    private final DossRep dossRep;
    private final EtatRep etatRep;
    private Dossier doss;
    private Etat etat;
    private LocalDateTime date;
    @Value("${dossier.pdf.path}")
    private String pdfPath;

    @Autowired
    public HandleServ(DossRep dossRep, EtatRep etatRep) {

        this.dossRep = dossRep;
        this.etatRep = etatRep;
    }


    //déposer un dossier
    public void addDossier(String adhImm) {

        date = LocalDateTime.now();
        doss = new Dossier(date, adhImm);
        doss.setEtat_doss("en cours de traitement");
        dossRep.save(doss);
        etat = new Etat(date, doss);
        etat.setEtat_doss("en cours de traitement");
        etatRep.save(etat);
    }

    //récupérer la liste de dossiers
    public List<Dossier> getDossiers() {

        return dossRep.findAll();
    }

    //récupérer le dernier id dans la table dossier
    public Long lastid() {
        return dossRep.getLastId();
    }

    //accepter l'etat du dossier
    @Transactional
    public void accepter(Long ndoss, Double total, float per, String agentImm) {
        doss = dossRep.getDossierById(ndoss);
        doss.setMontant(this.revenue(total, per));
        doss.setEtat_doss("accepté");
        doss.setAgentImm(agentImm);
        dossRep.save(doss);
        date = LocalDateTime.now();
        Etat etat = new Etat("accepté", date, doss);
        etatRep.save(etat);
    }

    //refuser l'etat du dossier
    @Transactional
    public void refuser(Long ndoss, String msg, String agentImm) {
        doss = dossRep.getDossierById(ndoss);
        doss.setEtat_doss("refusé");
        doss.setAgentImm(agentImm);
        dossRep.save(doss);
        date = LocalDateTime.now();
        Etat etat = new Etat("refusé", date, doss);
        etat.setMessage(msg);
        etatRep.save(etat);
    }

    //calculer le montant rendu
    public double revenue(double total, double per) {

        return total * per;
    }

    //récupérer la liste de dossiers par adh
    public List<Dossier> getDossierByAdhImm(String adhImm) {

        return dossRep.getDossierByAdhImm(adhImm);
    }

    //récupérer la liste de dossiers en cours de traitement
    public List<Dossier> getDossierByEtat_doss() {

        return dossRep.getDossierByEtat_dossECT();
    }

    //récupérer la liste de dossiers acceptés
    public List<Dossier> getDossierByEtat_dossAcc() {

        return dossRep.getDossierByEtat_dossAcc();
    }

    //récupérer la liste de dossiers refusés
    public List<Dossier> getDossierByEtat_dossRef() {

        return dossRep.getDossierByEtat_dossRef();
    }

    //récupérer les details d'un dossier
    public List<Object> getDossierDetails(Long ndoss) {

        return dossRep.getDossierDetails(ndoss);
    }
    //pour deplacer kes fichier dans repertoire convenable

    public void saveFile(MultipartFile file, String fileName, String adhImm, long id) throws IOException {
        try {
            // Specify the directory where you want to save the file
            String uploadDir = pdfPath + adhImm + "\\" + id + "\\";

            // Create the directory if it doesn't exist
            File directory = new File(uploadDir);
            if (!directory.exists()) {
                directory.mkdirs();
            }
            // Save the file to the specified directory
            String filePath = uploadDir + fileName;
            file.transferTo(new File(filePath));

            // File saved successfully
            System.out.println("File saved: " + filePath);
        } catch (IOException e) {
            // Handle the exception if the file cannot be saved
            System.out.println("Failed to save file: " + e.getMessage());
        }
    }

    //get all files:
    public List<File> getPdfFiles(String folderPath) {
        List<File> pdfFiles = new ArrayList<>();
        File folder = new File(folderPath);

        if (folder.exists() && folder.isDirectory()) {
            File[] files = folder.listFiles();

            for (File file : files) {
                if (file.isFile() && file.getName().toLowerCase().endsWith(".pdf")) {
                    pdfFiles.add(file);
                }
            }
        }

        return pdfFiles;
    }
}
