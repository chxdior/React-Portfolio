import React from 'react';

function handleNavlink() {
  document.querySelectorAll('.navLink').forEach(function (navItem) {
    navItem.addEventListener('click', function () {
      document.querySelectorAll('.navLink').forEach(function (item) {
        item.classList.remove('active');
      });
      navItem.classList.add('active');
    });
  });
}

const Header = () => {
  return (
      <nav class="navbar">
        <ul>
          <li><a class="navLink active" href="#about" onClick={handleNavlink}>About</a></li>
          <li><a class="navLink" href="#skills" onClick={handleNavlink}>Skills</a></li>
          <li><a class="navLink" href="#projects" onClick={handleNavlink}>Projects</a></li>
          <li><a class="navLink" href="#contact" onClick={handleNavlink}>Contact</a></li>
        </ul>
      </nav>
  );
}


export default Header;
