function displayFormData(){
    var form = document.getElementById("labForm");
    var data = new FormData(form);
    var show = document.getElementById("displayData");
    var display = "<h2>Submitted Information: </h2>";

    for(var input of data.entries()){
        display +="<p>" + input[0] +": " + pair[1] + "</p>";
    }
    show.innerHTML = display;
}