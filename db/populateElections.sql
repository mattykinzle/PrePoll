USE Project3Dev;

-- UPDATE ElectionData SET county = "" WHERE county IS null;

INSERT INTO Elections (office, officeType, county)
SELECT DISTINCT ElectionData.office, ElectionData.officeType, ElectionData.county FROM ElectionData;

INSERT INTO Candidates (ElectionId, candidate, email, party, city, occupation, isIncumbent)
SELECT Elections.id, ElectionData.candidate, ElectionData.email, ElectionData.party, ElectionData.city, ElectionData.occupation, ElectionData.isIncumbent
FROM Elections INNER JOIN ElectionData ON Elections.office = ElectionData.office AND Elections.officeType = ElectionData.officeType AND Elections.county = ElectionData.county;