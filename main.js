let containerPoke = document.querySelector("#poke-container");


async function getPokemons() {

    try {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200&offset=100");
       
        if (!response.ok) {
            console.error("No se pudo conectar")
        }

        let data = await response.json();

        let pokemons = data.results;

        renderizarPokemons(pokemons)

    } catch (error) {
        console.log("Ha sucedido un error", error)
    }

}

function renderizarPokemons(array) {

    array.map(pokemon => {
        containerPoke.innerHTML += `<div>
                                   <h4>Nombre:${pokemon.name}</h4>
                                   <a href=${pokemon.url}>Ir a info del pokemon </a>
                                  </div>`
    })
}
//crear un boton dinamico dentro de la tarjeta del pokemon para que me muestre la info de cada uno ellos con una funcion asincronica

// getPokemons();

///----------------------------------------------------------------------------------------------------------------------

const getProducts = async() => {
    try {
        let response = await fetch('https://fakestoreapi.com/products');

        if(!response.ok) {
            console.error("Ha ocurrido un error")
        }

        let data = await response.json();

        console.log(data);

        renderizarProductos(data)
    } catch(err) {
        console.log("Error" , err)
    }

}

function renderizarProductos(array) {

    array.map(prod => {
        containerPoke.innerHTML += `<div class="card-product">
                                   <h4>Producto: ${prod.title}</h4>
                                   <img src=${prod.image} alt=${prod.title}/>
                                   <p>${prod.description} </p>
                                   <h5> ${prod.price} </h5>
                                  </div>`
    })
}

getProducts();