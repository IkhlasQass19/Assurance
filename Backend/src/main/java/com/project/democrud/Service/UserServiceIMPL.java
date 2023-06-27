package com.project.democrud.Service;

import com.project.democrud.DTO.UserDTO;
import com.project.democrud.DTO.UserDTOAd;
import com.project.democrud.DTO.UserSaveDTO;
import com.project.democrud.DTO.UserUpdateDTO;
import com.project.democrud.UserRepo.UserRep;
import com.project.democrud.UserRepo.UserRepo;
import com.project.democrud.entity.ERole;
import com.project.democrud.entity.User;
import com.project.democrud.entity.UserCon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

@Service
public class UserServiceIMPL implements UserService{

    @Autowired
    private UserRepo userrepo;
    @Autowired
    private UserRep userConnRe;
    @Override
    public String addUser(UserSaveDTO userSaveDTO) {
        Random randomm = new Random();
        int randomNumber = randomm.nextInt(991) + 10;
        LocalDate currentDate = LocalDate.now();
        int year = currentDate.getYear();
        int age = 2023-userSaveDTO.getDate_de_naissance().getYear();
        String immatriculation = userSaveDTO.getCin()+ (int)(Math.random() * 10);
        Random random = new Random();
        String allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
        String password = "";
        for (int i = 0; i < 8; i++) {
            int randomIndex = random.nextInt(allowedChars.length());
            password += allowedChars.charAt(randomIndex);
        }
      //  Date formattedDate =  new SimpleDateFormat("yyyy-MM-dd").format(userSaveDTO.getDate_de_naissance());
        User user =new User(
                immatriculation,
                userSaveDTO.getNom(),
                userSaveDTO.getPrenom(),
                userSaveDTO.getCin(),
                userSaveDTO.getEmail(),
                userSaveDTO.getMobile(),
                userSaveDTO.getRole(),
                userSaveDTO.getDate_de_naissance(),
                userSaveDTO.getLieu_de_naissance(),
                password,
                age
        );
        UserCon userConnRe1 = new UserCon(null, immatriculation,
                password,
                userSaveDTO.getRole(),"FALSE"
        );
        userrepo.save(user);
        userConnRe.save(userConnRe1);
        return user.getNom();
    }

    /*@Override
    public String addUserConn(UserSaveDTO userSaveDTO) {
        Random random = new Random();
        String allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
        String password = "";
        for (int i = 0; i < 8; i++) {
            int randomIndex = random.nextInt(allowedChars.length());
            password += allowedChars.charAt(randomIndex);
        }
        String immatriculation = userSaveDTO.getCin()+ (int)(Math.random() * 10);
        UserConn userConnRe1 = new UserConn( immatriculation,
                password,
                userSaveDTO.getRole()
        );
        userConnRe.save(userConnRe1);
        return null;
    }*/

    @Override
    public List<UserDTO> getAllUser() {
        List<User> getUser = userrepo.findAll();
        List<UserDTO> userDTOList = new ArrayList<>();
        for(User a:getUser)
        {
            UserDTO userDTO = new UserDTO(
                    a.getId_user(),
                    a.getImmatriculation(),
                    a.getNom(),
                    a.getPrenom(),
                    a.getCin(),
                    a.getEmail(),
                    a.getMobile(),
                    a.getRole(),
                    a.getDate_de_naissance(),
                    a.getLieu_de_naissance(),
                    a.getMot_de_pass(),
                    a.getAge()
            );
            userDTOList.add(userDTO);
        }
        return userDTOList;
    }

    @Override
    public List<UserDTOAd> getAllUserAdherents() {
        List<User> getUser = userrepo.findUserByRoleAd();
        List<UserDTOAd> userDTOList = new ArrayList<>();
        for(User a:getUser)
        {
            UserDTOAd userDTOAd;
            userDTOAd = new UserDTOAd(
                    a.getId_user(),
                    a.getImmatriculation(),
                    a.getNom(),
                    a.getPrenom(),
                    a.getCin(),
                    a.getEmail(),
                    a.getMobile(),
                    a.getDate_de_naissance(),
                    a.getLieu_de_naissance(),
                    a.getMot_de_pass(),
                    a.getAge()
            );
            userDTOList.add(userDTOAd);
        }
        return userDTOList;
    }
    @Override
    public List<UserDTOAd> getAllUserAgents() {
        List<User> getUser = userrepo.findUserByRoleAg();
        List<UserDTOAd> userDTOList = new ArrayList<>();
        for(User a:getUser)
        {
            UserDTOAd userDTOAd = new UserDTOAd(
                    a.getId_user(),
                    a.getImmatriculation(),
                    a.getNom(),
                    a.getPrenom(),
                    a.getCin(),
                    a.getEmail(),
                    a.getMobile(),
                    a.getDate_de_naissance(),
                    a.getLieu_de_naissance(),
                    a.getMot_de_pass(),
                    a.getAge()
            );
            userDTOList.add(userDTOAd);
        }
        return userDTOList;
    }

    @Override
    public UserDTO getAllUserId(int k) {
        User a = userrepo.findAllByIdd(k);
        List<UserDTO> userDTOList = new ArrayList<>();

        UserDTO userDTO = new UserDTO(
                a.getId_user(),
                a.getImmatriculation(),
                a.getNom(),
                a.getPrenom(),
                a.getCin(),
                a.getEmail(),
                a.getMobile(),
                a.getRole(),
                a.getDate_de_naissance(),
                a.getLieu_de_naissance(),
                a.getMot_de_pass(),
                a.getAge()
        );


        return userDTO;
    }

    @Override
    public String updateuser(UserUpdateDTO userUpdateDTO)
    {
        if(userrepo.existsById(userUpdateDTO.getId_user()))
        {
            User user = userrepo.getById(userUpdateDTO.getId_user());
            user.setImmatriculation(userUpdateDTO.getImmatriculation());
            user.setNom(userUpdateDTO.getNom());
            user.setPrenom(userUpdateDTO.getPrenom());
            user.setCin(userUpdateDTO.getCin());
            user.setEmail(userUpdateDTO.getEmail());
            user.setMobile(userUpdateDTO.getMobile());
            user.setRole(userUpdateDTO.getRole());
            user.setDate_de_naissance(userUpdateDTO.getDate_de_naissance());
            user.setLieu_de_naissance(userUpdateDTO.getLieu_de_naissance());
            user.setMot_de_pass(userUpdateDTO.getMot_de_pass());
            user.setAge(userUpdateDTO.getAge());
            userrepo.save(user);
        }
        else
        {
            System.out.println("User ID not Exist");
        }
        return null;

    }

    @Override
    public boolean deleteUser(int id) {
        if(userrepo.existsById(id))
        {
            userrepo.deleteById(id);

        }
        else
        {
            System.out.println("User id not found");
        }
        return true;
    }
    public User GetUserByImm(String login){
        return  userrepo.findUserByImm(login);
    }
}