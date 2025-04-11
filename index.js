// JavaScript + jQuery enhancements

// 1. DOM Manipulation: Change headline dynamically
document.addEventListener("DOMContentLoaded", function () {
    const mainHeading = document.querySelector(".video-overlay h1");
    mainHeading.textContent = "Experience Van Life Like Never Before!";
});

// 2. jQuery Mobile Menu Toggle
$(document).ready(function () {
    $(".menu-toggle").click(function () {
        $("#menu").toggleClass("active");
    });

    // 3. jQuery Animation for .items on hover
    $(".items").hover(
        function () {
            $(this).animate({ marginTop: "-10px" }, 20000);
        },
        function () {
            $(this).animate({ marginTop: "0px" }, 20000);
        }
    );

    // 4. AJAX + JSON to dynamically load products
    $.ajax({
        url: "products.json",
        method: "GET",
        dataType: "json",
        success: function (data) {
            const productSection = $(".sec-2div2");
            productSection.empty(); // Clear existing

            data.products.forEach((product) => {
                productSection.append(`
                    <div class="items">
                        <img src="${product.image}" alt="${product.title}">
                        <h3>${product.title}</h3>
                        <p>From $${product.price}</p>
                        <button>Buy Now</button>
                    </div>
                `);
            });
        },
        error: function () {
            console.error("Failed to load product data.");
        }
    });
});
