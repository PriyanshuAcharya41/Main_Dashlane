gsap.to("#outer_construction_drain",{
    
    duration:1.5,
    y:-800,
    opacity:0,

})
var a=gsap.from(".construction_drain",{
    opacity:0,
    duration:1,
    y:200,
    scrollTrigger:{
        trigger:".construction_drain",
        scroller:"body",
    }

})
gsap.from(".project_completed",{
    opacity:0,
    duration:1,
    y:200,
    scrollTrigger:{
        trigger:".project_completed",
        scroller:"body",
    }

})


gsap.from(".clients_slider",{
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:".clients_slider",
        scroller:"body",
        
    }
})


