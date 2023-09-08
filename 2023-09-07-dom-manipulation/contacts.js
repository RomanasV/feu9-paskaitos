let container = document.querySelector('.container')
container.style.maxWidth = '1200px'
container.style.marginRight = 'auto'
container.style.marginLeft = 'auto'

let contentWrapper = document.createElement('div')
contentWrapper.classList.add('content-wrapper')
container.append(contentWrapper)
// contentWrapper.style.display = 'grid'
// contentWrapper.style.gridTemplateColumns = '1fr 1fr'
// contentWrapper.style.gap = '30px'

contentWrapper.style = `display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 30px;`


let shopsWrapper = document.createElement('div')
shopsWrapper.classList.add('shops-wrapper')
// contentWrapper.append(shopsWrapper)

let pageTitle = document.createElement('h1')
pageTitle.classList.add('page-title')
pageTitle.textContent = 'Find us'
// shopsWrapper.append(pageTitle)

let shopsList = document.createElement('div')
shopsList.classList.add('shops-list')
// shopsWrapper.append(shopsList)
shopsList.style = `display: grid;
                   grid-template-columns: 1fr 1fr;
                   gap: 15px;`

shopsWrapper.append(pageTitle, shopsList)

let shopItem1 = document.createElement('div')
shopItem1.classList.add('shop-item')
shopsList.append(shopItem1)

let shopTitle1 = document.createElement('h2')
shopTitle1.textContent = 'Parduotuvė 1'
// shopItem1.append(shopTitle1)

let shopContactsList1 = document.createElement('ul')
shopContactsList1.classList.add('shop-contacts-list')
// shopItem1.append(shopContactsList1)

shopItem1.append(shopTitle1, shopContactsList1)

let shop1PhoneItem = document.createElement('li')
shop1PhoneItem.classList.add('shop-contact-item')
shopContactsList1.append(shop1PhoneItem)

let shop1PhoneTitle = document.createElement('span')
shop1PhoneTitle.classList.add('shop-contact-title')
shop1PhoneTitle.textContent = 'Phone: '

let shop1PhoneLink = document.createElement('a')
let shop1PhoneNumber = '+3704564644'
// shop1PhoneLink.textContent = '+3704564644'
// shop1PhoneLink.href = `tel:+3704564644`
shop1PhoneLink.textContent = shop1PhoneNumber
shop1PhoneLink.setAttribute('href', `tel:${shop1PhoneNumber}`)

shop1PhoneItem.append(shop1PhoneTitle, shop1PhoneLink)


let shop1EmailItem = document.createElement('li')
shop1EmailItem.classList.add('shop-contact-item')
shopContactsList1.append(shop1EmailItem)

let shop1EmailTitle = document.createElement('span')
shop1EmailTitle.classList.add('shop-contact-title')
shop1EmailTitle.textContent = 'Email: '

let shop1EmailLink = document.createElement('a')
let shop1EmailAddress = 'info@parduotuve1.lt'
shop1EmailLink.textContent = shop1EmailAddress
shop1EmailLink.setAttribute('href', `mailto:${shop1EmailAddress}`)

shop1EmailItem.append(shop1EmailTitle, shop1EmailLink)


let shop1AddressItem = document.createElement('li')
shop1AddressItem.classList.add('shop-contact-item')
shopContactsList1.append(shop1AddressItem)

let shop1AddressTitle = document.createElement('span')
shop1AddressTitle.classList.add('shop-contact-title')
shop1AddressTitle.textContent = 'Address: '

let shop1AddressLink = document.createElement('a')
shop1AddressLink.textContent = 'Rotušės aikštė 1, Kaunas'
shop1AddressLink.setAttribute('href', 'https://goo.gl/maps/9qJ8dUKJLZSjqHkD7')
// shop1AddressLink.setAttribute('target', '_blank')
shop1AddressLink.target = '_blank'

shop1AddressItem.append(shop1AddressTitle, shop1AddressLink)






let shopItem2 = document.createElement('div')
shopItem2.classList.add('shop-item')
shopsList.append(shopItem2)

let shopTitle2 = document.createElement('h2')
shopTitle2.textContent = 'Parduotuvė 2'
// shopItem2.append(shopTitle2)

let shopContactsList2 = document.createElement('ul')
shopContactsList2.classList.add('shop-contacts-list')
// shopItem2.append(shopContactsList2)

shopItem2.append(shopTitle2, shopContactsList2)

let shop2PhoneItem = document.createElement('li')
shop2PhoneItem.classList.add('shop-contact-item')
shopContactsList2.append(shop2PhoneItem)

