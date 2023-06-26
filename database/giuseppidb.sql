-- Creación de la base de datos
CREATE DATABASE giuseppidb;

CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  tipo TINYINT NOT NULL,
  estado TINYINT NOT NULL
);

