const button = document.querySelector("#btn");
button.addEventListener("click", calculateSalary);

function calculateSalary(e) {
    e.preventDefault();
    const income = document.querySelector("#income").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    if (income === "" || people === "" || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: 'Пожалуйста, введите вашу информацию!',
            })
    }

    let percent = 0.5;
    let salaryPerPerson = (income * percent)/people;
    let tipPerPerson = tip / people;
    let totalSalary = salaryPerPerson + tipPerPerson;

    salaryPerPerson = salaryPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalSalary = totalSalary.toFixed(2);

    document.querySelector("#dividedSalary").textContent = salaryPerPerson;
    document.querySelector("#dividedTip").textContent = tipPerPerson;
    document.querySelector("#salaryAndTip").textContent = totalSalary;
}