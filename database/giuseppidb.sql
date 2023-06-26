-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-06-2023 a las 00:55:07
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `giuseppidb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignacionesjefessicarios`
--

CREATE TABLE `asignacionesjefessicarios` (
  `id` int(11) NOT NULL,
  `id_jefe` int(11) NOT NULL,
  `id_sicario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `asignacionesjefessicarios`
--

INSERT INTO `asignacionesjefessicarios` (`id`, `id_jefe`, `id_sicario`) VALUES
(1, 2, 4),
(2, 2, 5),
(3, 2, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `objetivos`
--

CREATE TABLE `objetivos` (
  `idobjetivos` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `idusuarios` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `objetivos`
--

INSERT INTO `objetivos` (`idobjetivos`, `descripcion`, `estado`, `idusuarios`) VALUES
(1, 'matar congresista', 0, 4),
(2, 'matar veneco', 0, 5),
(3, 'matar narcos', 1, 3),
(4, 'matar ladrones', 0, 2),
(5, 'matar politicos', 0, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idusuarios` int(11) NOT NULL,
  `nombre` varchar(150) DEFAULT NULL,
  `tipo` int(11) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusuarios`, `nombre`, `tipo`, `email`, `password`, `estado`) VALUES
(1, 'Grimaniel', 3, 'grimaniel@gmail.com', '$2b$10$oGtFtbdLDEIkBwpyuyddFO9b1HCdR1UkLEOMG/do4X08H/cYXxvfK', 1),
(2, 'Pedro', 2, 'user@gmail.com', '$2b$10$oGtFtbdLDEIkBwpyuyddFO9b1HCdR1UkLEOMG/do4X08H/cYXxvfK', 1),
(3, 'Jaimito', 1, 'jaimito@gmail.com', '$2b$10$oGtFtbdLDEIkBwpyuyddFO9b1HCdR1UkLEOMG/do4X08H/cYXxvfK', 1),
(4, 'Usuario1', 1, 'usuario1@example.com', '$2b$10$oGtFtbdLDEIkBwpyuyddFO9b1HCdR1UkLEOMG/do4X08H/cYXxvfK', 1),
(5, 'Usuario2', 1, 'usuario2@example.com', '$2b$10$oGtFtbdLDEIkBwpyuyddFO9b1HCdR1UkLEOMG/do4X08H/cYXxvfK', 1),
(6, 'Usuario3', 1, 'usuario3@example.com', '$2b$10$oGtFtbdLDEIkBwpyuyddFO9b1HCdR1UkLEOMG/do4X08H/cYXxvfK', 1),
(7, 'Usuario4', 1, 'usuario4@example.com', '$2b$10$oGtFtbdLDEIkBwpyuyddFO9b1HCdR1UkLEOMG/do4X08H/cYXxvfK', 1),
(8, 'Usuario5', 1, 'usuario5@example.com', '$2b$10$oGtFtbdLDEIkBwpyuyddFO9b1HCdR1UkLEOMG/do4X08H/cYXxvfK', 1),
(9, 'Usuario6', 1, 'usuario6@example.com', '$2b$10$oGtFtbdLDEIkBwpyuyddFO9b1HCdR1UkLEOMG/do4X08H/cYXxvfK', 1),
(10, 'Usuario7', 1, 'usuario7@example.com', '$2b$10$oGtFtbdLDEIkBwpyuyddFO9b1HCdR1UkLEOMG/do4X08H/cYXxvfK', 1),
(11, 'Usuario8', 1, 'usuario8@example.com', '$2b$10$oGtFtbdLDEIkBwpyuyddFO9b1HCdR1UkLEOMG/do4X08H/cYXxvfK', 1),
(12, 'jefe1', 2, 'usuario1@example.com', '$2b$10$oGtFtbdLDEIkBwpyuyddFO9b1HCdR1UkLEOMG/do4X08H/cYXxvfK', 1),
(13, 'jefe2', 2, 'usuario2@example.com', '$2b$10$oGtFtbdLDEIkBwpyuyddFO9b1HCdR1UkLEOMG/do4X08H/cYXxvfK', 1),
(14, 'anonymus', 1, 'juana@gmail.com', '$2b$10$CbUIDnMWO1wMha5GoeyU6eOXZ9LQwEj7aFOErKWkVssZiW21cHxMa', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asignacionesjefessicarios`
--
ALTER TABLE `asignacionesjefessicarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_jefe` (`id_jefe`),
  ADD KEY `id_sicario` (`id_sicario`);

--
-- Indices de la tabla `objetivos`
--
ALTER TABLE `objetivos`
  ADD PRIMARY KEY (`idobjetivos`),
  ADD KEY `idusuarios` (`idusuarios`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuarios`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asignacionesjefessicarios`
--
ALTER TABLE `asignacionesjefessicarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `objetivos`
--
ALTER TABLE `objetivos`
  MODIFY `idobjetivos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asignacionesjefessicarios`
--
ALTER TABLE `asignacionesjefessicarios`
  ADD CONSTRAINT `asignacionesjefessicarios_ibfk_1` FOREIGN KEY (`id_jefe`) REFERENCES `usuarios` (`idusuarios`),
  ADD CONSTRAINT `asignacionesjefessicarios_ibfk_2` FOREIGN KEY (`id_sicario`) REFERENCES `usuarios` (`idusuarios`);

--
-- Filtros para la tabla `objetivos`
--
ALTER TABLE `objetivos`
  ADD CONSTRAINT `objetivos_ibfk_1` FOREIGN KEY (`idusuarios`) REFERENCES `usuarios` (`idusuarios`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
