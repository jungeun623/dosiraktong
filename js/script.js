window.addEventListener("load", function () {
  AOS.init();
  // gotop바로가기 기능
  const gotop = this.document.querySelector(".gotop");
  //   위로 가기 기능
  gotop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  //   waypoint.js적용
  const waypoint_service = new Waypoint({
    element: document.querySelector(".service"),
    handler: function (direction) {
      console.log(direction);
      if (direction === "down") {
        gotop.classList.add("active");
      } else {
        gotop.classList.remove("active");
      }
    },
    offset: "50%",
  });
  const waypoint_footer = new Waypoint({
    element: document.querySelector(".footer"),
    handler: function (direction) {
      console.log(direction);
      if (direction === "down") {
        gotop.classList.add("active-footer");
      } else {
        gotop.classList.remove("active-footer");
      }
    },
    offset: "95%",
  });
  // 모달창(안내창)=======================
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal-wrap");
  const modalClose = document.querySelector(".modal-close");
  // isOpen 값에 따라 스크롤을 제어하는 함수
  function controlScroll(isOpen) {
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }
  // 초기 모달창 상태 설정
  const isOpen = true;
  controlScroll(isOpen);
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
    // 모달창이 닫힐 때는 스크롤을 다시 활성화
    controlScroll(false);
  });
});
