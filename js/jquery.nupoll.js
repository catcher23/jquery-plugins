;(function($){

  var defaults = {
    question: "Enter question here?",
    ajaxOptions: {
      url: "",
      type: "POST",
      contentType: "application/json; charset=utf=8",
      dataType: "json"
    },
    buttonText: "Answer!",
    categories: ["A", "B", "C", "D"],
    containerClass: "nupoll",
    formClass: "nupoll-form",
    buttonClass: "nupoll-submit",
    errorMessage: "Thanks for your vote, unfortunately error",
    errorClass: "nupoll-error-message"
  };

  function Nupoll(element, options) {
    var widget = this;
    widget.config = $.extend({}, defaults, options);
    widget.element = element;

    widget.element.on("submit", function(e) {
      e.preventDefault();

      var dataObj = {
        data: JSON.stringify({selected:widget.element.find(":checked").val()})
      };
      ajaxSettings = $.extend(true, {}, widget.config.ajaxOptions, dataObj);



      $.ajax(ajaxSettings).done(function(data) {
        // consume data
      }).fail(function(){
        var returnVal = widget.element.triggerHandler("responseError.nupoll");

        if(returnVal !== false) {
          widget.element.append($("<p/>", {
            text: widget.config.errorMessage,
            "class": widget.config.errorClass
          }));
        }
      });

      widget.labels = widget.element.find("label");
      widget.element.width(widget.element.width())
      .height(widget.element.height()).find("form").remove();

      widget.element.trigger("beforeResponse.nupoll");
    });

    widget.element.one("change", function(e) {
      widget.element.find("button").prop("disabled", false);
    });
    $.each(widget.config, function(key, val){
      if(typeof val === "function") {
        widget.element.on(key + ".nupoll", function() {
            return val(widget.element);
        });
      }
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

    this.element.trigger("created.nupoll");
  };


  $.fn.nupoll = function(options){
    new Nupoll(this.first(), options);
    return this.first();
  };
}(jQuery));
