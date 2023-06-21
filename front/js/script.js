let meubleData = [];

const fetchMeuble = async () => {
    await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((promise) => {
        meubleData = promise
        console.log (meubleData);
    }); 
}; 

const meubleDisplay = async () => {
    await fetchMeuble();

document.getElementById("items").innerHTML = meubleData.map(
    (meuble) => `
<div id="card${meuble._id}" class="items article img">
<h3 class="items article h3">${meuble.name.toUpperCase()}</h3>
<img class="" src="${meuble.imageUrl}" alt= "image de meuble ${meuble.name}"/>


</div>
`)
};


meubleDisplay();