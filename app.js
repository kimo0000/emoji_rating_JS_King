const emoji = document.querySelector('.emojis');
const emojis = document.querySelectorAll('.emojis i');
const rating = document.querySelectorAll('.ratings');
const ratings = document.querySelectorAll('.ratings i');

// console.log(emojis, ratings);
// console.log(emoji)

ratings.forEach((rating, index) => {
  // console.log(index);
  rating.addEventListener('click', (e) => {

      toggleActive(index);

      // e.target.classList.toggle('active');

     if (e.target.id === "angry") {
       emoji.innerHTML = `<i class="fa-solid fa-face-angry active"></i>`;
     } else if (e.target.id === "meh") {
       emoji.innerHTML = `<i class="fa-solid fa-face-meh active"></i>`;
     } else if (e.target.id === "wink") {
       emoji.innerHTML = `<i class="fa-solid fa-face-grin-wink active"></i>`;
     } else if (e.target.id === "squint") {
       emoji.innerHTML = `<i class="fa-solid fa-face-laugh-squint active"></i>`;
     }  else {
       emoji.innerHTML = `<i class="fa-solid fa-face-grin-stars active"></i>`;
     }

  })
})

function toggleActive(index) {
   console.log(index)
   ratings.forEach((rat, inx) => {
      // console.log(inx);
      if(inx < index + 1) {
        //  console.log('yes Ok');
         rat.classList.add("active");
      } else {
         rat.classList.remove("active");
      }
   })
}

