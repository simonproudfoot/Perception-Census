/*!
 * vue-carousel-3d v0.1.23
 * (c) 2018 Vladimir Bujanovic
 * https://github.com/wlada/vue-carousel-3d#readme
 */
! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Carousel3d = e() : t.Carousel3d = e()
}(this, function () {
    return function (t) {
        function e(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {
                exports: {}
                , id: i
                , loaded: !1
            };
            return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }([function (t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Slide = e.Carousel3d = void 0;
        var r = n(1)
            , o = i(r)
            , s = n(15)
            , a = i(s)
            , u = function (t) {
                t.component("carousel3d", o.default), t.component("slide", a.default)
            };
        e.default = {
            install: u
        }, e.Carousel3d = o.default, e.Slide = a.default
    }, function (t, e, n) {
        n(2);
        var i = n(7)(n(8), n(62), "data-v-c06c963c", null);
        t.exports = i.exports
    }, function (t, e, n) {
        var i = n(3);
        "string" == typeof i && (i = [[t.id, i, ""]]), i.locals && (t.exports = i.locals);
        n(5)("e749a8c4", i, !0)
    }, function (t, e, n) {
        e = t.exports = n(4)(), e.push([t.id, ".carousel-3d-container[data-v-c06c963c]{min-height:1px;width:100%;position:relative;z-index:0;overflow:hidden;margin:20px auto;box-sizing:border-box}.carousel-3d-slider[data-v-c06c963c]{position:relative;margin:0 auto;transform-style:preserve-3d;-webkit-perspective:1000px;-moz-perspective:1000px;perspective:1000px}", ""])
    }, function (t, e) {
        t.exports = function () {
            var t = [];
            return t.toString = function () {
                for (var t = [], e = 0; e < this.length; e++) {
                    var n = this[e];
                    n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
                }
                return t.join("")
            }, t.i = function (e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var i = {}, r = 0; r < this.length; r++) {
                    var o = this[r][0];
                    "number" == typeof o && (i[o] = !0)
                }
                for (r = 0; r < e.length; r++) {
                    var s = e[r];
                    "number" == typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s))
                }
            }, t
        }
    }, function (t, e, n) {
        function i(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                    , i = c[n.id];
                if (i) {
                    i.refs++;
                    for (var r = 0; r < i.parts.length; r++) i.parts[r](n.parts[r]);
                    for (; r < n.parts.length; r++) i.parts.push(o(n.parts[r]));
                    i.parts.length > n.parts.length && (i.parts.length = n.parts.length)
                }
                else {
                    for (var s = [], r = 0; r < n.parts.length; r++) s.push(o(n.parts[r]));
                    c[n.id] = {
                        id: n.id
                        , refs: 1
                        , parts: s
                    }
                }
            }
        }

        function r() {
            var t = document.createElement("style");
            return t.type = "text/css", d.appendChild(t), t
        }

        function o(t) {
            var e, n, i = document.querySelector('style[data-vue-ssr-id~="' + t.id + '"]');
            if (i) {
                if (p) return v;
                i.parentNode.removeChild(i)
            }
            if (x) {
                var o = f++;
                i = h || (h = r()), e = s.bind(null, i, o, !1), n = s.bind(null, i, o, !0)
            }
            else i = r(), e = a.bind(null, i), n = function () {
                i.parentNode.removeChild(i)
            };
            return e(t)
                , function (i) {
                    if (i) {
                        if (i.css === t.css && i.media === t.media && i.sourceMap === t.sourceMap) return;
                        e(t = i)
                    }
                    else n()
                }
        }

        function s(t, e, n, i) {
            var r = n ? "" : i.css;
            if (t.styleSheet) t.styleSheet.cssText = g(e, r);
            else {
                var o = document.createTextNode(r)
                    , s = t.childNodes;
                s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(o, s[e]) : t.appendChild(o)
            }
        }

        function a(t, e) {
            var n = e.css
                , i = e.media
                , r = e.sourceMap;
            if (i && t.setAttribute("media", i), r && (n += "\n/*# sourceURL=" + r.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }
        var u = "undefined" != typeof document
            , l = n(6)
            , c = {}
            , d = u && (document.head || document.getElementsByTagName("head")[0])
            , h = null
            , f = 0
            , p = !1
            , v = function () {}
            , x = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        t.exports = function (t, e, n) {
            p = n;
            var r = l(t, e);
            return i(r)
                , function (e) {
                    for (var n = [], o = 0; o < r.length; o++) {
                        var s = r[o]
                            , a = c[s.id];
                        a.refs--, n.push(a)
                    }
                    e ? (r = l(t, e), i(r)) : r = [];
                    for (var o = 0; o < n.length; o++) {
                        var a = n[o];
                        if (0 === a.refs) {
                            for (var u = 0; u < a.parts.length; u++) a.parts[u]();
                            delete c[a.id]
                        }
                    }
                }
        };
        var g = function () {
            var t = [];
            return function (e, n) {
                return t[e] = n, t.filter(Boolean).join("\n")
            }
        }()
    }, function (t, e) {
        t.exports = function (t, e) {
            for (var n = [], i = {}, r = 0; r < e.length; r++) {
                var o = e[r]
                    , s = o[0]
                    , a = o[1]
                    , u = o[2]
                    , l = o[3]
                    , c = {
                        id: t + ":" + r
                        , css: a
                        , media: u
                        , sourceMap: l
                    };
                i[s] ? i[s].parts.push(c) : n.push(i[s] = {
                    id: s
                    , parts: [c]
                })
            }
            return n
        }
    }, function (t, e) {
        t.exports = function (t, e, n, i) {
            var r, o = t = t || {}
                , s = typeof t.default;
            "object" !== s && "function" !== s || (r = t, o = t.default);
            var a = "function" == typeof o ? o.options : o;
            if (e && (a.render = e.render, a.staticRenderFns = e.staticRenderFns), n && (a._scopeId = n), i) {
                var u = a.computed || (a.computed = {});
                Object.keys(i).forEach(function (t) {
                    var e = i[t];
                    u[t] = function () {
                        return e
                    }
                })
            }
            return {
                esModule: r
                , exports: o
                , options: a
            }
        }
    }, function (t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(9)
            , o = i(r)
            , s = n(10)
            , a = i(s)
            , u = n(15)
            , l = i(u)
            , c = function () {};
        e.default = {
            name: "carousel3d"
            , components: {
                Controls: a.default
                , Slide: l.default
            }
            , props: {
                count: {
                    type: [Number, String]
                    , default: 6
                }
                , perspective: {
                    type: [Number, String]
                    , default: 0
                }
                , display: {
                    type: [Number, String]
                    , default: 6
                }
                , loop: {
                    type: Boolean
                    , default: !0
                }
                , animationSpeed: {
                    type: [Number, String]
                    , default: 500
                }
                , dir: {
                    type: String
                    , default: "rtl"
                }
                , width: {
                    type: [Number, String]
                    , default: 360
                }
                , height: {
                    type: [Number, String]
                    , default: 360
                }
                , border: {
                    type: [Number, String]
                    , default: 1
                }
                , space: {
                    type: [Number, String]
                    , default: "auto"
                }
                , startIndex: {
                    type: [Number, String]
                    , default: 0
                }
                , clickable: {
                    type: Boolean
                    , default: !0
                }
                , disable3d: {
                    type: Boolean
                    , default: !1
                }
                , minSwipeDistance: {
                    type: Number
                    , default: 10
                }
                , inverseScaling: {
                    type: [Number, String]
                    , default: 300
                }
                , controlsVisible: {
                    type: Boolean
                    , default: !1
                }
                , controlsPrevHtml: {
                    type: String
                    , default: "&lsaquo;"
                }
                , controlsNextHtml: {
                    type: String
                    , default: "&rsaquo;"
                }
                , controlsWidth: {
                    type: [String, Number]
                    , default: 50
                }
                , controlsHeight: {
                    type: [String, Number]
                    , default: 50
                }
                , onLastSlide: {
                    type: Function
                    , default: c
                }
                , onSlideChange: {
                    type: Function
                    , default: c
                }
                , bias: {
                    type: String
                    , default: "left"
                }
                , onMainSlideClick: {
                    type: Function
                    , default: c
                }
            }
            , data: function () {
                return {
                    viewport: 0
                    , currentIndex: 0
                    , total: 0
                    , dragOffset: 0
                    , dragStartX: 0
                    , mousedown: !1
                    , zIndex: 998
                }
            }
            , mixins: [o.default]
            , watch: {
                count: function () {
                    this.computeData()
                }
            }
            , computed: {
                isLastSlide: function () {
                    return this.currentIndex === this.total - 1
                }
                , isFirstSlide: function () {
                    return 0 === this.currentIndex
                }
                , isNextPossible: function () {
                    return !(!this.loop && this.isLastSlide)
                }
                , isPrevPossible: function () {
                    return !(!this.loop && this.isFirstSlide)
                }
                , slideWidth: function () {
                    var t = this.viewport
                        , e = parseInt(this.width) + 2 * parseInt(this.border, 10);
                    return t < e ? t : e
                }
                , slideHeight: function () {
                    var t = parseInt(this.width, 10) + 2 * parseInt(this.border, 10)
                        , e = parseInt(parseInt(this.height) + 2 * this.border, 10)
                        , n = this.calculateAspectRatio(t, e);
                    return this.slideWidth / n
                }
                , visible: function () {
                    var t = this.display > this.total ? this.total : this.display;
                    return t
                }
                , hasHiddenSlides: function () {
                    return this.total > this.visible
                }
                , leftIndices: function () {
                    var t = (this.visible - 1) / 2;
                    t = "left" === this.bias.toLowerCase() ? Math.ceil(t) : Math.floor(t);
                    for (var e = [], n = 1; n <= t; n++) e.push("ltr" === this.dir ? (this.currentIndex + n) % this.total : (this.currentIndex - n) % this.total);
                    return e
                }
                , rightIndices: function () {
                    var t = (this.visible - 1) / 2;
                    t = "right" === this.bias.toLowerCase() ? Math.ceil(t) : Math.floor(t);
                    for (var e = [], n = 1; n <= t; n++) e.push("ltr" === this.dir ? (this.currentIndex - n) % this.total : (this.currentIndex + n) % this.total);
                    return e
                }
                , leftOutIndex: function () {
                    var t = (this.visible - 1) / 2;
                    return t = "left" === this.bias.toLowerCase() ? Math.ceil(t) : Math.floor(t), t++, "ltr" === this.dir ? this.total - this.currentIndex - t <= 0 ? -parseInt(this.total - this.currentIndex - t) : this.currentIndex + t : this.currentIndex - t
                }
                , rightOutIndex: function () {
                    var t = (this.visible - 1) / 2;
                    return t = "right" === this.bias.toLowerCase() ? Math.ceil(t) : Math.floor(t), t++, "ltr" === this.dir ? this.currentIndex - t : this.total - this.currentIndex - t <= 0 ? -parseInt(this.total - this.currentIndex - t, 10) : this.currentIndex + t
                }
            }
            , methods: {
                goNext: function () {
                    this.isNextPossible && (this.isLastSlide ? this.goSlide(0) : this.goSlide(this.currentIndex + 1))
                }
                , goPrev: function () {
                    this.isPrevPossible && (this.isFirstSlide ? this.goSlide(this.total - 1) : this.goSlide(this.currentIndex - 1))
                }
                , goSlide: function (t) {
                    var e = this;
                    this.currentIndex = t < 0 || t > this.total - 1 ? 0 : t, this.isLastSlide && (this.onLastSlide !== c && console.warn("onLastSlide deprecated, please use @last-slide"), this.onLastSlide(this.currentIndex), this.$emit("last-slide", this.currentIndex)), this.$emit("before-slide-change", this.currentIndex), setTimeout(function () {
                        return e.animationEnd()
                    }, this.animationSpeed)
                }
                , goFar: function (t) {
                    var e = this
                        , n = t === this.total - 1 && this.isFirstSlide ? -1 : t - this.currentIndex;
                    this.isLastSlide && 0 === t && (n = 1);
                    for (var i = n < 0 ? -n : n, r = 0, o = 0; o < i;) {
                        o += 1;
                        var s = 1 === i ? 0 : r;
                        setTimeout(function () {
                            return n < 0 ? e.goPrev(i) : e.goNext(i)
                        }, s), r += this.animationSpeed / i
                    }
                }
                , animationEnd: function () {
                    this.onSlideChange !== c && console.warn("onSlideChange deprecated, please use @after-slide-change"), this.onSlideChange(this.currentIndex), this.$emit("after-slide-change", this.currentIndex)
                }
                , handleMouseup: function () {
                    this.mousedown = !1, this.dragOffset = 0
                }
                , handleMousedown: function (t) {
                    t.touches || t.preventDefault(), this.mousedown = !0, this.dragStartX = "ontouchstart" in window ? t.touches[0].clientX : t.clientX
                }
                , handleMousemove: function (t) {
                    if (this.mousedown) {
                        var e = "ontouchstart" in window ? t.touches[0].clientX : t.clientX
                            , n = this.dragStartX - e;
                        this.dragOffset = n, this.dragOffset > this.minSwipeDistance ? (this.handleMouseup(), this.goNext()) : this.dragOffset < -this.minSwipeDistance && (this.handleMouseup(), this.goPrev())
                    }
                }
                , attachMutationObserver: function () {
                    var t = this
                        , e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    if (e) {
                        var n = {
                            attributes: !0
                            , childList: !0
                            , characterData: !0
                        };
                        this.mutationObserver = new e(function () {
                            t.$nextTick(function () {
                                t.computeData()
                            })
                        }), this.$el && this.mutationObserver.observe(this.$el, n)
                    }
                }
                , detachMutationObserver: function () {
                    this.mutationObserver && this.mutationObserver.disconnect()
                }
                , getSlideCount: function () {
                    return void 0 !== this.$slots.default ? this.$slots.default.filter(function (t) {
                        return void 0 !== t.tag
                    }).length : 0
                }
                , calculateAspectRatio: function (t, e) {
                    return Math.min(t / e)
                }
                , computeData: function (t) {
                    this.total = this.getSlideCount(), (t || this.currentIndex >= this.total) && (this.currentIndex = parseInt(this.startIndex) > this.total - 1 ? this.total - 1 : parseInt(this.startIndex)), this.viewport = this.$el.clientWidth
                }
                , setSize: function () {
                    this.$el.style.cssText += "height:" + this.slideHeight + "px;", this.$el.childNodes[0].style.cssText += "width:" + this.slideWidth + "px; height:" + this.slideHeight + "px;"
                }
            }
            , mounted: function () {
                this.computeData(!0), this.attachMutationObserver(), this.$isServer || (window.addEventListener("resize", this.setSize), "ontouchstart" in window ? (this.$el.addEventListener("touchstart", this.handleMousedown), this.$el.addEventListener("touchend", this.handleMouseup), this.$el.addEventListener("touchmove", this.handleMousemove)) : (this.$el.addEventListener("mousedown", this.handleMousedown), this.$el.addEventListener("mouseup", this.handleMouseup), this.$el.addEventListener("mousemove", this.handleMousemove)))
            }
            , beforeDestroy: function () {
                this.$isServer || (this.detachMutationObserver(), "ontouchstart" in window ? this.$el.removeEventListener("touchmove", this.handleMousemove) : this.$el.removeEventListener("mousemove", this.handleMousemove), window.removeEventListener("resize", this.setSize))
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = {
            props: {
                autoplay: {
                    type: Boolean
                    , default: !1
                }
                , autoplayTimeout: {
                    type: Number
                    , default: 2e3
                }
                , autoplayHoverPause: {
                    type: Boolean
                    , default: !0
                }
            }
            , data: function () {
                return {
                    autoplayInterval: null
                }
            }
            , destroyed: function () {
                this.pauseAutoplay(), this.$isServer || (this.$el.removeEventListener("mouseenter", this.pauseAutoplay), this.$el.removeEventListener("mouseleave", this.startAutoplay))
            }
            , methods: {
                pauseAutoplay: function () {
                    this.autoplayInterval && (this.autoplayInterval = clearInterval(this.autoplayInterval))
                }
                , startAutoplay: function () {
                    var t = this;
                    this.autoplay && (this.autoplayInterval = setInterval(function () {
                        "ltr" === t.dir ? t.goPrev() : t.goNext()
                    }, this.autoplayTimeout))
                }
            }
            , mounted: function () {
                !this.$isServer && this.autoplayHoverPause && (this.$el.addEventListener("mouseenter", this.pauseAutoplay), this.$el.addEventListener("mouseleave", this.startAutoplay)), this.startAutoplay()
            }
        };
        e.default = n
    }, function (t, e, n) {
        n(11);
        var i = n(7)(n(13), n(14), "data-v-43e93932", null);
        t.exports = i.exports
    }, function (t, e, n) {
        var i = n(12);
        "string" == typeof i && (i = [[t.id, i, ""]]), i.locals && (t.exports = i.locals);
        n(5)("06c66230", i, !0)
    }, function (t, e, n) {
        e = t.exports = n(4)(), e.push([t.id, ".carousel-3d-controls[data-v-43e93932]{position:absolute;top:50%;height:0;margin-top:-30px;left:0;width:100%;z-index:1000}.next[data-v-43e93932],.prev[data-v-43e93932]{width:60px;position:absolute;z-index:1010;font-size:60px;height:60px;line-height:60px;color:#333;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;top:0}.next[data-v-43e93932]:hover,.prev[data-v-43e93932]:hover{cursor:pointer;opacity:.7}.prev[data-v-43e93932]{left:10px;text-align:left}.next[data-v-43e93932]{right:10px;text-align:right}.disabled[data-v-43e93932],.disabled[data-v-43e93932]:hover{opacity:.2;cursor:default}", ""])
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            name: "controls"
            , props: {
                width: {
                    type: [String, Number]
                    , default: 50
                }
                , height: {
                    type: [String, Number]
                    , default: 60
                }
                , prevHtml: {
                    type: String
                    , default: "&lsaquo;"
                }
                , nextHtml: {
                    type: String
                    , default: "&rsaquo;"
                }
            }
            , data: function () {
                return {
                    parent: this.$parent
                }
            }
        }
    }, function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "carousel-3d-controls"
                }, [n("a", {
                    staticClass: "prev"
                    , class: {
                        disabled: !t.parent.isPrevPossible
                    }
                    , style: "width: " + t.width + "px; height: " + t.height + "px; line-height: " + t.height + "px;"
                    , attrs: {
                        href: "#"
                    }
                    , on: {
                        click: function (e) {
                            e.preventDefault(), t.parent.goPrev()
                        }
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: t._s(t.prevHtml)
                    }
                })]), t._v(" "), n("a", {
                    staticClass: "next"
                    , class: {
                        disabled: !t.parent.isNextPossible
                    }
                    , style: "width: " + t.width + "px; height: " + t.height + "px; line-height: " + t.height + "px;"
                    , attrs: {
                        href: "#"
                    }
                    , on: {
                        click: function (e) {
                            e.preventDefault(), t.parent.goNext()
                        }
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: t._s(t.nextHtml)
                    }
                })])])
            }
            , staticRenderFns: []
        }
    }, function (t, e, n) {
        n(16);
        var i = n(7)(n(18), n(61), null, null);
        t.exports = i.exports
    }, function (t, e, n) {
        var i = n(17);
        "string" == typeof i && (i = [[t.id, i, ""]]), i.locals && (t.exports = i.locals);
        n(5)("1dbacf8a", i, !0)
    }, function (t, e, n) {
        e = t.exports = n(4)(), e.push([t.id, ".carousel-3d-slide{position:absolute;opacity:0;visibility:hidden;overflow:hidden;top:0;border-radius:1px;border-color:#000;border-color:rgba(0,0,0,.4);border-style:solid;background-size:cover;background-color:#ccc;display:block;margin:0;box-sizing:border-box;text-align:left}.carousel-3d-slide img{width:100%}.carousel-3d-slide.current{opacity:1!important;visibility:visible!important;transform:none!important;z-index:999}", ""])
    }, function (t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(19)
            , o = i(r)
            , s = n(39)
            , a = i(s);
        e.default = {
            name: "slide"
            , props: {
                index: {
                    type: Number
                }
            }
            , data: function () {
                return {
                    parent: this.$parent
                    , styles: {}
                    , zIndex: 999
                }
            }
            , computed: {
                isCurrent: function () {
                    return this.index === this.parent.currentIndex
                }
                , leftIndex: function () {
                    return this.getSideIndex(this.parent.leftIndices)
                }
                , rightIndex: function () {
                    return this.getSideIndex(this.parent.rightIndices)
                }
                , slideStyle: function () {
                    var t = {};
                    if (!this.isCurrent) {
                        var e = this.leftIndex
                            , n = this.rightIndex;
                        (e >= 0 || n >= 0) && (t = e >= 0 ? this.calculatePosition(e, !0, this.zIndex) : this.calculatePosition(n, !1, this.zIndex), t.opacity = 1, t.visibility = "visible"), this.parent.hasHiddenSlides && (this.matchIndex(this.parent.leftOutIndex) ? t = this.calculatePosition(this.parent.leftIndices.length - 1, !1, this.zIndex) : this.matchIndex(this.parent.rightOutIndex) && (t = this.calculatePosition(this.parent.rightIndices.length - 1, !0, this.zIndex)))
                    }
                    return (0, a.default)(t, {
                        "border-width": this.parent.border + "px"
                        , width: this.parent.slideWidth + "px"
                        , height: this.parent.slideHeight + "px"
                        , transition: " transform " + this.parent.animationSpeed + "ms,                opacity " + this.parent.animationSpeed + "ms,                visibility " + this.parent.animationSpeed + "ms"
                    })
                }
                , computedClasses: function () {
                    var t;
                    return t = {}, (0, o.default)(t, "left-" + (this.leftIndex + 1), this.leftIndex >= 0), (0, o.default)(t, "right-" + (this.rightIndex + 1), this.rightIndex >= 0), (0, o.default)(t, "current", this.isCurrent), t
                }
            }
            , methods: {
                getSideIndex: function (t) {
                    var e = this
                        , n = -1;
                    return t.forEach(function (t, i) {
                        e.matchIndex(t) && (n = i)
                    }), n
                }
                , matchIndex: function (t) {
                    return t >= 0 ? this.index === t : this.parent.total + t === this.index
                }
                , calculatePosition: function (t, e, n) {
                    var i = this.parent.disable3d ? 0 : parseInt(this.parent.inverseScaling) + 100 * (t + 1)
                        , r = this.parent.disable3d ? 0 : parseInt(this.parent.perspective)
                        , o = "auto" === this.parent.space ? parseInt((t + 1) * (this.parent.width / 1.5), 10) : parseInt((t + 1) * this.parent.space, 10)
                        , s = e ? "translateX(" + o + "px) translateZ(-" + i + "px) rotateY(-" + r + "deg)" : "translateX(-" + o + "px) translateZ(-" + i + "px) rotateY(" + r + "deg)"
                        , a = "auto" === this.parent.space ? 0 : parseInt((t + 1) * this.parent.space);
                    return {
                        transform: s
                        , top: a
                        , zIndex: n - (Math.abs(t) + 1)
                    }
                }
                , goTo: function () {
                    this.isCurrent ? this.parent.onMainSlideClick() : this.parent.clickable === !0 && this.parent.goFar(this.index)
                }
            }
        }
    }, function (t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.__esModule = !0;
        var r = n(20)
            , o = i(r);
        e.default = function (t, e, n) {
            return e in t ? (0, o.default)(t, e, {
                value: n
                , enumerable: !0
                , configurable: !0
                , writable: !0
            }) : t[e] = n, t
        }
    }, function (t, e, n) {
        t.exports = {
            default: n(21)
            , __esModule: !0
        }
    }, function (t, e, n) {
        n(22);
        var i = n(25).Object;
        t.exports = function (t, e, n) {
            return i.defineProperty(t, e, n)
        }
    }, function (t, e, n) {
        var i = n(23);
        i(i.S + i.F * !n(33), "Object", {
            defineProperty: n(29).f
        })
    }, function (t, e, n) {
        var i = n(24)
            , r = n(25)
            , o = n(26)
            , s = n(28)
            , a = n(38)
            , u = "prototype"
            , l = function (t, e, n) {
                var c, d, h, f = t & l.F
                    , p = t & l.G
                    , v = t & l.S
                    , x = t & l.P
                    , g = t & l.B
                    , m = t & l.W
                    , y = p ? r : r[e] || (r[e] = {})
                    , b = y[u]
                    , S = p ? i : v ? i[e] : (i[e] || {})[u];
                p && (n = e);
                for (c in n) d = !f && S && void 0 !== S[c], d && a(y, c) || (h = d ? S[c] : n[c], y[c] = p && "function" != typeof S[c] ? n[c] : g && d ? o(h, i) : m && S[c] == h ? function (t) {
                    var e = function (e, n, i) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e, n)
                            }
                            return new t(e, n, i)
                        }
                        return t.apply(this, arguments)
                    };
                    return e[u] = t[u], e
                }(h) : x && "function" == typeof h ? o(Function.call, h) : h, x && ((y.virtual || (y.virtual = {}))[c] = h, t & l.R && b && !b[c] && s(b, c, h)))
            };
        l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l
    }, function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function (t, e) {
        var n = t.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = n)
    }, function (t, e, n) {
        var i = n(27);
        t.exports = function (t, e, n) {
            if (i(t), void 0 === e) return t;
            switch (n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function (n, i, r) {
                    return t.call(e, n, i, r)
                }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, e, n) {
        var i = n(29)
            , r = n(37);
        t.exports = n(33) ? function (t, e, n) {
            return i.f(t, e, r(1, n))
        } : function (t, e, n) {
            return t[e] = n, t
        }
    }, function (t, e, n) {
        var i = n(30)
            , r = n(32)
            , o = n(36)
            , s = Object.defineProperty;
        e.f = n(33) ? Object.defineProperty : function (t, e, n) {
            if (i(t), e = o(e, !0), i(n), r) try {
                return s(t, e, n)
            }
            catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function (t, e, n) {
        var i = n(31);
        t.exports = function (t) {
            if (!i(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, e, n) {
        t.exports = !n(33) && !n(34)(function () {
            return 7 != Object.defineProperty(n(35)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e, n) {
        t.exports = !n(34)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            }
            catch (t) {
                return !0
            }
        }
    }, function (t, e, n) {
        var i = n(31)
            , r = n(24).document
            , o = i(r) && i(r.createElement);
        t.exports = function (t) {
            return o ? r.createElement(t) : {}
        }
    }, function (t, e, n) {
        var i = n(31);
        t.exports = function (t, e) {
            if (!i(t)) return t;
            var n, r;
            if (e && "function" == typeof (n = t.toString) && !i(r = n.call(t))) return r;
            if ("function" == typeof (n = t.valueOf) && !i(r = n.call(t))) return r;
            if (!e && "function" == typeof (n = t.toString) && !i(r = n.call(t))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {
                enumerable: !(1 & t)
                , configurable: !(2 & t)
                , writable: !(4 & t)
                , value: e
            }
        }
    }, function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e)
        }
    }, function (t, e, n) {
        t.exports = {
            default: n(40)
            , __esModule: !0
        }
    }, function (t, e, n) {
        n(41), t.exports = n(25).Object.assign
    }, function (t, e, n) {
        var i = n(23);
        i(i.S + i.F, "Object", {
            assign: n(42)
        })
    }, function (t, e, n) {
        "use strict";
        var i = n(43)
            , r = n(58)
            , o = n(59)
            , s = n(60)
            , a = n(46)
            , u = Object.assign;
        t.exports = !u || n(34)(function () {
            var t = {}
                , e = {}
                , n = Symbol()
                , i = "abcdefghijklmnopqrst";
            return t[n] = 7, i.split("").forEach(function (t) {
                e[t] = t
            }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != i
        }) ? function (t, e) {
            for (var n = s(t), u = arguments.length, l = 1, c = r.f, d = o.f; u > l;)
                for (var h, f = a(arguments[l++]), p = c ? i(f).concat(c(f)) : i(f), v = p.length, x = 0; v > x;) d.call(f, h = p[x++]) && (n[h] = f[h]);
            return n
        } : u
    }, function (t, e, n) {
        var i = n(44)
            , r = n(57);
        t.exports = Object.keys || function (t) {
            return i(t, r)
        }
    }, function (t, e, n) {
        var i = n(38)
            , r = n(45)
            , o = n(49)(!1)
            , s = n(53)("IE_PROTO");
        t.exports = function (t, e) {
            var n, a = r(t)
                , u = 0
                , l = [];
            for (n in a) n != s && i(a, n) && l.push(n);
            for (; e.length > u;) i(a, n = e[u++]) && (~o(l, n) || l.push(n));
            return l
        }
    }, function (t, e, n) {
        var i = n(46)
            , r = n(48);
        t.exports = function (t) {
            return i(r(t))
        }
    }, function (t, e, n) {
        var i = n(47);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == i(t) ? t.split("") : Object(t)
        }
    }, function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1)
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, e, n) {
        var i = n(45)
            , r = n(50)
            , o = n(52);
        t.exports = function (t) {
            return function (e, n, s) {
                var a, u = i(e)
                    , l = r(u.length)
                    , c = o(s, l);
                if (t && n != n) {
                    for (; l > c;)
                        if (a = u[c++], a != a) return !0
                }
                else
                    for (; l > c; c++)
                        if ((t || c in u) && u[c] === n) return t || c || 0; return !t && -1
            }
        }
    }, function (t, e, n) {
        var i = n(51)
            , r = Math.min;
        t.exports = function (t) {
            return t > 0 ? r(i(t), 9007199254740991) : 0
        }
    }, function (t, e) {
        var n = Math.ceil
            , i = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
        }
    }, function (t, e, n) {
        var i = n(51)
            , r = Math.max
            , o = Math.min;
        t.exports = function (t, e) {
            return t = i(t), t < 0 ? r(t + e, 0) : o(t, e)
        }
    }, function (t, e, n) {
        var i = n(54)("keys")
            , r = n(56);
        t.exports = function (t) {
            return i[t] || (i[t] = r(t))
        }
    }, function (t, e, n) {
        var i = n(25)
            , r = n(24)
            , o = "__core-js_shared__"
            , s = r[o] || (r[o] = {});
        (t.exports = function (t, e) {
            return s[t] || (s[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: i.version
            , mode: n(55) ? "pure" : "global"
            , copyright: "?? 2018 Denis Pushkarev (zloirock.ru)"
        })
    }, function (t, e) {
        t.exports = !0
    }, function (t, e) {
        var n = 0
            , i = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
        }
    }, function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function (t, e) {
        e.f = {}.propertyIsEnumerable
    }, function (t, e, n) {
        var i = n(48);
        t.exports = function (t) {
            return Object(i(t))
        }
    }, function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "carousel-3d-slide"
                    , class: t.computedClasses
                    , style: t.slideStyle
                    , on: {
                        click: function (e) {
                            t.goTo()
                        }
                    }
                }, [t._t("default", null, {
                    index: t.index
                    , isCurrent: t.isCurrent
                    , leftIndex: t.leftIndex
                    , rightIndex: t.rightIndex
                })], 2)
            }
            , staticRenderFns: []
        }
    }, function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "carousel-3d-container"
                    , style: {
                        height: this.slideHeight + "px"
                    }
                }, [n("div", {
                    staticClass: "carousel-3d-slider"
                    , style: {
                        width: this.slideWidth + "px"
                        , height: this.slideHeight + "px"
                    }
                }, [t._t("default")], 2), t._v(" "), t.controlsVisible ? n("controls", {
                    attrs: {
                        "next-html": t.controlsNextHtml
                        , "prev-html": t.controlsPrevHtml
                        , width: t.controlsWidth
                        , height: t.controlsHeight
                    }
                }) : t._e()], 1)
            }
            , staticRenderFns: []
        }
    }])
});

