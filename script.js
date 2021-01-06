$(document).ready(function(){
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    
    var currentTime = parseInt(moment().format("H"));

    console.log(currentTime);
   
    displayBlocks();
    function displayBlocks(){

        for (var i = 9; i < 18; i++){

        var divBlock = $("<div>");
        $(divBlock).appendTo(".container");
        divBlock.addClass("row time-block");

        //2. Columns for displaying the hours 
        var hourcol = $("<div>");
        $(hourcol).appendTo(divBlock);
        hourcol.addClass("col-md-1 p-2 hour");
        hourcol.attr("id", "hour-" + i);
        hourcol.text(moment(i, "H").format("h a"));

        //3. Textarea column so it can recieve input from the user
        var textArea = $("<textarea>");
        $(textArea).appendTo(divBlock);
        textArea.attr("id", "area");
        textArea.addClass("col-md-10 textarea" );
        
        let timeClass = "past"
	    if (currentTime === i) timeClass = "present"
        else if (currentTime < i) timeClass = "future"
        textArea.addClass(timeClass)

        //4. Columns on the left sign with save buttons
        var storageBtn = $("<button>");
        $(storageBtn).appendTo(divBlock);
        storageBtn.addClass("saveBtn col-md-1 far fa-save");
        
        }
        //Todo - Change this to target the document first because the saveBtn is dynamic.

        $(".saveBtn").on("click", function(){
            // This is getting the value from the text area
           var userInput = $(this).siblings("#area").val();
           // This is  getting the hour class and adding the attr id
          var timeText =  $(this).siblings(".hour").attr("id");

            localStorage.setItem(timeText, userInput);
            
          });
    }
    // Need to update html with the values from each item of local storage
    //Get Item
      
})
