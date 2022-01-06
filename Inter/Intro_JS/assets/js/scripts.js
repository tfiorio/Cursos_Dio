var count = 0;
var countL = 0;

function increment() {
   let currentNumberWrapper = document.getElementById("currentNumber");
   count++;
   currentNumberWrapper.innerHTML = count;
}

function decrement() {
   let currentNumberWrapper = document.getElementById("currentNumber");
   count--;
   currentNumberWrapper.innerHTML = count;
}

function incrementLimit() {
   let currentNumberWrapper = document.getElementById("currentNumberLimit");
   if(countL <= 10) {
      currentNumberWrapper.innerHTML = countL;
      countL++;
   }

}

function decrementLimit() {
   let currentNumberWrapper = document.getElementById("currentNumberLimit");
   if(countL >- 10)
      countL--;
      currentNumberWrapper.innerHTML = countL;
}