
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const productCards = document.querySelectorAll(".product-card");
const noResults = document.getElementById("noResults");

function filterProducts() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const categoryValue = categoryFilter.value;

    let visibleCount = 0;

    productCards.forEach((card) => {
        const name = card.dataset.name.toLowerCase();
        const category = card.dataset.category;

        const matchesName = name.includes(searchValue);
        const matchesCategory =
            categoryValue === "semua" || category === categoryValue;

        if (matchesName && matchesCategory) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    noResults.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

document.querySelectorAll(".buy-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
        if (button.getAttribute("href") === "#") {
            event.preventDefault();
        }
    });
});
