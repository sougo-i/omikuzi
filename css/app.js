// jQuery
$(function() {

});


  // JS
  let btn =document.getElementById('btn');
  btn.addEventListener('click',function() {
    let bg=document.getElementById('bg-change');
    let country =['アメリカ','フランス ','イギリス','ブラジル','ロシア','モルディブ'];
    let random = Math.random();
    let num = Math.floor(random*country.length);
    btn.textContent= `${country[num]}です!!`;
    switch(num) {
      case 0:
        $('.france,.briten,.burazil,.rusia,.morudive').removeClass('whole');
        $('.america').addClass('whole');
        $('.none').addClass('show');
        bg.style.backgroundImage = 'url("../img/アメリカ.jpg")';
        $('.whole').hover(function() {
          $('.sight').fadeIn(1000);
        });

        break;

      case 1:
          $('.america,.briten,.burazil,.rusia,.morudive').removeClass('whole');
        $('.france').addClass('whole');
        $('.none').addClass('show');
        bg.style.backgroundImage = 'url("../img/フランス.jpg")';
        $('.whole').hover(function() {
          $('.sight').fadeIn(1000);
        });
        break;

      case 2:
          $('.america,.france,.burazil,.rusia,.morudive').removeClass('whole');
        $('.briten').addClass('whole');
        $('.none').addClass('show');
        bg.style.backgroundImage = 'url("../img/イギリス.jpeg")';
        $('.whole').hover(function() {
          $('.sight').fadeIn(1000);
        });
        break;

      case 3:
          $('.america,.france,.briten,.rusia,.morudive').removeClass('whole');
        $('.burazil').addClass('whole');
        $('.none').addClass('show');
         bg.style.backgroundImage = 'url("../img/ブラジル.jpeg")';
         $('.whole').hover(function() {
          $('.sight').fadeIn(1000);
        });
        break;

      case 4:
          $('.america,.france,.briten,.burazil,.morudive').removeClass('whole');
        $('.rusia').addClass('whole');
        $('.none').addClass('show');
        bg.style.backgroundImage = 'url("../img/ロシア.jpeg")';
        $('.whole').hover(function() {
          $('.sight').fadeIn(1000);
        });
        break;

      case 5:
          $('.america,.france,.briten,.burazil,.rusia').removeClass('whole');
        $('.morudive').addClass('whole');
        $('.none').addClass('show');
        bg.style.backgroundImage = 'url("../img/モルディブ.jpg")';
        $('.whole').hover(function() {
          $('.sight').fadeIn(1000);
        });
        break;
    }


  })