package ru.naztrans.reactcrud.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Objects;

@RestController
@RequestMapping("/auth")
public class LoginController {
    @PostMapping("/login")
    public String login(@RequestParam("login") String login, @RequestParam("password") String password, HttpServletResponse response, HttpSession session) {
        if (Objects.equals(login, "sk") && Objects.equals(password, "ssPass")) {
            session.setAttribute("username", "sk");
            return HttpStatus.OK.toString();
        }
        else {
            session.invalidate();
            response.setStatus(HttpStatus.BAD_REQUEST.value());
            return "Всё плохо";
        }
    }
}
