async function fetchPosts() {
    const url = "https://akca.no/wp-json/wp/v2/posts?per_page=6&_embed";
    try {
      const response = await fetch(url);
  
      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Optionally, check the content type to ensure it's JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError('Oops, we haven\'t got JSON!');
      }
  
      const posts = await response.json();
  
      const postsContainer = document.querySelector('.posts');
  
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
          <h2>${post.title.rendered}</h2>
          <div>${post.excerpt.rendered}</div>
          <a href="${post.link}" target="_blank">Read more</a>
        `;
        postsContainer.appendChild(postElement);
      });
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      // Handle the error (e.g., display a message to the user)
    }
  }
  
  fetchPosts();
  

