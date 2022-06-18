let data1=[{ series:"England tour of Netherlands, 2022", date:"Jun 17 - Jun 22"},
{series:"Bangladesh tour of West Indies, 2022", date:"Jun 16 - Jul 16"},
{series:"Switzerland tour of Luxembourg, 2022", date:"Jun 11 - Jun 11"},
{series:"Malta tour of Belgium, 2022 ", date:"Jun 11 - Jun 12"},
{series:"Germany T20I Tri-Series 2022 ", date:"Jun 09 - Jun 12"},
{series:"South Africa tour of India, 2022", date:"Jun 09 - Jun 19"},
{series:"Australia tour of Sri Lanka, 2022",date:"Jun 07 - Jul 12"},
{series:"Afghanistan tour of Zimbabwe, 2022",date:"Jun 04 - Jun 14"},
{series:"Hungary tour of Austria, 2022 ",date:"Jun 04 - Jun 05"},
{series:"West Indies tour of Netherlands, 2022",date:"May 31 - Jun 04"},
{series:"Jersey tour of Guernsey, 2022",date:" May 20 - May 22"},
{series:"New Zealand tour of England, 2022",date:"May 20 - Jun 27"},
{series:"Namibia tour of Zimbabwe, 2022 ",date:"May 17 - May 24"},
{series:"Sri Lanka tour of Bangladesh, 2022",date:"May 11 - May 27"},
{series:"Valletta Cup 2022",date:"May 10 - May 15"},
{series:"Finland tour of Denmark, 2022 ",date:"May 07 - May 08"},
{series:"Spain Triangular T20I Series, 2022",date:"Apr 29 - May 01"},
{series:"Bahamas tour of Cayman Islands, 2022 ",date:" Apr 13 - Apr 17"},
{series:"Uganda tour of Namibia, 2022",date:"Apr 08 - Apr 10"},
{series:"Nepal T20I Tri-Series 2022 ",date:"Mar 28 - Apr 04"},
{series:"Papua New Guinea tour of Nepal, 2022",date:"Mar 25 - Mar 26"},
{series:"Bangladesh tour of South Africa, 2022 ",date:"Mar 18 - Apr 11"},
{series:"Australia tour of New Zealand, 2022 (Cancelled) ",date:"Mar 17 - Mar 20"},
{series:"Netherlands tour of New Zealand, 2022",date:"Mar 17 - Apr 04"},
{series:"Australia tour of Pakistan, 2022",date:"Mar 04 - Apr 05"},
{series:"Sri Lanka tour of India, 2022",date:"Feb 24 - Mar 16"},
{series:"Afghanistan tour of Bangladesh, 2022",date:"Feb 23 - Mar 05"},
{series:"ICC Mens T20 World Cup Qualifier A 2022",date:"Feb 18 - Feb 24"},
{series:"South Africa tour of New Zealand, 2022 ",date:"Feb 17 - Mar 01"},
{series:"Oman Quadrangular T20I Series 2022",date:"Feb 11 - Feb 14"},
{series:"Sri Lanka tour of Australia, 2022",date:"Feb 11 - Feb 20"},
{series:"West Indies tour of India, 2022",date:"Feb 06 - Feb 20"},
{series:"New Zealand tour of Australia, 2022 (Postponed)",date:"Jan 22 - Jan 24"},
{series:"England tour of West Indies, 2022",date:"Jan 22 - Mar 28"},
{series:"Afghanistan v Netherlands in Qatar, 2022",date:" Jan 21 - Jan 25"},
{series:"Zimbabwe tour of Sri Lanka, 2022 ",date:"Jan 16 - Jan 21"},
{series:"Ireland tour of West Indies, 2022",date:"Jan 08 - Jan 16"},
          ];
          let schedule2=document.querySelector("#schedule");
          data1.forEach(function(elem){
            let div1=document.createElement("div");
            let h1=document.createElement("h2");
            h1.innerText=elem.series;
            let p=document.createElement("p");
            p.innerText=elem.date;
            let hr=document.createElement("hr");
            div1.append(h1,p);
            schedule2.append(div1,hr);

          })




