$('.welcome-message h1').fitText(1,{
    minFontSize: '30px',
    maxFontSize: '63px'
  });
  $('.welcome-message h2').fitText(1.2,{
    minFontSize: '20px',
    maxFontSize: '34px'
  });
  
  
  var menuTrigger = $('#menu-trigger');
  
  var isToggled = false;
  
  menuTrigger.click(function(e){
    e.preventDefault();  
    if(!isToggled){
     $(this).find('.fa').addClass('rotate-clockwise').removeClass('rotate-counter');
      isToggled = true;
      $('#responsive-menu').slideToggle();
    }else{
      $(this).find('.fa').addClass('rotate-counter').removeClass('rotate-clockwise');
      $('#responsive-menu').slideToggle();
      isToggled = false;
    }
    
  });