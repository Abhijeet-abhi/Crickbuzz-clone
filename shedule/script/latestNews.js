let lN = document.querySelector("#latestNews");
let data = [
  {
    para: "KL Rahul set to miss England tour, to go abroad for treatment",
    time: "45min",
  },
  {
    para: "Roach added to West Indies Test squad",
    time: "5h ago",
  },
  {
    para: "Mustafizur shouldn't be forced to play Test cricket- Shakib",
    time: "14h ago",
  },

  {
    para: "Bangladesh include Anamul Haque for second Test against West Indies",
    time: "16h ago",
  },
  {
    para: "Markram ruled out of last two T20ls vs India",
    time: "17h ago",
  },
  {
    para: "Hardik to captain in Ireland T20Is; Samson, Tripathi picked",
    time: "18h ago",
  },
  {
    para: "ECB charge Yorkshire and 'individuals' following investigation into racism claims",
    time: "20h ago",
  },
  {
    para: "Ireland call up uncapped Stephen Doheny, Conor Olphert for India T20Is",
    time: "21h ago",
  },


];
latestNews(data);

function latestNews(data) {
  data.forEach(function (elem, index) {
    if (data.length == index + 1) {
      let div = document.createElement("div");
      let a1 = document.createElement("a");
      a1.href = "#";
      a1.innerText = elem.para;
      let time = document.createElement("p");
      time.innerText = elem.time;
      let a2 = document.createElement("a");
      a2.href = "#";
      a2.innerText = "More news..";
      a2.style.color="blue";
      a2.style.fontStyle="italic";
      div.append(a1, time,a2);
      lN.append(div);
    } else {
      let div = document.createElement("div");
      let a = document.createElement("a");
      a.href = "#";
      a.innerText = elem.para;
      let time = document.createElement("p");
      time.innerText = elem.time;
      let hr = document.createElement("hr");
      div.append(a, time, hr);
      lN.append(div);
    }
  });
}
