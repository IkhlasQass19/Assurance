package com.project.democrud.UserRepo;

import com.project.democrud.entity.Dossier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DossRep extends JpaRepository<Dossier, Long> {

    @Query("SELECT MAX(ndoss) FROM Dossier")
    Long getLastId();

    @Query("SELECT d FROM Dossier d  WHERE d.ndoss = ?1")
    Dossier getDossierById(Long ndoss);

    @Query("SELECT d FROM Dossier d  WHERE d.adhImm = ?1 ORDER BY d.dateDepot desc ")
    List<Dossier> getDossierByAdhImm(String adhImm);

    @Query("SELECT d FROM Dossier d  WHERE d.etat_doss = 'en cours de traitement'")
    List<Dossier> getDossierByEtat_dossECT();

    @Query("SELECT d FROM Dossier d  WHERE d.etat_doss = 'accepté'")
    List<Dossier> getDossierByEtat_dossAcc();

    @Query("SELECT d FROM Dossier d  WHERE d.etat_doss = 'refusé'")
    List<Dossier> getDossierByEtat_dossRef();

    @Query("SELECT d FROM Dossier d ORDER BY d.dateDepot DESC ")
    List<Dossier> findAll();

    @Query(value = "SELECT d.ndoss as NDOC, d.adh_imm, d.date_depot, e.etat_doss, d.montant, e.etat_id, e.date, e.message, e.ndoss FROM Dossier d, Etat e WHERE d.ndoss =?1 AND e.ndoss = ?1", nativeQuery = true)
    List<Object> getDossierDetails(Long ndoss);



}
