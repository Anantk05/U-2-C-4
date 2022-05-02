// write js code here corresponding to favourites.html

var saveddata = JSON.parse(localStorage.getItem("favourites"))||[]

displayfav(saveddata)



function displayfav(data){
    
    data.forEach(function(el) {
        
        var tr = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText = el.matchNum
        var td2 = document.createElement("td")
        td2.innerText = el.teamA
        var td3 = document.createElement("td")
        td3.innerText = el.teamB
        var td4 = document.createElement("td")
        td4.innerText = el.date
        var td5 = document.createElement("td")
        td5.innerText = el.venue

        var td6 = document.createElement("td")
        td6.innerText = "Delete"
        td6.style.color="red"
        td6.style.cursor="pointer"
        td6.addEventListener("click", function(){
            deletefav(el.matchNum)
        })

        tr.append(td1,td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr)

        var tbody = document.querySelector("tbody")
    });
    
}

function deletefav(data2){
    var mydata = JSON.parse(localStorage.getItem("favourites"))||[]

    mydata.filter(function(el){
        
        if(data2!=el.matchNum){ 
            
            var fav = JSON.parse(localStorage.getItem("favourites"))
            var fav = []
            fav.push(el)
            displayfav(fav)
        }
    })

    
}