var app = new Vue({
    el: '#app',
    data() {
        return {
            menuOpen: true,
            open: false,
            count: 10,
            playButton: document.getElementById('play-button'),
            slideSize: 390,
            slideSpace: 350,
            windowWidth: 0,
            windowHeight: 0,
            showPlay: true,
            slides: [{
                img: 'img/section-images/mini/ask-experts.png',
                title: 'Fundamentals of Perception'
            }, {
                img: 'img/section-images/mini/sound-music.png',
                title: 'Sound and Music'
            }, {
                img: 'img/section-images/mini/body-belief.png',
                title: 'Body and Belief'
            }, {
                img: 'img/section-images/mini/time.png',
                title: 'Time'
            }, {
                img: 'img/section-images/mini/colour.png',
                title: 'Our Colourful World'
            }, {
                img: 'img/section-images/mini/digging-deeper.png',
                title: 'Perception: Digging Deeper'
            }, {
                img: 'img/section-images/mini/boundaries-of-perception.png',
                title: 'Boundaries of Perception'
            }, {
                img: 'img/section-images/mini/great-expectations.png',
                title: 'Great Expectations'
            }, {
                img: 'img/section-images/mini/power-of-imagination.png',
                title: 'The Power of Imagination'
            }, {
                img: 'img/section-images/mini/what-we-see.png',
                title: 'What We See'
            },]
        }
    },
    mounted() {


        this.windowWidth = window.innerWidth;
        this.windowHeight = document.getElementById('sizeRef').clientHeight
        window.addEventListener("resize", this.resizeElements);
        //spin button
        gsap.to('.play-button', { rotation: "360", ease: Linear.easeNone, repeat: -1 })
        // header step 1
        let video = document.getElementById('player')
        let wrapper = document.getElementById('videoSection')

        let step1 = gsap.timeline({
            scrollTrigger: {
                // toggleActions: 'play pause resume pause',
                trigger: '#container',
                start: 'top top',
                end: '+=' + this.windowHeight * 3,
                scrub: 2,
                pin: true,
                pinSpacing: true,
                onEnter: () => {
                    video.play()
                    video.currentTime = 0
                    this.showPlay = true
                },
                onLeave: () => {
                    video.pause()
                    video.currentTime = 0
                    video.muted = true
                    this.showPlay = true
                },
                onEnterBack: () => {
                    video.play()
                    this.showPlay = true
                },
            }
        })
        gsap.set(wrapper, { top: '60%' })
        step1.to(wrapper, { y: -this.windowHeight / 2 - 100, duration: 3 })
        step1.fromTo(wrapper, { opacity: 0.3, borderRadius: "100%", height: this.windowWidth }, { y: '-60%', duration: 3, borderRadius: "0%", opacity: 1, height: '100vh' })
        step1.to(".hero", {
            y: -this.windowHeight / 2, opacity: 0, ease: "none", duration: 4,
        }, '-=6')
        step1.to(wrapper, { duration: 10 })
        step1.to(".buttonWrap", { y: -this.windowHeight / 2 - 100, opacity: 1, duration: 2 }, '-=12')
        let step2 = gsap.timeline({
            defaults: {
                ease: "none"
            },
            scrollTrigger: {
                trigger: '#container',
                start: '+=' + this.windowHeight,
                endTrigger: '#carousel',
                scrub: true,
                pin: true,
                pinSpacing: true,
                scrub: true,

            }
        })
        gsap.set('.front-page-item-new', { opacity: 0, yPercent: 20 })
        step2.to('.front-page-item-new', { yPercent: 0, stagger: 2, opacity: 1, delay: 0, duration: 1 })
        step2.to('.front-page-item-new', { yPercent: -20, stagger: 2, opacity: 0, duration: 1, }, '-=2')
        // progress bar
        let progressTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#container',
                start: '+=' + this.windowHeight,
                endTrigger: '#carousel',
                pin: true,
                pinSpacing: true,
                scrub: 2,
            }
        });
        progressTl.to('.progress__bar', { height: '100%', transformOrigin: "0px 0px" });

    },

    components: {
        'carousel-3d': Carousel3d.Carousel3d,
        'slide': Carousel3d.Slide
    },
    computed: {
        isMobile() {
            return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }
    },
    methods: {
        resizeElements() {
            this.windowWidth = window.innerWidth;
            this.windowHeight = document.getElementById('sizeRef').clientHeight
        },
        playClick() {
            this.showPlay = false
            let video = document.getElementById('player')
            video.currentTime = 0
            video.muted = !video.muted;
        }
    }
})