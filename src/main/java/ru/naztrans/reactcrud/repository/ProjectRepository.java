package ru.naztrans.reactcrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.naztrans.reactcrud.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, String> {

}
