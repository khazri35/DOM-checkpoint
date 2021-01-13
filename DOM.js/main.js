  // heart button
  let heArt = document.querySelectorAll(".fa-heart");
  //  console.log(heArt);
  for (let i = 0; i < heArt.length; i++) {
      heArt[i].addEventListener("click", function() {
          if (heArt[i].style.color === "red") {
              heArt[i].style.color = "#212529";
          } else {
              heArt[i].style.color = "red";
          }

      });


  }
  // button +

  let plus = document.querySelectorAll(".plus-btn");
  // console.log(plus);
  for (let i = 0; i < plus.length; i++) {
      plus[i].addEventListener("click", function() {
          plus[i].nextElementSibling.innerHTML++;
          Total();
      });
  }
  // buton -

  let minus = document.querySelectorAll(".minus-btn");
  // console.log(plus);
  for (let i = 0; i < minus.length; i++) {
      minus[i].addEventListener("click", function() {
          if (minus[i].previousElementSibling.innerHTML > 0) {
              minus[i].previousElementSibling.innerHTML--;
              Total();
          }

      });
  }

  // total



  function Total() {
      let totalP = document.querySelector(".total-price");
      let S = 0;
      let uniP = document.querySelectorAll(".unit-price");
      let qutes = document.querySelectorAll(".qute");
      for (let i = 0; i < uniP.length; i++) {
          S += (qutes[i].innerHTML) * (uniP[i].innerHTML);
      }
      totalP.innerHTML = S;
  }
  // delete

  let delElem = document.querySelectorAll(".fa-trash-alt");
  let delCard = document.querySelectorAll(".card");
  for (let i = 0; i < delElem.length; i++) {
      delElem[i].addEventListener("click", function() {
          delElem[i].parentNode.parentNode.parentElement.remove();
          Total();
      });
  }