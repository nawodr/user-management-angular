package com.api.user_management_ms.service.impl;

import com.api.user_management_ms.entity.User;
import com.api.user_management_ms.dto.UserDTO;
import com.api.user_management_ms.repository.UserRepository;
import com.api.user_management_ms.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository repository;

    @Override
    public void saveUser(UserDTO userDTO){
        User user = new User();
        user.setUserName(userDTO.getUserName());
        user.setRole(userDTO.getRole());
        user.setEmployeeCode(userDTO.getEmployeeCode());
        user.setCompany(userDTO.getCompany());
        user.setLocation(userDTO.getLocation());
        repository.save(user);
    }
    @Override
    public List<UserDTO> saveUsers(List<UserDTO> userDTO){
        List<User> userList = new ArrayList<>();
        List<UserDTO> userDTOList = new ArrayList<>();
        userDTO.forEach(userD ->{
            User user = mapUserDto(userD);
            userList.add(user);
        });
        List<User> returnedUserList = repository.saveAll(userList);
        returnedUserList.forEach(user -> {
            UserDTO userDTO1 = mapUser(user);

            userDTOList.add(userDTO1);
        });
        return userDTOList;
    }

    @Override
    public List<UserDTO> getUser(){
        List<UserDTO> userDTOList = new ArrayList<>();
        List<User> userList = repository.findAll();
        userList.forEach(user ->{
            UserDTO userDTO = mapUser(user);
            userDTOList.add(userDTO);
        });
        return userDTOList;
    }
    @Override
    public UserDTO getUserById(int id){
        User user = repository.findById(id).orElse(null);
        UserDTO userDTO = mapUser(user);
        return userDTO;
    }
    @Override
    public UserDTO getUserByName(String name){
        User user = repository.findByUserName(name);
        UserDTO userDTO = new UserDTO();
        if(user != null){
            userDTO = mapUser(user);
        }
        return userDTO;
    }
    @Override
    public String deleteUser(int id){
        repository.deleteById(id);
        return "User removed ||" + id;
    }
    @Override
    public UserDTO updateUser(UserDTO userDTO){
        User existingUser=repository.findById(userDTO.getId()).orElse(null);
        existingUser.setUserName(userDTO.getUserName());
        existingUser.setRole(userDTO.getRole());
        existingUser.setLocation(userDTO.getLocation());
        existingUser.setCompany(userDTO.getCompany());
        existingUser.setEmployeeCode(userDTO.getEmployeeCode());
        User user = repository.save(existingUser);
        UserDTO userDTOo = mapUser(user);
        return userDTOo;
    }

    private UserDTO mapUser(User user){
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setUserName(user.getUserName());
        userDTO.setRole(user.getRole());
        userDTO.setEmployeeCode(user.getEmployeeCode());
        userDTO.setCompany(user.getCompany());
        userDTO.setLocation(user.getLocation());
        return userDTO;
    }
    private User mapUserDto(UserDTO userDTO){
        User user = new User();
        user.setId(userDTO.getId());
        user.setUserName(userDTO.getUserName());
        user.setRole(userDTO.getRole());
        user.setEmployeeCode(userDTO.getEmployeeCode());
        user.setCompany(userDTO.getCompany());
        user.setLocation(userDTO.getLocation());
        return user;
    }
}
