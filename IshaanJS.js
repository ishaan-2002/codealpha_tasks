window.onload = function () {
    document.getElementById('welcomeModal').style.display = 'flex';
  };
  
  function closeModal() {
    document.getElementById('welcomeModal').style.display = 'none';
  }
  
// window.onload = function () {
//     alert("Welcome");
//   };
  
  //const display = document.getElementById('display');
  
  function appendValue(value) {
    if (display.textContent === '0' && value !== '.') {
      display.textContent = value;
    } else {
      display.textContent += value;
    }
  }
  
  function clearDisplay() {
    display.textContent = '0';
  }
  
  function calculateResult() {
    try {
      const result = eval(display.textContent);
      display.textContent = result;
    } catch {
      display.textContent = 'Error';
    }
  }
  