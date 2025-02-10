function copyText(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => showToast())
    .catch((err) => console.error("Failed to copy text:", err));
}
function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
// الفيديو الأول
const video = document.getElementById('video');
const playButton = document.getElementById('playButton');

// الفيديو الثاني
const video1 = document.getElementById('video1');
const playButton1 = document.getElementById('playButton1');

// وظيفة لتشغيل الفيديو وإيقاف الفيديو الآخر
const handlePlay = async (currentVideo, otherVideo, currentButton, otherButton) => {
    try {
        otherVideo.pause();
        otherVideo.controls = false;
        otherButton.classList.remove('hidden');

        currentVideo.play();
        currentVideo.controls = true;

        if (currentVideo.requestFullscreen) {
            await currentVideo.requestFullscreen();
        } else if (currentVideo.webkitRequestFullscreen) {
            await currentVideo.webkitRequestFullscreen();
        } else if (currentVideo.msRequestFullscreen) {
            await currentVideo.msRequestFullscreen();
        }

        currentButton.classList.add('hidden');
    } catch (error) {
        console.error("حدث خطأ أثناء محاولة تشغيل الفيديو بوضع الشاشة الكاملة:", error);
    }
};

playButton.addEventListener('click', () => handlePlay(video, video1, playButton, playButton1));

playButton1.addEventListener('click', () => handlePlay(video1, video, playButton1, playButton));

video.addEventListener('ended', () => {
    playButton.classList.remove('hidden');
});

video1.addEventListener('ended', () => {
    playButton1.classList.remove('hidden');
});
