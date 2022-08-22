window.addEventListener('loadexscript',function (){
    var c = jQuery('#cta-r').html();
    jQuery('.wpcf7-submit').css('display','none');
    jQuery('.wpcf7-submit').parent().prepend(c);


    document.querySelectorAll(".wpcf7 > form").forEach((
            function(e){
                return wpcf7.init(e)
            }
        )
    );

    jQuery('.wpcf7-form').on('click','.form__cta',function (){
        jQuery('.wpcf7-submit').click();
    })

    if (jQuery('.smile').length > 0) {

        var cs = 1;

        let myInt = setInterval(function (){
            var sm = jQuery('.slide').eq(cs).html();
            jQuery('.smile-wrap').html(sm);
            if (cs == jQuery('.slide').length - 1) {
                cs = 0;
            } else {
                cs++;
            }
        },4000);


    }

});


jQuery(document).ready(function () {



})
