$(document).ready(function() {
    if(window.innerWidth <= 785) {
      $('.hold-transition.sidebar-mini').addClass('sidebar-closed sidebar-collapse');
    }

    if(window.innerWidth <= 992 && window.innerWidth > 785) {
      $('.sidebar-mini.layout-fixed').removeClass('sidebar-closed sidebar-collapse');
     
    }


    

})

$(window).on('resize', function() {
    $('.sidebar-mini.layout-fixed').removeClass('sidebar-closed sidebar-collapse');

    if(window.innerWidth <= 785) {
        $('.hold-transition.sidebar-mini').addClass('sidebar-closed sidebar-collapse');
    } else {
        $('.hold-transition.sidebar-mini').removeClass('sidebar-closed sidebar-collapse');
    }
})




window.onload = function() {
    if(window.innerWidth <= 992 && window.innerWidth >= 785) {

      $('.dataformku').addClass('col-md-12').removeClass('col-md-6');
      console.log("Helo");
      $('.sidebar-mini.layout-fixed').addClass('sidebar-open');
      let isclick = false; 
      $('body > div.wrapper > nav > ul:nth-child(1) > li:nth-child(1) > a').on('click', function() {
        let element = document.querySelector('.sidebar-mini.layout-fixed'); 
        console.log(element);
        if(isclick == false) {
            $('body > div.wrapper > nav').addClass('active');
            $('body > div.wrapper > div.content-wrapper').addClass('active');
            $('body > div.wrapper > aside.main-sidebar.sidebar-dark-primary.elevation-4').addClass('active');
            isclick = true; 
        } else {
            $('body > div.wrapper > nav').removeClass('active');
            $('body > div.wrapper > div.content-wrapper').removeClass('active');
            $('body > div.wrapper > aside.main-sidebar.sidebar-dark-primary.elevation-4').removeClass('active');
            isclick = false; 
        }
      })
    }


    // else if(window.innerWidth < 784) {
    //     $('body > div.wrapper > nav > ul:nth-child(1) > li:nth-child(1) > a').on('click', function() {
    //         // $('.sidebar-mini.layout-fixed').addClass('sidebar-closed');
    //         // $('.sidebar-mini.layout-fixed').addClass('sidebar-collapsed');
    //         // $('.sidebar-mini.layout-fixed').addClass('sidebar-open');
    //         let element = document.querySelector('body.hold-transition.sidebar-mini');
    //         console.log(element);
    //         if(element.classList.contains('hold-transition')) {
    //             console.log("Helo");
    //             element.classList.remove('sidebar-closed');
    //             element.classList.remove('sidebar-collapse');
    //             console.log(element);
    //         }
    //     }); 
    // }
    

  
  }