// function animateScript() {
//   document.getElementById("image").style.backgroundPosition = 
//   `-996px 0px`;
//   }
  var tID;
  var    position = 995; //началная точка
  const  interval = 100; //100 ms интервал которъй пойдет в функцию
  tID = setInterval ( () => {
  document.getElementById("image").style.backgroundPosition = `-${position}px 0px`; 
  //изменение статик на динамик переменную "position"
  if (position < 74625 ) //общая длина файла
  { position = position + 995;}
  //+1 размер картинки
  else
  { position = 995;}
  //ресет к 1 картинки если допло до 74625
  } 
    , interval ); //скорости сменъ. можно цъфрой
   














// var cartoon_background1=new cartoon_background();//создаю новый экземпляр обьекта, имя придумываю сам
// cartoon_background1.play({
// 	id:'cartoon',//id div элемента
// 	src:'test_img/test.png',//ссылка на изображение
// 	frames_x:1,//количество кадров на изображении по x
// 	frames_y:75,//количество кадров на изображении по y
// 	width:74325,//ширина изображения в пикселях
// 	height:400,//высота изображения в пикселях
// 	fps:24,//скорость показа кадров в секунду, можно писать дробные числа
// 	reverse:false,//если true то проигрывается с конца в начало
// 	playandstop:false,//если true то проиграть 1 раз и передать управление функции next
// 	next: function () {//выполнится только если playandstop==true
// 		//сюда можно пысать следующий код который будет выполняться после завершения анимации
// 		//к примеру можно вставить следующую анимацию с другим изображением
// 	}
// });
