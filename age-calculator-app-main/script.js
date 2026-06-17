
function ageValidation() {
  let day = document.getElementById("day").value.trim();
  let month = document.getElementById("month").value.trim();
  let year = document.getElementById("year").value.trim();

  if(!day || !month || !year) {
    alert("Don't leave any empty fields");
    return;
  }

  if(isNaN(day) || isNaN(month) || isNaN(year)) {
    alert("Numbers Only");
    return;
  }

  
  // Year validation
  const currentYear = new Date().getFullYear();
  if (year < 1900 || year > currentYear) {
    alert(`Year must be between 1900 and ${currentYear}`);
    return;
  }

  // Month validation
  if (month < 1 || month > 12) {
    alert("Month must be between 1 and 12");
    return;
  }

  // Day validation takes into accont the month
  const daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) {
    alert(`Day must be between 1 and ${daysInMonth} for the selected month`);
    return;
  }

  ageCalculation(day,month,year);

}

function ageCalculation(day, month, year) {
    const today = new Date();
    const birth = new Date(year, month - 1, day);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("span-year").innerText = years;
    document.getElementById("span-month").innerText = months;
    document.getElementById("span-day").innerText = days;

   
}


// optional cleaning input
function cleanInput() {
  document.getElementById("day").value = "";
  document.getElementById("month").value = "";
  document.getElementById("year").value = "";
}