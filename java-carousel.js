document.addEventListener("DOMContentLoaded", function () {
  const carouselWrapper = document.querySelector(".carousel-container");

  const baseUrl = "https://akca.no/wp-json/wp/v2/posts?per_page=100&_embed";

  function fetchCarouselItems() {
    fetch(baseUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then((data) => {
        data.map((post, i) => {
          carouselWrapper.innerHTML += `
          <div class="carousel-slide">
          <a href="blog-spesific.html?id=${post.id}&title=${post.title.rendered}"><img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="food" /></a>
            <div class="text-on-image">${post.title.rendered}</div>
          </div>`;
        });
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        errorMessage.textContent =
          "Could not load posts. Please try again later.";
      });
  }

  fetchCarouselItems();
});
