function displayFormData() {
    var form = document.getElementById("labForm");
    var data = new FormData(form);
    var show = document.getElementById("displayData");
    var display = "<h2>Submitted Information: </h2>";

    for (var input of data.entries()) {
        display += "<p>" + input[0] + ": " + input[1] + "</p>";
    }

    show.innerHTML = display;
}

/*Add comments to your script to answer the following questions:
 *(a) What is the use of preventDefault ( )? - the default action of an event will be cancelled if this is added 
 *(this is possible if the actions is cancelable). 
 *(b) What changes require in code to keep previous data on the page? (Write the code line that requires to modify) - 
 * we can store the previous data submitted into an object variable and concatenate future versions to it similarly to how
 * we did with the var display.
*/