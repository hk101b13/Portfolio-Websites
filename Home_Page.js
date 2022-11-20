let hashtag = document.querySelector("div.Hashtags").children;
console.log(hashtag);
console.log(hashtag[3]);
let wide = document.querySelectorAll("span.wide");
console.log(wide);

for (let i = 0; i < hashtag.length; i++) {
  hashtag[i].addEventListener("mouseover", () => {
    wide[i].classList.add("bold");
    console.log(wide[i]);
  });

  hashtag[i].addEventListener("mouseout", () => {
    wide[i].classList.remove("bold");
    console.log(wide[i]);
  });
}
