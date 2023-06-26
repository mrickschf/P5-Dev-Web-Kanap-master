let meubleData = [];

const fetchMeuble = async () => {
  await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((promise) => {
      meubleData = promise;
      console.log(meubleData);
    });
};

const meubleDisplay = async () => {
  await fetchMeuble();

  const container = document.getElementById("items");
  meubleData.forEach((meuble) => {
    const card = document.createElement("div");
    card.id = "items" + meuble._id;
    card.className = "items article img";

    const title = document.createElement("h3");
    title.className = "items article h3";
    title.textContent = meuble.name.toUpperCase();

    const image = document.createElement("img");
    image.className = "items article img"
    image.src = meuble.imageUrl;
    image.alt = "image de meuble " + meuble.name;

    const description = document.createElement("p");
    description.className = "items article p";
    description.textContent = meuble.description;

    const price = document.createElement("p");
    price.className = "items article p";
    price.textContent = meuble.price.toString().replace(/0+$/, "") + " Euro";

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(description);
    card.appendChild(price);

    container.appendChild(card);
  });
};

meubleDisplay();
