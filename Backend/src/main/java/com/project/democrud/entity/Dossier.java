package com.project.democrud.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "dossier")
@Getter
@Setter
public class Dossier {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "ndoss")
    private Long ndoss;

    @Column(name = "etat_doss ")
    private String etat_doss;

    @Column(name = "date_depot",columnDefinition = "TIMESTAMP")
    private LocalDateTime dateDepot;

    @Column(name = "montant")
    private double montant;

    @Column(name = "adhImm")
    private String adhImm;

    @Column(name = "agentImm")
    private String agentImm;

    //@OneToOne(mappedBy = "doss")
    //private Etat etat;

    public Dossier(LocalDateTime dateDepot, String adhImm) {
        this.dateDepot = dateDepot;
        this.adhImm = adhImm;
    }

    public Dossier() {
    }
    /* @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @OneToMany(mappedBy = "doss")
    private List<Etat> etatList = new ArrayList<>();
    @ManyToOne
    @JoinColumn(name = "etat_id")
    private Etat etat;
    */
}

