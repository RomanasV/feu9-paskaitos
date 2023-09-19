// UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
// let company1 = new Object()
let company1 = {}

// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
company1['company name'] = 'Company ABC'

// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
company1.opened = 1947

// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
company1.companyCode = 4564311548

// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
company1.employees = 1000

// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
company1.ceo = 'John Doe'

// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
company1.nvo = false

// 2.7. Property „workingLocations" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
company1.workingLocations = ['Lithuania', 'Poland']

// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
company1.activityAreas = ['B2B Sales', 'Marketing']

// 2.9. Property „contacts", kuris turės:
// company1.contacts = new Object()
company1.contacts = {}

//       2.9.1. „phone"
company1.contacts.phone = 8645468461

//       2.9.2. „email"
company1.contacts.email = 'info@companyabc.lt'

//       2.9.3. „address", kuris turės:
company1.contacts.address = {}

//           2.9.3.1. „country"
company1.contacts.address.country = 'Lithuania'

//           2.9.3.2. „city"
company1.contacts.address.city = 'Vilnius'

//           2.9.3.3. „street"
company1.contacts.address.street = 'Vilniaus st.'

//           2.9.3.4. „apartment"
company1.contacts.address.apartment = 15

console.log(company1)

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
company1.getFullAddress = function() {
  // let street = this.contacts.address.street
  // let apartment = this.contacts.address.apartment
  // let city = this.contacts.address.city
  // let country = this.contacts.address.country

  let { street, apartment, city, country } = this.contacts.address

  return `${street} ${apartment}, ${city}, ${country}.`
}
console.log(company1.getFullAddress())

// 6. Sukurti funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
company1.setNVO = function() {
  this.nvo = true
}
console.log(company1.nvo)
company1.setNVO()
console.log(company1.nvo)

//        6.2. Pakeičia NVO statusą į false.
company1.setNonNVO = function() {
  this.nvo = false
}

//        6.3. Keičia NVO statusą iš true į false ir iš false į true.
company1.switchNVOStatus = function() {
  this.nvo = !this.nvo
}

// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
company1.getWorkingLocations = function() {
  return 'Working locations are: ' + this.workingLocations.join(', ') + '.'
}
console.log(company1.getWorkingLocations())

//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
company1.getActivityAreas = function() {
  return 'Activity areas are: ' + this.activityAreas.join(', ') + '.'
}
console.log(company1.getActivityAreas())

// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
company1.addWorkingLocation = function(newLocation) {
  this.workingLocations.push(newLocation)
}
console.log(company1.workingLocations)
company1.addWorkingLocation('Latvia')
console.log(company1.workingLocations)

//        8.2. Naują veiklos rūšį prie veiklų masyvo.
company1.addActivityArea = function(newArea) {
  this.activityAreas.push(newArea)
}

// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
company1.removeWorkingLocation = function(locationToRemove) {
  let updatedLocations = this.workingLocations.filter(location => location !== locationToRemove)
  this.workingLocations = updatedLocations
}
company1.removeWorkingLocation('Latvia')

//        9.2. Veiklos rūšį iš veiklų masyvo.
company1.removeActivityArea = function(areaToRemove) {
  let updatedAreas = this.activityAreas.filter(area => area !== areaToRemove)
  this.activityAreas = updatedAreas
}
console.log(company1.activityAreas)
company1.removeActivityArea('Marketing')
console.log(company1.activityAreas)


let company2 = {
  'company name': 'Company XYZ',
  opened: 1999,
  companyCode: 45431874311,
  employees: 100,
  ceo: 'Doe John',
  nvo: true,
  workingLocations: ['Germany', 'France'],
  activityAreas: ['Tourism', 'B2C sales'],
  contacts: {
    phone: 8646213487,
    email: 'info@companyxyz.lt',
    address: {
      country: 'Lithuania',
      city: 'Vilnius',
      street: 'Vilniaus st.',
      apartment: 15
    }
  },
  getFullAddress: function() {
    let { street, apartment, city, country } = this.contacts.address
  
    return `${street} ${apartment}, ${city}, ${country}.`
  },
  setNVO: function() {
    this.nvo = true
  },
  setNonNVO() {
    this.nvo = false
  },
  switchNVOStatus() {
    this.nvo = !this.nvo
  },
  getWorkingLocations: function() {
    return 'Working locations are: ' + this.workingLocations.join(', ') + '.'
  },
  getActivityAreas: function() {
    return 'Activity areas are: ' + this.activityAreas.join(', ') + '.'
  },
  addWorkingLocation: function(newLocation) {
    this.workingLocations.push(newLocation)
  },
  addActivityArea: function(newArea) {
    this.activityAreas.push(newArea)
  },
  removeWorkingLocation: function(locationToRemove) {
    let updatedLocations = this.workingLocations.filter(location => location !== locationToRemove)
    this.workingLocations = updatedLocations
  },
  removeActivityArea: function(areaToRemove) {
    let updatedAreas = this.activityAreas.filter(area => area !== areaToRemove)
    this.activityAreas = updatedAreas
  }
}

console.log(company2)
console.log(company2.getFullAddress())