// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",matchinput)

var mydata = JSON.parse(localStorage.getItem("schedule")) || []

function matchinput(){
    event.preventDefault()

    var obj = {
        matchNum: masaiForm.matchNum.value,
        teamA: masaiForm.teamA.value,
        teamB: masaiForm.teamB.value,
        date: masaiForm.date.value,
        venue: masaiForm.venue.value
    }
    mydata.push(obj)
    localStorage.setItem("schedule", JSON.stringify(mydata))
    
}