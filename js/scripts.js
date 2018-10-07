
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

$(document).ready(function() {
    $(".radio14").on("click",function() {
          if($(this).is(':checked')) {   
              $('svg use').attr('xlink:href', '#herb1')
              }
    });
    $(".radio15").on("click",function() {
          if($(this).is(':checked')) {   
              $('svg use').attr('xlink:href', '#herb2')
              }
    });
    $(".radio16").on("click",function() {
          if($(this).is(':checked')) {   
              $('svg use').attr('xlink:href', '#herb3')
              }
    }); 
    $(".radio17").on("click",function() {
          if($(this).is(':checked')) {   
              $('svg use').attr('xlink:href', '#herb4')
              }
    }); 
    $(".radio18").on("click",function() {
          if($(this).is(':checked')) {   
              $('svg use').attr('xlink:href', '#herb5')
              }
    });
    $(".radio19").on("click",function() {
          if($(this).is(':checked')) {   
              $('svg use').attr('xlink:href', '#herb6')
              }
    });
    $(".radio20").on("click",function() {
          if($(this).is(':checked')) { 
              
              $('svg use').attr('xlink:href', '#herb7')
              }
    });
    $(".radio10").on("click",function() {
          if($(this).is(':checked')) {  
         var re = /.fil[0-4]/i;//хочу с помощью регулярных выражений найти класс начинающийся с .fil и заканчивающийся цифрой в диапазоне от 0 до 4. 
         
          var result = $('.select_blazon').find(re);//находим элемент эмеющий класс fil[0-4]; 
         result.removeClass(re).addClass('fil1');//удаляем ненужный класс и присваиваем необходимый
         }
    });
    $(".radio11").on("click",function() {
          if($(this).is(':checked')) {   
              var re = /.fil[0-4]/i;
          var result = $('.select_blazon').find(re);
         result.removeClass(re).addClass('fil2');
         }
    });
    $(".radio12").on("click",function() {
          if($(this).is(':checked')) {   
              var re = /.fil[0-4]/i;
          var result = $('.select_blazon').find(re);
         result.removeClass(re).addClass('fil3');
         }
    });
    $(".radio13").on("click",function() {
          if($(this).is(':checked')) {   
              var re = /.fil[0-4]/i;
          var result = $('.select_blazon').find(re);
         result.removeClass(re).addClass('fil4');
         }
    });
});
	