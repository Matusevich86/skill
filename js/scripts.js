
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
                      equalTo: "#Password",
        },
          comment: {
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
              // name: {
              //        required: "Это поле обязательно для заполнения",
              //        minlength: "Минимум 2 символа",
              //        maxlength: "Максимум 16 символов",
              //        alphabetsAndSpacesOnly: "Допустимы только буквы",
              // },
              // surname: {
              //        required: "Это поле обязательно для заполнения",
              //        minlength: "Минимум 2 символа",
              //        maxlength: "Максимум 16 символов",
               //       alphabetsAndSpacesOnly: "Допустимы только буквы",
              // },
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
        placeholder: 'Введите категорию',
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
         }
         function rechangeItem() {
            document.getElementById('changeColor').style.background = '#508bbd';
         } 

function herbOne(){   
        var canvas = document.getElementById('herb1');
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

function herbTwo(){   
        var canvas = document.getElementById('herb1');
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

function herbThree(){   
        var canvas = document.getElementById('herb1');
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

function herbFour(){   
        var canvas = document.getElementById('herb1');
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

function herbFive(){   
        var canvas = document.getElementById('herb1');
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

function herbSix(){   
        var canvas = document.getElementById('herb1');
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

function herbSeven(){   
        var canvas = document.getElementById('herb1');
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
var herbGrad=0;
var herbColor1= "#e4e4e4"; 
var herbColor2= "#424242"; 

function herbS(){
       var radio = document.getElementsByName('back');
       if (radio[0].checked)
        {
               herbShape = radio[0].value;
        }
        else if (radio[1].checked)
        {
               herbShape = radio[1].value;
         }
        else if (radio[2].checked)
        {
               herbShape = radio[2].value;
         }
         else if (radio[3].checked)
        {
               herbShape = radio[3].value;
         }
        else if (radio[4].checked)
        {
               herbShape = radio[4].value;
         }
         else if (radio[5].checked)
        {
               herbShape = radio[5].value;
         }
         else if (radio[6].checked)
        {
               herbShape = radio[6].value;
         }
         else if (radio[7].checked)
        {
               herbShape = radio[7].value;
         }
    drawHerb();
}

function grdOne(){
       var radio = document.getElementsByName('division');

       if (radio[0].checked)
        {
               herbGrad = radio[0].value;
        }
        else if (radio[1].checked)
        {
               herbGrad = radio[1].value;
         }
        else if (radio[2].checked)
        {
               herbGrad = radio[2].value;
         }
         else if (radio[3].checked)
        {
               herbGrad = radio[3].value;
         }
        else if (radio[4].checked)
        {
               herbGrad = radio[4].value;
         }
    drawHerb();
}

function herbCol1(){
       var radio = document.getElementsByName('color1');

       if (radio[0].checked)
        {
               herbColor1 = radio[0].value;
        }
        else if (radio[1].checked)
        {
               herbColor1 = radio[1].value;
         }
        else if (radio[2].checked)
        {
               herbColor1 = radio[2].value;
         }
         else if (radio[3].checked)
        {
               herbColor1 = radio[3].value;
         }
        else if (radio[4].checked)
        {
               herbColor1 = radio[4].value;
         }
         if (radio[5].checked)
        {
               herbColor1 = radio[5].value;
        }
        else if (radio[6].checked)
        {
               herbColor1 = radio[6].value;
         }
        else if (radio[7].checked)
        {
               herbColor1 = radio[7].value;
         }
         else if (radio[8].checked)
        {
               herbColor1 = radio[8].value;
         }
    drawHerb();
}

function herbCol2(){
       var radio = document.getElementsByName('color2');

       if (radio[0].checked)
        {
               herbColor2 = radio[0].value;
        }
        else if (radio[1].checked)
        {
               herbColor2 = radio[1].value;
         }
        else if (radio[2].checked)
        {
               herbColor2 = radio[2].value;
         }
         else if (radio[3].checked)
        {
               herbColor2 = radio[3].value;
         }
        else if (radio[4].checked)
        {
               herbColor2 = radio[4].value;
         }
         if (radio[5].checked)
        {
               herbColor2 = radio[5].value;
        }
        else if (radio[6].checked)
        {
               herbColor2 = radio[6].value;
         }
        else if (radio[7].checked)
        {
               herbColor2 = radio[7].value;
         }
         else if (radio[8].checked)
        {
               herbColor2 = radio[8].value;
         }
    drawHerb();
}

function drawHerb(){   
  var canvas = document.getElementById('herb1');
  var ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, 130, 130);
  
  
  switch ( herbShape ) {
      case "1":
         herbOne();
         break; 
      case "2":
         herbTwo();
         break;
      case "3":
         herbThree();
         break;
      case "4":
         herbFour();
         break;
      case "5":
         herbFive();
         break;
      case "6":
         herbSix();
         break;
      case "7":
         herbSeven();
         break;
  }
    
      switch ( herbColor1 ) {
      case "1":
         herbColor1 = "#e4e4e4";
         break; 
      case "2":
         herbColor1 = "#424242";
         break;
      case "3":
         herbColor1 = "#e9cb5d";
         break;
      case "4":
         herbColor1 = "#ec9049";
         break;
      case "5":
         herbColor1 = "#89dbf3";
         break;
      case "6":
         herbColor1 = "#54a3e5";
         break;
      case "7":
         herbColor1 = "#40c62b";
         break;
       case "8":
         herbColor1 = "#059535";
         break;
      case "9":
         herbColor1 = "#80243e";
         break;
  }
          switch ( herbColor2 ) {
      case "1":
         herbColor2 = "#e4e4e4";
         break; 
      case "2":
         herbColor2 = "#424242";
         break;
      case "3":
         herbColor2 = "#e9cb5d";
         break;
      case "4":
         herbColor2 = "#ec9049";
         break;
      case "5":
         herbColor2 = "#89dbf3";
         break;
      case "6":
         herbColor2 = "#54a3e5";
         break;
      case "7":
         herbColor2 = "#40c62b";
         break;
       case "8":
         herbColor2 = "#059535";
         break;
      case "9":
         herbColor2 = "#80243e";
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
    

  var ctx2 = document.getElementById('herb1');
  ctx.drawImage(ctx2, 0, 0);
  ctx.fillStyle = grd;
  ctx.fill();
  ctx.stroke();              
}

