const city_input = document.querySelector('.city-input')
const city_submit = document.querySelector('.city-submit')

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const submit_point = document.querySelector('.submit-point')
const reset = document.querySelector('.reset')

city_submit.onclick = () => {
    alert(city_input.value)
};

submit_point.onclick = () => {
    if (one.checked) alert('got it')
    if (two.checked) alert('got it')
    if (three.checked) alert('got it')
    if (four.checked) alert('got it')
    if (five.checked) alert('got it')
    if (six.checked) alert('got it')
  
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

function setCookie(name, value) {
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  document.cookie = updatedCookie;
};