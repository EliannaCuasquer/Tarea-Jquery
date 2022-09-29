var puntos=0;
$(function(){
	$(".items").hover(function(){
		var tis = $(this);
		tis.find(".hueco").click(function(){			
			if(tis.hasClass("active")){
				tis.removeClass("active");
				puntos++;
				$("#puntos").html(puntos);
			} else{
				console.log(":(");
			}
		})
	})
})
var iterval = setInterval(function(){
	topoaleatorio();
},1000);

topoaleatorio = function(){
	var num = parseInt(Math.random() * 12);
	$(".items").removeClass("active");
	$(".items:nth-child("+num+")").addClass("active");
}

$( function() {
  $( "#draggable" ).draggable();
} );
$( function() {
  $( "#sortable" ).sortable();
} );

$( function() {
  $( "#tabs" ).tabs();
} );

$( function() {
  var availableTags = [
    "Eliana",
    "David"
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });
} );
$( function() {
  var state = true;
  $( "#button" ).on( "click", function() {
    if ( state ) {
      $( "#effect" ).animate({
        backgroundColor: "#aa0000",
        color: "#fff",
        width: 500
      }, 1000 );
    } else {
      $( "#effect" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 240
      }, 1000 );
    }
    state = !state;
  });
} );