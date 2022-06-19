let photoArr = [
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c236112/india-vs-south-africa-4th-t20.jpg",
        title:"India vs South Africa, 4th T20",
        date:"Fri, Jun 17 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235945/india-vs-south-africa-3rd-t20.jpg",
        title:"India vs South Africa, 3rd T20I",
        date:"Tue, June 14 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235913/england-vs-new-zealand-2nd-te.jpg",
        title:"England vs Nealand, 2nd Test, Day 5",
        date:"Tue, June 14 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235863/england-vs-new-zealand-2nd-te.jpg",
        title:"England vs Nealand, 2nd Test, Day 4",
        date:"Mon, June 13 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235772/india-vs-south-africa-2nd-t20.jpg",
        title:"India vs South Africa, 2ns T20I Cuttack",
        date:"Sun, Jun 12 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235756/england-vs-new-zealand-2nd-te.jpg",
        title:"England vs New zealand 2nd Test, Day 3",
        date:"Sun, Jun 12 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235691/england-vs-new-zealand-2nd-te.jpg",
        title:"England vs New zealand 2nd Test, Day 2",
        date:"Sat, Jun 11 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235654/pakistan-vs-west-indies-2nd-o.jpg",
        title:"Pakistan vs West Indies 2nd ODI",
        date:"Fri, June 10 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235628/england-vs-new-zealand-2nd-te.jpg",
        title:"England vs New zealand 2nd Test, Day 3",
        date:"Sun, Jun 12 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235628/england-vs-new-zealand-2nd-te.jpg",
        title:"England vs New zealand 2nd Test, Day 2",
        date:"Sat, Jun 11 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235945/india-vs-south-africa-3rd-t20.jpg",
        title:"India vs South Africa, 3rd T20I",
        date:"Tue, June 14 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235913/england-vs-new-zealand-2nd-te.jpg",
        title:"England vs Nealand, 2nd Test, Day 5",
        date:"Tue, June 14 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235863/england-vs-new-zealand-2nd-te.jpg",
        title:"England vs Nealand, 2nd Test, Day 4",
        date:"Mon, June 13 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235772/india-vs-south-africa-2nd-t20.jpg",
        title:"India vs South Africa, 2ns T20I Cuttack",
        date:"Sun, Jun 12 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235756/england-vs-new-zealand-2nd-te.jpg",
        title:"England vs New zealand 2nd Test, Day 3",
        date:"Sun, Jun 12 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235691/england-vs-new-zealand-2nd-te.jpg",
        title:"England vs New zealand 2nd Test, Day 2",
        date:"Sat, Jun 11 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235654/pakistan-vs-west-indies-2nd-o.jpg",
        title:"Pakistan vs West Indies 2nd ODI",
        date:"Fri, June 10 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235628/england-vs-new-zealand-2nd-te.jpg",
        title:"England vs New zealand 2nd Test, Day 3",
        date:"Sun, Jun 12 2022"
    },
    {
        imglink:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c235628/england-vs-new-zealand-2nd-te.jpg",
        title:"England vs New zealand 2nd Test, Day 2",
        date:"Sat, Jun 11 2022"
    }
    
]

displayPhotos(photoArr);
function displayPhotos(photoArr){
    let mainDiv = document.querySelector(".content")
    photoArr.forEach(function(el){
        let div =  document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", el.imglink);
        let p = document.createElement("p");
        p.innerText = el.title;
        let p2 = document.createElement("p");
        p2.innerText = el.date;

        div.append(img, p, p2);
        mainDiv.append(div);
     
    })
    
}

