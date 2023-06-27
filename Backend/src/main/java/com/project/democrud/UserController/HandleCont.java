package com.project.democrud.UserController;

import com.project.democrud.Service.HandleServ;
import com.project.democrud.UserRepo.MessageResponse;
import com.project.democrud.entity.Dossier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path="")
public class HandleCont {

    @Value("${dossier.pdf.path}")
    private String pdfPath;

    private final HandleServ handleServ;
    @Autowired
    public HandleCont(HandleServ handleServ){

        this.handleServ = handleServ;
    }

    //déposer un dossier
    @PostMapping("/addDossier")
    public ResponseEntity<?> addDossier(@RequestParam String Imm,  @RequestParam("facture") MultipartFile facture,
                                        @RequestParam("ordonnance") MultipartFile ordonnance,
                                        @RequestParam("feuille-de-soin") MultipartFile feuilleDeSoin,
                                        @RequestParam(name = "autre-document", required = false) MultipartFile autreDocument) throws IOException {

        String adhImm = Imm;
        this.handleServ.addDossier(adhImm);
        long iddoc= this.handleServ.lastid();
        this.handleServ.saveFile(facture, "facture.pdf",adhImm,iddoc);
        this.handleServ.saveFile(ordonnance, "ordonnance.pdf",adhImm,iddoc);
        this.handleServ.saveFile(feuilleDeSoin, "feuille-de-soin.pdf",adhImm,iddoc);

        if (autreDocument != null) {
            this.handleServ.saveFile(autreDocument, "autre-document.pdf",adhImm,iddoc);
        }
        return ResponseEntity.ok(new MessageResponse("Dossier added successfully!"));
    }

    //récupérer la liste de tous les dossiers
    @GetMapping("/getDossiers")
    public List<Dossier> getDossiers(){
        return handleServ.getDossiers();
    }

    //get id du dernier row en table dossier
    @GetMapping("/getLastId")
    public Long getLastId(){
        return handleServ.lastid();
    }

    //accepter l'etat du dossier
    @PutMapping("/accepter")
    public ResponseEntity<Void> accepter(
            @RequestParam Long ndoss,
            @RequestParam Double total,
            @RequestParam float per,
            @RequestParam String agentImm) {
        handleServ.accepter(ndoss,  total, per, agentImm);
        return ResponseEntity.ok().build();
    }


    //refuser l'etat du dossier
    @PutMapping("/refuser")
    public ResponseEntity<Void> accepter(
            @RequestParam Long ndoss,
            @RequestParam String msg,
            @RequestParam String agentImm) {
        handleServ.refuser(ndoss,  msg, agentImm);
        return ResponseEntity.ok().build();
    }

    //récupérer la liste de dossiers par adh
    @GetMapping("/dossier_adh{adhImm}")
    public  List<Dossier> getDossierByAdhImm(@RequestParam("adhImm") String adhImm){

        return handleServ.getDossierByAdhImm(adhImm);
    }

    //récupérer la liste de dossiers en cours de traitement
    @GetMapping("/dossier_etat")
    public  List<Dossier> getDossierByEtat_doss(){

        return handleServ.getDossierByEtat_doss();
    }

    //récupérer la liste de dossiers acceptés
    @GetMapping("/dossier_etat_acc")
    public  List<Dossier> getDossierByEtat_dossAcc(){

        return handleServ.getDossierByEtat_dossAcc();
    }

    //récupérer la liste de dossiers refusés
    @GetMapping("/dossier_etat_ref")
    public  List<Dossier> getDossierByEtat_dossRef(){

        return handleServ.getDossierByEtat_dossRef();
    }

    //récupérer les details d'un dossier
    @GetMapping("/dossier_etat_details{ndoss}")
    public  List<Object> getDossierDetails(@RequestParam("ndoss") Long ndoss){

        return handleServ.getDossierDetails(ndoss);
    }
    //affichage dossier:
    @GetMapping(value = "/getFichier", produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<Resource> getPdf(@RequestParam String num, @RequestParam String num2, @RequestParam String type) throws IOException {

        List<File> pdfFiles = handleServ.getPdfFiles( pdfPath+"\\"+num+"\\"+num2+"\\");
        String pdfPath = null;
        for (File file : pdfFiles) {
            if (file.getName().equals(type+".pdf")) {
                pdfPath = file.getPath();
                break;
            }
        }
        Resource pdfResource = new FileSystemResource(pdfPath);
        try {
            return ResponseEntity.ok()
                    .contentLength(pdfResource.contentLength())
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(pdfResource);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
