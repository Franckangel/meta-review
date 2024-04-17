-- Drop the table if it already exists
DROP TABLE IF EXISTS Review CASCADE ;
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

/*CREATE TABLE "User" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    pseudo VARCHAR(255),
    isAdmin BOOLEAN,
    review_id INTEGER,
    FOREIGN KEY (review_id) REFERENCES Review(id)
);
*/