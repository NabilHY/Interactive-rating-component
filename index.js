const buttonsContainer = document.getElementById('buttons');
const buttons = document.getElementsByClassName('circled');
const submitButton = document.querySelector('.submit')

console.log(buttons)

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

submitButton.addEventListener('click', ()=>{

});