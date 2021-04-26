var counterValue = 0;
function decrement(){
    if (counterValue > 0) {
        counterValue--;
        updateInterface(counterValue);
    }
};
function increment(){
    counterValue++;
    updateInterface(counterValue);
};
function updateInterface(counterValue) {
    document.getElementById('value').textContent = counterValue;
}
const btns = document.querySelectorAll('button')

btns.forEach(btn => {

   btn.addEventListener('click', event => {
       var action = event.target.dataset.action;
       switch (action) {
           case 'decrement': 
               decrement();
               console.log(counterValue)
               break;
           case 'increment': 
               increment();
               console.log(counterValue)
               break;
       
           default:
               break;
       }
   });
});