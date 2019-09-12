package ru.naztrans.reactcrud.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import ru.naztrans.reactcrud.model.Project;
import ru.naztrans.reactcrud.repository.ProjectRepository;

import java.util.Date;

@Component
public class DBFiller implements CommandLineRunner {

   @Autowired
   private ProjectRepository projectRepository;

    @Override
    public void run(String... args) throws Exception {
        for (int i = 1; i <= 17; i++) {
            projectRepository.save(new Project("Проект " + i, "Описание проекта " + i, new Date(123, 7, 17)));
        }
    }
}
