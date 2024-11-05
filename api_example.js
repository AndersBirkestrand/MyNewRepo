$.ajax ({
    url: 'https://api.github.com/repos/AndersBirkestrand/MyNewRepo',
    success: function(response) {
        console.log(response)
    }
});