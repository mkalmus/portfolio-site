var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active"); // make button active
    var panel = this.nextElementSibling; // content in accordion or panel
    // panel.classList.toggle("active");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// document.querySelector("#button1").addEventListener("click", function() {
// 	var plusSign1 = document.querySelector(".plus-sign1").innerHTML;

//   if (plusSign1 == '+'){
//     document.querySelector(".plus-sign1").innerHTML = "–";
//   }

//   if (plusSign1 == '–'){
//     document.querySelector(".plus-sign1").innerHTML = '+';
//   }
// });

// document.querySelector("#button2").addEventListener("click", function() {
// 	var plusSign2 = document.querySelector(".plus-sign2").innerHTML;

//   if (plusSign2 == '+'){
//     document.querySelector(".plus-sign2").innerHTML = '–';
//   }

//   if (plusSign2 == '–'){
//     document.querySelector(".plus-sign2").innerHTML = '+';
//   }
// });

// document.querySelector("#button3").addEventListener("click", function() {
// 	var plusSign3 = document.querySelector(".plus-sign3").innerHTML;

//   if (plusSign3 == '+'){
//     document.querySelector(".plus-sign3").innerHTML = '–';
//   }

//   if (plusSign3 == '–'){
//     document.querySelector(".plus-sign3").innerHTML = '+';
//   }
// });