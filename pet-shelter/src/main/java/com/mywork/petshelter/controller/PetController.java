package com.mywork.petshelter.controller;

import com.mywork.petshelter.repositories.PetRepository;
import com.mywork.petshelter.model.Pet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/pets") // this is a good practice
public class PetController {

    @Autowired
    private PetRepository petRepository;

    @GetMapping  // how to get the list of pets
    public ResponseEntity<List<Pet>> getAll(){ //returns a list of Pet

        return new ResponseEntity<>((petRepository.findAll()), HttpStatus.OK);
    }

    @PostMapping // receives a pet object in order to create one
    public ResponseEntity<Long> create(@RequestBody Pet pet){
        Pet newPet = petRepository.save(pet);
        return new ResponseEntity<>(newPet.getId(), HttpStatus.CREATED);
    }
}
