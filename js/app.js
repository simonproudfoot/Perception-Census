var app = new Vue({
    el: '#container',
    data() {
        return {
            menuOpen: true,
            open: false
        }
    },
    mounted() {
        let video = document.getElementById('player')
        let wrapper = document.getElementById('videoSection')
        let width = window.innerWidth;
        let height = window.innerHeight
        gsap.to(".hero, .nav-bar", {
            y: -height*2, opacity: 0, ease: "none", duration: 2,  stagger: 0.1,
            scrollTrigger: {
                pinSpacing: true,
                start: 'top top',
                end: "+="+height*6,
                toggleActions: 'restart pause reverse pause',
                //end: width / 4,
                scrub: 3,
            },
        });
        gsap.set(wrapper, { opacity: 0.3, borderRadius: "100%", height: width })
        let tl = gsap.timeline({
            onStart: () => {
                console.log('onStart')
            },
            scrollTrigger: {
                markers: true,
                toggleActions: 'restart pause reverse pause',
                trigger: wrapper,
                start: height,
                end: "+="+height*3,
                pin: true,
                pinSpacing: true,
                scrub: 5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                onEnter: () => {
                    video.play()
                },
            }
        });
        tl.to(wrapper, { borderRadius: "0%", opacity: 1, height: '100vh', duration: 4, })
        tl.to(wrapper, {duration: 10,  borderRadius: "0%", opacity: 1, height: '100vh' })
    },
    computed: {
    },
    methods: {
    }
})