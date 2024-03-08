// function load_home() {
//     document.getElementById("content").innerHTML = 
//         '<object type="text/html" data="home.html"></object>';
// }

function load_page(page, dest) {
    fetch(page)
        .then((response) => response.text())
        .then((html) => {
            document.getElementById(dest).innerHTML = html;
        })
        .catch((error) => {
            console.error("Error loading content:", error);
        });
}

function buy(msg) {
    if (msg == "ck") {
        alert( "You bought a cupcake. \n Thank you! " );
    } else {
        alert( "You bought a cake. \n Thank you! " );
    }
}