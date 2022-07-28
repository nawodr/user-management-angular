package com.api.user_management_ms.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDTO {

    private int id;

    private String userName;

    private String role;

    private String location;

    private String company;

    private String employeeCode;
}
