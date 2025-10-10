const task3Element = document.getElementById('task-3');
// === Task 1 ===
// (a) No-parameter function that alerts some text
function showGreeting() {
    alert("Hello there! 👋");
  }
  
  // (b) Function that receives a name and alerts it
  function showName(name) {
    alert("Name: " + name);
  }
  
  // === Task 2 ===
  // Call both functions directly
  showGreeting();
  showName("Shrey");
  
  // === Task 3 ===
  // Add an event listener to the element with id="task3Element"
  // and attach it to the first function (no arguments).
  document.addEventListener("DOMContentLoaded", function () {
    const task3Element = document.getElementById("task3Element");
    if (task3Element) {
      task3Element.addEventListener("click", showGreeting);
    }
  });
  
  // === Task 4 ===
  // New function that takes three strings and returns one combined string
  function combineThree(a, b, c) {
    return a + b + c; // or `${a}${b}${c}`
  }
  
  // === Task 5 ===
  // Call the new function and alert the result
  const combined = combineThree("Curtin ", "Uni ", "Rocks!");
  alert(combined);