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

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

//function setCookie(name, value) {
//  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
//  document.cookie = updatedCookie;
//};

submit_point.onclick = () => {
  if (one.checked) console.log('got it')
  document.cookie = 'one=True'
  if (two.checked) console.log('got it')
  setCookie(two,'True')
  if (three.checked) console.log('got it')
  setCookie(three,'True')
  if (four.checked) console.log('got it')
  setCookie(four,'True')
  if (five.checked) console.log('got it')
  setCookie(five,'True')
  if (six.checked) console.log('got it')
  setCookie(six,'True')
}
