//functions
//function for display cricket news
function displayNewsData(data){
    data.forEach(function(ele){
         let news_div=document.createElement("div")
         news_div.setAttribute("class","news")
             let news_img=document.createElement("div")
             news_img.setAttribute("class","news_img")
                 let img=document.createElement("img")
                 img.setAttribute("src",ele.image)
            news_img.append(img)
             let news_text=document.createElement("div")
             news_text.setAttribute("class","news_text")
                let p1=document.createElement("p")
                p1.setAttribute("class","p1")
                p1.innerText=ele.p1
                let p2=document.createElement("p")
                p2.setAttribute("class","p2")
                p2.innerText=ele.p2
                let p3=document.createElement("p")
                p3.setAttribute("class","p3")
                p3.innerText=ele.p3
                let p4=document.createElement("p")
                p4.setAttribute("class","p4")
                p4.innerText=ele.p4
            news_text.append(p1,p2,p3,p4)
         let hr=document.createElement("hr")
         hr.setAttribute("class","line")

         news_div.append(news_img,news_text)
         document.querySelector("#append_data").append(news_div,hr)
    });
}

//function for display latest photo
function displayPhotoData(data){
    data.forEach(function(ele){
         let news_div=document.createElement("div")
         news_div.setAttribute("class","news")
             let news_img=document.createElement("div")
             news_img.setAttribute("class","news_img")
                 let img=document.createElement("img")
                 img.setAttribute("src",ele.image)
            news_img.append(img)
             let news_text=document.createElement("div")
             news_text.setAttribute("class","news_text")
                let p5=document.createElement("p")
                p5.setAttribute("class","p5")
                p5.innerText=ele.p5
                let p4=document.createElement("p")
                p4.setAttribute("class","p4")
                p4.innerText=ele.p4
             news_text.append(p5,p4)
         let hr=document.createElement("hr")
         hr.setAttribute("class","line")

         news_div.append(news_img,news_text)
         document.querySelector("#append_data2").append(news_div,hr)
    });
}



