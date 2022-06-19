
let  news =[
    {
        img:"https://www.cricbuzz.com/a/img/v1/290x164/i1/c236089/adjust-mindset-not-technique.jpg",
        title:"Adjust mindset, not technique - Zaheer Khan's advice to Pant",
        time:"24m ago"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/290x164/i1/c236156/rahul-dravids-backing-creates.jpg",
        title:"Jersey break Uganda's perfect streak",
        time:"24m ago"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/290x164/i1/c236134/dinesh-karthik-using-all-his-e.jpg",
        title:"Jersey break Uganda's perfect streak",
        time:"24m ago"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/290x164/i1/c236089/adjust-mindset-not-technique.jpg",
        title:"Jersey break Uganda's perfect streak",
        time:"24m ago"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/290x164/i1/c236156/rahul-dravids-backing-creates.jpg",
        title:"Jersey break Uganda's perfect streak",
        time:"24m ago"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/290x164/i1/c236134/dinesh-karthik-using-all-his-e.jpg",
        title:"Jersey break Uganda's perfect streak",
        time:"24m ago"
    }
]

displayNews(news);
function displayNews(news){
    let newsbox = document.querySelector("#right");


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


let quizArr = [
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c207781/cms-img.jpg",
        title:"World Test Championship 2021 quiz",
        dis:"How well do you remember the first season? Jump in and get yourself tested!"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c191369/cms-img.jpg",
        title:"The 'ever-cool-Kane' quiz",
        dis:"Kane Williamson turns 30 today, how well do you know the New Zealand skipper? Take this quiz and find out..."
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c191369/cms-img.jpg",
        title:"The 'Rawalpindi express' quiz",
        dis:"One of the fastest bowlers in cricket's history, Shoaib Akhtar, turns 45 today. Take this quiz and see if you can hit 10/10 correct."
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c207781/cms-img.jpg",
        title:"World Test Championship 2021 quiz",
        dis:"How well do you remember the first season? Jump in and get yourself tested!"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c191369/cms-img.jpg",
        title:"The 'ever-cool-Kane' quiz",
        dis:"Kane Williamson turns 30 today, how well do you know the New Zealand skipper? Take this quiz and find out..."
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c191369/cms-img.jpg",
        title:"The 'Rawalpindi express' quiz",
        dis:"One of the fastest bowlers in cricket's history, Shoaib Akhtar, turns 45 today. Take this quiz and see if you can hit 10/10 correct."
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c207781/cms-img.jpg",
        title:"World Test Championship 2021 quiz",
        dis:"How well do you remember the first season? Jump in and get yourself tested!"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c191369/cms-img.jpg",
        title:"The 'ever-cool-Kane' quiz",
        dis:"Kane Williamson turns 30 today, how well do you know the New Zealand skipper? Take this quiz and find out..."
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c191369/cms-img.jpg",
        title:"The 'Rawalpindi express' quiz",
        dis:"One of the fastest bowlers in cricket's history, Shoaib Akhtar, turns 45 today. Take this quiz and see if you can hit 10/10 correct."
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c207781/cms-img.jpg",
        title:"World Test Championship 2021 quiz",
        dis:"How well do you remember the first season? Jump in and get yourself tested!"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c191369/cms-img.jpg",
        title:"The 'ever-cool-Kane' quiz",
        dis:"Kane Williamson turns 30 today, how well do you know the New Zealand skipper? Take this quiz and find out..."
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c191369/cms-img.jpg",
        title:"The 'Rawalpindi express' quiz",
        dis:"One of the fastest bowlers in cricket's history, Shoaib Akhtar, turns 45 today. Take this quiz and see if you can hit 10/10 correct."
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c191369/cms-img.jpg",
        title:"The 'ever-cool-Kane' quiz",
        dis:"Kane Williamson turns 30 today, how well do you know the New Zealand skipper? Take this quiz and find out..."
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c191369/cms-img.jpg",
        title:"The 'Rawalpindi express' quiz",
        dis:"One of the fastest bowlers in cricket's history, Shoaib Akhtar, turns 45 today. Take this quiz and see if you can hit 10/10 correct."
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c207781/cms-img.jpg",
        title:"World Test Championship 2021 quiz",
        dis:"How well do you remember the first season? Jump in and get yourself tested!"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c191369/cms-img.jpg",
        title:"The 'ever-cool-Kane' quiz",
        dis:"Kane Williamson turns 30 today, how well do you know the New Zealand skipper? Take this quiz and find out..."
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c191369/cms-img.jpg",
        title:"The 'Rawalpindi express' quiz",
        dis:"One of the fastest bowlers in cricket's history, Shoaib Akhtar, turns 45 today. Take this quiz and see if you can hit 10/10 correct."
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c207781/cms-img.jpg",
        title:"World Test Championship 2021 quiz",
        dis:"How well do you remember the first season? Jump in and get yourself tested!"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c191369/cms-img.jpg",
        title:"The 'ever-cool-Kane' quiz",
        dis:"Kane Williamson turns 30 today, how well do you know the New Zealand skipper? Take this quiz and find out..."
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c191369/cms-img.jpg",
        title:"The 'Rawalpindi express' quiz",
        dis:"One of the fastest bowlers in cricket's history, Shoaib Akhtar, turns 45 today. Take this quiz and see if you can hit 10/10 correct."
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c207781/cms-img.jpg",
        title:"World Test Championship 2021 quiz",
        dis:"How well do you remember the first season? Jump in and get yourself tested!"
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c191369/cms-img.jpg",
        title:"The 'ever-cool-Kane' quiz",
        dis:"Kane Williamson turns 30 today, how well do you know the New Zealand skipper? Take this quiz and find out..."
    },
    {
        img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c191369/cms-img.jpg",
        title:"The 'Rawalpindi express' quiz",
        dis:"One of the fastest bowlers in cricket's history, Shoaib Akhtar, turns 45 today. Take this quiz and see if you can hit 10/10 correct."
    }
]


displayQuiz(quizArr);
function displayQuiz(quizarr){
    let leftdiv = document.querySelector("#left");
    quizarr.forEach(function(el){
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let img = document.createElement("img");
        let dis = document.createElement("p");
        let title =  document.createElement("p");  
        img.setAttribute("src", el.img);
        dis.innerText = el.dis;
        title.innerText = el.title;

        div1.append(img);
        div2.append(title, dis);
        div.append(div1, div2);
        leftdiv.append(div);
    });

}