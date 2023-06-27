package com.project.democrud.DTO;

import com.project.democrud.entity.ERole;

import java.util.Date;

public class UserSaveDTO {
    private String nom;
    private String prenom;
    private String cin;
    private String email;
    private int mobile;
    private ERole role;

    private Date date_de_naissance;
    private String lieu_de_naissance;

    public UserSaveDTO(String nom, String prenom, String cin, String email, int mobile,ERole role,Date date_de_naissance,String lieu_de_naissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.cin = cin;
        this.email = email;
        this.mobile = mobile;
        this.role = role;
        this.date_de_naissance = date_de_naissance;
        this.lieu_de_naissance = lieu_de_naissance;
    }

    public UserSaveDTO() {
    }

    public String getNom() {
        return nom;
    }


    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getCin() {
        return cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getMobile() {
        return mobile;
    }

    public void setMobile(int mobile) {
        this.mobile = mobile;
    }

    public ERole getRole() {
        return role;
    }

    public void setRole(ERole role) {
        this.role = role;
    }

    public Date getDate_de_naissance() {
        return date_de_naissance;
    }

    public void setDate_de_naissance(Date date_de_naissance) {
        this.date_de_naissance = date_de_naissance;
    }

    public String getLieu_de_naissance() {
        return lieu_de_naissance;
    }

    public void setLieu_de_naissance(String lieu_de_naissance) {
        this.lieu_de_naissance = lieu_de_naissance;
    }

    @Override
    public String toString() {
        return "UserSaveDTO{" +
                "nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", cin='" + cin + '\'' +
                ", email='" + email + '\'' +
                ", mobile=" + mobile +
                ", role=" + role +
                ", date_de_naissance=" + date_de_naissance +
                ", lieu_de_naissance='" + lieu_de_naissance + '\'' +
                '}';
    }
}
