;(function($){
  $.fn.nupoll = function(){
    $("<h1/>", {
      text: "Sample Poll"
    }).appendTo(this);

    var form = $("<form/>").appendTo(this);

    var x, categories = ["A", "B", "C", "D"];

    for (x = 0; x < categories.length; x++) {
      $("<input/>", {
        type: "radio",
        name: "categories",
        id: categories[x],
        value: categories[x]
      }).appendTo(form);

      $("<label/>", {
        text: categories[x],
        "for": categories[x]
      }).appendTo(form);
    }

    $("<button/>", {
      text: "Answer!"
    }).appendTo(form);

    return this;
  };
}(jQuery));
