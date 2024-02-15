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
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const post = await response.json();
    createHtmlDetails(post);
  }

  function createHtmlDetails(post) {
    console.log("posts2", post);
    let postsHtml = `
                <section class="card">
                    <article>
                        <h2>${post.title.rendered}</h2>
                       ${post.content.rendered}
                    </article>
                </section>
            `;

    resultsContainer.innerHTML += postsHtml;

    // Yeni eklenen içerikteki tüm resimlere erişim
    document.querySelectorAll("#productDetails img").forEach(img => {
      img.addEventListener("click", biggerImg);
    });
  }

  function biggerImg() {
    let postImg = this;  

    const modalSection = document.querySelector(".modal-section");

    modalSection.style.display = "flex";
    modalSection.innerHTML = `<img src="${postImg.src}" alt="${postImg.alt}" />`;

    // Modal dışına tıklandığında kapat
    document.onclick = function (event) {
      if (event.target === modalSection) {
        modalSection.style.display = "none";
      }
    };

    // Close icon için düzeltme (Eğer fa-xmark class'ına sahip bir element varsa)
    const close = document.querySelector(".fa-xmark");
    if (close) { // Eğer .fa-xmark bulunursa
      close.onclick = function() { modalSection.style.display = "none"; };
    } else {
      console.warn("'.fa-xmark' bulunamadı.");
    }
  };

  getDetails();
});