function changeBackgroundColor() {
    //get ids
    var container = document.getElementById('container');
    var select = document.getElementById('selectDay');
    //get values from the 'select' options in our html file
    var selectedDay = select.options[select.selectedIndex].value;

    switch(selectedDay) {
        case 'Monday':
            container.style.backgroundColor = 'red';
            break;
        case 'Tuesday':
            container.style.backgroundColor = 'orange';
            break;
        case 'Wednesday':
            container.style.backgroundColor = 'yellow';
            break;
        case 'Thursday':
            container.style.backgroundColor = 'green';
            break;
        case 'Friday':
            container.style.backgroundColor = 'blue';
            break;
        case 'Saturday':
            container.style.backgroundColor = 'purple';
            break;
        case 'Sunday':
            container.style.backgroundColor = 'pink';
            break;
        default:
            container.style.backgroundColor = 'lightpink';
    }
}

function processForm(event) {
    event.preventDefault();
    
    var number = parseInt(document.getElementById('numberIn').value);
    var result = '';

    //Check if number is odd or even
    if (number % 2 === 0) {
        result += 'The number entered is an even ';
    } else {
        result += 'The number entered is an odd ';
    }

    //Check if number is prime or composite
    var isPrime = true;
    if (number === 1) {
        isPrime = false;
    } else if (number > 1) {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        result += ' prime number ';
    } else {
        result += ' composite number ';
    }

    // Check the range of the input number
    if (number <= 50) {
        result += 'less than or equal to 50.';
    } else if (number <= 75) {
        result += 'greater than 50 and less than or equal to 75.';
    } else if (number <= 100) {
        result += 'greater than 75 and less than or equal to 100.';
    } else {
        result += 'greater than 100.';
    }

    // Display the result message
    document.getElementById('displayResult').innerText = result;
}