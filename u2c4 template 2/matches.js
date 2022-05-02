// write js code here corresponding to matches.html

var saveddata = JSON.parse(localStorage.getItem("schedule"))||[]

displaydata(saveddata)


function displaydata(data){

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
        td6.innerText = "Add as Favorites"
        td6.style.color="green"
        td6.style.cursor="pointer"
        td6.addEventListener("click", function(){
            displayfav(el)
        })

        tr.append(td1,td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr)

    });

    function displayfav(data){
        var fav = JSON.parse(localStorage.getItem("favourites")) || []
        fav.push(data)

        localStorage.setItem("favourites", JSON.stringify(fav))
    }
}

document.querySelector("#filterVenue").addEventListener("change", filterfun)

    function filterfun(){

        var data = JSON.parse(localStorage.getItem("schedule"))||[]
        var data2 = document.querySelector("#filterVenue").value

        data.filter(function(el){
            
            if(el.venue==data2){
                var data = JSON.parse(localStorage.getItem("schedule"))
                data = []
                data.push(el)
                displaydata(data)
            }
        })
    }


