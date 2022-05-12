const menuElement = document.querySelector('#menu')

fetch('https://codice-boca.web.app/menu')
.then(response => response.json()) // getting raw data
.then(cleanData => {

const menuCards = cleanData.map((menuItem) => {
    console.log('menu item here', menuItem)

    return `<div class="menu-item">
    <h3>${menuItem.title}</h3>
    <p>${menuItem.description}</p>
</div>`
})

menuElement.innerHTML = menuCards.join('')
}) // logging items from json
.catch(err => console.error(err))