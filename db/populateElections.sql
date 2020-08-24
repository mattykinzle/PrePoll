UPDATE ElectionData SET county = "" WHERE county IS null;

INSERT INTO Elections (election, officeType, county)
SELECT DISTINCT (election, officeType, county) FROM ElectionData;

INSERT INTO Candidates (ElectionId, candidate, email, party, city, occupation, isIncumbent)
SELECT Elections.ElectionId, ElectionData.candidate, ElectionData.email, ElectionData.party, ElectionData.city, ElectionData.occupation, ElectionData.isIncumbent
FROM Elections INNER JOIN ElectionData ON Elections.election = ElectionData.election AND Elections.officeType = ElectionData.officeType AND Elections.county = ElectionData.county;