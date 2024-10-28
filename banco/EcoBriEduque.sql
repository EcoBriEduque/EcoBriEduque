create database EcoBriEduque;
use EcoBriEduque;

create table Usuario(
	idUsuario int auto_increment not null primary key,
    nome varchar(100) not null,
    sobrenome varchar(100) not null,
    email varchar(100) not null unique,
    cpf char(11) not null unique,
    nascimento date not null,
    genero bool not null,
    telefone char(14) not null,
    cidade varchar(50) not null,
    estado char(2) not null,
    tipoUsuario bool not null
);

create table Lixo(
	idLixo int auto_increment not null primary key,
    nome varchar(100) not null,
    tipo varchar(100) not null,
    classificacao varchar(100) not null
);

create table Destino(
	idDestino int auto_increment not null primary key,
    localizacao varchar(100) not null,
    nome varchar(100) not null,
     tipo varchar(100) not null
);

create table Localizacao(
	idLocalizacao int auto_increment not null primary key,
    rua varchar(100) not null,
    numero int not null,
    bairro varchar(100) not null,
    complemento varchar(100) not null, 
    cep char(9) not null
);