// $(document).ready(function(){

// })

$(function(){
    $("#hideme").click(function(){
        $("p").hide()
    })
    $("#showme").click(function(){
        $("p").show()
    })
    $("#addClassBtn").click(function(){
        $("p").addClass("bg-red")
    })
    $("#removeClassBtn").click(function(){
        $("p").removeClass("bg-red")
    })
})