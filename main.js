

$('#generate').on('click', function(e){
  e.preventDefault()

  $.ajax({
    url: "http://ron-swanson-quotes.herokuapp.com/v2/quotes/1",
    Access-Control-Allow-Origin:* 
    dataType: "json",
    method: "GET",
  }).done(function(data){
    let randomQuote = data
    console.log(randomQuote);

//Get the gif
$.ajax({
  //it goes: endpoint +?q= + search term (no spaces) + &api_key= + whatever api key Spotify gives you
  url: "https://crossorigin.me/https://api.giphy.com/v1/gifs/search?q=ron_swanson&api_key=99039d219bc44543b8e7588b14751ce3",
  dataType:"json",
  method: "GET",

}).done(function(data) {
  //in order to access the data, it has to be 'data.data', instead of just 'data'
    console.log(data.data);

    //as for right now, generating a random number to be the iterator
    //will later specify request for data sample bigger than 25 -- giphy's default (unless it gets too slow)
    let i = [Math.floor(Math.random() * 25) + 1]
    let randomGif = data.data[i].images.downsized.url

    console.log(randomGif);

    //append them to the paaaaage

      //ACTUALLY append to li
      //close li

        let template = `
        <ul class=quotesAndImage>
        <li>
          <img class=image src="${randomGif}">
          </li>
          <li class=quote>${randomQuote}</li>
          </ul>`

        let wrapper = $('#wrapper');

        wrapper.html(template);
        //append to li

      })

  });

});
