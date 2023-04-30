$(document).ready(function(){

    function selectScore(e) {
        var selected_input = $(e.target),
        score_val = selected_input.val();
        
        if(score_val != undefined) {
            $("#view-score span").text(score_val)
            $(".round-label").removeClass("selected");
            selected_input.parent().addClass("selected");
        }
    }

    $(".round-label").click(selectScore);

    $(".round-label input").on( "focus", selectScore);

    $("#score .submit").click(function(e){
        if ($(".round-label.selected").length == 1) {
            $("#score-card").hide();
            $("#thank-you-card").css({display: "flex"}); 
        }
    });
  });