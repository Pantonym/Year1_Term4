$(document).ready(function () {

    // Movies Page
    // --Line 1 and 0
    var iPageNr = Math.floor(Math.random() * 293);
    // ----Generate an API link with the random page
    var sUrl = "https://api.themoviedb.org/3/search/movie?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1&page=" + iPageNr;
    // ----Base values
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: sUrl,
        success: function (data) {
            movies = data
        }
    }).done(function () {

        //Generate a random number
        var iRandom = Math.floor(Math.random() * (movies.results.length - 1));

        for (let i = 1; i < 20; i++) {

            //Find an english movie
            if (movies.results[iRandom].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

        };

        //Movie Details
        var MovieTitle = movies.results[iRandom].original_title;
        var ReleaseDate = movies.results[iRandom].release_date;
        var MovieDesc = movies.results[iRandom].overview;
        var MovieRating = movies.results[iRandom].vote_average;
        var MoviePoster = movies.results[iRandom].poster_path;
        MoviePoster = "https://image.tmdb.org/t/p/original" + MoviePoster;

        //Display details
        //document.getElementById("movie_title").innerHTML = MovieTitle;
        $("#movie_title_movie").text(MovieTitle);
        $("#img_OurTopPick").attr("src", MoviePoster);
        $("#movie_desc_movie").text(MovieDesc);
        $("#release_date_movie").text(ReleaseDate);
        $("#movie_rating_movie").text(MovieRating);

        //Drama
        //Generate a random number
        iRandom = Math.floor(Math.random() * (movies.results.length - 1));
        iRandom1 = Math.floor(Math.random() * (movies.results.length - 2));
        iRandom2 = Math.floor(Math.random() * (movies.results.length - 3));
        iRandom3 = Math.floor(Math.random() * (movies.results.length - 4));
        iRandom4 = Math.floor(Math.random() * (movies.results.length - 5));
        iRandom5 = Math.floor(Math.random() * (movies.results.length - 6));
        iRandom6 = Math.floor(Math.random() * (movies.results.length - 7));

        for (let i = 1; i < 20; i++) {

            //Find an english movie
            if (movies.results[iRandom1].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom1].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom1].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom2].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom2].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom2].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom3].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom3].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom3].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom4].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom4].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom4].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom5].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom5].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom5].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom6].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom6].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom6].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

        };

        //Movie Posters
        var MoviePoster1 = movies.results[iRandom1].poster_path;
        var MoviePoster2 = movies.results[iRandom2].poster_path;
        var MoviePoster3 = movies.results[iRandom3].poster_path;
        var MoviePoster4 = movies.results[iRandom4].poster_path;
        var MoviePoster5 = movies.results[iRandom5].poster_path;
        var MoviePoster6 = movies.results[iRandom6].poster_path;

        MoviePoster1 = "https://image.tmdb.org/t/p/original" + MoviePoster1;
        MoviePoster2 = "https://image.tmdb.org/t/p/original" + MoviePoster2;
        MoviePoster3 = "https://image.tmdb.org/t/p/original" + MoviePoster3;
        MoviePoster4 = "https://image.tmdb.org/t/p/original" + MoviePoster4;
        MoviePoster5 = "https://image.tmdb.org/t/p/original" + MoviePoster5;
        MoviePoster6 = "https://image.tmdb.org/t/p/original" + MoviePoster6;

        $("#movie_block1").attr("src", MoviePoster1);
        $("#movie_block2").attr("src", MoviePoster2);
        $("#movie_block3").attr("src", MoviePoster3);
        $("#movie_block4").attr("src", MoviePoster4);
        $("#movie_block5").attr("src", MoviePoster5);
        $("#movie_block6").attr("src", MoviePoster6);

    });

    // --Line 2
    var iPageNr = Math.floor(Math.random() * 293);
    // ----Generate an API link with the random page
    var sUrl = "https://api.themoviedb.org/3/search/movie?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1&page=" + iPageNr;
    // ----Base values
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: sUrl,
        success: function (data) {
            movies = data
        }
    }).done(function () {

        //Action
        //Generate a random number
        var iRandom1 = Math.floor(Math.random() * (movies.results.length - 2));
        var iRandom2 = Math.floor(Math.random() * (movies.results.length - 3));
        var iRandom3 = Math.floor(Math.random() * (movies.results.length - 4));
        var iRandom4 = Math.floor(Math.random() * (movies.results.length - 5));
        var iRandom5 = Math.floor(Math.random() * (movies.results.length - 6));
        var iRandom6 = Math.floor(Math.random() * (movies.results.length - 7));

        for (let i = 1; i < 20; i++) {

            //Find an english movie
            if (movies.results[iRandom1].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom1].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom1].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom2].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom2].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom2].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom3].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom3].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom3].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom4].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom4].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom4].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom5].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom5].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom5].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom6].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom6].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom6].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

        };

        //Movie Posters
        var MoviePoster1 = movies.results[iRandom1].poster_path;
        var MoviePoster2 = movies.results[iRandom2].poster_path;
        var MoviePoster3 = movies.results[iRandom3].poster_path;
        var MoviePoster4 = movies.results[iRandom4].poster_path;
        var MoviePoster5 = movies.results[iRandom5].poster_path;
        var MoviePoster6 = movies.results[iRandom6].poster_path;

        MoviePoster1 = "https://image.tmdb.org/t/p/original" + MoviePoster1;
        MoviePoster2 = "https://image.tmdb.org/t/p/original" + MoviePoster2;
        MoviePoster3 = "https://image.tmdb.org/t/p/original" + MoviePoster3;
        MoviePoster4 = "https://image.tmdb.org/t/p/original" + MoviePoster4;
        MoviePoster5 = "https://image.tmdb.org/t/p/original" + MoviePoster5;
        MoviePoster6 = "https://image.tmdb.org/t/p/original" + MoviePoster6;

        $("#movie_block7").attr("src", MoviePoster1);
        $("#movie_block8").attr("src", MoviePoster2);
        $("#movie_block9").attr("src", MoviePoster3);
        $("#movie_block10").attr("src", MoviePoster4);
        $("#movie_block11").attr("src", MoviePoster5);
        $("#movie_block12").attr("src", MoviePoster6);

    });

    // --Line 3
    var iPageNr = Math.floor(Math.random() * 293);
    // ----Generate an API link with the random page
    var sUrl = "https://api.themoviedb.org/3/search/movie?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1&page=" + iPageNr;
    // ----Base values
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: sUrl,
        success: function (data) {
            movies = data
        }
    }).done(function () {

        //Sci-Fi
        //Generate a random number
        var iRandom1 = Math.floor(Math.random() * (movies.results.length - 2));
        var iRandom2 = Math.floor(Math.random() * (movies.results.length - 3));
        var iRandom3 = Math.floor(Math.random() * (movies.results.length - 4));
        var iRandom4 = Math.floor(Math.random() * (movies.results.length - 5));
        var iRandom5 = Math.floor(Math.random() * (movies.results.length - 6));
        var iRandom6 = Math.floor(Math.random() * (movies.results.length - 7));

        for (let i = 1; i < 20; i++) {

            //Find an english movie
            if (movies.results[iRandom1].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom1].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom1].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom2].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom2].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom2].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom3].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom3].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom3].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom4].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom4].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom4].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom5].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom5].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom5].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom6].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom6].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom6].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

        };

        //Movie Posters
        var MoviePoster1 = movies.results[iRandom1].poster_path;
        var MoviePoster2 = movies.results[iRandom2].poster_path;
        var MoviePoster3 = movies.results[iRandom3].poster_path;
        var MoviePoster4 = movies.results[iRandom4].poster_path;
        var MoviePoster5 = movies.results[iRandom5].poster_path;
        var MoviePoster6 = movies.results[iRandom6].poster_path;

        MoviePoster1 = "https://image.tmdb.org/t/p/original" + MoviePoster1;
        MoviePoster2 = "https://image.tmdb.org/t/p/original" + MoviePoster2;
        MoviePoster3 = "https://image.tmdb.org/t/p/original" + MoviePoster3;
        MoviePoster4 = "https://image.tmdb.org/t/p/original" + MoviePoster4;
        MoviePoster5 = "https://image.tmdb.org/t/p/original" + MoviePoster5;
        MoviePoster6 = "https://image.tmdb.org/t/p/original" + MoviePoster6;

        $("#movie_block12").attr("src", MoviePoster1);
        $("#movie_block14").attr("src", MoviePoster2);
        $("#movie_block15").attr("src", MoviePoster3);
        $("#movie_block16").attr("src", MoviePoster4);
        $("#movie_block17").attr("src", MoviePoster5);
        $("#movie_block18").attr("src", MoviePoster6);

        //Comedy
        //Movie Posters
        //Generate a random number
        iRandom = Math.floor(Math.random() * (movies.results.length - 1));
        iRandom1 = Math.floor(Math.random() * (movies.results.length - 2));
        iRandom2 = Math.floor(Math.random() * (movies.results.length - 3));
        iRandom3 = Math.floor(Math.random() * (movies.results.length - 4));
        iRandom4 = Math.floor(Math.random() * (movies.results.length - 5));
        iRandom5 = Math.floor(Math.random() * (movies.results.length - 6));
        iRandom6 = Math.floor(Math.random() * (movies.results.length - 7));

        for (let i = 1; i < 20; i++) {

            //Find an english movie
            if (movies.results[iRandom1].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom1].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom1].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom2].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom2].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom2].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom3].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom3].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom3].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom4].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom4].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom4].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom5].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom5].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom5].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom6].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom6].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom6].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

        };

        MoviePoster1 = movies.results[iRandom1].poster_path;
        MoviePoster2 = movies.results[iRandom2].poster_path;
        MoviePoster3 = movies.results[iRandom3].poster_path;
        MoviePoster4 = movies.results[iRandom4].poster_path;
        MoviePoster5 = movies.results[iRandom5].poster_path;
        MoviePoster6 = movies.results[iRandom6].poster_path;

        MoviePoster1 = "https://image.tmdb.org/t/p/original" + MoviePoster1;
        MoviePoster2 = "https://image.tmdb.org/t/p/original" + MoviePoster2;
        MoviePoster3 = "https://image.tmdb.org/t/p/original" + MoviePoster3;
        MoviePoster4 = "https://image.tmdb.org/t/p/original" + MoviePoster4;
        MoviePoster5 = "https://image.tmdb.org/t/p/original" + MoviePoster5;
        MoviePoster6 = "https://image.tmdb.org/t/p/original" + MoviePoster6;

        $("#movie_block19").attr("src", MoviePoster1);
        $("#movie_block20").attr("src", MoviePoster2);
        $("#movie_block21").attr("src", MoviePoster3);
        $("#movie_block22").attr("src", MoviePoster4);
        $("#movie_block23").attr("src", MoviePoster5);
        $("#movie_block24").attr("src", MoviePoster6);

    });

    // --Line 4
    var iPageNr = Math.floor(Math.random() * 293);
    // ----Generate an API link with the random page
    var sUrl = "https://api.themoviedb.org/3/search/movie?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1&page=" + iPageNr;
    // ----Base values
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: sUrl,
        success: function (data) {
            movies = data
        }
    }).done(function () {

        //Comedy
        //Generate a random number
        var iRandom1 = Math.floor(Math.random() * (movies.results.length - 2));
        var iRandom2 = Math.floor(Math.random() * (movies.results.length - 3));
        var iRandom3 = Math.floor(Math.random() * (movies.results.length - 4));
        var iRandom4 = Math.floor(Math.random() * (movies.results.length - 5));
        var iRandom5 = Math.floor(Math.random() * (movies.results.length - 6));
        var iRandom6 = Math.floor(Math.random() * (movies.results.length - 7));

        for (let i = 1; i < 20; i++) {

            //Find an english movie
            if (movies.results[iRandom1].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom1].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom1].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom2].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom2].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom2].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom3].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom3].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom3].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom4].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom4].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom4].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom5].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom5].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom5].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find an english movie
            if (movies.results[iRandom6].original_language != "en") {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that has a poster
            if (movies.results[iRandom6].poster_path == null) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

            //Find a movie that is not an 'adult' film
            if (movies.results[iRandom6].adult == true) {
                iRandom = Math.floor(Math.random() * (movies.results.length - 1));
            };

        };

        //Movie Posters
        var MoviePoster1 = movies.results[iRandom1].poster_path;
        var MoviePoster2 = movies.results[iRandom2].poster_path;
        var MoviePoster3 = movies.results[iRandom3].poster_path;
        var MoviePoster4 = movies.results[iRandom4].poster_path;
        var MoviePoster5 = movies.results[iRandom5].poster_path;
        var MoviePoster6 = movies.results[iRandom6].poster_path;

        MoviePoster1 = "https://image.tmdb.org/t/p/original" + MoviePoster1;
        MoviePoster2 = "https://image.tmdb.org/t/p/original" + MoviePoster2;
        MoviePoster3 = "https://image.tmdb.org/t/p/original" + MoviePoster3;
        MoviePoster4 = "https://image.tmdb.org/t/p/original" + MoviePoster4;
        MoviePoster5 = "https://image.tmdb.org/t/p/original" + MoviePoster5;
        MoviePoster6 = "https://image.tmdb.org/t/p/original" + MoviePoster6;

        $("#movie_block19").attr("src", MoviePoster1);
        $("#movie_block20").attr("src", MoviePoster2);
        $("#movie_block21").attr("src", MoviePoster3);
        $("#movie_block22").attr("src", MoviePoster4);
        $("#movie_block23").attr("src", MoviePoster5);
        $("#movie_block24").attr("src", MoviePoster6);

    });

    //Array containing information on all the genres
    var arrGenres = [{
        id: 28,
        genre: "Action"
    }, {
        id: 12,
        genre: "Adventure"
    }, {
        id: 16,
        genre: "Animation"
    }, {
        id: 35,
        genre: "Comedy"
    }, {
        id: 80,
        genre: "Crime"
    }, {
        id: 99,
        genre: "Documentary"
    }, {
        id: 18,
        genre: "Drama"
    }, {
        id: 10751,
        genre: "Family"
    }, {
        id: 14,
        genre: "Fantasy"
    }, {
        id: 36,
        genre: "History"
    }, {
        id: 27,
        genre: "Horror"
    }, {
        id: 10402,
        genre: "Music"
    }, {
        id: 9648,
        genre: "Mystery"
    }, {
        id: 10749,
        genre: "Romance"
    }, {
        id: 878,
        genre: "Sci-Fi"
    }, {
        id: 10770,
        genre: "TV Movie"
    }, {
        id: 53,
        genre: "Thriller"
    }, {
        id: 10752,
        genre: "War"
    }, {
        id: 37,
        genre: "Western"
    }];

    //Image hover
    $("#movieImg1").mouseenter(function () {
        $("#movieButton1").css("display", "flex");
        $("#movieImg_Cont1").css("border", "4px solid red")
        $("#movieImg_Cont1").css("transition", "all 0.2s linear")
        $(this).css("object-fit", "fill")
        $(this).css("filter", "brightness(0.2)")
        $(this).css("transition", "all 0.2s linear")
        $(this).mouseleave(function () {
            $(".movieItem_Type").css("display", "none");
            $(this).css("border", "none")
            $(this).css("filter", "brightness(1.0)");
            $("#movieImg_Cont1").css("border", "none")
        })
    })
    $("#movieButton1").hover(function () {
        $(this).css("display", "flex");
        $("#movieImg1").css("filter", "brightness(0.2)")
        $("#movieImg_Cont1").css("border", "4px solid red")
        $(this).mouseleave(function () {
            $(this).css("display", "none");
            $(".image").css("filter", "brightness(1,0)")
            $(".imageContainer_movie").css("border", "none")
        })
    });

    $("#movieImg2").mouseenter(function () {
        $("#movieButton2").css("display", "flex");
        $("#movieImg_Cont2").css("border", "4px solid red")
        $("#movieImg_Cont2").css("transition", "all 0.2s linear")
        $(this).css("object-fit", "fill")
        $(this).css("filter", "brightness(0.2)")
        $(this).css("transition", "all 0.2s linear")
        $(this).mouseleave(function () {
            $(".movieItem_Type").css("display", "none");
            $(this).css("border", "none")
            $(this).css("filter", "brightness(1.0)");
            $("#movieImg_Cont2").css("border", "none")
        })
    })
    $("#movieButton2").hover(function () {
        $(this).css("display", "flex");
        $("#movieImg2").css("filter", "brightness(0.2)")
        $("#movieImg_Cont2").css("border", "4px solid red")
        $(this).mouseleave(function () {
            $(this).css("display", "none");
            $(".image").css("filter", "brightness(1,0)")
            $(".imageContainer_movie").css("border", "none")
        })

    });

    $("#movieImg3").mouseenter(function () {
        $("#movieButton3").css("display", "flex");
        $("#movieImg_Cont3").css("border", "4px solid red")
        $("#movieImg_Cont3").css("transition", "all 0.2s linear")
        $(this).css("object-fit", "fill")
        $(this).css("filter", "brightness(0.2)")
        $(this).css("transition", "all 0.2s linear")
        $(this).mouseleave(function () {
            $(".movieItem_Type").css("display", "none");
            $(this).css("border", "none")
            $(this).css("filter", "brightness(1.0)");
            $("#movieImg_Cont3").css("border", "none")
        })
    })
    $("#movieButton3").hover(function () {
        $(this).css("display", "flex");
        $("#movieImg3").css("filter", "brightness(0.2)")
        $("#movieImg_Cont3").css("border", "4px solid red")
        $(this).mouseleave(function () {
            $(this).css("display", "none");
            $(".image").css("filter", "brightness(1,0)")
            $(".imageContainer_movie").css("border", "none")
        })
    });

    $("#movieImg4").mouseenter(function () {
        $("#movieButton4").css("display", "flex");
        $("#movieImg_Cont4").css("border", "4px solid red")
        $("#movieImg_Cont4").css("transition", "all 0.2s linear")
        $(this).css("object-fit", "fill")
        $(this).css("filter", "brightness(0.2)")
        $(this).css("transition", "all 0.2s linear")
        $(this).mouseleave(function () {
            $(".movieItem_Type").css("display", "none");
            $(this).css("border", "none")
            $(this).css("filter", "brightness(1.0)");
            $("#movieImg_Cont4").css("border", "none")
        })
    })
    $("#movieButton4").hover(function () {
        $(this).css("display", "flex");
        $("#movieImg4").css("filter", "brightness(0.2)")
        $("#movieImg_Cont4").css("border", "4px solid red")
        $(this).mouseleave(function () {
            $(this).css("display", "none");
            $(".image").css("filter", "brightness(1,0)")
            $(".imageContainer_movie").css("border", "none")
        })
    });

    $("#movieImg5").mouseenter(function () {
        $("#movieButton5").css("display", "flex");
        $("#movieImg_Cont5").css("border", "4px solid red")
        $("#movieImg_Cont5").css("transition", "all 0.2s linear")
        $(this).css("object-fit", "fill")
        $(this).css("filter", "brightness(0.2)")
        $(this).css("transition", "all 0.2s linear")
        $(this).mouseleave(function () {
            $(".movieItem_Type").css("display", "none");
            $(this).css("border", "none")
            $(this).css("filter", "brightness(1.0)");
            $("#movieImg_Cont5").css("border", "none")
        })
    })
    $("#movieButton5").hover(function () {
        $(this).css("display", "flex");
        $("#movieImg5").css("filter", "brightness(0.2)")
        $("#movieImg_Cont5").css("border", "4px solid red")
        $(this).mouseleave(function () {
            $(this).css("display", "none");
            $(".image").css("filter", "brightness(1,0)")
            $(".imageContainer_movie").css("border", "none")
        })
    });

    $("#movieImg6").mouseenter(function () {
        $("#movieButton6").css("display", "flex");
        $("#movieImg_Cont6").css("border", "4px solid red")
        $("#movieImg_Cont6").css("transition", "all 0.2s linear")
        $(this).css("object-fit", "fill")
        $(this).css("filter", "brightness(0.2)")
        $(this).css("transition", "all 0.2s linear")
        $(this).mouseleave(function () {
            $(".movieItem_Type").css("display", "none");
            $(this).css("border", "none")
            $(this).css("filter", "brightness(1.0)");
            $("#movieImg_Cont6").css("border", "none")
        })
    })
    $("#movieButton6").hover(function () {
        $(this).css("display", "flex");
        $("#movieImg6").css("filter", "brightness(0.2)")
        $("#movieImg_Cont6").css("border", "4px solid red")
        $(this).mouseleave(function () {
            $(this).css("display", "none");
            $(".image").css("filter", "brightness(1,0)")
            $(".imageContainer_movie").css("border", "none")
        })
    });

    // Welcome user in home page
    $(".account_name").text(sessionStorage.getItem("Username"));
    $("#welcome_message").append(sessionStorage.getItem("Username"));

    // Header Slider  
    // --Initiate variables
    // ----Generate a random page number
    var iPageNr = Math.floor(Math.random() * 293);
    // ----Generate an API link with the random page
    var sUrl = "https://api.themoviedb.org/3/search/movie?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1&page=" + iPageNr;
    // ----Base values
    var iCounter = 0;
    var TimerID;

    // --Initialize the header slider
    getAjax();
    iCounter++;

    // --Functions to set and stop the timers
    function SetTimer() {
        TimerID = setInterval(HeaderInterval, 10000);
    }

    function StopTimer() {
        clearInterval(TimerID);
    }

    // --Call to start the timer
    SetTimer();

    // --Change the active slider indicator
    function changeActive() {

        // ----Increase the counter, and reset it to 1 if it goes over the maximum
        iCounter++;
        if (iCounter == 4) {
            iCounter = 1;
        };

        // ----Change the classes to activate and deactivate the correct slider indicators
        if (iCounter == 1) {

            $("#slider2").removeClass("slider_active");
            $("#slider2").addClass("slider_inactive");
            $("#slider3").removeClass("slider_active");
            $("#slider3").addClass("slider_inactive");

            $("#slider1").removeClass("slider_inactive");
            $("#slider1").addClass("slider_active");

        } else if (iCounter == 2) {

            $("#slider1").removeClass("slider_active");
            $("#slider1").addClass("slider_inactive");
            $("#slider3").removeClass("slider_active");
            $("#slider3").addClass("slider_inactive");

            $("#slider2").removeClass("slider_inactive");
            $("#slider2").addClass("slider_active");

        } else if (iCounter == 3) {

            $("#slider1").removeClass("slider_active");
            $("#slider1").addClass("slider_inactive");
            $("#slider2").removeClass("slider_active");
            $("#slider2").addClass("slider_inactive");

            $("#slider3").removeClass("slider_inactive");
            $("#slider3").addClass("slider_active");

            // ------Reset the counter if it reaches 3
            iCounter = 0;
        };

    };

    // --Repeating function to change the slider with a different movie after 10 seconds
    function HeaderInterval() {
        changeActive();

        getAjax();
    };

    var HeaderSliderID = "";

    // --Function to generate data from the API
    function getAjax() {

        // ----Generate a random page number and create a new url for the API
        iPageNr = Math.floor(Math.random() * 293)
        sUrl = "https://api.themoviedb.org/3/search/movie?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1&page=" + iPageNr;

        $.ajax({
            type: "GET",
            dataType: "jsonp",
            responseType: "application/json",
            url: sUrl,
            success: function (data) {
                movies = data
            }
        }).done(function () {

            // ----Generate a random number
            var iRandom = Math.floor(Math.random() * (movies.results.length - 1));

            // ----Find a relevant movie
            for (let i = 1; i < 20; i++) {

                // ------Find an english movie
                if (movies.results[iRandom].original_language != "en") {
                    iRandom = Math.floor(Math.random() * (movies.results.length - 1));
                };

                // ------Find a movie that has a poster
                if (movies.results[iRandom].poster_path == null) {
                    iRandom = Math.floor(Math.random() * (movies.results.length - 1));
                };

                // ------Find a movie that is not an 'adult' film
                if (movies.results[iRandom].adult == true) {
                    iRandom = Math.floor(Math.random() * (movies.results.length - 1));
                };

            };

            // ----Reset the API if the conditions are not met once the counter searches the entire given API page
            if (movies.results[iRandom].original_language != "en") {
                getAjax();
                return;
            };

            if (movies.results[iRandom].poster_path == null) {
                getAjax();
                return
            };

            if (movies.results[iRandom].adult == true) {
                getAjax();
                return
            };

            // ----Generate a random number
            var iRandomNext = Math.floor(Math.random() * (movies.results.length - 1));

            // ----Find a relevant movie
            for (let i = 1; i < 20; i++) {

                // ------Find an english movie
                if (movies.results[iRandomNext].original_language != "en") {
                    iRandom = Math.floor(Math.random() * (movies.results.length - 1));
                };

                // ------Find a movie that has a poster
                if (movies.results[iRandomNext].poster_path == null) {
                    iRandom = Math.floor(Math.random() * (movies.results.length - 1));
                };

                // ------Find a movie that is not an 'adult' film
                if (movies.results[iRandomNext].adult == true) {
                    iRandom = Math.floor(Math.random() * (movies.results.length - 1));
                };

            };

            // ----Movie Details
            // ------Movie title
            var MovieTitle = movies.results[iRandom].original_title;

            // --------Change the font size to respond to the length of the title
            if (MovieTitle.length > 75) {
                $("#movie_title").removeClass("font_54");
                $("#movie_title").removeClass("font_40");

                $("#movie_title").addClass("font_32");
            } else if (MovieTitle.length > 35 && MovieTitle < 75) {
                $("#movie_title").removeClass("font_54");
                $("#movie_title").removeClass("font_32");

                $("#movie_title").addClass("font_40");
            } else if (MovieTitle.length < 35) {
                $("#movie_title").removeClass("font_40");
                $("#movie_title").removeClass("font_32");

                $("#movie_title").addClass("font_54");
            }

            // ------Movie Genre
            var GenreId = movies.results[iRandom].genre_ids;

            for (let i = 0; i < arrGenres.length; i++) {

                if (arrGenres[i].id == GenreId[0]) {
                    var MovieGenre = arrGenres[i].genre;
                }

            }

            // ------Movie Rating
            var MovieRating = movies.results[iRandom].vote_average;

            // ------Movie Runtime
            $.ajax({
                type: "GET",
                dataType: "jsonp",
                responseType: "application/json",
                url: "https://api.themoviedb.org/3/movie/" + movies.results[iRandom].id + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
                success: function (data) {
                    runtime = data
                }
            }).done(function () {
                var MovieRuntime = runtime.runtime;
                $("#minutes").text(MovieRuntime + " min");
            });


            // ------Movie Description
            var MovieDesc = movies.results[iRandom].overview;

            // --------Shortening the length of the description if it is too long
            if (MovieDesc.length > 356) {
                MovieDesc = MovieDesc.substring(0, 356);

                MovieDesc = MovieDesc + "...";
            }

            // ------Release Date
            var ReleaseDate = movies.results[iRandom].release_date;
            ReleaseDate = ReleaseDate.substring(0, 4);

            // ------Building the movie poster link
            var MoviePoster = "https://image.tmdb.org/t/p/original" + movies.results[iRandom].poster_path;

            // ------Displaying the data
            $("#movie_title").text(MovieTitle);
            $("#genre").text(MovieGenre);
            $("#rating").text(MovieRating);
            $("#movie_desc").text(MovieDesc);
            $("#vid_year").text(ReleaseDate);
            $("#vid_poster").attr("src", MoviePoster);

            // ------Log the ID of the movie
            HeaderSliderID = movies.results[iRandom].id;
        });

    };

    //--Arrow functionality
    $("#slider_left").click(function () {
        StopTimer();

        iCounter++;
        changeActive();

        getAjax();
        SetTimer();

    });

    $("#slider_right").click(function () {
        StopTimer();

        changeActive();

        getAjax();
        SetTimer();

    });

    // Home Page: populating the cards
    // --Create an array to store the movie IDs
    var arrMovieIDs = [198306, 207703, 37136, 333339, 20766, 888, 11398, 1620, 15251];
    var arrSeriesIDs = [2490, 593, 790];

    var iCounter2 = 0;
    var sOutputID = "";

    // --For loop to populate movies
    for (let i = 0; i < 9; i++) {

        $.ajax({
            type: "GET",
            dataType: "jsonp",
            responseType: "application/json",
            url: "https://api.themoviedb.org/3/movie/" + arrMovieIDs[i] + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
            success: function (data) {
                cards = data
            }
        }).done(function () {
            var MovieCardPoster = "https://image.tmdb.org/t/p/original" + cards.poster_path;

            iCounter2++;
            sOutputID = "#movie_home_" + (iCounter2);

            $(sOutputID).attr("src", MovieCardPoster);
        });

    };

    var iCounter3 = 0;

    // --For loop to populate series
    for (let i = 0; i < 3; i++) {

        $.ajax({
            type: "GET",
            dataType: "jsonp",
            responseType: "application/json",
            url: "https://api.themoviedb.org/3/tv/" + arrSeriesIDs[i] + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
            success: function (data) {
                cardsSeries = data
            }
        }).done(function () {
            var MovieCardPoster = "https://image.tmdb.org/t/p/original" + cardsSeries.seasons[1].poster_path;

            iCounter3++;
            sOutputID = "#series_home_" + (iCounter3);

            $(sOutputID).attr("src", MovieCardPoster);
        });

    };

    // --Populating the suggested video
    var iRandomIframe = Math.floor(Math.random() * (3) + 1);

    if (iRandomIframe == 1) {

        $.ajax({
            type: "GET",
            dataType: "jsonp",
            responseType: "application/json",
            url: "https://api.themoviedb.org/3/movie/1620?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
            success: function (data) {
                iframe_data = data
            }
        }).done(function () {

            $("#iframe_yt").attr("src", "https://www.youtube.com/embed/E5TDFVmzw2U"); //Hitman
            $("#iframe_title").text(iframe_data.original_title);

            $("#iframe_desc").text(iframe_data.overview);

        });

    } else if (iRandomIframe == 2) {

        $.ajax({
            type: "GET",
            dataType: "jsonp",
            responseType: "application/json",
            url: "https://api.themoviedb.org/3/movie/207703?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
            success: function (data) {
                iframe_data = data
            }
        }).done(function () {

            $("#iframe_yt").attr("src", "https://www.youtube.com/embed/kl8F-8tR8to"); //kingsman
            $("#iframe_title").text(iframe_data.original_title);

            $("#iframe_desc").text(iframe_data.overview);

        });

    } else if (iRandomIframe == 3) {

        $.ajax({
            type: "GET",
            dataType: "jsonp",
            responseType: "application/json",
            url: "https://api.themoviedb.org/3/movie/37136?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
            success: function (data) {
                iframe_data = data
            }
        }).done(function () {

            $("#iframe_yt").attr("src", "https://www.youtube.com/embed/aIOWG7lKfKk"); //Naked Gun
            $("#iframe_title").text(iframe_data.original_title);

            $("#iframe_desc").text(iframe_data.overview);

        });

    };

    // click sign out
    $(".account_name").click(function () {

        if (confirm("Are you sure you want to sign out?") == true) {
            window.open("login.html", "_self");

            sessionStorage.clear;
            bFlag = false;
        };

    });

    // Go to individual movie page clicks
    // --Home page header slider click to individual movie
    $("#header_btn").click(function () {
        sessionStorage.setItem("MovieID", HeaderSliderID);
        window.location.href = "singlemovie.html";
        sessionStorage.setItem("WatchlistAdd", HeaderSliderID);
    });

    $("#add").click(function () {
        sessionStorage.setItem("WatchlistAdd", HeaderSliderID);
    });

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: "https://api.themoviedb.org/3/movie/" + sessionStorage.getItem("MovieID") + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
        success: function (data) {
            individual_movie_data = data
        }
    }).done(function () {

        $("#movie_poster_single").attr("src", "https://image.tmdb.org/t/p/original" + individual_movie_data.poster_path);
        $("#movie_title_single").append(individual_movie_data.original_title);
        $("#genre_single").append(individual_movie_data.genres[0].name);
        $("#rating_single").append(individual_movie_data.vote_average);
        $("#minutes_single").append(individual_movie_data.runtime);
        $("#movie_desc_single").append(individual_movie_data.overview);
        $("#vid_year_single").append(individual_movie_data.release_date.substring(0, 4));
        $(".background-img").css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original' + individual_movie_data.poster_path + '"');
    });

    sessionStorage.removeItem("MovieID");

    // --Movies
    // ----Movie 1 click
    var sVidSRC = "";
    $("#movie_home_1").click(function () {
        sVidSRC = $("#movie_home_1").attr("src");
        sVidSRC = sVidSRC.substring(35, sVidSRC.length);

        for (let i = 0; i < arrMovieIDs.length; i++) {

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                responseType: "application/json",
                url: "https://api.themoviedb.org/3/movie/" + arrMovieIDs[i] + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
                success: function (data) {
                    find_movie = data
                }
            }).done(function () {

                if (find_movie.poster_path == sVidSRC) {
                    sessionStorage.setItem("MovieID", arrMovieIDs[i]);
                    window.location.href = "singlemovie.html";
                }

            });

        };

    });

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: "https://api.themoviedb.org/3/movie/" + sessionStorage.getItem("MovieID") + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
        success: function (data) {
            individual_movie_data = data
        }
    }).done(function () {

        $("#movie_poster_single").attr("src", "https://image.tmdb.org/t/p/original" + individual_movie_data.poster_path);
        $("#movie_title_single").append(individual_movie_data.original_title);
        $("#genre_single").append(individual_movie_data.genres[0].name);
        $("#rating_single").append(individual_movie_data.vote_average);
        $("#minutes_single").append(individual_movie_data.runtime);
        $("#movie_desc_single").append(individual_movie_data.overview);
        $("#vid_year_single").append(individual_movie_data.release_date.substring(0, 4));
        $(".background-img").css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original' + individual_movie_data.poster_path + '"');

    });

    sessionStorage.removeItem("MovieID");

    // ----Movie 2 click
    sVidSRC = "";
    $("#movie_home_2").click(function () {
        sVidSRC = $("#movie_home_2").attr("src");
        sVidSRC = sVidSRC.substring(35, sVidSRC.length);

        for (let i = 0; i < arrMovieIDs.length; i++) {

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                responseType: "application/json",
                url: "https://api.themoviedb.org/3/movie/" + arrMovieIDs[i] + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
                success: function (data) {
                    find_movie = data
                }
            }).done(function () {

                if (find_movie.poster_path == sVidSRC) {
                    sessionStorage.setItem("MovieID", arrMovieIDs[i]);
                    window.location.href = "singlemovie.html";
                }

            });

        };

    });

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: "https://api.themoviedb.org/3/movie/" + sessionStorage.getItem("MovieID") + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
        success: function (data) {
            individual_movie_data = data
        }
    }).done(function () {

        $("#movie_poster_single").attr("src", "https://image.tmdb.org/t/p/original" + individual_movie_data.poster_path);
        $("#movie_title_single").append(individual_movie_data.original_title);
        $("#genre_single").append(individual_movie_data.genres[0].name);
        $("#rating_single").append(individual_movie_data.vote_average);
        $("#minutes_single").append(individual_movie_data.runtime);
        $("#movie_desc_single").append(individual_movie_data.overview);
        $("#vid_year_single").append(individual_movie_data.release_date.substring(0, 4));
        $(".background-img").css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original' + individual_movie_data.poster_path + '"');

    });

    sessionStorage.removeItem("MovieID");

    // ----Movie 3 click
    sVidSRC = "";
    $("#movie_home_3").click(function () {
        sVidSRC = $("#movie_home_3").attr("src");
        sVidSRC = sVidSRC.substring(35, sVidSRC.length);

        for (let i = 0; i < arrMovieIDs.length; i++) {

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                responseType: "application/json",
                url: "https://api.themoviedb.org/3/movie/" + arrMovieIDs[i] + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
                success: function (data) {
                    find_movie = data
                }
            }).done(function () {

                if (find_movie.poster_path == sVidSRC) {
                    sessionStorage.setItem("MovieID", arrMovieIDs[i]);
                    window.location.href = "singlemovie.html";
                }

            });

        };

    });

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: "https://api.themoviedb.org/3/movie/" + sessionStorage.getItem("MovieID") + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
        success: function (data) {
            individual_movie_data = data
        }
    }).done(function () {

        $("#movie_poster_single").attr("src", "https://image.tmdb.org/t/p/original" + individual_movie_data.poster_path);
        $("#movie_title_single").append(individual_movie_data.original_title);
        $("#genre_single").append(individual_movie_data.genres[0].name);
        $("#rating_single").append(individual_movie_data.vote_average);
        $("#minutes_single").append(individual_movie_data.runtime);
        $("#movie_desc_single").append(individual_movie_data.overview);
        $("#vid_year_single").append(individual_movie_data.release_date.substring(0, 4));
        $(".background-img").css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original' + individual_movie_data.poster_path + '"');

    });

    sessionStorage.removeItem("MovieID");

    // ----Movie 4 click
    sVidSRC = "";
    $("#movie_home_4").click(function () {
        sVidSRC = $("#movie_home_4").attr("src");
        sVidSRC = sVidSRC.substring(35, sVidSRC.length);

        for (let i = 0; i < arrMovieIDs.length; i++) {

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                responseType: "application/json",
                url: "https://api.themoviedb.org/3/movie/" + arrMovieIDs[i] + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
                success: function (data) {
                    find_movie = data
                }
            }).done(function () {

                if (find_movie.poster_path == sVidSRC) {
                    sessionStorage.setItem("MovieID", arrMovieIDs[i]);
                    window.location.href = "singlemovie.html";
                }

            });

        };

    });

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: "https://api.themoviedb.org/3/movie/" + sessionStorage.getItem("MovieID") + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
        success: function (data) {
            individual_movie_data = data
        }
    }).done(function () {

        $("#movie_poster_single").attr("src", "https://image.tmdb.org/t/p/original" + individual_movie_data.poster_path);
        $("#movie_title_single").append(individual_movie_data.original_title);
        $("#genre_single").append(individual_movie_data.genres[0].name);
        $("#rating_single").append(individual_movie_data.vote_average);
        $("#minutes_single").append(individual_movie_data.runtime);
        $("#movie_desc_single").append(individual_movie_data.overview);
        $("#vid_year_single").append(individual_movie_data.release_date.substring(0, 4));
        $(".background-img").css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original' + individual_movie_data.poster_path + '"');

    });

    sessionStorage.removeItem("MovieID");

    // ----Movie 5 click
    sVidSRC = "";
    $("#movie_home_5").click(function () {
        sVidSRC = $("#movie_home_5").attr("src");
        sVidSRC = sVidSRC.substring(35, sVidSRC.length);

        for (let i = 0; i < arrMovieIDs.length; i++) {

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                responseType: "application/json",
                url: "https://api.themoviedb.org/3/movie/" + arrMovieIDs[i] + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
                success: function (data) {
                    find_movie = data
                }
            }).done(function () {

                if (find_movie.poster_path == sVidSRC) {
                    sessionStorage.setItem("MovieID", arrMovieIDs[i]);
                    window.location.href = "singlemovie.html";
                }

            });

        };

    });

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: "https://api.themoviedb.org/3/movie/" + sessionStorage.getItem("MovieID") + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
        success: function (data) {
            individual_movie_data = data
        }
    }).done(function () {

        $("#movie_poster_single").attr("src", "https://image.tmdb.org/t/p/original" + individual_movie_data.poster_path);
        $("#movie_title_single").append(individual_movie_data.original_title);
        $("#genre_single").append(individual_movie_data.genres[0].name);
        $("#rating_single").append(individual_movie_data.vote_average);
        $("#minutes_single").append(individual_movie_data.runtime);
        $("#movie_desc_single").append(individual_movie_data.overview);
        $("#vid_year_single").append(individual_movie_data.release_date.substring(0, 4));
        $(".background-img").css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original' + individual_movie_data.poster_path + '"');

    });

    sessionStorage.removeItem("MovieID");

    // ----Movie 6 click
    sVidSRC = "";
    $("#movie_home_6").click(function () {
        sVidSRC = $("#movie_home_6").attr("src");
        sVidSRC = sVidSRC.substring(35, sVidSRC.length);

        for (let i = 0; i < arrMovieIDs.length; i++) {

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                responseType: "application/json",
                url: "https://api.themoviedb.org/3/movie/" + arrMovieIDs[i] + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
                success: function (data) {
                    find_movie = data
                }
            }).done(function () {

                if (find_movie.poster_path == sVidSRC) {
                    sessionStorage.setItem("MovieID", arrMovieIDs[i]);
                    window.location.href = "singlemovie.html";
                }

            });

        };

    });

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: "https://api.themoviedb.org/3/movie/" + sessionStorage.getItem("MovieID") + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
        success: function (data) {
            individual_movie_data = data
        }
    }).done(function () {

        $("#movie_poster_single").attr("src", "https://image.tmdb.org/t/p/original" + individual_movie_data.poster_path);
        $("#movie_title_single").append(individual_movie_data.original_title);
        $("#genre_single").append(individual_movie_data.genres[0].name);
        $("#rating_single").append(individual_movie_data.vote_average);
        $("#minutes_single").append(individual_movie_data.runtime);
        $("#movie_desc_single").append(individual_movie_data.overview);
        $("#vid_year_single").append(individual_movie_data.release_date.substring(0, 4));
        $(".background-img").css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original' + individual_movie_data.poster_path + '"');

    });

    sessionStorage.removeItem("MovieID");

    // ----Movie 7 click
    sVidSRC = "";
    $("#movie_home_7").click(function () {
        sVidSRC = $("#movie_home_7").attr("src");
        sVidSRC = sVidSRC.substring(35, sVidSRC.length);

        for (let i = 0; i < arrMovieIDs.length; i++) {

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                responseType: "application/json",
                url: "https://api.themoviedb.org/3/movie/" + arrMovieIDs[i] + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
                success: function (data) {
                    find_movie = data
                }
            }).done(function () {

                if (find_movie.poster_path == sVidSRC) {
                    sessionStorage.setItem("MovieID", arrMovieIDs[i]);
                    window.location.href = "singlemovie.html";
                }

            });

        };

    });

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: "https://api.themoviedb.org/3/movie/" + sessionStorage.getItem("MovieID") + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
        success: function (data) {
            individual_movie_data = data
        }
    }).done(function () {

        $("#movie_poster_single").attr("src", "https://image.tmdb.org/t/p/original" + individual_movie_data.poster_path);
        $("#movie_title_single").append(individual_movie_data.original_title);
        $("#genre_single").append(individual_movie_data.genres[0].name);
        $("#rating_single").append(individual_movie_data.vote_average);
        $("#minutes_single").append(individual_movie_data.runtime);
        $("#movie_desc_single").append(individual_movie_data.overview);
        $("#vid_year_single").append(individual_movie_data.release_date.substring(0, 4));
        $(".background-img").css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original' + individual_movie_data.poster_path + '"');

    });

    sessionStorage.removeItem("MovieID");

    // ----Movie 8 click
    sVidSRC = "";
    $("#movie_home_8").click(function () {
        sVidSRC = $("#movie_home_8").attr("src");
        sVidSRC = sVidSRC.substring(35, sVidSRC.length);

        for (let i = 0; i < arrMovieIDs.length; i++) {

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                responseType: "application/json",
                url: "https://api.themoviedb.org/3/movie/" + arrMovieIDs[i] + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
                success: function (data) {
                    find_movie = data
                }
            }).done(function () {

                if (find_movie.poster_path == sVidSRC) {
                    sessionStorage.setItem("MovieID", arrMovieIDs[i]);
                    window.location.href = "singlemovie.html";
                }

            });

        };

    });

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: "https://api.themoviedb.org/3/movie/" + sessionStorage.getItem("MovieID") + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
        success: function (data) {
            individual_movie_data = data
        }
    }).done(function () {

        $("#movie_poster_single").attr("src", "https://image.tmdb.org/t/p/original" + individual_movie_data.poster_path);
        $("#movie_title_single").append(individual_movie_data.original_title);
        $("#genre_single").append(individual_movie_data.genres[0].name);
        $("#rating_single").append(individual_movie_data.vote_average);
        $("#minutes_single").append(individual_movie_data.runtime);
        $("#movie_desc_single").append(individual_movie_data.overview);
        $("#vid_year_single").append(individual_movie_data.release_date.substring(0, 4));
        $(".background-img").css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original' + individual_movie_data.poster_path + '"');

    });

    sessionStorage.removeItem("MovieID");

    // ----Movie 9 click
    sVidSRC = "";
    $("#movie_home_9").click(function () {
        sVidSRC = $("#movie_home_9").attr("src");
        sVidSRC = sVidSRC.substring(35, sVidSRC.length);

        for (let i = 0; i < arrMovieIDs.length; i++) {

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                responseType: "application/json",
                url: "https://api.themoviedb.org/3/movie/" + arrMovieIDs[i] + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
                success: function (data) {
                    find_movie = data
                }
            }).done(function () {

                if (find_movie.poster_path == sVidSRC) {
                    sessionStorage.setItem("MovieID", arrMovieIDs[i]);
                    window.location.href = "singlemovie.html";
                }

            });

        };

    });

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: "https://api.themoviedb.org/3/movie/" + sessionStorage.getItem("MovieID") + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
        success: function (data) {
            individual_movie_data = data
        }
    }).done(function () {

        $("#movie_poster_single").attr("src", "https://image.tmdb.org/t/p/original" + individual_movie_data.poster_path);
        $("#movie_title_single").append(individual_movie_data.original_title);
        $("#genre_single").append(individual_movie_data.genres[0].name);
        $("#rating_single").append(individual_movie_data.vote_average);
        $("#minutes_single").append(individual_movie_data.runtime);
        $("#movie_desc_single").append(individual_movie_data.overview);
        $("#vid_year_single").append(individual_movie_data.release_date.substring(0, 4));
        $(".background-img").css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original' + individual_movie_data.poster_path + '"');

    });

    sessionStorage.removeItem("MovieID");

    // --Series
    // ----Series 1 click
    sVidSRC = "";
    $("#series_home_1").click(function () {
        sVidSRC = $("#series_home_1").attr("src");
        sVidSRC = sVidSRC.substring(35, sVidSRC.length);

        for (let i = 0; i < arrSeriesIDs.length; i++) {

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                responseType: "application/json",
                url: "https://api.themoviedb.org/3/tv/" + arrSeriesIDs[i] + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
                success: function (data) {
                    find_series = data
                }
            }).done(function () {

                if (find_series.seasons[1].poster_path == sVidSRC) {
                    sessionStorage.setItem("SeriesID", arrSeriesIDs[i]);
                    window.location.href = "singlemovie.html";
                }

            });

        };

    });

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: "https://api.themoviedb.org/3/tv/" + sessionStorage.getItem("SeriesID") + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
        success: function (data) {
            individual_series_data = data
        }
    }).done(function () {

        $("#movie_poster_single").attr("src", "https://image.tmdb.org/t/p/original" + individual_series_data.seasons[1].poster_path);
        $("#movie_title_single").append(individual_series_data.original_name);
        $("#genre_single").append(individual_series_data.genres[0].name);
        $("#rating_single").append(individual_series_data.vote_average);
        $("#minutes_single").append(individual_series_data.number_of_episodes + " episodes");
        $("#movie_desc_single").append(individual_series_data.overview);
        $("#vid_year_single").append(individual_series_data.first_air_date.substring(0, 4));
        $(".background-img").css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original' + individual_movie_data.poster_path + '"');

    });

    sessionStorage.removeItem("SeriesID");

    // ----Series 2 click
    sVidSRC = "";
    $("#series_home_2").click(function () {
        sVidSRC = $("#series_home_2").attr("src");
        sVidSRC = sVidSRC.substring(35, sVidSRC.length);

        for (let i = 0; i < arrSeriesIDs.length; i++) {

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                responseType: "application/json",
                url: "https://api.themoviedb.org/3/tv/" + arrSeriesIDs[i] + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
                success: function (data) {
                    find_series = data
                }
            }).done(function () {

                if (find_series.seasons[1].poster_path == sVidSRC) {
                    sessionStorage.setItem("SeriesID", arrSeriesIDs[i]);
                    window.location.href = "singlemovie.html";
                }

            });

        };

    });

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: "https://api.themoviedb.org/3/tv/" + sessionStorage.getItem("SeriesID") + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
        success: function (data) {
            individual_series_data = data
        }
    }).done(function () {

        $("#movie_poster_single").attr("src", "https://image.tmdb.org/t/p/original" + individual_series_data.seasons[1].poster_path);
        $("#movie_title_single").append(individual_series_data.original_name);
        $("#genre_single").append(individual_series_data.genres[0].name);
        $("#rating_single").append(individual_series_data.vote_average);
        $("#minutes_single").append(individual_series_data.number_of_episodes + " episodes");
        $("#movie_desc_single").append(individual_series_data.overview);
        $("#vid_year_single").append(individual_series_data.first_air_date.substring(0, 4));
        $(".background-img").css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original' + individual_movie_data.poster_path + '"');

    });

    sessionStorage.removeItem("SeriesID");

    // ----Series 3 click
    sVidSRC = "";
    $("#series_home_3").click(function () {
        sVidSRC = $("#series_home_3").attr("src");
        sVidSRC = sVidSRC.substring(35, sVidSRC.length);

        for (let i = 0; i < arrSeriesIDs.length; i++) {

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                responseType: "application/json",
                url: "https://api.themoviedb.org/3/tv/" + arrSeriesIDs[i] + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
                success: function (data) {
                    find_series = data
                }
            }).done(function () {

                if (find_series.seasons[1].poster_path == sVidSRC) {
                    sessionStorage.setItem("SeriesID", arrSeriesIDs[i]);
                    window.location.href = "singlemovie.html";
                }

            });

        };

    });

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: "https://api.themoviedb.org/3/tv/" + sessionStorage.getItem("SeriesID") + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1",
        success: function (data) {
            individual_series_data = data
        }
    }).done(function () {

        $("#movie_poster_single").attr("src", "https://image.tmdb.org/t/p/original" + individual_series_data.seasons[1].poster_path);
        $("#movie_title_single").append(individual_series_data.original_name);
        $("#genre_single").append(individual_series_data.genres[0].name);
        $("#rating_single").append(individual_series_data.vote_average);
        $("#minutes_single").append(individual_series_data.number_of_episodes + " episodes");
        $("#movie_desc_single").append(individual_series_data.overview);
        $("#vid_year_single").append(individual_series_data.first_air_date.substring(0, 4));
        $(".background-img").css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original' + individual_movie_data.poster_path + '"');

    });

    sessionStorage.removeItem("SeriesID");

    // --Featured video click
    $("#Featured_Video_Btn").click(function () {
        var sID = "";
        var sLink = "";

        if (iRandomIframe == 1) {
            sID = "1620";
            sLink = "https://www.youtube.com/embed/E5TDFVmzw2U";
        } else if (iRandomIframe == 2) {
            sID = "207703";
            sLink = "https://www.youtube.com/embed/kl8F-8tR8to";
        } else if (iRandomIframe == 3) {
            sID = "37136";
            sLink = "https://www.youtube.com/embed/aIOWG7lKfKk";
        };

        sessionStorage.setItem("MovieID", sID);
        sessionStorage.setItem("MovieIframe", sLink);
        window.location.href = "singlemovie.html";
    });

    var sLink = "https://api.themoviedb.org/3/movie/" + sessionStorage.getItem("MovieID") + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1";

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        responseType: "application/json",
        url: sLink,
        success: function (data) {
            single_data = data
        }
    }).done(function () {

        $("#movie_poster_single").attr("src", "https://image.tmdb.org/t/p/original" + individual_movie_data.poster_path);
        $("#movie_title_single").append(individual_movie_data.original_title);
        $("#genre_single").append(individual_movie_data.genres[0].name);
        $("#rating_single").append(individual_movie_data.vote_average);
        $("#minutes_single").append(individual_movie_data.runtime);
        $("#movie_desc_single").append(individual_movie_data.overview);
        $("#vid_year_single").append(individual_movie_data.release_date.substring(0, 4));
        $(".background-img").css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original' + individual_movie_data.poster_path + '"');

    });

    $("#movie_trailer_indiv").attr("src", sessionStorage.getItem("MovieIframe"));

    sessionStorage.removeItem("MovieID");
    sessionStorage.removeItem("MovieIframe");

    // Sign Up/Login
    let btnSwitch = true
    var registerState = "login";
    var checkboxState = false;

    //--checkbox state update
    var checkbox = document.querySelector("input[name=checkbox]");

    $("#btn_Switch_signup").click(function () {

        //Login page update
        if (btnSwitch == true) {

            registerState = "signup";
            btnSwitch = false;

            (this).innerHTML = "Log in";

            //Signup page: Left section update
            document.getElementById("leftTopContainer_head").innerHTML = "Welcome back";
            document.getElementById("leftTopContainer_description").innerHTML = ("<b>Sign up</b>" + " to create a new  account");

            //Signup page: Right section update
            document.getElementById("rightTopContainer_head").innerHTML = "Sign up";
            document.getElementById("rightTopContainer_description").innerHTML = "Enter your personal details to register.";

            //Signup page: Right section input form

            /*document.getElementById("rightTopContainer_input-section_details").innerHTML =
                ("<input type=\"text\" class=\"input-section_Name input\" id=\"input-section_Name\" placeholder=\"Name\" + required />" +
                    "<input type=\"email\" class=\"input-section_Email input\" id=\"input-section_Email\" placeholder=\"Email\" required />" +
                    "<input type=\"password\" class=\"input-section_Password input\" id=\"input-section_Password\" placeholder=\"Password\" required />" +
                    "<input type=\"password\" class=\"input-section_confirmPassword id=\"input-section_confirmPassword\" input\" placeholder=\"Confirm Password\" required />")*/

            $("#input-section_Name").css("display", "block");
            $("#input-section_confirmPassword").css("display", "block");

            document.getElementById("rightTopContainer_input-section_agree").innerHTML =
                ("<input type=\"checkbox\" class=\"input-section_checkbox\" name=\"checkbox\" required >" +
                    "<div class=\"rightTopContainer_input-section_agree-description\">Yes, I agree to the Terms of Agreement </div>"
                )



            //Login: Right section input button
            document.getElementById("btn-primary").value = "Sign up"

            console.log(btnSwitch);
            console.log(registerState)
            console.log(checkboxState)

        }
        else if (btnSwitch == false) {

            registerState = "login";
            btnSwitch = true;

            //Login: Left section update
            (this).innerHTML = "Sign up";
            document.getElementById("leftTopContainer_head").innerHTML = "Welcome";
            document.getElementById("leftTopContainer_description").innerHTML = ("Already registered click below to <b>Log in</b>.");

            //Login: Right section update
            document.getElementById("rightTopContainer_head").innerHTML = "Log in";
            document.getElementById("rightTopContainer_description").innerHTML = "Enter your personal details to login.";

            //Login: Right section input form

            /*document.getElementById("rightTopContainer_input-section_details").innerHTML =
                ("<input type=\"email\" class=\"input-section_Email input\" placeholder=\"Email\" required />" +
                    "<input type=\"password\" class=\"input-section_Password input\" placeholder=\"Password\" required />"
                )*/

            $("#input-section_Name").css("display", "none");
            $("#input-section_confirmPassword").css("display", "none");

            document.getElementById("rightTopContainer_input-section_agree").innerHTML =
                ("<input type=\"checkbox\" class=\"input-section_checkbox\" >" +
                    "<div class=\"rightTopContainer_input-section_agree-description\">Remember me </div>"
                )

            //Login: Right section input button
            document.getElementById("btn-primary").value = "Log in"


            console.log(btnSwitch);
            console.log(registerState)
            console.log(checkboxState)

        }

    })

    //---Modal Start---

    // Get the modal
    var modal = document.getElementById("myModal");

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    //---Modal End---

    // Array of users that are already saved
    var arrUsers = [{
        username: "Nico",
        password: 221179,
        email: "221179@virtualwindow.co.za"
    }, {
        username: "Eddie",
        password: 21100419,
        email: "21100419@virtualwindow.co.za"
    }, {
        username: "Ine",
        password: 21076,
        email: "221076@virtualwindow.co.za"
    }, {
        username: "Tebogo",
        password: 221244,
        email: "221244@virtualwindow.co.za"
    }, {
        username: "Simone",
        password: 221412,
        email: "221412@virtualwindow.co.za"
    }, {
        username: "Thikho",
        password: 221250,
        email: "221250@virtualwindow.co.za"
    },
    {
        username: "Tsungai",
        password: "tsungai",
        email: "tsungai@bingewatch.co.za"
    }];
    var bFlag = false;

    $("#btn_sign_up").click(function () {

        let userPassword = (document.getElementById("input-section_Password").value)
        let confirmPassword = (document.getElementById("input-section_confirmPassword").value)
        let userEmail = (document.getElementById("input-section_Email").value)
        let userName = (document.getElementById("input-section_Name").value)

        //Sign up condition
        if (userPassword == confirmPassword && userPassword != "" && registerState == "signup") {

            sessionStorage.setItem('Username', userName);
            sessionStorage.setItem('Email', userEmail);
            sessionStorage.setItem('Password', userPassword);

            //Direct to homepage
            location.href = "home.html"

            $("#myModal").css("display", "block")
            alert("registered")

        }
        //Log in condition
        else if (/*userPassword == confirmPassword &&*/ userPassword != "" && registerState == "login") {

            for (let k = 0; k < arrUsers.length; k++) {

                if (userEmail == arrUsers[k].email) {

                    console.log("Match found for Email");

                    if (userPassword == arrUsers[k].password) {

                        console.log("Match found for password");

                        sessionStorage.setItem('Email', userEmail);
                        sessionStorage.setItem('Password', userPassword);
                        sessionStorage.setItem('Username', arrUsers[k].username);

                        //Direct to homepage
                        window.open("home.html", "_self");

                        alert("Signed in");
                        bFlag = true;
                        $("#myModal").css("display", "block");

                    }
                }
            }

            if (bFlag == false) {
                alert("Incorrect username or password");
            }

        }
    });

    // Movies Page
    //Hover buttons - Drama
    $("#movie_block1_parent").mouseenter(function () {
        $("#movie_block1").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer1").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block1").css("opacity", "1.0");
            $("#btnsContainer1").css("display", "none")
        })
    })
    $("#movie_block2_parent").mouseenter(function () {
        $("#movie_block2").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer2").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block2").css("opacity", "1.0");
            $("#btnsContainer2").css("display", "none")
        })
    })
    $("#movie_block3_parent").mouseenter(function () {
        $("#movie_block3").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer3").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block3").css("opacity", "1.0");
            $("#btnsContainer3").css("display", "none")
        })
    })
    $("#movie_block4_parent").mouseenter(function () {
        $("#movie_block4").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer4").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block4").css("opacity", "1.0");
            $("#btnsContainer4").css("display", "none")
        })
    })
    $("#movie_block5_parent").mouseenter(function () {
        $("#movie_block5").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer5").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block5").css("opacity", "1.0");
            $("#btnsContainer5").css("display", "none")
        })
    })
    $("#movie_block6_parent").mouseenter(function () {
        $("#movie_block6").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer6").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block6").css("opacity", "1.0");
            $("#btnsContainer6").css("display", "none")
        })
    })
    //Hover buttons - Action
    $("#movie_block7_parent").mouseenter(function () {
        $("#movie_block7").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer7").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block7").css("opacity", "1.0");
            $("#btnsContainer7").css("display", "none")
        })
    })
    $("#movie_block8_parent").mouseenter(function () {
        $("#movie_block8").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer8").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block8").css("opacity", "1.0");
            $("#btnsContainer8").css("display", "none")
        })
    })
    $("#movie_block9_parent").mouseenter(function () {
        $("#movie_block9").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer9").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block9").css("opacity", "1.0");
            $("#btnsContainer9").css("display", "none")
        })
    })
    $("#movie_block10_parent").mouseenter(function () {
        $("#movie_block10").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer10").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block10").css("opacity", "1.0");
            $("#btnsContainer10").css("display", "none")
        })
    })
    $("#movie_block11_parent").mouseenter(function () {
        $("#movie_block11").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer11").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block11").css("opacity", "1.0");
            $("#btnsContainer11").css("display", "none")
        })
    })
    $("#movie_block12_parent").mouseenter(function () {
        $("#movie_block12").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer12").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block12").css("opacity", "1.0");
            $("#btnsContainer12").css("display", "none")
        })
    })
    //Hover buttons - Sci-Fi
    $("#movie_block13_parent").mouseenter(function () {
        $("#movie_block13").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer13").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block13").css("opacity", "1.0");
            $("#btnsContainer13").css("display", "none")
        })
    })
    $("#movie_block14_parent").mouseenter(function () {
        $("#movie_block14").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer14").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block14").css("opacity", "1.0");
            $("#btnsContainer14").css("display", "none")
        })
    })
    $("#movie_block15_parent").mouseenter(function () {
        $("#movie_block15").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer15").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block15").css("opacity", "1.0");
            $("#btnsContainer15").css("display", "none")
        })
    })
    $("#movie_block16_parent").mouseenter(function () {
        $("#movie_block16").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer16").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block16").css("opacity", "1.0");
            $("#btnsContainer16").css("display", "none")
        })
    })
    $("#movie_block17_parent").mouseenter(function () {
        $("#movie_block17").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer17").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block17").css("opacity", "1.0");
            $("#btnsContainer17").css("display", "none")
        })
    })
    $("#movie_block18_parent").mouseenter(function () {
        $("#movie_block18").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer18").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block18").css("opacity", "1.0");
            $("#btnsContainer18").css("display", "none")
        })
    })
    //Hover buttons - Sci-Fi
    $("#movie_block19_parent").mouseenter(function () {
        $("#movie_block19").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer19").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block19").css("opacity", "1.0");
            $("#btnsContainer19").css("display", "none")
        })
    })
    $("#movie_block20_parent").mouseenter(function () {
        $("#movie_block20").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer20").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block20").css("opacity", "1.0");
            $("#btnsContainer20").css("display", "none")
        })
    })
    $("#movie_block21_parent").mouseenter(function () {
        $("#movie_block21").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer21").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block21").css("opacity", "1.0");
            $("#btnsContainer21").css("display", "none")
        })
    })
    $("#movie_block22_parent").mouseenter(function () {
        $("#movie_block22").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer22").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block22").css("opacity", "1.0");
            $("#btnsContainer22").css("display", "none")
        })
    })
    $("#movie_block23_parent").mouseenter(function () {
        $("#movie_block23").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer23").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block23").css("opacity", "1.0");
            $("#btnsContainer23").css("display", "none")
        })
    })
    $("#movie_block24_parent").mouseenter(function () {
        $("#movie_block24").css("opacity", "0.5");
        $(this).css("cursor", "pointer")
        $("#btnsContainer24").css("display", "flex")

        $(this).mouseleave(function () {
            $("#movie_block24").css("opacity", "1.0");
            $("#btnsContainer24").css("display", "none")
        })
    })

    $(".topPickImg").mouseenter(function () {
        $("#movieButton1").css("display", "flex");
        $("#movieImg_Cont1").css("border", "4px solid red")
        $("#movieImg_Cont1").css("transition", "all 0.2s linear")
        $(this).css("object-fit", "fill")
        $(this).css("filter", "brightness(0.2)")
        $(this).css("transition", "all 0.2s linear")

        $(this).mouseleave(function () {
            $(".movieItem_Type").css("display", "none");
            $(this).css("border", "none")
            $(this).css("filter", "brightness(1.0)");
            $("#movieImg_Cont1").css("border", "none")
        })
    })
    $("#movieButton1").hover(function () {
        $(this).css("display", "flex");
        $("#movieImg1").css("filter", "brightness(0.2)")
        $("#movieImg_Cont1").css("border", "4px solid red")
        $(this).mouseleave(function () {
            $(this).css("display", "none");
            $(".image").css("filter", "brightness(1,0)")
            $(".imageContainer_movie").css("border", "none")
        })
    });

    var arrWatchlist = [198306, 207703, 37136, 333339];

    // Watchlist
    $("#add").click(function () {
        arrWatchlist.push(sessionStorage.getItem("WatchlistAdd"));
        console.log(arrWatchlist);
        alert("Added to watchlist");

    });

    for (let jk = 0; jk < arrWatchlist.length; jk++) {

        var sLink = "https://api.themoviedb.org/3/movie/" + arrWatchlist[jk] + "?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&query=1";

        $.ajax({
            type: "GET",
            dataType: "jsonp",
            responseType: "application/json",
            url: sLink,
            success: function (data) {
                single_data = data
            }
        }).done(function () {
            sNum = jk + 1;
            sName = "#movie_watch" + sNum;

            $(sName).attr("src", "https://image.tmdb.org/t/p/original" + single_data.poster_path);

        });

    };

    //Search Display Start//

    $("#search_appearance").focusin(function () {
        $("#bg_searchContainer").css("display", "flex")
        console.log("")
    })
    var backgroundSearch = document.getElementById("bg_searchContainer")
    window.onclick = function (event) {
        if (event.target == backgroundSearch) {
            backgroundSearch.style.display = "none";
            sessionStorage.removeItem("Search")
        }
    }

    const searchInputSelector = document.querySelector("[data-search]")
    searchInputSelector.addEventListener("input", e => {
        
        $(".searchResults_container").css("display", "block")
        $(".showingAllResults_container").css("margin-top","0")
        $(".search_container").css("display", "block")

            const value = e.target.value;
            console.log(value)
            sessionStorage.setItem('Search', value)

            searchedItem = sessionStorage.getItem("Search")

            var searchInputURL = encodeURI(searchedItem)
            console.log(searchInputURL)

            let searchMovie = ("https://api.themoviedb.org/3/search/movie?api_key=7cc71a5efa6094ed2d8e41dd271bd6ee&language=en-US&query="
                + searchInputURL + "&page=1&include_adult=false")

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                responseType: "application/json",
                url: searchMovie,
                success: function (data) {
                    movieSearched = data
                }
            }).done(function () {

                console.log(movieSearched.results[0])
                
                //Title search
                var searchResult1 = movieSearched.results[0].title
                var searchResult2 = movieSearched.results[1].title
                var searchResult3 = movieSearched.results[2].title
                var searchResult4 = movieSearched.results[3].title
                var searchResult5 = movieSearched.results[4].title
                //Shortening long titles
                if(searchResult1.length < 45) {document.getElementById("searchItem_Title1").innerHTML = searchResult1} else 
                {document.getElementById("searchItem_Title1").innerHTML = searchResult1.substring(0, 42) + "...";} 
                if(searchResult2.length < 45) {document.getElementById("searchItem_Title2").innerHTML = searchResult2} else 
                {document.getElementById("searchItem_Title2").innerHTML = searchResult2.substring(0, 42) + "...";}
                if(searchResult3.length < 45) {document.getElementById("searchItem_Title3").innerHTML = searchResult3} else 
                {document.getElementById("searchItem_Title3").innerHTML = searchResult3.substring(0, 42) + "..";}
                if(searchResult4.length < 45) {document.getElementById("searchItem_Title4").innerHTML = searchResult4} else 
                {document.getElementById("searchItem_Title4").innerHTML = searchResult4.substring(0, 42) + "...";}
                if(searchResult5.length < 45) {document.getElementById("searchItem_Title5").innerHTML = searchResult5} else 
                {document.getElementById("searchItem_Title5").innerHTML = searchResult5.substring(0, 42) + "...";} 


                //Image search
                const imgPrePath = "https://image.tmdb.org/t/p/original"
                var searchResultImg1 = movieSearched.results[0].poster_path
                var searchResultImg2 = movieSearched.results[1].poster_path
                var searchResultImg3 = movieSearched.results[2].poster_path
                var searchResultImg4 = movieSearched.results[3].poster_path
                var searchResultImg5 = movieSearched.results[4].poster_path

                if (searchResultImg1 != null){
                    document.getElementById("searchItem_img1").src = (imgPrePath + searchResultImg1)
                } else {document.getElementById("searchItem_img1").src = "Icons_and_logo/noImage.png"}
                if (searchResultImg2 != null){
                    document.getElementById("searchItem_img2").src = (imgPrePath + searchResultImg2)
                } else {document.getElementById("searchItem_img2").src = "Icons_and_logo/noImage.png"}
                if (searchResultImg3 != null){
                    document.getElementById("searchItem_img3").src = (imgPrePath + searchResultImg3)
                } else {document.getElementById("searchItem_img3").src = "Icons_and_logo/noImage.png"}
                if (searchResultImg4 != null){
                    document.getElementById("searchItem_img4").src = (imgPrePath + searchResultImg4)
                } else {document.getElementById("searchItem_img4").src = "Icons_and_logo/noImage.png"}
                if (searchResultImg5 != null){
                    document.getElementById("searchItem_img5").src = (imgPrePath + searchResultImg5)
                } else {document.getElementById("searchItem_img5").src = "Icons_and_logo/noImage.png"}
                
                //Image null replacement

            })

    })
    //Search Display End//

    


});