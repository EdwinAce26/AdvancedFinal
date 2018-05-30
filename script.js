/*global $*/
// API KEY= 2893f936c68ab9d61a64725250c2977c
$(document).ready(function() {

    function urlTopTracks(artist, song) {
        var url = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=2893f936c68ab9d61a64725250c2977c&artist=" + artist + "&track=" + song + "&format=json";
        return url;
    }

    function appendSongToBody(srcURL) {
        $('#results').append('<img src=' + srcURL + '>');
    }

    function callTopTracks(artist, song) {
        var url = urlTopTracks(artist, song);
        console.log(url);
        $.ajax({
            url: url,
            method: "GET",
            success: function(response) {
                var song1 = response.data[0].track.url;
                console.log(urlTopTracks);
                console.log(song1);
            },
        });
    }

    $("#searchBtn").click(function() {
        var artist = $("#search").val();
        var song = $("#search2").val();
        callTopTracks(artist, song);

    });

});
