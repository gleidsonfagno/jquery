// instacia jquery e evita conflitos
// seletores simples
// jQuery( function($){

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();

  let titulos = $("h4"); //seletor de tag

  let itens = $(".featured-item"); //seletor class

  let destaque = $("#featured"); // seletor id

  // console.log(titulos.first());

  //        configuracao de Produtos adicionando butao dark

  $(".featured-item a").addClass("btn btn-dark stretch-link");

  $(".featured-items:first h4").append(
    '<span class="badge bg-secondary">Novo título </span>'
  );

  // $('.featured-items:first h4').start('<span class="badge bg-secondary">Novo título </span>')

  // $('.featured-items:first h4').html('<span class="badge bg-secondary">Novo título </span>')

  // $('.featured-items:first h4').addClass('active')

  // $('.featured-items:first h4').removeClass('active')

  // $('.featured-items:first h4').toggleClass('active')

  // $('.featured-items:first h4').hide()

  // $('.featured-items:first h4').fadeIn(2000)

  //  $('.featured-items:first h4').fadeOut(2000)

  // $('.featured-items:first h4').show()

  // $('.featured-items:first h4').fade()

  // $('.featured-items:first h4').css('color', '#ff0000')

  //  $('.featured-items:first h4').css('background', '#ccc')

  // $('.featured-items:first h4').css({
  //        'background':  '#ff0',
  //        'color': '#f00',
  //        'font-weight': '100'
  // })

  $(".featured-item h4").dblclick(function () {
    $(this).css({
      background: "#ff0",
      color: "#f00",
      "font-weight": "100",
    });
  });

  // manipulacao de eventos

  // $('.featured-item').hover(function(){

  //        console.log($(this).find('h4').text());

  //    },
  //   function(){

  //       console.log($(this).find('h4').text());
  //    + " " +console.log($(this).find('h6').text());
  //    }
  //   )

  // $('.featured-item').mouseleave(function(){

  //        console.log($(this).find('h4').text());

  //    })

  //    $('.featured-item').mouseenter(function(){

  //        console.log($(this).find('h4').text());

  //    })

  $(".featured-item a").on("blur", function (event) {
    event.preventDefault();

    alert("Produto esgotado");
  });

  // calback

  $(".featured-item:nth(1)")
    .hide(500, function () {
      // este e o calbeck

      console.log($(this).find("h4").text() + "esgotado");
    })
    .show(2000, function () {
      console.log($(this).find("h4").text() + "em estoque");
    });

  // animaceoes

  const duracao = 1000;

  $(".featured-item:nth(0)")
    .hide(duracao)
    .show(duracao)
    // .fedeOut(duracao)
    .fadeIn(duracao)
    .toggle(duracao)
    .toggle(duracao);

  $("#form-submit").on("click", function (e) {
    e.preventDefault();

    if ($("#email").val() != "") {
      $("#email").animate(
        {
          opacity: "toggle",
          top: "-50",
        },
        500,
        function () {
          console.log($(this).val());
        }
      );
    }
  });

  /*
   * Ouvinte de eventos .nav-modal-open
   */

  $(".nav-modal-open").on("click", function (e) {
    e.preventDefault();

    let elem = $(this).attr("rel");

    $(".modal-body").html($("#" + elem).html());

    $(".modal-header h5.modal-title").html($(this).text());

    let myModal = new bootstrap.Modal($("#modelId"));

    myModal.show();
  });

  /*
   * TODO: incrementar a validação
   * - checar se o nome é válido (mais de 2 caracteres)
   * - checar se o email é válido com ao menos um "@" e "."
   * - checar se o cpf é válido com regex
   */
  function validate(elem) {
    if (elem.val() == "") {
      console.log("o campo de " + elem.attr("name") + " é obrigatório");

      elem.parent().find(".text-muted").show();

      elem.addClass("invalid");

      return false;
    } else {
      elem.parent().find(".text-muted").hide();
      elem.removeClass("invalid");
    }
  }

  $("body").on("submit", ".modal-body .form", function (e) {
    e.preventDefault();

    const inputName = $("#nome");
    const inputEmail = $("#email");

    validate(inputName);
    validate(inputEmail);

    if (inputEmail.hasClass("invalid") || inputName.hasClass("invalid")) {
      console.log("verificar campos obrigatórios");
      return false;
    } else {
      $(this).submit();
    }
  });

  $("body").on("blur", "#nome", function () {
    validate($(this));
  });

  $("body").on("blur", "#email", function () {
    validate($(this));
  });

  $("body").on("focus", "#data", function () {
    $(this).datepicker();
  });

  $("body").on("blur", "#date", function () {
    validate($(this));
    $(this).mask("00/00/0000");
  });

  $("body").on("blur", "#time", function () {
    validate($(this));
    $(this).mask("00:00:");
  });

  $("body").on("blur", "#cep", function () {
    validate($(this));
    $("#cep").mask("00000-000");
  });

  $("body").on("blur", "#phone", function () {
    validate($(this));
    $("#phone").mask("0000-0000");
  });

  $("body").on("blur", "#cpf", function () {
    validate($(this));
    $("#cpf").mask("000.000.000-00", { reverse: true });
  });
});

// console.log($('h4').text('fala grego'));
