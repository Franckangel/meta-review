-- Drop the table if it already exists
DROP TABLE IF EXISTS Review CASCADE ;
DROP TABLE IF EXISTS Users CASCADE ;
DROP TABLE IF EXISTS Film CASCADE ;

-- Create a table to store film data


CREATE TABLE Film (
   id INT PRIMARY KEY,
   name VARCHAR(255),
   synopsis TEXT,
   director VARCHAR(255),
   genre VARCHAR(255),
   release_date VARCHAR(20),
   image VARCHAR(255)
);

CREATE TABLE Users (
   id SERIAL PRIMARY KEY,
   name VARCHAR(255),
   pseudo VARCHAR(255),
   is_admin BOOLEAN
);


CREATE TABLE Review (
    id SERIAL PRIMARY KEY,
    text_area TEXT NOT NULL,
    score INTEGER NOT NULL,
    film_id INTEGER REFERENCES Film(id),
    user_id INTEGER REFERENCES Users(id)
);


