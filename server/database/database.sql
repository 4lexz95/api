create database gamesdb2022;
use gamesdb2022;

create table games(
    id int not null auto_increment primary key,
    title varchar(255),
    description varchar(255),
    image varchar(255),
    create_at timestamp default current_timestamp
);

alter user 'root' identified with mysql_native_password by 'root';
flush privileges
