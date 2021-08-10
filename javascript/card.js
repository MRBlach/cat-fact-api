// Create a Card class
class Card {
  constructor() {
    // Grab the card div from index.html
    this.card = document.querySelector('.cardUI');
  }
  // Output html code for card body shown on initiale page load
  makeCard() {
    this.card.innerHTML = 
   ` <div class="card border-warning my-5 shadow-lg cardCat">
      <h3 class="card-header bg-warning text-white text-center">Cat Facts</h3>
      <div class="output text-center">
        <div class="card-body">
          <h5 class="card-title text-center">Welcome To The Cat Facts Random Generator</h5>
          <h6 class="card-subtitle text-muted text-center">Enjoy</h6>
        </div>
        <img src="images/pixel.png" class="">
        
        <div class="card-button mx-auto my-2 ">
          <button type="button" class="btn btn-outline-info meowBtn" data-toggle="modal" data-target=".modal">Meow!</button>
        </div>
      
        <div class="card-body">
          <a href="https://catfact.ninja/" target="_blank" class="card-link">API Source</a>
        </div>
      </div>

      <div class="factList" hidden>
        <ol class="facts"></ol>

        <div class="card-button text-center mx-auto my-2 ">
         <button type="button" class="btn btn-outline-danger clearBtn" onclick="location.reload()">Clear</button>
        </div>
      </div>
    </div>  
 `
  }

  // Output selected facts html code
  makeFacts() {
    let output = ''
    
    output +=
    `<div>
       <ol class="facts"></ol>
        
       <div class="card-button mx-auto my-2 ">
         <button type="button" class="btn btn-outline-danger clearBtn" onclick="location.reload()">Clear</button>
       </div>
     </div>`
    // Change card body contents to facts list
    document.querySelector('.output').innerHTML = output;
  }
}
