document.addEventListener("DOMContentLoaded", function () {
  const endpoint = "https://akca.no/wp-json/wp/v2/posts";
  const postsContainer = document.querySelector(".posts");
  const loadMoreButton = document.querySelector(".load-more");
  const errorMessage = document.querySelector(".error-message");

  let page = 1; // Her sayfa için varsayılan sayfa numarası
  const postsPerPage = 10; // Her sayfada gösterilecek post sayısı

  function fetchPosts() {
    console.log(`${endpoint}?page=${page}&per_page=${postsPerPage}&_embed`);
    fetch(`${endpoint}?page=${page}&per_page=${postsPerPage}&_embed`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then((data) => {
        if (data.length === 0) {
          loadMoreButton.style.display = "none";
          errorMessage.textContent = "No more posts to load.";
        } else {
          const fetches = data.map((post) => {
            return fetch(
              `https://akca.no/wp-json/wp/v2/media/${post.featured_media}`
            )
              .then((response) => response.json())
              .then((media) => {
                post.imgSrc = media.source_url; // Add image source URL to post object
                return post; // Return the updated post object
              });
          });

          Promise.all(fetches).then((posts) => {
            posts.forEach((post) => {
              const postElement = document.createElement("div");
              postElement.classList.add("post");
              addPost(
                postElement,
                post.imgSrc, // Use the image source URL from the post object
                post.title.rendered,
                post.excerpt.rendered,
                post.id
              );
            });
            page++;
          });
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        errorMessage.textContent =
          "Could not load posts. Please try again later.";
      });
  }

  function addPost(postElement, imgSrc, title, excerpt, id) {
    console.log("imgSrc2", imgSrc);
    postElement.innerHTML = `
           
            ${imgSrc ? `<img src="${imgSrc}" alt="Post image">` : ""}
           <div><a href="blog-spesific.html?id=${id}"><h2>${title}</h2><div>
           
            <div>${excerpt}  </div>
            <a href="blog-spesific.html?id=${id}&title=${title}"><button>Read more</button></a>
        `;
    postsContainer.appendChild(postElement);
  }

  loadMoreButton.addEventListener("click", fetchPosts);

  fetchPosts();
});
