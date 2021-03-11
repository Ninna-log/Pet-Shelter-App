package com.mywork.petshelter;

import com.mywork.petshelter.model.Pet;
import com.mywork.petshelter.repositories.PetRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PetShelterApplication {

	public static void main(String[] args) {

		SpringApplication.run(PetShelterApplication.class, args);
	}

	@Bean
	public CommandLineRunner initData(PetRepository petRepository) {
		return (args) -> {

			// adding test data
			Pet pet1 = new Pet("Kitty", 4);
			Pet pet2 = new Pet("Pelusa", 8);
			Pet pet3 = new Pet("Burusa", 6);
			Pet pet4 = new Pet("Kira", 12);
			Pet pet5 = new Pet("Lola", 10);
			Pet pet6 = new Pet("Pepito", 3);

			// saving a couple of pets
			petRepository.save(pet1);
			petRepository.save(pet2);
			petRepository.save(pet3);
			petRepository.save(pet4);
			petRepository.save(pet5);
			petRepository.save(pet6);
		};
	}
}