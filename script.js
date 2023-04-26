const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const monthTxt = document.getElementById("month");
const daysContainer = document.querySelector(".days");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let currentDate = new Date();

function generateCalendar() {
  // Clear previous calendar
  daysContainer.innerHTML = "";

  // Set month name and year
  monthTxt.textContent = months[currentDate.getMonth()] + " " + currentDate.getFullYear();

  // Get the first day of the month
  let firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  // Get the number of days in the month
  let daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  // Create empty boxes for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    let emptyBox = document.createElement("div");
    emptyBox.classList.add("empty");
    daysContainer.appendChild(emptyBox);
  }

  // Create boxes for each day of the month
  for (let i = 1; i <= daysInMonth; i++) {
    let dayBox = document.createElement("div");
    dayBox.textContent = i;
    daysContainer.appendChild(dayBox);
  }

  // Add click event listeners to each day box
  let dayBoxes = document.querySelectorAll(".days div:not(.empty)");
  dayBoxes.forEach(box => {
    box.addEventListener("click", () => {
      console.log(`You clicked on ${box.textContent}`);
    });
  });
}

generateCalendar();

// Move to the previous month
prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  generateCalendar();
});

// Move to the next month
nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  generateCalendar();
});
