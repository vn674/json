let pageTitleElement;
let outputGridElement;
let projectDisplayElement;

let friendCollection = [
  {
    "name" : "Shelly",
    "home" : "New Jersey",
    "trait" : "is always sick",
    "image" : 'shelly.JPG'
  },
  {
    "name" : "Meyca",
    "home" : "Long Island",
    "trait" : "I never know where she is",
    "image" : 'meyca.JPG'
  },
  {
    "name" : "Cheyenne",
    "home" : "Trinidad",
    "trait" : "has the strength of a tank",
    "image" : 'chey.JPG'
  },
  {
    "name" : "Hillary",
    "home" : "Brooklyn",
    "trait" : "can handle everything and anything",
    "image" : 'hillary.JPG'
  },
  {
    "name" : "Tiffany",
    "home" : "Myanmar",
    "trait" : "is the best cook",
    "image" : 'tiff.JPG'
  },
  {
    "name" : "Jeffery",
    "home" : "Long Island",
    "trait" : "can ride a bike",
    "image" : 'jeff.JPG'
  },
];

document.addEventListener("DOMContentLoaded", function(){

  /* Get page element references */
  pageTitleElement = document.getElementById("pageTitle");
  outputGridElement = document.getElementById("outputGrid");
  projectDisplayElement = document.getElementById("projectDisplay");

  /* Get URL Params */
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlSection = urlParams.get('section');

  if (typeof urlSection === 'undefined' || urlSection === null) {
    // variable is undefined or null
    pageTitleElement.innerText = "Friends Vi Made During Her Time at NYU";
  
    /* Create thumbnails for matching category, or all */
    for (let i = 0; i < friendCollection.length; i++) {
      createProjectPreview(friendCollection[i]);
      }
  }

  else {
    /* Display individual project by trying to match the "ID" value */
    for (let i = 0; i < friendCollection.length; i++) {
      if (friendCollection[i]["name"] === urlSection) {
        createProjectPage(friendCollection[i]);
      }
    }
  }

});


function createProjectPreview(incomingJSON){

  let newPreviewLink = document.createElement("A");
  newPreviewLink.href = "index.html?section=" + incomingJSON["name"];

  let newPreviewElement = document.createElement("DIV");
  newPreviewLink.appendChild(newPreviewElement);

  let newPreviewTitle = document.createElement("P");
  newPreviewTitle.classList.add("previewTitle");
  newPreviewTitle.innerText = incomingJSON["name"];
  newPreviewElement.appendChild(newPreviewTitle);

  let newPreviewThumbnail = document.createElement("IMG");
  newPreviewThumbnail.classList.add("thumbnail");
  newPreviewThumbnail.src = incomingJSON["image"];
  newPreviewElement.appendChild(newPreviewThumbnail);

  outputGridElement.appendChild(newPreviewLink);

  anime({
    targets: newPreviewElement,
    opacity: [0, 1],
    scale: [0.8, 1],
    duration: 1000,
    easing: 'easeInOutSine',
  });

}

function createProjectPage(incomingJSON) {
  
  pageTitleElement.innerText = incomingJSON["name"];

  let newProjectElement = document.createElement("DIV");
  newProjectElement.style.display = "flex";

  let newProjectImage = document.createElement("IMG");
  newProjectImage.classList.add("mainImage");
  newProjectImage.src = incomingJSON["image"];
  newProjectElement.appendChild(newProjectImage);

  let newProjectTrait = document.createElement("P");
  newProjectTrait.classList.add("trait");
  newProjectTrait.innerText = incomingJSON["name"] + ' is from ' + incomingJSON["home"] + ' and ' + incomingJSON['trait'] + '.';
  newProjectElement.appendChild(newProjectTrait);

  projectDisplayElement.appendChild(newProjectElement);

}
