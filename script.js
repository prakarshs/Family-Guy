var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x - 5 + "px";
    cursor.style.top = dets.y - 2 + "px";
    cursorBlur.style.left = dets.x - 50 + "px";
    cursorBlur.style.top = dets.y - 50 + "px";
})

var navItems = document.querySelectorAll("#nav-txt a");
navItems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale = 3;
        cursor.style.border = "1px solid #FED54A";
        cursor.style.backgroundColor = "transparent";
        cursor.style.transition = "all ease 0.1s"
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #FED54A";
        cursor.style.backgroundColor = "#FED54A";
        cursor.style.transition = "none"
    })
     
});

function scrollDown(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

gsap.to("#nav", {
    backgroundColor: "#191970",
    paddingTop: 3,
    paddingBottom: 3,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        scrub: 2
    }

})
gsap.to("img", {
    width: 100,
    height: 60,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        scrub: 3
    }
})

gsap.to("#main", {
    backgroundColor: "#191970",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -20%",
        end: "top -80%",
        scrub: 3
    }
})