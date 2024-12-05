document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("studentForm");
    const table = document.getElementById("studentTable");
    let students = [];
    let editIndex = null;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value.trim();
        const grade = document.getElementById("grade").value.trim();
        const place = document.getElementById("place").value.trim();

        if (editIndex === null) {
            // Add a new student
            students.push({ name, age, grade, place });
        } else {
            // Edit existing student
            students[editIndex] = { name, age, grade, place };
            editIndex = null;
        }

        form.reset();
        renderTable();
    });

   
    function renderTable() {
        table.innerHTML = ""; 
        students.forEach((student, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.grade}</td>
                <td>${student.place}</td>
                <td class="actions">
                    <button class="edit" data-index="${index}">Edit</button>
                    <button class="delete" data-index="${index}">Delete</button>
                </td>
            `;
            table.appendChild(row);
        });
    }table.addEventListener("click", (e) => {
        if (e.target.classList.contains("edit")) {
            const index = e.target.dataset.index;
            editStudent(index);
        } else if (e.target.classList.contains("delete")) {
            const index = e.target.dataset.index;
            deleteStudent(index);
        }
    });

    
    function editStudent(index) {
        const student = students[index];
        document.getElementById("name").value = student.name;
        document.getElementById("age").value = student.age;
        document.getElementById("grade").value = student.grade;
        document.getElementById("place").value = student.place;
        editIndex = index;
    }

    
    function deleteStudent(index) {
        students.splice(index, 1); 
        renderTable(); 
    }
});
    

    
