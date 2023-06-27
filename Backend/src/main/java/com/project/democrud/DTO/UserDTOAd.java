package com.project.democrud.DTO;

import com.project.democrud.entity.ERole;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;


public class UserDTOAd {
    private int id_user;
    private String immatriculation;
    private String nom;
    private String prenom;
    private String cin;
    private String email;
    private int mobile;

    private Date date_de_naissance;
    private String lieu_de_naissance;
    private String mot_de_pass;
    private  int age;

    public UserDTOAd(int id_user,String immatriculation, String nom, String prenom, String cin, String email, int mobile,Date date_de_naissance,String lieu_de_naissance,String mot_de_pass,int age) {
        this.id_user = id_user;
        this.immatriculation = immatriculation;
        this.nom = nom;
        this.prenom = prenom;
        this.cin = cin;
        this.email = email;
        this.mobile = mobile;
        this.date_de_naissance = date_de_naissance;
        this.lieu_de_naissance = lieu_de_naissance;
        this.mot_de_pass = mot_de_pass;
        this.age = age;
    }

    public UserDTOAd() {
    }

    public int getId_user() {
        return id_user;
    }

    public String getImmatriculation() {
        return immatriculation;
    }

    public void setImmatriculation(String immatriculation) {
        this.immatriculation = immatriculation;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getMot_de_pass() {
        return mot_de_pass;
    }

    public void setMot_de_pass(String mot_de_pass) {
        this.mot_de_pass = mot_de_pass;
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

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "id_user=" + id_user +
                "immatriculation=" + immatriculation +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", cin='" + cin + '\'' +
                ", email='" + email + '\'' +
                ", mobile=" + mobile +
                ", date_de_naissance=" + date_de_naissance +
                ", lieu_de_naissance='" + lieu_de_naissance + '\'' +
                ", mot_de_pass='" + mot_de_pass + '\'' +
                ", age=" + age +
                '}';
    }
}