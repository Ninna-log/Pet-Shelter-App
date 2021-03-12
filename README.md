# Pet-Shelter-App
This is a Pet Shelter App where I mostly practice CRUD

Pet Shelter Application. 
This application was made as follows: 
Tools:
- IntelliJ IDEA was used as my Integrated Development Environment. 
- Gradle 6.7.1 Spring, and Spring dependencies like: Spring Data JPA, Spring Web, Spring Security and H2 database. 
- Java version "15.0.1" 

I used Spring Initializer to generate a Spring boot project with just what I need to start quickly. Configuring Gradle as my “project manager”, in order to automate my project: compile, pack and execute it through plugins, and to maintain my project uptdated with the latests libraries that I specified on it. And also, configuring Java as my back-end programming language, using the Java JDK version 15.0.1. Then configuring my project with dependencies like H2 as my database management system, that will be embedded in my application; JPA (Java Persistence API) as my connector to the database, without having to write database code directly; Spring MVC controller in order to use it’s Inversion of Control and Dependency Injection, and finally the Spring Security Module.First of all, as I’m creating a Pet Shelter, the main class is supposed to be Pet, with attributes like id, name and age. Then in order to create a table in the database with Pet as an entity with all it’s attributes, I used the @Entity notation, and notations like @id and many others to save instances of Pet in a persistence database, one that doesn´t disappear when my application stops running. Thanks to JPA and Spring Boot, this can be done by adding very little to the class definition.

