const str = ['Dipesh Jaswani' , 'A Frontend Developer.' , 'A Dancer.' , 'A Designer.'];

let blinker = gsap.to('.blinker' , {opacity:0 ,  ease:'power1.inOut' , repeat:-1})

let time = gsap.timeline({repeat : -1});

str.forEach(str => {
    let tl = gsap.timeline({repeat:1,yoyo:true})
    tl.to('.dynamic' , {duration:1.2 , text: str  })
    time.add(tl)
})
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  
  const slides = document.querySelectorAll(".slide");
  const left = document.getElementById("left");
  const right = document.getElementById("right");

  let active = 0;

  right.addEventListener("click", ()=> {
    active++;
    if(active > slides.length - 1) {
      active = 0;
    }
    slidechange()
  });
  left.addEventListener("click", ()=> {
    active--;
    if(active < 0) {
      active = slides.length - 1;
    }
    slidechange()
  })

  function slidechange()
  {
    slides.forEach((slide) => slide.classList.remove("active") )
    slides[active].classList.add("active");
  }



 