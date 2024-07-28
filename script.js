function transformBinaryToDecimal(num) {
  const toArray = num.split('')
  let partialValue = 0

  for (let i = 0; i < toArray.length; i++) {
    const value = parseInt(toArray[i])

    partialValue += value * Math.pow(2, toArray.length - i - 1)
  }
  return partialValue
}

function getDataFromInput() {
  const inputValue = document.getElementById('input').value
  const isValidValueFromInput = new RegExp('^[0-1]+$');

  if (inputValue.length === 0) {
    document.getElementById('result').innerHTML = "";
    return
  }

  const validRegex = inputValue.match(isValidValueFromInput)
  if (validRegex == null && inputValue.length > 0) {
    console.error('This is error: input data invalid')
    document.getElementById('result').innerHTML = 'Invalid input data: Please type 0 or 1 only';
    document.getElementById('result').style.color = 'red'
    return
  }

  const result = transformBinaryToDecimal(inputValue)
  document.getElementById('result').style.color = 'white'
  document.getElementById('result').innerHTML = "The decimal value is: " + result;
}
