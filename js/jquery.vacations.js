;(function($){
  var packages = [
      {Place: "Hawaii", Price: 99.99},
      {Place: "Vegas", Price: 89.99},
      {Place: "Tokyo", Price: 199.99},
      {Place: "Rivendell", Price: 999.99}
  ];

  $.fn.vacations = function(options){
    $("<h1/>", {
      text: "Vacation Packages"
    }).appendTo(this);

    var vacations = $("<div/>", { id: "vacations"}).appendTo(this);
    var ul = $("<ul/>").appendTo(vacations);

    for (var x = 0; x < packages.length; x++) {
      var li = $("<li/>", {
        class: "vacation",
        "data-price": packages[x].Price
      }).appendTo(ul);

      $("<p/>", {
        text: packages[x].Place
      }).appendTo(li);


      $("<button/>", {
        text: 'Click for Price'
      }).appendTo(li)
      .on('click', function(){
        var vacation = $(this).closest('.vacation');
        var price = $("<p/>", {
          text: "From " + vacation.data('price')
        });
        vacation.append(price);
        $(this).remove();
      });

    }

};
}(jQuery));
