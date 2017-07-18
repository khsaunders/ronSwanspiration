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

    // for (let i = 0; i < data.data.length; i++){
      // let pulledGifs = data.data[i].images.downsized.url
      // let randomGif =  [Math.floor(Math.random() * pulledGifs.length)]
      let randomGif = data.data[3].images.downsized.url
      $('#image').append("<img src='" + randomGif + "'/>");
      console.log(data.data[1].images.downsized.url);
    // }
  });
});
