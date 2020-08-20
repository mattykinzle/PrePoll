DROP DATABASE IF EXISTS Ballot;
CREATE DATABASE Ballot;

Use Ballot;

Create Table BallotData (
  election VARCHAR(100),
  officeType VARCHAR(100),
  candidate VARCHAR(100),
  county VARCHAR(100),
  email VARCHAR(100),
  party VARCHAR(100),
  city VARCHAR(100),
  occupation VARCHAR(100),
  isIncumbent BOOLEAN,
  id INTEGER PRIMARY KEY AUTO_INCREMENT
);
