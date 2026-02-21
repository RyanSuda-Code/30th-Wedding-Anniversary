document.addEventListener("DOMContentLoaded", function () {

  const videos = document.querySelectorAll('.memory-video');

  videos.forEach(video => {
    const card = video.parentElement; // simpler & safer

    video.addEventListener('play', function () {
      card.classList.add('active');
    });

    video.addEventListener('pause', function () {
      card.classList.remove('active');
    });

    video.addEventListener('ended', function () {
      card.classList.remove('active');
    });

  });

});



document.addEventListener("DOMContentLoaded", function () {

  const images = document.querySelectorAll('.photo-card img');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = document.getElementById('closeModal');

  images.forEach(image => {
    image.addEventListener('click', function () {
      modal.classList.add('active');
      modalImage.src = this.src;
    });
  });

  closeBtn.addEventListener('click', function () {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
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

This is exactly how modern portfolios work.

Since this is for your anniversary website, this will make it feel way more polished.

If you want next level later we can:

Add smooth fade animation

Add left/right arrows

Add image captions

Add keyboard ESC close

Add swipe support for mobile

Want to upgrade it step by step?
*/