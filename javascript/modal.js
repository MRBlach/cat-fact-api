
class Modal {
  constructor() {
    this.modal = document.querySelector('.modalUI');
  }


  // Display Modal in UI
  makeModal() {
    this.modal.innerHTML = 
    `<div class="modal mt-5 pt-5">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-info">Choose Options</h5>
            
          </div>
          <div class="modal-body">
            <label for="numberInput">How many cat facts would you like?</label><br>
            <input type="number" id="numberInput" placeholder="choose a number 1-500">
          </div>
          <div class="modal-footer">
            <input type="button" class="btn btn-info submitBtn" data-dismiss="modal" value="Submit"/>
            <input type="reset" class="btn btn-outline-danger" data-dismiss="modal" value="Cancel"/>
          </div>
        </div>
      </div>
    </div>`
    
  }
 
}
