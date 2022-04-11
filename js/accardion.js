document.querySelectorAll(".we-do__accardeon-item-header").forEach((item) =>
    item.addEventListener("click", () => {
        const parent = item.parentNode;

        parent.classList.toggle("active");
    })
)