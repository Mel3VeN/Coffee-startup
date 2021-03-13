import { html } from "lit-html";
import products from "./products.json";
// eslint-disable-next-line import/no-unresolved
import productImages from "../images/*.png";

function shop() {
  const productContainer = document.querySelector(".shoppage--view");
  const productTemplate = ` ${products
    .map(
      (product) =>
        `<div class="shoppage--product">
          <div class="shoppage--picture">
            <picture>
              <source
                srcset="${productImages[product.imageLarge]}"
                media="(min-width:992px)"
              />
              <img class="shoppage--image" src="${
                productImages[product.image]
              }" />
            </picture>
          </div>
          <div class="shoppage--info">
            <h3 class="shoppage--product-header">${product.productName}</h3>
            <div class="shoppage--price">${product.price / 100}0 €</div>
            <div class="shoppage--svg">
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50301 11.4821C8.08859 10.0916 7.12103 8.31318 5.34192 7.50998C3.56281 6.70679 1.64586 7.18294 1.06028 8.57349C0.474703 9.96404 1.44225 11.7424 3.22136 12.5456C5.00048 13.3488 6.91743 12.8727 7.50301 11.4821Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.2948 8.50659C1.2948 8.50659 2.84637 10.2931 4.05813 10.1349C5.26988 9.97672 5.92317 10.4704 7.30879 11.8396"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.01965 7.30917C5.03809 5.95905 6.29463 4.80531 8.0306 4.47528C9.94043 4.11252 11.7001 5.02897 11.9662 6.52092C12.2322 8.01287 10.8993 9.51574 8.98947 9.8785C8.51267 9.9685 8.04377 9.97941 7.60649 9.92214"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.8055 6.71194C11.8055 6.71194 9.55318 6.12825 8.63646 6.96015C7.71711 7.79204 6.99532 7.7484 5.10657 7.41292"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.12475 5.5787C6.88201 5.24463 8.1091 3.86036 7.86554 2.48686C7.62197 1.11336 5.99998 0.270739 4.24272 0.604817C2.48546 0.938894 1.25836 2.32316 1.50193 3.69666C1.7455 5.07016 3.36749 5.91278 5.12475 5.5787Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.71975 2.66427C7.71975 2.66427 5.6466 2.12695 4.801 2.89338C3.95541 3.65982 3.20992 3.62981 1.47131 3.3216"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.90865 12.9999H3.14242C2.58136 12.9999 2.12756 12.5695 2.12756 12.0373V4.17993H8.9235V12.0373C8.9235 12.5695 8.46971 12.9999 7.90865 12.9999Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.92355 3.0166H1C1 3.65834 1.5473 4.17747 2.22387 4.17747H8.92079V3.0166H8.92355Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.9235 3.01649H2.12756V2.68258C2.12756 2.15041 2.58136 1.71997 3.14242 1.71997H7.90865C8.46971 1.71997 8.9235 2.15041 8.9235 2.68258V3.01649Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.08256 1.72H4.60291V1.70174C4.60291 1.31565 4.93294 1 5.34273 1C5.74977 1 6.08256 1.31304 6.08256 1.70174V1.72Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.92462 10.8034H8.92627V4.17993H9.92462C10.5187 4.17993 11 4.63645 11 5.19993V9.78341C11 10.3443 10.5187 10.8034 9.92462 10.8034Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.9235 8.06445H2.12756V8.8575H8.9235V8.06445Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.34265 4.28174V7.8687"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.65347 12.6346C5.7068 11.8805 4.97057 11.2097 4.00905 11.1363C3.04753 11.0629 2.22484 11.6146 2.17151 12.3686C2.11818 13.1226 2.85442 13.7934 3.81593 13.8669C4.77745 13.9403 5.60015 13.3886 5.65347 12.6346Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.27307 12.2974C2.27307 12.2974 3.28515 12.8733 3.82599 12.5895C4.36951 12.3085 4.75239 12.4281 5.61988 12.8372"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.826 11.0981C3.61984 10.461 4.02681 9.70135 4.7872 9.25059C5.62524 8.75252 6.59448 8.8833 6.95593 9.53996C7.31739 10.1966 6.93184 11.1315 6.0938 11.6296C5.88496 11.7548 5.66809 11.8383 5.45389 11.8856"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.91308 9.65405C6.91308 9.65405 5.76445 9.76535 5.46726 10.3135C5.17006 10.8616 4.82467 10.9646 3.88489 11.1315"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.59848 10.2678C4.36869 9.8102 4.72355 8.94935 4.3911 8.34503C4.05865 7.74072 3.16478 7.62179 2.39457 8.07939C1.62437 8.537 1.2695 9.39785 1.60195 10.0022C1.9344 10.6065 2.82828 10.7254 3.59848 10.2678Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.35339 8.45215C4.35339 8.45215 3.2958 8.55232 3.0227 9.05873C2.74693 9.56514 2.3935 9.67922 1.52869 9.82947"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.96393 6.60201C3.8461 6.50344 4.50319 5.86243 4.43158 5.17027C4.35997 4.4781 3.58678 3.99689 2.70461 4.09546C1.82244 4.19402 1.16535 4.83504 1.23696 5.5272C1.30856 6.21937 2.08175 6.70057 2.96393 6.60201Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.35348 5.25215C4.35348 5.25215 3.34676 4.90434 2.89963 5.25493C2.45249 5.60274 2.08568 5.561 1.23425 5.34119"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.8733 12.6441C12.4089 11.909 12.4102 10.9725 11.8762 10.5522C11.3422 10.132 10.475 10.3872 9.93943 11.1222C9.40381 11.8573 9.40251 12.7938 9.93652 13.2141C10.4705 13.6343 11.3376 13.3791 11.8733 12.6441Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.8824 10.6667C11.8824 10.6667 10.948 11.1926 10.8864 11.7686C10.8248 12.3446 10.541 12.595 9.80469 13.0875"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.4364 10.5332L3.37083 11.1815"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.63858 12.7536L6.85146 13.5967L10.9828 8.65501C11.9654 7.12743 11.6414 5.44125 10.1715 4.42009L10.0242 4.31713C8.55432 3.29597 6.54891 3.71334 5.56897 5.24091L3.91431 7.8147"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.4364 10.5332L3.37083 11.1815"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.75639 12.8371L6.67207 13.4715L9.34149 9.31729C10.1313 8.08744 9.81004 6.41239 8.62661 5.59156L8.50613 5.50809C7.32269 4.68726 5.71087 5.02116 4.92102 6.25101L3.91431 7.81754"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.7097 4.82086C10.7097 4.82086 12.7178 3.04008 12.9454 2.30829C13.1729 1.5765 12.616 1.19252 12.616 1.19252C12.616 1.19252 12.0993 0.755668 11.4942 1.19808C10.8891 1.64049 9.85291 4.1642 9.85291 4.1642"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>`
    )
    .join("")}`;
  productContainer.innerHTML = productTemplate;
}

shop();
