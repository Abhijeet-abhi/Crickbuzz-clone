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
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235608/shane-bond-meets-the-local-pre.jpg",p1:"CRICBUZZ REWIND",p2:"Live and Let Fly: Shane Bond's unforgettable club season in Cumbria",p3:"In the summer of 1999, the chairman of an out-of-luck club took a gamble on an unknown 23-year-old New Zealander, with spectacular results",p4:"Jun 10 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235420/theres-a-reason-why-marcus-co.jpg",p1:"DIALOGUE ROOM",p2:"The Marcus behind 'Stoin'",p3:"The larger-than-life and fun-loving 'Stoin' or the sensitive and deep-thinking Marcus: which one's the real Marcus Stoinis? In a candid chat with Cricbuzz, the Australian all-rounder opens up on the 'two different types of people' he is, the big role his father played in how he approaches life and cricket, and more",p4:"Jun 06 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235266/the-victorious-gujarat-titans.jpg",p1:"DIALOGUE ROOM",p2:"Behind the scenes of Gujarat Titans' IPL win with Gary Kirsten",p3:"How a team that was short on 'rockstars' overcame the odds with good leadership - from the owners down to the captain",p4:"Jun 02 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c234836/mental-fatigue-or-shot-selecti.jpg",p1:"THINK TANK",p2:"Kohli of 2018 vs 2022: What's changed with his technique",p3:"An illustrative and comparative assessment of what's changed in Virat Kohli's game and what could be going wrong for him in the last two and a half years, a period during which he hasn't hit an international hundred",p4:"May 25 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235864/once-a-test-specialist-hazlew.jpg",p1:"THINK TANK",p2:"Hard to hit: How Test specialists are turning over a new leaf in T20 bowling",p3:"The latest answer to counter batting domination was always right in front of our eyes. But why has it come to the forefront now?",p4:"1d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c234698/the-74-game-season-has-left-ev.jpg",p1:"REFLECTIONS",p2:"Why a 74-match IPL is ripe for satire",p3:"The extended 2022 IPL has left everyone exhausted - except, that is, for the commercial arm. What are we to make of this exercise in late-stage capitalism as it feels more and more like a second division club competition?",p4:"May 24 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c234457/he-may-be-in-the-twilight-of-h.jpg",p1:"DIALOGUE ROOM",p2:"The Captain's journal ft. Faf du Plessis",p3:"He may be in the twilight of his career, but the respected South African is still finding meaning in cricket - largely through his journey of leadership. He speaks about his experiences with RCB this season in an exclusive interview",p4:"May 21 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c234025/livingstone-has-been-in-fine-t.jpg",p1:"DIALOGUE ROOM",p2:"'Over the last couple of years, I've channeled my six-hitting ability the right way'",p3:"In an exclusive interview, Livingstone provides a peek into his six-hitting prowess, his uncluttered mind and his IPL experiences",p4:"May 16 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c233589/from-ipl-final-last-year-to-th.jpg",p1:"THINK TANK",p2:"Why KKR have flattered to deceive",p3:"Having emerged strong out of the mega auction, KKR now sit seventh on the points table after losing seven of their 12 games thus far. And a spot in the Playoffs feel like a long haul away. R Prasanna looks into what's going wrong for the franchise this year",p4:"May 12 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c233079/david-warner-should-stand-as-t.jpg",p1:"REFLECTIONS",p2:"The Bull in winter",p3:"Warner's was a career born in T20. He was 'the person thrown out there', the one who legitimised it by reverse-engineering a path to Test cricket",p4:"May 07 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c232685/ferguson-is-currently-plying-h.jpg",p1:"DIALOGUE ROOM",p2:"'I get excited to see express young bowlers like Umran Malik in IPL'",p3:"One of the quickest bowlers in the world, Lockie Ferguson talks about his love for fast bowling, aggression, workload management, and more in an exclusive interview",p4:"May 02 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c232158/gujarat-titans-have-recorded-s.jpg",p1:"THINK TANK",p2:"Why Gujarat Titans and SunRisers Hyderabad are greater than sum of their parts",p3:"After having a middling day at the IPL auction, both GT and SRH have defied expectations and put on a series of impressive performances. We take a detailed look at how they are able to stand on their own against much stronger oppositions on paperAfter having a middling day at the IPL auction, both GT and SRH have defied expectations and put on a series of impressive performances. We take a detailed look at how they are able to stand on their own against much stronger oppositions on paper",p4:"Apr 27 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c231869/he-made-six-hitting-the-norm-i.jpg",p1:"PEOPLE WHO CHANGED IPL",p2:"Chris Gayle: IPL's Six Appeal",p3:"In this new miniseries, we revisit how a few people influenced the Indian Premier League in everlasting fashion. First up is Chris Gayle...",p4:"Apr 23 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c231594/the-men-behind-the-planning-ha.jpg",p1:"THINK TANK",p2:"Making sense of Mumbai Indians' IPL 2022 struggles",p3:"The five-time champions are winless in six games at the start of the season, an unprecedented situation for a team with an impeccable pedigree",p4:"Apr 20 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c231132/under-flemings-coaching-csk.jpg",p1:"THINK TANK",p2:"The Stephen Fleming way",p3:"Few coaches have been able to build and maintain a reputation quite like Fleming. What makes him special and different? R Prasanna recounts his experiences of working alongside him and gives a low-down",p4:"Apr 16 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c230885/en-vazhi-thani-vazhi-the.jpg",p1:"DIALOGUE ROOM",p2:"The theory of everything, with Venkatesh Iyer",p3:"Venkatesh Iyer, the rising star of KKR over the past year, opens up about his very South Indian upbringing in Indore, and how Rajinikanth helped him get through the toughest of times",p4:"Apr 13 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c230581/buttler-has-already-struck-a-c.jpg",p1:"REFLECTIONS",p2:"Jos Buttler - lost or found?",p3:"Has Jos Buttler been lost to Test match cricket, or has he, at last, found his role as a preeminent white ball batter?",p4:"Apr 10 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c230280/du-plessis-is-leading-rcbs-qu.jpg",p1:"THINK TANK",p2:"What makes Faf tick as a captain",p3:"R Prasanna looks back at his time alongside Faf du Plessis as the Proteas analyst and tells us why he could make RCB's dream come true this year",p4:"Apr 07 2022"},
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