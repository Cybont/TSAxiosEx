import axios, { AxiosResponse } from 'axios';

// Gets list minimal info list
let getListBtn:HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonGet");
// Gets details view via button in the list
let getDetailsBtn : HTMLButtonElement;

// List output
let outList: HTMLDivElement = <HTMLDivElement> document.getElementById("List");
// Details of the object you chose
let outListDetails: HTMLDivElement = <HTMLDivElement> document.getElementById("Details");



//let detailedViewElement: HTMLDivElement = <HTMLDivElement> document.getElementById("responseElement");

//let value : HTMLInputElement = <HTMLInputElement>document.getElementById("valueInput");


getListBtn.addEventListener("click", MouseEvent => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
  .then(function (response) {
    listView(response);
  })
  .catch(function (error) {
    console.log(error);
  });
})

/*
getDetailsBtn.addEventListener("click", MouseEvent => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
  .then(function (response) {
    detailsView(response.data[getListBtn.value])
  })
  .catch(function (error) {
    console.log(error);
  });
})
*/




function listView(response : AxiosResponse){
    let fragment : DocumentFragment = document.createDocumentFragment();

    for(var i = 0; i < 10 ; i++) {
        let listItem : HTMLParagraphElement = <HTMLParagraphElement> document.createElement("p");
        
        getDetailsBtn = <HTMLButtonElement> document.createElement("button");
        getDetailsBtn.className = "listBtn";
        getDetailsBtn.textContent = "Details " + i;
        getDetailsBtn.value = response.data[i].id;
        
        listItem.innerHTML = JSON.stringify(response.data[i].name);

        fragment.appendChild(listItem);
        fragment.appendChild(getDetailsBtn);
    }
    outList.appendChild(fragment);
}

function detailsView(id : number){
     
}

