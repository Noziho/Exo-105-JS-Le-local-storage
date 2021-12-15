let monTab = ["Bonsoir", 1, 4, 8];
const storage = window.localStorage;
storage.setItem('firstKey', '19');
storage.setItem('secondKey', 'Material2');
storage.setItem('thirdKey', 'Black2');
storage.setItem('fourKey', monTab.toString());
console.log(storage.getItem('fourKey'));

function printOntext () {
    document.getElementById('result').innerHTML = `Thème ${storage.getItem('thirdKey')} type
     ${storage.getItem('secondKey')} et police de caractères ${storage.getItem('firstKey')} px`;
}

printOntext();
printOntext();
