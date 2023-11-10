const student = {
    English:'',
    French: '',
    Mathematics:'',
    Physics:'',
    Chemistry:'',
    Biology:'',
    Workshop:'',
    TechnicalDrawing:'',
    Humanities:'',
};

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

student.English = prompt('Enter English Grade');
while ((student.English !== 'A') && (student.English !== 'B') && (student.English !== 'C') && (student.English !== 'D') && (student.English !== 'E') && (student.English !== 'F')) {
    student.English = prompt("Incorrect grade value. Please type in your appropraite grade");
}
student.French = prompt('Enter French Grade');
while ((student.French !== 'A') && (student.French !== 'B') && (student.French !== 'C') && (student.French !== 'D') && (student.French !== 'E') && (student.French !== 'F')) {
    student.French = prompt("Incorrect grade value. Please type in your appropraite grade");
}
student.Mathematics = prompt('Enter Mathematics Grade');
while ((student.Mathematics !== 'A') && (student.Mathematics !== 'B') && (student.Mathematics !== 'C') && (student.Mathematics !== 'D') && (student.Mathematics !== 'E') && (student.Mathematics !== 'F')) {
    student.Mathematics = prompt("Incorrect grade value. Please type in your appropraite grade");
}
student.Physics = prompt('Enter Physics Grade');
while ((student.Physics !== 'A') && (student.Physics !== 'B') && (student.Physics !== 'C') && (student.Physics !== 'D') && (student.Physics !== 'E') && (student.Physics !== 'F')) {
    student.Physics = prompt("Incorrect grade value. Please type in your appropraite grade");
}
student.Chemistry = prompt('Enter Chemistry Grade');
while ((student.Chemistry !== 'A') && (student.Chemistry !== 'B') && (student.Chemistry !== 'C') && (student.Chemistry !== 'D') && (student.Chemistry !== 'E') && (student.Chemistry !== 'F')) {
    student.Chemistry = prompt("Incorrect grade value. Please type in your appropraite grade");
}
student.Biology = prompt('Enter Biology Grade');
while ((student.Biology !== 'A') && (student.Biology !== 'B') && (student.Biology !== 'C') && (student.Biology !== 'D') && (student.Biology !== 'E') && (student.Biology !== 'F')) {
    student.Biology = prompt("Incorrect grade value. Please type in your appropraite grade");
}
student.Workshop = prompt('Enter Workshop Grade');
while ((student.Workshop !== 'A') && (student.Workshop !== 'B') && (student.Workshop !== 'C') && (student.Workshop !== 'D') && (student.Workshop !== 'E') && (student.Workshop !== 'F')) {
    student.Workshop = prompt("Incorrect grade value. Please type in your appropraite grade");
}
student.TechnicalDrawing = prompt('Enter Technical Drawing Grade');
while ((student.TechnicalDrawing !== 'A') && (student.TechnicalDrawing !== 'B') && (student.TechnicalDrawing !== 'C') && (student.TechnicalDrawing !== 'D') && (student.TechnicalDrawing !== 'E') && (student.TechnicalDrawing !== 'F')) {
    student.TechnicalDrawing = prompt("Incorrect grade value. Please type in your appropraite grade");
}
student.Humanities = prompt('Enter Humanities Grade');
while ((student.Humanities !== 'A') && (student.Humanities !== 'B') && (student.Humanities !== 'C') && (student.Humanities !== 'D') && (student.Humanities !== 'E') && (student.Humanities !== 'F')) {
    student.Humanities = prompt("Incorrect grade value. Please type in your appropraite grade");
}


function computeSubjectScore(grade, units) {
    let score;
    if (grade === 'A') {
        score = 5 * units;
    }
    else if (grade === 'B') {
        score = 4 * units;
    }
    else if (grade ==='C' ) {
        score = 3 * units;
    }
    else if (grade === 'D') {
        score = 2 * units;
    }
    else if (grade === 'E') {
        score = 1 * units;
    }
    else {
        score = 4 * units;
    }

    return score;
}

const Eunit = computeSubjectScore(student.English, courseUnits.English);
const Funit = computeSubjectScore(student.French, courseUnits.French);
const Munit = computeSubjectScore(student.Mathematics, courseUnits.Mathematics);
const Punit = computeSubjectScore(student.Physics, courseUnits.Physics);
const Cunit = computeSubjectScore(student.Chemistry, courseUnits.Chemistry);
const Bunit = computeSubjectScore(student.Biology, courseUnits.Biology);
const Wunit = computeSubjectScore(student.Workshop, courseUnits.Workshop);
const Tunit = computeSubjectScore(student.TechnicalDrawing, courseUnits.TechnicalDrawing);
const Hunit = computeSubjectScore(student.Humanities, courseUnits.Humanities);


let sumUnit = Eunit + Funit + Munit + Punit + Cunit + Bunit + Wunit + Tunit + Hunit ;

let gpa = sumUnit / 21;

document.write(gpa);
