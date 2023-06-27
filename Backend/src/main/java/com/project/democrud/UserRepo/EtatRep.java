package com.project.democrud.UserRepo;


import com.project.democrud.entity.Etat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EtatRep extends JpaRepository<Etat, Long> {
}
