document.addEventListener("DOMContentLoaded", function() {
    const endpoint = "https://akca.no/wp-json/wp/v2/posts";
    const postsContainer = document.querySelector('.posts');
    const loadMoreButton = document.querySelector('.load-more');
    const errorMessage = document.querySelector('.error-message');

    let page = 1; // Her sayfa için varsayılan sayfa numarası
    const postsPerPage = 10; // Her sayfada gösterilecek post sayısı

    function fetchPosts() {
        fetch(`${endpoint}?page=${page}&per_page=${postsPerPage}&_embed`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => {
                if (data.length === 0) {
                    loadMoreButton.style.display = 'none';
                    errorMessage.textContent = 'No more posts to load.';
                } else {
                    data.forEach(post => {
                        const postElement = document.createElement('div');
                        postElement.classList.add('post');

                        let imgSrc = post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : '';

                        addPost(postElement, imgSrc, post.title.rendered, post.excerpt.rendered);
                    });
                    page++;
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                errorMessage.textContent = 'Could not load posts. Please try again later.';
            });
    }
    
    function addPost(postElement, imgSrc, title, excerpt) {
        postElement.innerHTML = `
            <h2>${title}</h2>
            ${imgSrc ? `<img src="${imgSrc}" alt="Post image">` : ''}
            <div>${excerpt}</div>
        `;
        postsContainer.appendChild(postElement);
    }

    loadMoreButton.addEventListener('click', fetchPosts);

    // Sayfa yüklendiğinde başlangıçta verileri getir
    fetchPosts();
});
