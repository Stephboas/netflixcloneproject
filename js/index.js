const modalOverlay = document.querySelector('.modal-overlay');
const video = document.querySelectorAll('.btn1');

for(let videoNetflix of video){
    videoNetflix.addEventListener("click", function(){
        const videoId = videoNetflix.getAttribute("id");
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;

    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = "";
});
