function calculateAge(day, month, year) {
    day = document.getElementById('day').value;
    month = document.getElementById('month').value;
    year = document.getElementById('year').value;

    const dayElement = document.getElementById('day');
    const monthElement = document.getElementById('month');
    const yearElement = document.getElementById('year');

    const today = new Date();
    const birthDate = new Date(year, month, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const birthMonth = today.getMonth() - birthDate.getMonth();
    if (birthMonth < 0 || (birthMonth === 0 && today.getDate() < birthDate.getDate())) age--;

    //form validation
    if (day === '' || month === '' || year === '') {
        alert('Please enter a valid date');
    } else if (day > 31 || day < 1) {
        dayElement.classList.add('error');
        dayElement.value = '';
        alert('Please enter a valid day');
    } else if (month > 12 || month < 1) {
        monthElement.classList.add('error');
        monthElement.value = '';
        alert('Please enter a valid month');
    } else if (year > today.getFullYear() || year < 1900) {
        yearElement.classList.add('error');
        yearElement.value = '';
        alert('Please enter a valid year');
    } else {
        dayElement.classList.remove('error');
        monthElement.classList.remove('error');
        yearElement.classList.remove('error');

        dayElement.value = '';
        monthElement.value = '';
        yearElement.value = '';

        displayAge(age);
    }
}

const calculateBtn = document.getElementById('btn-calculate');

calculateBtn.addEventListener('click', calculateAge);

function displayAge(age) {
    const daysEl = document.getElementById('days');
    const monthsEl = document.getElementById('months');
    const yearsEl = document.getElementById('years');

    daysEl.innerText = age * 365;
    monthsEl.innerText = age * 12;
    yearsEl.innerText = age;
}