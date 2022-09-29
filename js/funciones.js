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
$( function() {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $( "#effectTypes" ).val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $( "#effect2" ).toggle( selectedEffect, options, 500 );
  };

  // Set effect from select menu value
  $( "#button2" ).on( "click", function() {
    runEffect();
  });
} );