
$(document).ready(function($) {
    $( "#formRegistration" ).validate({
      rules: {
        login: {
                      required: true,
                      maxlength: 16,
        },
        
        email: {
                      required: true, 
          },
        
        password: {
                      required: true,
                      minlength: 6,
                      maxlength: 16,
                    },
        password2: {
                      required: true,
                      equalTo: "#password",
        },
        comment: {
                    required:true,
        },
        
        gsmphone: {
                      required: true,
        },
        gsmreg: {
                      required: true,
        }  
      },
        messages:{
               password:{
                      required: "Это поле обязательно для заполнения",
                      minlength: "Минимум 6 символов",
                      maxlength: "Максимум 16 символов",
                      
              },
               password2:{
                      required: "Это поле обязательно для заполнения",
                      equalTo: "Пароль не совпадает",
              },
               login: {
                      required: "Это поле обязательно для заполнения",
                      maxlength: "Максимум 16 символов",
              },
               gsmphone: {
                      required: "Это поле обязательно для заполнения",
               },
               gsmreg: {
                      required: "Это поле обязательно для заполнения",
              
               },
               email: {
                      email: "Введите корректный адрес электронной почты",
                      required: "Это поле обязательно для заполнения",
               },
                comment: {
                       required:"Это поле обязательно для заполнения",
                }
            },     
    });
    
    $("#creatVyz").validate({
      rules: {
          TypeId: { required: true },
          Description: { required: true },
          Name: { required: true },
          Instruction: { required: true },
          "CategoryIds[]": { required: true }
         },
        messages:{
            Name: { required: "" },
            TypeId: { required: "" },
            "CategoryIds[]": { required: "" },
            Description: { required: "" },
            Instruction: { required: "" }
        },

        //messages: {
        //    Name: { required: "Введите название вызова" },
        //    TypeId: { required: "Выберите тип" },
        //    "CategoryIds[]": { required: "Выберите категорию" },
        //    Description: { required: "Введите краткое описание" },
        //    Instruction: { required: "Составьте инструкцию" }
        //},
});
});



$(function() {
 $('#magicsuggest').magicSuggest({
        placeholder: 'Введите категорию',
        data: ['Наука', 'IT', 'Спорт', 'Общество', 'Кино', 'Физика', 'Финансы', 'Биология','Информационные технологии', 'Изобразительное искусство', 'Лабораторные исследования'],
        strictSuggest: true,
        hideTrigger: true,
        allowFreeEntries: false,
    });
});


$(document).ready(function() {
           $(".tourn_type").on("click",function() {
                    if($(this).find('input[type="radio"]').is(':checked')) { 
                  $('.tourn_type').removeClass('sel_bk_color');
                  $(this).addClass('sel_bk_color');
                }
            });
        });

$(function() {
 $('#magicsuggest3').magicSuggest({
        placeholder: 'Введите автора',
        data: ['krylolga', 'Alex', 'Brave Knight', 'Comrade Vasilyev', 'Кино', 'Физика', 'Финансы', 'Биология'],
        strictSuggest: true,
        hideTrigger: true,
        allowFreeEntries: false,
    });
});

$(function() {
 $('#magicsuggest2').magicSuggest({
        placeholder: 'Введите названия тематических категорий',
        data: ['Наука', 'IT', 'Спорт', 'Общество', 'Кино', 'Физика', 'Финансы', 'Биология'],
        strictSuggest: true,
        hideTrigger: true,
        allowFreeEntries: false,
    });
});

$(function() {
    $('#magicsuggest4').magicSuggest({
    selectionContainer: $('#custom-ctn'),
        data: ['Наука', 'IT', 'Спорт', 'Общество', 'Кино', 'Физика', 'Финансы', 'Биология'],
        allowFreeEntries: false,
        placeholder: 'Введите категорию',
        strictSuggest: true,
        hideTrigger: true,
    });
});

$(function() {
 $('#magicsuggest5').magicSuggest({
        placeholder: 'Введите e-mail или логин',
        data: ['krylolga', 'Alex', 'Brave Knight', 'Comrade Vasilyev', 'Кино', 'Физика', 'Финансы', 'Биология'],
        strictSuggest: true,
        hideTrigger: true,
        allowFreeEntries: true,
    });
});

