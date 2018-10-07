document.querySelector("#button").addEventListener("click", loadData);

function loadData() {
  // create XHR object
  const xhr = new XMLHttpRequest();

  // initialize the request
  xhr.open("GET", "data.txt", true);

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };
  //send the request
  xhr.send();
}
