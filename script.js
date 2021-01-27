$(document).ready(function(){
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    // Moment.js format for current time (Military Time)
    var currentTime = parseInt(moment().format("H"));


   
    displayBlocks();

    // This function creates the time blocks
    function displayBlocks(){

        for (let i = 9; i < 18; i++){

        
        let divBlock = $("<div>");
        $(divBlock).appendTo(".container");
        divBlock.addClass("row time-block");

         
        let hourcol = $("<div>");
        $(hourcol).appendTo(divBlock);
        hourcol.addClass("col-md-1 p-2 hour");
        hourcol.attr("id", "hour-" + i);
        hourcol.text(moment(i, "H").format("h a"));

        var textVal = localStorage.getItem("hour-"+i);
        let textArea = $("<textarea>");
        textArea.val(textVal);
        $(textArea).appendTo(divBlock);
        textArea.attr("id", "area");
        textArea.addClass("col-md-10 textarea" );


        
        let timeClass = "past"
	    if (currentTime === i) timeClass = "present"
        else if (currentTime < i) timeClass = "future"
        textArea.addClass(timeClass)

        
        let storageBtn = $("<button>");
        $(storageBtn).appendTo(divBlock);
        storageBtn.addClass("saveBtn col-md-1 far fa-save");
        
        }

        // On click function that will take the user input and store it on the local storage
        $(".saveBtn").on("click", function(){

            // This is getting the value from the text area
           var userInput = $(this).siblings("#area").val();
           // This is  getting the hour class and adding the attr id
          var timeText =  $(this).siblings(".hour").attr("id");

            localStorage.setItem(timeText, userInput);
           
          });
    }
    
      
})
