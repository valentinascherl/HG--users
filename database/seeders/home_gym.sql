-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema home_gym
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema home_gym
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `home_gym` DEFAULT CHARACTER SET utf8mb4 ;
USE `home_gym` ;

-- -----------------------------------------------------
-- Table `home_gym`.`carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_gym`.`carrito` (
  `carrito_id` INT(11) NOT NULL AUTO_INCREMENT,
  `cliente_id` INT(11) NULL DEFAULT NULL,
  `cantidad` VARCHAR(45) NULL DEFAULT NULL,
  `producto` VARCHAR(45) NULL DEFAULT NULL,
  `precio` VARCHAR(45) NULL DEFAULT NULL,
  `precioTotal` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`carrito_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `home_gym`.`producto_carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_gym`.`producto_carrito` (
  `producto_id` INT(11) NOT NULL,
  `carrito_id` INT(11) NOT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `home_gym`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_gym`.`productos` (
  `producto_id` INT(11) NOT NULL,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  `descripcion` VARCHAR(300) NULL DEFAULT NULL,
  `marca` VARCHAR(45) NULL DEFAULT NULL,
  `modelo` VARCHAR(45) NULL DEFAULT NULL,
  `tamano` VARCHAR(45) NULL DEFAULT NULL,
  `categoria` VARCHAR(45) NULL DEFAULT NULL,
  `descuento` VARCHAR(45) NULL DEFAULT NULL,
  `seccion_id` INT(11) NULL DEFAULT NULL,
  `precio` VARCHAR(45) NULL DEFAULT NULL,
  `usuario_id` INT(11) NULL DEFAULT NULL,
  `imagen` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`producto_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `home_gym`.`seccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_gym`.`seccion` (
  `seccion_id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`seccion_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `home_gym`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_gym`.`usuarios` (
  `usuario_id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NULL DEFAULT NULL,
  `apellido` VARCHAR(20) NULL DEFAULT NULL,
  `avatar` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(35) NULL DEFAULT NULL,
  `contrasena` VARCHAR(45) NULL DEFAULT NULL,
  `domicilio` VARCHAR(45) NULL DEFAULT NULL,
  `ciudad` VARCHAR(45) NULL DEFAULT NULL,
  `departamento` VARCHAR(20) NULL DEFAULT NULL,
  `codigoPostal` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`usuario_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
