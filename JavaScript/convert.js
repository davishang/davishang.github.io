function findKM() {
    var miles = document.forms.data.miles.value;
    var kilometers = miles * 1.609344;
    document.querySelector('#answer').innerHTML = 'That is ' + kilometers + ' kilometers';
}

setInterval(findKM, 200);
// document.querySelector('button').addEventListener('click', findKM);
