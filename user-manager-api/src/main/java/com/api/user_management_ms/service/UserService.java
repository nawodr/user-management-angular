package com.api.user_management_ms.service;

import com.api.user_management_ms.dto.UserDTO;

import java.util.List;

public interface UserService {

    void saveUser(UserDTO user);

    List<UserDTO> saveUsers(List<UserDTO> user);

    List<UserDTO> getUser();

    UserDTO getUserById(int id);

    UserDTO getUserByName(String name);

    String deleteUser(int id);

    UserDTO updateUser(UserDTO user);
}
