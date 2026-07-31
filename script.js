<script>
/* 🟢 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ [SCRIPT] William Intro //START ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 🟢 */

function initWillemLoadingAnimation() {
  const container = document.querySelector(".willem-header");
  const loadingLetter = container.querySelectorAll(".willem__letter");
  const box = container.querySelectorAll(".willem-loader__box");
  const growingImage = container.querySelectorAll(".willem__growing-image");
  const headingStart = container.querySelectorAll(".willem__h1-start");
  const headingEnd = container.querySelectorAll(".willem__h1-end");
  const coverImageExtra = container.querySelectorAll(
    ".willem__cover-image-extra"
  );
  const headerLetter = container.querySelectorAll(".willem__letter-white");
  const navLinks = container.querySelectorAll(
    ".willen-nav a, .osmo-credits__p"
  );

  /* GSAP Timeline */
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut"
    },
    onStart: () => {
      container.classList.remove("is--hidden");
    }
  });

  /* Start of Timeline */
  if (loadingLetter) {
    tl.from(loadingLetter, {
      yPercent: 100,
      stagger: 0.025,
      duration: 1.25
    });
  }

  if (box.length) {
    tl.fromTo(
      box,
      {
        width: "0em"
      },
      {
        width: "1em",
        duration: 1.25
      },
      "< 1.25"
    );
  }

  if (box.length) {
    tl.fromTo(
      growingImage,
      {
        width: "0%"
      },
      {
        width: "100%",
        duration: 1.25
      },
      "<"
    );
  }

  if (headingStart.length) {
    tl.fromTo(
      headingStart,
      {
        x: "0em"
      },
      {
        x: "-0.05em",
        duration: 1.25
      },
      "<"
    );
  }

  if (headingEnd.length) {
    tl.fromTo(
      headingEnd,
      {
        x: "0em"
      },
      {
        x: "0.05em",
        duration: 1.25
      },
      "<"
    );
  }

  if (coverImageExtra.length) {
    tl.fromTo(
      coverImageExtra,
      {
        opacity: 1
      },
      {
        opacity: 0,
        duration: 0.05,
        ease: "none",
        stagger: 0.5
      },
      "-=0.05"
    );
  }

  if (growingImage.length) {
    tl.to(
      growingImage,
      {
        width: "100vw",
        height: "100dvh",
        duration: 2
      },
      "< 1.25"
    );
  }

  if (box.length) {
    tl.to(
      box,
      {
        width: "110vw",
        duration: 2
      },
      "<"
    );
  }

  if (headerLetter.length) {
    tl.from(
      headerLetter,
      {
        yPercent: 100,
        duration: 1.25,
        ease: "expo.out",
        stagger: 0.025
      },
      "< 1.2"
    );
  }

  if (navLinks.length) {
    tl.from(
      navLinks,
      {
        yPercent: 100,
        duration: 1.25,
        ease: "expo.out",
        stagger: 0.1
      },
      "<"
    );
  }
}

// Initialize Willem Loading Animation
document.addEventListener("DOMContentLoaded", () => {
  initWillemLoadingAnimation();
});

/* 🔴 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ [SCRIPT] William Intro //END ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 🔴 */

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */

/* 🟢 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ [SCRIPT] 🏔️ //START ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 🟢 */

// GitHub Repo : https://github.com/aryan-tayal/Mountains-Parallax
// Live Site : https://aryan-tayal.github.io/Mountains-Parallax/

const mountainLeft = document.querySelector("#mountain_left");
const mountainRight = document.querySelector("#mountain_right");
const cloud1 = document.querySelector("#cloud_1");
const cloud2 = document.querySelector("#cloud_2");
const text = document.querySelector("#text");
const man = document.querySelector("#man");

window.addEventListener("scroll", () => {
  let value = scrollY;
  mountainLeft.style.left = `-${value / 0.7}px`;
  cloud2.style.left = `-${value * 2}px`;
  mountainRight.style.left = `${value / 0.7}px`;
  cloud1.style.left = `${value * 2}px`;
  text.style.bottom = `-${value}px`;
  man.style.height = `${window.innerHeight - value}px`;
});

/* 🔴 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ [SCRIPT] 🏔️ //END ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 🔴 */

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */

/* 🟢 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ [SCRIPT] 🔖 //START ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 🟢 */

const products = document.querySelectorAll(".product");
const container = document.querySelector(".container");
const nav = document.querySelector(".nav");
const cover = document.querySelector(".cover");
const productWidth = 310;
const overlay = document.querySelector(".product__overlay");

function getProductOffset() {
  return (container.offsetWidth - container.offsetWidth * 70 / 100) / 2;
}

function removeActiveClass() {
  const activeProduct = document.querySelector(".product--active");
  if (activeProduct) {
    activeProduct.scrollTop = 0;
    activeProduct.classList.remove("product--active");
    container.classList.remove("container--detail");
  }
}

products.forEach(product => {
  product.addEventListener("click", e => {
    if (e.target.classList.contains("product__close")) {
      overlay.style.display = "none";
      removeActiveClass();
      return;
    }
    if (!e.currentTarget.classList.contains("product--active")) {
      overlay.style.display = "block";
      removeActiveClass();
      e.currentTarget.classList.add("product--active");
      container.classList.add("container--detail");

      const left =
      productWidth * parseInt(e.currentTarget.getAttribute("data-index")) +
      cover.offsetWidth +
      parseInt(e.currentTarget.getAttribute("data-index")) * 6 +
      nav.offsetWidth -
      getProductOffset();

      container.scrollLeft = left;
      overlay.style.display = "none";
      if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent))

      {
        e.currentTarget.scrollIntoView({ inline: "start" });
      }
    }
  });
});

/* 🔴 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ [SCRIPT] 🔖 //END ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 🔴 */

</script>
