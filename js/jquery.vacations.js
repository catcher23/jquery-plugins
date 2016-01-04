;(function($){
  var packages = [
      {
        Place: "Hawaii",
        Price: 99.99,
        Description: 'Warm paradise',
        Onsale: true,
        Expiring: false
      },
      {
        Place: "Vegas",
        Price: 89.99,
        Description: 'Gambling desert',
        Onsale: false,
        Expiring: true
      },
      {
        Place: "Tokyo",
        Price: 199.99,
        Description: 'Anime cars',
        Onsale: true,
        Expiring: false
      },
      {
        Place: "Rivendell",
        Price: 999.99,
        Description: 'Elven Warriors',
        Onsale: false,
        Expiring: true
      }
  ];

  $.fn.vacations = function(options){
    var filters = $("<div/>", {
      id: "filters"
    }).appendTo(this);

    $("<button/>", {
      class: 'vacation onsale-filter',
      id: 'vacations',
      text: 'On Sale Now'
    }).appendTo(filters);

    $("<button/>", {
      class: 'vacation expiring-filter',
      text: 'Expiring',
      id: 'vacations'
    }).appendTo(filters);

    $("<button/>", {
      class: 'vacation all-filter',
      text: 'All',
      id: 'vacations'
    }).appendTo(filters);

    $("<h1/>", {
      text: "Vacation Packages"
    }).appendTo(this);

    $('#filters').on('click', '.onsale-filter', function(){
      $('.highlighted').removeClass('highlighted');
      $('.vacation').filter('.onsale').addClass('highlighted');
    });

    $('#filters').on('click', '.expiring-filter', function(){
      $('.highlighted').removeClass('highlighted');
      $('.vacation').filter('.expiring').addClass('highlighted');
    });

    $('#filters').on('click', '.all-filter', function(){
      $('.highlighted').removeClass('highlighted');
    });

    var vacations = $("<div/>", { id: "vacations"}).appendTo(this);
    var ul = $("<ul/>", {

    }).appendTo(vacations);

    for (var x = 0; x < packages.length; x++) {
      var vacation = $("<li/>", {
        class: "vacation",
        "data-price": packages[x].Price
      }).appendTo(ul);

      $("<p/>", {
        text: packages[x].Place
      }).appendTo(vacation);

      $("<li/>", {
        text: packages[x].Description
      }).appendTo(vacation);


      $("<button/>", {
        text: 'FLIGHT DETAILS'
      }).appendTo(vacation);

      $("<li/>", {
        class: 'ticket',
        text: 'howdily ho'
      }).appendTo(vacation);

      $("<button/>", {
        id: 'price',
        text: 'Click for Price'
      }).appendTo(vacation);


      if(packages[x].Onsale) {
        vacation.addClass('onsale');
      }
      if(packages[x].Expiring) {
        vacation.addClass('expiring');
      }
    }
    $('.vacation').on('click', '#price', function(){
      var vacation = $(this).closest('.vacation');
      var price = $("<p/>", {
        text: "From " + vacation.data('price')
      });
      price.appendTo(vacation);
      $(this).remove();
    });
    $('.vacation').on('click', 'button', function(){
      $(this).closest('.vacation').find('.ticket').slideDown();
    });
};
}(jQuery));
