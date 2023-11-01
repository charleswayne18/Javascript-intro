const a = prompt("First-name");
const b = prompt("Last-name");
const c = prompt("Middle-name");
const d = prompt("Date Of Birth");
const e = prompt("Marital status");
const f = prompt("Weight");
const g = prompt("Height");
const h = prompt("Highest Academic Qualification");
const i = prompt("Identification number");

const x = Number(prompt("Enter Your Age"));

let ageClassification;


if (x >= 0 && x <= 7) {
    ageClassification = "Toddler";
} else if (x >= 8 && x <= 12) {
    ageClassification = "Adolescent";
} else if (x >= 13 && x <= 19) {
    ageClassification = "Teenager";
} else if (x >= 20 && x <= 25) {
    ageClassification = "Young Adult";
} else if (x >= 26 && x <= 35) {
    ageClassification = "Adult";
} else if (x >= 36 && x <= 55) {
    ageClassification = "Midlife Crisis";
} else {
    ageClassification = "Ancestor";
}    


let personalInformation = { 
    FirstName: a,
    LastName: b, 
    MiddleName: c,
    DateOfBirth: d, 
    MaritalStatus: e,
    Weight:f,
    Height: g,
    HighestAcademicQualification: h,
    IdentificationNumber: i,
    AgeClassification: ageClassification,
};

console.log(personalInformation);








