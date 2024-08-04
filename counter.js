
//locomotive

function locomotive(){
   gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotive()





//nav animation

function navanimation(){
    
    var nav=document.querySelector('#navbar')


    nav.addEventListener('mouseenter',()=>{
       //gsap timeline for step by step open
    
       var step=gsap.timeline()
    // step1
       step.to('.nav-bottom',{
        height:"150%",
        bottom:"-200%"
        
       })
    // step2
    
       step.to('.nav-part h5',{
        display:"block"
       })
    //from means bottom to means up
       step.from('.nav-part h5 span',{
       x:-20,
       
       stagger:0.1
            //stagger means comes one by one
      
       })
    })
    
    
    
    nav.addEventListener('mouseleave',()=>{
       //gsap timeline for step by step open
    
       var step=gsap.timeline()
    
       step.to('.nav-part h5 span',{
       
        y:10,
        duration:0.2,
        stagger:{
         amount:0.1     //stagger means comes one by one
        }
       
        })
       
        step.to('.nav-part h5',{
            display:"none"
           })
    
    
       step.to('.nav-bottom',{
        height:"0%",
        bottom:"0%"
        
       })
    
    
     
    
       
    })


}
navanimation()


function page2animation(){


   var rightelem= document.querySelectorAll('.right-elem')
   
   rightelem.forEach(function(elem){
   
      elem.addEventListener('mouseenter',()=>{
        gsap.to(elem.childNodes[3],{
         opacity:1,
         scale:1
        })
      })
      
      elem.addEventListener('mouseleave',()=>{
        gsap.to(elem.childNodes[3],{
         opacity:0,
         scale:0
        })
      })
   
      elem.addEventListener('mousemove',(dets)=>{
        gsap.to(elem.childNodes[3],{
       x:dets.x - elem.getBoundingClientRect().x -50, //getbounded for cut x and y axis for limited distance
       y:dets.y - elem.getBoundingClientRect().y-190
        })
      })
   
   })
}

page2animation()


function page3Video(){

   var page3center= document.querySelector(".page3-content")
   var video=document.querySelector(".page3 video")
   
   page3center.addEventListener("click", ()=>{
      video.play()
      gsap.to(video,{
         transform:"scaleX(1) scaleY(1)",
         opacity:1,
         borderRadius:0
      })
   })
   
   video.addEventListener("click", ()=>{
      video.pause()
      gsap.to(video,{
         transform:"scaleX(0.7) scaleY(0)",
         opacity:0,
         borderRadius:"2%"
         
      })
   })

}
page3Video()


function page4video(){

   var sections= document.querySelectorAll(".sec-right")
   
   sections.forEach(function(elem){
      elem.addEventListener("mouseenter",()=>{
        elem.childNodes[3].style.opacity=1
        elem.childNodes[3].play()
      })
   
      elem.addEventListener("mouseleave",()=>{
        elem.childNodes[3].style.opacity=0
        elem.childNodes[3].load()  //pause dile hover korle age jekhan porjonto cholse tar por theke cholbe.tai load dite hbe
      })
   })

}

page4video()


function hoveronvideo(){

   var hovervideo=document.querySelectorAll(".sec-right ")
   var hover= document.querySelector(".hover")
   
   hovervideo.forEach(function(elem){
      elem.childNodes[3].addEventListener("mouseenter",()=>{
         gsap.to(hover,{
            opacity:1,
            scale:1
           
           
         })
      })
      elem.childNodes[3].addEventListener("mouseleave",()=>{
         gsap.to(hover,{
            opacity:0,
            scale:0
         })
      })
      elem.childNodes[3].addEventListener("mousemove",(dets)=>{
         gsap.to(hover,{
            x:dets.x-elem.getBoundingClientRect().x-50,
            y:dets.y-elem.getBoundingClientRect().y-490
         })
      })
   })

}

hoveronvideo()


function imageup(){


   var image=document.querySelector(".sec2-box1 img")
   var image2=document.querySelector(".sec2-box2 img")
   
   image.addEventListener("mouseenter",()=>{
      gsap.to(".sec2-box1 img",{
         transform:"translateY(-30%)"
      })
   })
   image.addEventListener("mouseleave",()=>{
      gsap.to(".sec2-box1 img",{
         transform:"translateY(0%)"
      })
   })
   image2.addEventListener("mouseenter",()=>{
      gsap.to(".sec2-box2 img",{
         transform:"translateY(-30%)"
      })
   })
   image2.addEventListener("mouseleave",()=>{
      gsap.to(".sec2-box2 img",{
         transform:"translateY(0%)"
      })
   })

}
imageup()

function page7animation(){
   gsap.from("#btm-part2 h4",{

      x:0,
      duration:1,
      stagger:true,
      scrollTrigger:{
         trigger:"#btm-part2",
         scroller:"#main",
         // markers:true,
         start:"top 80%",
         end:"top 10%",
         scrub:true
      }
   })
   gsap.from("#btm-part3 h4",{
   
      x:0,
      duration:1,
      stagger:true,
      scrollTrigger:{
         trigger:"#btm-part2",
         scroller:"#main",
         // markers:true,
         start:"top 80%",
         end:"top 10%",
         scrub:true
      }
   })
   gsap.from("#btm-part4 h4",{
   
      x:0,
      duration:1,
      stagger:true,
      scrollTrigger:{
         trigger:"#btm-part2",
         scroller:"#main",
         // markers:true,
         start:"top 80%",
         end:"top 10%",
         scrub:true
      }
   })

}
page7animation()


function loadingAnimation(){
   var tl=gsap.timeline()

   tl.from(".page1",{
      opacity:0,
      duration:0.3,
      delay:0.2
   })
   
   tl.from(".page1",{
      transform:"scale(0)",
      borderRadius:"100px",
      duration:0.5
      
   })
   tl.from("nav",{
      opacity:0,
     
      duration:0.5,
     
   
   })
   
   tl.from(".page1 h1,.page1 p, .page1 div",{
      opacity:0,
      
      duration:0.5,
      stagger:0.2
   
   })
   
}
loadingAnimation()

