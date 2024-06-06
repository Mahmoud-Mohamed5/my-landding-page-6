$('document').ready(function(){
  $(".whoes-us .card-ro").click(function(){
      let x = $(this).attr('id')
      if (x == "hide") {
        $(this).attr('id', 'show')
      }else {
        $(this).attr('id', 'hide')
      }
  })
})

VanillaTilt.init(document.querySelector(".card__parent"), {
  max: 15,
  speed: 400
});


VanillaTilt.init(document.querySelector(".hamdy .hamdy"), {
  max: 25,
  speed: 400,
  scale:  1.3
});
VanillaTilt.init(document.querySelector(".mahmoud .mahmoud"), {
  max: 25,
  speed: 400,
  scale:  1.3,
  glare: true
});



VanillaTilt.init(document.querySelector(".contact .container .contact_card"), {
  max: 25,
  speed: 400,
  scale:  1.1
});




VanillaTilt.init(document.querySelector("footer .social .i-1"), {
  max: 35,
  speed: 500,
  scale:  1.5,
  glare: true
});
VanillaTilt.init(document.querySelector("footer .social .i-2"), {
  max: 35,
  speed: 500,
  scale:  1.5,
  glare: true
});
