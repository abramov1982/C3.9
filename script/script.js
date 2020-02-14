const city_input = document.querySelector('.city-input')
const city_submit = document.querySelector('.city-submit')
const city = document.querySelector('.city')

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const submit_point = document.querySelector('.submit-point')

const reset = document.querySelector('.reset')

city_submit.onclick = () => {
    setCookie('city',city_input.value)
    window.location.reload()
};

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

submit_point.onclick = () => {
  if (one.checked) setCookie('one','True')
  if (two.checked) setCookie('two','True')
  if (three.checked) setCookie('three','True')
  if (four.checked) setCookie('four','True')
  if (five.checked) setCookie('five','True')
  if (six.checked) setCookie('six','True')
}

reset.onclick = () => {
  document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
  window.location.reload()
}

function check_this(name) {
  name.checked = true
  name.disabled = true  
}

if (getCookie('one') == 'True')(check_this(one))
if (getCookie('two') == 'True')(check_this(two))
if (getCookie('three') == 'True')(check_this(three))
if (getCookie('four') == 'True')(check_this(four))
if (getCookie('five') == 'True')(check_this(five))
if (getCookie('six') == 'True')(check_this(six))
if (getCookie('city'))(city.innerHTML = ('Your city - ' + getCookie('city')))