$(function() {
    $('#magicsuggest6').magicSuggest({
        data: ['Наука', 'IT', 'Спорт', 'Общество', 'Кино', 'Физика', 'Финансы', 'Биология','Информационные технологии', 'Изобразительное искусство', 'Лабораторные исследования'],
        allowFreeEntries: false,
        placeholder: 'Выберите тематические категории для вашего турнира',
        strictSuggest: true,
        hideTrigger: true,
    });
});

$(function()
{
	$('.scroll-pane').jScrollPane(
		{
			showArrows: true,
			horizontalArrowPositions: 'split'
		}
	);
});	

function changeItem() {
            document.getElementById('changeColor').style.background = '#6a9d43';
         };
function rechangeItem() {
            document.getElementById('changeColor').style.background = '#508bbd';
         }; 

function herbOne(canvasId){   
        var canvas = document.getElementById(canvasId);
             if (canvas.getContext){
              var ctx = canvas.getContext('2d');
                 ctx.clearRect(0, 0, 130, 130);
                 ctx.beginPath();
                 ctx.moveTo(65,7);
                 ctx.lineTo(7,65);
                 ctx.lineTo(65,123);
                 ctx.lineTo(123,65);
                 ctx.lineTo(65,7);
                 ctx.closePath(); 
                 ctx.strokeStyle = '#83cdf4';
                 ctx.lineWidth = '7';
                 ctx.stroke();
                 
             }
};

function herbTwo(canvasId){   
        var canvas = document.getElementById(canvasId);
             if (canvas.getContext){
                    var ctx = canvas.getContext('2d');
                     ctx.beginPath();
                     ctx.clearRect(0, 0, 130, 130);
                     ctx.arc(65, 65, 60, 0, Math.PI*2, false); 
				     ctx.closePath(); 
                     ctx.strokeStyle = '#83cdf4';
                     ctx.lineWidth = '7';
                     ctx.stroke();
                
             }
};

function herbThree(canvasId){   
        var canvas = document.getElementById(canvasId);
             if (canvas.getContext){
                   var ctx = canvas.getContext('2d');  
                    ctx.beginPath();
                    ctx.clearRect(0, 0, 130, 130);
   					ctx.moveTo(20,3);
   					ctx.quadraticCurveTo(-27, 50, 65,126);
                    ctx.quadraticCurveTo(157, 50, 110,3);
   					ctx.closePath(); 
                    ctx.strokeStyle = '#83cdf4';
                    ctx.lineWidth = '7';
                    ctx.stroke();
                
             }
};

function herbFour(canvasId){   
        var canvas = document.getElementById(canvasId);
             if (canvas.getContext){
                   var ctx = canvas.getContext('2d');  
                    ctx.beginPath();
                    ctx.clearRect(0, 0, 130, 130);
   					ctx.moveTo(3,3);
   					ctx.quadraticCurveTo(10, 100, 65,126);
                    ctx.quadraticCurveTo(120, 100, 127,3);
   					ctx.closePath(); 
                    ctx.strokeStyle = '#83cdf4';
                    ctx.lineWidth = '7';
                    ctx.stroke();
                
             }
    };

function herbFive(canvasId){   
        var canvas = document.getElementById(canvasId);
             if (canvas.getContext){
                   var ctx = canvas.getContext('2d');  
                    ctx.beginPath();
                    ctx.clearRect(0, 0, 130, 130);
   					ctx.moveTo(3,3);
   					ctx.lineTo(3, 95);
   					ctx.bezierCurveTo(10, 137, 120, 137, 127,95);
                    ctx.lineTo(127, 3);
   					ctx.closePath(); 
                    ctx.strokeStyle = '#83cdf4';
                    ctx.lineWidth = '7';
                    ctx.stroke();
                
             }
};

