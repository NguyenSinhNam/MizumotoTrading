$(document).ready(function() {
  $('.menu_account').hide();
  $('.box_account').click(function() {
    $('.menu_account').slideToggle(300);
  });

  $('.box_notification').hide();
  $('.notification').click(function() {
    $('.box_notification').slideToggle(300);
  });

  $('.toggle_btn').click(function() {
    $(this).closest('.toggle_container').find('.content_toggle').slideToggle(300);
    // $('.box_notification').slideToggle(300);
  });

  // box_change_pass
  $('.box_change_pass').hide();
  $('.check_change_pass .change_pass').click(function() {
    $(this).toggleClass('active');
    $('.box_change_pass').slideToggle(300);
  });

  // Table User
  $('.table_user .delete_col').click(function() {
    $(this).closest('tr').remove();
  });

  // Quanlity
  $('.codelab_quantity .minus').click(function(e) {
    var qty = $(this).closest('.codelab_quantity').find('#quantity_cart').val();
    e.preventDefault();
    qty = parseInt(qty) - 1;
    $(this).closest('.codelab_quantity').find('#quantity_cart').val(qty);
    if (qty < 0) {
      qty = 0;
      $(this).closest('.codelab_quantity').find('#quantity_cart').val(0);
    }
  });

  $('.codelab_quantity .plus').click(function(e) {
    var qty = $(this).closest('.codelab_quantity').find('#quantity_cart').val();
    e.preventDefault();
    qty = parseInt(qty) + 1;
    $(this).closest('.codelab_quantity').find('#quantity_cart').val(qty);
  });

  // Delete Product
  $('.delete_pro a').click(function() {
    $(this).closest('.pro_checkout_item').remove();
  })

  // Filter
  $('.btn_filter').click(function() {
    $('.box_filter_container').addClass('open');
  });

  $('.box_filter_container .title .ico_close').click(function() {
    $('.box_filter_container').removeClass('open');
  });

  $('.box_filter_container .content_filter .menu_cat li a').click(function() {
    $(this).parent('li').toggleClass('active');
  });

  // Upload file
  $('.img_upload').hide();

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#image_upload_preview').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#upload").change(function() {
    $('.img_upload').show(300);
    readURL(this);
  });

  $(".img_upload .delete_upload").click(function() {
    $('.img_upload').hide(300);
    $('#image_upload_preview').attr('src', '#');
  });

  // Responsive Menu
  var menuType = 'desktop';

  $(window).on('load resize', function() {
    var currMenuType = 'desktop';

    if (matchMedia('only screen and (max-width: 991px)').matches) {
      currMenuType = 'mobile';
    }

    if (currMenuType !== menuType) {
      menuType = currMenuType;

      if (currMenuType === 'mobile') {
        var mobileMenu = $('#mainnav').attr('id', 'mainnav_mobi').hide();
        var createProduct = $('.create_product').attr('class', 'create_product_mobi');

        $('#header').after(mobileMenu);
        $('#mainnav_mobi .menu').after(createProduct);
        $('.btn-menu').removeClass('active');
      } else {
        var desktopMenu = $('#mainnav_mobi').attr('id', 'mainnav').removeAttr('style');
        var desktopCreateProduct = $('.create_product_mobi').attr('class', 'create_product').removeAttr('style');
        $('#header').find('#logo').after(desktopMenu);
        $('#header').find('.shop_cart').before(desktopCreateProduct);
      }
    }
  });

  $('.btn-menu').on('click', function() {
    $('#mainnav_mobi').slideToggle(300);
    $(this).toggleClass('active');
  });

  // Header fixed
  $(window).on('load', function() {
    var header = $('#header');
    var offsetTop = $('#header').offset().top;
    var headerHeight = $('#header').height();
    var buffer = $('<div>', {
      height: headerHeight
    }).insertAfter(header);
    buffer.hide();

    $(window).on('load scroll', function() {
      if ($(window).scrollTop() > offsetTop) {
        $('#header').addClass('fixed_header');
        buffer.show();
      } else {
        $('#header').removeClass('fixed_header');
        buffer.hide();
      }
    })

  });

  // Preloader
  $(window).on("load", function() {
    $('#preloader').fadeOut('600', function() {
      $(this).remove();
    });
  });


})
