window.onload = function () {
    var btnSearch = document.getElementById("btn");
    var httpRequest;
    var searchInput = document.querySelector("queryBox");

    btnSearch.addEventListener('click', function (e) {
        e.preventDefault();
        httpRequest = new XMLHttpRequest();

        var url = "superheroes.php";
        httpRequest.onreadystatechange = loadHero;
        httpRequest.open('GET', url, true);
        httpRequest.send();
    });
    function loadHero() {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {
            if (httpRequest.status == 200) {
                var hero = httpRequest.responseText;
                alert(hero);
            } else {
                alert("An Error Is Detected");
            }
        }
    }

    function answer() {
        let query = document.querySelector("queryBox").value;
        console.log(httpRequest.status)
        if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200) {
            if (query == "") {
                var url = "superheroes.php" + query;
                var hero = httpRequest.responseText;
                var msg = document.getElementById("result");
                msg.innerHTML = hero;
            } else {
                var msgReturn = "Superhero Not Found";
                msgReturn.innerHTML = msgReturn;
            }
        }
    }
}




