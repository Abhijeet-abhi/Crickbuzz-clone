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


let dataForNews=[
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235965/best-of-twitter-reactions-afte.jpg",p1:"TWITTER REACTIONS",p2:"Twitter reactions: 'Unbelievable theatre'",p3:"Best of Twitter reactions after Bairstow and Stokes took England to an epoch-making win",p4:"2h ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235938/houghton-who-has-experience-c.jpg",p1:"NEW APPOINTMENT",p2:"Dave Houghton named Zimbabwe's new head coach",p3:"incumbent coach Lalchand Rajput will assume the role of Technical Director",p4:"4h ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235914/yasir-suffered-a-back-injury-w.jpg",p1:"INJURY BLOW",p2:"Yasir Ali ruled out of West Indies Tests due to back injury",p3:"Yasir suffered a back injury while batting on 12 and subsequently retired hurt against the Cricket West Indies President's XI at CCG on 10 June",p4:"5h ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235906/the-india-opener-who-had-to.jpg",p1:"INJURY WORRIES",p2:"Injured Rahul doubtful for Edgbaston Test",p3:"The India opener, who had to be withdrawn from the T20I series against South Africa because of a groin strain, is not certain for the Edgbaston Test",p4:"5h ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235902/it-was-big-payday-for-the-bcci.jpg",p1:"IPL RIGHTS",p2:"Star India bags TV rights, Viacom18 digital in INR 48,390 crore windfall for IPL",p3:"In a first of its kind e-auction conducted by the BCCI, Star's winning bid was worth INR 23,575 crore whereas Viacom18's winning bid INR 23,758 crore",p4:"6h ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235887/potts-picked-two-wickets-on-th.jpg",p1:"ENG VS NZ, 2ND TEST",p2:"Under 300 would be quite chaseable: Foakes",p3:"The fast scoring rates in the game so far give England hope heading into the final day",p4:"17h ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235882/ipl-in-the-2023-2027-cycle-is.jpg",p1:"IPL MEDIA RIGHTS E-AUCTION",p2:"Digital prices soar as IPL finds space for two media rights partners",p3:"While BCCI will enjoy the obvious windfall of splitting up the television and digital rights, will two separate entities winning the bids hit the user experience?",p4:"1d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235853/bahutule-will-be-the-bowling-c.jpg",p1:"INDIA'S TOUR OF IRELAND, 2022",p2:"Shitanshu Kotak, Sairaj Bahutule to be part of Laxman's support staff",p3:"VVS Laxman will serve as the head coach during India's short series in Ireland",p4:"1d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235847/bangladeshs-pacers-have-no-ex.jpg",p1:"BANGLADESH IN WEST INDIES, 2022",p2:"Bangladesh brace themselves for Dukes challenge",p3:"This will be the first time that the Bangladesh pacers will be using the Dukes ball in Test cricket",p4:"1d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235840/warner-who-died-in-march-this.jpg",p1:"CONTRIBUTION TO CRICKET",p2:"Warne, Lanning feature in Queen's Birthday Honours List 2022",p3:"The Australians were honored for their contribution to cricket and the community",p4:"1d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235841/were-seeing-englands-greates.jpg",p1:"ENG VS NZ, 2ND TEST",p2:"'Play where your feet are': Ollie Pope's new mantra",p3:"The No.3 batter scored his second Test century after piling on 187 runs with Joe Root at Trent Bridge",p4:"1d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235438/the-bccis-total-returns-on-th.jpg",p1:"IPL MEDIA RIGHTS",p2:"IPL E-Auction, Day One - The punt clearly is on the digital",p3:"From a base price of Rs 33 crore, the digital bid has so far gone up to Rs 48 crore per game",p4:"2d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c213931/moeen-is-keen-on-playing-in-pa.jpg",p1:"U-TURN",p2:"'I am officially unretired' - Moeen set to return to Test cricket",p3:"The England allrounder revealed that he had a conversation with new head coach Brendon McCullum on playing in Pakistan later this year",p4:"2d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235721/mitchell-shared-a-236-run-asso.jpg",p1:"NEW ZEALAND TOUR OF ENGLAND, 2022",p2:"A double-hundred personally doesn't mean a hell of a lot: Mitchell",p3:"Mitchell fell for 190 in the second Test against England in Nottingham",p4:"2d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235720/today-i-started-my-bowling-a.jpg",p1:"RETURN FROM INJURY",p2:"Taskin, Shoriful eye return after missing WI Tests",p3:"Shoriful was ruled out from the Test series against West Indies after injuring his wrist against Sri Lanka",p4:"2d ago"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235675/the-english-bowlers-keep-pitch.jpg",p1:"NEW ZEALAND TOUR OF ENGLAND, 2022",p2:"An honest day's work, a cider spill and an unreplaced ball",p3:"New Zealand find themselves comfortably placed at 318 for 4, yet again bailed out by the fifth wicket pair of Daryl Mitchell and Tom Blundell",p4:"Jun 11 2022"},
    {image:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235643/ipl-media-rights-for-the-2023.jpg",p1:"IPL MEDIA-RIGHTS AUCTION",p2:"Media-rights auction: No global players but IPL expects big show",p3:"While it looks effectively a three-way race for the linear rights among Viacom 18, ex-owners Sony and holders Disney Star, for the digital rights, it could be Jio versus Hotstar",p4:"Jun 10 2022"},
    ]

let dataForPhoto=[
        {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235945/india-vs-south-africa-3rd-t20.jpg",p5:"India vs South Africa, 3rd T20I, Vizag",p4:"Tue, Jun 14 2022"},
        {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235913/england-vs-new-zealand-2nd-te.jpg",p5:"England vs New Zealand, 2nd Test, Day 5",p4:"Tue, Jun 14 2022"},
        {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235863/england-vs-new-zealand-2nd-te.jpg",p5:"England vs New Zealand, 2nd Test, Day 4",p4:"Mon, Jun 13 2022"},
        {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235772/india-vs-south-africa-2nd-t20.jpg",p5:"India vs South Africa, 2nd T20I, Cuttack",p4:"Sun, Jun 12 2022"},
        {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235756/england-vs-new-zealand-2nd-te.jpg",p5:"England vs New Zealand, 2nd Test, Day 3",p4:"Sun, Jun 12 2022"},
        {image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c235691/england-vs-new-zealand-2nd-te.jpg",p5:"England vs New Zealand, 2nd Test, Day 2",p4:"Sat, Jun 11 2022"},
        ]
    displayNewsData(dataForNews)
    displayPhotoData(dataForPhoto)
    