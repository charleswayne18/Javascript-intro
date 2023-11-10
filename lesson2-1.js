const courseUnits = {
    English: 2,
    French: 1,
    Mathematics: 4,
    Physics: 4,
    Chemistry: 4,
    Biology: 3,
    Workshop: 1,
    TechnicalDrawing: 1,
    Humanities: 1,
};

const grades = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
    F: 0,
};

const userGrades = {};

userGrades.English = prompt('Enter English Grade');
userGrades.French = prompt('Enter French Grade');
userGrades.Mathematics = prompt('Enter Mathematics Grade');
userGrades.Physics = prompt('Enter Physics Grade');
userGrades.Chemistry = prompt('Enter Chemistry Grade');
userGrades.Biology = prompt('Enter Biology Grade');
userGrades.Workshop = prompt('Enter Workshop Grade');
userGrades.TechnicalDrawing = prompt('Enter Technical Drawing Grade');
userGrades.Humanities = prompt('Enter Humanities Grade');

const EnglishScore = courseUnits.English * grades[userGrades.English];
const FrenchScore = courseUnits.French * grades[userGrades.French];
const MathematicsScore = courseUnits.Mathematics * grades[userGrades.Mathematics];
const PhysicsScore = courseUnits.Physics * grades[userGrades.Physics];
const ChemistryScore = courseUnits.Chemistry * grades[userGrades.Chemistry];
const BiologyScore = courseUnits.Biology * grades[userGrades.Biology];
const WorkshopScore = courseUnits.Workshop * grades[userGrades.Workshop];
const TechnicalDrawingScore = courseUnits.TechnicalDrawing * grades[userGrades.TechnicalDrawing];
const HumanitiesScore = courseUnits.Humanities * grades[userGrades.Humanities];

const totalScore = EnglishScore + FrenchScore + MathematicsScore + PhysicsScore + ChemistryScore + BiologyScore + WorkshopScore + TechnicalDrawingScore + HumanitiesScore ;

const totalUnits = courseUnits.English + courseUnits.French + courseUnits.Mathematics + courseUnits.Physics + courseUnits.Chemistry + courseUnits.Biology + courseUnits.Workshop + courseUnits.TechnicalDrawing + courseUnits.Humanities ;

const gpa = totalScore / totalUnits

document.write(gpa);
