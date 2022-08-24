/* References */
const cartWindow = document.querySelector(".cart-window");
const cartButton = document.querySelector(".cart-button")
cartButton.addEventListener("click", toggleCart);
const itemQuantity = document.querySelector(".item-quantity");
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
minusButton.addEventListener("click", subQuantity);
plusButton.addEventListener("click", addQuantity);
const bigImage = document.querySelector(".big-image");
const thumb01 = document.querySelector(".thumb01");
const thumb02 = document.querySelector(".thumb02");
const thumb03 = document.querySelector(".thumb03");
const thumb04 = document.querySelector(".thumb04");
thumb01.addEventListener("click", changeBigImage.bind(null,"1"));
thumb02.addEventListener("click", changeBigImage.bind(null,"2"));
thumb03.addEventListener("click", changeBigImage.bind(null,"3"));
thumb04.addEventListener("click", changeBigImage.bind(null,"4"));
const overlay = document.querySelectorAll(".overlay");
const fullscreenGallery = document.querySelector(".fullscreen-gallery");
const closeFullscreen = document.querySelector(".button-close");
bigImage.addEventListener("click", toggleFullscreen);
closeFullscreen.addEventListener("click", toggleFullscreen);
const fsOverlay = document.querySelectorAll(".fs-overlay");
const fullscreenBig = document.querySelector(".fullscreen-big-image");
const fsNextbutton = document.querySelector(".next");
fsNextbutton.addEventListener("click", nextImageFS);
const fsPrevbutton = document.querySelector(".previous");
fsPrevbutton.addEventListener("click", prevImageFS);
const fsThumbs = document.querySelectorAll(".fs-thumb");
fsThumbs.forEach( (element,index) => {
    element.addEventListener("click", changeBigImageFS.bind(null, index+1));
})



/* Functions */
cart = false;
function toggleCart(txt) {
    if (cart == false) {
        cartWindow.classList.remove("hidden");
        cart = true;
    } else {
        cartWindow.classList.add("hidden");
        cart = false;
    }
}
var quantityValue = 0;
function addQuantity() {
    quantityValue += 1;
    console.log(quantityValue);
    updateQty()
}
function subQuantity() {
    if (quantityValue == 0) {
        return;
    } else {
        quantityValue -= 1;
    console.log(quantityValue);
    updateQty()
    }
}
function updateQty() {
    itemQuantity.innerHTML = quantityValue;
}
function resetSelected() {
    overlay.forEach(element => {
        element.classList.remove("selected");
        element.classList.add("not-selected");
    });
}
function changeBigImage(num) {
    resetSelected();
    url = "images/image-product-" + num + ".jpg"
    bigImage.src = url;
    overlay[num-1].classList.add("selected");
    console.log(num);
}
var fullscreen = false;
function toggleFullscreen() {
    if (fullscreen == false) {
        fullscreenGallery.classList.remove("hidden");
        fullscreen = true;
        console.log(fullscreen);
    } else {
        fullscreenGallery.classList.add("hidden");
        fullscreen = false;
        console.log(fullscreen);
    }
}
function resetFSSelected() {
    fsOverlay.forEach(element => {
        element.classList.remove("selected");
        element.classList.add("not-selected");
    });
}
var FSnum = 0;
function changeBigImageFS(num) {
    resetFSSelected();
    url = "images/image-product-" + num + ".jpg";
    fullscreenBig.src = url;
    fsOverlay[num-1].classList.add("selected");
    FSnum = num-1;
}
function nextImageFS() {
    resetFSSelected();
    if (FSnum == 3) {
        FSnum = -1;
    }
    next = FSnum + 1;
    next++;
    url = "images/image-product-" + next + ".jpg"
    fullscreenBig.src = url;
    fsOverlay[next-1].classList.add("selected");
    FSnum++;
    console.log(FSnum);
}
function prevImageFS() {
    resetFSSelected();
    if (FSnum == 0) {
        FSnum = 4;
    }
    next = FSnum--;
    url = "images/image-product-" + next + ".jpg"
    fullscreenBig.src = url;
    fsOverlay[next-1].classList.add("selected");
    console.log(FSnum);
}