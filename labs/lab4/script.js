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