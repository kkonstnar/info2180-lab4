"use strict" ;

window.onload=function()
{
    console.log("Window loaded");
    var searchbutton = document.getElementById("search");
    var searchresult = document.getElementById("result");
    searchbutton.addEventListener("click", function ()
    {
        //event.preventDefault();
        var searchvalue = document.getElementById("searchinput").value.trim();
        console.log(`Search value is ${searchvalue}`);
        console.log(`Length is: ${searchvalue.length}`);
        fetch(`superheroes.php?query=${searchvalue}`)
        //fetch("http://localhost/info2180-lab4/superheroes.php")
            .then(console.log("Fetching"))
            .then(response => response.text())
            .then(data => searchresult.innerHTML = data)
            .catch(error => 
            {
                console.log("There was an error");
                console.log(error);
            });
    });
    
};