const urlParams = new URLSearchParams(window.location.search);
const passedValue = urlParams.get('value');


// Use the value as needed
console.log(passedValue);
const nam = document.getElementById('name')
nam.textContent = passedValue