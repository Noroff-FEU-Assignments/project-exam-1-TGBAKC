
const urlBase = "https://healtylife.akca.no/wp-json/wp/v2/posts/";

const productDetailsContainer = document.getElementById('productDetails');

function fetchAndDisplayProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        // URL'yi dinamik olarak oluştur
        const fetchUrl = `${urlBase}${productId}?_embed`;

        fetch(fetchUrl)
            .then(response => response.json())
            .then(product => {
                renderProduct(product); // Doğru fonksiyonu çağır
            })
            .catch(error => {
                productDetailsContainer.innerHTML = `<p>Error loading product details.</p>`;
                console.error('Error fetching product details:', error);
            });
    } else {
        productDetailsContainer.innerHTML = `<p>Product ID not specified.</p>`;
    }
}

function renderProduct(product) {
    // Ürün detaylarını doğru şekilde göster
    const htmlContent = `
      <h1>${product.title.rendered}</h1>
      <p>Published: ${product.date}</p>
      <p>Last Modified: ${product.modified}</p>
      <img src="${product.featured_media_src_url}" alt="${product.title.rendered}" style="width:273px;">
      <div>${product.content.rendered}</div>
    `;

    productDetailsContainer.innerHTML = htmlContent;
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayProductDetails);
