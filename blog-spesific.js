document.addEventListener("DOMContentLoaded", function () {
  const baseUrl = "https://akca.no/wp-json/wp/v2/posts";
  const resultsContainer = document.querySelector("#productDetails");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const title = urlParams.get("title");
  const id = urlParams.get("id");
  document.title = `My Blog | ${title}`;

  async function getDetails() {
    //https://www.akca.no/wp-json/wp/v2/posts/153
    console.log(`${baseUrl}/${id}`);
    const response = await fetch(`${baseUrl}/${id}`);
    // console.log("response", response);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const post = await response.json();
    // console.log("post", post);
    createHtmlDetails(post);
  }

  function createHtmlDetails(post) {
    console.log("posts2", post);
    let postsHtml = "";
    postsHtml += `
                <section class="card">
                    <article>
                        <h2>${post.title.rendered}</h2>
                       ${post.content.rendered}
                    </article>
                </section>
            `;
    // console.log("postsHtml", postsHtml);
    resultsContainer.innerHTML += postsHtml;
  }

  getDetails();
});
