package ru.naztrans.reactcrud.controller;

import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.Random;

@RestController
public class MainController {
    @GetMapping("/random")
    public String getRandom(HttpServletResponse response, @CookieValue(value = "lastRandom") String lastRandom){
        Random random = new Random();
        int randomI = random.nextInt(100);
        if(lastRandom!=null && !lastRandom.isEmpty()){
            randomI=Integer.parseInt(lastRandom)+2;
            if(randomI>100) randomI = 0;
        }
        Cookie cookie = new Cookie("lastRandom", Integer.toString(randomI));
        response.addCookie(cookie);
        return Integer.toString(randomI);
    }
}
