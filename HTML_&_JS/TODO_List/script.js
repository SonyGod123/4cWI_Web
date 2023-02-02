let todos = [
    {id:1, title:"clean", isDone:false},
    {id:1, title:"cook", isDone:true},
    {id:1, title:"shopping", isDone:false},
    {id:1, title:"studying", isDone:false},
]
    
let html = "";
todos.forEach(element => {
    html+= "<div>" + element.title + " - " + element.isDone + "</div>";


});

document.getElementById("todos").innerHTML = html;