function herbSix(canvasId){   
        var canvas = document.getElementById(canvasId);
             if (canvas.getContext){
                   var ctx = canvas.getContext('2d');  
                    ctx.beginPath();
                    ctx.clearRect(0, 0, 130, 130);
   					ctx.moveTo(3,3);
                    ctx.lineTo(3, 105);
   					ctx.quadraticCurveTo(3,115, 15,115);
                    ctx.lineTo(50, 115);
                    ctx.quadraticCurveTo(65,115, 65,130);
                    ctx.quadraticCurveTo(65,115, 80,115);
                    ctx.lineTo(120, 115);
                    ctx.quadraticCurveTo(127,115, 127,105);
                    ctx.lineTo(127, 3);
                    ctx.closePath(); 
                    ctx.strokeStyle = '#83cdf4';
                    ctx.lineWidth = '7';
                    ctx.stroke();
                
             }
};

function herbSeven(canvasId){   
        var canvas = document.getElementById(canvasId);
             if (canvas.getContext){
                   var ctx = canvas.getContext('2d');  
                    ctx.beginPath();
                    ctx.clearRect(0, 0, 130, 130);
   				    ctx.moveTo(0,3);
                    ctx.quadraticCurveTo(15,5, 15,20);
                    ctx.lineTo(15,105);
                    ctx.quadraticCurveTo(15,115, 25,115);
                    ctx.lineTo(50, 115);
                    ctx.quadraticCurveTo(65,115, 65,130);
                    ctx.quadraticCurveTo(65,115, 80,115);
                    ctx.lineTo(105, 115);
                    ctx.quadraticCurveTo(115,115, 115,105);
                    ctx.lineTo(115, 20);
                    ctx.quadraticCurveTo(115,3, 130,3);
                    ctx.closePath(); 
                    ctx.strokeStyle = '#83cdf4';
                    ctx.lineWidth = '7';
                    ctx.stroke();
                
             }
};

var herbShape = 0;
var herbGrad = 0;
var herbColor1 = "#e4e4e4"; 
var herbColor2 = "#424242"; 

function herbS(){
       var radio = document.getElementsByName('back');
         for (var i=0; i < radio.length; i++) {
            if (radio[i].checked===true) {     
             herbShape = radio[i].value;
        }
    }
    drawHerb('herb1');
}

function grdOne(){
       var radio = document.getElementsByName('division');
        for (var i=0; i < radio.length; i++) {
            if (radio[i].checked===true) {     
             herbGrad = radio[i].value;
        }
    }
    drawHerb('herb1');
}

function herbCol1(){
        var testColor = document.getElementById('getColor');
              herbColor1 = testColor.value;      
    drawHerb('herb1');
}

function herbCol2(){
       var testColor2 = document.getElementById('getColor2');
              herbColor2 = testColor2.value;
    drawHerb('herb1');
}

function drawHerb(canvasId){   
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, 130, 130);
  
  
  switch ( herbShape ) {
      case "1":
         herbOne(canvasId);
         break; 
      case "2":
         herbTwo(canvasId);
         break;
      case "3":
         herbThree(canvasId);
         break;
      case "4":
         herbFour(canvasId);
         break;
      case "5":
         herbFive(canvasId);
         break;
      case "6":
         herbSix(canvasId);
         break;
      case "7":
         herbSeven(canvasId);
         break;
  }
    
      
  switch ( herbGrad ) {
    case "1": // вертикальное разделение
      var grd = ctx.createLinearGradient(65,0,0,0);
      grd.addColorStop(0,herbColor2);
      grd.addColorStop(0,herbColor1);
      break;
    case "2":
      var grd = ctx.createLinearGradient(0,65,0,0);
      grd.addColorStop(0,herbColor2);
      grd.addColorStop(0,herbColor1);
      break;
    case "3": 
      var grd = ctx.createLinearGradient(0.1,0,0,0.1);
      grd.addColorStop(0,herbColor2);
      grd.addColorStop(0,herbColor1);
      break;
    case "4": 
      var grd = ctx.createLinearGradient(65,65,130,130);
      grd.addColorStop(0,herbColor2);
      grd.addColorStop(0,herbColor1);
      break;
  }
    

  var ctx2 = document.getElementById(canvasId);
  ctx.drawImage(ctx2, 0, 0);
  ctx.fillStyle = grd;
  ctx.fill();
  ctx.stroke();              
}

