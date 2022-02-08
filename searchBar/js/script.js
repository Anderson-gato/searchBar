//getting all required elements
const searchWrapper = document.querySelector('.search-input')
const inputBox = searchWrapper.querySelector('input')
const suggBox = searchWrapper.querySelector('.autocom-box')

//if user press any key and perease
inputBox.onkeyup = e => {
  //* pega o valor do input
  let userData = e.target.value // user enetered date
  let emptyArray = [] //* array que vai guardar o valor
  if (userData) {
    emptyArray = suggestions.filter(data => {
      return data.toLocaleUpperCase().startsWith(userData.toLocaleUpperCase()) //* função que vai filtar o valor e comparar com o seggestions
    })
    emptyArray = emptyArray.map(data => {
      return (data = '<li><a href="#">' + data + '</a></li>') //* transformando os valores do suggestions em listas
    })
    console.log(emptyArray)
    searchWrapper.classList.add('active') // mostar box do autocomplete
    showSuggestions(emptyArray)

    let allList = suggBox.querySelectorAll('li')
    for (let i = 0; i < allList.length; i++) {
      // adicionando o atributo onclick em todas as tags li
      allList[i].setAttribute('onclick', 'select(this)')
    }
  } else {
    searchWrapper.classList.remove('active') // esconder box do autocomplete
  }
}

function select(element) {
  let selectUserData = element.textContent // preenchendo o elemento no input
  inputBox.value = selectUserData
  searchWrapper.classList.remove('active') // esconder box do autocomplete
}

function showSuggestions(list) {
  let listData
  if (!list.length) {
    userValue = inputBox.value
    listData = '<li>' + userValue + '</li>'
  } else {
    listData = list.join('')
  }
  /* se o array estiver vazio a class autocom-box vai ficar underfined
  mas se tiver algo, ele vai preenchar a lista com os elementos do suggestions */
  suggBox.innerHTML = listData
}
