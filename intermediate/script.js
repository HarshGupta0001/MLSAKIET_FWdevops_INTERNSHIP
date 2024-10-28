let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';

buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log("Button clicked: ", e.target.innerHTML);

        if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string || '0';
        } else if (e.target.innerHTML == 'AC') {
            string = '';
            display.value = '0';
        } else if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                display.value = string;
            } catch {
                display.value = 'Error';
                string = '';
            }
        } else {
            if (display.value === '0') {
                string = e.target.innerHTML;
            } else {
                string += e.target.innerHTML;
            }
            display.value = string;
        }
    });
});