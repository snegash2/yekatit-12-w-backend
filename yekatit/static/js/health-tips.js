// script.js

document.addEventListener('DOMContentLoaded', function() {
  const videoThumbnails = document.querySelectorAll('.video-thumbnail');
  const modal = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');
  const closeModal = document.querySelector('.close');

  videoThumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
          const videoId = this.dataset.videoId;
          const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
          videoFrame.src = videoSrc;
          modal.style.display = 'block';
      });
  });

  closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
      videoFrame.src = '';
  });

  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
          videoFrame.src = '';
      }
  });
});