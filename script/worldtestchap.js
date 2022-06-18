let pointArr = [
    {
        pos:1,
        flag: "https://www.cricbuzz.com/a/img/v1/13x13/i1/c172117/cms-img.jpg",
        contry:"Australia",
        mathes:"8",
        won:"5",
        lost:"0",
        drawn:"3",
        nr:"0",
        points:"72",
        pct:"75.0"

    },
    {
        pos:2,
        flag: "https://www.cricbuzz.com/a/img/v1/13x13/i1/c172126/cms-img.jpg",
        contry:"South Africa",
        mathes:"8",
        won:"5",
        lost:"0",
        drawn:"3",
        nr:"0",
        points:"72",
        pct:"75.0"

    },
    {
        pos:3,
        flag: "https://www.cricbuzz.com/a/img/v1/13x13/i1/c172115/cms-img.jpg",
        contry:"India",
        mathes:"8",
        won:"5",
        lost:"0",
        drawn:"3",
        nr:"0",
        points:"72",
        pct:"75.0"

    },
    {
        pos:4,
        flag: "https://www.cricbuzz.com/a/img/v1/13x13/i1/c172119/cms-img.jpg",
        contry:"Sri Lanka",
        mathes:"8",
        won:"5",
        lost:"0",
        drawn:"3",
        nr:"0",
        points:"72",
        pct:"75.0"

    },
    {
        pos:5,
        flag: "https://www.cricbuzz.com/a/img/v1/13x13/i1/c172116/cms-img.jpg",
        contry:"Pakistan",
        mathes:"8",
        won:"5",
        lost:"0",
        drawn:"3",
        nr:"0",
        points:"72",
        pct:"75.0"

    },
    {
        pos:6,
        flag: "https://www.cricbuzz.com/a/img/v1/13x13/i1/c172124/cms-img.jpg",
        contry:"West Indies",
        mathes:"8",
        won:"5",
        lost:"0",
        drawn:"3",
        nr:"0",
        points:"72",
        pct:"75.0"

    },
    {
        pos:7,
        flag: "https://www.cricbuzz.com/a/img/v1/13x13/i1/c172128/cms-img.jpg",
        contry:"New Zealand",
        mathes:"8",
        won:"5",
        lost:"0",
        drawn:"3",
        nr:"0",
        points:"72",
        pct:"75.0"

    }
]

displayPointTable(pointArr);

function displayPointTable(pointArr){
    let tbody = document.querySelector("tbody");
    pointArr.forEach(function(el){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        td1.setAttribute("class", "textcenter");

        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        let td9 = document.createElement("td");
        let img = document.createElement("img");
        img.setAttribute("src", el.flag);
        td1.innerText = el.pos;
        td2.append(img);
        let span = document.createElement("span");
        span.innerText =  el.contry;
        td2.append(span);
        td3.innerText = el.mathes;
        td4.innerText = el.won;
        td5.innerText = el.lost;
        td6.innerText = el.drawn;
        td7.innerText = el.nr;
        td8.innerText = el.points;
        td9.innerText = el.pct;
        

        td1.setAttribute("class", "textcenter")

        td3.setAttribute("class", "textcenter")
        td4.setAttribute("class", "textcenter")
        td5.setAttribute("class", "textcenter")
        td6.setAttribute("class", "textcenter")
        td7.setAttribute("class", "textcenter")
        td8.setAttribute("class", "textcenter")
        td9.setAttribute("class", "textcenter")

        tr.append(td1,td2, td3,td4, td5,td6,td7, td8, td9)
        tbody.append(tr);
        console.log(td2);
    });
}


let  news =[
    {
        img:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c236154/the-win-took-jersey-to-third-o.jpg",
        title:"Jersey break Uganda's perfect streak",
        time:"24m ago"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c236153/i-was-disappointed-in-first.jpg",
        title:"Jersey break Uganda's perfect streak",
        time:"24m ago"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c236154/the-win-took-jersey-to-third-o.jpg",
        title:"Jersey break Uganda's perfect streak",
        time:"24m ago"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c236148/brathwaite-and-blackwood-share.jpg",
        title:"Jersey break Uganda's perfect streak",
        time:"24m ago"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c236147/avesh-khan-bagged-4-for-18-in.jpg",
        title:"Jersey break Uganda's perfect streak",
        time:"24m ago"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c236152/alzarri-joseph-picked-up-two-w.jpg",
        title:"Jersey break Uganda's perfect streak",
        time:"24m ago"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c236153/i-was-disappointed-in-first.jpg",
        title:"Jersey break Uganda's perfect streak",
        time:"24m ago"
    }
]

displayNews(news);
function displayNews(news){
    let newsbox = document.querySelector(".right");
    let h2 = document.createElement("h2");
    h2.innerText = "LATEST NEWS";
    newsbox.append(h2);
    news.forEach(function(el){
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let img = document.createElement("img");
        let time = document.createElement("p");
        let title =  document.createElement("p");
        img.setAttribute("src", el.img);
        title.innerText = el.title;
        time.innerText = el.time;
        div1.append(img)
        div2.append(title, time);
        div.append(div1, div2);
        newsbox.append(div);
        
    })
    let morebtn = document.createElement("button");
    morebtn.innerText = "More News";
    newsbox.append(morebtn);
}


