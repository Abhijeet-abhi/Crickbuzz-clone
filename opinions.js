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
    
displayNewsData(dataForNews)
displayPhotoData(dataForPhoto)