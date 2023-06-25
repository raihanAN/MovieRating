// Smooth Scrolling
$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top -10
    }, 1200);
   
    e.preventDefault();
   });

//    Dropdown
function Function() {
    document.getElementById("Hamburgerbutt").classList.toggle("show");
  }


  