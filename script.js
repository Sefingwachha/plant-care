$(document).ready(function () {
  console.log("Document is ready.");

  // Initialize Isotope with Masonry layout mode
  var $grid = $(".grid").isotope({
    itemSelector: ".element-item",
    layoutMode: "fitRows",
    fitRows: {
      gutter: 15, // Space between items
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

var splide = new Splide(".splide", {
  type : 'loop',
  perPage: 4,
  gap: "0",
  arrows: false,
  pagination: true,
  breakpoints: {
    1020: {
      perPage: 3,
      padding: {
        left: "25px",
        right: "25px",
      },
    },
    600: {
      perPage: 1,
      padding: {
        left: "0",
        right: "0",
      },
    },
  },
});

splide.mount();
