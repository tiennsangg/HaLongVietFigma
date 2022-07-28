function slide_header() {
    $('.slide_div').flickity({
        cellAlign: 'left',
        contain: true,
        autoPlay: 3000,
        wrapAround: true,
        freeScroll: false,// ảnh dừng sẽ ko bị đứt
        imagesLoaded: true, //cần dùng khi dùng freescroll
        fade: true,
        pageDots: false,
        prevNextButtons: false
      });
}
slide_header();