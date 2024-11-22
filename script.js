let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split('T')[0];
let result = document.getElementById('result');
const button = document.querySelector('.btn');

button.addEventListener('click', calculateAge);

function calculateAge() {
  const birthDate = new Date(userInput.value);
  const currentDate = new Date();

  // Difference in milliseconds between the current date and the birth date
  let ageInMs = currentDate - birthDate;

  // Conversion of milliseconds to years, months, and days
  const msPerDay = 1000 * 60 * 60 * 24;
  const msPerYear = msPerDay * 365.25;
  const msPerMonth = msPerYear / 12;

  const years = Math.floor(ageInMs / msPerYear);
  ageInMs %= msPerYear;

  const months = Math.floor(ageInMs / msPerMonth);
  ageInMs %= msPerMonth;

  const days = Math.floor(ageInMs / msPerDay);

  result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, and <span>${days}</span> days old`;
}
