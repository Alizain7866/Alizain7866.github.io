var count = 1;

function nextImage() {
    if (count == 3) {
        count = 1;
    } else {
        count++;
    }
    document.getElementById("sliderImg").src = "imgs/img" + count + ".png";
     
}

function changeImage(imgNumber) {
    count = imgNumber;
    document.getElementById("sliderImg").src = "imgs/img" + count + ".png";
    
}


setInterval(nextImage, 6000);