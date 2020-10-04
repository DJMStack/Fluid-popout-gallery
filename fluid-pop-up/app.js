const modal = document.querySelector("modal");
const previews = document.querySelectorAll("gallery img")
const original = document.querySelector(".full-img");
const mimgYexy = document.querySelector(".caption");

previews.forEach((preview) => {
    preview.addEventListener('click', () => {
      modal.classList.add("model.open");
      original.classList("model.open")
      //Dynamic change text and image
      const originalSrc = preview.getAttribute("data-original");
      original.src = './full/${originalSrc}'
    })
})



modal.addEventListener('click', (e) => {
    if(e.target.classList.contains("modal")){
        modal.classList.remove("model.open")
        original.classList.remove("model.open")
    }
})