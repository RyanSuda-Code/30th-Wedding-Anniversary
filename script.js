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




document.addEventListener("DOMContentLoaded", () => {

  const videos = document.querySelectorAll(".memory-video");
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");

  const closeBtn = document.querySelector(".close-video");
  const nextBtn = document.querySelector(".next-video");
  const prevBtn = document.querySelector(".prev-video");

  let currentIndex = 0;

  // Convert NodeList to array of sources
  const videoSources = Array.from(videos).map(video =>
    video.querySelector("source").src
  );

  // 🔹 Pause all background videos
  function pauseAllVideos() {
  const allVideos = document.querySelectorAll("video");

  allVideos.forEach(video => {
    if (video !== modalVideo) {
      video.pause();
      video.currentTime = 0;
    }
  });
}

  function openModal(index) {
    currentIndex = index;

    pauseAllVideos(); // ✅ stop background video

    modalVideo.src = videoSources[currentIndex];
    modal.classList.add("active");
    modalVideo.play();
  }

  function closeModal() {
    modalVideo.pause();
    modalVideo.src = "";
    modal.classList.remove("active");
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % videoSources.length;
    modalVideo.src = videoSources[currentIndex];
    modalVideo.play();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + videoSources.length) % videoSources.length;
    modalVideo.src = videoSources[currentIndex];
    modalVideo.play();
  }

  videos.forEach((video, index) => {
    video.addEventListener("click", () => openModal(index));
  });

  closeBtn.addEventListener("click", closeModal);
  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

});



const galleryVideos = document.querySelectorAll(".memory-video");
const modal = document.querySelector(".video-modal");
const modalVideo = document.querySelector(".modal-video");

// When clicking a gallery video
galleryVideos.forEach(video => {
  video.addEventListener("click", () => {

    // 1️⃣ Pause all gallery videos
    galleryVideos.forEach(v => {
      v.pause();
      v.currentTime = 0;
    });

    // 2️⃣ Set modal video source
    modalVideo.src = video.querySelector("source").src;

    // 3️⃣ Show modal
    modal.classList.add("show");

    // 4️⃣ Play modal video
    modalVideo.play();
  });
});


const closeBtn = document.querySelector(".close-modal");

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");

  modalVideo.pause();
  modalVideo.currentTime = 0;
});