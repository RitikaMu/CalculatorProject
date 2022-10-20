let disp = document.getElementById('display');
buttons = document.querySelectorAll('button');

let dispValue = '';
for(item of buttons) {
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;
        console.log('Button text is', btnText);
        if (btnText == 'X') {
            btnText = '*';
            dispValue += btnText;
            disp.value = dispValue;
        }
        else if (btnText == 'C') {
            dispValue = "";
            disp.value = dispValue;
        }
        else if (btnText == '=') {
            disp.value = eval(dispValue);
        }
        else {
            dispValue += btnText;
            disp.value = dispValue;
        }
    })
}