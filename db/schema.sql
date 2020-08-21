DROP DATABASE IF EXISTS Project3Dev;
CREATE DATABASE Project3Dev;

USE Project3Dev;

Create Table Censuscounties (
    geoid VARCHAR(100),
    county VARCHAR(100),
    totalpopulation INT,
    totalpopulationme INT,
    totallaborforce INT,
    totallaborforcepme DECIMAL,
    employed INT,
    employedpme DECIMAL,
    unemployed INT,
    unemployedpme DECIMAL,
    medianincome INT,
    medianincomeme INT,
    meanincome INT,
    meanincomeme INT,
    medianmaleincome INT,
    medianmaleincomeme INT,
    medianfemaleincome INT,
    medianfemaleincomeme INT,
    insured INT,
    insuredpme DECIMAL,
    uninsured INT,
    uninsuredpme DECIMAL,
    belowpovertyline DECIMAL,
    belowpovertylinepme DECIMAL,
    
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
);

Create Table BallotData (
  election VARCHAR(100),
  officeType VARCHAR(100),
  candidate VARCHAR(100),
  county VARCHAR(100),
  email VARCHAR(100),
  party VARCHAR(100),
  city VARCHAR(100),
  occupation VARCHAR(100),
  isIncumbent VARCHAR(100),
  id INTEGER PRIMARY KEY AUTO_INCREMENT
);


