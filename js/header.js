window.addEventListener("load", function () {
  const wrap = this.document.querySelector(".wrap");
  const header = this.document.querySelector(".header");
  let scy = 0;
  this.window.addEventListener("scroll", function () {
    scy = this.document.documentElement.scrollTop;
    // console.log(scy);
    if (scy > 0) {
      wrap.classList.add("active");
      header.classList.add("active");
    } else {
      wrap.classList.remove("active");
      header.classList.remove("active");
    }
  });
  //   펼침 목록들 보기 기능
  // 더보기 목록기능
  const menuBt = document.getElementById("menu-bt");
  const menuList = document.getElementById("menu-list");
  // 참여 목록기능
  const joinBt = document.getElementById("join-bt");
  const joinList = document.getElementById("join-list");
  //  조합원센터 목록기능
  const centerBt = document.getElementById("center-bt");
  const centerList = document.getElementById("center-list");
  // 배열 순서번호가 주어진다.(배열순서번호 index)

  const toggleListArr = [menuList, joinList, centerList];
  const toggleBtArr = [menuBt, joinBt, centerBt];
  // 펼침 목록 모두 닫기
  this.document.addEventListener("click", function () {
    toggleListArr.forEach(function (item) {
      item.style.display = "none";
    });
    // 버튼 초기화
    toggleBtArr.forEach(function (item) {
      item.classList.remove("active");
    });
  });
  // 코드 블럭이 같은 기능을 반복된다
  // 기능을 만들어서 쓴다
  function listToggle(bt, list) {
    // 처음에는 목록을 보여주기 않는다.
    list.style.display = "none";
    // 클릭이벤드가 발생하면 함수 실행
    bt.addEventListener("click", function (e) {
      e.preventDefault();
      toggleBtArr.forEach(function (item) {
        item.classList.remove("active");
      });
      //   console.log(list);
      const nowList = list.getAttribute("id");
    });
  }
  listToggle(menuBt, menuList);
  // toggleListArr[0] = menuList
  listToggle(joinBt, joinList);
  // toggleListArr[1] = joinList
  listToggle(centerBt, centerList);
  // toggleListArr[2] = centerList
});
