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
                    let span=document.createElement("span")
                    span.setAttribute("class","cat")
                    span.innerText=ele.spn
                    let span1=document.createElement("span")
                    span1.setAttribute("class","p1")
                    span1.innerText=ele.p1
                p1.append(span,span1)
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

let dataForNews=[
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235894/representative-image-yashasvi.jpg",spn:"REPORTS",p1:" • RANJI TROPHY 2022",p2:"Jaiswal's charmed ton steadies Mumbai on opening day",p3:"In the other semifinal, Himanshu Mantri's maiden first class century bails MP out from a tight spot",p4:"18m ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235891/daryl-mitchells-fifty-helped.jpg",spn:"LIVE BLOG",p1:" • NEW ZEALAND TOUR OF ENGLAND, 2022",p2:"Live Cricket Score - England vs New Zealand, 2nd Test, Day 5",p3:"Catch the live updates of Day 5 of the second Test between England and New Zealand at Trent Bridge, Nottingham",p4:"2h ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235887/potts-picked-two-wickets-on-th.jpg",spn:"NEWS",p1:" • ENG VS NZ, 2ND TEST",p2:"Under 300 would be quite chaseable: Foakes",p3:"The fast scoring rates in the game so far give England hope heading into the final day",p4:"10h ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235886/ingram-and-byrom-struck-centur.jpg",spn:"REPORTS",p1:" • COUNTY CHAMPIONSHIP, 2022",p2:"County wrap: Ingram, Byrom tons power Glamorgan's strong reply",p3:"A round-up of the County Championship matches on June 13",p4:"18h ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235885/nz-lost-7-wickets-on-day-4.jpg",spn:"REPORTS",p1:" • ENGLAND VS NZ, 2ND TEST",p2:"Bowlers set up a fascinating fifth day at Trent Bridge",p3:"Trent Boult bagged a five-wicket haul before the hosts hit back with regular wickets; NZ went to Stumps at 224/7, leading by 238",p4:"18h ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235882/ipl-in-the-2023-2027-cycle-is.jpg",spn:"NEWS",p1:" • IPL MEDIA RIGHTS E-AUCTION",p2:"Digital prices soar as IPL finds space for two media rights partners",p3:"While BCCI will enjoy the obvious windfall of splitting up the television and digital rights, will two separate entities winning the bids hit the user experience?",p4:"18h ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235881/prajapati-brought-up-his-hundr.jpg",spn:"REPORTS",p1:" • ICC CRICKET WORLD CUP LEAGUE TWO 2019-23",p2:"Kashyap Prajapati's maiden ODI hundred sinks USA",p3:"Oman rode on Kashyap Prajapati's imperious hundred to hold off USA for a 13-run victory",p4:"18h ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235877/klaasens-career-best-81-off-4.jpg",spn:"FEATURES",p1:" • SA TOUR OF INDIA, 2022",p2:"Classy Klaasen: Not stand-in but standout",p3:"Competing for game time with Quinton de Kock somewhat explains Klaasen's limited international appearances, but as he showed in Cuttack, there's more to him than what meets the selectors' eye",p4:"19h ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235869/devon-conway-completed-his-hal.jpg",spn:"REPORTS",p1:" • NEW ZEALAND TOUR OF ENGLAND, 2022",p2:"Conway-Young century stand extends New Zealand's lead",p3:"New Zealand stretched their lead to 128 at Tea on the fourth day at Trent Bridge",p4:"21h ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235864/once-a-test-specialist-hazlew.jpg",spn:"CRICBUZZ PLUS",p1:" • THINK TANK",p2:"Hard to hit: How Test specialists are turning over a new leaf in T20 bowling",p3:"The latest answer to counter batting domination was always right in front of our eyes. But why has it come to the forefront now?",p4:"21h ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235865/india-trail-the-five-match-ser.jpg",spn:"PREVIEWS",p1:" • INDIA VS SA, 3RD T20I",p2:"India look for quick lift with series on the line",p3:"Twice in the series already, India have been undone by conditions and an admirably cohesive South African side",p4:"21h ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235854/james-anderson-picked-his-650t.jpg",spn:"REPORTS",p1:" • ENGLAND VS NZ, 2ND TEST",p2:"Boult fifer gives New Zealand slender lead",p3:"England were bowled out for 539 before Devon Conway and Will Young put on an unbroken 23-run stand to help New Zealand to 27/1 at Lunch",p4:"1d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235853/bahutule-will-be-the-bowling-c.jpg",spn:"NEWS",p1:" • INDIA'S TOUR OF IRELAND, 2022",p2:"Shitanshu Kotak, Sairaj Bahutule to be part of Laxman's support staff",p3:"VVS Laxman will serve as the head coach during India's short series in Ireland",p4:"1d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235849/aaron-finch-has-set-his-sights.jpg",spn:"PREVIEWS",p1:" • AUSTRALIA TOUR OF SRI LANKA, 2022",p2:"Australia out to take first steps towards Mission 2023",p3:"The visitors have been hit by a raft of injury concerns ahead of the five-match ODI series",p4:"1d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235867/trent-boult-bagged-a-five-wick.jpg",spn:"LIVE BLOG",p1:" • NEW ZEALAND TOUR OF ENGLAND, 2022",p2:"Live Cricket Score - England vs New Zealand, 2nd Test, Day 4",p3:"Catch the live updates of Day 4 of the second Test between England and New Zealand at Trent Bridge, Nottingham",p4:"1d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235847/bangladeshs-pacers-have-no-ex.jpg",spn:"NEWS",p1:" • BANGLADESH IN WEST INDIES, 2022",p2:"Bangladesh brace themselves for Dukes challenge",p3:"This will be the first time that the Bangladesh pacers will be using the Dukes ball in Test cricket",p4:"1d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235840/warner-who-died-in-march-this.jpg",spn:"NEWS",p1:" • CONTRIBUTION TO CRICKET",p2:"Warne, Lanning feature in Queen's Birthday Honours List 2022",p3:"The Australians were honored for their contribution to cricket and the community",p4:"1d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235841/were-seeing-englands-greates.jpg",spn:"NEWS",p1:" • ENG VS NZ, 2ND TEST",p2:"'Play where your feet are': Ollie Pope's new mantra",p3:"The No.3 batter scored his second Test century after piling on 187 runs with Joe Root at Trent Bridge",p4:"1d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235839/if-theres-anything-we-could.jpg",spn:"MATCH FEATURES",p1:" • SOUTH AFRICA TOUR OF INDIA, 2022",p2:"India fall for traps on a tough batting night",p3:"South African bowlers maximised the friendly conditions, catching India short on batting application and a crucial few runs",p4:"1d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235838/shadab-hit-86-with-the-bat-bef.jpg",spn:"REPORTS",p1:" • WEST INDIES TOUR OF PAKISTAN, 2021-22",p2:"Allround Shadab stars in cleansweep",p3:"After scoring 86 with the bat, Shadab came back to haunt West Indies with the ball as well",p4:"1d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235438/the-bccis-total-returns-on-th.jpg",spn:"NEWS",p1:" • IPL MEDIA RIGHTS",p2:"IPL E-Auction, Day One - The punt clearly is on the digital",p3:"From a base price of Rs 33 crore, the digital bid has so far gone up to Rs 48 crore per game",p4:"1d ago"},
    ]

let dataForPhoto=[
    {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235945/india-vs-south-africa-3rd-t20.jpg",p5:"India vs South Africa, 3rd T20I, Vizag",p4:"Tue, Jun 14 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235913/england-vs-new-zealand-2nd-te.jpg",p5:"England vs New Zealand, 2nd Test, Day 5",p4:"Tue, Jun 14 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235863/england-vs-new-zealand-2nd-te.jpg",p5:"England vs New Zealand, 2nd Test, Day 4",p4:"Mon, Jun 13 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235772/india-vs-south-africa-2nd-t20.jpg",p5:"India vs South Africa, 2nd T20I, Cuttack",p4:"Sun, Jun 12 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235756/england-vs-new-zealand-2nd-te.jpg",p5:"England vs New Zealand, 2nd Test, Day 3",p4:"Sun, Jun 12 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235691/england-vs-new-zealand-2nd-te.jpg",p5:"England vs New Zealand, 2nd Test, Day 2",p4:"Sat, Jun 11 2022"},
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
