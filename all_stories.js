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
displayNewsData(dataForNews)
displayPhotoData(dataForPhoto)