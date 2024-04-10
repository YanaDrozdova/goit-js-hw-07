const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const itemsEl = images.map((image) => {
  const itemEl = document.createElement("li");
  const imgEl = document.createElement("img");
  imgEl.setAttribute("url", image.url);
  imgEl.setAttribute("alt", image.alt);
  imgEl.classList.add("img");
  imgEl.setAttribute("width", 360);
  imgEl.setAttribute("height", 300);
  itemEl.append(imgEl);
  return itemEl;
});
console.log(itemsEl);

const galleryEl = document.querySelector(".gallery");
galleryEl.append(...itemsEl);

// переробила код. Але картинки так і не відображаються в браузері.
// не знаю,що робити

// другий спосіб вирішення задачі
// також картинки не відображаються

// const galleryEl = document.querySelector(".gallery");
// const markup = images
//   .map(
//     (image) =>
//       `<li class="gallery-item">
//   <img url = '${image.url}', alt = '${image.alt}'/>
//   </li> `
//   )
//   .join("");

// galleryEl.insertAdjacentHTML("afterbegin", markup);

// console.log(galleryEl);
