// Javascript
document.addEventListener('DOMContentLoaded',function(){
    var navbar = document.getElementById('navigation');
    var status = 'under 50';
    var email = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    var name = /^[A-Za-z]+$/;

    window.addEventListener('scroll',function(){
        if (window.pageYOffset > 50){
            if (status == 'under 50'){
                status = 'over 50';
                navbar.classList.add('bg');
                navbar.classList.add('animated');
                navbar.classList.add('fadeInDown');
            }
        }
        else if ( window.pageYOffset <= 50) {
            if ( status == 'over 50'){
                status = 'under 50';
                navbar.classList.remove('bg');
                navbar.classList.remove('animated');
                navbar.classList.remove('fadeInDown');
            }
        }
    })
    // end sroll

    var submit = document.getElementById('send');
    submit.onclick = function(){
       
        // name
        inputName = document.formBlock.name;
        valueName = inputName.value;
        // email
        inputEmail = document.formBlock.email;
        valueEmail = inputEmail.value;
        // text
        inputText = document.formBlock.massage;
        valueText = inputText.value;
        var noti = document.getElementById('noti');
        var notiEmail = document.getElementById('noti-email');
        var notiName = document.getElementById('noti-name');
        
        if ( inputName.value == '' || inputEmail == '' || inputText == "") {
            noti.style.display ='block';
            noti.innerHTML =' Bạn cần nhập đầy đủ ';
            return false;
        }
        else if ( !valueEmail.match(email)){
            noti.style.display ='none';
            notiEmail.style.display ='block';
            notiEmail.innerHTML = 'Email không hợp lệ';
            return false;
        }
        
        else if ( valueEmail.match(email) && valueName.match(name) && inputText !=''){
            return true;
        }
    }
    
},false);


// Jquery
$(document).ready(function () {
    $('li.nav-item a.nav-link').on('click',function(e){
        e.preventDefault();
        $('a.nav-link').removeClass('active');
        $(this).addClass('active');
    });

    //Scroll window
    var $root = $('html');

    $('a[href^="#"]').click(function () {
        $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top,
    }, 400);
 
    
    return false;
    })

    // back to top
    $('ul li.nav-item:first-child a').addClass('home');
    
    $('a.home').click(function(e){
        e.preventDefault();
        $('a.home').removeClass('active');
        $(this).addClass('active');
        $('html,body').animate({scrollTop: 0},400);
        return false;
    })
    
    // Animation progress-bar
    var delay = 800;
    $(".line-details").each(function(i){
        $(this).delay(delay * i).animate({
            width: $(this).attr('aria-valuenow') + '%'
        },delay)
    });

    //WOW
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       false,       // default
        live:         true        // default
      }
      )
      wow.init();

    // Slider Practice
    $('.slider').owlCarousel({
        items: 3,
        margin: 20,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

    // Skill
    $('.skill-information').slideUp();
    $('._1line').click(function(){
        $(this).children('.skill-information').slideToggle();
    })
});
