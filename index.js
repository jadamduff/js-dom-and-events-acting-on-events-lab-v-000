function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi(text) {
  let newLi = document.createElement('li');
  let newLiText = document.createTextNode(text);
  newLi.appendChild(newLiText);
  document.getElementsByClassName('employee-list').appendChild(newLi);
}
