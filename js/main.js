$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     if(document.getElementById("default-select")){
          $('select').niceSelect();
    };

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });


    $(document).ready(function() {

    $('html, body').hide();

        if (window.location.hash) {

        setTimeout(function() {

        $('html, body').scrollTop(0).show();

        $('html, body').animate({

        scrollTop: $(window.location.hash).offset().top

        }, 1000)

        }, 0);

        }

        else {

        $('html, body').show();

        }

    });  

 });

function calcular() {
    
    var valor = document.getElementById('valor').value;
    valor = valor.replace(',', '.');
    
    if (valor === '') {
        alert('Digiete um valor antes de calcular.');
        return;
    }

    if (isNaN(valor) || valor < 0) {
        alert('O valor deve ser um número positivo.');
        return;
    }

    document.getElementById('imagem').style.display = 'none';

    var gastos_val = valor * 0.6;
    var instrucao_val = valor * 0.05;
    var diversao_val = valor * 0.1;    
    var independencia_val = valor * 0.15;
    var planos_val = valor * 0.1;
    var total_val = independencia_val + planos_val;
    var fixa_val = total_val * 0.5;
    var fiis_val = total_val * 0.3;
    var acoes_val = total_val * 0.2;

    document.getElementById('gastos').innerHTML = "Necessidades básicas: <strong>R$ " + gastos_val.toFixed(2) + "</strong>";
    document.getElementById('instrucao').innerHTML = "Instrução: <strong>R$ " + instrucao_val.toFixed(2) + "</strong>";
    document.getElementById('diversao').innerHTML = "Diversão: <strong>R$ " + diversao_val.toFixed(2) + "</strong>";
    document.getElementById('independencia').innerHTML = "Independência/Aposentadoria: <strong>R$ " + independencia_val.toFixed(2) + "</strong>";
    document.getElementById('planos').innerHTML = "Planos médio/longo prazo: <strong>R$ " + planos_val.toFixed(2) + "</strong>";
    document.getElementById('total').innerHTML = "TOTAL A SER POUPADO: <strong>R$ " + total_val.toFixed(2) + "</strong>";
    document.getElementById('fixa').innerHTML = "Renda Fixa: <strong>R$ " + fixa_val.toFixed(2) + "</strong>";
    document.getElementById('fiis').innerHTML = "Fundos Imobiliários: <strong>R$ " + fiis_val.toFixed(2) + "</strong>";
    document.getElementById('acoes').innerHTML = "Ações: <strong>R$ " + acoes_val.toFixed(2) + "</strong>";

    document.getElementById('painel').style.display = 'block';
    document.getElementById('convert').scrollIntoView();
}
