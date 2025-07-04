import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Lenis from "@studio-freight/lenis";




const smoothScroll = ()=>{
    
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };

}















// const smoothScroll = () => {


//   gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

// // create the scrollSmoother before your scrollTriggers
// ScrollSmoother.create({
//   smooth:1, // how long (in seconds) it takes to "catch up" to the native scroll position
//   effects: true, // looks for data-speed and data-lag attributes on elements
//   smoothTouch: 1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
//   pin: true
// });




// ScrollTrigger.create({
//   trigger: ".page-title",
// //   pin: true,
//   start: "top",
// //   end: "+=300",
//   markers: true
// });


// }

export default smoothScroll