let shop2PhoneTitle = document.createElement('span')
shop2PhoneTitle.classList.add('shop-contact-title')
shop2PhoneTitle.textContent = 'Phone: '

let shop2PhoneLink = document.createElement('a')
let shop2PhoneNumber = '+3704564655'
// shop2PhoneLink.textContent = '+3704564644'
// shop2PhoneLink.href = `tel:+3704564644`
shop2PhoneLink.textContent = shop2PhoneNumber
shop2PhoneLink.setAttribute('href', `tel:${shop2PhoneNumber}`)

shop2PhoneItem.append(shop2PhoneTitle, shop2PhoneLink)


let shop2EmailItem = document.createElement('li')
shop2EmailItem.classList.add('shop-contact-item')
shopContactsList2.append(shop2EmailItem)

let shop2EmailTitle = document.createElement('span')
shop2EmailTitle.classList.add('shop-contact-title')
shop2EmailTitle.textContent = 'Email: '

let shop2EmailLink = document.createElement('a')
let shop2EmailAddress = 'info@parduotuve2.lt'
shop2EmailLink.textContent = shop2EmailAddress
shop2EmailLink.setAttribute('href', `mailto:${shop2EmailAddress}`)

shop2EmailItem.append(shop2EmailTitle, shop2EmailLink)


let shop2AddressItem = document.createElement('li')
shop2AddressItem.classList.add('shop-contact-item')
shopContactsList2.append(shop2AddressItem)

let shop2AddressTitle = document.createElement('span')
shop2AddressTitle.classList.add('shop-contact-title')
shop2AddressTitle.textContent = 'Address: '

let shop2AddressLink = document.createElement('a')
shop2AddressLink.textContent = 'Rotušės aikštė 1, Kaunas'
shop2AddressLink.setAttribute('href', 'https://goo.gl/maps/9qJ8dUKJLZSjqHkD7')
// shop2AddressLink.setAttribute('target', '_blank')
shop2AddressLink.target = '_blank'

shop2AddressItem.append(shop2AddressTitle, shop2AddressLink)



let shopItem3 = document.createElement('div')
shopItem3.classList.add('shop-item')
shopsList.append(shopItem3)

let shopTitle3 = document.createElement('h2')
shopTitle3.textContent = 'Parduotuvė 3'
// shopItem3.append(shopTitle3)

let shopContactsList3 = document.createElement('ul')
shopContactsList3.classList.add('shop-contacts-list')
// shopItem3.append(shopContactsList3)

shopItem3.append(shopTitle3, shopContactsList3)

let shop3PhoneItem = document.createElement('li')
shop3PhoneItem.classList.add('shop-contact-item')
shopContactsList3.append(shop3PhoneItem)

let shop3PhoneTitle = document.createElement('span')
shop3PhoneTitle.classList.add('shop-contact-title')
shop3PhoneTitle.textContent = 'Phone: '

let shop3PhoneLink = document.createElement('a')
let shop3PhoneNumber = '+3704564655'
// shop3PhoneLink.textContent = '+3704564644'
// shop3PhoneLink.href = `tel:+3704564644`
shop3PhoneLink.textContent = shop3PhoneNumber
shop3PhoneLink.setAttribute('href', `tel:${shop3PhoneNumber}`)

shop3PhoneItem.append(shop3PhoneTitle, shop3PhoneLink)


let shop3EmailItem = document.createElement('li')
shop3EmailItem.classList.add('shop-contact-item')
shopContactsList3.append(shop3EmailItem)

let shop3EmailTitle = document.createElement('span')
shop3EmailTitle.classList.add('shop-contact-title')
shop3EmailTitle.textContent = 'Email: '

let shop3EmailLink = document.createElement('a')
let shop3EmailAddress = 'info@parduotuve3.lt'
shop3EmailLink.textContent = shop3EmailAddress
shop3EmailLink.setAttribute('href', `mailto:${shop3EmailAddress}`)

shop3EmailItem.append(shop3EmailTitle, shop3EmailLink)


let shop3AddressItem = document.createElement('li')
shop3AddressItem.classList.add('shop-contact-item')
shopContactsList3.append(shop3AddressItem)

let shop3AddressTitle = document.createElement('span')
shop3AddressTitle.classList.add('shop-contact-title')
shop3AddressTitle.textContent = 'Address: '

