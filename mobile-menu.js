function toggleFunction() {
  var x = document.getElementById('header');
  if (x.classList.contains('open')) {
    x.classList.remove('open');
  } else {
    x.classList.add('open');
  }
}

const menulist = document.getElementsByClassName('menu-link');
index = -1;

document.addEventListener('keydown', (e) => {
  //down key
  if (e.key === 'ArrowDown') {
    index++;
    prevIndex = index - 1;
    if (index === menulist.length) {
      index = 0;
      prevIndex = menulist.length - 1;
    }
    menulist[index].classList.add('selected');

    if (prevIndex >= 0)
      menulist[prevIndex].classList.remove('selected');
  }

  //upkey
  else if (e.key === 'ArrowUp') {
    index--;
    prevIndex = index + 1;
    if (index === -1) {
      index = menulist.length - 1;
      prevIndex = 0;
    }
    menulist[index].classList.add('selected');
    menulist[prevIndex].classList.remove('selected');
  }

  //Enter key
  else if (e.key === 'Enter') {
    console.log('Enter key was pressed ');
    // menulist[index].click();
  }
});
