let container = document.querySelector('.container')
container.style.maxWidth = '1200px'
container.style.marginRight = 'auto'
container.style.marginLeft = 'auto'

// container.append(createContentWrapper())
let contentWrapper = createContentWrapper()
container.append(contentWrapper)

// let shopsWrapper = createShopsWrapper()
let shopsWrapper = createElement('div', 'shop-wrapper')
let mapWrapper = createMapElement()
contentWrapper.append(shopsWrapper, mapWrapper)

// let pageTitle = createPageTitle('Find us')
let pageTitle = createElement('h1', 'page-title', 'Find us')
let shopsList = createShopsList()
shopsWrapper.append(pageTitle, shopsList)

let shopItem1 = createShopItem('Parduotuvė 1', '+37045461211', 'info@parduotuve1.lt', 'Rotušės aikštė 1, Kaunas', 'https://goo.gl/maps/9qJ8dUKJLZSjqHkD7')
let shopItem2 = createShopItem('Parduotuvė 2', '+37045461212', 'info@parduotuve2.lt', 'Rotušės aikštė 2, Kaunas', 'https://goo.gl/maps/9qJ8dUKJLZSjqHkD7')
let shopItem3 = createShopItem('Parduotuvė 3', '+37045461213', 'info@parduotuve3.lt', 'Rotušės aikštė 3, Kaunas', 'https://goo.gl/maps/9qJ8dUKJLZSjqHkD7')
let shopItem4 = createShopItem('Parduotuvė 4', '+37045461214', 'info@parduotuve4.lt', 'Rotušės aikštė 4, Kaunas', 'https://goo.gl/maps/9qJ8dUKJLZSjqHkD7')

shopsList.append(shopItem1, shopItem2, shopItem3, shopItem4)

function createContentWrapper() {
  let contentWrapper = document.createElement('div')
  contentWrapper.classList.add('content-wrapper')

  contentWrapper.style = `display: grid;
                          grid-template-columns: 1fr 1fr;
                          gap: 30px;`

  return contentWrapper
}

function createShopsWrapper() {
  let shopsWrapper = document.createElement('div')
  shopsWrapper.classList.add('shops-wrapper')
  return shopsWrapper
}

function createPageTitle(title) {
  let pageTitle = document.createElement('h1')
  pageTitle.classList.add('page-title')
  pageTitle.textContent = title
  return pageTitle
}

function createShopsList() {
  let shopsList = document.createElement('div')
  shopsList.classList.add('shops-list')
  shopsList.style = `display: grid;
                     grid-template-columns: 1fr 1fr;
                     gap: 15px;`

  return shopsList
}

function createShopItem(title, phoneNumber, email, address, addressUrl) {
  let shopItem = document.createElement('div')
  shopItem.classList.add('shop-item')

  // let shopTitle = document.createElement('h2')
  // shopTitle.textContent = title
  let shopTitle = createElement('h2', '', title)

  // let shopContactsList = document.createElement('ul')
  // shopContactsList.classList.add('shop-contacts-list')
  let shopContactsList = createElement('ul', 'shop-contacts-list')

  shopItem.append(shopTitle, shopContactsList)

  let shopPhoneItem = document.createElement('li')
  shopPhoneItem.classList.add('shop-contact-item')
  shopContactsList.append(shopPhoneItem)

  // let shopPhoneTitle = document.createElement('span')
  // shopPhoneTitle.classList.add('shop-contact-title')
  // shopPhoneTitle.textContent = 'Phone: '

  let shopPhoneTitle = createElement('span', 'shop-contact-title', 'Phone: ')

  let shopPhoneLink = document.createElement('a')
  shopPhoneLink.textContent = phoneNumber
  shopPhoneLink.setAttribute('href', `tel:${phoneNumber}`)

  shopPhoneItem.append(shopPhoneTitle, shopPhoneLink)


  let shopEmailItem = document.createElement('li')
  shopEmailItem.classList.add('shop-contact-item')
  shopContactsList.append(shopEmailItem)

  // let shopEmailTitle = document.createElement('span')
  // shopEmailTitle.classList.add('shop-contact-title')
  // shopEmailTitle.textContent = 'Email: '

  let shopEmailTitle = createElement('span', 'shop-contact-title', 'Email: ')

  let shopEmailLink = document.createElement('a')
  shopEmailLink.textContent = email
  shopEmailLink.setAttribute('href', `mailto:${email}`)

  shopEmailItem.append(shopEmailTitle, shopEmailLink)


  let shopAddressItem = document.createElement('li')
  shopAddressItem.classList.add('shop-contact-item')
  shopContactsList.append(shopAddressItem)

  // let shopAddressTitle = document.createElement('span')
  // shopAddressTitle.classList.add('shop-contact-title')
  // shopAddressTitle.textContent = 'Address: '

  let shopAddressTitle = createElement('span', 'shop-contact-title', 'Address: ')

  let shopAddressLink = document.createElement('a')
  shopAddressLink.textContent = address
  shopAddressLink.setAttribute('href', addressUrl)
  shopAddressLink.target = '_blank'

  shopAddressItem.append(shopAddressTitle, shopAddressLink)

  return shopItem
}

function createMapElement() {
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
  
  return mapWrapper
}

function createElement(elementType, className, text) {
  let element = document.createElement(elementType)

  if (className) {
    element.className = className
  }

  element.textContent = text

  return element
}

// console.log(createElement('h1', 'klase antra-klase', 'labas'))
// console.log(createElement('h2'))
// console.log(createElement('div'))