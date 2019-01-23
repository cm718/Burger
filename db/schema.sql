-- Create the database
Create Database burgers_db;

-- Use the database
use burgers_db;

-- Create and set up the table for data
Create table burgers(
    id int not null auto_increment primary key,
    burger_name varchar(50) not null,
    devoured boolean default 0
)