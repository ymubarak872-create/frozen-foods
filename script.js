/* GO TO PRODUCTS */

function goProducts(){

    document.getElementById("products")
    .scrollIntoView({
        behavior:"smooth"
    });

}

/* WHATSAPP ORDER */

function orderNow(product){

    let phone = "2349166376634";

    let message =
`Hello FrozenHub, I want to order ${product}.`;

    let url =
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}

/* CONTACT BUTTON */

function contactUs(){

    let phone = "2349166376634";

    let message =
`Hello FrozenHub, I want to make an enquiry.`;

    let url =
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}

/* SCROLL ANIMATION */

const fadeElements =
document.querySelectorAll(".fade-up");

window.addEventListener("scroll", reveal);

function reveal(){

    fadeElements.forEach(el => {

        const position =
        el.getBoundingClientRect().top;

        const screen =
        window.innerHeight;

        if(position < screen - 100){

            el.classList.add("active");

        }

    });

}

reveal();