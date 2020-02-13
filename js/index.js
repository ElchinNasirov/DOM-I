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
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation ==============================================
const navTags = document.querySelectorAll("a");
navTags[0].textContent = "Services";
navTags[1].textContent = "Product";
navTags[2].textContent = "Features";
navTags[3].textContent = "About";
navTags[4].textContent = "Contact";

const navSection = document.querySelector('nav');
navSection.style.backgroundColor = "green";


// Images ==================================================
const ctaImg = document.getElementById("cta-img");
ctaImg.src = "img/header-img.png";
const midImg = document.getElementById("middle-img");
midImg.src = "img/mid-page-accent.jpg";

// Content ==================================================
const ctaText = document.querySelector("h1");
ctaText.textContent = "Dom Is Awsome";

const btn = document.querySelector("button");
btn.textContent = "Get Started";

const topContent = document.querySelectorAll(".text-content");
topContent[0].querySelector("h4").innerHTML = "Features";
topContent[0].querySelector("p").innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topContent[1].querySelector("h4").innerHTML = "About";
topContent[1].querySelector("p").innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topContent[2].querySelector("h4").innerHTML = "Services";
topContent[2].querySelector("p").innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topContent[3].querySelector("h4").innerHTML = "Product";
topContent[3].querySelector("p").innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topContent[4].querySelector("h4").innerHTML = "Vision";
topContent[4].querySelector("p").innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// Contact ==================================================
const contactSection = document.querySelector(".contact");
contactSection.querySelector("h4").innerHTML = "Contact";

const address = document.createElement("p");
address.textContent = "123 Way 456 Street Somewhere, USA";
contactSection.append(address);

const phone = document.createElement("p");
phone.textContent = "1 (888) 888-8888";
contactSection.append(phone);

const email = document.createElement("p");
email.textContent = "sales@greatidea.io";
contactSection.append(email);

// Footer ==================================================
const footerSection = document.querySelector("footer");
footerSection.querySelector("p").innerHTML = "Copyright Great Idea! 2018";
