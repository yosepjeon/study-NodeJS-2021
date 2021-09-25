const array = ['사자', '과자', '과일', '타자', '타일']
const result1 = []

array.forEach(item => {
  if (item.match(/자$/)) {
    result1.push(item)
  }
})

console.log(result1)

const result2 = []

array.forEach(item => {
  if(item.match(/^과/)) {
    result2.push(item)
  }
})

console.log(result2)