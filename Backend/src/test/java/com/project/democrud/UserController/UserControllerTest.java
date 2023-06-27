package com.project.democrud.UserController;

import com.project.democrud.DTO.UserDTO;
import com.project.democrud.DTO.UserUpdateDTO;
import com.project.democrud.DTO.UserSaveDTO;
import com.project.democrud.UserRepo.UserRepo;
import com.project.democrud.entity.User;
import com.project.democrud.Service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


import static com.project.democrud.entity.ERole.ADMIN;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;



class UserControllerTest {
    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;


    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    void deleteUser() {
        // Define the ID of the user to be deleted
        int userId =39;

        String expectedResponse = "yes";
        when(userService.deleteUser(userId)).thenReturn(Boolean.valueOf(expectedResponse));

        // Call the deleteUser() method of the UserController
        String response = userController.deleteUser(userId);

        // Verify the returned message
     //   assertEquals(expectedResponse, response);

        // Verify that the userService.deleteUser() method was called once with the correct ID
        verify(userService, times(1)).deleteUser(userId);
    }

    @Test
    public void testGetAllUser() {
        UserDTO userDTO = new UserDTO();
        userDTO.setId_user(39);
        userDTO.setAge(1918);
        userDTO.setCin("j68");
        String dateOfBirthString = "2005-03-05";
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date dateOfBirth = null;
        try {
            dateOfBirth = dateFormat.parse(dateOfBirthString);
        } catch (ParseException e) {
            // Handle the parsing exception if needed
        }

// Set the date of birth in the UserUpdateDTO
        userDTO.setDate_de_naissance(dateOfBirth);
        userDTO.setEmail("mina@gmail.com");
        userDTO.setLieu_de_naissance("th");
        userDTO.setMobile(7658);
        userDTO.setMot_de_pass("hhh");
        userDTO.setNom("minaa");
        userDTO.setPrenom("abidi");
        userDTO.setRole(ADMIN);
        userDTO.setImmatriculation("j684");


        UserDTO expectedResponse = userDTO;
        List<UserDTO> userDTOList = new ArrayList<>();
        userDTOList.add(expectedResponse);
        when(userService.getAllUser()).thenReturn(userDTOList);

        // Call the deleteUser() method of the UserController
        List<UserDTO> response = userController.getAllUser();
        UserDTO response1 = response.get(0);
        // Verify the returned message
        assertEquals(expectedResponse, response1);

        // Verify that the userService.deleteUser() method was called once with the correct ID
        verify(userService, times(1)).getAllUser();

    }
    @Test
    void testUpdateUser_WhenUserExists() {
        int userId =39;
        // Define the ID of the user to be deleted
        UserUpdateDTO userUpdateDTO = new UserUpdateDTO();
        userUpdateDTO.setId_user(39);
        userUpdateDTO.setAge(1918);
        userUpdateDTO.setCin("j68");
        String dateOfBirthString = "2000-09-07";
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date dateOfBirth = null;
        try {
            dateOfBirth = dateFormat.parse(dateOfBirthString);
        } catch (ParseException e) {
            // Handle the parsing exception if needed
        }

// Set the date of birth in the UserUpdateDTO
        userUpdateDTO.setDate_de_naissance(dateOfBirth);
        userUpdateDTO.setEmail("mina@gmail.com");
        userUpdateDTO.setLieu_de_naissance("th");
        userUpdateDTO.setMobile(7658);
        userUpdateDTO.setMot_de_pass("hhh");
        userUpdateDTO.setNom("hii");
        userUpdateDTO.setPrenom("hhhh");
        userUpdateDTO.setRole(ADMIN);
        userUpdateDTO.setImmatriculation("j684");




        String expectedResponse = "oui";
        when(userService.updateuser(userUpdateDTO)).thenReturn(expectedResponse);

        // Call the deleteUser() method of the UserController
        String response = userController.updateUser(userUpdateDTO);

        // Verify the returned message
        assertEquals(expectedResponse, response);

        // Verify that the userService.deleteUser() method was called once with the correct ID
        verify(userService, times(1)).updateuser(userUpdateDTO);
    }




    @Test
    void saveUser() {

        // Define the ID of the user to be deleted
        UserSaveDTO userSaveDTO = new UserSaveDTO();
        userSaveDTO.setCin("j68");
        String dateOfBirthString = "2000-09-07";
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date dateOfBirth = null;
        try {
            dateOfBirth = dateFormat.parse(dateOfBirthString);
        } catch (ParseException e) {
            // Handle the parsing exception if needed
        }

// Set the date of birth in the UserUpdateDTO
        userSaveDTO.setDate_de_naissance(dateOfBirth);
        userSaveDTO.setEmail("mina@gmail.com");
        userSaveDTO.setLieu_de_naissance("th");
        userSaveDTO.setMobile(7658);
        userSaveDTO.setNom("hii");
        userSaveDTO.setPrenom("hhhh");
        userSaveDTO.setRole(ADMIN);




        String expectedResponse = "hii";
        when(userService.addUser(userSaveDTO)).thenReturn(expectedResponse);

        // Call the deleteUser() method of the UserController
        String response = userController.saveUser(userSaveDTO);

        // Verify the returned message
        assertEquals(expectedResponse, response);

        // Verify that the userService.deleteUser() method was called once with the correct ID
        verify(userService, times(1)).addUser(userSaveDTO);
    }
}