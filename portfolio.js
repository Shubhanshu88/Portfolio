$(function() {
  $('.dropdown-menu').dropdown('toggle');
  $('.MenuToggle').toggleClass('change');
  var scene = $('#shift').get(0);
  var parallaxInstance = new Parallax(scene, {
    frictionY: 0.15,
    frictionX: 0.15,
    invertX: true,
    invertY: true
  });
    $('.projects').click(function() {
      if($('.partL').css('display') == 'flex') {
      $('.partL').css('animation', 'goTo 2s ease-in');
      window.setTimeout(function() {
        $('.partL').css({'display':'none', 'transform':'scale(0.1) translateX(40vh)'});
        $('.partP').css('display','flex');
        $('.partP').css('animation','goHere 2s ease-out forwards');
      }, 2000) 
    }
    else if($('.partC').css('display') == 'flex') {
      $('.partC').css('animation', 'goTo 2s ease-in');
      window.setTimeout(function() {
        $('.partC').css({'display':'none', 'transform':'scale(0.1) translateX(40vh)'});
        $('.partP').css('display','flex');
        $('.partP').css('animation','goHere 2s ease-out forwards');
      }, 2000) 
    }
    else if($('.partI').css('display') == 'flex') {
      $('.partI').css('animation', 'goTo 2s ease-in');
      window.setTimeout(function() {
        $('.partI').css({'display':'none', 'transform':'scale(0.1) translateX(40vh)'});
        $('.partP').css('display','flex');
        $('.partP').css('animation','goHere 2s ease-out forwards');
      }, 2000) 
    }
    });
    
    $('.profiles').click(function() {
      if($('.partC').css('display') == 'flex') {
      $('.partC').css('animation', 'goTo 2s ease-in');
      window.setTimeout(function() {
        $('.partC').css({'display':'none', 'transform':'scale(0.1) translateX(40vh)'});
        $('.partL').css('display','flex');
        $('.partL').css('animation','goHere 2s ease-out forwards');
      }, 2000) 
    }
    else if($('.partP').css('display') == 'flex') {
      $('.partP').css('animation', 'goTo 2s ease-in');
      window.setTimeout(function() {
        $('.partP').css({'display':'none', 'transform':'scale(0.1) translateX(40vh)'});
        $('.partL').css('display','flex');
        $('.partL').css('animation','goHere 2s ease-out forwards');
      }, 2000) 
    }
    else if($('.partI').css('display') == 'flex') {
      $('.partI').css('animation', 'goTo 2s ease-in');
      window.setTimeout(function() {
        $('.partI').css({'display':'none', 'transform':'scale(0.1) translateX(40vh)'});
        $('.partL').css('display','flex');
        $('.partL').css('animation','goHere 2s ease-out forwards');
      }, 2000) 
    }
    });

    $('.contacts').click(function() {
      if($('.partL').css('display') == 'flex') {
      $('.partL').css('animation', 'goTo 2s ease-in');
      window.setTimeout(function() {
        $('.partL').css({'display':'none', 'transform':'scale(0.1) translateX(40vh)'});
        $('.partC').css('display','flex');
        $('.partC').css('animation','goHere 2s ease-out forwards');
      }, 2000) 
    }
    else if($('.partP').css('display') == 'flex') {
      $('.partP').css('animation', 'goTo 2s ease-in');
      window.setTimeout(function() {
        $('.partP').css({'display':'none', 'transform':'scale(0.1) translateX(40vh)'});
        $('.partC').css('display','flex');
        $('.partC').css('animation','goHere 2s ease-out forwards');
      }, 2000) 
    }
    else if($('.partI').css('display') == 'flex') {
      $('.partI').css('animation', 'goTo 2s ease-in');
      window.setTimeout(function() {
        $('.partI').css({'display':'none', 'transform':'scale(0.1) translateX(40vh)'});
        $('.partC').css('display','flex');
        $('.partC').css('animation','goHere 2s ease-out forwards');
      }, 2000) 
    }
    });

    $('.interact').click(function() {
      if($('.partL').css('display') == 'flex') {
      $('.partL').css('animation', 'goTo 2s ease-in');
      window.setTimeout(function() {
        $('.partL').css({'display':'none', 'transform':'scale(0.1) translateX(40vh)'});
        $('.partI').css('display','flex');
        $('.partI').css('animation','goHere 2s ease-out forwards');
      }, 2000) 
    }
    else if($('.partP').css('display') == 'flex') {
      $('.partP').css('animation', 'goTo 2s ease-in');
      window.setTimeout(function() {
        $('.partP').css({'display':'none', 'transform':'scale(0.1) translateX(40vh)'});
        $('.partI').css('display','flex');
        $('.partI').css('animation','goHere 2s ease-out forwards');
      }, 2000) 
    }
    else if($('.partC').css('display') == 'flex') {
      $('.partC').css('animation', 'goTo 2s ease-in');
      window.setTimeout(function() {
        $('.partC').css({'display':'none', 'transform':'scale(0.1) translateX(40vh)'});
        $('.partI').css('display','flex');
        $('.partI').css('animation','goHere 2s ease-out forwards');
      }, 2000) 
    }
    });

  setTimeout(function() {
    $('#snackbar').addClass('show');
    setTimeout(function() {
      $('#snackbar').removeClass('show');
    }, 3000);
  }, 1000);
  $('.dropdown-menu').click(function(eve) {
    eve.stopPropagation();
});
})

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#ffffff",
      "opacity": 0.7,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});