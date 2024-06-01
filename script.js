document.addEventListener("DOMContentLoaded", function() {
    const fileId = "";
    const apiKey = "";
    const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;

    fetch(url, { mode: 'no-cors' })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const nameElement = document.getElementById("name");
        const salaryElement = document.getElementById("salary");
        const marriedElement = document.getElementById("married");
        const imageElement = document.getElementById("image");

        console.log(data.employee.image);
        nameElement.textContent = data.employee.name;
        salaryElement.textContent = "Salary: $" + data.employee.salary;
        marriedElement.textContent = "Married: " + (data.employee.married ? "Yes" : "No");
        imageElement.src = data.employee.image;
    })
    .catch(error => {
        console.error("Error fetching JSON data:", error.Error);
    });
});