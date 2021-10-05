const img = document.querySelector('img');
        
fetch('https://api.giphy.com/v1/gifs/translate?api_key=6kUbEqZuFOc4NFNuFAB2HGSu7yvLF9uq&s=cats', {mode: 'cors'})
.then(function(response) {
    return response.json();
})
.then(function(response) {
    img.src = response.data.images.original.url;
});

const searchColor = document.getElementById('color-searcher')
const rainbow = ['red', 'teal', 'yellow', 'orange', 'chocolate', 'green', 'blue', 'pink', 'purple']