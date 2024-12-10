// Handle Customization
document.getElementById("applyCustomization").addEventListener("click", () => {
    const theme = document.getElementById("theme").value;
    const fontSize = document.getElementById("fontSize").value;

    document.body.className = theme;
    document.querySelector("table").style.fontSize = `${fontSize}px`;
});

// Handle Page Navigation
document.getElementById("goToRegister").addEventListener("click", () => {
    document.getElementById("registrationPage").style.display = "block";
    document.getElementById("attendancePage").classList.add("hidden");
});

document.getElementById("goToAttendance").addEventListener("click", () => {
    document.getElementById("registrationPage").style.display = "none";
    document.getElementById("attendancePage").classList.remove("hidden");
});

// Handle Student Registration
document.getElementById("studentForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const tableBody = document.querySelector("#attendanceTable tbody");

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${fullName}</td>
        <td class="morningCell" onclick="markAttendance(this, '\\')"></td>
        <td class="afternoonCell" onclick="markAttendance(this, '/')"></td>
    `;

    tableBody.appendChild(row);

    // Clear form fields
    document.getElementById("studentForm").reset();
});

// Handle Attendance Marking
function markAttendance(cell, mark) {
    cell.textContent = mark;
}

// Button to Add Zero for Absence
function addZero(cell) {
    cell.textContent = "0";
}
