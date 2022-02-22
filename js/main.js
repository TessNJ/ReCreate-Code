let count = 1;

while (count < 36) {
  //grab
  const template1 = document.querySelector("#templateLongList").content;
  //clone
  const copy = template1.cloneNode(true);
  //change
  if (count % 2 === 0) {
    copy.querySelector("h4").textContent = "Beer can Cabbage the long one";
  } else {
    copy.querySelector("h4").textContent = "Beer can Cabbage";
  }
  copy.querySelector("img").src = `https://picsum.photos/seed/${count}/300/300`;
  //parent
  const parent = document.querySelector(".moreLike");
  //append
  parent.appendChild(copy);
  count++;
}

let short = 36;

while (short < 42) {
  //grab
  const template2 = document.querySelector("#templateShortList").content;
  //clone
  const myCopy = template2.cloneNode(true);
  //change
  if (count % 2 === 0) {
    myCopy.querySelector("h4").textContent = "Beer can Cabbage the long one";
  } else {
    myCopy.querySelector("h4").textContent = "Beer can Cabbage";
  }
  myCopy.querySelector(
    "img"
  ).src = `https://picsum.photos/seed/${short}/200/200`;
  //parent
  const parentSecond = document.querySelector(".sameAuthor");
  //append
  parentSecond.appendChild(myCopy);
  short++;
}
