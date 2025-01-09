// Select elements
const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('.button');

let input = "";

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'AC') {
      input = ""; // Clear input
    } else if (value === 'DEL') {
      input = input.slice(0, -1); // Remove last character
    } else if (value === '=') {
      try {
        input = eval(input) || "0"; // Evaluate input or default to "0"
      } catch {
        input = "Error"; // Handle invalid input
      }
    } else {
      if (input === "Error") input = ""; // Reset on error
      input += value; // Append button value
    }

    // Update input box
    inputBox.value = input || "0";
  });
});
