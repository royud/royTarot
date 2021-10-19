const card_deck = [
  {
  card_name : "광대, 바보",
  card_direction : "정방향",
  card_explain : "모험, 무지",
  card : "./sorce/img/main/The_Fool.png",
  },
  {
  card_name : "광대, 바보",
  card_direction : "역방향",
  card_explain : "경솔, 어리석음",
  card : "./sorce/img/main/The_Fool_rev.png",
  },
  {
  card_name : "마술사, 마법사, 기술사",
  card_direction : "정방향",
  card_explain : "창조, 수완",
  card : "./sorce/img/main/The_Magician.png",
  },
  {
  card_name : "마술사, 마법사, 기술사",
  card_direction : "역방향",
  card_explain : "겁 많음, 기만",
  card : "./sorce/img/main/The_Magician_rev.png",
  },
  {
  card_name : "교황, 사제장, 법황, 고위 사제(여)",
  card_direction : "정방향",
  card_explain : "지식, 총명",
  card : "./sorce/img/main/The_High_Priestess.png",
  },
  {
  card_name : "교황, 사제장, 법황, 고위 사제(여)",
  card_direction : "역방향",
  card_explain : "잔혹, 무례함",
  card : "./sorce/img/main/The_High_Priestess_rev.png",
  },
  {
  card_name : "여제, 여황제",
  card_direction : "정방향",
  card_explain : "풍양, 모성",
  card : "./sorce/img/main/The_Empress.png",
  },
  {
  card_name : "여제, 여황제",
  card_direction : "역방향",
  card_explain : "과잉, 허영",
  card : "./sorce/img/main/The_Empress_rev.png",
  },
  {
  card_name : "황제",
  card_direction : "정방향",
  card_explain : "책임, 부성",
  card : "./sorce/img/main/The_Emperor.png",
  },
  {
  card_name : "황제",
  card_direction : "역방향",
  card_explain : "오만, 존대",
  card : "./sorce/img/main/The_Emperor_rev.png",
  },
  {
  card_name : "교황, 법황, 사제장",
  card_direction : "정방향",
  card_explain : "가르침, 관대함",
  card : "./sorce/img/main/The_Hierophant.png",
  },
  {
  card_name : "교황, 법황, 사제장",
  card_direction : "역방향",
  card_explain : "협량, 나태",
  card : "./sorce/img/main/The_Hierophant_rev.png",
  },
  {
  card_name : "연인 연애",
  card_direction : "정방향",
  card_explain : "연애, 쾌락",
  card : "./sorce/img/main/The_Lovers.png",
  },
  {
  card_name : "연인 연애",
  card_direction : "역방향",
  card_explain : "질투, 배신, 실연",
  card : "./sorce/img/main/The_Lovers_rev.png",
  },
  {
  card_name : "전차, 정복자",
  card_direction : "정방향",
  card_explain : "전진, 승리",
  card : "./sorce/img/main/The_Chariot.png",
  },
  {
  card_name : "전차, 정복자",
  card_direction : "역방향",
  card_explain : "폭주, 좌절, 패배",
  card : "./sorce/img/main/The_Chariot_rev.png",
  },
  {
  card_name : "힘, 기백, 강의, 역량",
  card_direction : "정방향",
  card_explain : "힘, 용기",
  card : "./sorce/img/main/Strength.png",
  },
  {
  card_name : "힘, 기백, 강의, 역량",
  card_direction : "역방향",
  card_explain : "본성, 자만",
  card : "./sorce/img/main/Strength_rev.png",
  },
  {
  card_name : "은둔자",
  card_direction : "정방향",
  card_explain : "탐색, 사려깊음",
  card : "./sorce/img/main/The_Hermit.png",
  },
  {
  card_name : "은둔자",
  card_direction : "역방향",
  card_explain : "음습, 폐쇄적, 탐욕",
  card : "./sorce/img/main/The_Hermit_rev.png",
  },
  {
  card_name : "운명의 수레바퀴, 운명",
  card_direction : "정방향",
  card_explain : "기회, 일시적인 행운",
  card : "./sorce/img/main/Wheel_of_Fortune.png",
  },
  {
  card_name : "운명의 수레바퀴, 운명",
  card_direction : "역방향",
  card_explain : "오산, 불운",
  card : "./sorce/img/main/Wheel_of_Fortune_rev.png",
  },
  {
  card_name : "정의, 재판의 여신",
  card_direction : "정방향",
  card_explain : "균형, 정당함",
  card : "./sorce/img/main/Justice.png",
  },
  {
  card_name : "정의, 재판의 여신",
  card_direction : "역방향",
  card_explain : "불균형, 편견, 부정",
  card : "./sorce/img/main/Justice_rev.png",
  },
  {
  card_name : "매달린 사람, 매달린 남자, 사형수, 형사자",
  card_direction : "정방향",
  card_explain : "자기 희생, 인내",
  card : "./sorce/img/main/The_Henged_Man.png",
  },
  {
  card_name : "매달린 사람, 매달린 남자, 사형수, 형사자",
  card_direction : "역방향",
  card_explain : "무의미한 희생, 맹목",
  card : "./sorce/img/main/The_Henged_Man_rev.png",
  },
  {
  card_name : "죽음, 사신",
  card_direction : "정방향",
  card_explain : "격변, 이별",
  card : "./sorce/img/main/Death.png",
  },
  {
  card_name : "죽음, 사신",
  card_direction : "역방향",
  card_explain : "변화의 유보, 고착",
  card : "./sorce/img/main/Death_rev.png",
  },
  {
  card_name : "절제",
  card_direction : "정방향",
  card_explain : "조화, 견실",
  card : "./sorce/img/main/Temperance.png",
  },
  {
  card_name : "절제",
  card_direction : "역방향",
  card_explain : "낭비, 불안정",
  card : "./sorce/img/main/Temperance_rev.png",
  },
  {
  card_name : "악마",
  card_direction : "정방향",
  card_explain : "사심, 속박, 타락",
  card : "./sorce/img/main/The_Devil.png",
  },
  {
  card_name : "악마",
  card_direction : "역방향",
  card_explain : "악순환으로부터의 각성",
  card : "./sorce/img/main/The_Devil_rev.png",
  },
  {
  card_name : "탑, 신의 집",
  card_direction : "정방향",
  card_explain : "파괴, 파멸",
  card : "./sorce/img/main/The_Tower.png",
  },
  {
  card_name : "탑, 신의 집",
  card_direction : "역방향",
  card_explain : "필요로 하는 파괴",
  card : "./sorce/img/main/The_Tower_rev.png",
  },
  {
  card_name : "별",
  card_direction : "정방향",
  card_explain : "희망, 동경",
  card : "./sorce/img/main/The_star.png",
  },
  {
  card_name : "별",
  card_direction : "역방향",
  card_explain : "환멸, 비애",
  card : "./sorce/img/main/The_star_rev.png",
  },
  {
  card_name : "달",
  card_direction : "정방향",
  card_explain : "불안, 애매함, 혼돈",
  card : "./sorce/img/main/The_Moon.png",
  },
  {
  card_name : "달",
  card_direction : "역방향",
  card_explain : "불안 해소, 명료함, 혼돈의 끝",
  card : "./sorce/img/main/The_Moon_rev.png",
  },
  {
  card_name : "태양",
  card_direction : "정방향",
  card_explain : "밝은 미래, 만족",
  card : "./sorce/img/main/The_Sun.png",
  },
  {
  card_name : "태양",
  card_direction : "역방향",
  card_explain : "연기, 실패",
  card : "./sorce/img/main/The_Sun_rev.png",
  },
  {
  card_name : "심판, 영겁",
  card_direction : "정방향",
  card_explain : "부활, 개선",
  card : "./sorce/img/main/Judgement.png",
  },
  {
  card_name : "심판, 영겁",
  card_direction : "역방향",
  card_explain : "재기불능, 후회",
  card : "./sorce/img/main/Judgement_rev.png",
  },
  {
  card_name : "세계, 우주",
  card_direction : "정방향",
  card_explain : "완성, 완전",
  card : "./sorce/img/main/The_World.png",
  },
  {
  card_name : "세계, 우주",
  card_direction : "역방향",
  card_explain : "미완성, 어중간함",
  card : "./sorce/img/main/The_World_rev.png",
  },
];