let dataForPhoto=[
    {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235945/india-vs-south-africa-3rd-t20.jpg",p5:"India vs South Africa, 3rd T20I, Vizag",p4:"Tue, Jun 14 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235913/england-vs-new-zealand-2nd-te.jpg",p5:"England vs New Zealand, 2nd Test, Day 5",p4:"Tue, Jun 14 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235863/england-vs-new-zealand-2nd-te.jpg",p5:"England vs New Zealand, 2nd Test, Day 4",p4:"Mon, Jun 13 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235772/india-vs-south-africa-2nd-t20.jpg",p5:"India vs South Africa, 2nd T20I, Cuttack",p4:"Sun, Jun 12 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235756/england-vs-new-zealand-2nd-te.jpg",p5:"England vs New Zealand, 2nd Test, Day 3",p4:"Sun, Jun 12 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235691/england-vs-new-zealand-2nd-te.jpg",p5:"England vs New Zealand, 2nd Test, Day 2",p4:"Sat, Jun 11 2022"},
    ]

let dataForNews=[
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235325/ollys-fourth-stress-fracture.jpg",p1:"SPOTLIGHT",p2:"From fractured dreams, Olly Stone's journey to hell and back",p3:"A stress fracture in the summer of 2021, which was his fourth overall, put paid to Stone's Ashes dreams. Now back to bowling fitness, it wasn't a journey devoid of self-doubts and pain. Cricbuzz was in touch with him right through and brings a first-hand experience of what it was like",p4:"Jun 03 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c232992/representative-image-a-ukrani.jpg",p1:"SPOTLIGHT",p2:"War stops play: Ukraine cricket lives in hope",p3:"It maybe parochial to consider the fate of a cricket ball right now, but when we do count up the casualties of the ongoing war, we may have to include the Ukrainian Cricket Federation",p4:"May 06 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c210032/nain-abidis-pregnancy-two-yea.jpg",p1:"MOTHERHOOD AND CRICKET",p2:"Juggling cricket with a toddler in tow",p3:"Balancing motherhood and professional cricket isn't easy, but Nain Abidi is showing that it is possible to straddle these two worlds",p4:"Jul 28 2021"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c206984/the-first-iteration-of-the-eng.jpg",p1:"MAN BEHIND THE REVOLUTION",p2:"Reminiscing about a revolution",p3:"Twenty years after his research in England motivated Stuart Robertson to conceptualise the Twenty20 format, he looks back on the success of his invention",p4:"May 19 2021"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c202845/kapil-dev-with-the-limavady-te.jpg",p1:"CRICBUZZ REWIND",p2:"Kapil the Clubbie",p3:"In 1981, Kapil Dev headed to Lancashire for a season of club cricket, where he would go head to head with a number of familiar faces from the international circuit, colleagues and opponents alike",p4:"Mar 01 2021"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c201491/joe-root-will-become-one-of-on.jpg",p1:"SPOTLIGHT - ROOT 100",p2:"Joe Root - Entertainer, perfectionist, leader, legend",p3:"In a series of exclusive interviews with Cricbuzz, those who know Root best share their memories of his career so far",p4:"Jan 31 2021"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c195469/india-england-and-australia-h.jpg",p1:"SPOTLIGHT",p2:"Money games",p3:"The financial inequalities in international cricket are being exacerbated by Covid, threatening the game's ability to remain competitive. What are the potential remedies for a broken system?",p4:"Oct 17 2020"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c193884/how-will-the-arrival-of-5g-cha.jpg",p1:"SPOTLIGHT",p2:"The revolution will not be televised",p3:"How will the arrival of 5G change the users' consumption of cricket and the boards' generation of revenue?",p4:"Oct 02 2020"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c192576/as-many-as-462-million-indians.jpg",p1:"SPOTLIGHT - IPL 2020",p2:"How will this IPL shape cricket's future?",p3:"Having grown up to become cricket's biggest tournament, how the 2020 edition of the IPL unfolds will mould the future of the game",p4:"Sep 18 2020"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c192246/newlands-hosted-matches-on-onl.jpg",p1:"THE CHANGING WORLD OF STADIUMS",p2:"The demise of the cricket cathedral",p3:"The days when cricket could be the sole purpose of a stadium are receding fast as the realities of the modern world, and Covid-19, catch up with the game",p4:"Sep 08 2020"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c190401/the-blm-movement-has-brought-t.jpg",p1:"GAPING INEQUALITY",p2:"The many shades of black on cricket's grey, unlevel playing field",p3:"Living while black in South Africa remains an unfair burden from which cricketers are not exempted",p4:"Living while black in South Africa remains an unfair burden from which cricketers are not exempted"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c190144/broad-endures-even-as-the-scru.jpg",p1:"SPOTLIGHT",p2:"The durable Mr. Broad",p3:"Stuart Broad has endured for 138 Test matches and counting. How has he done it, and as the end of his career draws ever nearer, what will his legacy be?",p4:"Jul 05 2020"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c189186/with-lesser-money-at-disposal.jpg",p1:"SPOTLIGHT",p2:"Cricket after Coronavirus",p3:"Less money in the world is likely to mean less cricket in the future, but perhaps the game will benefit",p4:"May 22 2020"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c187678/australia-came-unstuck-in-indi.jpg",p1:"SPOTLIGHT",p2:"The World Test Championships that never were: 2000-2019",p3:"In Part two, we look at the Test series played from 2000 to 2019 in six cycles to figure out who could have been the WTC champions",p4:"Mar 02 2020"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c187267/if-the-wtc-had-been-around-for.jpg",p1:"SPOTLIGHT",p2:"The World Test Championships that never were: 1980-2000",p3:"If the WTC had been around for the last 40 years, who would have won each cycle? We trawled through the history books to find out",p4:"Feb 23 2020"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c187026/womens-cricket-continues-to-h.jpg",p1:"CRICKET FOR SOCIAL CHANGE",p2:"And the maidens started swingin' it",p3:"Considered oddballs no longer than a decade ago, women's cricketers from the subcontinent are slowly becoming role-models and are at the heart of challenging social prejudice and breaking stigma",p4:"Feb 19 2020"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c186363/tasleem-khan-the-man-instrume.jpg",p1:"SPOTLIGHT",p2:"Cricket in the land of baaghis",p3:"The story of a game blooming in a land with a bloodied history",p4:"Feb 04 2020"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c185791/herschelle-gibbs-who-at-16-ye.jpg",p1:"DREAMS ON FIRE",p2:"Rainbow Dawn - SA Under-19's big Windies adventure",p3:"In 1992, South Africa picked its first Under-19 side for a hastily-arranged tour of the West Indies, allowing a carefree and racially diverse group to feel their way out into the world",p4:"Jan 23 2020"},
    ]
    
displayNewsData(dataForNews)
displayPhotoData(dataForPhoto)