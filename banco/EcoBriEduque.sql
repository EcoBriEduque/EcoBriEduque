CREATE DATABASE EcoBriEduque;
USE EcoBriEduque;

-- Tabela para armazenar informações dos usuários
CREATE TABLE Usuario (
    idUsuario INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    cpf CHAR(11) NOT NULL UNIQUE,
    nascimento DATE NOT NULL,
    genero BOOLEAN NOT NULL,
    telefone CHAR(14) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado CHAR(2) NOT NULL,
    tipoUsuario BOOLEAN NOT NULL
);

-- Tabela para armazenar informações sobre o lixo
CREATE TABLE Lixo (
    idLixo INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(100) NOT NULL,
    classificacao VARCHAR(100) NOT NULL
);

-- Tabela para armazenar destinos de descarte
CREATE TABLE Destino (
    idDestino INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    localizacao VARCHAR(100) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(100) NOT NULL
);

-- Tabela para armazenar informações de localização
CREATE TABLE Localizacao (
    idLocalizacao INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    rua VARCHAR(100) NOT NULL,
    numero INT NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    complemento VARCHAR(100),
    cep CHAR(9) NOT NULL
);

-- Tabela para armazenar a relação entre coletores e destinos
CREATE TABLE Coleta (
    idColetor INT NOT NULL,
    idDestino INT NOT NULL,
    idLixo INT NOT NULL,
    PRIMARY KEY (idColetor, idDestino, idLixo),
    FOREIGN KEY (idColetor) REFERENCES Usuario(idUsuario),
    FOREIGN KEY (idDestino) REFERENCES Destino(idDestino),
    FOREIGN KEY (idLixo) REFERENCES Lixo(idLixo)
);

-- Tabela para armazenar a relação entre separadores e lixo
CREATE TABLE Separacao (
    idSeparador INT NOT NULL,
    idLixo INT NOT NULL,
    PRIMARY KEY (idSeparador, idLixo),
    FOREIGN KEY (idSeparador) REFERENCES Usuario(idUsuario),
    FOREIGN KEY (idLixo) REFERENCES Lixo(idLixo)
);
