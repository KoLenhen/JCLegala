// hamburger

$('.heading__bars , .dropdown__close').on('click', function(){
	$('.dropdown').toggleClass('d-none');
});
 
// prallax

 if(document.getElementById('scene'))
{
	var scene = document.getElementById('scene');
	var parallaxInstance = new Parallax(scene);
}


// slider-swiper

 // if(window.location.toString().indexOf('index.html')>0)

 if(document.getElementById('news'))
{
	var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 1,
      loop: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2,
        },
        220: {
          slidesPerView: 1,
          spaceBetween: 20,
          slidesPerGroup: 1,
        }      
      }
    });
}


if(window.location.toString().indexOf('contacts.html')>0)
{
	ymaps.ready(init);
	    function init(){
	        var myMap = new ymaps.Map("map", {
	            center: [55.802776, 37.583751],
	            zoom: 15
	        });

	        var myPlacemark = new ymaps.Placemark([55.802776, 37.583751], {} 
	        	, {preset: 'islands#redIcon', iconImageSize:[50,40]})

	        myMap.geoObjects.add(myPlacemark)
	        }
}
