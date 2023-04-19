let pageTitleElement;
let outputGridElement;
let projectDisplayElement;

let friendCollection = [
  {
    'name' : 'Shelly',
    'home' : 'New Jersey',
    'trait' : 'is always sick',
    'image' : 'shelly.JPG'
  },
  {
    'name' : 'Meyca',
    'home' : 'Long Island',
    'trait' : 'I never know where she is',
    'image' : 'meyca.JPG'
  },
  {
    'name' : 'Cheyenne',
    'home' : 'Trinidad',
    'trait' : 'has the strength of a tank',
    'image' : 'chey.JPG'
  },
  {
    'name' : 'Hillary',
    'home' : 'Brooklyn',
    'trait' : 'can handle everything and anything',
    'image' : 'hillary.JPG'
  },
  {
    'name' : 'Tiffany',
    'home' : 'Myanmar',
    'trait' : 'is the best cook',
    'image' : 'tiff.JPG'
  },
  {
    'name' : 'Jeffery',
    'home' : 'Long Island',
    'trait' : 'can ride a bike',
    'image' : 'jeff.JPG'
  },
  {
    'name' : 'Ziynou',
    'home' : 'New York',
    'trait' : 'is one of my first friends in Tandon',
    'image' : 'ziynou.JPG'
  },
  {
    'name' : 'Jesse',
    'home' : 'New York',
    'trait' : 'builds computers',
    'image' : 'jesse.JPG'
  },
  {
    'name' : 'Sadvhi',
    'home' : 'India',
    'trait' : 'her eyeliner is always clean',
    'image' : 'sadvhi.JPG'
  },
  {
    'name' : 'Niharika',
    'home' : 'Atlanta',
    'trait' : 'loves Tacobell',
    'image' : 'niharika.JPG'
  },
  {
    'name' : 'Darwin',
    'home' : 'Bronx',
    'trait' : 'is one of my first friends in Civil',
    'image' : 'darwin.JPG'
  },
  {
    'name' : 'Saimul',
    'home' : 'New York',
    'trait' : 'is one of my first friends in Civil',
    'image' : 'saimul.JPG'
  },
  {
    'name' : 'Joan',
    'home' : 'New York',
    'trait' : 'is my first school coworker',
    'image' : 'joan.JPG'
  },
  {
    'name' : 'Skye',
    'home' : 'Michigan',
    'trait' : 'has a cute haircut',
    'image' : 'skye.JPG'
  },
  {
    'name' : 'Kemi',
    'home' : 'New York',
    'trait' : 'her favorite apple is the Mcintosh',
    'image' : 'kemi.JPG'
  },
  {
    'name' : 'Jessica',
    'home' : 'New York',
    'trait' : 'is the nicest person at Tandon',
    'image' : 'jessica.JPG'
  },
];

document.addEventListener('DOMContentLoaded', function(){

  /* Get page element references */
  pageTitleElement = document.getElementById('pageTitle');
  outputGridElement = document.getElementById('outputGrid');
  projectDisplayElement = document.getElementById('projectDisplay');

  /* Get URL Params */
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlSection = urlParams.get('section');

  if (typeof urlSection === 'undefined' || urlSection === null) {
    // variable is undefined or null
    pageTitleElement.innerText = 'Friends Vi Made During Her Time at NYU';
  
    /* Create thumbnails for matching category, or all */
    for (let i = 0; i < friendCollection.length; i++) {
      createProjectPreview(friendCollection[i]);
      }
  }

  else {
    /* Display individual project by trying to match the 'ID' value */
    for (let i = 0; i < friendCollection.length; i++) {
      if (friendCollection[i]['name'] === urlSection) {
        createProjectPage(friendCollection[i]);
      }
    }
  }

});


function createProjectPreview(incomingJSON){

  let newPreviewLink = document.createElement('A');
  newPreviewLink.href = 'index.html?section=' + incomingJSON['name'];

  let newPreviewElement = document.createElement('DIV');
  newPreviewLink.appendChild(newPreviewElement);

  let newPreviewTitle = document.createElement('P');
  newPreviewTitle.classList.add('previewTitle');
  newPreviewTitle.innerText = incomingJSON['name'];
  newPreviewElement.appendChild(newPreviewTitle);

  let newPreviewThumbnail = document.createElement('IMG');
  newPreviewThumbnail.classList.add('thumbnail');
  newPreviewThumbnail.src = incomingJSON['image'];
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
  
  pageTitleElement.innerText = incomingJSON['name'];

  let newProjectElement = document.createElement('DIV');
  newProjectElement.style.display = 'flex';

  let newProjectImage = document.createElement('IMG');
  newProjectImage.classList.add('mainImage');
  newProjectImage.src = incomingJSON['image'];
  newProjectElement.appendChild(newProjectImage);

  let newProjectTrait = document.createElement('P');
  newProjectTrait.classList.add('trait');
  newProjectTrait.innerText = incomingJSON['name'] + ' is from ' + incomingJSON['home'] + ' and ' + incomingJSON['trait'] + '.';
  newProjectElement.appendChild(newProjectTrait);

  projectDisplayElement.appendChild(newProjectElement);

  anime({
    targets: newProjectImage,
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutQuad'
  })

}
