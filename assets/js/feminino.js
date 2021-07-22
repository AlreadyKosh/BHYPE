jQuery(document).ready(function(){
    if(window.innerWidth < 800)  {
      jQuery('.col strong').click(function(){
        jQuery(this).parents('.col').toggleClass('active')
      })
      jQuery('nav > ul > li > a > span').click(function(e){
        e.preventDefault();
        jQuery(this).parents('li').toggleClass('active')
      })
    }
  })