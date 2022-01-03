$.getJSON("https://api-alquranid.herokuapp.com/surah", function (result) {
    let menu = result.data;
    $.each(menu, function (i, result) {
        console.log(result);
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

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
})