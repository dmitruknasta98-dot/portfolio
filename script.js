const projectImages = document.querySelectorAll(".project-image img");

projectImages.forEach(image => {
    image.addEventListener("click", () => {
        const viewer = document.createElement("div");

        viewer.classList.add("image-viewer");

        viewer.innerHTML = `
            <span class="close-viewer">&times;</span>
            <img src="${image.src}" alt="${image.alt}">
        `;

        document.body.appendChild(viewer);

        viewer.addEventListener("click", (event) => {
            if (
                event.target === viewer ||
                event.target.classList.contains("close-viewer")
            ) {
                viewer.remove();
            }
        });
    });
});