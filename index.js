const buttonsContainer = document.getElementById('buttons');
const buttons = document.getElementsByClassName('circled');
const submitButton = document.querySelector('.submit');
const container = document.querySelector('.container');
const message = document.getElementById('message');

console.log(buttons)

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

console.log();


const addValue = (val) => {
    const result = document.getElementById('message');
    const value = document.createElement('span');
    value.classList.add('card');
    value.innerText = `You selected out ${val} of 5`;
    result.insertBefore(value, message.children[1]);
}

buttonsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) {
        addValue(e.target.innerText);
    }
});

submitButton.addEventListener('click', () => {
    if (buttonsContainer.getElementsByClassName('active').length == 0) {
        const alert = document.createElement('div');
        const message = document.createElement('p');
        message.innerText = 'Please Select a feedback score';
        alert.setAttribute('id', 'alert');
        alert.appendChild(message);
        document.body.appendChild(alert);
        setTimeout(() => {
            alert.style.display = 'none';
        }, 5000);
    } else {
        container.classList.add('none');
        message.classList.remove('none');
    }
})

