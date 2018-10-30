function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let newLi = document.createElement('li');
  let newLiText = document.createTextNode(retrieveEmployeeInformation());
  newLi.appendChild(newLiText);
  let list = document.getElementsByClassName('employee-list')[0].appendChild(newLi);
}
