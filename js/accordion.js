$('.accordion-header').click(function() { // .accordion-headerをクリックで発火
    $(this).next().slideToggle();
    // $(this)...$('.accordion-header')の.next()...次の要素が.slideToggle()...表示と非表示を交互にする
    $(this).toggleClass('active');
    // $(this)...$('.accordion-header')に、activeというクラスが追加と削除を交互にする
});
$(function(){
    $('.accordion-header').click(function(){
      $(this).toggleClass("aco");
      $('::before').toggleClass("aco");
    });
  });

  // $(function () {
  //   $(".accordion-header").on("click", function () {
  //     $(".accordion-header").not(this).removeClass("open");
  //     $(".accordion-header").not(this).next().slideUp(300);
  //     $(this).toggleClass("open");
  //     $(this).next().slideToggle(300);
  //   });
  // });