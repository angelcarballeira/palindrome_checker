function palindrome() {
  let txt = document.getElementById('txt').value;
  // remove the special characters, then remove the blank spaces and finally convert them to lower case.
  let newTxt = txt
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
    .replace(/ /g, '')
    .toLowerCase();

  if (newTxt == newTxt.split('').reverse().join('')) {
    document.getElementById('show').innerHTML = 'Yes';
  } else {
    document.getElementById('show').innerHTML = 'No';
  }
}

const btnCheck = document.getElementById('btnCheck');
btnCheck.addEventListener('click', palindrome);
