// Animations
// mã khởi tạo hiệu ứng với thư viện AOS.js
AOS.init({
  mirror: true,//Hiệu ứng sẽ được thực hiện lại khi người dùng cuộn lên trên (scroll up).
  easing: 'ease-in-out',//Kiểu dịch chuyển (easing) của hiệu ứng, ở đây là dịch chuyển mượt mà.
  anchorPlacement: 'top-left',//Vị trí neo (anchor) của hiệu ứng, ở đây là góc trên bên trái của phần tử.
  duration: 1000//Thời gian thực hiện hiệu ứng là 1000ms (1 giây)
});

// Select all links with hashes
//Xử lý cuộn trang đến vị trí mong muốn khi nhấp vào các liên kết (Links) có chứa hash (#)
$('a[href*="#"]')// lựa chọn thẻ a liên kết #
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')// Loại bỏ các liên kết chỉ định đến trang đang hiện tại (#) và liên kết không có hành động (#0).
  .click(function (event) {
    // On-page links: xử lí cuộn trang
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {// Nếu không focus được, thêm tabindex và focus lại
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  F:\Learning HTML,CSS,JS\web-cuoi-ky\public\js\main.js