import { MENU_ITEMS } from './config.js'

export default function header() {
  const headerElement = document.createElement('header')

  const logoWrapper = document.createElement('div')
  logoWrapper.classList.add('logo-wrapper')

  const logoLink = document.createElement('a')
  logoLink.textContent = 'API project'
  logoLink.href = './'

  logoWrapper.append(logoLink)

  const navElement = document.createElement('nav')

  const menuList = document.createElement('ul')
  menuList.classList.add('main-menu')

  MENU_ITEMS.forEach(item => {
    const menuItem = document.createElement('li')
    menuItem.classList.add('menu-item')

    const menuItemLink = document.createElement('a')
    menuItemLink.classList.add('menu-item-link')

    if (location.pathname === '/' + item.path) {
      menuItemLink.classList.add('active')
    }
    
    menuItemLink.textContent = item.title
    menuItemLink.href = './' + item.path

    menuItem.append(menuItemLink)

    menuList.append(menuItem)
  })

  

  navElement.append(menuList)

  headerElement.append(logoWrapper, navElement)
  return headerElement
}