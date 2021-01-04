$(document).ready(function(){
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    displayBlocks();

    function displayBlocks(){

 

        for (var i = 0; i < 9; i++){


            if(i === 3){
                

            }

            //created the containers for the time block
        var divRow = $("<div>");
        divRow.attr("id", "rows-" + i)
        divRow.addClass("row time-block");
        $(divRow).appendTo(".container");

        var hourColumns = $("<div>");
        hourColumns.addClass("col-md-1 hour p-3");
        hourColumns.text((i+9)+ " AM")
        $(hourColumns).appendTo("#rows-"+i);
       
        

        var userText = $("<textarea>");
        userText.addClass("col-md-10 description");
        $(userText).appendTo("#rows-"+i);
        

        var saveBtn = $("<button>");
        saveBtn.addClass("col-md-1 saveBtn btn");
        $(saveBtn).appendTo("#rows-"+i);

        var saveIcon = $("<i>");
        saveIcon.addClass("far fa-save");
        $(saveIcon).appendTo(saveBtn);

        }


    }





})
