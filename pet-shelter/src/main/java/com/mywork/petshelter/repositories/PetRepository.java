package com.mywork.petshelter.repositories;

import com.mywork.petshelter.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PetRepository extends JpaRepository<Pet,Long> {
}
