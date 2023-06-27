package com.project.democrud.Service;

import com.project.democrud.UserRepo.UserRep;
import com.project.democrud.entity.UserCon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Objects;

@Service
public class UserServ {

    private final UserRep userRep;
    @Autowired
    public UserServ(UserRep userRep){

        this.userRep = userRep;
    }
    public UserCon SignIN(String login, String passwd){

        if(userRep.getUserByLoginAndPasswd(login, passwd) != null){
            return userRep.getUserByLoginAndPasswd(login, passwd);
        }
        else {
            return null;
        }
    }

    @Transactional
    public void UpdatePasswd(String login, String newpasswd){

        UserCon user1 = this.userRep.findUserByLogin(login);
        if(user1 == null){
            throw new IllegalStateException("No user with this login");
        }
        if(!Objects.equals(newpasswd, user1.getPasswd())) {
            user1.setChangepass("TRUE");
            user1.setPasswd(newpasswd);

        }
        else {
            throw new IllegalStateException("It is the old password");
        }

    }

}
