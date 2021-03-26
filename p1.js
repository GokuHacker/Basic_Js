// ___Fetch by TagName___

var x = document.getElementsByTagName("h2");
console.log(x);
console.log(x[0].innerText);

// ___Fetch by ClassName___ and Change the Content(placeholder)

var y = document.getElementsByClassName("Asgard");
console.log(y);
console.log(y[0].placeholder);

y[0].placeholder="Hela_World";
console.log(y[0].placeholder);


//___Fetch by Id_____

var z = document.getElementById("Hela");
console.log(z);
console.log(z.innerText);