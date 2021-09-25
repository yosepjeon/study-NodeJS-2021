function Member(id, password) {
  this.id = id
  this.password = password
}

Member.prototype.sayHello = function () {
  console.log(this.id + ' say Hello')
}

let member1 = new Member('member1', '123')
let member2 = new Member('member2', '123')

member1.sayHello()
member2.sayHello()