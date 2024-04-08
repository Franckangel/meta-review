package com.example.metareviewjava.controllers;

import com.example.metareviewjava.entities.User;
import com.example.metareviewjava.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    //Create new User
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces =MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> createUser(@RequestBody User user){
        User newUser = userService.createUser(user);
        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }
    //Get user by id
    @GetMapping(path="/{userId}",produces =MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> getUserById(@PathVariable Integer userId) {
        User userFound = userService.getUserById(userId);
        return new ResponseEntity<User>(userFound,HttpStatus.OK);
    }
    //Get all users
    @GetMapping(produces =MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> usersList = userService.getAllUsers();
        return new ResponseEntity<List<User>>(usersList,HttpStatus.OK);
    }
    //Update user
    @PutMapping(consumes =MediaType.APPLICATION_JSON_VALUE,produces =MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> updateUser(@RequestBody User user){
        User UserUpdated = userService.updateUser(user);
        return new ResponseEntity<User>(UserUpdated,HttpStatus.ACCEPTED);
    }
    //Delete user
    @DeleteMapping(path="/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
