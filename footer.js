class Footer {
  constructor() {
    this.footer = document.querySelector('.footerUI');
  }

  makeFooter() {
    this.footer.innerHTML = 
    `<footer><h1>&copy 2020</h1></footer>`;
    this.footer.style.cssFloat = 'right';
  }
}