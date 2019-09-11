package ru.naztrans.reactcrud.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Objects;

@RestController
@RequestMapping("/auth")
public class LoginController {
    @PostMapping(path = "/login", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public String login(@RequestParam("login") String login, @RequestParam("password") String password, HttpServletResponse response, HttpSession session) {
        if (Objects.equals(login, "sk") && Objects.equals(password, "skPass")) {
            session.setAttribute("username", "sk");
            return HttpStatus.OK.toString();
        }
        else {
            session.invalidate();
            response.setStatus(HttpStatus.BAD_REQUEST.value());
            return "Всё плохо";
        }
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return HttpStatus.OK.toString();
    }
}
