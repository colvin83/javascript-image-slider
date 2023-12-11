// Wrap everything in a function that will run once the page has loaded
window.onload = function () {

    // Get a list of all the img elements within #slider and convert it to an Array
    let sliderImages = Array.from(document.querySelectorAll('#slider img'));

    // Set up a variable to keep track of which image we're currently showing
    let index = 0;

    // Define a function that will show the image at a given index
    function showImage(i) {

        // Hide all the images. This uses the forEach method of the array to run
        // the provided function once for each item in the array.
        sliderImages.forEach(img => img.classList.remove('active'));

        // Then show the desired image. This adds the 'active' class to the image
        // at the provided index.
        sliderImages[i].classList.add('active');
    }

    // Define a function that will show the next image in the array.
    function showNextImage() {
        // Increment the index, but wrap it around to 0 if it goes past the end of the array.
        // The % operator gives the remainder when the first number is divided by the second,
        // so (index + 1) % sliderImages.length will always be between 0 and sliderImages.length - 1.
        index = (index + 1) % sliderImages.length;

        // Show the image at the new index.
        showImage(index);
    }

    // Define a function that will show the previous image in the array.
    function showPrevImage() {
        // Decrement the index, but if it goes below 0, wrap it around to the end of the array.
        // This uses a similar trick to the showNextImage function above.
        index = (index - 1 + sliderImages.length) % sliderImages.length;

        // Show the image at the new index.
        showImage(index);
    }

    // Attach event handlers to the prev and next buttons
    document.getElementById('prev').addEventListener('click', showPrevImage);
    document.getElementById('next').addEventListener('click', showNextImage);

    // Show the first image initially
    showImage(0);
}
