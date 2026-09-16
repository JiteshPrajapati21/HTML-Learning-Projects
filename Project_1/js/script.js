/* =========================================
   ZOMATO FRONTEND JAVASCRIPT
========================================= */


/* =========================================
   1. PAGE LOAD ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Zomato website loaded successfully!");

    // Add loaded class to body
    document.body.classList.add("loaded");

});


/* =========================================
   2. SEARCH FUNCTIONALITY
========================================= */

const searchBox = document.querySelector("main input");

if (searchBox) {

    searchBox.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {

            const searchValue = searchBox.value.trim();

            if (searchValue === "") {

                alert("Please enter a restaurant, cuisine or dish.");

                return;
            }

            alert(
                `Searching for "${searchValue}"...`
            );

        }

    });

}


/* =========================================
   3. SEARCH BOX FOCUS ANIMATION
========================================= */

if (searchBox) {

    searchBox.addEventListener("focus", () => {

        searchBox.style.transform = "scale(1.03)";

    });


    searchBox.addEventListener("blur", () => {

        searchBox.style.transform = "scale(1)";

    });

}


/* =========================================
   4. NAVIGATION LINK INTERACTION
========================================= */

const navLinks = document.querySelectorAll("header ul li a");

navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const linkName = link.textContent.trim();

        console.log(`${linkName} clicked`);

        alert(`${linkName} page is coming soon!`);

    });

});


/* =========================================
   5. PARALLAX BACKGROUND EFFECT
========================================= */

const backgroundImage = document.querySelector("main > img");

if (backgroundImage) {

    window.addEventListener("mousemove", (event) => {

        const x = (window.innerWidth / 2 - event.clientX) / 80;

        const y = (window.innerHeight / 2 - event.clientY) / 80;

        backgroundImage.style.transform =
            `scale(1.08) translate(${x}px, ${y}px)`;

    });

}


/* =========================================
   6. TYPING EFFECT FOR SEARCH PLACEHOLDER
========================================= */

if (searchBox) {

    const placeholderTexts = [
        "Search for restaurant, cuisine or a dish",
        "Try pizza...",
        "Try biryani...",
        "Try burgers...",
        "Try Chinese food...",
        "Find your favorite food..."
    ];

    let currentText = 0;

    let characterIndex = 0;

    let deleting = false;


    function typePlaceholder() {

        const text = placeholderTexts[currentText];


        if (!deleting) {

            searchBox.placeholder =
                text.substring(0, characterIndex + 1);

            characterIndex++;


            if (characterIndex === text.length) {

                deleting = true;

                setTimeout(typePlaceholder, 1500);

                return;
            }

        } else {

            searchBox.placeholder =
                text.substring(0, characterIndex - 1);

            characterIndex--;


            if (characterIndex === 0) {

                deleting = false;

                currentText =
                    (currentText + 1) % placeholderTexts.length;

            }

        }


        setTimeout(
            typePlaceholder,
            deleting ? 50 : 80
        );

    }


    typePlaceholder();

}


/* =========================================
   7. SCROLL EFFECT
========================================= */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (!header) return;


    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0, 0, 0, 0.35)";

    } else {

        header.style.boxShadow =
            "0 3px 15px rgba(0, 0, 0, 0.2)";

    }

});


/* =========================================
   8. KEYBOARD SHORTCUT
========================================= */

document.addEventListener("keydown", (event) => {

    // Press "/" to focus search box

    if (
        event.key === "/" &&
        document.activeElement !== searchBox
    ) {

        event.preventDefault();

        if (searchBox) {
            searchBox.focus();
        }

    }

});


/* =========================================
   9. SIMPLE BUTTON-LIKE SEARCH BEHAVIOR
========================================= */

if (searchBox) {

    searchBox.addEventListener("input", () => {

        if (searchBox.value.length > 0) {

            searchBox.style.border =
                "2px solid #e23744";

        } else {

            searchBox.style.border =
                "2px solid transparent";

        }

    });

}


/* =========================================
   10. CONSOLE MESSAGE
========================================= */

console.log(
    "%c🍔 Welcome to Zomato!",
    "color: #e23744; font-size: 20px; font-weight: bold;"
);

console.log(
    "Frontend JavaScript is running successfully."
);