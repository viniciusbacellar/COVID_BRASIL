$(function () {
  $(".filtro").keyup(function () {
    var texto = $(this).val();
    $(".bloco").each(function () {
      var resultado = $(this).text().toUpperCase().indexOf(' ' + texto.toUpperCase());
      const div = document.querySelectorAll(".div")
      div.forEach((item) => {
        if (resultado < 0) {
          $(item).removeClass('px-3')
          $(this).fadeOut();
        } else {
          $(item).addClass('px-3')
          $(this).fadeIn();
        }
      })
    });
  });
});