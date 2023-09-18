console.groupCollapsed('Arrays')

// Masyvo kūrimas
let students = ['Steve', 'John', 'Peter']

// Masyvo narių pasiekimas
console.log(students[0])
console.log(students[1])
console.log(students[2])

// Kaip iteruojama per masyvą (ciklai/loops)

// for ciklas
for (let i = 0; i < students.length; i++) {
  console.log('for ciklas: ' + students[i])
}

// map ciklas
students.map((student) => {
  console.log('map ciklas: ' + student)
})

// forEach ciklas
students.forEach((student) => {
  console.log('forEach ciklas: ' + student)
})

// while ciklas
let n = 0
while (n < students.length) {
  console.log('While ciklas: ' + students[n])
  n++
}

// do... while ciklas
let m = 0
do {
  console.log('do..while ciklas: ' + students[m])
  m++
} while (m < students.length)

// for ...of ciklas
for (let student of students) {
  console.log('for ...of ciklas: ' + student)
}

//              Vardas  Pavard. Amzius
let student1 = ['John', 'Doe', 25, 'Vilnius', 'FEU9',  'Steve']

console.log(student1)
console.log(student1[0])
console.log(student1[1])
console.log(student1[2])
console.log(student1[3])
console.log(student1[4])

console.groupEnd()

/*

Studentas 1:
  - Vardas: John,
  - Pavarde: Doe,
  - Amzius: 25,
  - Miestas: Vilnius,
  - Grupe: FEU9,
  - Antras vardas: Steve


Objekto sintaksė:

let obj = {
  key: 'value',
}

*/

let studentObj = {
  name: 'John', // Property (key: value)
  surname: 'Doe',
  age: 25,
  city: 'Vilnius',
  group: 'FEU9',
  'second name': 'Steve',
  grades: [7, 8, 9],
  address: {
    city: 'Kaunas',
    street: 'Vilniaus st.'
  },
  getFullName: function() {
    return `Full name is: ${this.name} ${this['second name']} ${this.surname}.`
  },
  setStudentInactive: function() {
    this.isActive = false
  },
  setStudentActive() {
    this.isActive = true
  },
  removeHobby(hobbyToRemove) {
    // let filteredHobbies = this.hobbies.filter(hobby => {
    //   return hobby !== hobbyToRemove
    // })

    // this.hobbies = filteredHobbies

    this.hobbies = this.hobbies.filter(hobby => hobby !== hobbyToRemove)
  }
}

console.log(studentObj)

// Objekto properties pasiekimas
console.log(studentObj['name'])
console.log(studentObj['surname'])
console.log(studentObj['age'])
console.log(studentObj['city'])
console.log(studentObj['group'])
console.log(studentObj['second name'])

let propertyName = 'age'
console.log(studentObj[propertyName])

console.log(studentObj.name)
console.log(studentObj.surname)
console.log(studentObj.age)
console.log(studentObj.city)
console.log(studentObj.group)

// Objekto properties pakeitimas
console.log(studentObj.age)
// studentObj.age = 26
studentObj.age = studentObj.age + 1
console.log(studentObj.age)

studentObj['city'] = 'Kaunas'
console.log(studentObj.city)

// Objekto properties sukūrimas
console.log(studentObj.isActive)
studentObj.isActive = true
console.log(studentObj.isActive)

console.log(studentObj['birth city'])
studentObj['birth city'] = 'Klaipeda'
console.log(studentObj['birth city'])

// Objekto properties ištrynimas
delete studentObj['birth city']
delete studentObj.group

studentObj.hobbies = ['sports', 'reading']

console.log(studentObj.hobbies)
console.log(studentObj.hobbies[0])
console.log(studentObj.hobbies[1])

studentObj.hobbies.forEach(hobby => {
  console.log(hobby)
})

studentObj.contacts = {
  phone: 8674564644,
  email: 'vardas@pavarde.lt',
}

console.log(studentObj.contacts)
console.log(studentObj.contacts.phone)
console.log(studentObj.contacts.email)

console.log(studentObj)

console.log(studentObj.getFullName())

console.log(studentObj.isActive)
studentObj.setStudentInactive()
console.log(studentObj.isActive)

studentObj.switchStudentActivity = function() {
  // if (this.isActive) {
  //   this.isActive = false
  // } else {
  //   this.isActive = true
  // }

  this.isActive = !this.isActive
}

studentObj.switchStudentActivity()
console.log(studentObj.isActive)
studentObj.switchStudentActivity()
console.log(studentObj.isActive)
studentObj.switchStudentActivity()
console.log(studentObj.isActive)

console.log(studentObj.hobbies)

studentObj.addHobby = function(hobbyToAdd) {
  this.hobbies.push(hobbyToAdd)
}

studentObj.addHobby('traveling')
console.log(studentObj.hobbies)

studentObj.removeHobby('sports')
console.log(studentObj.hobbies)