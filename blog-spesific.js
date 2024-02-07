const baseUrl = "https://akca.no/wp-json/wp/v2/posts?per_page=6&_embed";
let currentPage = 1;
const resultsContainer = document.querySelector(".posts");
const loadMore = document.querySelector(".load-more");
const errorMessage = document.querySelector(".error-message");

async function getPosts() {
    try {
        const response = await fetch(`${baseUrl}&page=${currentPage}`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const posts = await response.json();
        if (posts.length < 1) {
            loadMore.style.display = "none";
            if (currentPage === 1) {
                errorMessage.innerHTML = "No posts found.";
            }
            return;
        }
        createHtmlPosts(posts);
    } catch (error) {
        errorMessage.innerHTML = `Error loading posts: ${error.message}`;
    }
}

function createHtmlPosts(posts) {
    let postsHtml = '';
    posts.forEach(post => {
        const imgUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'default-image.jpg';
        postsHtml += `
            <section class="card">
                <article>
                    <h2>${post.title.rendered}</h2>
                    <p>${post.excerpt.rendered}</p>
                    <div class="read-more">
                        <a href="blog-specific-page.html?id=${post.id}">Read More</a>
                    </div>
                </article>
                <article>
                    <img src="${imgUrl}" alt="${post.title.rendered}">
                </article>
            </section>
        `;
    });
    resultsContainer.innerHTML += postsHtml;
}

loadMore.addEventListener('click', () => {
    currentPage++;
    getPosts();
});

getPosts();
