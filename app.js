// Init Card Class
const card = new Card



// Init Modal Class
const modal = new Modal
modal.makeModal();


// Init Footer Class
const footer = new Footer
footer.makeFooter();




// Functions
function showCard() {
  card.makeCard()
}
showCard();





//
const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', showFacts);

const numFacts = document.querySelector('#numberInput');
// let output = document.querySelector('.output');

//
async function showFacts(e) {
  document.querySelector('.output').hidden = true;
  document.querySelector('.factList').hidden = false;
    if(numFacts.value >500) {
    alert('You have exceeded the maximum of 500')
    window.location.reload();
  }
  if(numFacts.value <1) {
    alert('The minimum is 1')
    window.location.reload();
  }
 
   const response = await fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=${numFacts.value}`)

   const data = await response.json();
   console.log(data);
  let output = '';
  
  data.forEach(function(data) {
    console.log(data.text)
    output += `<li class='p-2' >${data.text}</li>`;
  });

 document.querySelector('.facts').innerHTML = output;
}



