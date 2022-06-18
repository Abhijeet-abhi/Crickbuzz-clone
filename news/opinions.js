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
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235313/since-shakib-revealed-that-he.jpg",p1:"NEW CAPTAIN",p2:"Was BCB's best option in re-naming Shakib Test captain the right option?",p3:"Can the Bangladesh Cricket Board really justify the re-appointment of Shakib al Hasan as their Test captain?",p4:"Jun 03 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235100/bangladesh-needed-one-such-cam.jpg",p1:"GRASSROOTS DEVELOPMENT",p2:"Lack of quality spin options hurting Bangladesh in Test cricket",p3:"Spin-bowling coach Rangana Herath is heading a four-day camp for 32 spinners across Bangladesh",p4:"May 29 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c234687/how-given-all-that-could-it.jpg",p1:"INDIAN PREMIER LEAGUE 2022",p2:"What does it take to win, and not to win, the IPL",p3:"It takes more than names and numbers to win the IPL. It needs, among other factors, belief, nerve, luck and bonding between players",p4:"May 23 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c234306/cricket-for-people-like-de-ko.jpg",p1:"IPL 2022",p2:"Uncorked de Kock finally finishes IPL symphony",p3:"Before Wednesday, de Kock had passed 50 three times in 13 innings in this year's IPL",p4:"May 19 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c234181/umran-picked-up-three-wickets.jpg",p1:"IPL 2022",p2:"'Umran is on a steep learning curve' - Tom Moody",p3:"While Umran has been impressive in this year's IPL, he has been urged to learn to move the ball and add variations",p4:"May 18 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c230742/ive-really-enjoyed-being-aro.jpg",p1:"DISCIPLINARY HEARING",p2:"How much longer will Boucher remain as coach?",p3:"Boucher has been charged of being party to a culture of racism in the South Africa teams in which he played",p4:"Apr 11 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c228546/yasir-hit-a-fine-fifty-in-the.jpg",p1:"BANGLADESH TOUR OF SOUTH AFRICA, 2022",p2:"Yasir Ali stakes his claim for middle order berth",p3:"The promising batsman made the opportunity count with a fluent fifty in the 1st ODI against South Africa",p4:"Mar 18 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c228509/south-africa-will-be-without-p.jpg",p1:"INTERNATIONAL CRICKET VS IPL",p2:"Elgar's worst fears come true as stars pick IPL over Bangladesh Tests",p3:"South Africa will be without some of their first choice players for the upcoming home Tests against Bangladesh",p4:"Mar 17 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c228464/the-most-urgent-matter-on-the.jpg",p1:"SOUTH AFRICA CRICKET",p2:"CSA hope for revival post Moseki's appointment",p3:"From April 1, Pholetsi Moseki will be Cricket South Africa's chief executive for the next five years",p4:"Mar 16 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c227490/south-africa-have-turned-their.jpg",p1:"SOUTH AFRICA TOUR OF NEW ZEALAND, 2022",p2:"'Selfless' Boucher deserves credit for South Africa's turnaround",p3:"Even though Boucher's future with the South African side is uncertain, there are no doubts over his contribution in their recent success",p4:"Mar 03 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c227321/shakib-al-hasan-has-featured-i.jpg",p1:"CATCH 22",p2:"Shakib situation leaves BCB on sticky wicket",p3:"Should BCB allow the talismanic allrounder to quit Test cricket and prepare the team for the future?",p4:"Mar 01 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c227114/in-his-seven-year-career-he-h.jpg",p1:"AFGHANISTAN TOUR OF BANGLADESH, 2022",p2:"Liton continues to shine after turning a corner",p3:"Since 2020, Liton has scored 704 runs that includes four hundreds in 16 innings averaging 46.93",p4:"Feb 25 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c226986/bavuma-has-scored-three-half-c.jpg",p1:"SOUTH AFRICA TOUR OF NEW ZEALAND, 2022",p2:"'Middle order banker' Bavuma the key as SA eye turnaround",p3:"Having beaten India recently after losing the first Test, South Africa are hoping for a similar comeback in New Zealand",p4:"Feb 22 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c226594/taylor-retirement-williamso.jpg",p1:"SOUTH AFRICA TOUR OF NEW ZEALAND, 2022",p2:"New Zealand still as dangerous despite the absence of big three",p3:"Although Taylor (retirement), Williamson (injury) and Boult (birth of child) are unavailable for the for the first Test, South Africa will be well advised to not take New Zealand lightly",p4:"Feb 14 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c226342/pant-and-iyer-both-notched-up.jpg",p1:"WEST INDIES TOUR OF INDIA, 2022",p2:"Pieces of middle-order puzzle India's biggest takeaway",p3:"Reduced to 42/3, Rishabh Pant and Shreyas Iyer bailed India out of trouble to set up the clean sweep against the West Indies",p4:"Feb 12 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c226107/south-africa-have-won-six-out.jpg",p1:"SOUTH AFRICA CRICKET",p2:"When Boucher met Langer, and winning didn't matter",p3:"Despite turning around South Africa's fortunes recently, Boucher knows that winning alone will not be enough to keep his job",p4:"Feb 09 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c226009/harmer-is-the-leading-wicket-t.jpg",p1:"SOUTH AFRICA TOUR OF NEW ZEALAND, 2022",p2:"Older, wiser and better - Harmer returns to the SA dressing room",p3:"Harmer, who last played for South Africa in 2015, has been picked for the New Zealand tour",p4:"Feb 07 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c225875/langer-had-over-the-last-few-m.jpg",p1:"THANK YOU JL!",p2:"Langer evolved but the writing was on the wall",p3:"A six-month extension at the end of a four-year run was never going to work - not for a head coach who'd just reached the summit of his professional career",p4:"Feb 05 2022"},
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