let shop3AddressLink = document.createElement('a')
shop3AddressLink.textContent = 'Rotušės aikštė 1, Kaunas'
shop3AddressLink.setAttribute('href', 'https://goo.gl/maps/9qJ8dUKJLZSjqHkD7')
// shop3AddressLink.setAttribute('target', '_blank')
shop3AddressLink.target = '_blank'

shop3AddressItem.append(shop3AddressTitle, shop3AddressLink)



let shopItem4 = document.createElement('div')
shopItem4.classList.add('shop-item')
shopsList.append(shopItem4)

let shopTitle4 = document.createElement('h2')
shopTitle4.textContent = 'Parduotuvė 4'
// shopItem4.append(shopTitle4)

let shopContactsList4 = document.createElement('ul')
shopContactsList4.classList.add('shop-contacts-list')
// shopItem4.append(shopContactsList4)

shopItem4.append(shopTitle4, shopContactsList4)

let shop4PhoneItem = document.createElement('li')
shop4PhoneItem.classList.add('shop-contact-item')
shopContactsList4.append(shop4PhoneItem)

let shop4PhoneTitle = document.createElement('span')
shop4PhoneTitle.classList.add('shop-contact-title')
shop4PhoneTitle.textContent = 'Phone: '

let shop4PhoneLink = document.createElement('a')
let shop4PhoneNumber = '+3704564655'
// shop4PhoneLink.textContent = '+3704564644'
// shop4PhoneLink.href = `tel:+3704564644`
shop4PhoneLink.textContent = shop4PhoneNumber
shop4PhoneLink.setAttribute('href', `tel:${shop4PhoneNumber}`)

shop4PhoneItem.append(shop4PhoneTitle, shop4PhoneLink)


let shop4EmailItem = document.createElement('li')
shop4EmailItem.classList.add('shop-contact-item')
shopContactsList4.append(shop4EmailItem)

let shop4EmailTitle = document.createElement('span')
shop4EmailTitle.classList.add('shop-contact-title')
shop4EmailTitle.textContent = 'Email: '

let shop4EmailLink = document.createElement('a')
let shop4EmailAddress = 'info@parduotuve4.lt'
shop4EmailLink.textContent = shop4EmailAddress
shop4EmailLink.setAttribute('href', `mailto:${shop4EmailAddress}`)

shop4EmailItem.append(shop4EmailTitle, shop4EmailLink)


let shop4AddressItem = document.createElement('li')
shop4AddressItem.classList.add('shop-contact-item')
shopContactsList4.append(shop4AddressItem)

let shop4AddressTitle = document.createElement('span')
shop4AddressTitle.classList.add('shop-contact-title')
shop4AddressTitle.textContent = 'Address: '

let shop4AddressLink = document.createElement('a')
shop4AddressLink.textContent = 'Rotušės aikštė 1, Kaunas'
shop4AddressLink.setAttribute('href', 'https://goo.gl/maps/9qJ8dUKJLZSjqHkD7')
// shop4AddressLink.setAttribute('target', '_blank')
shop4AddressLink.target = '_blank'

shop4AddressItem.append(shop4AddressTitle, shop4AddressLink)


let mapWrapper = document.createElement('div')
mapWrapper.classList.add('map-wrapper')
// contentWrapper.append(mapWrapper)

// mapWrapper.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4415.413961192272!2d23.887974!3d54.896914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7220ff3184881%3A0x8002872ac9bbdb7c!2sRotu%C5%A1%C4%97s%20a.%201%2C%2044280%20Kaunas!5e1!3m2!1sen!2slt!4v1692951629686!5m2!1sen!2slt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

let mapIframe = document.createElement('iframe')
mapWrapper.append(mapIframe)
// mapIframe.src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4415.413961192272!2d23.887974!3d54.896914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7220ff3184881%3A0x8002872ac9bbdb7c!2sRotu%C5%A1%C4%97s%20a.%201%2C%2044280%20Kaunas!5e1!3m2!1sen!2slt!4v1692951629686!5m2!1sen!2slt'
mapIframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4415.413961192272!2d23.887974!3d54.896914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7220ff3184881%3A0x8002872ac9bbdb7c!2sRotu%C5%A1%C4%97s%20a.%201%2C%2044280%20Kaunas!5e1!3m2!1sen!2slt!4v1692951629686!5m2!1sen!2slt')
mapIframe.width = '600'
mapIframe.height = '450'
mapIframe.style.border = '0'
mapIframe.allowFullscreen = ''
mapIframe.loading = 'lazy'
mapIframe.referrerPolicy = 'no-referrer-when-downgrade'

contentWrapper.append(shopsWrapper, mapWrapper)