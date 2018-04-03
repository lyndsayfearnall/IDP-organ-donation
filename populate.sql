
drop table users;
create table users (
    id INT(6) unsigned auto_increment primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    email varchar(50) not null,
    password text not null
);

alter table users add unique (email);create table users (
    id INT(6) unsigned auto_increment primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    email varchar(50) not null,
    password text not null
);

alter table users add unique (email);   


create table sections (
    id INT(2) unsigned auto_increment primary key,
    heading varchar(144) not null,
    body text not null,
    updatedBy varchar(60)
)

ALTER TABLE sections add sectionNumber int(2) unique;

use organDonation;
INSERT INTO sections 
    (sectionNumber, heading, body, updatedBy)
VALUES (1, "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum sem et condimentum feugiat. Sed venenatis faucibus enim id lacinia. Sed dignissim fermentum ex, ac varius metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam diam, consectetur in consequat sed, auctor in ligula. Cras lobortis eu tellus a viverra. Fusce eu blandit orci. Nam nec dignissim leo. Vestibulum eros neque, vehicula in nunc at, commodo tincidunt nisl.", "Nicholas Lediet");


INSERT INTO sections 
    (sectionNumber, heading, body, updatedBy)
VALUES (2, "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum sem et condimentum feugiat. Sed venenatis faucibus enim id lacinia. Sed dignissim fermentum ex, ac varius metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam diam, consectetur in consequat sed, auctor in ligula. Cras lobortis eu tellus a viverra. Fusce eu blandit orci. Nam nec dignissim leo. Vestibulum eros neque, vehicula in nunc at, commodo tincidunt nisl.", "Nicholas Lediet");


INSERT INTO sections 
    (sectionNumber, heading, body, updatedBy)
VALUES (3, "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum sem et condimentum feugiat. Sed venenatis faucibus enim id lacinia. Sed dignissim fermentum ex, ac varius metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam diam, consectetur in consequat sed, auctor in ligula. Cras lobortis eu tellus a viverra. Fusce eu blandit orci. Nam nec dignissim leo. Vestibulum eros neque, vehicula in nunc at, commodo tincidunt nisl.", "Nicholas Lediet");


INSERT INTO sections 
    (sectionNumber, heading, body, updatedBy)
VALUES (4, "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum sem et condimentum feugiat. Sed venenatis faucibus enim id lacinia. Sed dignissim fermentum ex, ac varius metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam diam, consectetur in consequat sed, auctor in ligula. Cras lobortis eu tellus a viverra. Fusce eu blandit orci. Nam nec dignissim leo. Vestibulum eros neque, vehicula in nunc at, commodo tincidunt nisl.", "Nicholas Lediet")
;

INSERT INTO sections 
    (sectionNumber, heading, body, updatedBy)
VALUES (5, "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum sem et condimentum feugiat. Sed venenatis faucibus enim id lacinia. Sed dignissim fermentum ex, ac varius metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam diam, consectetur in consequat sed, auctor in ligula. Cras lobortis eu tellus a viverra. Fusce eu blandit orci. Nam nec dignissim leo. Vestibulum eros neque, vehicula in nunc at, commodo tincidunt nisl.", "Nicholas Lediet");


INSERT INTO sections 
    (sectionNumber, heading, body, updatedBy)
VALUES (6, "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum sem et condimentum feugiat. Sed venenatis faucibus enim id lacinia. Sed dignissim fermentum ex, ac varius metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam diam, consectetur in consequat sed, auctor in ligula. Cras lobortis eu tellus a viverra. Fusce eu blandit orci. Nam nec dignissim leo. Vestibulum eros neque, vehicula in nunc at, commodo tincidunt nisl.", "Nicholas Lediet");


INSERT INTO sections 
    (sectionNumber, heading, body, updatedBy)
VALUES (7, "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum sem et condimentum feugiat. Sed venenatis faucibus enim id lacinia. Sed dignissim fermentum ex, ac varius metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam diam, consectetur in consequat sed, auctor in ligula. Cras lobortis eu tellus a viverra. Fusce eu blandit orci. Nam nec dignissim leo. Vestibulum eros neque, vehicula in nunc at, commodo tincidunt nisl.", "Nicholas Lediet");

