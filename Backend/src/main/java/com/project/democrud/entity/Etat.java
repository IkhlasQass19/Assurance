package com.project.democrud.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "etat")
@Getter
@Setter
public class Etat {


    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "etat_id")
    private Long etatId;

    @Column(name = "etat_doss")
    private String etat_doss;

    @Column(name="message")
    private String message;

    @Column(name = "date", columnDefinition = "TIMESTAMP")
    private LocalDateTime date;

    @OneToOne
    @JoinColumn(name = "ndoss", referencedColumnName = "ndoss")
    @JsonIgnore
    private Dossier doss;

    /*
    @ManyToOne
    @JoinColumn(name = "doss_id")
    private Dossier doss;*/

    public Etat(String etatNom, String message, LocalDateTime date, Dossier doss) {
        this.etat_doss = etatNom;
        this.message = message;
        this.date = date;
        this.doss = doss;
    }
    public Etat(LocalDateTime date, Dossier doss) {
        this.message = message;
        this.date = date;
        this.doss = doss;
    }

    public Etat(String etat_doss, LocalDateTime date, Dossier doss) {
        this.etat_doss = etat_doss;
        this.date = date;
        this.doss = doss;
    }



    public Etat() {
    }
}

