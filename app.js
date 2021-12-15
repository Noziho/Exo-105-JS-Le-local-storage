const storage = window.localStorage;
storage.setItem('firstKey', '19');
storage.setItem('secondKey', 'Material2');
storage.setItem('thirdKey', 'Black2');

function printOntext () {
    document.getElementById('result').innerHTML = `Thème ${storage.getItem('thirdKey')} type
     ${storage.getItem('secondKey')} et police de caractères ${storage.getItem('firstKey')} px`;
}

printOntext();
printOntext();
