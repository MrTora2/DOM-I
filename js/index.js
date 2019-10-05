const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//My Code Below
//Selector used document.getElementsByTagName(img);

//Images
const cta1 = document.querySelector('#cta-img');

cta1.setAttribute('src', 'img/header-img.png');

const mid = document.querySelector('#middle-img');

mid.setAttribute('src', 'img/mid-page-accent.jpg');

//Navigation

const atags1 = document.querySelectorAll('a');

atags1[0].textContent= 'Services';

atags1[1].textContent= 'Product';

atags1[2].textContent= 'Vision';

atags1[3].textContent= 'Features';

atags1[4].textContent= 'About';

atags1[5].textContent= 'Contact';

atags1[0].style.color= "green";

atags1[1].style.color= "green";

atags1[2].style.color= "green";

atags1[3].style.color= "green";

atags1[4].style.color= "green";

atags1[5].style.color= "green";

const navigationEL = document.querySelector('nav');

const extraatag1 = document.createElement('a');

extraatag1.textContent = "Append";

extraatag1.style.color = "green";

navigationEL.appendChild(extraatag1);

const extraatag2 = document.createElement('a');

extraatag2.textContent = "Prepend";

extraatag2.style.color = "green";

navigationEL.prepend(extraatag2);



//Header

const head = document.querySelector('h1');

head.textContent = 'Dom Is Awesome';

const clicky = document.querySelector('button');

clicky.textContent = 'Get Started';

//Main Content

const sectionheads = document.querySelectorAll('h4');

sectionheads[0].textContent= 'Features';

sectionheads[1].textContent= 'About';

sectionheads[2].textContent= 'Services';

sectionheads[3].textContent= 'Product';

sectionheads[4].textContent= 'Vision';

const paragraph = document.querySelectorAll('p');

paragraph[0].textContent= 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

paragraph[1].textContent= 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

paragraph[2].textContent= 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

paragraph[3].textContent= 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

paragraph[4].textContent= 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//Contact

sectionheads[5].textContent= 'Contact';

paragraph[5].textContent= '123 Way 456 Street Somewhere, USA';

paragraph[6].textContent= '1 (888) 888-8888';

paragraph[7].textContent= 'sales@greatidea.io';

//Footer

paragraph[8].textContent= 'Copyright Great Idea! 2018';