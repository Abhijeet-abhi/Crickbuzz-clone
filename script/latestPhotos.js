let lP = document.querySelector("#latestPhotos");
let lpData = [
  {
    img:"https://www.cricbuzz.com/a/img/v1/165x95/i1/c235945/india-vs-south-africa-3rd-t20.jpg",
    para: "India vs South Africa, 3rd T201, Vizag",
    time: "Tue, Jun 14 2022",
  },
  {
    img:"https://www.cricbuzz.com/a/img/v1/165x95/i1/c235913/england-vs-new-zealand-2nd-te.jpg",
    para: "England vs New Zealand, 2nd Test, Day 5",
    time: "Tue, Jun 14 2022",
  },
  {
    img:"https://www.cricbuzz.com/a/img/v1/165x95/i1/c235863/england-vs-new-zealand-2nd-te.jpg",
    para: "England vs New Zealand 2nd Test. Day 4",
    time: "Mon, Jun 13 2022",
  },

  {
    img:"https://www.cricbuzz.com/a/img/v1/165x95/i1/c235945/india-vs-south-africa-3rd-t20.jpg",
    para: "India vs South Africa, 3rd T201, Vizag",
    time: "Tue, Jun 14 2022",
  },
  {
    img:"https://www.cricbuzz.com/a/img/v1/165x95/i1/c235945/india-vs-south-africa-3rd-t20.jpg",
    para: "India vs South Africa, 3rd T201, Vizag",
    time: "Tue, Jun 14 2022",
  },
];
latestPhotosfun(lpData);

function latestPhotosfun(data) {
  data.forEach(function (elem, index) {
    if (data.length == index + 1) {
      let div = document.createElement("div");
      let img=document.createElement("img");
      img.src=elem.img;
      let a1 = document.createElement("a");
      a1.href = "#";
      a1.innerText = elem.para;
      let time = document.createElement("p");
      time.innerText = elem.time;
      let a2 = document.createElement("a");
      a2.href = "#";
      a2.innerText = "More Photos..";
      a2.style.color="blue";
      a2.style.fontStyle="italic";
      div.append(img, a1, time,a2);
      lP.append(div);
    } else {
      let div = document.createElement("div");
      let img=document.createElement("img");
      img.src=elem.img;
      let a = document.createElement("a");
      a.href = "#";
      a.innerText = elem.para;
      let time = document.createElement("p");
      time.innerText = elem.time;
      let hr = document.createElement("hr");
      div.append(img, a, time, hr);
      lP.append(div);
    }
  });
}
