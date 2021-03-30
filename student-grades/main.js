const students= [];
const form = document.querySelector("#studentForm");

function init(){
    form.addEventListener("submit",submitStudentForm);
    console.log("Hello");
}

function submitStudentForm(event) {
    event.preventDefault();
    const fname = form.querySelector("#fName");
    const lname = form.querySelector("#lName");
    const student = {
        firstName : fname.value,
        lastName : lname.value,
        grades : [],
    };
    students.push(student);
    createStudentRow(student);
    fname.value = "";
    lname.value = "";
    
}

function createStudentRow(student){
    const tr = document.createElement("tr");
    const tdlName = document.createElement("td");
    tdlName.innerHTML = student.lastName;
    const tdfName = document.createElement("td");
    tdfName.innerHTML = student.firstName;
    const tdGrade = document.createElement("td");
    tdGrade.innerHTML = "<span>No grades</span>";
    const addButton = document.createElement("button");
    addButton.innerHTML = "Add";
    addButton.setAttribute("disabled",true);

    const gradeInput = document.createElement("input");
    gradeInput.setAttribute("type","number");
    gradeInput.setAttribute("min", 0);
    gradeInput.setAttribute("max", 20);
    gradeInput.setAttribute("step",0.5);

    tdGrade.appendChild(gradeInput);
    tdGrade.appendChild(addButton);
    addButton.addEventListener("click", (e) => {
        if(gradeInput.value == ""){
            return;
        }
        student.grades.push(parseFloat(gradeInput.value));
        tr.querySelector("span").innerHTML = average(student);
    });
    gradeInput.addEventListener("input", (e) => {
        if(gradeInput.value == ""){
            addButton.setAttribute("disabled",true);
        } else {
            addButton.removeAttribute("disabled");
        }
    })
    tr.appendChild(tdlName);
    tr.appendChild(tdfName);
    tr.appendChild(tdGrade);
    document.querySelector("#studentsTable").appendChild(tr);
}

function average(student){
    if(student.grades.length == 0){
        return -1;
    }
    let sum = 0;
    for(let grade of student.grades){
        sum += grade;
    }
    return sum/student.grades.length;
}

init();