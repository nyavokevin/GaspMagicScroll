console.log($("#fullpage"))

const element = $("#fullpage")

jQuery(document).ready(function(){
    jQuery("#fullpage").fullpage({
        anchors: ['firstpage','secondpage','thirdpage'],
        menu: "#menu",
        autoScrolling: false,

    })
})

//init scroll magic
const controller  = new ScrollMagic.Controller()

//Tween - section 2
var scene = new ScrollMagic.Scene({
    triggerElement: "#section2"
})

//animate color
.setTween("#bg img",{
    maxWidth: "1200px",
    top: "30%",
    left: "80%",
    opacity: 0.25
})

.addTo(controller)

var scene = new ScrollMagic.Scene({
    triggerElement: "#section3",
    duration: 300
}) 

.setTween("#bg img",{
    top: "20%"
})

.addTo(controller)