$(document).ready(function(){
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    var currentTime = moment().format('LT');
    

    
   
    displayBlocks();
    function displayBlocks(){

        for (var i = 0; i < 9; i++){

            //3rd Task
            // The time blocks need to be color coded depending on the hour
            // How can we account for time
            // if its past gray, present red and future green

            

        //1. Rows for each individual hour (9)
        var divRow = $("<div>");
        $(divRow).appendTo(".container");
        divRow.addClass("row time-block");
        //2. Columns for displaying the hours 
            
        var hourcol = $("<div>");
        $(hourcol).appendTo(divRow);
        hourcol.addClass("col-md-1 p-2 hour ");
        //targeting the current day basically we need to target the individual hour block
        //if i is less than 3 text i which is 0 plus 9 which is 2++
        
        if(i <3){
            hourcol.text(i + 9 + "am")
        }
        //if i is equal to 3 then text i which is 0 and 9
        else if (i === 3){
            hourcol.text(i + 9 +"pm")
        }
        //if i is more than 3 then
        else{
            hourcol.text(-3 + i +"pm")
        }

        //3. Textarea column so it can recieve input from the user
        var userInput = $("<textarea>");
        $(userInput).appendTo(divRow);
        userInput.addClass("col-md-10 textarea past");
        userInput.text(currentTime).empty();
        console.log(currentTime);
        
        if (currentTime < ){
            
            //we need to compare the current time to present hours
            //we need to compare the current time to past hours
            //textarea add attribute to the one needed on the parameter

        }
        
        
        //4. Columns on the left sign with save buttons
        var storageBtn = $("<button>");
        $(storageBtn).appendTo(divRow);
        storageBtn.addClass("saveBtn col-md-1 far fa-save");

        



        }
    }
})
