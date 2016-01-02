;(function($){

  var defaults = {
    question: "Enter question here?",
    url: "",
    buttonText: "Answer!",
    categories: ["A", "B", "C", "D"],
    containerClass: "nupoll",
    formClass: "nupoll-form",
    buttonClass: "nupoll-submit"
  };

  function Nupoll(element, options) {
    var widget = this;
    widget.config = $.extend({}, defaults, options);
    widget.element = element;

    widget.element.on("submit", function(e) {
      e.preventDefault();
    });

    widget.element.one("change", function(e) {
      widget.element.find("button").prop("disabled", false);
    });
    this.init();
  }

  Nupoll.prototype.init = function() {
    this.element.addClass(this.config.containerClass);

    $("<h1/>", {
      text: this.config.question
    }).appendTo(this.element);

    var form = $("<form/>").addClass(this.config.formClass).appendTo(this.element);
    var x;

    for (x = 0; x < this.config.categories.length; x++) {
      $("<input/>", {
        type: "radio",
        name: "categories",
        id: this.config.categories[x],
        value: this.config.categories[x]
      }).appendTo(form);

      $("<label/>", {
        text: this.config.categories[x],
        "for": this.config.categories[x]
      }).appendTo(form);
    }

    $("<button/>", {
      text: this.config.buttonText,
      "class": this.config.buttonClass,
      disabled: "disabled"
    }).appendTo(form);
  };



  $.fn.nupoll = function(options){
    new Nupoll(this.first(), options);
    return this.first();
  };
}(jQuery));
