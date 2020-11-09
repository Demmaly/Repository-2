var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('ingresar');
var para = document.querySelector('p');
form.onsubmit = function(e) {
 if (fname.value === '' || lname.value === '') {
 e.preventDefault();
 para.textContent = 'Completá ambos datos!';
 }
}