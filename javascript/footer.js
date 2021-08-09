// Create a Footer class
class Footer {
  constructor() {
    // Grab the footer div from index.html
    this.footer = document.querySelector('.footerUI');
  }

  // Output html code for footer body
  makeFooter() {
    this.footer.innerHTML = 
    `<footer><h1>&#9829 2020</h1></footer>`;
    this.footer.style.cssFloat = 'right';
  }
}