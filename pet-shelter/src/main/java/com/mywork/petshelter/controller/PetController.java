package com.mywork.petshelter.controller;

import com.mywork.petshelter.repositories.PetRepository;
import com.mywork.petshelter.model.Pet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/pets") // this is a good practice
public class PetController {

    @Autowired
    private PetRepository petRepository;

    @GetMapping  // how to get the list of pets
    public ResponseEntity<List<Pet>> getAll(){ //returns a list of Pet

        return new ResponseEntity<>((petRepository.findAll()), HttpStatus.OK);
    }

    @GetMapping("{petId}")
    public ResponseEntity<Pet> getById(@PathVariable Long petId){
        return new ResponseEntity<>(petRepository.findById(petId).get(), HttpStatus.OK);
    }

    @PutMapping("{petId}")
    public ResponseEntity<String> updatingPet(@PathVariable Long petId, @RequestBody Pet pet){
        Optional<Pet> optionalPet = petRepository.findById(petId);
        optionalPet.ifPresent((x) -> {
            x.setName(pet.getName());
            x.setAge(pet.getAge());
            petRepository.save(x);
        });
            return new ResponseEntity<>("Pet successfully updated", HttpStatus.OK);
    }

    @PostMapping // receives a pet object in order to create one
    public ResponseEntity<Long> create(@RequestBody Pet pet){
        Pet newPet = petRepository.save(pet);
        return new ResponseEntity<>(newPet.getId(), HttpStatus.CREATED);
    }

    @DeleteMapping("{petId}") // receives an id that travels with the url
    public ResponseEntity<String> delete(@PathVariable Long petId){
        Optional<Pet> optionalPet = petRepository.findById(petId);

        if (optionalPet.isPresent()) {
            petRepository.deleteById(petId);
            return new ResponseEntity<>("Pet successfully eliminated", HttpStatus.OK);
        }else {
            return new ResponseEntity<>("Pet doesn't exists", HttpStatus.NOT_FOUND);
        }
    }
}