//$(document).ready(function(){
//    $("#showHideContent").click(function () {
//        if ($("#content").is(":hidden")) {
//            $("#content").show("slow");
//        } else {
//            $("#content").hide("slow");
//        }
//        return false;
//    });
//});
//
//$(document).ready(function(){
//  $(".lentaNews_1").each(function (index) {
//      $(this).find('.lenta_del_link').click(function(){
//          $(this).parents(".lentaNews_1").hide("slow");
//      });
//  });
//});
//
//$(document).ready(function(){
//  $(".lentaNews").each(function (index) {
//      $(this).find('.lenta_del_link').click(function(){
//          $(this).parents(".lentaNews").hide("slow");
//      });
//  });
//});
//
//$(document).ready(function(){
//    $("#showNotif").click(function () {
//        if ($("#contNotif").is(":hidden")) {
//            $("#contNotif").show("slow");
//        } else {
//            $("#contNotif").hide("slow");
//        }
//        return false;
//    });
//});
//
//$(document).ready(function(){
//    $("#hideNotification").click(function () {
//        if ($("#contNotif").is(":hidden")) {
//            $("#contNotif").show("slow");
//        } else {
//            $("#contNotif").hide("slow");
//        }
//        return false;
//    });
//});
//
//$(document).ready(function(){
//    $(".vyzMediaObj1").click(function () {
//        if ($("#contMedia1").is(":hidden")) {
//            $("#contMedia1").show("slow");
//        } else {
//            $("#contMedia1").hide("slow");
//        }
//        return false;
//    });
//});
//
//$(document).ready(function(){
//    $(".vyzMediaObj2").click(function () {
//        if ($("#contMedia2").is(":hidden")) {
//            $("#contMedia2").show("slow");
//        } else {
//            $("#contMedia2").hide("slow");
//        }
//        return false;
//    });
//});
//
//$(document).ready(function(){
//    $('.vyzMediaObj1').on('click', function() {
//      if (!$(this).hasClass('clicked')) {
//        $(this).addClass('clicked'); 
//        $('#hideMeda1').css({'display' : 'inline-block'});
//        $('#showMeda2').prop('disabled', true); 
//      } else { 
//        $(this).removeClass('clicked');
//        $('#hideMeda1').css({'display' : 'none'});
//        $('#showMeda2').prop('disabled', false);
//      }
//    });
//});
//
//$(document).ready(function(){
//    $('.vyzMediaObj2').on('click', function() {
//      if (!$(this).hasClass('clicked')) { 
//        $(this).addClass('clicked'); 
//        $('#hideMeda2').css({'display' : 'inline-block'});
//        $('#showMeda1').prop('disabled', true); 
//      } else { 
//        $(this).removeClass('clicked'); 
//        $('#hideMeda2').css({'display' : 'none'});
//        $('#showMeda1').prop('disabled', false);
//      }
//    });
//});
//
//jQuery(document).ready(function(){
//    jQuery('.scrollbar-chrome').scrollbar();
//});
//
//jQuery(document).ready(function(){
//    jQuery('.scrollbar-chrome_Castle').scrollbar();
//});
//
//$(document).ready(function(){
//    $('.castleSlider').slick({
//    dots: false,
//    infinite: false,
//    speed: 300,
//    slidesToShow: 16,
//    centerMode: false,
//    variableWidth: true,
//    arrows: true,
//    prevArrow: '<button type="button" class="slick-prev"><img src="image/tourn_L.png"></button>',
//    nextArrow: '<button type="button" class="slick-next"><img src="image/tourn_R.png"></button>'
//    });
//});
//
//$(document).ready(function(){
//  $("#myTable").tablesorter();
//});
//
//$(document).ready(function(){
//   $("#myTable tr").each(function (index) {        
//        $(this).mouseover(function() {
//                $(this).find(".closeUserInfo").css({"display" : "inline-block","vertical-align" : "middle", "margin-left" : "20px"});
//           $(this).mouseleave(function() {
//                $(this).find(".closeUserInfo").css({"display" : "none"})
//            });
//        });
//       var modalDialog = $(this).find('.modalDialog');
//       $(this).find(".closeUserInfo").click(function(event){
//           //event.preventDefault();
//            modalDialog.display('block');
//        });
//        modalDialog.find('.delItem').click(function(){
//            $(this).parents("tr").hide();
//            window.location.hash = '';
//        });
//           //event.preventDefault();
//            //$(this).parents("tr").hide();
//       
//    });               
//});
//
//$(document).ready(function(){
//   $("#myTable2Colum tr").each(function (index) {        
//        $(this).mouseover(function() {
//                $(this).find(".closeUserInfo").css({"display" : "inline-block","vertical-align" : "middle", "margin-right" : "10px"});
//           $(this).mouseleave(function() {
//                $(this).find(".closeUserInfo").css({"display" : "none"})
//            });
//        });
//       var modalDialog = $(this).find('.modalDialog');
//       $(this).find(".closeUserInfo").click(function(event){
//            modalDialog.display('block');
//        });
//        modalDialog.find('.delItem').click(function(){
//            $(this).parents("tr").hide();
//            window.location.hash = '';
//        });
//    });               
//});
//
//$(document).ready(function() {
//    $('.closedMyChat').click(function() {
//       $('.myChatOpen').css({'display' : 'none'});
//       $('.myChatClosed1').css({'display' : 'block'});
//    });
//    $('.openMyChat').click(function() {
//       $('.myChatClosed1').css({'display' : 'none'});
//       $('.myChatOpen').css({'display' : 'block'});
//    });
//    $('.myChatOpen10').find('.chatRed').click(function() {
//       $(this).parents('.myChatOpen10').css({'display' : 'none'});
//       $('.myChatOpen10Edit').css({'display' : 'block'});
//    });
//    $('.myChatOpen10Edit').find('.chatRed').click(function() {
//       $(this).parents('.myChatOpen10Edit').css({'display' : 'none'});
//       $('.myChatOpen10').css({'display' : 'block'});
//    });
//});
//
//jQuery (function ($) { 
//  $(function() {
//    function maskPhone() {
//      var country = $('#gsm_country option:selected').val();
//      switch (country) {
//        case "by":
//          $("#gsmphone").mask("+375(99) 999-99-99");
//          break;
//        case "ru":
//          $("#gsmphone").mask("+7(999) 999-99-99");
//          break;
//        case "ua":
//          $("#gsmphone").mask("+380(999) 999-99-99");
//          break;
//        case "kz":
//          $("#gsmphone").mask("+7(999) 999-99-99");
//          break;
//      }    
//    }
//    maskPhone();
//    $('#gsm_country').change(function() {
//      maskPhone();
//    });
//  });
//});
//
//$(document).ready(function() {
//    $( "#getCode" ).click(function( event ) {
//      event.preventDefault();
//    });
//});
//
//$(function() {
//    $(".anyQuestionRight1").each(function(index){
//        $(this).children('.anyQuestionRight5').click(function(){
//            if($(this).hasClass('indexhide') == false){
//                $(this).addClass('indexhide');
//                $(this).siblings('.anyQuestionRight4').show('slow');   
//            }else if($(this).hasClass('indexhide') == true){
//                $(this).removeClass('indexhide');
//                $(this).siblings('.anyQuestionRight4').hide('slow');
//            }
//        });
//    });
//});
//
//function changeZIndex() {
//    $(".link_creatTow5").css("z-index","0");
//};
//function rechangeZIndex() {
//    $(".link_creatTow5").css("z-index","1");
//};
//
//$(document).ready(function(){
//    $('.castleFight').slick({
//    dots: false,
//    infinite: false,
//    speed: 300,
//    slidesToShow: 7,
//    centerMode: false,
//    variableWidth: true,
//    arrows: true,
//    prevArrow: '<button type="button" class="slick-prev"><div class="prevSlick"></div></button>',
//    nextArrow: '<button type="button" class="slick-next"><div class="nextSlick"></div></button>'
//    });
//});
//
//$(document).ready(function(){
//  $("#myTable2Colum").tablesorter();
//});


