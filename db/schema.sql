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

