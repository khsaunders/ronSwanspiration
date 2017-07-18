console.log("connected");


$('#generate').on('click', function(e){
  e.preventDefault()


$.ajax({
  //it goes: endpoint +?q= + search term (no spaces) + &api_key= + whatever api key Spotify gives you
  url: "https://api.giphy.com/v1/gifs/search?q=ron_swanson&api_key=99039d219bc44543b8e7588b14751ce3",
  dataType:"json",
  method: "GET",

}).done(function(data) {
  //in order to access the data, it has to be 'data.data', instead of just 'data'
    console.log(data.data);

    //as for right now, generating a random number to be the iterator
    //will later specify request for data sample bigger than 25 -- giphy's default (unless it gets too slow)
    let i = [Math.floor(Math.random() * 25) + 1]
    let randomGif = data.data[i].images.downsized.url
    
    //append them to the paaaaage
      $('#image').append("<img src='" + randomGif + "'/>");

  });
});
