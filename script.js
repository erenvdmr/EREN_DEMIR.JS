(() => {
  const init = () => {
    buildHTML();
    buildCSS();
    fetchData();
    setEvents();
    loadFavorites()
  };

  const buildHTML = () => {
    const html = `
    <body >
      <header>
        <div class="container">
          <div class="skeleton-logo skeleton"></div>
          <img src="./assets/logo.svg" class="logo" style="display:none;">
          <div class="top-search">
            <div class="search-container" >
              <div class="search-input">
                <div class="skeleton-search skeleton"></div> 
                <img src="./assets/search.svg" class="search-icon" style="display:none; width: 15px; height: auto;">
                <input type="text" placeholder="Ürün, kategori veya marka ara" >
              </div>
              <button class="search-button">ARA</button>
            </div>
          </div>
          
          <nav>
            <a href="/login">
              <div class="skeleton-icon skeleton"></div> 
              <img src="./assets/login.svg" class="login-icon" style="display:none;"> 
              Giriş Yap
            </a>
            <a href="/favorites">
              <div class="skeleton-icon skeleton"></div> 
              <img src="./assets/favorites.svg" class="favorites-icon" style="display:none;">
              Favorilerim
            </a>
            <a href="/basket">
              <div class="skeleton-icon skeleton"></div>
              <img src="./assets/basket.svg" class="basket-icon" style="display:none;"> 
              Sepetim
            </a>
          </nav>
        </div>
        
        <div class="bottom-search">
          <div class="search-container" >
            <div class="search-input">
              <img src="./assets/search.svg" class="search-icon" style="display:none; width: 15px; height: auto;">
              <img src="./assets/search.svg" style="width: 15px; height: auto;">
              <input type="text" placeholder="Ürün, kategori veya marka ara" >
            </div>
            <button class="search-button">ARA</button>
          </div>
        </div>
      </header>
      <section class="products">
        <h1>
           Aşağıdaki ürünleri beğenebilirsiniz
        </h1>
        <div class="skeleton-product skeleton"></div>
         <div id="carousel" class="carousel" style="display:none;">
            <div class="carousel-items" id="products-list"></div>
            <button class="prev-button">
               <img src="./assets/left-arrow.svg" style="width: 15px; height: auto;">
            </button>
             <button class="next-button">
               <img src="./assets/left-arrow.svg" style="width: 15px; height: auto;">
            </button>
         </div>
      </section>
    </body>
    `;
    document.querySelector(".product-detail").innerHTML = html; 
  };

  const buildCSS = () => {
    const css = `
     :root {
        --gray-color: #555;
        --white-color: #fff;
        --blue-color: #193db0;
      }

      body {
        margin:0 !important;
        padding:0 !important
        font-family: "Montserrat", serif !important;
        overflow:hidden;
      }

      header {
        padding: 24px ;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow:0 3px 6px 0 rgba(0,0,0,.06);
        margin-bottom:32px;
      }

      .logo {
        width:232px;
        height:auto;
      }

      .top-search {
        width:50%;
        margin-inline:4px;
        display:flex;
        justify-content:center;
      }

      .search-container {
        display: flex;
        align-items: center;
        width: 100%;
        margin-left: 20px;
        background-color:var(--white-color);
        border-radius:24px;
      }

      .search-container .search-input {
        padding-left:20px;
        display:flex;
        align-items:center;
        border:solid 1px var(--gray-color);;       
        border-bottom-left-radius: 14px;
        border-top-left-radius: 14px;
        width:100%;
      }

      .search-container .search-input input {
        padding:8px;
        border:none;
        outline:none;
        padding-top:11px;
        width:100% !important;    
      }

      .search-container .search-input input::placeholder {
        color: var(--gray-color);
      }

      .search-container .search-button {
        color: var(--gray-color);
        font-size: 16px;
        padding: 10px 28px;
        cursor: pointer;
        border-bottom-right-radius: 14px;
        border-top-right-radius: 14px;
        border-left:none !important;
        height:36.5px;
        border:solid 1px #555;    
        background-color:var(--white-color) !important;
        transition: background-color 0.3s ease, transform 0.2s ease-in-out;
      }

      .search-container .search-button:hover {
        background-color:var(--blue-color) !important;
        color: var(--white-color);
      }

      header {
        display:flex;
        flex-direction:column;
      }

      header .container {
        display:flex; 
        align-items:center;
        width:100%;
        justify-content:space-between;
      }

      header nav {
        display:flex;
        align-items:center;
        gap:24px;
      }

      header nav a {
        text-decoration: none;
        display:flex;
        flex-direction:column;
        align-items:center;
        font-size:10px;
        color: var(--gray-color);
        transition: 0.3s ease;
        text-align:center
      }

      header nav a:hover {
        text-decoration:underline;
        color: var(--blue-color);
      }

       header nav a img{
        height:20px;
        margin-bottom:3px;
      }

      .bottom-search {
        width:100%;
        margin-top:32px;
        
      }
     
      .bottom-search .search-container {
        margin-left:0;
        width:100%;
      }

      .products {
        padding:32px;
        background-color:#faf9f7;
        overflow:hidden;
        position:relative;
        max-width:1240px;
        margin-inline:auto;
      }

      .carousel {
        overflow:hidden
      }

      .products h1 {
        font-size:32px;
        font-weight:200;
        color:#29323b;
        margin-top:0px;
      }


      .item {
        cursor:pointer;
        width:210px;
        background-color: var(--white-color);
        position:relative;
        transition: transform 0.2s ease, filter 0.2s ease;
      }

      .item .top {
        position:relative; 
        width: max-content;
      }

      .item .top img{
        width:210px;
        max-width:210px;
      }

      .item:hover  {
        transform: scale(1.03);
        transform-origin: center center;      
      }

      .item .top .like {
        width:34px;
        height:34px;
        position:absolute; 
        right:15px;
        display:flex;
        align-items:center;
        justify-content:center;
        top:9px;
        z-index:12312312;
        border-radius:5px;
        border:solid .5px #b6b7b9;
        background-color: var(--white-color);
        box-shadow:0 3px 6px 0 rgba(0, 0, 0, .16);
        cursor:pointer;  
      }

      .item .top .like img{
        width:19px;
      }

      .item .bottom {
        padding-left:10px;
        padding-top:6px;
        height:100%;
      }

      .bottom-link {
        text-decoration:none !important;
      }

      .item .bottom p:nth-child(1){
        color: var(--gray-color);
        padding:0;
        margin:0;
      }

      .item .bottom p:nth-child(2){
        color: var(--blue-color);
        font-size:18px;
        font-weight:600;
        margin-top:8px;
      }

      #products-list {
        display:flex !important;
        gap:20px;
      }

      .prev-button {
        position:absolute;
        left:0;
        top:50%;
        background-color:transparent;
        border:none;
        cursor:pointer;
      }

      .next-button {
        position:absolute;
        right:0;
        z-index:1231;
        top:50%;
        background-color:transparent;
        border:none;
        cursor:pointer;
        transform: rotate(180deg); 
      }

      .carousel-items {
        display: flex;
        transition: transform 0.3s ease-in-out;
        
      }

       @media (min-width: 800px) {
         .bottom-search {
            display: none; 
        }
      }

       @media (max-width: 800px) {
         .top-search {
           display: none; 
        }

        header {
          padding:12px;
        }
      }

      @media (max-width: 900px) {
         header nav {
            display:flex;
            align-items:center;
            gap:12px;
         }
      }


      @media (max-width: 440px) {
         header nav {
            display:flex;
            align-items:center;
            gap:12px;
         }

         .logo {
            width:180px;
            height:auto;
        }
      }

      .skeleton {
        background: #e0e0e0;
        animation: pulse 1.5s infinite ease-in-out;
        border-radius: 5px;
        height: 150px; 
        width: 210px; 
      }

      @keyframes pulse {
        0% {
          background-color: #e0e0e0;
        }
        50% {
          background-color: #d0d0d0;
        }
        100% {
          background-color: #e0e0e0;
        }
      }

      .skeleton-logo {
        height:32.5px !important;
        width:232px !important;
      }

      .skeleton-search {
        width:15px !important;
        height:15px !important;
        border-radius:50% !important;
      }

      .skeleton-icon {
        width:20px !important;
        height:20px !important;
        border-radius:50% !important;
      }

      .skeleton-product {
        width:100% !important;
        height:390px !important;
      }

    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  };

  const fetchData = () => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const savedProducts = JSON.parse(localStorage.getItem("products"));
  
    if (savedProducts) {
      displayProducts(savedProducts, savedFavorites);
    } else {
      fetch(
        "https://gist.githubusercontent.com/sevindi/5765c5812bbc8238a38b3cf52f233651/raw/56261d81af8561bf0a7cf692fe572f9e1e91f372/products.json"
      )
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("products", JSON.stringify(data));
          displayProducts(data, savedFavorites);
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }
  };
  

  const loadFavorites = () => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    window.savedFavorites = savedFavorites; 
  };

  const setEvents = () => {
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const carouselItems = document.querySelector(".carousel-items");

    let currentIndex = 0;
    const itemsPerPage = 1;

    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex -= itemsPerPage;

        carouselItems.style.transform = `translateX(-${currentIndex * 230}px)`;
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentIndex + itemsPerPage < 6) {
        currentIndex += itemsPerPage;
        carouselItems.style.transform = `translateX(-${currentIndex * 230}px)`;
      }
    });

    window.addEventListener("load", () => {
      const logo = document.querySelector(".logo");
      const skeletonLogo = document.querySelector(".skeleton-logo");

      logo.style.display = "block";
      skeletonLogo.style.display = "none";

      const searchIcon = document.querySelector(".search-icon");
      const skeletonSearch = document.querySelector(".skeleton-search");

      searchIcon.style.display = "block";
      skeletonSearch.style.display = "none";

      const loginIcon = document.querySelector(".login-icon");
      const favoritesIcon = document.querySelector(".favorites-icon");
      const basketIcon = document.querySelector(".basket-icon");

      const skeletonLogin =
        document.querySelector(".login-icon").previousElementSibling;
      const skeletonFavorites =
        document.querySelector(".favorites-icon").previousElementSibling;
      const skeletonBasket =
        document.querySelector(".basket-icon").previousElementSibling;

      loginIcon.style.display = "inline-block";
      favoritesIcon.style.display = "inline-block";
      basketIcon.style.display = "inline-block";

      skeletonLogin.style.display = "none";
      skeletonFavorites.style.display = "none";
      skeletonBasket.style.display = "none";
    });
  };

  const displayProducts = (products, savedFavorites) => {
    const productsList = document.getElementById("products-list");
    const carousel = document.getElementById("carousel");
    const skeleton = document.querySelector(".skeleton-product");

    skeleton.style.display = "none";
    carousel.style.display = "block";

    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("item");
      const isFavorite = savedFavorites.includes(product.id);

      productElement.innerHTML = `
        <div class="top">
          <a href="${product.url}" target="_blank">
            <img src="${product.img}" alt="${product.name}">
          </a>
          <button class="like">
            <img src="./assets/heart-filled.svg" style="display:${
              isFavorite ? "block" : "none"
            }" class="heart-filled">
            <img src="./assets/heart.svg" class="heart-empty" style="display:${
              isFavorite ? "none" : "block"
            }">
          </button>
        </div>
        <a href="${product.url}" class="bottom-link" target="_blank">
          <div class="bottom">
            <p>${product.name}</p>
            <p>${product.price} TL</p>
          </div>          
        </a>
        
      `;

      const likeButton = productElement.querySelector(".like");
      const heartFilled = likeButton.querySelector(".heart-filled");
      const heartEmpty = likeButton.querySelector(".heart-empty");

      likeButton.addEventListener("click", () => {
        if (heartFilled.style.display === "none") {
          heartFilled.style.display = "block";
          heartEmpty.style.display = "none";
          saveFavorite(product.id, true);
        } else {
          heartFilled.style.display = "none";
          heartEmpty.style.display = "block";
          saveFavorite(product.id, false);
        }
      });
      productsList.appendChild(productElement);
    });
  };

  const saveFavorite = (productId, isFavorite) => {
    let savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      savedFavorites.push(productId);
    } else {
      savedFavorites = savedFavorites.filter((id) => id !== productId);
    }

    localStorage.setItem("favorites", JSON.stringify(savedFavorites));
  };

  init();
})();
