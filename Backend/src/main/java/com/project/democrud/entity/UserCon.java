package com.project.democrud.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.*;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;
@Getter
@Setter

@Entity
@Table(name="user_conn")

public class UserCon {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    @Column
    private String login;
    @Column
    private String passwd;
    @Column
    private ERole role;
    @Column
    private  String changepass;

    public String getChangepass() {
        return changepass;
    }

    public void setChangepass(String changepass) {
        this.changepass = changepass;
    }

    public UserCon(Long id, String login, String passwd, ERole role, String changepass) {
        this.id = id;
        this.login = login;
        this.passwd = passwd;
        this.role = role;
        this.changepass = changepass;
    }

    public UserCon() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }

    public ERole getRole() {
        return role;
    }

    public void setRole(ERole role) {
        this.role = role;
    }
}
