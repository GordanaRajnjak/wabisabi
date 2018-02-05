
var images = ["images/grana.jpg", "images/devojka.jpg", "images/soba.jpg"];

var image_number = 0;
var image_length = images.length - 1;

function change_image(n) {
    image_number = image_number + n;

    if (image_number < 0) {
        image_number = image.length;
    }

    if (image_number > image_length) {
        image_number = 0;
    }

    document.slideshow.src = image[image_number];
}