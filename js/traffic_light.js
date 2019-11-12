let counter = 1;

function switchLight() {
    document.getElementById('red').classList.remove('active');
    document.getElementById('yellow').classList.remove('active');
    document.getElementById('green').classList.remove('active');

    switch(counter % 4) {
    case 0:
        document.getElementById('red').classList.add('active');
        break;
    case 1:
    case 3:
        document.getElementById('yellow').classList.add('active');
        break;
    case 2:
        document.getElementById('green').classList.add('active');
        break;
    }
    counter ++;
}