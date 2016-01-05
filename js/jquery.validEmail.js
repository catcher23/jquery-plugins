;(function($) {
  $.fn.validEmail = function (options) {

    options = options || {};
    var on = options.on;
    var success = options.success || (function(){
      $(this).addClass("valid").removeClass("error");
    });
    var failure = options.failure || (function(){
      $(this).addClass("error").removeClass("valid");
    });
    var $input = this;

    function check($field) {
      if($field.is("input, textarea")) {
        var emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailRegExp.test($field.val());
      } else {
        return false;
      }
    }

    function applyUserCode($field) {
      if (check($field)) {
        success.call($field.get(0));
      } else {
        failure.call($field.get(0));
      }
    }

    if(typeof on === 'string') {
      $input.bind(on, function(){
        applyUserCode($(this));
      });
      $input.each(function(){
        applyUserCode($(this));
      });
    }
    return check(this);
  };
})(jQuery);
