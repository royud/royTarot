/*사용자가 원하는 카드가 뽑아지는 듯한 연출용 함수*/
const Transitional = function(){
    const cardId = this.id;//뽑은 카드 아이디 찾기
    const cssId = document.getElementById(cardId);//뽑은 카드 지명
    cssId.style.transform = "translate(0px, -1000px)";//카드 이동
    cssId.style.opacity = "0";//투명도 조절
    cssId.style.transition = "all, 1.5s";//애니메이션 효과
}

/*클릭한 카드를 하나씩 카운트하여 4장이 되면 결과 페이지 이동하는 함수*/
let count = 1;
const Selectedcard = function(){
    count--;//클릭할 때마다 카운트
    if(count === 0){
        const change = document.getElementById("head");
        change.innerHTML = 
        `<span>카드 확인 중입니다</span>`
        setTimeout(function(){//3초 뒤에 실행
            location.href = "oneResult.html"; //페이지 이동
            },
        2000);
    } else if(count === 1){
        const change = document.getElementById("head");
        change.innerHTML = 
         `<span>조언을 받을 카드를 선택하세요</span>`
    } else if(count < 0){
        alert("이미 카드를 모두 선택하셨습니다.");
    } else if(count >= 2){
        const change = document.getElementById("head");//설명문 찾기
        change.innerHTML = //설명문 변경
        `<span>마음에 드는 카드 ${count - 1}장을 선택하세요</span>`//제목
    }
}

/*카드들을 클릭하여 함수를 실행하는 어머니 함수*/
const card_select = document.querySelectorAll(".cardButton");//모든 함수 호출
for(i = 0; i < 22; i++){//반환값이 nodelist라 for문으로 전부 호출
    const cardNumber = card_select.item(i)//nodelist.item(i)이 카드 하나
    cardNumber.addEventListener("click", Transitional, false);//연출 함수 클릭
    cardNumber.addEventListener("click", Selectedcard, false);//선택 함수 클릭
}