$(document).ready(function() {
    $("button").click(function() {
        var mname = $("#moviename").val();
        $.ajax({
            url: "http://www.omdbapi.com/?t=" + mname + "&y=&plot=short&r=json",
            success: function(result) {
                alert(result);
                var movie_det = [];
                movie_det.push("Title : "+result['Title']+"<br>");
                movie_det.push("Year : "+result['Year']+"<br>");
                movie_det.push("Rated : "+result['Rated']+"<br>");
                movie_det.push("Released : "+result['Released']+"<br>");
                movie_det.push("Runtime : "+result['Runtime']+"<br>");
                movie_det.push("Genre : "+result['Genre']+"<br>");
                movie_det.push("Director : "+result['Director']+"<br>");
                movie_det.push("Writer : "+result['Writer']+"<br>");
                movie_det.push("Actors : "+result['Actors']+"<br>");
                movie_det.push("Plot : "+result['Plot']+"<br>");
                movie_det.push("Language : "+result['Language']+"<br>");
                movie_det.push("Country : "+result['Country']+"<br>");
                movie_det.push("Awards : "+result['Awards']+"<br>");
                movie_det.push("Metascore : "+result['Metascore']+"<br>");
                movie_det.push("imdbRating : "+result['imdbRating']+"<br>");
                movie_det.push("imdbVotes : "+result['imdbVotes']+"<br>");
                movie_det.push("imdbID : "+result['imdbID']+"<br>");
                movie_det.push("Type : "+result['Type']+"<br>");
                $("#first").html(movie_det);

                if("undefined" != result['Poster']){
                  $("#pic").attr("src",result['Poster']).attr("alt",result['Title']);
                }
                else {
                  $("#second").html("NA");
                }
            },
            error: function(){
              $("#first").html("No items found");
              $("#pic").attr("src","").attr("alt","No Picture");
            }
        });
    });
});
