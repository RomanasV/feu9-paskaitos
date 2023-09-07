// Paselektinti HTML elementą
let paragraph = document.querySelector('p')
paragraph.textContent = 'Sveikas'
paragraph.innerHTML = 'Labas <span class="test" style="color: red;">vakaras</span>'

// Sukurti HTML elemntą
let spanElement = document.createElement('span')
spanElement.textContent = '!'

// Append - prideda su JS sukurtą HTML elementą (node) į kito elemento pabaigą
paragraph.append(spanElement)

// Prepend - prideda su JS sukurtą HTML elementą (node) į kito elemento pradžią
paragraph.prepend(spanElement)

// After - prideda su JS sukurtą HTML elemntą (node) po kitu elementu (šalia kito elemento)
paragraph.after(spanElement)

// Before - prideda su JS sukurtą HTML elementą (node) prieš kitą elementą (šalia kito elemento)
paragraph.before(spanElement)

// Remove - pašalina HTML elementą
spanElement.remove()


let newParagraph = document.createElement('p')
newParagraph.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro officiis nisi vitae fugiat necessitatibus dignissimos sequi quis quia harum iste, magni natus! A exercitationem repudiandae id similique illo quisquam optio.'

paragraph.after(newParagraph)

// Būdas pakeisti HTML elemento klases
newParagraph.className = 'pirma-klase antra-klase'

// newParagraph.className = 'trecia-klase'
newParagraph.className = newParagraph.className + ' trecia-klase'

console.log(newParagraph.className)

// Prideda klasę prie HTML elemento
newParagraph.classList.add('ketvirta-klase')
newParagraph.classList.add('penkta-klase', 'sesta-klase')

// Pašalina klasę iš HTML elemento
newParagraph.classList.remove('ketvirta-klase')
newParagraph.classList.remove('pirma-klase', 'sesta-klase')

// Pakeičia klasę HTML elemente
newParagraph.classList.replace('antra-klase', 'astunta-klase')

// Prideda klasę prie HTML elemento, jeigu tokios klasės dar neturi ir pašalina jeigu tokią klasę jau turi
newParagraph.classList.toggle('toggle-klase') // prideda
newParagraph.classList.toggle('toggle-klase') // pašalina
newParagraph.classList.toggle('toggle-klase') // prideda

// Patikrina ar HTML elementas turi nurodytą klasę (grąžina true arba false)
console.log(newParagraph.className)
console.log(newParagraph.classList.contains('trecia-klase'))
console.log(newParagraph.classList.contains('ketvirta-klase'))
console.log(newParagraph.classList.contains('klase'))

// Keičia (arba prideda) HTML elemento ID
newParagraph.id = 'paragrafo-id'

let link = document.createElement('a')
link.textContent = 'nuoroda'
newParagraph.after(link)

// link.href = 'https://www.google.com'
// link.target = '_blank'

link.setAttribute('href', 'https://www.google.com')
link.setAttribute('target', '_blank')
link.setAttribute('title', 'cia yra nuoroda i google')
link.setAttribute('class', 'nuorodos-klase')
link.setAttribute('class', 'nauja-klase')
link.setAttribute('id', 'nuorodos-id')

console.log(link.className)
link.removeAttribute('class')
console.log(link.className)

link.removeAttribute('title')

console.dir(link)

link.style.border = '2px solid black'
link.style.padding = '5px 10px'
link.style.fontSize = '25px'
link.style.display = 'inline-block'

link.style = `color: red;
              border: 2px solid black;
              padding: 5px 10px;
              font-size: 25px;
              display: inline-block;
              text-decoration: none;
              text-transform: uppercase;`