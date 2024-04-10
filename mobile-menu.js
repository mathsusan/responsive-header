function toggleFunction() {
  var x = document.getElementById('header');
  if (x.classList.contains('open')) {
    x.classList.remove('open');
  } else {
    x.classList.add('open');
  }
}
