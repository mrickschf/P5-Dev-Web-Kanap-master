//alert("Hello World !");
//console.log("Hello World !");

// requete API liste des produits issus du catalogue
//http://localhost:3000/api/products

fetch("http://localhost:3000/api/products")   // passage d'une requete à l'API
  .then(function (res) {          // une fois qu'on a une reponse...
    console.log(res);
    //alert(res.statusText);
    if (res.ok) {                 // ...et qu'elle est exploitable
      return res.json();          // on retourne les données au format JSON
    }
  })
  .then(function (value) {        // Puis on exploite ces données...
    console.log(value);
    //alert(value[0]._id);
    alert(value[0].name);

    let nameKanap = value[5].name;
    //alert("Le nom du 6e canapé est :"+nameKanap);
    console.log("Le nom du 8e canapé est :"+nameKanap);
    nameKanap = value[7].name;
    //alert("Le nom du 8e canapé est :"+nameKanap);
    console.log("Le nom du 8e canapé est :"+nameKanap);


    //---- BONNE MANIERE (création d'éléments du DOM)
    let idx=2;      // index du tableau de données issu de l'API (La boucle va servir à dynamiser ça !!!)
    let a = document.createElement("a");                // création d'un élément HTML de type a
    a.setAttribute('href', `./product.html?id=${value[idx]._id}`);      // ajout d'un attribut href à cet élément
    document.getElementById("items").appendChild(a);              // ajout de cet élément au DOM

    // article
    let article = document.createElement("article");                // création d'un élément HTML de type article
    a.appendChild(article);             // ajout de cet élément au DOM (élément créé précedemment)

    // image
    let img = document.createElement("img");                  // création d'un élément HTML de type image
    img.setAttribute('src', value[idx].imageUrl);      // ajout d'un attribut src à cet élément
    img.setAttribute('alt', `${value[idx].altTxt}, ${value[idx].name}`);      // ajout d'un attribut alt à cet élément
    article.appendChild(img);             // ajout de cet élément au DOM (élément créé précedemment)

    // titre
    let title = document.createElement("h3");               // création d'un élément HTML de type h3
    title.textContent = value[idx].name;      // ajout d'un texte
    title.classList.add("productName");      // ajout d'une classe CSS
    article.appendChild(title);             // ajout de cet élément au DOM (élément créé précedemment)

    // description
    let p = document.createElement("p");                  // création d'un élément HTML de type p
    p.textContent = value[idx].description;      // ajout d'un texte
    p.classList.add("productDescription");      // ajout d'une classe CSS
    article.appendChild(p);             // ajout de cet élément au DOM (élément créé précedemment)