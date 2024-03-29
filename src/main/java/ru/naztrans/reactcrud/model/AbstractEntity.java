package ru.naztrans.reactcrud.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.util.UUID;

@MappedSuperclass
@Getter
@Setter
public abstract class AbstractEntity {
    @Id
    private String id = UUID.randomUUID().toString();
}
