/*
$(document).ready(function(){

	var waypoint = new Waypoint({
  element: document.getElementById('js-header'),
  handler: function(direction) {
    notify('I am 20px from the top of the window')
  },
  offset: 20
})


  // hide our element on page load
  // $('.u_header__section').css('opacity', 0);

//  $('.u_header__section').waypoint(function() {
	//	$('.u_header__section').addClass('g-bg-white');
//  }, { offset: '25%' });




});
*/


var s = skrollr.init({
	render: function(data) {
	  //Log the current scroll position.
	}
});
