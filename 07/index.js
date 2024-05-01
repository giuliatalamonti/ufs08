const ricetta = {
  title: "Pizza margherita",
  serving: 1, 
  ingredients: ["farina", "acqua", "lievito", "sale", "passata di pomodoro", "mozzarella", "basilico"]
}

console.log(ricetta.title, '\n')

const desinenza = (ricetta.serving > 1 ? 'e ' : 'a ')

// operatore di concatenazione +
console.log("Per " + ricetta.serving + " person" + desinenza + '\n')

// template literal 

const servingString = `Per ${ricetta.serving} person${desinenza}`

console.log(servingString)


//

document.getElementById('titleRecipe').innerText = ricetta.title

document.getElementById('servingRecipe').innerText = servingString

const parentElement = document.getElementById('listIngredients')

for(ingredient of ricetta.ingredients) {
  console.log(ingredient, '\n')

  const newElement = document.createElement('li')

  newElement.innerText = ingredient

  parentElement.appendChild(newElement)
}

// Classi

class Recipe {
  #author = 'Pluto'

  constructor(title, serving, ingredients) {
    this.title = title 
    this.serving = serving
    this.ingredients = ingredients
  }

  get author() {
    return this.#author
  }

  // set author(a) {
  //   this.#author = a
  // }

  getServingString() {
    return `Per ${this.serving} person${(this.serving > 1 ? 'e ' : 'a ')}`
  }
}

const tiramisu = new Recipe('Tiramisu', 4, ['mascarpone', 'savoiardi', 'caffe', 'uova', 'zucchero', 'cacao magro'])

console.log(tiramisu)
console.log(tiramisu.getServingString())
console.log(tiramisu.title)


const menuList = ['Home', 'About', 'Contact']

const menuListElements = menuList.map((item) => {
  debugger
  return {label: item, src: "#" + item.toLowerCase()}
})

console.log(menuListElements)
