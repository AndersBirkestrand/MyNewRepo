// $("document").ready(function(){
//     $(".classA").css("background-color", "green");
//     $("p").css("font-size", "20px");
//     $("para4").css("padding-left", "10px")
// })

// $("document").ready(function() {
//     $("[class]").css("background-color", "green");
//     $("div > p").css("font-size", "20px");
//     $("p[lang]:even").css("padding-left", "10px");
//     $("p:even[lang]").css("padding-top", "10px");
// })

// $("document").ready(function() {
//     $("p:contains('Th'):first-of-type").css("background-color", "yellow");
// })

// $("document").ready(function() {
//     let elem = $("#para3");
//     elem.prev().prev().css("background-color", "yellow");   // HUSK PREVPREV for 2 tilbake
//     elem.next().css("background-color", "blue");
// })

// $("document").ready(function() {
//     $("#button1").click(function() {
//         $("p[lang]").replaceWith('<img src="https://cdn.pixabay.com/photo/2018/04/13/16/13/pixel-3316924_960_720.png"></img>')
//     })
// });

// $("document").ready(function() {
//     $("#button2").click(function() {
//         $(this).replaceWith("<button id='button2' onclick='button2Click()'>empty button </button>");
//     })
// });

// $("document").ready(function() {
//     $("#button3").click(function() {
//         $("p").append($("#para1").text());
//     })
// });
//     $("#showButton").click(function() {
//         $("p").show("slow")
//     });
//     $("#hideButton").click(function() {
//         $("p").hide("slow", "linear")


// $("#onButton").click(function() {
//     $("p[class]").hide();
// });

// $("document").ready(function() {
//     $("#onButton").click(function() {
//         $("p").hide();
//     })
// });

// $("document").ready(function() {
//     $("#offButton").click(function() {
//         $("p").show();
//     })
// });


// $("document").ready(function() {
//     $("#button1").dblclick(function() {
//         $(this).fadeTo("fast", "0.4");
//     });
// });

// $("document").ready(function() {
//     $("#button1").hover(function() {
//         $(this).slideUp()
//     })
// })

// $(function() {
//     $("#button1").click(function() {
//         $(this).animate({width: '200px'}, 5000)
//     });
// });

// $(function() {
//     $(".list-group-item").click(function() {
//         $(this).css("color", "green");
//     });
// });

// MODULE 4.2 ||  MODULE 4.2 ||  MODULE 4.2 ||  MODULE 4.2 ||  MODULE 4.2 ||  MODULE 4.2 ||  


// $(document).ready(function(){
//     $("#liveToastBtn").click(function(){
//         $("#liveToast").toast("show");
//     });
// });

// 4.2 Assignment || 4.2 Assignment || 4.2 Assignment || 4.2 Assignment || 4.2 Assignment || 

$(document).ready(function() {
    $("#btn1").click(function() {
        $(".toast").toast("show");
    });
});



// $(document).ready(function() {
//     // Initialize the toast
//     $(".toast").toast({
//         delay: 3000,
//         autohide: true
//     });

//     // Show toast on button click
//     $("#btn1").click(function() {
//         $(".toast").toast("show");
//     });
// });