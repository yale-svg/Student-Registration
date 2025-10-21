// script.js

document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const gender = document.getElementById("gender").value;
  const course = document.getElementById("course").value;
  const yearLevel = document.getElementById("yearLevel").value;

  // Basic validation
  if (!name || !email || !age || !gender || !course || !yearLevel) {
    alert("⚠️ Please fill out all fields before registering.");
    return;
  }

  // Add new student to the table
  const tableBody = document.querySelector("#studentsTable tbody");
  const newRow = tableBody.insertRow();

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${age}</td>
    <td>${gender}</td>
    <td>${course}</td>
    <td>${yearLevel}</td>
  `;

  // Show confirmation
  alert(`✅ Thank you for registering, ${name}!`);

  // Clear form after submission
  document.getElementById("registrationForm").reset();
});
