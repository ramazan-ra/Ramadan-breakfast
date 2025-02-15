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
const video = document.getElementById("video");
const playButton = document.getElementById("playButton");

// الفيديو الثاني
const video1 = document.getElementById("video1");
const playButton1 = document.getElementById("playButton1");

// وظيفة لتشغيل الفيديو وإيقاف الفيديو الآخر
const handlePlay = async (
  currentVideo,
  otherVideo,
  currentButton,
  otherButton
) => {
  try {
    otherVideo.pause();
    otherVideo.controls = false;
    otherButton.classList.remove("hidden");

    currentVideo.play();
    currentVideo.controls = true;

    if (currentVideo.requestFullscreen) {
      await currentVideo.requestFullscreen();
    } else if (currentVideo.webkitRequestFullscreen) {
      await currentVideo.webkitRequestFullscreen();
    } else if (currentVideo.msRequestFullscreen) {
      await currentVideo.msRequestFullscreen();
    }

    currentButton.classList.add("hidden");
  } catch (error) {
    console.error(
      "حدث خطأ أثناء محاولة تشغيل الفيديو بوضع الشاشة الكاملة:",
      error
    );
  }
};

playButton.addEventListener("click", () =>
  handlePlay(video, video1, playButton, playButton1)
);

playButton1.addEventListener("click", () =>
  handlePlay(video1, video, playButton1, playButton)
);

video.addEventListener("ended", () => {
  playButton.classList.remove("hidden");
});

video1.addEventListener("ended", () => {
  playButton1.classList.remove("hidden");
});

let isDollar = false;

function toggleCurrency() {
  isDollar = !isDollar;

  if (isDollar) {
    // document.getElementById("recipient-name").innerText = "Omar adadadad";
    document.getElementById("iban").innerText =
    "TR10 0001 0090 1043 7862 1050 03"; 
    document.querySelector(".currency-switch button").innerHTML =
    'التغيير إلى الليرة التركية <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path    d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path><path fill-rule="evenodd"    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"></path></svg>';
} else {
    // document.getElementById("recipient-name").innerText = "Omar Shwehneh";
    document.getElementById("iban").innerText =
      "TR37 0001 0090 1043 7862 1050 02"; 
    document.querySelector(".currency-switch button").innerHTML =
      'التغيير إلى الدولار <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path    d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path><path fill-rule="evenodd"    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"></path></svg>';
  }
}
