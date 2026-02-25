document.addEventListener("DOMContentLoaded", function () {

  const images = document.querySelectorAll('.photo-card img');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = document.getElementById('closeModal');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  let currentIndex = 0;

  images.forEach((image, index) => {
    image.addEventListener('click', function () {
      currentIndex = index;
      modalImage.src = images[currentIndex].src;
      modal.classList.add('active');
    });
  });

  nextBtn.addEventListener('click', function () {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0; // loop back to start
    }
    modalImage.src = images[currentIndex].src;
  });

  prevBtn.addEventListener('click', function () {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1; // go to last image
    }
    modalImage.src = images[currentIndex].src;
  });

  closeBtn.addEventListener('click', function () {
    modal.classList.remove('active');
  });

});

/*
🧠 How It Works (Important for Study)
Step 1:

We select all gallery images:

const images = document.querySelectorAll('.photo-card img');



Step 2:

When user clicks an image:

modal.classList.add('active');
modalImage.src = this.src;

Show modal

Copy clicked image source into modal image



Step 3:

Close modal:

Click X

OR click outside the image



🎨 Result

When user:

Clicks image → dark overlay appears

Big image shows

Click X or outside → closes



How This Works next and previous image
🔹 let currentIndex = 0;

Stores which image is currently open.

🔹 When you click an image:
images.forEach((image, index) => {

We capture the index.

So if you click image #5:

currentIndex = 4
🔹 When clicking Next:
currentIndex++

We move forward.

If we reach the end:

currentIndex = 0

Loop back to start.

🔹 When clicking Previous:
currentIndex--

If below 0:

currentIndex = images.length - 1

Go to last image.
*/