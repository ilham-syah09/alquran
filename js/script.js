$.getJSON("https://api-alquranid.herokuapp.com/surah", function (result) {
    let menu = result.data;
    $.each(menu, function (i, result) {
        $("#list-surah").append(
            `
              <div class="col-md-3 mb-2">
                <div class="card bg-success">
                  <div class="card-body">
                    <h4 class="card-title text-white text-end">` +
            result.asma +
            `</h4>
                    <h5 class="card-subtitle text-white mb-2">` +
            result.nama +
            `</h5>
                    <p class="card-subtitle mb-2 text-white fst-italic">` +
            result.arti +
            `</p>
                    <div class="col-sm-4 col-sm-offset-4">
                      <audio controls style="width: 230px;">
                        <source src="` +
            result.audio +
            `">
                      </audio>
                    </div>
                  </div>
                </div>
              </div>
              `
        );
    });
});

$('#search-button').on('click', function () { 
  $('#list-surah').html('');

  $.ajax({
    type: "GET",
    url: "https://api-alquranid.herokuapp.com/surah/search/" + $('#search-input').val(),
    dataType: "json",
    success: function (result) {
      if (result.data != 0) {
        let menu = result.data;
        $.each(menu, function (i, result) {
          $('#list-surah').append(`
          <div class="col-md-3 mb-2">
            <div class="card bg-success">
              <div class="card-body">
                <h4 class="card-title text-white text-end">` +
        result.asma +
        `</h4>
                <h5 class="card-subtitle text-white mb-2">` +
        result.nama +
        `</h5>
                <p class="card-subtitle mb-2 text-white fst-italic">` +
        result.arti +
        `</p>
                <div class="col-sm-4 col-sm-offset-4">
                  <audio controls style="width: 230px;">
                    <source src="` +
        result.audio +
        `">
                  </audio>
                </div>
              </div>
            </div>
          </div>
          `)
        })

        $('#search-input').val('');
        console.log(result);
      } else {
        console.log(result)
        $('#list-surah').html(`<h1 class="text-center">Surah Not Found!</h1>`)
      }
    }
  });
 })

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
})

$('#list-surah').on('click', '.see-detail', function () {
var id = $(this).data('id');
  $.ajax({
    type: "GET",
    url: "https://api-alquranid.herokuapp.com/surah/" + id,
    dataType: "json",
    success: function (result) {
      if (result.status === "success") {
        $('.modal-body').html(`
        <div class="container-fluid">
          <div class="row">
            <div class="col-md">
            <h4 class="text-dark text-end">` + result.id + `</h4>
            </div>
          </div>
        </div>
        `);
        console.log($(this).data('id'));
        console.log('data ada')
      } else {
        console.log('data tidak ada')
      }
    }
  });
})

// https://api-alquranid.herokuapp.com/surah/search/