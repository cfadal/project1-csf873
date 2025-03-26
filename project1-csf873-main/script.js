function toggleStyle() {
    let stylesheet = document.getElementById("theme-style");
    
    if (stylesheet.getAttribute("href") === "styles.css") {
        stylesheet.setAttribute("href", "styles-alt.css"); // Switch to Egyptian theme
    } else {
        stylesheet.setAttribute("href", "styles.css"); // Switch back to default
    }

    localStorage.setItem("selectedTheme", stylesheet.getAttribute("href"));
}

window.addEventListener("load", function () {
    let savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        document.getElementById("theme-style").setAttribute("href", savedTheme);
    }
});
