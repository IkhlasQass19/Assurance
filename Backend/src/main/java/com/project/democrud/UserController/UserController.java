package com.project.democrud.UserController;

import com.project.democrud.DTO.UserDTO;
import com.project.democrud.DTO.UserDTOAd;
import com.project.democrud.DTO.UserSaveDTO;
import com.project.democrud.DTO.UserUpdateDTO;
import com.project.democrud.Service.UserService;
import com.project.democrud.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController/*Un composant qui joue le role d’un controleur dans une architecture MVC pour une application Web ou une API Web*/
@CrossOrigin("*") //
@RequestMapping("api/v1/user")//annotation utilisée pour effectuer des recherches dans l’enregistremen
public class UserController {
    @Autowired
    private UserService userService;
    /*@PostMapping(path="/savee")//annotation utilisée pour créer un nouvel enregistrement
    public String saveUser(@RequestBody UserSaveDTO userSaveDTO){
        String id = userService.addUser(userSaveDTO);
        return id;
    }*/
    @GetMapping (path= "/getAllUser")//annotation utilisée pour lire un enregistrement.
    public List<UserDTO> getAllUser(){
        List<UserDTO>allUser = userService.getAllUser();
        return allUser;
    }
    @GetMapping (path= "/getUserByImm/{login}")//annotation utilisée pour lire un enregistrement.
    public User getUserByImm(@PathVariable(value = "login") String login){
        User User = userService.GetUserByImm(login);
        return User;
    }
    @GetMapping (path= "/getAllUserAd")//annotation utilisée pour lire un enregistrement.
    public List<UserDTOAd> getAllUserAd(){
        List<UserDTOAd> allUserAd = userService.getAllUserAdherents();
        return allUserAd;
    }
    @GetMapping (path= "/getAllUserAg")//annotation utilisée pour lire un enregistrement.
    public List<UserDTOAd> getAllUserAg(){
        List<UserDTOAd> allUserAg = userService.getAllUserAgents();
        return allUserAg;
    }
    @GetMapping (path= "/getUserId/{id}")//annotation utilisée pour lire un enregistrement.
    public UserDTO getUserId(@PathVariable(value = "id") int id){
        UserDTO User = userService.getAllUserId(id);
        return User;
    }
    @PutMapping(path="/update")//annotation utilisée pour créer un nouvel enregistrement
    public String updateUser(@RequestBody UserUpdateDTO userUpdateDTO){
        String id = userService.updateuser(userUpdateDTO);
        return id;
    }
    @DeleteMapping(path="/delete/{id}")//annotation permettant de supprimer l’enregistrement
    public String deleteUser(@PathVariable(value = "id") int id)
    {
        boolean deleteuser = userService.deleteUser(id);
        return "deleted";
    }



    @PostMapping(path="/sa")//annotation utilisée pour créer un nouvel enregistrement
    public String saveUser(@RequestBody UserSaveDTO userSaveDTO){
        String id = userService.addUser(userSaveDTO);
        //String f = userService.addUserConn(userSaveDTO);
        return id;
    }

}





