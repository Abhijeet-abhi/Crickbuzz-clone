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


//function for display tweet
function displayab(tweetData){
    tweetData.forEach(function(ele){
    let twit_main=document.createElement("div")
    twit_main.setAttribute("class","twit_main")
        let twit_main_child1=document.createElement("div")
        twit_main_child1.setAttribute("class","twit_main_child1")
            let tmc1=document.createElement("div")
            tmc1.setAttribute("class","tmc1")
                 let img=document.createElement("img")
                 img.setAttribute("src","https://pbs.twimg.com/profile_images/1416738703922270219/WFeuSc_K_normal.png")
                tmc1.append(img)
            let tmc2=document.createElement("div")
            tmc2.setAttribute("class","tmc2")
                 let p1=document.createElement("p")
                 p1.innerHTML=`Cricbuzz <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                 <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                 </svg>`
                 let p2=document.createElement("p")
                 p2.innerText="@Cricbuzz"
                tmc2.append(p1,p2)
            let tmc3=document.createElement("div")
            tmc3.setAttribute("class","tmc3") 
            tmc3.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>`
           twit_main_child1.append(tmc1,tmc2,tmc3)
        let tp1=document.createElement("p")
        tp1.setAttribute("class","twt1")
        tp1.innerText=ele.tp1  
        let tp2=document.createElement("p")
        tp2.setAttribute("class","twt1")
        tp2.innerText=ele.tp2
        let twit_main_child2=document.createElement("div")
        twit_main_child2.setAttribute("class","twit_main_child2")
             let tmc4=document.createElement("div")
             tmc4.setAttribute("class","tmc4")
             tmc4.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
             <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
             </svg>`

             let tmc5=document.createElement("div")
             tmc5.setAttribute("class","tmc4")
             tmc5.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
             <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
             </svg>`

             let tmc6=document.createElement("div")
             tmc6.setAttribute("class","tmc6")
                 let time=document.createElement("p")
                 time.setAttribute("class","twt1")
                 time.innerText=ele.time
                tmc6.append(time)
        twit_main_child2.append(tmc4,tmc5,tmc6)
    twit_main.append(twit_main_child1,tp1,tp2,twit_main_child2)
    let line=document.createElement("hr")
    line.setAttribute("class","line")

    document.querySelector(".for_twits").append(twit_main,line)
    })
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
let tweetData=[
    {tp1:"🚨 JUST IN 🚨",tp2:"New Zealand all-rounder Michael Bracewell has tested positive for Covid-19 a day after the conclusion of the Trent Bridge Test.#ENGvNZ",time:"4m"},
    {tp1:"On fire #YuzvendraChahal 🔥",tp2:"The accuracy of #HarshalPatel ✅@ImZaheer & @joybhattacharj praise the Indian bowling attack for their performance in the 3rd T20I, on #CricbuzzLive",time:"2h"},
    {tp1:"#ENG have been docked two WTC points after their win at Trent Bridge against #NZ for maintaining a slow over-rate.",tp2:"The sanction came after the home side was found to be two overs short of their target.https://www.cricbuzz.com/cricket-news/122644/england-docked-two-wtc-points-for-slow-over-rate-in-trent-bridge-test …",time:"2h"},
    {tp1:"'#TeamIndia का clinical प्रदर्शन, जीत देगी आत्मविश्वास' ",tp2:"Ashish Nehra और @Parthiv9 ने दी शानदार जीत पर अपनी प्रतिक्रिया, #CricbuzzLive हिन्दी पर#INDvSA",time:"8h"},
    {tp1:"Broadcasters break bank! 💵#IPL is now the second-most valuable sporting league in the world 🚨",tp2:"Here’s @Tanay_Tiwari with all you need to know about IPL’s latest broadcast deal👇",time:"9h"},
    {tp1:"India keep the series alive with a comfortable 48-run victory.",tp2:"Chahal 3/20 | Harshal 4/25 #INDvSA ",time:"20h"},
    {tp1:"One of the great 4th inning chases in Test history gives England the series 2-0 with a match to go",tp2:"160 runs in 16 overs after Tea to finish the job.",time:"20h"},
    {tp1:"125 runs in 11 overs after Tea. ",tp2:"Unreal action at Trent Bridge #ENGvNZ",time:"21h"},
    {tp1:"One of the all-time best attacking innings in Tests from Bairstow as he gets to his 100",tp2:"ENG cruising to a win now #ENGvsNZ ",time:"21h"},
    {tp1:"Axar Patel strikes in his first over. Bavuma is OUT for 8(10). ",tp2:"South Africa: 23/1 (4), need 157 runs. #INDvSA ",time:"21h"},
    ]
displayab(tweetData)  
displayNewsData(dataForNews)
displayPhotoData(dataForPhoto)