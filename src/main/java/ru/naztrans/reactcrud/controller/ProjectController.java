package ru.naztrans.reactcrud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.naztrans.reactcrud.model.Project;
import ru.naztrans.reactcrud.service.ProjectService;

import java.util.List;

@RestController
@RequestMapping("/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @GetMapping
    public List<Project> getAllProjects(){
        return projectService.getAll();
    }

    @GetMapping("/{id}")
    public Project getProject(@PathVariable("id") String projectId){
       return projectService.getById(projectId);
    }

    @DeleteMapping("/{id}")
    public void removeProject(@PathVariable("id") String projectId){
        projectService.removeById(projectId);
    }

    @PostMapping
    public void addProject(@RequestBody Project project){
        projectService.saveProject(project);
    }

    @PutMapping
    public void updateProject(@RequestBody Project project) {
        projectService.saveProject(project);
    }
}
