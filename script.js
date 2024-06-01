document.addEventListener("DOMContentLoaded", function() {
    const fileId = "11E92qStOB2JA6vSfWwHknKlZwucFtNon";
    const apiKey = "AIzaSyApcQVyEBjqvVC8YdjVmcfn_phTWfcG510";
    const url = `https://www.googleapis.com/drive/v3/files/11E92qStOB2JA6vSfWwHknKlZwucFtNon?alt=media&key=AIzaSyApcQVyEBjqvVC8YdjVmcfn_phTWfcG510
    `;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const jsonData = document.getElementById("jsonData");
            jsonData.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error("Error fetching JSON data:", error);
        });

        const jsonData = {
            "employee": {
                "name": "sonoo",
                "salary": 56000,
                "married": true
            }
        };
        const nameElement = document.getElementById("name");
    const salaryElement = document.getElementById("salary");
    const marriedElement = document.getElementById("married");

    nameElement.textContent = jsonData.employee.name;
    salaryElement.textContent = "Salary: $" + jsonData.employee.salary;
    marriedElement.textContent = "Married: " + (jsonData.employee.married ? "Yes" : "No");
});