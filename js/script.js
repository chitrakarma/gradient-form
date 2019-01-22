$(document).ready(function(){
    $("#event").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".box").not("." + optionValue).fadeOut();
                $(".box").not("." + optionValue).fadeOut("fast");
                $(".box").not("." + optionValue).fadeOut("500");
                $("." + optionValue).fadeIn();
                $("." + optionValue).fadeIn("slow");
                $("." + optionValue).fadeIn("2000");
            } else{
                $(".box").fadeOut();
                $(".box").fadeOut("slow");
                $(".box").fadeOut("500");
            }
        });
    }).change();
});