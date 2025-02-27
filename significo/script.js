function homePageAnimation(){
    gsap.set(".slidesm",{scale:5})

var tl= gsap.timeline({
    scrollTrigger:{
        trigger:'.home',
        start:'top top',
        end:'bottom bottom',
        scrub: 2
    }
})

tl.to(".vdodiv",{
    '--clip':"0%",
    ease:Power2,
},'a')
tl.to(".slidesm",{
    scale:1,
    ease:Power2,
},'a')


// make a moving text on home page
tl.to(".lft",{
    xPercent: -10,
    stagger: .06,
    ease: Power4
},'b')
tl.to(".rgt",{
    xPercent: 10,
    stagger: .06,
    ease: Power4
},'b')

}

// navigation text animation -pending!!!!


// homepage lower left text animation
function homeh2Animation(){
    var clutter = "";
    document.querySelector('.homeh2')
        .textContent.split("")
        .forEach(function(e) {

                clutter += `<span>${e}</span>`;
            
            });
    document.querySelector('.homeh2').innerHTML = clutter;

    gsap.set('.homeh2 span', { opacity: 0 });
    gsap.to('.homeh2 span', {
        opacity: 1,
        stagger: .03,
        ease: Power4.easeOut
    });
}




function realPageAnimation(){
    
gsap.to('.slide',{
    scrollTrigger:{
        trigger:'.real',
        start:'top top',
        end:'bottom bottom',
        scrub:1
    },
    xPercent:-200,
    ease:Power2
})
}

function teamAnimation(){
    document.querySelectorAll('.listelem').forEach(function(el){
        el.addEventListener('mousemove',function(dets){
            // gsap.utils.mapRange(0,window.innerWidth, -200 ,200 ,dets.clientX)
            gsap.to(this.querySelector('.picture'),{opacity:1 , x: gsap.utils.mapRange(0,window.innerWidth, -200 ,200 ,dets.clientX) ,ease:Power4 ,duration:.5})
        })
        el.addEventListener('mouseleave',function(dets){
            gsap.to(this.querySelector('.picture'),{opacity:0 ,ease:Power4 ,duration:.5})
        })
    })
}

// marqueescontainer page top-text animation
function marqTextAnimtion(){
    var clutter = "";
    document.querySelector('.marqText')
        .textContent.split("")
        .forEach(function(e) {
            if (e === " ") {
                clutter += `<span>&nbsp;</span>`;
            }
                clutter += `<span>${e}</span>`;
            
            });
    document.querySelector('.marqText').innerHTML = clutter;

    gsap.set('.marqText span', { opacity: 0.1 });
    gsap.to('.marqText span', {
        scrollTrigger:{
            trigger:'.marqueescontainer',
            start:'bottom 50%',
            end:'top 90%',
            // markers: true,
            scrub:1.8
        },
        opacity: 1,
        stagger: .03,
        ease: Power4.easeOut
    });
}

function paraAnimation(){
    var clutter = "";
    document.querySelector('.textpara')
        .textContent.split("")
        .forEach(function(e) {
            if (e === " ") {
                clutter += `<span>&nbsp;</span>`;
            }
                clutter += `<span>${e}</span>`;
            
            });
    document.querySelector('.textpara').innerHTML = clutter;

    gsap.set('.textpara span', { opacity: 0.1 });
    gsap.to('.textpara span', {
        scrollTrigger:{
            trigger:'.para',
            start:'top 60%',
            end:'bottom 90%',
            scrub:1.8
        },
        opacity: 1,
        stagger: .03,
        ease: Power4.easeOut
    });
}

function locoMotive(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsules(){
    gsap.to('.capsule:nth-child(2)',{
        scrollTrigger:{
            trigger:'.capsules',
            start:'top 70%',
            end:'bottom bottom',
            // markers: true,
            scrub:1
        },
        y: 0,
        ease:Power4
    })
}

function pageColorAnimation(){
    document.querySelectorAll('.section')
    .forEach(function(e){
        ScrollTrigger.create({
            trigger:e,
            start:'top 50%',
            end:'bottom 50%',
            // markers:true,
            onEnter:function(){
                document.body.setAttribute('theme',e.dataset.color)
            },
            onEnterBack: function(){
                document.body.setAttribute('theme',e.dataset.color)
    
            }
        })
    })
}

// card animation

function cardAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    // Animate all boxes to the same width and change color
    document.querySelectorAll('.repo').forEach((repo) => {
      gsap.to(repo, {
        opacity: 1,
        width: "600px", // Set all boxes to the same width
        backgroundColor: "#000000",
        color: "#AEDEE0", // Change color to orange
        duration: 1,
        scrollTrigger: {
          trigger: repo,
          start: "top 80%", // Start animation when the top of the box is at 80% viewport
          end: "top 50%", // End animation when the top of the box is at 50% viewport
          scrub: true, // Smooth transition during scroll
        }
      });
    });
}
// footer text animation
function footerTextAnimation(){
    // Select all text elements and apply the reveal animation
gsap.registerPlugin(ScrollTrigger);

// Select all text elements and apply the reveal animation
document.querySelectorAll('.footerh1').forEach((text, index) => {
  gsap.to(text, {
    y: "0%", // Bring text to its original position
    duration: 10, // Animation duration
    ease: "power3.out", // Smooth easing effect
    delay: index * 0.2, // Delay each animation slightly
    scrollTrigger: {
      trigger: '.footer', // Use the parent container as the trigger
      start: "top 30%", // Start animation when the container reaches 80% of viewport height
      end: "top 0%", // End animation when the container reaches 50% of viewport height
      scrub: true,
      stagger: .03,
    //   markers:true // Smooth transition during scroll
    }
  });
});
}

// our team text animation
function teamTextAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    // Select all text elements and apply the reveal animation
    document.querySelectorAll('.myText').forEach((text) => {
      gsap.to(text, {
        x: "0%", // Slide text to its original position
        duration: 1,
        ease: Power4.easeOut,
        scrollTrigger: {
          trigger: text.parentElement, // Use the parent container as the trigger
          start: "top 80%", // Start when the container reaches 80% of viewport height
          end: "top 50%", // End when the container reaches 50% of viewport height
          stagger: .03,
        //   markers:true // Smooth transition during scroll
        }
      });
    });
}



pageColorAnimation()
locoMotive()
homeh2Animation()
marqTextAnimtion()
homePageAnimation()
realPageAnimation()
teamAnimation()
paraAnimation()
capsules()
cardAnimation()
teamTextAnimation()
footerTextAnimation()
