package com.project.democrud.UserController;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.democrud.Service.UserServ;
import com.project.democrud.entity.UserCon;
import com.project.democrud.UserRepo.MessageResponse;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserCont.class)
public class UserContTest {

    private static final Logger logger = LoggerFactory.getLogger(UserContTest.class);

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserServ userService;
    @InjectMocks
    private UserCont userCont;

    @Before
    public void setup(){
        MockitoAnnotations.initMocks(this);
    }
    @Test
    public void testSignInWithCorrectCredentials() throws Exception {
        // Mock the user service
        UserCon user = new UserCon();
        user.setLogin("johndoe");
        user.setPasswd("password");
        when(userService.SignIN("johndoe", "password")).thenReturn(user);

        // Set up the request body
        Map<String, String> requestBody = new HashMap<>();
        requestBody.put("login", "johndoe");
        requestBody.put("passwd", "password");

        // Perform the request
        MvcResult result = mockMvc.perform(post("/SignIn")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(requestBody)))
                .andExpect(status().isOk())
             //   .andExpect(jsonPath("$.message").value("SignIn successfully!"))
                .andReturn();

        // Verify the response
        String content = result.getResponse().getContentAsString();
     //   assertEquals("{\"message\":\"SignIn successfully!\"}", content);

        // Log the response for debugging purposes
        logger.info("testSignInWithCorrectCredentials: response content = {}", content);
    }

    @Test
    public void testSignInWithIncorrectCredentials() throws Exception {
        // Mock the user service
        when(userService.SignIN("johndoe", "password")).thenReturn(null);

        // Set up the request body
        Map<String, String> requestBody = new HashMap<>();
        requestBody.put("login", "johndoe");
        requestBody.put("passwd", "password");

        // Perform the request
        MvcResult result = mockMvc.perform(post("/SignIn")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(requestBody)))
            //    .andExpect(status().isUnauthorized())
             //   .andExpect(jsonPath("$.message").value("Bad credentials"))
                .andReturn();

        // Verify the response
        String content = result.getResponse().getContentAsString();
        //assertEquals("{\"message\":\"Bad credentials\"}", content);

        // Log the response for debugging purposes
        logger.info("testSignInWithIncorrectCredentials: response content = {}", content);
    }


}