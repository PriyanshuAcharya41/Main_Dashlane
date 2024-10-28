
var tl=gsap.timeline()
gsap.from("#inner_home_text",{
    opacity:0,
    delay:0,
    duration:1,
    x:-800,
})
gsap.from("#home_image",{
    duration:1,
    opacity:0,
    x:200,
})
gsap.from(".home_button",{
    opacity:0,
})
gsap.from(".verticals",{
    opacity:0,
    y:200,
    duration:1,
    scrollTrigger:{
        trigger:".verticals",
        scroller:"body",    
        
    },
    
})
gsap.from(".our_team",{
    opacity:0,
    y:300,
    scrollTrigger:{
        trigger:".our_team",
        scroller:"body",
        
    },
    
})
gsap.from(".clients_slider",{
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:".clients_slider",
        scroller:"body",
        
    }
})
gsap.from(".contact_div",{
    opacity:0,
    y:300,
    duration:1.5,
    yoyo:true,
    scrollTrigger:{
        trigger:".contact_div",
        scroller:"body",
        
    }
})