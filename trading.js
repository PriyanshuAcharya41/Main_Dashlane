gsap.from("#inner_left_upper_para",{
    opacity:0,
    duration:1,
    y:200,
})
gsap.from("#right_image",{
    opacity:0,
    duration:1,
    y:-200
})
gsap.from("#slider_container",{
    opacity:0,
    duration:1,
    y:200,
    scrollTrigger:{
        trigger:"#slider_container",
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