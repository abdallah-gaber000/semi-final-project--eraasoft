let bar_menu = document.querySelector(".bar-menu");
let list = document.querySelector("ul");
bar_menu.addEventListener("click", () => {
  list.classList.toggle("toggle_menu");
});
let websiteDomain = "http://localhost:3000";
let productcontainer;
// console.log(websiteDomain);
async function getdatafromapi(endPoint) {
  let res = await fetch(`${websiteDomain}/${endPoint}`);
  let finalRes = await res.json();
  productcontainer = finalRes;
  displayData();
}
getdatafromapi("posts");
//
function displayData() {
  let temp = "";
  productcontainer.forEach((products) => {
    temp += `<div class="col-md-4">
					<div class="product-item position-relative overflow-hidden">
						${
              products.onsail
                ? `<div class="onsail bg-danger text-white py-1 px-3 rounded-3 position-absolute">
							${Math.floor((products.newprice / products.price) * 100)}%
						</div>`
                : ""
            }
// 
						<div class="price bg-success text-white py-1 px-3 rounded-3 position-absolute">
							${products.onsail ? products.newprice : products.price}
						</div>
						<div class="imeag overflow-hidden rounded-3"><img class="w-100"
								src="${products.imeagproduct}" alt=""></div>
						<div class="product-details">
							<p>Lorem ipsum, dolor sit amet consectetur .</p>
							<div class="star">
									<div class="star_item">
										<i class="far fa-star" style="font-size: 20px; color:rgb(248, 220, 61)"></i>
										<i class="far fa-star" style="font-size: 20px; color:rgb(248, 220, 61)"></i>
										<i class="far fa-star" style="font-size: 20px; color:rgb(248, 220, 61)"></i>
										<i class="far fa-star" style="font-size: 20px; color:rgb(248, 220, 61)"></i>
										<i class="far fa-star" style="font-size: 20px; color:rgb(248, 220, 61)"></i>
// 
									</div>
									<i class="fas fa-cart-shopping" style="font-size: 20px;"></i>
								</div>
						</div>
					</div>
				</div>`;
  });
  document.getElementById("showdata").innerHTML = temp;
}

const reviewStars = document.querySelectorAll(".star_item i");
// console.log(reviewStars);
reviewStars.forEach((star) => {
  star.addEventListener("click", () => {
    console.log("star");
  });
});
