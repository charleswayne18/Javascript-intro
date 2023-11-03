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

student.English = prompt('Enter English Grade');
student.French = prompt('Enter French Grade');
student.Mathematics = prompt('Enter Mathematics Grade');
student.Physics = prompt('Enter Physics Grade');
student.Chemistry = prompt('Enter Chemistry Grade');
student.Biology = prompt('Enter Biology Grade');
student.Workshop = prompt('Enter Workshop Grade');
student.TechnicalDrawing = prompt('Enter Technical Drawing Grade');
student.Humanities = prompt('Enter Humanities Grade');


let Eunit = '';

if (student.English === 'A') {
    Eunit = 5 * 2;
}
else if (student.English === 'B') {
    Eunit = 4 * 2;
}
else if (student.English === 'C') {
    Eunit = 3 * 2;
}
else if (student.English === 'D') {
    Eunit = 2 * 2;
}
else if (student.English === 'E') {
    Eunit = 1 * 2;
}
else {
    Eunit = 0 * 2;
};

let Funit = '';

if (student.French === 'A') {
    Funit = 5 * 1;
}
else if (student.French === 'B') {
    Funit = 4 * 1;
}
else if (student.French === 'C') {
    Funit = 3 * 1;
}
else if (student.French === 'D') {
    Funit = 2 * 1;
}
else if (student.French === 'E') {
    Funit = 1 * 1;
}
else {
    Funit = 0 * 1;
};

let Munit = '';

if (student.Mathematics === 'A') {
    Munit = 5 * 4;
}
else if (student.Mathematics === 'B') {
    Munit = 4 * 4;
}
else if (student.Mathematics === 'C') {
    Munit = 3 * 4;
}
else if (student.Mathematics === 'D') {
    Munit = 2 * 4;
}
else if (student.Mathematics === 'E') {
    Munit = 1 * 4;
}
else {
    Munit = 0 * 4;
};

let Punit = '';

if (student.Physics === 'A') {
    Punit = 5 * 4;
}
else if (student.Physics === 'B') {
    Punit = 4 * 4;
}
else if (student.Physics === 'C') {
    Punit = 3 * 4;
}
else if (student.Physics === 'D') {
    Punit = 2 * 4;
}
else if (student.Physics === 'E') {
    Punit = 1 * 4;
}
else {
    Punit = 0 * 4;
};

let Cunit = '';

if (student.Chemistry === 'A') {
    Cunit = 5 * 4;
}
else if (student.Chemistry === 'B') {
    Cunit = 4 * 4;
}
else if (student.Chemistry === 'C') {
    Cunit = 3 * 4;
}
else if (student.Chemistry === 'D') {
    Cunit = 2 * 4;
}
else if (student.Chemistry === 'E') {
    Cunit = 1 * 4;
}
else {
    Cunit = 0 * 4;
};

let Bunit = '';

if (student.Biology === 'A') {
    Bunit = 5 * 3;
}
else if (student.Biology === 'B') {
    Bunit = 4 * 3;
}
else if (student.Biology === 'C') {
    Bunit = 3 * 3;
}
else if (student.Biology === 'D') {
    Bunit = 2 * 3;
}
else if (student.Biology === 'E') {
    Bunit = 1 * 3;
}
else {
    Bunit = 0 * 3;
};

let Wunit = '';

if (student.Workshop === 'A') {
    Wunit = 5 * 1;
}
else if (student.Workshop === 'B') {
    Wunit = 4 * 1;
}
else if (student.Workshop === 'C') {
    Wunit = 3 * 1;
}
else if (student.Workshop === 'D') {
    Wunit = 2 * 1;
}
else if (student.Workshop === 'E') {
    Wunit = 1 * 1;
}
else {
    Wunit = 0 * 1;
};

let Tunit = '';

if (student.TechnicalDrawing === 'A') {
    Tunit = 5 * 1;
}
else if (student.TechnicalDrawing === 'B') {
    Tunit = 4 * 1;
}
else if (student.TechnicalDrawing === 'C') {
    Tunit = 3 * 1;
}
else if (student.TechnicalDrawing === 'D') {
    Tunit = 2 * 1;
}
else if (student.TechnicalDrawing === 'E') {
    Tunit = 1 * 1;
}
else {
    Tunit = 0 * 1;
};

let Hunit = '';

if (student.Humanities === 'A') {
    Hunit = 5 * 1;
}
else if (student.Humanities === 'B') {
    Hunit = 4 * 1;
}
else if (student.Humanities === 'C') {
    Hunit = 3 * 1;
}
else if (student.Humanities === 'D') {
    Hunit = 2 * 1;
}
else if (student.Humanities === 'E') {
    Hunit = 1 * 1;
}
else {
    Hunit = 0 * 1;
};

let sumUnit = Eunit + Funit + Munit + Punit + Cunit + Bunit + Wunit + Tunit + Hunit ;

let gpa = sumUnit / 21

document.write(gpa);
