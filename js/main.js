// hover and dropdown
let dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  let toggle = dropdown.querySelector(".dropdown-toggle");
  let menu = dropdown.querySelector(".dropdown-menu");

  toggle.addEventListener("mouseover", () => {
    menu.style.display = "block";
    menu.classList.remove("show");
    setTimeout(() => menu.classList.add("show"), 10);
  });

  dropdown.addEventListener("mouseleave", () => {
    menu.classList.remove("show");
    menu.style.display = "none";
    setTimeout(() => (menu.style.display = "none"), 300);
  });
});

//
let drops = document.querySelectorAll(".drop.links-laft-bar-li");
drops.forEach((drop) => {
  let drop2 = drop.querySelector(".links-dropdown");
  drop.addEventListener("click", () => {
    drop2.style.display = "block";
    drop2.classList.toggle("show");
  });
});

// left and right navbar
let xmarks = document.querySelectorAll(".fa-xmark");
let bars = document.querySelector(".fa-bars");
let glass = document.querySelector(".fa-magnifying-glass");
let shopCart = document.querySelector(".fa-cart-shopping");
let rightNavbars = document.querySelectorAll(".right-navBar");
let leftnavBar = document.querySelector(".left-navbar");

bars.onclick = () => {
  leftnavBar.classList.add("open");
};

glass.addEventListener("click", () => {
  rightNavbars[0].classList.add("open");
});
shopCart.addEventListener("click", () => {
  rightNavbars[1].classList.add("open");
});

xmarks.forEach((xmark) => {
  xmark.addEventListener("click", () => {
    leftnavBar.classList.remove("open");
  });
  xmark.addEventListener("click", () => {
    rightNavbars.forEach((rightNavbar) => {
      rightNavbar.classList.remove("open");
    });
  });
});

// chage the img

let contentData = [
  {
    subTitle: "SALE OFF 25%",
    title: "Discover Living Room Tables",
    description: "Free standard shipping",
    descriptionSpan: "with $45",
    img: "img/landing03.png",
  },
  {
    subTitle: "SALE OFF 30%",
    title: "Lamps & Lighting Great Low Prices",
    description: "Free standard shipping ",
    descriptionSpan: "with $35",
    img: "img/landing02.png",
  },
  {
    subTitle: "New Arrivals",
    title: "Designer chair styles for every space",
    description: "Designer chair styles for every space - ",
    descriptionSpan: "Free Shipping",
    img: "img/landing01.png",
  },
];

let currentIndex = 0;
let interval;

const subTitle = document.getElementById("subTitle"); // subTitle
const title = document.getElementById("title");
const description = document.getElementById("description");
const descriptionSpan = document.getElementById("descriptionSpan");
const imgData = document.getElementById("imgData");
const boltes = document.querySelectorAll(".control");

// Function to update content
function updateData(index) {
  const content = document.querySelector(".content");
  content.classList.add("hidden");

  setTimeout(() => {
    const data = contentData[index];
    subTitle.textContent = data.subTitle;
    title.textContent = data.title;
    description.textContent = data.description;
    imgData.src = data.img;

    content.classList.remove("hidden");

    boltes.forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });
  }, 500);
}

// Function to auto-switch content
function startAutoSwitch() {
  clearInterval(interval); // تأكد من إيقاف أي مؤقت سابق
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % contentData.length;
    updateData(currentIndex);
  }, 5000);
}

// Add event listeners for buttons
boltes.forEach((bolt) => {
  bolt.addEventListener("click", () => {
    clearInterval(interval); // أوقف التبديل التلقائي
    const index = parseInt(bolt.dataset.index, 10);
    if (!isNaN(index)) {
      currentIndex = index;
      updateData(currentIndex);
      startAutoSwitch(); // أعد تشغيل التبديل التلقائي
    }
  });
});

updateData(currentIndex);
startAutoSwitch();

const scrollContainer = document.querySelector(".scrol-shop");

let scrollDirection = 1;

let currentScroll = 0;

function performScroll() {
  const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  currentScroll += 200 * scrollDirection;

  if (currentScroll >= maxScroll) {
    scrollDirection = -1;
    currentScroll = maxScroll;
  } else if (currentScroll <= 0) {
    scrollDirection = 1;
    currentScroll = 0;
  }
  scrollContainer.scrollTo({
    left: currentScroll,
    behavior: "smooth",
  });
}

const scrollInterval = setInterval(performScroll, 3000);
