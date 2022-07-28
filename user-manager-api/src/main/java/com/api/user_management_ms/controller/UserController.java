package com.api.user_management_ms.controller;

import com.api.user_management_ms.dto.UserDTO;
import com.api.user_management_ms.response.Response;
import com.api.user_management_ms.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*" , allowedHeaders = "*")

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService service;

    @PostMapping("/")
    public Response addUser(@RequestBody UserDTO user){
        Response res = new Response();
        UserDTO existingUser = service.getUserByName(user.getUserName());
        if(existingUser.getId() == 0){
            service.saveUser(user);
            res.setMessage("Successfully Saved");
            res.setResponse(user);
        }else{
            res.setMessage("User Name : "+user.getUserName()+" Already Exist");
        }

        return res;
    }

    @PostMapping("/addUsers")
    public List<UserDTO> addUsers(@RequestBody List<UserDTO> user){
        return service.saveUsers(user);
    }
    @GetMapping("/")
    public Response findAllUsers(){
        List<UserDTO> usersList = service.getUser();
        Response res = new Response();
        res.setMessage("success");
        res.setResponse(usersList);
        return res;
    }
    @GetMapping("/id/{id}")
    public UserDTO findUsersById(@PathVariable int id){
        return service.getUserById(id);
    }

    @GetMapping("/name/{name}")
    public UserDTO findUsersByName(@PathVariable String name){
        return service.getUserByName(name);
    }
    @PutMapping("/")
    public Response updateUser(@RequestBody UserDTO user){
        Response res = new Response();
        service.updateUser(user);
        res.setMessage("Successfully Updated");
        res.setResponse(user);

        return res;
    }
    @DeleteMapping(value = "/{id}")
    public Response deleteUsers(@PathVariable int id){
        Response res = new Response();
        res.setMessage(service.deleteUser(id));
        return res;
    }
}
