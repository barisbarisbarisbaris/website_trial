var fonts = ['times', 'verdana', 'arial'];
var currentFont = 0

function changeFont() {
  document.body.style.fontFamily = fonts[currentFont++ % fonts.length]
}

setInterval(changeFont, 1000);