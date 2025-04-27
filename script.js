const python = document.getElementById('python');
const pythonCard = document.getElementById('pythonCard');
const closePython = document.getElementById('closepython');
python.addEventListener('click', () => {
    pythonCard.classList.toggle('active');  
});
closePython.addEventListener('click',()=>{
    pythonCard.classList.remove('active');
});
const cfish = document.getElementById('cfish');
const CCard = document.getElementById('CCard');
const closeC = document.getElementById('closeC');
cfish.addEventListener('click', () => {
    CCard.classList.toggle('active');  
});
closeC.addEventListener('click',()=>{
    CCard.classList.remove('active');
});
const Webfish = document.getElementById('webfish');
const WebCard = document.getElementById('WebCard');
const closeWeb = document.getElementById('closeWeb');
Webfish.addEventListener('click', () => {
    WebCard.classList.toggle('active');  
});
closeWeb.addEventListener('click',()=>{
    WebCard.classList.remove('active');
});
const Whale = document.getElementById('Whale');
const WhaleCard = document.getElementById('WhaleCard');
const closeWhale = document.getElementById('closeWhale');
Whale.addEventListener('click', () => {
    WhaleCard.classList.toggle('active');  
});
closeWhale.addEventListener('click',()=>{
    WhaleCard.classList.remove('active');
});
const Arduino = document.getElementById('Arduino');
const ArduinoCard = document.getElementById('ArduinoCard');
const closeArduino = document.getElementById('closeArduino');
Arduino.addEventListener('click', () => {
    ArduinoCard.classList.toggle('active');  
});
closeArduino.addEventListener('click',()=>{
    ArduinoCard.classList.remove('active');
});