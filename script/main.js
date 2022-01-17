$(document).ready(function(){

//0. 내비게이션 클릭 시 css서식
  $('.gnb > li > a').click(function(){
    $('.gnb > li > a').removeClass('h_gnb_act');
    $(this).addClass('h_gnb_act');
  });
    
//0. title 타이틀

  //깜빡이는 함수
  setInterval(function(){
    $('.t_copyright > p > span').toggleClass('blink');
  },800)

//1. about 소개

  $(window).scroll(function(){
    let sPos1 = $(this).scrollTop(); 
    if(sPos1>=140){
     $('.skill01 > li:nth-child(2) > div').animate({'width':'80%'},700, 'easeInQuint');
     $('.skill01 > li:nth-child(3) > div').animate({'width':'80%'},500,'easeInQuint');
     $('.skill01 > li:last-child > div').animate({'width':'60%'},900,'easeInQuint');
     $('.skill02 > li:nth-child(2) > div').animate({'width':'70%'},600,'easeInQuint');
     $('.skill02 > li:nth-child(3) > div').animate({'width':'85%'},900,'easeInQuint');
     $('.skill02 > li:last-child > div').animate({'width':'80%'},400,'easeInQuint');
    }
  });

  

//2. portfolio 포트폴리오

  //gnb 마우스오버 시 p_box의 해당 박스가 위치하도록 움직이기
  let n_gnb = $('.p_gnb > ul > li');
  let n = n_gnb.index();
  console.log(n);

  n_gnb.mouseenter(function(){
    n = -($(this).index()*$('.p_box > ul > li').height());
    console.log(n);

    $('.p_box > ul').stop().animate({'margin-top':n},500);
    $('.p_gnb > ul > li').removeClass('gnb_act');
    $(this).addClass('gnb_act');
  });

  //p_box 자동으로 움직이는 함수
  function move(n){
    n = -(n*$('.p_box > ul > li').height());
    $('.p_box > ul').animate({'margin-top':n},500);
    console.log(n);
  };

  let num = 0;
  let Timer = setInterval(function(){
    if(num==4){
      num = 0;
      $('.p_gnb > ul > li').removeClass('gnb_act');
      $('.p_gnb > ul > li').eq(num).addClass('gnb_act');
    }else{
      num++;
      $('.p_gnb > ul > li').removeClass('gnb_act');
      $('.p_gnb > ul > li').eq(num).addClass('gnb_act');
    }
    move(num);

  },3000);

  //gnb 마우스 오버 시 움직이는 함수 없애기
  $('.p_gnb > ul > li').mouseenter(function(){
    clearInterval(Timer);
  });
  $('.p_gnb > ul > li').mouseleave(function(){
    num = $(this).index();
    Timer = setInterval(function(){
      if(num==4){
        num = 0;
        $('.p_gnb > ul > li').removeClass('gnb_act');
        $('.p_gnb > ul > li').eq(num).addClass('gnb_act');
      }else{
        num++;
        $('.p_gnb > ul > li').removeClass('gnb_act');
        $('.p_gnb > ul > li').eq(num).addClass('gnb_act');
      }
      move(num);
    },3000);
  });

  //gnb 마우스 클릭 시 해당 박스 고정

  //p_box에 마우스 오버 시 해당박스 고정
  $('.p_box').mouseenter(function(){
    clearInterval(Timer);
  });
  $('.p_box').mouseleave(function(){

    Timer = setInterval(function(){
      if(num==4){
        num = 0;
        $('.p_gnb > ul > li').removeClass('gnb_act');
        $('.p_gnb > ul > li').eq(num).addClass('gnb_act');
      }else{
        num++;
        $('.p_gnb > ul > li').removeClass('gnb_act');
        $('.p_gnb > ul > li').eq(num).addClass('gnb_act');
      }
      move(num);
    },3000);
  });









 
//3. archive 갤러리

 const ar_btn = $('.ar_gnb > li > a');

 //갤러리 내비게이션 버튼 눌렀을 때 서식추가하기
 $('.ar_gnb > li:first-child > a').addClass('ar_act');
 ar_btn.click(function(){
   $('.ar_gnb > li > a').removeClass('ar_act');
   $(this).addClass('ar_act');
   return false;
 });



//4. contect 안내







});