package ru.naztrans.reactcrud.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Project extends AbstractEntity {
    private String name;
    private String description;

    @Temporal(TemporalType.DATE)
    private Date finishDate;

    @Override
    public String toString() {
        return "Project{" +
                "id='"+ getId()+ '\'' +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", finishDate=" + finishDate +
                '}';
    }
}
