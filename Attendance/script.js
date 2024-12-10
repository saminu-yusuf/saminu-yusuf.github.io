// Function to mark attendance
function markAttendance(cell) {
    if (cell.innerText === "") {
        cell.innerText = "\\";
    } else if (cell.innerText === "\\") {
        cell.innerText = "/";
    } else {
        cell.innerText = "";
    }
}

// Function to calculate weekly totals
function calculateTotals() {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach((row) => {
        const cells = row.querySelectorAll(".cell");
        let total = 0;

        cells.forEach((cell) => {
            if (cell.innerText === "\\" || cell.innerText === "/") {
                total++;
            }
        });

        // Update total and percentage
        const totalCell = row.querySelector(".total");
        const percentageCell = row.querySelector(".percentage");
        totalCell.innerText = total;
        const percentage = ((total / 10) * 100).toFixed(2); // 10 slots in a week
        percentageCell.innerText = `${percentage}%`;
    });

    // Generate analysis
    generateAnalysis();
}

// Function to generate gender-based analysis
function generateAnalysis() {
    const rows = document.querySelectorAll("tbody tr");
    let boysTotal = 0, girlsTotal = 0;
    let boysCount = 0, girlsCount = 0;

    rows.forEach((row) => {
        const gender = row.querySelector("td:nth-child(2)").innerText.toLowerCase();
        const total = parseInt(row.querySelector(".total").innerText) || 0;

        if (gender === "male") {
            boysTotal += total;
            boysCount++;
        } else if (gender === "female") {
            girlsTotal += total;
            girlsCount++;
        }
    });

    const analysisDiv = document.getElementById("analysis");
    analysisDiv.innerHTML = `
        <p>Total Attendance (Boys): ${boysTotal}</p>
        <p>Total Attendance (Girls): ${girlsTotal}</p>
        <p>${boysTotal > girlsTotal ? "Boys attended more" : "Girls attended more"}</p>
    `;
}
