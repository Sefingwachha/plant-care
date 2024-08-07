$(document).ready(function () {
  console.log("Document is ready.");

  // Initialize Isotope with Masonry layout mode
  var $grid = $(".grid").isotope({
    itemSelector: ".element-item",
    layoutMode: "fitRows",
    fitRows: {
      gutter: 25,
    },
  });

  console.log("Isotope initialized:", $grid);

  // Bind filter button click
  $(".button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    console.log("Filter button clicked:", filterValue);
    $grid.isotope({ filter: filterValue });
  });

  // Change is-checked class on buttons
  $(".button-group").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function () {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });
});

// gallery

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#slider", {
    type: "loop",
    perPage: 4,
    gap: "0",
    arrows: false,
    pagination: true,
    breakpoints: {
      1020: {
        perPage: 3,
        gap: "10px",
      },
      600: {
        perPage: 1,
        gap: "10px",
        padding: {
          left: "0",
          right: "0",
        },
      },
    },
  });

  splide.mount();
});

// navbar

$(document).ready(function () {
  $("#navbar-toggler").on("click", function () {
    $(this).toggleClass("collapsed");
    $("#navbarSupportedContent").toggleClass("show");
  });
});

// product slider
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#product-slider", {
    type : 'loop',
    perPage: 5,
    gap : '90px',
    focus: 0,
    omitEndPage: true,
    pagination:false,
    breakpoints: {
      1200: {
        perPage: 5,
        gap : '240px',
      },
      600: {
        perPage: 2,
        gap : '110px',
      },

      486: {
        perPage:1,
        gap:'0px',
      },

      1020: {
        perPage: 4,
        gap : '240px',
      },
    },
  });
  splide.mount();
});

// new arrival

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#new-arrival", {
    type : 'loop',
    perPage: 5,
    gap : '90px',
    focus: 0,
    omitEndPage: true,
    pagination:false,
    breakpoints: {
      1200: {
        perPage: 5,
        gap : '240px',
      },
      600: {
        perPage: 2,
        gap : '110px',
      },

      486: {
        perPage:1,
        gap:'0px',
      },

      1020: {
        perPage: 4,
        gap : '240px',
      },
    },
  });
  splide.mount();
});


document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#beginner", {
    type : 'loop',
    perPage: 5,
    gap : '90px',
    focus: 0,
    omitEndPage: true,
    pagination:false,
    breakpoints: {
      1200: {
        perPage: 5,
        gap : '240px',
      },
      600: {
        perPage: 2,
        gap : '110px',
      },

      486: {
        perPage:1,
        gap:'0px',
      },

      1020: {
        perPage: 4,
        gap : '240px',
      },
    },
  });
  splide.mount();
});
