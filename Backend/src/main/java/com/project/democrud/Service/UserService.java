package com.project.democrud.Service;

import com.project.democrud.DTO.UserDTO;
import com.project.democrud.DTO.UserDTOAd;
import com.project.democrud.DTO.UserSaveDTO;
import com.project.democrud.DTO.UserUpdateDTO;
import com.project.democrud.entity.User;

import java.util.List;


public interface  UserService {
    String addUser(UserSaveDTO userSaveDTO);
    // String addUserConn(UserSaveDTO userSaveDTO);

    List<UserDTO> getAllUser();
    List<UserDTOAd> getAllUserAdherents();
    List<UserDTOAd> getAllUserAgents();
    UserDTO getAllUserId(int k);
    String updateuser(UserUpdateDTO userUpdateDTO);
    User GetUserByImm(String login);

    boolean deleteUser(int id);
}