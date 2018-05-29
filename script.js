/*global $*/
// API KEY= 2893f936c68ab9d61a64725250c2977c
$(document).ready(function(){
  
  function callAPI() {
    var url = "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=united%20states&api_key=2893f936c68ab9d61a64725250c2977c&format=json";
    return url;
}

function callMusic(country) {
    var url = callAPI();
    console.log(url);
    $.ajax({
        url: url,
        method: "GET",
        success: function(response) {
            console.log(response);
            },
    }); 
}

});