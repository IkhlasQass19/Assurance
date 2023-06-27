package com.project.democrud.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_user;
    @Column(name = "immatriculation" , length = 100)
    private String immatriculation;
    @Column(name = "nom" , length = 50)
    private String nom;
    @Column(name = "prenom" , length = 50)
    private String prenom;
    @Column(name = "cin" , length = 50)
    private String cin;

    @Column(name = "email" , length = 60)
    private String email;

    @Column(name = "mobile" , length = 50)
    private int mobile;
    @Column(name = "role" , length = 50)
    private ERole role;
    @Column(name = "date_de_naissance" , length = 50)
    private Date date_de_naissance;
    @Column(name = "lieu_de_naissance" , length = 50)
    private String lieu_de_naissance;
    @Column(name = "mot_de_pass" , length = 50)
    private String mot_de_pass;

    @Column(name = "age" , length = 50)
    private Integer age;

    public User(String immatriculation,String nom, String prenom, String cin, String email, int mobile, ERole role, Date date_de_naissance ,String lieu_de_naissance,String mot_de_pass ,int age) {
        this.immatriculation = immatriculation;
        this.nom = nom;
        this.prenom = prenom;
        this.cin = cin;
        this.email = email;
        this.mobile = mobile;
        this.role = role;
        this.date_de_naissance = date_de_naissance;
        this.lieu_de_naissance = lieu_de_naissance;
        this.mot_de_pass = mot_de_pass;
        this.age = age;
    }

    public User() {
    }

    public String getImmatriculation() {
        return immatriculation;
    }

    public void setImmatriculation(String immatriculation) {
        this.immatriculation = immatriculation;
    }

    public int getId_user() {
        return id_user;
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

    public String getMot_de_pass() {
        return mot_de_pass;
    }

    public void setMot_de_pass(String mot_de_pass) {
        this.mot_de_pass = mot_de_pass;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "id_user=" + id_user +
                "immatriculation=" + immatriculation +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", cin='" + cin + '\'' +
                ", email='" + email + '\'' +
                ", mobile=" + mobile +
                ", role=" + role +
                ", date_de_naissance=" + date_de_naissance +
                ", lieu_de_naissance='" + lieu_de_naissance + '\'' +
                ", mot_de_pass='" + mot_de_pass + '\'' +
                ", age=" + age +
                '}';
    }
}
