window.onload = function () {
    var btnSearch = document.getElementById("btn");
    var httpRequest;

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
}




