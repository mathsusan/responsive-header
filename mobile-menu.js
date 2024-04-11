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
    if (index === menulist.length) {
      index = 0;
    }
    menulist[index].focus();
  }

  //upkey
  else if (e.key === 'ArrowUp') {
    index--;
    if (index === -1) {
      index = menulist.length - 1;
    }
    menulist[index].focus();
  }

  //Enter key
  else if (e.key === 'Enter') {
    console.log('Enter key was pressed ');
    // menulist[index].click();
  }
});
