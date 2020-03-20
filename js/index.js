const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

let middlePageAccent = document.getElementById("middle-img");
middlePageAccent.setAttribute(
  "src",
  siteContent["main-content"]["middle-img-src"]
);
let nav = document.querySelectorAll("a");
console.log("nav", nav);
let arrNav = Array.from(nav);
console.log("arrnav", arrNav);
arrNav[0].textContent = siteContent["nav"]["nav-item-1"];
arrNav[1].textContent = siteContent["nav"]["nav-item-2"];
arrNav[2].textContent = siteContent["nav"]["nav-item-3"];
arrNav[3].textContent = siteContent["nav"]["nav-item-4"];
arrNav[4].textContent = siteContent["nav"]["nav-item-5"];
arrNav[5].textContent = siteContent["nav"]["nav-item-6"];

let newElement1 = document.createElement("a");
newElement1.textContent = "Home";
const parentElement = document.querySelector("nav");
console.log("parent", parentElement);
parentElement.prepend(newElement1);

let newElement2 = document.createElement("a");
newElement2.textContent = "DOM News";
const aElement = document.querySelector("nav");
console.log("a", aElement);
aElement.prepend(newElement2);

let newNav = document.querySelectorAll("a");
console.log("newnav", newNav);

newNav.forEach(Element => {
  Element.style.color = "green";
});

let h1 = document.querySelector("h1");
console.log("h1", h1);
h1.textContent = siteContent["cta"]["h1"];

let button = document.querySelector("button");
console.log("button", button);
button.textContent = siteContent["cta"]["button"];

let h4 = document.querySelectorAll("h4");
console.log("h4", h4);
let arrh4 = Array.from(h4);
console.log("arrh4", arrh4);
arrh4[0].textContent = siteContent["main-content"]["features-h4"];
arrh4[1].textContent = siteContent["main-content"]["about-h4"];
arrh4[2].textContent = siteContent["main-content"]["services-h4"];
arrh4[3].textContent = siteContent["main-content"]["product-h4"];
arrh4[4].textContent = siteContent["main-content"]["vision-h4"];
arrh4[5].textContent = siteContent["contact"]["contact-h4"];

let p = document.querySelectorAll("p");
console.log("p", p);
let arrp = Array.from(p);
console.log("arrp", arrp);
arrp[0].textContent = siteContent["main-content"]["features-content"];
arrp[1].textContent = siteContent["main-content"]["about-content"];
arrp[2].textContent = siteContent["main-content"]["services-content"];
arrp[3].textContent = siteContent["main-content"]["product-content"];
arrp[4].textContent = siteContent["main-content"]["vision-content"];
arrp[5].textContent = siteContent["contact"]["address"];
arrp[6].textContent = siteContent["contact"]["phone"];
arrp[7].textContent = siteContent["contact"]["email"];
arrp[8].textContent = siteContent["footer"]["copyright"];
