var app = new Vue({
    el: '#container',
    data() {
        return {
            menuOpen: true,
            open: false
        }
    },
    mounted() {
        // header step 1
        let video = document.getElementById('player')
        let wrapper = document.getElementById('videoSection')
        let width = window.innerWidth;
        let height = window.innerHeight
        let step1 = gsap.timeline({
            scrollTrigger: {
                markers: true,
                toggleActions: 'play pause resume pause',
                trigger: '#container',
                start: 'top top',
                //
                end: '+=' + height * 3,
                //  end: height * 4,
                scrub: true,
                pin: true,
                pinSpacing: true,
                scrub: 6,
                onEnter: () => {

                    video.play()
                },
            }
        })

        step1.to(wrapper, { y: -height - 100, duration: 3 })
        step1.fromTo(wrapper, { opacity: 0.3, borderRadius: "100%", height: width }, { y: -height, duration: 3, borderRadius: "0%", opacity: 1, height: '100vh' })
        step1.to(".hero", {
            y: -height / 2, opacity: 0, ease: "none", duration: 4,
        }, '-=6')
        step1.to(wrapper, { duration: 10 })
        gsap.set('.front-page-item', { opacity: 0, top: 200 })
        let step2 = gsap.timeline({
            defaults: {
                ease: "none"
            },
            scrollTrigger: {
                //    markers: true,
                toggleActions: 'restart pause reverse pause',
                trigger: '#container',
                start: '+=' + height,
                endTrigger: '#carousel',
                //  end: height * 4,
                scrub: true,
                pin: true,
                pinSpacing: true,
                scrub: true,
              
            }
        })

        step2.to('.front-page-item', { top: 0, stagger: 2, opacity: 1, delay: 0, duration: 1 })
        step2.to('.front-page-item', { top: -100, stagger: 2, opacity: 0, duration: 1, }, '-=1')


        let progressTl = gsap.timeline({
            scrollTrigger: {
                //    markers: true,
                toggleActions: 'restart pause reverse pause',
                trigger: '#container',
                start: '+=' + height,
                endTrigger: '#carousel',
                //  end: height * 4,
                scrub: true,
                pin: true,
                pinSpacing: true,
                scrub: 2,
              
            }
        });

        progressTl.to('.progress__bar', { height: '100%', transformOrigin: "0px 0px" });


    },
    computed: {
    },
    methods: {
    }
})