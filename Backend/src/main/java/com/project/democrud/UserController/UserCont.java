package com.project.democrud.UserController;


import com.project.democrud.Service.UserServ;
import com.project.democrud.UserRepo.MessageResponse;
import com.project.democrud.entity.UserCon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path="")

public class UserCont {

    private final UserServ userServ;
    @Autowired
    public UserCont(UserServ userServ){

        this.userServ = userServ;
    }

    @PostMapping("/SignIn")
    public UserCon SignIn(@RequestBody Map<String, String> request){

        String login = request.get("login");
        String passwd = request.get("passwd");
        UserCon response = this.userServ.SignIN(login, passwd);
            return response;
        }


    @PutMapping("/SignIn/UpdatePasswd")
    public ResponseEntity<?> UpdatePasswd(@RequestBody Map<String, String> request){
        String login = request.get("login");
        String newpasswd = request.get("newpasswd");
        this.userServ.UpdatePasswd(login,newpasswd);
        return ResponseEntity.ok(new MessageResponse("Password modified successfully!"));
    }
}




