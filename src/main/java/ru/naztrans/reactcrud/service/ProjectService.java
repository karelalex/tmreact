package ru.naztrans.reactcrud.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.naztrans.reactcrud.model.Project;
import ru.naztrans.reactcrud.repository.ProjectRepository;

import java.util.List;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public List<Project> getAll(){
        return projectRepository.findAll();
    }
}
