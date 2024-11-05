// var request = new XMLHttpRequest();

// request.open('GET', 'https://hplussport.com/api/products');

// request.onload = function() {
//    var response = request.response
//    var parsedData = JSON.parse(response);
//    console.log(parsedData);
// }

// request.send();

// $.ajax ({
//     url: 'https://api.giphy.com/v1/gifs/random?api_key=evS9QooZd9Efqbrz3wLyMsvsQzGxn638&rating=g',
//     success: function(response) {
//         console.log(response)
//         var originalUrl = response.data.images.original.url;
//         $("body").append("<img src = '" + originalUrl + "'></img>")
//     }
// })

// $.ajax ({
//     url: 'https://api.github.com/repos',
//     success: function(response) {
//         console.log(response)
//     }
// })

// $.ajax({
//     url: 'https://api.github.com/user',
//     type: 'GET',
//     headers: {
//         'Authorization': 'token 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',
//         'Accept': 'application/vnd.github.v3+json' // Use this to specify the API version
//     },
//     success: function(data) {
//         console.log(data); // Handle the response data here
//     },
//     error: function(error) {
//         console.error('Error:', error);
//     }
// });

$(document).ready(function() {
    $("#liveToastBtn").click(function() {
        $(".toast").toast("show");
    });
});
