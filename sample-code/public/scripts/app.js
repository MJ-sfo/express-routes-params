console.log("Sanity Check: JS is working!");

$(document).ready(function(){


  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: handleSuccess,
    error: handleError
  });


});




function handleSuccess(json) {
  // takes an array of albums and renders them as cards
  var albums = json;
  var albumHtmlString = '';
  var albumDiv = $('#albumTarget');
  albums.forEach(function(album){
    albumHtmlString = templateAlbum(album);
    albumDiv.append(albumHtmlString);
  });
}

function templateAlbum(albumInfo){
  return `<div class="card">
      <div class="card-content">
        <span class="card-title">${albumInfo.title}</span>
        <p>by ${albumInfo.artist}</p>
      </div>
    </div>`
}

function handleError(e) {
  console.log('uh oh');
  $('#albumTarget').text('Failed to load albums, is the server working?');
}
