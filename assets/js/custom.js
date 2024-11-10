(function ($) {
    "use strict";



  /*---------------------------------
    Top Menu / Side Menu JS
  -----------------------------------*/

    $("#side-menu").metisMenu(),
        $("#vertical-menu-btn").on("click", function (e) {
            e.preventDefault(),
            $("body").toggleClass("sidebar-enable"),
                992 <= $(window).width()
                    ? $("body").toggleClass("vertical-collapsed")
                    : $("body").removeClass("vertical-collapsed");
        }),

        $("body,html").click(function (e) {
            var t = $("#vertical-menu-btn");
            t.is(e.target) ||
                0 !== t.has(e.target).length ||
                e.target.closest("div.vertical-menu") ||
                $("body").removeClass("sidebar-enable");
        }),
        
        $("#sidebar-menu a").each(function () {
            var e = window.location.href.split(/[?#]/)[0];
            this.href == e &&
                ($(this).addClass("active"),
                $(this).parent().addClass("mm-active"),
                $(this).parent().parent().addClass("mm-show"));
        }),

        $(document).ready(function () {
        });
/*---------------------------------
  Top Menu / Side Menu JS
-----------------------------------*/

/*---------------------------------
 image Preview area start
-----------------------------------*/

$(document).ready(function() {
  // $(document).on('change', 'input[type="file"]' , function() {
  $('input[type="file"]').change(function() {
    const input = this;
    const previewId = '#imagePreview' + input.id.replace('imageUpload', '');

    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        $(previewId).css('background-image', 'url(' + e.target.result + ')');
        $(previewId).hide().fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
    }
  });
});

/*---------------------------------
  image Preview area end
-----------------------------------*/




})(jQuery);
