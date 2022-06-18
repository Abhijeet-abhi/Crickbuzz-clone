let sp=document.querySelector("#specials");
let specialData=[
    {
        img:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235677/perfection-is-boring-she-be.jpg",
        para1:"The Mithali constant",
        para2:"You'd be spoilt for choices trying to summarise the impact - both tangible and intangible - Mithali Raj's footprints left on the evolution of the women's sport in India"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235456/sarfaraz-khan-has-been-in-terr.jpg",
        para1:"In the world of Sarfaraz Khan",
        para2:"The hunger and desperation for hundreds have not died in him as yet as the Mumbai batter notched up another one in Alur"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c232369/in-ipl-2022-kohli-has-found-h.jpg",
        para1:"The Virat Kohli rut: What's gone rong?",
        para2:"With an average of just 16 in IPL 2022, Kohli has found himself in quicksand and the harder he's tried, the deeper he's gone down"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c234698/the-74-game-season-has-left-ev.jpg",
        para1:"Why a 74-match IPL is ripe for satire",
        para2:"The extended 2022 IPL has left everyone exhausted - except, that is, for the commercial arm. What are we to make of this exercise in late-stage capitalism as it feels more and more like a second division club competition?"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c234687/how-given-all-that-could-it.jpg",
        para1:"What does it take to win, and not to win, the IPL",
        para2:"It takes more than names and numbers to win the IPL. It needs, among other factors, belief, nerve, luck and bonding between players"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c233079/david-warner-should-stand-as-t.jpg",
        para1:"The Bull in winter",
        para2:"Warner's was a career born in T20. He was the person thrown out there, the one who legitimised it by reverse-engineering a path to Test cricket"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c228929/as-head-coach-of-delhi-capital.jpg",
        para1:"The Ricky Ponting doctrine: inside the mind of the IPL coach",
        para2:"As head coach of Delhi Capitals, Ricky Ponting headlines one of the most successful transitions in the IPL. He reflects on it all in an exclusive chat"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c231869/he-made-six-hitting-the-norm-i.jpg",
        para1:"Chris Gayle: IPL's Six Appeal",
        para2:"In this new miniseries, we revisit how a few people influenced the Indian Premier League in everlasting fashion. First up is Chris Gayle..."
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c230280/du-plessis-is-leading-rcbs-qu.jpg",
        para1:"What makes Faf tick as a captain",
        para2:"R Prasanna looks back at his time alongside Faf du Plessis as the Proteas analyst and tells us why he could make RCB's dream come true this year"
    },

]

specialsfun(specialData);
function specialsfun(data){
    data.forEach(function(elem){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=elem.img;
        let a=document.createElement("a");
        a.href="#";
        a.innerText=elem.para1;
        let p=document.createElement("p");
        p.innerText=elem.para2;
        div.append(img,a, p);
        sp.append(div);
    })
}