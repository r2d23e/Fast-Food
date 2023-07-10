let doc = document
let mealCards = doc.querySelectorAll(".meal__card")
let burgerKingImg =  doc.querySelector(".burger-king-img")
let burgerKingText =  doc.querySelector(".burger-king__text")
let menuCard1 = doc.querySelector("#menu__card-1")
let menuCard2 = doc.querySelector("#menu__card-2")
let menuCard3 = doc.querySelector("#menu__card-3")
let menuCard4 = doc.querySelector("#menu__card-4")


for (i = 0; i < mealCards.length; i++) {
    const mealCard = mealCards[i];
    const mealCardHeight = mealCard.offsetHeight;
    doc.addEventListener("scroll", ()=>{
        if(window.scrollY >=310){
            mealCard.classList.add("fromLeft")
        }
        if(window.scrollY >=800){
            burgerKingImg.classList.add("fromLeft")
            burgerKingText.classList.add("fromRight")
        }
        if(window.scrollY >=1380){
            menuCard1.classList.add("fromLeft")
            menuCard2.classList.add("fromRight")
        }
        if(window.scrollY >=1722){
            menuCard3.classList.add("fromLeft")
            menuCard4.classList.add("fromRight")

        }
        console.log(window.scrollY);
    })
}
