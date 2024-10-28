gsap.from("#left_upper",{
    opacity:0,
    duration:1,
    x:-200,
    scrollTrigger:{
        trigger:"#left_upper",
        scroller:"body",
    }

})
gsap.from("#right_image",{
    opacity:0,
    duration:1,
    x:200,
    scrollTrigger:{
        trigger:"#right_image",
        scroller:"body",
    }

})

gsap.from("#inner_left_upper_para",{
    opacity:0,
    duration:1,
    y:200,
    scrollTrigger:{
        trigger:"#inner_left_upper_para",
        scroller:"body",
        
    }
})
gsap.from("#right_image1",{
    opacity:0,
    duration:1,
    y:-200,
    scrollTrigger:{
        trigger:"#right_image1",
        scroller:"body",
        
    }
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