module.exports = function reverse (n) {
  let str = n + ''
  let array = str.split('')
  if (array[0] == '-') {
    array.shift()
  }
  let newArray = []
  for(let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])
  }
  str = newArray.join('')
  n = +str
  return n
}
