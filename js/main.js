const pullDown = document.querySelector(".pull-down");
const navUl = document.querySelector("header nav .nav-container ul");
const nav = document.querySelector("header nav");
const menuToggle1 = document.querySelector("#line1");
const menuToggle2 = document.querySelector("#line2");
const menu = document.querySelector(".menu");
const sectionOne = document.querySelector(".section-one");
const heroImage = document.querySelector(".hero-image");
const cardOne = document.querySelector(".card:first-child");
const cardTwo = document.querySelector(".card:last-child");
const sectionTwo = document.querySelector(".section-two");
const sectionTwoHeader = document.querySelector(".section-two-header");
const whatWeDoContent = document.querySelector(".what-we-do-content");
const toggle = document.querySelector(".toggle");
const toggles = toggle.querySelectorAll("span");
const sectionThree = document.querySelector(".section-three");
const sectionThreeImages = document.querySelector(
  ".section-three .section-three-images"
);
const allImages = sectionThreeImages.querySelectorAll("img");
const sectionFour = document.querySelector(".section-four");
const sectionFourImage = document.querySelector(".section-four-image img");
const contactSection = document.querySelector(".contact-section");
const contact = document.querySelector(".contact");
const contactCard = document.querySelector(".contact-card");
const teamsImages = document.querySelectorAll(
  ".team-section .team-container .team-card img"
);
const team = document.querySelector(".team-section");
const teamContainer = document.querySelector(".team-section .team-container");

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      sectionFourImage.classList.add("bouncer");
    }
  },
  {
    threshold: 0.8,
  }
);

observer.observe(sectionFour);

ACTIONS = {
  FLAT: "flat",
  STOREY_BUILDING: "story-building",
  ALL: "all",
};

const allFlat = [...allImages];
const flat = allFlat.filter((a) => a.dataset.tag === "flat");
const storey = allFlat.filter((b) => b.dataset.tag === "story-building");

toggles.forEach((togg) => {
  togg.addEventListener("click", (e) => {
    for (let i = 0; i < toggles.length; i++) {
      toggles[i].classList.remove("active");
    }

    switch (e.target.id) {
      case ACTIONS.FLAT:
        e.target.classList.add("active");
        flat.forEach((fla) => fla.classList.remove("hide"));
        storey.forEach((story) => story.classList.add("hide"));
        break;

      case ACTIONS.STOREY_BUILDING:
        e.target.classList.add("active");
        storey.forEach((story) => story.classList.remove("hide"));
        flat.forEach((fla) => fla.classList.add("hide"));
        break;

      case ACTIONS.ALL:
        e.target.classList.add("active");
        storey.forEach((story) => story.classList.remove("hide"));
        flat.forEach((fla) => fla.classList.remove("hide"));
        break;
    }
  });
});

setTimeout(() => {
  heroImage.classList.add("reveal");
}, 1000);

pullDown.onclick = () => {
  nav.classList.toggle("show");
  pullDown.classList.toggle("upside-down");

  if (navUl.classList.contains("drop")) {
    menuToggle1.classList.remove("go-down");
    menuToggle2.classList.remove("go-up");
    navUl.classList.remove("drop");
  }
};

menu.onclick = () => {
  menuToggle1.classList.toggle("go-down");
  menuToggle2.classList.toggle("go-up");
  navUl.classList.toggle("drop");
};

// const slideImagesLeft = () => {
//   const teamCardImages = document.querySelectorAll(".team-card");
//   const allTeamImages = Array.from(teamCardImages);

//   let currentImageSize = allTeamImages[0].clientWidth;
//   let accumulator = currentImageSize;

//   for (i = 0; i < allTeamImages.length; i++) {
//     teamContainer.style.transform = `translateX(-${accumulator} + "px")`;
//     accumulator += currentImageSize;
//     setTimeout(() => {
//       allTeamImages.push(allTeamImages[i]);
//     }, 500);
//   }
// };

window.onscroll = () => {
  if (sectionOne.getBoundingClientRect().top < 300) {
    cardOne.classList.add("adjust");
    cardTwo.classList.add("adjust");
  } else {
    cardOne.classList.remove("adjust");
    cardTwo.classList.remove("adjust");
  }

  if (sectionTwo.getBoundingClientRect().top < 700) {
    sectionTwoHeader.classList.add("slide-down");
    whatWeDoContent.classList.add("slide-left");
  } else {
    sectionTwoHeader.classList.remove("slide-down");
    whatWeDoContent.classList.remove("slide-left");
  }

  allImages.forEach((imag) => {
    if (sectionThree.getBoundingClientRect().top < 200) {
      imag.classList.add("normalise");
    } else {
      imag.classList.remove("normalise");
    }
  });

  teamsImages.forEach((ima) => {
    if (team.getBoundingClientRect().top < 500) {
      ima.classList.add("reposition");
    } else {
      ima.classList.remove("reposition");
    }
  });
};

const teamCardImages = document.querySelectorAll(".team-card");
// console.log(teamCardImages[0]);
let currentImageSize = teamCardImages[0].clientWidth;
let accumulator = currentImageSize;
let convertedAccum = accumulator + "px";
console.log(convertedAccum);
const imageArray = [];

const pageScroll = () => {
  teamContainer.scrollBy(500, 0);
};

const teamObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      const firstImage = teamCardImages[0];
      setInterval(() => {
        pageScroll();
        // if (teamContainer.scrollLeft > 5r                       ) {
        //   teamContainer.scrollLeft = 0;
        // }
      }, 3000);
    }
  },
  {
    threshold: 0.7,
  }
);

teamObserver.observe(teamContainer);

const inputForm = document.querySelectorAll(".contact-form input");
const labels = document.querySelectorAll(".contact-form label");

inputForm.forEach((inpu) => {
  inpu.addEventListener("focus", (e) => {
    if (e.target.id === "name") {
      labels[0].classList.add("focai");
      return;
    }
    if (e.target.id === "email") {
      labels[1].classList.add("focai");
      return;
    }
  });
});

inputForm.forEach((inp) => {
  inp.addEventListener("blur", () => {
    for (i = 0; i < labels.length; i++) {
      labels[i].classList.remove("focai");
    }
  });
});

const dropDownButton = document.querySelector(".lin1");
console.log(dropDownButton);
const contactForm = document.querySelector(".contact-form");
console.log(contactForm);
dropDownButton.onclick = (e) => {
  if (e.target.className === "lin1") {
    console.log("ITs me");
    contactForm.classList.toggle("come-down");
  }
};
