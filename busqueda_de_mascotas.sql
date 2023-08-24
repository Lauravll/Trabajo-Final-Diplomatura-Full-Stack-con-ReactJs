-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 23-08-2023 a las 19:18:11
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `busqueda_de_mascotas`
--
-- Borrar la base de datos si existe
DROP DATABASE IF EXISTS `busqueda_de_mascotas`;

-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS `busqueda_de_mascotas`;
USE `busqueda_de_mascotas`;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactos`
--

DROP TABLE IF EXISTS `contactos`;
CREATE TABLE IF NOT EXISTS `contactos` (
  `id_contacto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `esDuenio` tinyint(1) DEFAULT NULL,
  `id_ubicacion` int DEFAULT NULL,
  `id_usuario` int DEFAULT NULL,
  PRIMARY KEY (`id_contacto`),
  UNIQUE KEY `email` (`email`),
  KEY `id_ubicacion` (`id_ubicacion`),
  KEY `id_usuario` (`id_usuario`)
);

--
-- Volcado de datos para la tabla `contactos`
--

INSERT INTO `contactos` (`id_contacto`, `nombre`, `apellido`, `email`, `telefono`, `esDuenio`, `id_ubicacion`, `id_usuario`) VALUES
(1, 'Maria', 'Gomez', 'maria@gmail.com', '44444442', 0, 2, 0),
(2, 'Juan', 'Gonzales', 'juaaan@gmail.com', '44444444', 1, 1, 0),
(3, 'Laura', 'Perez', 'laura.perez@hotmail.com', '4234', 1, 9, NULL),
(16, 'Hugo', 'Benitez', 'hbenitez@gmail.com', '4234', 0, 24, NULL),
(15, 'Valentin', 'Vazquez', 'valen@gmail.com', '131231', 0, 23, NULL),
(14, 'Juan', 'Gomez', 'juan_gomez@hotmail.com', '12354234', 0, 22, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especies`
--

DROP TABLE IF EXISTS `especies`;
CREATE TABLE IF NOT EXISTS `especies` (
  `id_especie` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id_especie`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `especies`
--

INSERT INTO `especies` (`id_especie`, `nombre`) VALUES
(1, 'Perro'),
(2, 'Gato'),
(3, 'Conejo'),
(4, 'Pájaro'),
(5, 'Hámster'),
(6, 'Tortuga');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localidades`
--

DROP TABLE IF EXISTS `localidades`;
CREATE TABLE IF NOT EXISTS `localidades` (
  `id_localidad` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) NOT NULL,
  `id_provincia` int NOT NULL,
  PRIMARY KEY (`id_localidad`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `localidades`
--

INSERT INTO `localidades` (`id_localidad`, `descripcion`, `id_provincia`) VALUES
(1, 'La Plata', 1),
(2, 'Mar del Plata', 1),
(3, 'Bahía Blanca', 1),
(4, 'Quilmes', 1),
(5, 'Lanús', 1),
(6, 'Avellaneda', 1),
(7, 'Morón', 1),
(8, 'Pilar', 1),
(9, 'San Isidro', 1),
(10, 'Tigre', 1),
(11, 'Córdoba', 1),
(12, 'Villa Carlos Paz', 1),
(13, 'Río Cuarto', 1),
(14, 'Alta Gracia', 1),
(15, 'San Francisco', 1),
(16, 'Villa María', 1),
(17, 'Jesús María', 1),
(18, 'Bell Ville', 1),
(19, 'Rio Tercero', 1),
(20, 'Morteros', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotas`
--

DROP TABLE IF EXISTS `mascotas`;
CREATE TABLE IF NOT EXISTS `mascotas` (
  `id_mascota` int NOT NULL AUTO_INCREMENT,
  `nombre_mascota` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `raza` varchar(50) DEFAULT NULL,
  `ojos` varchar(20) DEFAULT NULL,
  `pelaje_color` varchar(50) DEFAULT NULL,
  `pelaje_tipo` varchar(50) DEFAULT NULL,
  `tamanio` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `perdido` tinyint(1) DEFAULT NULL,
  `id_especie` int DEFAULT NULL,
  `id_contacto` int DEFAULT NULL,
  `fecha_perdido` date DEFAULT NULL,
  `fecha_registrado` date DEFAULT NULL,
  `otras_caracteristicas` text NOT NULL,
  `edad` int NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_mascota`),
  KEY `id_especie` (`id_especie`),
  KEY `id_contacto` (`id_contacto`)
);

--
-- Volcado de datos para la tabla `mascotas`
--

INSERT INTO `mascotas` (`id_mascota`, `nombre_mascota`, `raza`, `ojos`, `pelaje_color`, `pelaje_tipo`, `tamanio`, `perdido`, `id_especie`, `id_contacto`, `fecha_perdido`, `fecha_registrado`, `otras_caracteristicas`, `edad`, `img_id`) VALUES
(1, 'Dalmi', 'Dálmata', 'Marrones', 'Blanco con manchas', 'Corto', 'Chico', 1, 1, 1, '2023-08-01', '2023-07-30', '', 3, 'e8yhqfuudc9pc0luydtq'),
(2, 'Rocky', 'Sin raza', 'Marrones', 'Negro', 'Largo', 'Grande', NULL, 1, 2, '2023-08-10', '2023-08-05', '', 0, 'p5hycnlp8wivupsow4hs'),
(3, 'Reina', 'Siames', 'Azules', 'Marron y negro', 'Corto', 'Pequeño', NULL, 2, 3, '2023-07-20', '2023-07-15', '', 5, 'yxyjuli41xl6scmtmdj0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `img_id` (`img_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

DROP TABLE IF EXISTS `provincias`;
CREATE TABLE IF NOT EXISTS `provincias` (
  `id_provincia` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) NOT NULL,
  PRIMARY KEY (`id_provincia`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`id_provincia`, `descripcion`) VALUES
(1, 'Buenos Aires'),
(2, 'Catamarca'),
(3, 'Chaco'),
(4, 'Chubut'),
(5, 'Córdoba'),
(6, 'Corrientes'),
(7, 'Entre Ríos'),
(8, 'Formosa'),
(9, 'Jujuy'),
(10, 'La Pampa'),
(11, 'La Rioja'),
(12, 'Mendoza'),
(13, 'Misiones'),
(14, 'Neuquén'),
(15, 'Río Negro'),
(16, 'Salta'),
(17, 'San Juan'),
(18, 'San Luis'),
(19, 'Santa Cruz'),
(20, 'Santa Fe'),
(21, 'Santiago del Estero'),
(22, 'Tierra del Fuego'),
(23, 'Tucumán');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicaciones`
--

DROP TABLE IF EXISTS `ubicaciones`;
CREATE TABLE IF NOT EXISTS `ubicaciones` (
  `id_ubicacion` int NOT NULL AUTO_INCREMENT,
  `id_localidad` int DEFAULT NULL,
  `id_provincia` int DEFAULT NULL,
  `calle` varchar(100) DEFAULT NULL,
  `numero` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id_ubicacion`),
  KEY `id_localidad` (`id_localidad`),
  KEY `id_provincia` (`id_provincia`)
);

--
-- Volcado de datos para la tabla `ubicaciones`
--

INSERT INTO `ubicaciones` (`id_ubicacion`, `id_localidad`, `id_provincia`, `calle`, `numero`) VALUES
(1, 1, 1, 'Cerrito', '100'),
(2, 2, 1, '', ''),
(3, 2, 1, 'Ruben Dario', '32'),
(24, 1, 1, 'cerrito', '23'),
(23, 2, 1, 'cerrito', '23'),
(22, 2, 3, 'cerrito', '23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id_usuario`)
);

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `usuario`, `password`) VALUES
(1, 'Laura', '827ccb0eea8a706c4c34a16891f84e7b'),
(2, 'Laura', '827ccb0eea8a706c4c34a16891f84e7b');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
