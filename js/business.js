window.addEventListener("load", function () {
  const swBesiness = new Swiper(".sw-business", {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  // 비지니스 - 모달 기능
  const businessModal = this.document.querySelector(".business-modal")
  businessModal.addEventListener("click",function(){
    businessModal.sytle.display = "none";
  });
});
