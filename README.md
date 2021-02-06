# 🖥️NETFLIX CLONE
**Netflix** é uma provedora global de filmes e séries de televisão via streaming sediada em Los Gatos, Califórnia, e que atualmente possui mais de 200 milhões de assinantes. ✍️

Projeto desenvolvido durante o Bootcamp da Digital Innovation One 🥰

## Layout do Projeto
<p align="center">
<img src="https://user-images.githubusercontent.com/59345979/107109083-ed535800-681b-11eb-9030-f4db35c80734.png" alt="drawing" width="500" height="480"/>
</p>

##### Parte de trecho do código

```javascript
const modalOverlay = document.querySelector(".modal-overlay");
const video = document.querySelectorAll('.btn1');

for(let videoNetflix of video){
    videoNetflix.addEventListner("click, function(){
        const videoId = videoNetflix.getAttribute("id");
    	modalOverlay.classList.add("active");
    	modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
  })
};
```

## 🔨 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- HTML
- CSS
- Jquery
- Javascript

#
