window.addEventListener("load", function () {
  // data.json을 로딩, 연결시킨다.
  const xhttp = new XMLHttpRequest();
  // console.log(xhttp);
  xhttp.onreadystatechange = function (e) {
    const req = e.target;
    // console.log(req);
    if (req.readyState === XMLHttpRequest.DONE) {
      const str = req.response;
      // 글자로 온 데이터를 객체로 변환
      // 글자가 json 규칙대로 만들어진 문자열
      // 그러므로 json글자를 객체로 변환해서 활용한다.
      let obj = JSON.parse(str);

      VISUAL_ARR = obj.visual;

      showVisual(); //비주얼을 화면에 배치
    }
  };
  //   자료 호출한다.
  xhttp.open("GET", "data.json");
  // 웹브라우저 기능 실행 할수 있도록 요청
  xhttp.send();
  // 비주얼 슬라이드
  let VISUAL_ARR;
  let visualTag = this.document.getElementById("data-visual");

  // 비주얼 화면 출력 기능
  function showVisual() {
    let html = "";
    VISUAL_ARR.forEach(function (item) {
      const tag = `
        <div class="swiper-slide">
                <div class="visual-slide-page">
                  <a href="${item.link}">
                    <img src="images/${item.pic}" alt="${item.name}" />
                  </a>
                </div>
              </div>
        `;
      // json의 변수를 가져와서 item으로 선언
      html += tag;
    });
    visualTag.innerHTML = html;
    //   비주얼 슬라이드 기능
    const swVisual = new Swiper(".sw-visual", {
      loop: true, // loop : 무한으로 도는 것.
      autoplay: {
        delay: 2500,
        disableOnInteraction: false, // 상관없이 계속 autoplay.
      },
      navigation: {
        prevEl: ".visual-prev",
        nextEl: ".visual-next",
      },
    });
  }

  //  888888888888888888888888888888888888888888888888888
});