let data=[{ series:"T20 Blast 2022 ", date:"May 25 - Jul 16"},
{series:"Indian Premier League 2022", date:"Mar 26 - May 29"},
{series:"CSA T20 Challenge 2022 ", date:"Feb 07 - Feb 27"},
{series:"Pakistan Super League, 2022 ", date:"Jan 27 - Feb 27"},
{series:"Bangladesh Premier League 2022 ", date:"Jan 21 - Feb 18"},
{series:"Legends League Cricket 2022", date:"Jan 20 - Jan 29"},
          ];
          let schedule1=document.querySelector("#schedule1");
          data.forEach(function(elem){
            let div1=document.createElement("div");
            let h1=document.createElement("h2");
            h1.innerText=elem.series;
            let p=document.createElement("p");
            p.innerText=elem.date;
            let hr=document.createElement("hr");
            div1.append(h1,p);
            schedule1.append(div1,hr);

          })

          
let data3=[{ series:"Australia A tour of Sri Lanka, 2022  ", date:" Jun 08 - Jun 24"},
{series:"Zimbabwe A tour of Nepal, 2022 ", date:"Apr 30 - May 09"},
{series:"South Africa A tour of Zimbabwe, 2022 ", date:" Apr 25 - May 10"},
{series:"County Championship Division One 2022", date:"Apr 07 - Sep 29"},
{series:"County Championship Division Two 2022 ", date:"Apr 07 - Sep 29"},
{series:"CSA Provincial One-Day Challenge Division Two 2022", date:"Mar 11 - Apr 08"},
{series:"CSA Provincial One-Day Challenge Division One 2022",date:"Mar 11 - Apr 06"},
{series:"Ranji Trophy 2021-22",date:"Feb 17 - Jun 26"},
{series:"ICC Under 19 World Cup 2022",date:"Jan 14 - Feb 05"},
{series:"ICC Under 19 World Cup Warm up Matches 2022 ",date:"Jan 09 - Jan 13"},
          ];
          let schedule3=document.querySelector("#schedule3");
          data3.forEach(function(elem){
            let div1=document.createElement("div");
            let h1=document.createElement("h2");
            h1.innerText=elem.series;
            let p=document.createElement("p");
            p.innerText=elem.date;
            let hr=document.createElement("hr");
            div1.append(h1,p);
            schedule3.append(div1,hr);

          })


                    
