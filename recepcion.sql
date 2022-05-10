-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-05-2022 a las 20:14:39
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recepcion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

CREATE TABLE `login` (
  `Id` int(11) NOT NULL,
  `Cedula` varchar(50) NOT NULL,
  `Usuario` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Estado` varchar(5) NOT NULL,
  `Tipo` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `login`
--

INSERT INTO `login` (`Id`, `Cedula`, `Usuario`, `Password`, `Estado`, `Tipo`) VALUES
(13, '1151408', 'Alexander', '$2a$10$Ffw7OYAZ6slRhABnSdBHAOz0h48PUfN1qPF9jP3x0sw9H2a3ELGOi', '1', 'Admin'),
(15, '1151833', 'Jhoner', '$2a$10$szfQzrbMseZKFqW9hRLg2O7WJvfvCzxIL2WxMxgkuU86dRIY6s7fa', '1', 'Admin'),
(16, '1151600', 'Carlos Gomez', '$2a$10$bL/9EFL/AZxuS4A.dZsWeOOMBRDMpAYjj5Yc/3AIPYMaZVJxULQOS', '1', 'Admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('FSrPF9gu9K-1pAsPDukTSHN7rInsaT30', 1638477815, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":16}}'),
('PTSeBMksiMoxac5xkn3RWGMcWohbgJm_', 1652120036, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":13}}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `Cedula` varchar(50) NOT NULL,
  `Nombre` varchar(70) NOT NULL,
  `Edad` varchar(10) NOT NULL,
  `Foto` varchar(100) DEFAULT NULL,
  `Huella` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Cedula`, `Nombre`, `Edad`, `Foto`, `Huella`) VALUES
('1151212', 'Rafael', '24', NULL, NULL),
('1151408', 'Camilo A. Jauregui', '24', 'http://localhost/img/EiubTaTWkAID8tg.jpg', NULL),
('1151600', 'Carlos Gomez', '23', 'http://localhost/img/pp (1).jfif', NULL),
('1151833', 'Jhoner Silva', '22', 'http://localhost/img/pp.jfif', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Cedula` (`Cedula`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Cedula`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `login`
--
ALTER TABLE `login`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `login_ibfk_1` FOREIGN KEY (`Cedula`) REFERENCES `usuario` (`Cedula`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
