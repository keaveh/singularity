const pics = [
  'url("https://picsum.photos/220/300.jpg")',
  'url("https://picsum.photos/209/300.jpg")',
  'url("https://picsum.photos/205/300.jpg")',
  'url("https://picsum.photos/201/300.jpg")',
  'url("https://picsum.photos/290/300.jpg")',
  'url("https://picsum.photos/270/300.jpg")',
  'url("https://picsum.photos/250/300.jpg")',
  'url("https://picsum.photos/200/300.jpg")',
  'url("https://picsum.photos/240/300.jpg")',
  'url("https://picsum.photos/210/300.jpg")',
  'url("https://picsum.photos/230/300.jpg")',
  'url("https://picsum.photos/400/300.jpg")',
  'url("https://picsum.photos/260/300.jpg")',
  'url("https://picsum.photos/207/300.jpg")',
  'url("https://picsum.photos/204/300.jpg")',
];

const pic = document.querySelector("section");

function showImage() {
  var a = Math.floor(Math.random() * pics.length);
  console.log(a);
  var img = pics[a];
  console.log(img);
  pic.style.backgroundImage = img;
}

setInterval(showImage, 10);

function gentext() {
  var word = [
    "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur si",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dick incididunt ut labormyet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    "qqweqwerwerqwsdfsdfsdfsdfr",
    "enean euismod elementum. Proin sed libero suck sed faucibus. Leo a diam sollicitudin tempor id. Bibendum est ultricies integer quis. Lobortis scelerisque fermentum dui faucibus in. Cursus in hac habitasse platea dictumst quisque sagittis. Vel turpi",
    "vbnASDFASDFSDAFFFFFFFFFF",
    "hgjghDSAFFFFFFFFFFFFFFFF",
    "gfphasASDFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
    "occaecat cupidatat non proident, sunt in canlpa qui officia deserunt mollit anim id est",
  ];
  var para = document.querySelector("p");
  para.innerHTML = word[Math.floor(Math.random() * word.length)];
}
setInterval(gentext, 10);
