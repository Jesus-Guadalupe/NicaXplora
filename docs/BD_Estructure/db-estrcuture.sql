create database NicaXplora;

use dbnicaxplora;

create table users 
(
    id int auto_increment primary key,
    name varchar(100) not null,
    email varchar(100) unique not null,
    password varchar(10) not null,
    country varchar(100) not null
);

create table destinations 
(
    id int auto_increment primary key not null,
    name varchar(100) not null,
    city varchar(100) not null,
    description text not null,
    category enum('natural','cultural','arquitectonico','documental') not null,
    opening_hours varchar(100) not null,
    entry_price double not null,
    image_url varchar(500)
);

create table vehicles 
(
    id int auto_increment primary key,
    type enum('autobus', 'Urbano') not null,
    capacity int
);


create table routes 
(
    id int auto_increment primary key,
    destination_id int not null,  
    vehicle_id int not null,      
    start_point varchar(100) not null,
    end_point varchar(100) not null,
    start_city varchar(100) not null,
    end_city varchar(100) not null,
    travel_time varchar(100) not null,
    fare double not null,
    route_type enum('local','interlocal') default 'local',
    foreign key (destination_id) references destinations(id),
    foreign key (vehicle_id) references vehicles(id)
);


create table reviews (
    id int auto_increment primary key,
    user_id int not null,
    destination_id int not null,
    rating int not null,
    comment text,
    created_at timestamp default current_timestamp,
    foreign key (user_id) references users(id),
    foreign key (destination_id) references destinations(id)
);


create table chatbot 
(
    id int auto_increment primary key,
    question varchar(255) not null,
    answer text not null,
    category varchar(100)
);


create table itineraries (
    id int auto_increment primary key,
    user_id int not null,
    start_date date not null,
    end_date date not null,
    notes text,
    foreign key (user_id) references users(id)
);


create table itinerary_details (
    id int auto_increment primary key,
    itinerary_id int not null,
    destination_id int not null,
    vehicle_id int not null,
    day_number int not null, 
    notes text,
    foreign key (itinerary_id) references itineraries(id),
    foreign key (destination_id) references destinations(id),
    foreign key (vehicle_id) references vehicles(id)
);

-- PRUEBA DE INSERCION DE VALORES DESDE LA BASE DE DATOS SIGNUP PARA INICIAR SESION
-- TAMBIEN PUEDES HACERLO DESDE EL SIGNUP DE LA APP WEB (FRONTEND)
insert into users (name, email, password, country) values 
('Tu Nombre','ejemplo@gmail.com','Contraseña','Pais'),