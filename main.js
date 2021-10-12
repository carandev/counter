import './style.css'

const $counter = document.querySelector('#counter');
let counter = 0;
const $btn_increment = document.querySelector('#btn_increment');
const $btn_decrement = document.querySelector('#btn_decrement');
const $btn_reset = document.querySelector('#btn_reset');

const increment = () => {
  counter += 1;
  $counter.textContent = counter;
}

const decrement = () => {
  counter -= 1;
  $counter.textContent = counter;
}

const reset = () => {
  counter = 0;
  $counter.textContent = counter;
}

$btn_increment.addEventListener('click', increment)
$btn_decrement.addEventListener('click', decrement)
$btn_reset.addEventListener('click', reset)

