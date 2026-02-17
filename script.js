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


/*
Key Concepts Used:

- DOMContentLoaded → waits until HTML is ready
- querySelectorAll → selects multiple elements
- forEach → loops through elements
- parentElement → moves up one level in HTML
- addEventListener → listens for events
- play / pause / ended → built-in video events
- classList.add/remove → modifies CSS classes
*/


/*
===========================================================
VIDEO CARD INTERACTION SCRIPT
-----------------------------------------------------------
What this script does:

1. Waits for the HTML page to fully load
2. Selects all videos with class "memory-video"
3. Loops through each video
4. Listens for play, pause, and ended events
5. Adds or removes the "active" class on the parent card
6. CSS handles the rotation animation
===========================================================
*/

document.addEventListener("DOMContentLoaded", function () {

  /*
  -----------------------------------------------------------
  Select all video elements with class "memory-video".
  querySelectorAll returns a NodeList (similar to an array).
  -----------------------------------------------------------
  */
  const videos = document.querySelectorAll('.memory-video');


  /*
  -----------------------------------------------------------
  Loop through each video in the NodeList.
  forEach runs once for every video found.
  -----------------------------------------------------------
  */
  videos.forEach(video => {

    /*
    -----------------------------------------------------------
    Get the parent element of the video.
    In your HTML structure:

    <div class="video-card">
        <video class="memory-video">
    </div>

    The parentElement is the .video-card div.
    This is the element we rotate.
    -----------------------------------------------------------
    */
    const card = video.parentElement;


    /*
    -----------------------------------------------------------
    PLAY EVENT
    When the user presses play:
    - Add the class "active" to the card
    - CSS will straighten and scale it
    -----------------------------------------------------------
    */
    video.addEventListener('play', function () {
      card.classList.add('active');
    });


    /*
    -----------------------------------------------------------
    PAUSE EVENT
    When the user pauses the video:
    - Remove the "active" class
    - Card rotates back
    -----------------------------------------------------------
    */
    video.addEventListener('pause', function () {
      card.classList.remove('active');
    });


    /*
    -----------------------------------------------------------
    ENDED EVENT
    When the video finishes playing:
    - Also remove "active"
    - Prevents card from staying straight
    -----------------------------------------------------------
    */
    video.addEventListener('ended', function () {
      card.classList.remove('active');
    });

  });

});
