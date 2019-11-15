DROP DATABASE IF EXISTS cslogger;
CREATE DATABASE cslogger;

\c cslogger;

CREATE TABLE users
(
 id SERIAL PRIMARY KEY,
 first_name VARCHAR NOT NULL,
 middle_name VARCHAR,
 last_name VARCHAR NOT NULL,
 start_date date DEFAULT CURRENT_TIMESTAMP,
 total_hours INTEGER NOT NULL
);

CREATE TABLE log
(
 id SERIAL PRIMARY KEY,
 entry_date date NOT NULL,
 user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
 start_time TIME NOT NULL,
 end_time TIME NOT NULL,
 accumulative_hours INTEGER NOT NULL,
 notes TEXT
);