let data4=[{ series:"ACC Womens T20 Championship 2022 ", date:"Jun 17 - Jun 25"},
{series:"South Africa Women tour of Ireland, 2022 ", date:"Jun 03 - Jun 17"},
{series:" Sri Lanka Women tour of Pakistan, 2022 ", date:"May 24 - Jun 05"},
{series:"Womens T20 Challenge 2022 ", date:"May 23 - May 28"},
{series:"Uganda Women tour of Nepal, 2022 ", date:"May 16 - May 21"},
{series:"Womens T20I Quadrangular Series in France, 2022 ", date:"May 05 - May 08"},
{series:"Hong Kong Women tour of UAE, 2022 ",date:"Apr 27 - Apr 30"},
{series:"Capricorn Womens Tri-Series, 2022 ",date:"Apr 20 - Apr 26"},
{series:"ICC Womens World Cup 2022 ",date:"Mar 04 - Apr 03"},
{series:"ICC Womens World Cup Warm up Matches 2022 ",date:"Feb 27 - Mar 02"},
{series:"India Women tour of New Zealand, 2022 ",date:"Feb 09 - Feb 24"},
{series:"West Indies Women tour of South Africa, 2022 ",date:"Jan 28 - Feb 06"},
{series:"Womens Ashes, 2022",date:" Jan 20 - Feb 08"},
{series:"Commonwealth Games Womens Cricket Qualifier 2022 ",date:"Jan 18 - Jan 24"},
          ];
          let schedule4=document.querySelector("#schedule4");
          data4.forEach(function(elem){
            let div1=document.createElement("div");
            let h1=document.createElement("h2");
            h1.innerText=elem.series;
            let p=document.createElement("p");
            p.innerText=elem.date;
            let hr=document.createElement("hr");
            div1.append(h1,p);
            schedule4.append(div1,hr);

          })


          let year1=[2021,2022];
          let form1=document.querySelector("#twenty");
          year1.forEach(function(elem){
            let div1=document.createElement("div");
            div1.innerText=elem;
            form1.append(div1);
          })

          let year2=[2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
          let form2=document.querySelector("#nineteen");
          year2.forEach(function(elem){
            let div1=document.createElement("div");
            div1.innerText=elem;
            form2.append(div1);
          })

          let year3=[2001,2002,2003,2004,2005,2006,2007,2008,2009,2010];
          let form3=document.querySelector("#eighteen");
          year3.forEach(function(elem){
            let div1=document.createElement("div");
            div1.innerText=elem;
            form3.append(div1);
          })


          
          let year4=[1991,1992,1993,1994,1995,1996,1997,1998,1999,2000];
          let form4=document.querySelector("#seventeen");
          year4.forEach(function(elem){
            let div1=document.createElement("div");
            div1.innerText=elem;
            form4.append(div1);
          })

          let year5=[1981,1982,1983,1984,1985,1986,1987,1988,1989,1990
          ];
          let form5=document.querySelector("#sixteen");
          year5.forEach(function(elem){
            let div1=document.createElement("div");
            div1.innerText=elem;
            form5.append(div1);
          })


          let year6=[1971,1972,1973,1974,1975,1976,1977,1978,1979,1980];
          let form6=document.querySelector("#fifteen");
          year6.forEach(function(elem){
            let div1=document.createElement("div");
            div1.innerText=elem;
            form6.append(div1);
          })

          let year7=[1961,1962,1963,1964,1965,1966,1967,1968,1969,1970
          ];
          let form7=document.querySelector("#fourteen");
          year7.forEach(function(elem){
            let div1=document.createElement("div");
            div1.innerText=elem;
            form7.append(div1);
          })

          let year8=[1951,1952,1953,1954,1955,1956,1957,1958,1959,1960
          ];
          let form8=document.querySelector("#thirteen");
          year8.forEach(function(elem){
            let div1=document.createElement("div");
            div1.innerText=elem;
            form8.append(div1);
          })

          let year9=[1946,1947,1948,1949,1950];
          let form9=document.querySelector("#twelve");
          year9.forEach(function(elem){
            let div1=document.createElement("div");
            div1.innerText=elem;
            form9.append(div1);
          })


          let year10=[1931,1932,1933,1934,1935,1936,1937,1938,1939
          ];
          let form10=document.querySelector("#eleven");
          year10.forEach(function(elem){
            let div1=document.createElement("div");
            div1.innerText=elem;
            form10.append(div1);
          })

          let year11=[1921,1922,1924,1926,1927,1928,1929,1930];
          let form11=document.querySelector("#ten");
          year11.forEach(function(elem){
            let div1=document.createElement("div");
            div1.innerText=elem;
            form11.append(div1);
          })


          let year12=[1911,1912,1913,1920];
          let form12=document.querySelector("#nine");
          year12.forEach(function(elem){
            let div1=document.createElement("div");
            div1.innerText=elem;
            form12.append(div1);
          })

          let year13=[1901,1902,1903,1905,1906,1907,1909,1910];
          let form13=document.querySelector("#eight");
          year13.forEach(function(elem){
            let div1=document.createElement("div");
            div1.innerText=elem;
            form13.append(div1);
          })

          let year14=[1892,1893,1894,1896,1897,1889];
          let form14=document.querySelector("#seven");
          year14.forEach(function(elem){
            let div1=document.createElement("div");
            div1.innerText=elem;
            form14.append(div1);
          })

          let year15=[1881,1882,1883,1884,1886,1887,1888,1889,1890];
          let form15=document.querySelector("#six");
          year15.forEach(function(elem){
            let div1=document.createElement("div");
            div1.innerText=elem;
            form15.append(div1);
          })