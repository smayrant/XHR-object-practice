document.querySelector("#button").addEventListener("click", loadData);

function loadData() {
  // create XHR object
  const xhr = new XMLHttpRequest();

  // initialize the request
  xhr.open("GET", "data.txt", true);

  xhr.onload = function() {
    if (this.status === 200) {
      document.getElementById("output").innerHTML = `<h1>${
        this.responseText
      }</h1>`;
    }
  };
  //send the request
  xhr.send();
}
