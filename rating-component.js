$(document).ready(function(){
    $(".round-label").click(function(e){
      var selected_input = $($(e.target).find("input")),
        score_val = selected_input.val();
      if(score_val != undefined) {
        $("#view-score span").text(score_val)
        $(".round-label").removeClass("selected");
        selected_input.parent().addClass("selected");
      }
    });
    $("#score .submit").click(function(e){
        if ($(".round-label.selected").length == 1) {
            $("#score-card").hide();
            $("#thank-you-card").css({display: "flex"}); 
        }
    });
  });