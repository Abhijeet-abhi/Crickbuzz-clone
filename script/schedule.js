let sc = document.querySelector("#schedule");
let scData = [
  {
    para1: "West Indies vs Bangladesh, 1st Test. Day 1",
    para2: "Thu Jun 16.7:30 PM GMT"
  },
  {
    para1: "Sri Lanka vs Australia, 2nd ODI ",
    para2: "Thu Jun 16 2:30 PM GMT"
  },
  {
    para1: "Netherlands vs England, 1st ODI",
    para2: "Fri Jun 17 2:30 PM GMT"
  },

  {
    para1: "West Indies vs Bangladesh 1st Test. Day 2",
    para2: "Fri Jun 17.7:30 PM GMT"
  },
  {
    para1: "Netherlands vs England, 2nd ODI",
    para2: "Sun Jun 19.2:30 PM GMT"
  }
];
schedulefun(scData);

function schedulefun(data) {
  data.forEach(function (elem, index) {
    if (data.length == index + 1) {
      let div = document.createElement("div");
      let p1 = document.createElement("p");
      p1.innerText = elem.para1;
      let p2 = document.createElement("p");
      p2.innerText = elem.para2;
      let a1 = document.createElement("a");
      a1.href = "#";
      a1.innerText = "More Matches..";
      a1.style.color = "blue";
      a1.style.fontStyle = "italic";
      div.append(p1, p2, a1);
      sc.append(div);
    } else {
      let div = document.createElement("div");
      let p1 = document.createElement("p");
      p1.innerText = elem.para1;
      let p2 = document.createElement("p");
      p2.innerText = elem.para2;
      let hr = document.createElement("hr");
      div.append(p1, p2, hr);
      sc.append(div);
    }
  });
}
