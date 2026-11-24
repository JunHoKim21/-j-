# 강남J비뇨기과 기존 PC·모바일 홈페이지 통합 AS-IS 인벤토리

- **수집 대상 PC:** `http://www.manclinic.com/` (실제 프레임 내부: `http://www.manclinic.com/@2018/`)
- **수집 대상 모바일:** `http://m.manclinic.com/`
- **수집 방식:** Python 스크립트를 통한 실제 HTML 원문 직접 수집 (HTTP 200 기준 PC 59개 페이지, 모바일 9개 페이지)
- **유의사항:** 실제 열람·수집한 HTML만 근거로 작성했으며, 이미지 내부 텍스트 중 HTML에 미기재된 내용은 통이미지 경로로 명시했습니다.

---

## 1. PC·모바일 전체 메뉴 및 URL 목록 (1:1 대조)

### 1-1. 대메뉴 및 하위 메뉴 1:1 대조표

| 구분(대메뉴) | PC 메뉴명 | PC URL (`http://www.manclinic.com/@2018/` 기준) | 모바일 대응 메뉴/배너 | 모바일 URL (`http://m.manclinic.com/` 기준) | 비고 |
|---|---|---|---|---|---|
| 공통/메인 | 메인 (로고) | `index.html` | 메인 (로고) | `index.html` | PC는 `main.html` frameset → `/@2018/` |
| 병원소개 | 의료진 소개 | `01_hp/hp_01.html` | (없음) | `-` | 모바일 메뉴 미제공 |
| 병원소개 | 진료안내 | `01_hp/hp_04.html` | (없음 — 팝업 이미지만 노출) | `-` | 모바일 전용 페이지 없음 |
| 병원소개 | 병원둘러보기 | `01_hp/hp_11.html` | (없음) | `-` | 모바일 미제공 |
| 병원소개 | 교육자 박천진 | `01_hp/hp_12.html` | (없음) | `-` | 모바일 미제공 |
| 병원소개 | 언론보도자료 | `01_hp/hp_05.html` | (없음) | `-` | 모바일 미제공 |
| 병원소개 | 대외활동 | `01_hp/hp_02.html` | (없음) | `-` | 모바일 미제공 |
| 병원소개 | VIDEO GALLERY (7개 탭) | `01_hp/hp_07.html ~ hp_07_07.html` | (없음) | `-` | 모바일 미제공 |
| 병원소개 | 연락처&찾아오시는 길 | `01_hp/hp_08.html` | 하단 고정바 `오시는 길` | `http://penisdoctor.co.kr/@2018/01_hp/hp_08.html` | 외부 도메인 PC 페이지로 연결 |
| 병원소개 | 비급여비용안내 | `01_hp/nonbenefit.html` | 드로어 `비급여비용안내` | `nonbenefit.html` | PC·모바일 표 항목 동일 |
| 병원소개(메인카드) | Thanks Letter (카드명: 논문 학술발표) | `01_hp/hp_09.html` | (없음) | `-` | 메인 카드 라벨과 실제 페이지 불일치 |
| 병원소개(추가발견) | hp_03.html / hp_06.html | `01_hp/hp_03.html, 01_hp/hp_06.html` | (없음) | `-` | GNB 미노출, 내부 링크 잔존 |
| 요로결석 | 요로결석 원인 증상 | `clinic_08/c8_0101.html` | 메인 배너 1 `요로결석` | `landing6.html` | 모바일 햄버거 메뉴에서 누락됨 |
| 요로결석 | 요로결석 진단 | `clinic_08/c8_0201.html` | (landing6.html 통합) | `landing6.html` | 모바일 단일 통이미지 랜딩 |
| 요로결석 | 요로결석 치료 (+하위2) | `clinic_08/c8_0301.html (c8_030101, c8_030102)` | (landing6.html 통합) | `landing6.html` | 모바일 단일 통이미지 랜딩 |
| 음경임플란트 | 음경임플란트 | `clinic_04/c4_0401.html` | 드로어 1 / 배너 2 `음경임플란트` | `landing1.html` | 1:1 대응 |
| 전립선 | 전립선 | `clinic_02/c2_0101.html` | (없음) | `-` | 모바일 미제공 |
| 전립선 | 전립선비대증 | `clinic_02/c2_0201.html` | 드로어 2 / 배너 3 `전립선비대증` | `landing2.html` | 1:1 대응 |
| 전립선 | HoLEP시술 | `clinic_02/c2_0301.html` | (landing2.html 통합) | `landing2.html` | 모바일 별도 페이지 없음 |
| 전립선 | 유로리프트 | `clinic_02/c2_0701.html` | (landing2.html 통합) | `landing2.html` | 모바일 별도 페이지 없음 |
| 전립선 | 전립선염 | `clinic_02/c2_0401.html` | (없음) | `-` | 모바일 미제공 |
| 전립선 | 전립선암 | `clinic_02/c2_0501.html` | (없음) | `-` | 모바일 미제공 |
| 전립선 | 전립선통 | `clinic_02/c2_0601.html` | (없음) | `-` | 모바일 미제공 |
| 남성성형 | 귀두확대술 | `clinic_03/c3_0101.html` | 배너 6 `남성확대수술` | `landing5.html` | 드로어 메뉴명이 '음경 이물질 제거'로 오기재 |
| 남성성형 | 음경굵기확대술 | `clinic_03/c3_0201.html` | (landing5.html 통합) | `landing5.html` | 모바일 단일 랜딩 |
| 남성성형 | 음경길이연장술 | `clinic_03/c3_0301.html` | (landing5.html 통합) | `landing5.html` | 모바일 단일 랜딩 |
| 남성성형 | 음경이물질제거 | `clinic_03/c3_0401.html` | 드로어 4 / 배너 5 `음경 이물질 제거` | `landing4.html` | 1:1 대응 |
| 남성성형 | 음경만곡증 | `clinic_03/c3_0501.html` | 드로어 3 / 배너 4 `음경만곡증` | `landing3.html` | 1:1 대응 |
| 남성성형 | 함몰음경 | `clinic_03/c3_0601.html` | (없음) | `-` | 모바일 미제공 |
| 성기능장애 | 조루증이란 | `clinic_06/c6_0101.html` | (없음) | `-` | 모바일 미제공 |
| 성기능장애 | 조루증 원인 진단 | `clinic_06/c6_0201.html (GNB는 c6_0101.html 오류)` | (없음) | `-` | PC GNB 링크 오류 |
| 성기능장애 | 조루증의 치료 | `clinic_06/c6_0301.html (GNB는 c6_0101.html 오류)` | (없음) | `-` | PC GNB 링크 오류 |
| 성기능장애 | 발기부전 | `clinic_04/c4_0101.html` | (없음) | `-` | 모바일 미제공 |
| 성기능장애 | 성기능검사 | `clinic_04/c4_0201.html` | (없음) | `-` | 모바일 미제공 |
| 성기능장애 | 발기부전치료 | `clinic_04/c4_0301.html` | (없음) | `-` | 모바일 미제공 |
| 정관수술 | 정관수술 개요 | `clinic_05/c5_0101.html` | (없음) | `-` | 모바일 미제공 |
| 정관수술 | 무도정관수술 | `clinic_05/c5_0201.html` | (없음) | `-` | 모바일 미제공 |
| 정관수술 | 미세정관복원수술 | `clinic_05/c5_0301.html` | (없음) | `-` | 모바일 미제공 |
| 포경수술 | 레이저포경수술 | `clinic_07/c7_0101.html` | (없음) | `-` | 모바일 미제공 |
| 상담/예약 | Meet the expert (수술상담) | `02_coun/qna.html` | 드로어 6 / CTA `Meet the expert(수술상담)` | `coun.html` | 동일 게시판 DB 연동 |
| 상담/예약 | 온라인예약 | `02_coun/rev.html` | 드로어 7 / CTA / 하단바 `온라인예약` | `http://www.manclinic.com/@2018/02_coun/rev.html` | PC 페이지로 직접 연결 (하단바는 `//02_coun/` 오타) |
| 상담/예약(구) | 공개상담 (메인카드 온라인상담) | `02_coun/qna1.html` | (없음) | `-` | 2020년 10월 이후 게시물 중단 |
| FAQ/유틸 | FAQ (음경/귀두/전립선/고환) | `05_faq/faq_01.html ~ faq_04.html` | (없음) | `-` | PC 우측 퀵메뉴에만 존재 |
| 회원/약관 | 로그인 / 회원가입 | `04_member/login.html, join1.html` | (없음) | `-` | PC 상단 유틸에만 존재 |
| 회원/약관 | 개인정보처리방침 / 이용약관 | `04_member/member_01.html, member_02.html` | (없음) | `-` | 모바일 푸터에 약관 링크 없음 |

---

## 2. PC vs 모바일 불일치 항목 및 오류 진단

| 영역 | PC 현황 | 모바일 현황 | 불일치 / 문제점 |
|---|---|---|---|
| 메뉴 구성 규모 | 대메뉴 9개 / 2차 메뉴 35개 이상 + FAQ + 회원/약관 | 햄버거 메뉴 1-depth 8개(하위 없음), 메인 배너 6개 | 모바일에 병원소개(의료진·진료안내·둘러보기·영상 등), 전립선염/암/통, 성기능장애(조루/발기부전), 정관수술, 포경수술, FAQ, 약관 페이지가 모두 부재 |
| 모바일 메뉴 오기재·누락 | 정상 분류(남성성형, 요로결석) | 드로어 5번(`landing5.html`)이 `음경 이물질 제거`로 중복 표기, `요로결석(landing6.html)` 누락 | 실제 `landing5.html`은 남성확대수술이며, 메인 1번 배너인 요로결석이 메뉴에서 빠져 있음 |
| PC GNB 링크 오류 | `조루증이란/원인진단/치료` 3개 GNB 링크가 모두 `clinic_06/c6_0101.html`로 연결 | 해당 메뉴 없음 | 실제 서버에 `c6_0201.html`, `c6_0301.html`이 존재하지만 GNB에서 연결 누락 |
| PC 내부 상대경로 404 | `clinic_02`~`clinic_08` 내부에 `01_hp/hp_03.html`, `01_hp/hp_06.html` 상대경로 링크 존재 | 해당 없음 | 상위 폴더(`../`) 누락으로 14개 깨진 링크(404) 발생 |
| 전화번호 | 대표 `02-3018-7575`, 상담 휴대폰 `010-9190-7575`, FAX `02-516-2030` | 헤더·하단바 `tel:0230187575`, 푸터 이미지 `010-9190-7575`, **이미지맵 링크 `tel:01031688275`** | 모바일 푸터 핫라인 이미지에 적힌 번호(`010-9190-7575`)와 실제 클릭 시 걸리는 번호(`010-3168-8275`) 불일치 |
| 진료시간·휴진일 | 메인 `.depth7` & `hp_04.html`: 월화목금 9~12/14~17, **수요일 휴진**, 토 9~12:30 / 팝업 `20260824_popup.jpg`: **이웅희(목 휴진)·박천진(월·목 오후 휴진, 수 오전/오후 진료)** | 푸터·본문에 진료시간 텍스트 없음 / 팝업 `20260824_popup.jpg`에만 2인 시간표 표시 | 신규 2인 진료체제 팝업과 기존 본문(`수요일 휴진`) 정보가 정면 충돌 |
| 상담시간 | 헤더 `header_tel.png` & `hp_04/hp_08`: 월~금 9:00~18:00, 토 9:00~13:00 / 메인 카드 `depth5_2.png`: **월~토 8:00~20:00** | 푸터 배너 `footer_coun.jpg`: **24시간 HOTLINE** | 동일 사이트 내 상담 가능 시간이 3가지(9~18시 / 8~20시 / 24시간)로 상이 |
| 의료진 정보 | `01_hp/hp_01.html`: 박천진 원장 단독 1인 / 팝업 `20260810_popup.jpg`: 이웅희 원장 2026.8.21 진료 시작 | 의료진 소개 페이지 없음 (팝업만 노출) | 신규 영입 의료진(이웅희 원장) 정보가 의료진 소개 페이지에 미반영 |
| 상담·예약 폼 | `rev.html`: 이름/생년월일/이메일/전화/핸드폰/예약일자·시간/제목/내용 + `개인정보취급방침` 단일 동의(`label for=agree` vs `id=pensok` 불일치). `qna.html`: 수술상담 게시판. `qna1.html`: 2020년 중단 구 게시판 | `coun.html`: 카테고리/이름/휴대폰/성별/생년/제목/내용/사진5장/비밀번호 + `개인정보취급방침` 단일 동의. `온라인예약`은 PC `rev.html`로 이동 | PC·모바일 모두 **민감정보(건강정보) 별도 동의 체크박스 미구비**. 모바일 `coun.html` 목록에 작성일 미표시, 최근 60건 전부 `대기` 상태 |
| 오시는 길·예약 외부 연결 | 자체 도메인 `/@2018/01_hp/hp_08.html`, `/@2018/02_coun/rev.html` | 오시는 길 → `http://penisdoctor.co.kr/@2018/01_hp/hp_08.html`, 온라인예약 → `http://www.manclinic.com/@2018//02_coun/rev.html` | 타 도메인(`penisdoctor.co.kr`) 혼용 및 슬래시 중복(`//`) 오타 |
| 콘텐츠 구현 방식 | HTML 텍스트 + 설명 이미지(도식·사진) 혼합 (`hp_12.html`, `c3_0101.html`, `c6_0301.html` 등은 통이미지) | `landing1~6.html` 전체가 **100% 통이미지**(CSS background-image, HTML 텍스트 0자) | 모바일 검색/접근성 불가, `width=800` 고정폭으로 375/390px 화면 깨짐 |

---

## 3. 각 서브 페이지 본문 텍스트 및 삽입된 이미지 경로 목록

### 3-1. PC 페이지 전체 (`http://www.manclinic.com/@2018/`)

#### [PC 메인 페이지] `index.html`
- **URL:** `http://www.manclinic.com/@2018/index.html`
- **삽입 이미지 (19건):**
  - `[img]` `img/main/depth5_1.png` → `http://www.manclinic.com/@2018/img/main/depth5_1.png`
  - `[img]` `img/main/depth5_2.png` → `http://www.manclinic.com/@2018/img/main/depth5_2.png`
  - `[img]` `img/main/depth5_3.png` → `http://www.manclinic.com/@2018/img/main/depth5_3.png`
  - `[img]` `img/main/depth5_4.png` → `http://www.manclinic.com/@2018/img/main/depth5_4.png`
  - `[bg]` `img/main/vs_1_3.png` → `http://www.manclinic.com/@2018/img/main/vs_1_3.png`
  - `[bg]` `img/main/vs_1_2.png` → `http://www.manclinic.com/@2018/img/main/vs_1_2.png`
  - `[bg]` `img/main/vs_1_1.png` → `http://www.manclinic.com/@2018/img/main/vs_1_1.png`
  - `[bg]` `img/main/depth11_1.jpg` → `http://www.manclinic.com/@2018/img/main/depth11_1.jpg`
  - `[bg]` `img/main/depth11_2.jpg` → `http://www.manclinic.com/@2018/img/main/depth11_2.jpg`
  - `[bg]` `img/main/depth11_3.jpg` → `http://www.manclinic.com/@2018/img/main/depth11_3.jpg`
  - `[bg]` `img/main/depth2_1.jpg` → `http://www.manclinic.com/@2018/img/main/depth2_1.jpg`
  - `[bg]` `img/main/depth2_2.jpg` → `http://www.manclinic.com/@2018/img/main/depth2_2.jpg`
  - `[bg]` `img/main/depth2_3.jpg` → `http://www.manclinic.com/@2018/img/main/depth2_3.jpg`
  - `[bg]` `img/main/depth3_1.jpg` → `http://www.manclinic.com/@2018/img/main/depth3_1.jpg`
  - `[bg]` `img/main/depth3_2.jpg` → `http://www.manclinic.com/@2018/img/main/depth3_2.jpg`
  - `[bg]` `img/main/depth3_3.jpg` → `http://www.manclinic.com/@2018/img/main/depth3_3.jpg`
  - `[bg]` `img/main/depth4_1.jpg` → `http://www.manclinic.com/@2018/img/main/depth4_1.jpg`
  - `[bg]` `img/main/depth4_2.jpg` → `http://www.manclinic.com/@2018/img/main/depth4_2.jpg`
  - `[bg]` `img/main/depth4_3.jpg` → `http://www.manclinic.com/@2018/img/main/depth4_3.jpg`
- **본문 텍스트 (391자):**
  > 이전
  > 다음
  > 요로결석
  > 1
  > 요로결석
  > 요로결석 원인 증상
  > 요로결석 진단
  > 요로결석 치료
  > 이전
  > 다음
  > 남성성형수술
  > 1
  > 남성성형수술
  > 음경성형
  > 음경임플란트LGX
  > 귀두확대술
  > 이전
  > 다음
  > 음낭수술
  > 1
  > 발기부전
  > 발기부전
  > 성기능검사
  > 발기부전치료
  > 이전
  > 다음
  > 전립선시술
  > 전립선시술
  > HoLEP
  > Combi-Operation
  > 검사에서 시술까지
  > 이전
  > 다음
  > 강남J비뇨기과 Video Gallery
  > 진료시간
  > 월화목금 9:00 - 12:00 (오전예약진료) / 14:00 - 17:00
  > 수요일 휴진
  > 토 9:00 - 12:30
  > * 평일 오전진료는 예약제로만 진행되니, 내원 전 반드시 유선문의 부탁드립니다.
  > * 오후 진료도 예약우선제를 시행하므로 일반방문시에는 진료대기 시간이 있을 수 있습니다.
  > 오시는 길
  > 서울시 강남구 학동로 203 4F

#### [병원소개 > 의료진 소개] `01_hp/hp_01.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/hp_01.html`
- **삽입 이미지 (4건):**
  - `[img]` `img/hp1_0101.jpg` → `http://www.manclinic.com/@2018/01_hp/img/hp1_0101.jpg`
  - `[img]` `img/hp1_doc_sung.jpg` → `http://www.manclinic.com/@2018/01_hp/img/hp1_doc_sung.jpg`
  - `[img]` `img/hp1_0103.gif` → `http://www.manclinic.com/@2018/01_hp/img/hp1_0103.gif`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg`
- **본문 텍스트 (2810자):**
  > 강남J비뇨기과 소개
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내
  > 의료진 소개
  > 의료진 소개
  > 박천진 대표원장
  > 비뇨기과 전문의
  > 연세대학교 의학과
  > 대한비뇨기과학회 학술위원
  > 대한 비뇨기과학회 정회원(KUA)(#1032)
  > 미국 비뇨기과학회 정회원(AUA)(#98112)
  > 연세대학교 비뇨기과학 외래교수
  > 한림대학교 비뇨기과학 외래교수
  > 대한 남성과학회 정회원
  > 대한 요로감염학회 정회원
  > 대한 전립선학회 정회원
  > 대한 성학회 정회원
  > 뉴스매거진 운영위원
  > 전 수도통합병원비뇨기과 과장 역임
  > Proctorship in penile implant Boston Scientific Korea Expert in HoLEP, Lumenis USA
  > 컬럼 리스트
  > 주간동아 "알콩달콩 섹스파일" 30회 연재
  > 과학기술처 발생, "박천진의 성의 과학" 연재
  > 보건신문 "박천진의 섹스과학" 연재
  > 뉴스매거진 "박천진의 성의 과학" 연재
  > 건강다이제스트, 전립선질환과 귀두 확대 다수 남성의학 컬럼 기고
  > 스포츠투데이, "박천진의 섹스파일" 16회 연재
  > 월간 신동아, 발기부전증의 치료(3-piece 음경보형물)
  > 주간한국, 남성증명서
  > 매경이코노미스트 100자 조언
  > 여성동아, 해부학적 근거한 성감연구
  > 여성조건, 술과 섹스와 관계
  > 방송활동
  > MBC라디오, 황선숙의 건강한 아침, 비뇨기과 우리집 주치의 - 정관수술, 조루증, 전립선질환, 정관 복원수술 등에 대한 상담
  > SBS라디오, 이봉원의 으랏차차, 부부클리닉 고정패널
  > MBC TV 신기한 서프라이즈, 자웅동체질환
  > MBCTV 9시 뉴스데스트 성인용품의 비뇨기과학적인 피해 상황설명
  > 한경TV전립선질환, 발기부전
  > 매경TV 전립선비대증, 발기부전 치료인 음경보형물
  > 재능방송 TV 어린이 포경수술에 대한 올바른 이해
  > 성시현 원장
  > 비뇨기과 전문의
  > 연세대학교 원주의과대학 의학과 졸업
  > 삼성서울병원 비뇨의학과 수료
  > 공군 교육사령부 비뇨의학과장
  > 대한비뇨의학회 정회원
  > 미국비뇨의학회 정회원
  > 대한비뇨기종양학회 정회원
  > 대한남성과학회 정회원
  > 대한로봇내시경학회 정회원
  > 대한전립선학회 정회원
  > 안녕하세요!
  > 강남J비뇨기과 원장 박천진입니다.
  > 비뇨기과학은 남성에서 비뇨기관(Urinary organ) 부신 및 남성생식기관, 여성에서 비뇨기관, 부신의 외과적 질환을 다루는 전문분야입니다.
  > 비뇨기관은 요의 생성, 운반, 배설의 기능을 가진 신(kidney), 요관(Ureter), 방광 (Urinary Bladder), 요도( Urethra)로 구성되어 있습니다.
  > 남성생식기관은 쌍으로 이루어진 고환(Testis), 부고환 (Epididymis), 정관(Vas), 사정관과 하나의 음낭과 음경 (Penis), 그리고 3개의 부속성선,
  > 즉 전립선(Prostate), 정낭 (Seminal vesicle), 구요도선(Cowper's gland)으로 이루어져 있습니다.
  > 여성에서는, 남자보다 짧고 굵은 요도로 방광염과, 요실금 증상이 대표적인 여성 비뇨기과계 질환입니다.
  > 1999년 6월부터 의료상담을 하루도 빠지지 않고, 직접 상담한 보람으로, 많은 분들이 정말로 원하시는 정보가 무엇인지를 정확히 알게 되었습니다.
  > 이를 반영하여, 이번에 홈페이지를 새롭게 단장하였습니다.
  > 많은 분들이 비뇨기과 질환(남성의학, 여성 요실금 질환) 에 대한 정확한 정보를 획득해서, 가장 최선의 진료를 받도록 도움을 주는 것이 우리 홈페이지의 존재 이유입니다.
  > 저 또한, 각종 국 내외 학회 활동 등, 연구활동을 통해서, 시시때때로 변하는 최신 비뇨기과 정보를 제공할 수 있도록 항상 노력해서, 참신하고 신뢰받는
  > 우리 병원 홈페이지가 될 것을 약속드리겠습니다.
  > 특별히 모든 수술을 적용할 때 3S(Safe, Simple, Speed)에 충실합니다.
  > 아무리 효과가 좋다고 하는 수술이더라도, 수술자가, 수술을 실제적으로 집도할 때, 안전하게(Safe)수술을 시행해야 하고, 수술전에 충분하게 상담하여
  > 수술에 대한 작전을 치밀하게 착안하고, 군더덕이 동작없이, 간결(Simple )하고 빠르게(Speed) 해야 남성의학수술을 완벽하게 할 수 있습니다.
  > 이러한 3S를 충실히 이행하기 위해서는, 선진 의학 기술정보에 대한 부단한 연구와 이것을 병원에 실제적으로 적용시킬려고 노력하는 것입니다.
  > 두 대의 첨단 소독기계와 자외선 소독기가 자체 설치된(원장이 직접 설계 제작)두개의 이 수술방에서 원장이 직접 고안한 첨단 수술기구등을 사용함으로서
  > 불필요한 dead time 없이, 빠르고 간결하게 시행하므로 기존의 수술 술기로 시술 받았던 환자 보다도, 회복기간 단축, 합병증 가능성 감소, 예방효과 증대가 있습니다.
  > 우리 병원에서 이루어 지는 모든 수술은 최소한의 국소 신경 마취를 적용함으로 마취약제의 전신에 마취약제 독성을 최소화하고, 수술 받는 동안에도 첨단 활력증후 모니터링
  > 기계로 실시간으로 생체 활력 증후(맥박, 산소포화도, 혈압, 호흡수)모니터링하므로서 안전하고 편안한 수술 영역을 확보하고 있습니다.
  > 수술 받으시는 입장에서는 좋아하는 편안한 음악을 청취하는 수술중 음악요법(IOM: IntraOperative Music)을 적용함으로서,
  > 수술에 대한 막연한 불안감을 최소화하기 위해 각 각 환자 중심위주로 모든 검사와 수술을 집도하고 있습니다. 그러기 위해서는, 병원의 팀웍과 의료인으로서의
  > 프로서비스 자질이 중요한데, 우리 병원에서만, 최소한 2년 이상 근무하고 원장이 직접 전문 교육시킨 베테랑 정식 간호사 출신 3명이 수술팀웍을 이루고 있습니다.
  > 우리 병원은 모든 남성의학 수술 술기를 적용할 때, 3S 정신에 입각하여 비뇨기과학적으로 고민하는 남성과 여성들에게 좋은 의료 서비스를 제공하기 위해서
  > 연구 노력하는 병원입니다.
  > 감사합니다.

#### [병원소개 > 진료안내] `01_hp/hp_04.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/hp_04.html`
- **삽입 이미지 (10건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg`
  - `[bg]` `../img/common/num_bl_01.png` → `http://www.manclinic.com/@2018/img/common/num_bl_01.png`
  - `[bg]` `../img/common/num_bl_02.png` → `http://www.manclinic.com/@2018/img/common/num_bl_02.png`
  - `[bg]` `../img/common/num_bl_03.png` → `http://www.manclinic.com/@2018/img/common/num_bl_03.png`
  - `[bg]` `../img/common/num_bl_04.png` → `http://www.manclinic.com/@2018/img/common/num_bl_04.png`
  - `[bg]` `../img/common/num_bl_05.png` → `http://www.manclinic.com/@2018/img/common/num_bl_05.png`
  - `[bg]` `../img/common/num_bl_06.png` → `http://www.manclinic.com/@2018/img/common/num_bl_06.png`
  - `[bg]` `../img/common/num_bl_07.png` → `http://www.manclinic.com/@2018/img/common/num_bl_07.png`
  - `[bg]` `../img/common/num_bl_08.png` → `http://www.manclinic.com/@2018/img/common/num_bl_08.png`
  - `[bg]` `../img/common/num_bl_09.png` → `http://www.manclinic.com/@2018/img/common/num_bl_09.png`
- **본문 텍스트 (1464자):**
  > 강남J비뇨기과 소개
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내
  > 진료안내
  > 진료시간 안내
  > 월,화,목,금
  > 9:00 - 12:00 (오전예약진료) / 14:00 - 17:00
  > 수요일
  > 휴진
  > 토요일
  > 9:00 ~ 12:30 (마지막 진료접수)
  > 점심시간
  > 13:00 ~ 14:00
  > 공휴일,일요일
  > 휴무
  > 상담시간
  > 월 - 금 9:00 ~ 18:00
  > 토요일 9:00 ~ 13:00
  > * 평일 오전진료는 예약제로만 진행되니, 내원 전 반드시 유선문의 부탁드립니다.
  > * 오후 진료도 예약우선제를 시행하므로 일반방문시에는 진료대기 시간이 있을 수 있다는 점 양해부탁드립니다.
  > 병은 소문을 내라고 했습니다.
  > 그러나, 그렇다고 누구에게 아무나 문의할 수 없는 일이지요.
  > 귀하의 프라이버시를 확실히 보장하면서, 최선의 치료 효과를 위해 다년간,
  > 남성의학 분야에만 매진 해 온, 우리 병원 고유의 노하우와 경험을 갖춘 전문가적인 의료진을 만날 수 있습니다.
  > 이제 혼자서 고민하거나, 부끄러워 하지 마시고, 말하기 어려운 부끄러운 고민이나 기능장애에 대해 따뜻한 이해와 전문적인 진료를 받으실 수 있습니다.
  > 두드리십시요. 그러면 열린 것입니다.
  > 만약 귀하가 병원에서 다른 분들과 마주치는 것이 꺼려 진다면 프라이버시를 보호해 줄 세심한 시스템이 마련되어 있습니다.
  > 여러 개의 독립된 진찰실 및 상담실이 있어 편안한 마음으로 상담 및 진료할 수 있습니다.
  > 모든 시술과 검사에는 의사와 남자 간호사들만 참여합니다.
  > 전문분야에 관한 한 종합병원이상의 진단기기 및 치료장비를 갖추고 있습니다.
  > 인터넷 예약시스템 : 진료내용에 대한 확실한 비밀 보장 등 앞서가는 시스템을 갖추고 있습니다.
  > 정확한 의료정보를 제공하고 새로운 의료기술의 개발을 위해 노력하고 있습니다.
  > 두 개의 접수창구 : 신속한 접수로 대기시간 최소화
  > 남성 의학실 : 독립된 5개의 개인진료실에서 프라이버시의 침해없이 의사와 충분한 시간을 갖고 상담 및 진료가 이루어지므로써 보다 높은 치료효과를 거둘 수 있습니다.
  > 전자 챠트 시스템 : 처방전이나 종이챠트의 경우 환자의 개인신상에 관한 기록이 타인에게노출될 가능성이 있고 또한 분실, 훼손의 위험이 따르므로 이를 방지하기 위한 전자 차트 시스템 설치
  > 인터넷 예약 : 접수절차 생략-즉시 진료할 수 있어 편리합니다.
  > 다년간 비뇨기과 병원 및 성 클리닉에서 근무한 경험이 있는 두 명의 남자 상담원들이 항상 자세하고 친절하게 궁금증에 대해 답변을 드리고 있습니다.
  > 친절하고 세심한 간호사들이 환자분들의 접수와 안내를 돕고 있습니다. 검사결과나 간단한 문의에 대해서는 병원에 직접 오실 필요없이 전화로 답변을 들을 수 있습니다.
  > 일반 환자분들은 가정의 거실과 같은 아늑하고 우아한 분위기에서 차를 마시며 편안하게 의사의진료를 기다릴 수 있습니다.
  > 병원빌딩내 충분한 주차 공간을 갖춘 지하 주차장이 따로 마련되어 있습니다.

#### [병원소개 > 병원둘러보기] `01_hp/hp_11.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/hp_11.html`
- **삽입 이미지 (31건):**
  - `[img]` `img/visual_01.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_01.jpg`
  - `[img]` `img/visual_02.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_02.jpg`
  - `[img]` `img/visual_03.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_03.jpg`
  - `[img]` `img/visual_04.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_04.jpg`
  - `[img]` `img/visual_05.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_05.jpg`
  - `[img]` `img/visual_06.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_06.jpg`
  - `[img]` `img/visual_07.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_07.jpg`
  - `[img]` `img/visual_08.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_08.jpg`
  - `[img]` `img/visual_09.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_09.jpg`
  - `[img]` `img/visual_10.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_10.jpg`
  - `[img]` `img/visual_11.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_11.jpg`
  - `[img]` `img/visual_12.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_12.jpg`
  - `[img]` `img/visual_13.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_13.jpg`
  - `[img]` `img/visual_14.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_14.jpg`
  - `[img]` `img/visual_15.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_15.jpg`
  - `[img]` `img/visual_16.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_16.jpg`
  - `[img]` `img/visual_17.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_17.jpg`
  - `[img]` `img/visual_18.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_18.jpg`
  - `[img]` `img/visual_19.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_19.jpg`
  - `[img]` `img/visual_20.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_20.jpg`
  - `[img]` `img/visual_21.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_21.jpg`
  - `[img]` `img/visual_22.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_22.jpg`
  - `[img]` `img/visual_23.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_23.jpg`
  - `[img]` `img/visual_24.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_24.jpg`
  - `[img]` `img/visual_25.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_25.jpg`
  - `[img]` `img/visual_26.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_26.jpg`
  - `[img]` `img/visual_27.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_27.jpg`
  - `[img]` `img/visual_28.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_28.jpg`
  - `[img]` `img/visual_29.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_29.jpg`
  - `[img]` `img/visual_30.jpg` → `http://www.manclinic.com/@2018/01_hp/img/visual_30.jpg`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg`
- **본문 텍스트 (123자):**
  > 강남J비뇨기과 소개
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내
  > 병원 둘러보기
  > 병원 둘러보기

#### [병원소개 > 교육자 박천진] `01_hp/hp_12.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/hp_12.html`
- **삽입 이미지 (7건):**
  - `[bg]` `img/hp12_01.jpg` → `http://www.manclinic.com/@2018/01_hp/img/hp12_01.jpg`
  - `[bg]` `img/hp12_02.jpg` → `http://www.manclinic.com/@2018/01_hp/img/hp12_02.jpg`
  - `[bg]` `img/hp12_03.jpg` → `http://www.manclinic.com/@2018/01_hp/img/hp12_03.jpg`
  - `[bg]` `img/hp12_04.jpg` → `http://www.manclinic.com/@2018/01_hp/img/hp12_04.jpg`
  - `[bg]` `img/hp12_05.jpg` → `http://www.manclinic.com/@2018/01_hp/img/hp12_05.jpg`
  - `[bg]` `img/hp12_06.jpg` → `http://www.manclinic.com/@2018/01_hp/img/hp12_06.jpg`
  - `[bg]` `img/hp12_07.jpg` → `http://www.manclinic.com/@2018/01_hp/img/hp12_07.jpg`
- **본문 텍스트 (107자):**
  > 강남J비뇨기과 소개
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내

#### [병원소개 > 언론보도자료] `01_hp/hp_05.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/hp_05.html`
- **삽입 이미지 (13건):**
  - `[img]` `../../upload/masscom_UP1357493078.jpg` → `http://www.manclinic.com/upload/masscom_UP1357493078.jpg`
  - `[img]` `../../upload/masscom_UP1371269972.jpg` → `http://www.manclinic.com/upload/masscom_UP1371269972.jpg`
  - `[img]` `../../upload/masscom_UP1271116837.jpg` → `http://www.manclinic.com/upload/masscom_UP1271116837.jpg`
  - `[img]` `../../upload/masscom_UP1381628865.jpg` → `http://www.manclinic.com/upload/masscom_UP1381628865.jpg`
  - `[img]` `../../upload/masscom_UP1032139786.jpg` → `http://www.manclinic.com/upload/masscom_UP1032139786.jpg`
  - `[img]` `../../upload/masscom_UP1235445630.jpg` → `http://www.manclinic.com/upload/masscom_UP1235445630.jpg`
  - `[img]` `../../upload/masscom_UP1036256570.jpg` → `http://www.manclinic.com/upload/masscom_UP1036256570.jpg`
  - `[img]` `../../upload/masscom_UP1385093777.jpg` → `http://www.manclinic.com/upload/masscom_UP1385093777.jpg`
  - `[img]` `../../upload/masscom_UP1204818082.jpg` → `http://www.manclinic.com/upload/masscom_UP1204818082.jpg`
  - `[img]` `../../upload/masscom_UP1334690092.jpg` → `http://www.manclinic.com/upload/masscom_UP1334690092.jpg`
  - `[img]` `http://www.manclinic.com/upload/masscom2_UP1164322410.jpg` → `http://www.manclinic.com/upload/masscom2_UP1164322410.jpg`
  - `[img]` `http://www.manclinic.com/upload/masscom_UP1365301840.jpg` → `http://www.manclinic.com/upload/masscom_UP1365301840.jpg` | alt: "첨부파일"
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg`
- **본문 텍스트 (903자):**
  > 강남J비뇨기과 소개
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내
  > 언론보도자료
  > 리스트
  > 박천진의 남성 upgrade_57 성적으로 흥분시키는 ‘향기의 힘’
  > 출처 : 한경비즈니스
  > 날짜 : 2011-07-20 17:22:28
  > 박천진의 남성 upgrade_56 소변 색깔과 내 몸의 건강 상태
  > 출처 : 한경비즈니스
  > 날짜 : 2011-07-20 17:07:08
  > 박천진의 남성 upgrade_55 중년의 불청객 ‘남성 갱년기’
  > 출처 : 한경비지니스
  > 날짜 : 2011-06-24 14:00:44
  > 박천진의 남성 upgrade_54 섹스가 우리 몸에 미치는 긍정적 효과
  > 출처 : 한경비지니스
  > 날짜 : 2011-06-15 12:28:15
  > 박천진의 남성 upgrade_53 수정 확률 크게 높이는 방법
  > 출처 : 한경비지니스
  > 날짜 : 2011-06-08 12:24:00
  > 박천진의 남성 upgrade_52 전립선비대증의 새로운 수술법
  > 출처 : 한경비지니스
  > 날짜 : 2011-06-01 12:23:52
  > 박천진의 남성 upgrade_51 포경수술을 둘러싼 진실과 거짓
  > 출처 : 한경비지니스
  > 날짜 : 2011-05-25 12:21:22
  > 박천진의 남성 upgrade_50 여성의 ‘성감뇌’를 단련시키는 방법
  > 출처 : 한경비지니스
  > 날짜 : 2011-05-18 12:21:15
  > 박천진의 남성 upgrade_49 ‘시간과 정성 필요한’ 정관 복원 수술
  > 출처 : 한경비지니스
  > 날짜 : 2011-05-11 12:17:55
  > 박천진의 남성 upgrade_48 정관 절제술의 진화는 계속된다
  > 출처 : 한경비지니스
  > 날짜 : 2011-05-04 12:16:22
  > 1  2  3  4  5  6  7  8  9  10  Next  Last

#### [병원소개 > 대외활동] `01_hp/hp_02.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/hp_02.html`
- **삽입 이미지 (1건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg`
- **본문 텍스트 (449자):**
  > 강남J비뇨기과 소개
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내
  > 대외활동
  > 상담리스트
  > NO
  > 제목
  > 날짜
  > 47 | 홀렙수술 전문의 박천진원장 인터뷰
  > 46 | 대한비뇨기과학회 학술위원 임명
  > 45 | 대표 원장님 2009 추계학술대회 연자 초청 2009-12-03
  > 44 | MBC 뉴스투데이 박 천 진 원장님 출연 2009-12-03 14:59:43
  > 43 | 원장님 MBC 뉴스투데이 방송 2009-12-03
  > 42 | 노인과 전립선비대증 2008-07-21 11:25:24
  > 41 | 2008년 전국대학교 학생처장 협의회 초청강의
  > 40 | 전국대학교 학생처장협의회 초청 강의
  > 39 | 원장님 MBC 방송 출연
  > 38 | 원장님 MBC 생방송 오늘 아침 방송 출연
  > 1  2  3  4  5

#### [병원소개 > VIDEO GALLERY (동시수술)] `01_hp/hp_07.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/hp_07.html`
- **삽입 이미지 (5건):**
  - `[img]` `img/gal_thum_01_01.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_01_01.jpg`
  - `[img]` `img/gal_thum_01_02.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_01_02.jpg`
  - `[img]` `img/gal_thum_01_03.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_01_03.jpg`
  - `[img]` `img/gal_thum_01_04.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_01_04.jpg`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg`
- **본문 텍스트 (529자):**
  > 강남J비뇨기과 소개
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내
  > VIDEO Gallery
  > VIDEO Gallery
  > 음경임플란트/
  > 전립선비대증 동시수술
  > (H-combi, Uro-combi)
  > 음경임플란트
  > (Penile Implant)
  > 전립선비대증 수술
  > (Holep, Urolift)
  > 기하학적 음경만곡수술
  > (Geometry Peyronie's Operation)
  > 음경/귀두 확대수술
  > (Penile Augmentation)
  > 이물질 제거수술
  > (Foreign body Removal)
  > 정관/포경수술
  > (Vasectomy,
  > Circumcision)
  > 음경임플란트/전립선비대증 동시수술(H-combi, Uro-combi)
  > 홀렙과 음경임플란트 동시수술(H-combi)
  > 유로리프트와 음경임플란트 동시수술(Uro-combi)
  > H-combi 와 Uro-combi 의 차이점
  > Uro-combi 수술 후 15일차 환자 인터뷰
  > youtube 더보기

#### [병원소개 > VIDEO GALLERY (음경임플란트)] `01_hp/hp_07_02.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/hp_07_02.html`
- **삽입 이미지 (11건):**
  - `[img]` `img/gal_thum_02_01.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_01.jpg`
  - `[img]` `img/gal_thum_02_02.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_02.jpg`
  - `[img]` `img/gal_thum_02_03.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_03.jpg`
  - `[img]` `img/gal_thum_02_04.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_04.jpg`
  - `[img]` `img/gal_thum_02_05.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_05.jpg`
  - `[img]` `img/gal_thum_02_06.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_06.jpg`
  - `[img]` `img/gal_thum_02_07.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_07.jpg`
  - `[img]` `img/gal_thum_02_08.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_08.jpg`
  - `[img]` `img/gal_thum_02_09.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_09.jpg`
  - `[img]` `img/gal_thum_02_10.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_10.jpg`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg`
- **본문 텍스트 (594자):**
  > 강남J비뇨기과 소개
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내
  > VIDEO Gallery
  > VIDEO Gallery
  > 음경임플란트/
  > 전립선비대증 동시수술
  > (H-combi, Uro-combi)
  > 음경임플란트
  > (Penile Implant)
  > 전립선비대증 수술
  > (Holep, Urolift)
  > 기하학적 음경만곡수술
  > (Geometry Peyronie's Operation)
  > 음경/귀두 확대수술
  > (Penile Augmentation)
  > 이물질 제거수술
  > (Foreign body Removal)
  > 정관/포경수술
  > (Vasectomy,
  > Circumcision)
  > 음경임플란트(Penile Implant)
  > 음경임플란트 오해와 진실
  > 음경임플란트 제원 전격 비교
  > 음경임플란트 제조사 장단점
  > 팽창형 임플란트 수술영상 AMS - LGX
  > 팽창형 음경임플란트 - 비대칭 음경해면체
  > 팽창형 음경임플란트 AMS - LGX 17cm
  > 팽창형 음경임플란트 - 음낭상부 종절개법
  > 음경임플란트 수술 후기 I
  > 음경임플란트 수술 후기 II
  > 음경임플란트 수술 후기 III
  > youtube 더보기

#### [병원소개 > VIDEO GALLERY (전립선비대증)] `01_hp/hp_07_03.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/hp_07_03.html`
- **삽입 이미지 (11건):**
  - `[img]` `img/gal_thum_03_02.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_02.jpg`
  - `[img]` `img/gal_thum_03_01.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_01.jpg`
  - `[img]` `img/gal_thum_03_03.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_03.jpg`
  - `[img]` `img/gal_thum_03_04.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_04.jpg`
  - `[img]` `img/gal_thum_03_05.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_05.jpg`
  - `[img]` `img/gal_thum_03_06.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_06.jpg`
  - `[img]` `img/gal_thum_03_07.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_07.jpg`
  - `[img]` `img/gal_thum_03_08.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_08.jpg`
  - `[img]` `img/gal_thum_03_09.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_09.jpg`
  - `[img]` `img/gal_thum_03_10.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_10.jpg`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg`
- **본문 텍스트 (676자):**
  > 강남J비뇨기과 소개
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내
  > VIDEO Gallery
  > VIDEO Gallery
  > 음경임플란트/
  > 전립선비대증 동시수술
  > (H-combi, Uro-combi)
  > 음경임플란트
  > (Penile Implant)
  > 전립선비대증 수술
  > (Holep, Urolift)
  > 기하학적 음경만곡수술
  > (Geometry Peyronie's Operation)
  > 음경/귀두 확대수술
  > (Penile Augmentation)
  > 이물질 제거수술
  > (Foreign body Removal)
  > 정관/포경수술
  > (Vasectomy,
  > Circumcision)
  > 전립선비대증 수술(Holep, Urolift)
  > 약물 치료로도 안되는 전립선비대증 해결 방법 1부
  > 약물 치료로도 안되는 전립선비대증 해결 방법 2부
  > 전립선비대증의 수술적 요법 Holep vs Urolift
  > 역행성 사정이란 무엇인가?
  > 급성요로폐색이란 무엇인가?
  > 유로리프트 수술 장단점과 적응증
  > 전립선비대증/암수술 Myth & Fact
  > 표준 치료법 - Holep (Prostate vol. 56mg)
  > 표준 치료법 - Holep (Prostate vol. 30mg)
  > 표준 치료법 - Holep (Prostate vol. 103mg)
  > youtube 더보기

#### [병원소개 > VIDEO GALLERY (음경만곡증)] `01_hp/hp_07_04.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/hp_07_04.html`
- **삽입 이미지 (9건):**
  - `[img]` `img/gal_thum_04_01.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_04_01.jpg`
  - `[img]` `img/gal_thum_04_02.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_04_02.jpg`
  - `[img]` `img/gal_thum_04_03.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_04_03.jpg`
  - `[img]` `img/gal_thum_04_04.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_04_04.jpg`
  - `[img]` `img/gal_thum_04_05.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_04_05.jpg`
  - `[img]` `img/gal_thum_04_06.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_04_06.jpg`
  - `[img]` `img/gal_thum_04_07.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_04_07.jpg`
  - `[img]` `img/gal_thum_04_08.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_04_08.jpg`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg`
- **본문 텍스트 (608자):**
  > 강남J비뇨기과 소개
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내
  > VIDEO Gallery
  > VIDEO Gallery
  > 음경임플란트/
  > 전립선비대증 동시수술
  > (H-combi, Uro-combi)
  > 음경임플란트
  > (Penile Implant)
  > 전립선비대증 수술
  > (Holep, Urolift)
  > 기하학적 음경만곡수술
  > (Geometry Peyronie's Operation)
  > 음경/귀두 확대수술
  > (Penile Augmentation)
  > 이물질 제거수술
  > (Foreign body Removal)
  > 정관/포경수술
  > (Vasectomy,
  > Circumcision)
  > 기하학적 음경만곡수술(Geometry Peyronie's Operation)
  > Chapter I - 휘어진 음경으로 살아야 하는지?
  > Chapter II - 휘어진 음경으로 살아야 하는지?
  > Chapter III - 휘어진 음경으로 살아야 하는지?
  > 기하학적 음경만곡수술(상향)
  > 기하학적 음경만곡수술(하향)
  > 기하학적 음경만곡수술(우측 함몰 복원)
  > 기하학적 음경만곡수술(하향 70도)
  > 기하학적 음경만곡수술(좌향)
  > youtube 더보기

#### [병원소개 > VIDEO GALLERY (음경/귀두확대)] `01_hp/hp_07_05.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/hp_07_05.html`
- **삽입 이미지 (4건):**
  - `[img]` `img/gal_thum_05_01.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_05_01.jpg`
  - `[img]` `img/gal_thum_05_02.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_05_02.jpg`
  - `[img]` `img/gal_thum_05_03.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_05_03.jpg`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg`
- **본문 텍스트 (449자):**
  > 강남J비뇨기과 소개
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내
  > VIDEO Gallery
  > VIDEO Gallery
  > 음경임플란트/
  > 전립선비대증 동시수술
  > (H-combi, Uro-combi)
  > 음경임플란트
  > (Penile Implant)
  > 전립선비대증 수술
  > (Holep, Urolift)
  > 기하학적 음경만곡수술
  > (Geometry Peyronie's Operation)
  > 음경/귀두 확대수술
  > (Penile Augmentation)
  > 이물질 제거수술
  > (Foreign body Removal)
  > 정관/포경수술
  > (Vasectomy,
  > Circumcision)
  > 음경/귀두 확대수술(Penile Augmentation)
  > 무흉터 저장진피 음경확대수술
  > 귀두직하 귀두확대수술
  > 음경확대수술
  > youtube 더보기

#### [병원소개 > VIDEO GALLERY (이물질제거)] `01_hp/hp_07_06.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/hp_07_06.html`
- **삽입 이미지 (5건):**
  - `[img]` `img/gal_thum_06_01.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_06_01.jpg`
  - `[img]` `img/gal_thum_06_02.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_06_02.jpg`
  - `[img]` `img/gal_thum_06_03.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_06_03.jpg`
  - `[img]` `img/gal_thum_06_04.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_06_04.jpg`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg`
- **본문 텍스트 (479자):**
  > 강남J비뇨기과 소개
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내
  > VIDEO Gallery
  > VIDEO Gallery
  > 음경임플란트/
  > 전립선비대증 동시수술
  > (H-combi, Uro-combi)
  > 음경임플란트
  > (Penile Implant)
  > 전립선비대증 수술
  > (Holep, Urolift)
  > 기하학적 음경만곡수술
  > (Geometry Peyronie's Operation)
  > 음경/귀두 확대수술
  > (Penile Augmentation)
  > 이물질 제거수술
  > (Foreign body Removal)
  > 정관/포경수술
  > (Vasectomy,
  > Circumcision)
  > 이물질 제거수술(Foreign body Removal)
  > 자가지방주입 15년차 제거수술
  > 음경필러주입 4년차 제거수술
  > 중증유착 바세린 제거수술
  > 바세린 자가주입의 위험성(인터뷰)
  > youtube 더보기

#### [병원소개 > VIDEO GALLERY (정관/포경수술)] `01_hp/hp_07_07.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/hp_07_07.html`
- **삽입 이미지 (5건):**
  - `[img]` `img/gal_thum_07_01.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_07_01.jpg`
  - `[img]` `img/gal_thum_07_02.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_07_02.jpg`
  - `[img]` `img/gal_thum_07_03.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_07_03.jpg`
  - `[img]` `img/gal_thum_07_04.jpg` → `http://www.manclinic.com/@2018/01_hp/img/gal_thum_07_04.jpg`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg`
- **본문 텍스트 (476자):**
  > 강남J비뇨기과 소개
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내
  > VIDEO Gallery
  > VIDEO Gallery
  > 음경임플란트/
  > 전립선비대증 동시수술
  > (H-combi, Uro-combi)
  > 음경임플란트
  > (Penile Implant)
  > 전립선비대증 수술
  > (Holep, Urolift)
  > 기하학적 음경만곡수술
  > (Geometry Peyronie's Operation)
  > 음경/귀두 확대수술
  > (Penile Augmentation)
  > 이물질 제거수술
  > (Foreign body Removal)
  > 정관/포경수술
  > (Vasectomy,
  > Circumcision)
  > 정관/포경수술(Vasectomy, Circumcision)
  > 영구적 남성 피임법 - 양측성 정관 절제술
  > 무도정관수술
  > 포경수술 꼭 해야하나? 시기는?
  > 소매법 포경수술 II
  > youtube 더보기

#### [병원소개 > 연락처&찾아오시는 길] `01_hp/hp_08.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/hp_08.html`
- **삽입 이미지 (1건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg`
- **본문 텍스트 (347자):**
  > 강남J비뇨기과 소개
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내
  > 찾아오시는 길
  > 찾아오시는 길
  > 상담 및 예약
  > 02-3018-7575(대표)
  > 010-9190-7575
  > 상담시간 외에는 문자 남겨주시면 순차적으로 상담 도와드리겠습니다.
  > 상담시간 월요일 ~ 금요일 - 9:00 ~ 18:00 / 토요일 - 9:00 ~ 13:00
  > 해외상담
  > 82-2-3018-7575(대표) / 82-10-9190-7575
  > FAX
  > 02-516-2030
  > 주소
  > 서울시 강남구 학동로 203 4F(학동역 8번, 9번출구 사이)

#### [병원소개 > Thanks Letter (메인 카드 '논문 학술발표' 링크)] `01_hp/hp_09.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/hp_09.html`
- **삽입 이미지 (11건):**
  - `[img]` `http://androj-p.com/files/1545379216.jpg` → `http://androj-p.com/files/1545379216.jpg`
  - `[img]` `http://androj-p.com/files/1541644235.jpg` → `http://androj-p.com/files/1541644235.jpg`
  - `[img]` `http://androj-p.com/files/1520045011.jpg` → `http://androj-p.com/files/1520045011.jpg`
  - `[img]` `http://androj-p.com/files/1518511940.jpg` → `http://androj-p.com/files/1518511940.jpg`
  - `[img]` `http://androj-p.com/files/1508828228.jpg` → `http://androj-p.com/files/1508828228.jpg`
  - `[img]` `http://androj-p.com/files/1502680902.jpg` → `http://androj-p.com/files/1502680902.jpg`
  - `[img]` `http://androj-p.com/files/1460692553.jpg` → `http://androj-p.com/files/1460692553.jpg`
  - `[img]` `http://androj-p.com/files/1441014060.jpg` → `http://androj-p.com/files/1441014060.jpg`
  - `[img]` `http://androj-p.com/files/1440037807.jpg` → `http://androj-p.com/files/1440037807.jpg`
  - `[img]` `http://androj-p.com/files/1435895980.jpg` → `http://androj-p.com/files/1435895980.jpg`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg`
- **본문 텍스트 (1300자):**
  > 강남J비뇨기과 소개
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내
  > Thanks Letter
  > 리스트
  > 원장님 감사 합니다.
  > 69세 되신 분으로 5년전 오토바이 타고 가시다가 엉덩벙아를  찧었는데그이후로 소변 줄기..
  > 날짜 : 2018.12.21
  > 원장님 감사 합니다.
  > 5년전 정관 수술을 하신분으로 한달전 저희 원에서 정관 복원수술을  받으신분입니다. 해외 주제원으로 계시면서 저희..
  > 날짜 : 2018.11.08
  > 정관복원 수술 한달만에 임신 성공!!
  > 2012년에 첫 내원 하시어 정관 복원 수술을 하시고2013년에 첫째 딸을 낳으셨고
  > 날짜 : 2018.03.03
  > 정관수술 후 17년 만에 정관복원수술 성공 case
  > 본 환자는 47세 남성분으로  1995년도에 타병원에서 정관수술 하시고,17년만에 20..
  > 날짜 : 2018.02.13
  > 음경만곡 및 피부유착 수술사례 감사편지 주셨습니다.
  > 31세 남성분으로 타 의원에서 음경보형물 시술  후 염증으로 인한 보형물 제거술 후 음경만곡증 및 피부유착 증세..
  > 날짜 : 2017.10.24
  > 65세 환자분 HoELP+요도협착 수술 후 감사편지 주셨습..
  > 상기 환자분은 5년전 여러번의 방광암 수술로 인해 구부요도..
  > 날짜 : 2017.08.14
  > 11년차 정관복원 성공 - 임신 5주차
  > 40세 남성분으로 2015년 2월 1차 정관복원 수술을 시행했으나, 1개월 후 정액검사 후 복원에 성공을 했지만,&nbs..
  > 날짜 : 2016.04.15
  > 정관복원 수술 성공 - 57세 25년차
  > 1개월 전에 57세 남성분께서 본원의 마이크로 미세 정관복원 수술을 받고2015-8-31 정액검사를..
  > 날짜 : 2015.08.31
  > 음경임플란트-충남 음성에서 농사일을 하시는 66세 남..
  > 2015.8.20'>2015.8.20
  > 날짜 : 2015.08.20
  > 4년전 정관수술 후 정관복원 수술 성공 사례
  > 만 30세 남성입니다. 4년 전 2011년에 아이를 낳고 형편상 둘째 계획이 없어 정관수술을 했습니다. 4년 후 직장을 좋은 데로 옮겨 생활 여건이 좋아지니 집에서 아들 혼자 노는 것이 눈에 밟혀 와이프와 협의 후 둘째를 가지는 것이 어떻겠냐 며 말을 하여 정관복원 수술을 결심하게 되었습니다. 울산에 거주하고 있지만, 인터넷과 지인들의 말을 듣고 서울에 있는 강남 J 비뇨기과를 알게 되었습니다. 수술을 하면 원장 선생님이 정말 친절하고 재미있게 해주셔서 수술에 대한 부담이 거의 없이 성공적으로 수술을 완료했습니다. 감사합니다!'>
  > 날짜 : 2015.07.03
  > 1  2  3  4

#### [병원소개 > 비급여비용안내] `01_hp/nonbenefit.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/nonbenefit.html`
- **삽입 이미지 (1건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg`
- **본문 텍스트 (898자):**
  > 강남J비뇨기과
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내
  > 비급여비용안내
  > 비급여비용안내
  > 수술
  > 음경만곡증교정술
  > 음경만곡증교정술 (주름법)
  > 300~600만원
  > 음경보형물삽입수술
  > 굴곡형
  > 700만원
  > 팽창형
  > 1500만원
  > 전립선비대증 결찰수술
  > 400~1600만원
  > 음경만곡증교정술 (기하학적 백막이식수술)
  > 600~1200만원
  > 음경이물질제거수술
  > 바세린/파라핀
  > 500~1000만원
  > 지방/진피/필러
  > 300~600만원
  > 피판술
  > 상/하부 물갈퀴음경교정술
  > 200만원
  > 음낭터널피판술
  > 300만원
  > 피부결손으로 인한 피판술
  > 300만원
  > 음경확대수술
  > 국산 동종진피
  > 350만원
  > 수입 동종진피
  > 700만원
  > 히알루론산필러
  > 150만원
  > 귀두직하확대수술
  > 300만원
  > 함몰음경교정술
  > 외부근막고정술
  > 150만원
  > 치골지방제거술
  > 300~500만원
  > 배부신경차단술
  > 80만원
  > 포경수술
  > 소매법 디자인 포경수술
  > 80만원
  > 귀두포피유착박리 특수포경수술
  > 80만원
  > 포피소대성형술
  > 80만원
  > 베이스라인 포경수술
  > 150만원
  > 무도정관수술
  > 50만원
  > 실리콘링
  > C자형
  > 60만원
  > T자형
  > 120만원
  > 주사
  > IVC / IVNT (회복/면역주사)
  > 50~100만원
  > 남성호르몬 보충요법(센비도)
  > 30만원
  > 가다실 9
  > 회당 20만원
  > 요도마취(11ml)
  > 6만원
  > 검사
  > 성기능검사
  > 35만원
  > 음경혈관 도플러검사
  > 20만원
  > PHI (Prostate Health Index)
  > 20만원
  > HPV 항원검사
  > 16만원
  > 혈액검사
  > 5~10만원
  > 인공발기
  > 5만원
  > Testosterone 검사
  > 3만원
  > 남성호르몬 종합혈액검사
  > 10만원
  > 진동각검사
  > 3만원
  > 정액검사
  > 3만원
  > 제증명수수료
  > 진단서 / 소견서 / CD / 일반처방전
  > 1만원
  > 수술확인서 / 입퇴원확인서
  > 3천원
  > 진료기록사본
  > 1천원
  > 입원
  > 상급병실(1인실)
  > 40만원

#### [요로결석 > 요로결석 원인 증상] `clinic_08/c8_0101.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_08/c8_0101.html`
- **삽입 이미지 (8건):**
  - `[img]` `img/contxt_0101.png` → `http://www.manclinic.com/@2018/clinic_08/img/contxt_0101.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_08/img/sub_topimg.jpg`
  - `[bg]` `../img/common/point_circle3.png` → `http://www.manclinic.com/@2018/img/common/point_circle3.png`
  - `[bg]` `../img/common/num_bl_01.png` → `http://www.manclinic.com/@2018/img/common/num_bl_01.png`
  - `[bg]` `../img/common/num_bl_02.png` → `http://www.manclinic.com/@2018/img/common/num_bl_02.png`
  - `[bg]` `../img/common/num_bl_03.png` → `http://www.manclinic.com/@2018/img/common/num_bl_03.png`
  - `[bg]` `../img/common/num_bl_04.png` → `http://www.manclinic.com/@2018/img/common/num_bl_04.png`
  - `[bg]` `../img/common/num_bl_05.png` → `http://www.manclinic.com/@2018/img/common/num_bl_05.png`
- **본문 텍스트 (1543자):**
  > 요로결석
  > GANGNAM J ANDROLOGY CLINIC
  > 요로결석 원인 증상
  > 요로결석 진단
  > 요로결석 치료
  > 요로결석 원인 증상
  > 요로결석이란
  > 요로결석은 신장, 요관, 방광, 요도 등 소변이 생성되고 배출되는 경로인 요로계에 단단한 결석이 형성되는 질환입니다.
  > 이러한 결석은 소변의 흐름을 방해하여 극심한 통증, 요로 감염, 신부전 등의 문제를 일으킬 수 있습니다.
  > 요로결석은 발생 위치에 따라 신장결석, 요관결석, 방광결석, 요도결석 등으로 구분됩니다.
  > 요로결석의 정의
  > 요로결석은 소변 내에 존재하는 다양한 무기질과 유기물이 결합하여 형성된 고형물질로
  > 요로계의 어느 부위에서나 발생할 수 있습니다.
  > 결석의 크기와 위치에 따라 증상이 다르며 작은 결석은 자연적으로 배출되기도 하지만
  > 큰 결석은 요로를 막아 심각한 합병증을 유발할 수 있습니다.
  > 요로결석의 발생 원인
  > 요로결석의 발생에는 여러 가지 요인이 작용하며 주요 원인은 다음과 같습니다.
  > 수분 섭취 부족
  > 충분한 수분 섭취는 소변을 희석시켜 결석 형성을 방지하는 데 중요한 역할을 합니다.
  > 수분 섭취가 부족하면 소변이 농축되어 결석이 형성되기 쉬워집니다.
  > 식이 요인
  > 고단백, 고염분, 고옥살산 식단은 요로결석의 위험을 높일 수 있습니다.
  > 특히 육류의 과도한 섭취는 소변 내 칼슘과 옥살산의 농도를 증가시켜 결석 형성을 촉진합니다
  > 유전적 요인
  > 가족 중 요로결석 환자가 있는 경우, 발생 위험이 높아질 수 있습니다.
  > 이는 유전적 요인이 결석 형성에 영향을 미칠 수 있음을 시사합니다.
  > 기후와 계절적 요인
  > 더운 날씨에는 땀으로 인한 수분 손실이 증가하여 소변이 농축되고, 이로 인해 결석 발생 위험이 높아집니다.
  > 특히 여름철에 요로결석 발생률이 증가하는 경향이 있습니다.
  > 요로 감염 및
  > 해부학적 이상
  > 요로 감염이나 요로의 구조적 이상은 소변의 흐름을 방해하여 결석 형성에 기여할 수 있습니다.
  > 특히 요로 폐색이나 요로 감염은 결석 형성의 위험 요인으로 작용합니다.
  > 대사 질환
  > 부갑상선기능항진증, 통풍 등 대사 질환은 소변 내 칼슘이나 요산의 농도를 높여 결석 형성에 영향을 줄 수 있습니다.
  > 요로결석의 증상
  > 요로결석의 증상은 결석의 위치, 크기, 요로 폐색 정도, 감염 여부 등에 따라 다양하게 나타납니다.
  > 주요 증상은 다음과 같습니다.
  > 특징적인 요로결석 증상
  > 옆구리 통증
  > : 요로결석의 가장 특징적인 증상으로, 갑작스럽고 극심한 통증이 한쪽 또는 양쪽 옆구리에서 시작되어 하복부나 생식기 부위로 방사될 수 있습니다. 통증은 간헐적으로 나타나며, 진통제로도 완화되지 않는 경우가 많습니다.
  > 혈뇨
  > : 소변에 혈액이 섞여 붉게 보이는 증상으로, 결석이 요로를 자극하거나 손상시켜 발생합니다.
  > 현미경적 혈뇨로 나타나기도 합니다.
  > 배뇨 이상
  > : 빈뇨, 잔뇨감, 배뇨 시 통증 등이 나타날 수 있으며, 특히 방광이나 요도에 결석이 있는 경우
  > 이러한 증상이 두드러집니다.
  > 소화기 증상
  > : 구역질, 구토, 복부 팽만감 등 소화기계 증상이 동반될 수 있으며, 이는 신장과 위장관의 신경
  > 분포가 밀접하게 연관되어 있기 때문입니다.
  > 발열
  > : 요로 감염이 동반된 경우 발열이 나타날 수 있으며, 이는 신우신염 등의 합병증을 시사합니다.

#### [요로결석 > 요로결석 진단] `clinic_08/c8_0201.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_08/c8_0201.html`
- **삽입 이미지 (2건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_08/img/sub_topimg.jpg`
  - `[bg]` `../img/common/point_circle3.png` → `http://www.manclinic.com/@2018/img/common/point_circle3.png`
- **본문 텍스트 (1206자):**
  > 요로결석
  > GANGNAM J ANDROLOGY CLINIC
  > 요로결석 원인 증상
  > 요로결석 진단
  > 요로결석 치료
  > 요로결석 진단
  > 요로결석 진단
  > 요로결석은 신장, 요관, 방광, 요도 등 요로계에 결석이 형성되어 다양한 증상을 유발하는 질환 입니다.
  > 정확한 진단을 통해 적절한 치료를 받는 것이 중요합니다.
  > 요로결석의 진단 방법
  > 문진 및 신체검사
  > 환자의 증상, 통증의 위치와 정도, 과거 병력 등을 상세히 확인합니다.
  > 신체검사에서는 옆구리나 복부를 눌러 통증 반응을 평가하며
  > 특히 등 쪽을 두드렸을 때 통증이 증가하면 요로결석을 의심할 수 있습니다.
  > 소변 검사
  > 혈뇨(소변 내 혈액 존재) 여부를 확인하기 위해 소변 검사를 시행합니다.
  > 현미경적 혈뇨는 요로결석의 중요한 단서가 됩니다.
  > 또한 요로 감염이 동반된 경우 소변에서 백혈구 증가나 세균이 검출될 수 있습니다.
  > 혈액 검사
  > 신장 기능 평가와 함께 요산, 칼슘 등의 수치를 확인하여 대사 이상 여부를 판단합니다.
  > 영상 검사
  > o 단순 요로 촬영(KUB)
  > 복부의 단순 방사선 촬영으로, 방사선에 잘 보이는 결석을 확인할 수 있습니다.
  > 그러나 일부 결석은 방사선에 나타나지 않을 수 있으며 장 내용물이나 다른 구조물에 의해 가려질 수 있습니다.
  > o 초음파 검사
  > 방사선 노출 없이 신장과 방광의 결석을 확인할 수 있는 안전한 검사입니다.
  > 그러나 요관의 작은 결석은 발견하기 어려울 수 있습니다.
  > o 전산화 단층촬영(CT)
  > 요로결석 진단의 표준 검사로 작은 결석이나 방사선에 보이지 않는 결석도 정확하게 확인할 수 있습니다.
  > 조영제 없이도 시행 가능하며 한 번의 검사로 신속하고 정확한 진단이 가능합니다.
  > o 요로 조영술(IVP)
  > 조영제를 정맥 주사한 후 신장과 요로의 구조를 확인하는 검사로
  > 요로의 해부학적 이상이나 결석의 위치를 파악하는 데 도움이 됩니다.
  > 요로결석 진단의 중요성
  > 요로결석은 재발률이 높고 적절한 치료가 이루어지지 않을 경우 신장 기능 저하나 요로 감염 등의 합병증을 초래할 수 있습니다.
  > 정확한 진단을 통해 결석의 크기, 위치, 성분 등을 파악하고 환자의 상태에 맞는 치료 계획을 수립하는 것이 중요합니다.
  > 또한, 결석의 재발을 방지하기 위해 생활 습관 개선과 정기적인 추적 검사가 필요합니다.
  > 충분한 수분 섭취, 식이 조절, 적절한 운동 등을 통해 결석 형성의 위험을 줄일 수 있습니다.
  > 요로결석이 의심되는 증상이 나타나면 전문 의료기관을 방문하여 정확한 진단과 적절한 치료를 받는 것이 바람직합니다.

#### [요로결석 > 요로결석 치료] `clinic_08/c8_0301.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_08/c8_0301.html`
- **삽입 이미지 (8건):**
  - `[img]` `img/contxt_0310.png` → `http://www.manclinic.com/@2018/clinic_08/img/contxt_0310.png`
  - `[img]` `img/contxt_0308.png` → `http://www.manclinic.com/@2018/clinic_08/img/contxt_0308.png`
  - `[img]` `img/contxt_0309.png` → `http://www.manclinic.com/@2018/clinic_08/img/contxt_0309.png`
  - `[img]` `img/contxt_0311.png` → `http://www.manclinic.com/@2018/clinic_08/img/contxt_0311.png`
  - `[img]` `img/contxt_0307.png` → `http://www.manclinic.com/@2018/clinic_08/img/contxt_0307.png`
  - `[img]` `img/contxt_0306.png` → `http://www.manclinic.com/@2018/clinic_08/img/contxt_0306.png`
  - `[img]` `img/contxt_0305.png` → `http://www.manclinic.com/@2018/clinic_08/img/contxt_0305.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_08/img/sub_topimg.jpg`
- **본문 텍스트 (1180자):**
  > 요로결석
  > GANGNAM J ANDROLOGY CLINIC
  > 요로결석 원인 증상
  > 요로결석 진단
  > 요로결석 치료
  > 요로결석 치료
  > 요로결석 치료
  > 요로결석은 신장, 요관, 방광, 요도 등 요로계에 결석이 형성되어 다양한 증상을 유발하는 질환입니다.
  > 결석의 크기, 위치, 증상에 따라 치료 방법이 달라지며 주요 치료 방법은 다음과 같습니다.
  > 강남제이비뇨기과에는 대학병원 수준의 치료장비와 수술실이 완비 되어있습니다.
  > 요로결석 치료장비
  > ESWL (체외충격파쇄석술)
  > URS/RIRS (내시경적결석제거술)
  > 요로결석 치료 장비
  > 수술실 및 진단 영상 검사에서 실시간으로 내부 구조를 확인하는
  > 고해상도 영상 제공, 방사선 노출최소화, 유연한 조작이 가능합니다.
  > 흡입(Suction)과 관류(Irrigation)를 동시에 제공하는
  > 혁신적인 롤러 펌프 시스템 입니다.
  > 안정적인 관류 기능을 통해 수술 정확성과 안정성을 높입니다.
  > 전립선비대증치료, 요로결석 제거 등에 활용 됩니다.
  > 출혈이 적고 손상이 최소화되어 정확한 절개 및 응고가 특징입니다.
  > 7Fr / 9.5Fr 경성 내시경
  > Storz - Ureteral renoscope c mac
  > 고해상도 디지털 이미지를 통해
  > 요관 및 요로 내 구조를 더욱 쉽게 확인 할 수 있습니다.
  > 유연한 재질로, 상부요관과 신우 / 신배 까지 부드럽게 진입하며
  > 진단 및 시술을 용이하게 하는 내시경입니다.
  > 단단한 금속 재질로 만들어진 내시경으로
  > 요관의 내부를 직접 관찰하거나 시술을 수행하는데 사용됩니다.
  > 치료 방법 선택 시 고려 사항
  > 요로결석의 치료 방법 선택은 결석의 크기, 위치, 구성 성분, 환자의 증상, 신장 기능, 전신 상태 등을 종합적으로 고려하여 결정됩니다.
  > 작고 증상이 경미한 결석은 경과 관찰이나 약물 치료로 자연 배출을 유도할 수 있으며 큰 결석이나 증상이 심한 경우 위의 적극적인 치료 방법이 필요합니다.
  > 치료 후 관리 및 예방
  > 요로결석은 재발률이 높은 질환이므로 치료 후에도 재발 방지를 위한 관리가 중요합니다.
  > 충분한 수분 섭취를 통해 소변을 희석시키고 식이 조절을 통해 결석 형성의 원인이 되는 물질의 섭취를 제한해야 합니다.
  > 또한 정기적인 검진을 통해 결석의 재발 여부를 확인하고 필요 시 추가적인 치료를 받아야 합니다.
  > 요로결석의 치료는 환자의 상태와 결석의 특성에 따라 다양하게 접근해야 하며
  > 전문 의료진과의 상담을 통해 가장 적합한 치료 방법을 선택하는 것이 중요합니다.

#### [음경임플란트 > 음경임플란트] `clinic_04/c4_0401.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_04/c4_0401.html`
- **삽입 이미지 (10건):**
  - `[img]` `img/contxt_0408.png` → `http://www.manclinic.com/@2018/clinic_04/img/contxt_0408.png`
  - `[img]` `img/contxt_0407.png` → `http://www.manclinic.com/@2018/clinic_04/img/contxt_0407.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_04/img/sub_topimg.jpg`
  - `[bg]` `img/contxt_0401.png` → `http://www.manclinic.com/@2018/clinic_04/img/contxt_0401.png`
  - `[bg]` `img/contxt_0402.png` → `http://www.manclinic.com/@2018/clinic_04/img/contxt_0402.png`
  - `[bg]` `img/contxt_0403.png` → `http://www.manclinic.com/@2018/clinic_04/img/contxt_0403.png`
  - `[bg]` `img/contxt_0404.png` → `http://www.manclinic.com/@2018/clinic_04/img/contxt_0404.png`
  - `[bg]` `img/contxt_0405.png` → `http://www.manclinic.com/@2018/clinic_04/img/contxt_0405.png`
  - `[bg]` `img/contxt_0406.png` → `http://www.manclinic.com/@2018/clinic_04/img/contxt_0406.png`
  - `[bg]` `img/contxt_0321.png` → `http://www.manclinic.com/@2018/clinic_04/img/contxt_0321.png`
- **본문 텍스트 (1836자):**
  > 음경임플란트
  > GANGNAM J ANDROLOGY CLINIC
  > 음경임플란트
  > 음경임플란트
  > AMS Spectra
  > & Penile Implant
  > 발기부전 증상을 근본적으로 치료하는 “음경임플란트 수술”
  > 음경임플란트 수술은 한번 수술로 평생 발기걱정이 없는 발기부전의 근본적인
  > 치료법이고 가장 확실한 치료 방법입니다. 섬세하고 숙련된 술기가 필요한 수술입니다.
  > 강남 J 비뇨기과는 수많은 임상적 경험과 공기의 흐름까지 고려한 무균수술 시스템을 원칙으로
  > 안전하고 자연스런 수술 결과는 강남 J 만의 노하우입니다.
  > 세조각 팽창형
  > 음경임플란트
  > / 3-Piece Penile Implant
  > 음경임플란트 작동원리
  > 발기부전은 여러 가지 원인에 의해서 음경해면체에 혈액이 충만하기 어려운 상황을 말합니다.
  > 세조각형 음경임플란트 수술은 발기의 원동력이 되는 혈액 대신 인체공학적으로 특수하게 고안된 음경 임플란트를
  > 해면체에 삽입하고 음낭 내에는 발기조절펌프, 치골 뒷방광 아래쪽에 생리식염수가 들어가 있는 용액 저장고를 위치시켜,
  > 음낭 내 발기조절 펌프를 이용해서 발기와 이완이 가능합니다.
  > 안전한 음경임플란트
  > 세조각 팽창형 음경임플란트는 고난위도의 수술기법을 적용해야 하기 때문에 국내 수술의사는 소수입니다.
  > 소수의 의사 중에서도 수술을 처음 시작하는 의사들은 경험이 많지 않기 때문에 여러 가지 부작용을 일으킬 수 있습니다.
  > 하지만, 강남J 박천진 원장은 2002년부터 음경임플란트의 세계적 권위자들과 함께 많은 연구와 경험을 해오면서 10년이란 세월이 흘렀습니다.
  > 단 한 번도 부작용의 사례가 없는 것을 동료 의사들이 인정합니다.
  > 간결한 음경임플란트
  > 음경임플란트의 수술 시간은 수술의 경험과 숙련도와 비례할 수 밖에 없습니다. 평균 수술시간 2시간 이상으로 소요되는데
  > 반해 강남J 박천진 원장은 1시간 정도 이내에 수술의 전과정을 마칠 수 있습니다.
  > 짧은 수술시간으로 수술에 대한 불편함을 최소화 할 수 있고, 최상의 결과로 이어집니다.
  > 영구적인 음경임플란트
  > 한번 수술로 영구적으로 발기부전을 치료할 수 있습니다. 발기부전은 남성의 존재감을 좌우할 만큼 매우 중요한 질환입니다.
  > 수술 후에는 발기에 대한 걱정이 없어지고 자신감을 찾고 남자로서의 존재감을 찾을 수 있습니다.
  > 편안한 음경임플란트
  > 음경임플란트가 음경과 고환, 치골 안쪽 부분에 위치한다고 해서 이물감이나 불편함이 전혀 없습니다.
  > 통증없는 음경임플란트
  > 약 2시간 정도면 마취에서 회복이 되는 말안장 마취(Saddle Block)는 통증이 전혀 없이 편안한 수술을 받을 수 있고,
  > 수술 후에도 통증이 없기 때문에 당일 수술 후 퇴원이 가능합니다.
  > 원리가 같은 음경임플란트
  > 음경임플란트의 작동 원리는 발기의 원리와 비슷하기 때문에 젊은 시절 발기의 느낌을 찾을 수 있습니다.
  > 병행 수술 가능한 음경임플란트
  > 음경성형수술은 물론 전립선비대증의 근본적 원인 치료인 ‘홀렙’과도 병행이 가능합니다. ‘홀렙’ 수술과 음경임플란트 수술의
  > 병행이 가능한 수술 시스템은 강남J 가 보유한 국내 유일한 수술 시스템입니다.
  > 강직한 귀두의 음경임플란트
  > 성적 흥분에 따라서 귀두부분에는 혈액이 충만해집니다. 귀두의 탄력성은 음경임플란트의 작동과는
  > 무관하게 성적 흥분 정도에 따라서 탄력이 있는 귀두가 유지됩니다.
  > 무균 수술 음경임플란트
  > 공기의 흐름까지 제어하는 무균수술 시스템은 최적화된 수술실 환경으로 염증에 노출될 가능성을 완벽하게 제어하고 있습니다.
  > AMS Spectra
  > 기존의 굴곡형의 업그레이드 된 Spectra입니다.
  > 1. 수술시간 30분으로 발기부전 근본적 치료 가능
  > 2. 우수한 강직도를 유지합니다.
  > 3. 180도 구부러짐이 가능합니다.
  > 4. 음경 크기에 맞는 정확한 사이즈 선택으로 음경의 원래 크기를 유지합니다.
  > VIDEO GALLERY 더보기

#### [성기능장애 > 발기부전] `clinic_04/c4_0101.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_04/c4_0101.html`
- **삽입 이미지 (5건):**
  - `[img]` `img/contxt_0102.png` → `http://www.manclinic.com/@2018/clinic_04/img/contxt_0102.png`
  - `[img]` `img/contxt_0103.png` → `http://www.manclinic.com/@2018/clinic_04/img/contxt_0103.png`
  - `[img]` `img/contxt_0101.png` → `http://www.manclinic.com/@2018/clinic_04/img/contxt_0101.png`
  - `[img]` `img/contxt_0104.png` → `http://www.manclinic.com/@2018/clinic_04/img/contxt_0104.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_04/img/sub_topimg.jpg`
- **본문 텍스트 (610자):**
  > 성기능장애
  > GANGNAM J ANDROLOGY CLINIC
  > 조루증이란
  > 조루증 원인/진단
  > 조루증의 치료
  > 발기부전
  > 성기능검사
  > 발기부전치료
  > 발기부전
  > 강남J비뇨기과 발기부전수술센터
  > 세계적 의료기술의 트랜드를 앞서가는 강남 J 비뇨기과.
  > Penile Implant(음경 임플란트)수술!!
  > 지금으로부터 약 150년 전 러시아의 작가이자 사상가 레프 니콜라예비치 톨스토이는 이렇게 말했습니다.
  > “남자는 지진이나, 무서운 질병, 모든 형태의 정신적인 고통을 모두 이겨낼 수 있다.
  > 그러나 그런 남자에게 일어날 수 있는 가장 무서운 일은 침실에서 일어나는 일이다.”
  > 그러나,
  > 2012년 발기부전은 더 이상 무서운 일이 아닙니다. 단지 질병일 뿐입니다. 현대의학으로 충분히 극복할 수 있습니다.
  > - 박 천 진 -
  > 발기부전이란
  > 만족스런 성행위를 할 수 있을 만큼 발기가 충분히 되기 않거나 발기가 되지 않거나, 이를 유지할 수 없는 상태.
  > 현재 발기부전 치료를 받고 있는 환자는 전체 환자의 약 10% 에 불과합니다.
  > 발기부전의 원인
  > 발기부전의 심리적 정신적 영향
  > 발기부전 예방을 위한 기본 생활수칙
  > 규칙적인 성생활
  > 유산소 운동,
  > 건강한 체력 유지
  > 금연,
  > 과음/과로 및
  > 스트레스를 피할 것
  > 체중 조절과
  > 혈당관리

#### [성기능장애 > 성기능검사] `clinic_04/c4_0201.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_04/c4_0201.html`
- **삽입 이미지 (3건):**
  - `[img]` `img/contxt_0201.png` → `http://www.manclinic.com/@2018/clinic_04/img/contxt_0201.png`
  - `[img]` `img/contxt_0202.png` → `http://www.manclinic.com/@2018/clinic_04/img/contxt_0202.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_04/img/sub_topimg.jpg`
- **본문 텍스트 (638자):**
  > 성기능장애
  > GANGNAM J ANDROLOGY CLINIC
  > 조루증이란
  > 조루증 원인/진단
  > 조루증의 치료
  > 발기부전
  > 성기능검사
  > 발기부전치료
  > 성기능검사
  > 강남J비뇨기과 성기능검사
  > 성기능 검사는 발기부전 치료에 앞서 정확한 원인을 진단하는 중요한 검사입니다.
  > 남성호르몬 저하, 음경의 혈관이상, 시청각 발기기능 진단, 문진검사를 통해 발기부전 증상의 원인을 정확하게 진단합니다.
  > 검사분류
  > 검사 종류 및 항목
  > 소요시간
  > 시청각 성자극 발기검사
  > (Audiovisual Sexual Stimulation Penile Erection Test)
  > Rigi-Scan 검사
  > 40분
  > 혈관계 검사
  > (Henodynamic Workup for Vasculogenic Erectile Dysfunction)
  > 음경컬러 도플러 초음파 검사 및 혈관내막 검사
  > 15분
  > 내분기계 검사
  > (Endocrine Test)
  > 혈액검사 (기초혈액검사 및 남성호르몬 검사)
  > 5분
  > 대사성 증후군 검사
  > (Metabolic Test)
  > 복부비만 초음파 검사 및
  > 기초혈액검사, 저HDL혈증, 고혈당 검사
  > 15분
  > 문진검사 (국제발기기능측정설문지 - IIEF)
  > (History, Physical Examination and Laboratory Testing)
  > 병력, 신체검사, IPSS
  > 15분
  > 성기능검사의 종류

#### [성기능장애 > 발기부전치료] `clinic_04/c4_0301.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_04/c4_0301.html`
- **삽입 이미지 (2건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_04/img/sub_topimg.jpg`
  - `[bg]` `img/contxt_0301.jpg` → `http://www.manclinic.com/@2018/clinic_04/img/contxt_0301.jpg`
- **본문 텍스트 (133자):**
  > 성기능장애
  > GANGNAM J ANDROLOGY CLINIC
  > 조루증이란
  > 조루증 원인/진단
  > 조루증의 치료
  > 발기부전
  > 성기능검사
  > 발기부전치료
  > 발기부전치료
  > 발기부전치료의 종류
  > 남성호르몬
  > 보충요법
  > 경구용 치료제
  > 발기유발
  > 자가주사 요법
  > 수술적
  > 치료방법

#### [성기능장애 > 조루증이란] `clinic_06/c6_0101.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_06/c6_0101.html`
- **삽입 이미지 (7건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_06/img/sub_topimg.jpg`
  - `[bg]` `../img/common/num_bl_01.png` → `http://www.manclinic.com/@2018/img/common/num_bl_01.png`
  - `[bg]` `../img/common/num_bl_02.png` → `http://www.manclinic.com/@2018/img/common/num_bl_02.png`
  - `[bg]` `../img/common/num_bl_03.png` → `http://www.manclinic.com/@2018/img/common/num_bl_03.png`
  - `[bg]` `../img/common/num_bl_04.png` → `http://www.manclinic.com/@2018/img/common/num_bl_04.png`
  - `[bg]` `../img/common/num_bl_05.png` → `http://www.manclinic.com/@2018/img/common/num_bl_05.png`
  - `[bg]` `../img/common/num_bl_06.png` → `http://www.manclinic.com/@2018/img/common/num_bl_06.png`
- **본문 텍스트 (1524자):**
  > 성기능장애
  > GANGNAM J ANDROLOGY CLINIC
  > 조루증이란
  > 조루증 원인/진단
  > 조루증의 치료
  > 발기부전
  > 성기능검사
  > 발기부전치료
  > 조루증이란
  > 조루증이란
  > 조루는 남성 성기능 장애 중 가장 흔한 증상으로, 밤의 즐거움 대신 곤혹스러움과 수치심을 안겨주는 악몽과도 같은 존재입니다.
  > 발기부전이 주로 나이가 많은 층에서 발생하는데 비해 조루증은 오히려 젊은 나이에서 더욱 흔합니다.
  > 의학적으로는 사정도 배뇨나 배변처럼 스스로 조절가능합니다.
  > 따라서 조루라 함은 스스로 사정을 통제하지 못하고 너무 일찍 사정하는 모든 경우를 말합니다.
  > 그러나 실질적으로 사정을 스스로 조절할 수 있는 사람은 그리 많지 않습니다.
  > 그래서 임상적으로 보통 질내 삽입후 피스톤 운동을 5분 정도 할 수 있는 수준을 정상이라고 판정합니다.
  > 여성이 질내 오르가즘을 느끼는데 평균 5분 정도의 자극시간을 필요로 하기 때문입니다.
  > 하지만 물론 이러한 시간도 개인차가 많기 때문에 반드시 시간에 얽매일 필요는 없습니다.
  > 일반적으로 약 절반의 남성들은 자신이 조루라고 생각하고 있으며 그렇지 않은 경우에도
  > 70%의 남성들이 보다 더 오랜 시간 사랑을 나눌 수 있다면 하는 바람을 가지고 있습니다.
  > 문명화된 사회일수록, 그리고 교육수준이 높을수록 사정시간이 빠르다는 통계가 있습니다.
  > 과거에는 조루를 단순히 심리적인 문제로 치부하고, 성 경험이 늘어나면 자연히 치유되는 것으로 생각했습니다.
  > 그러나 최근의 보고를 보면 단순한 경험의 증가만으로 사정시간이 지연되지는 않고 개개인마다 조루를 일으키는 원인이 다른 것으로 생각됩니다.
  > 따라서 치료방법도 개개인의 특성에 따라 적당한 방법을 적용시켜야 합니다.
  > 조루증은 사정장애중 가장 흔한 것의 하나로 연령과 무관하게 남성의 30-50%에서 나타나고,
  > 남성 성기능환자의 60-70%를 차지하지만 조루증의 의학적 정의는 아직까지 확실하게 정의 되지 않았습니다.
  > 조루증의 증상
  > 여성의 질 내부로 삽입하기 전이나 삽입한 직후에 사정하는 경우
  > 여성의 질내 삽입 후 90초 이내에 사정하는 경우
  > 질내 삽입 후 이어지는 피스톤 왕복행위의 횟수가 15회 이내에 사정하는 경우
  > 남성 사진의 의지에 반하여 사정하는 경우
  > 여성파트너가 더 원하는데도 사정해버리는 횟수가 전체 성교횟수의 절반으 넘는 경우
  > 성행위시 만족할만한 시간동안 사정현상을 지연시킬 수 없는 상태
  > 조루증의 유형
  > 발생시기에
  > 따른 유형
  > 일차성 조루증
  > 성욕은 정상이지만 첫번째 시도한 섹스부터 계속 이어진 경우
  > 이차성 조루증
  > 정상적인 섹스를 이루다가 어느 날부터 갑자기 찾아온 경우
  > 혼합형 조루증
  > 위의 두가지 유형이 복합적으로 섞인 경우
  > 발생원인에
  > 따른 유형
  > 가성(假性)조루
  > 장기간의 금욕, 성행위시 과도한 긴장이 원인
  > 심인성 조루
  > 대뇌(마음)의 성감이 지나친 경우. 성기에 오는 자극이 대단하지 않은데 과도한 흥분상태를 느낍니다.
  > 과민성 조루
  > 성기의 감각이나 사정 신경이 너무 민감한 경우.
  > 마음은 그다지 흥분하지 않은데도 그대로 사정해버리는 경우입니다.
  > 쇠약성 조루
  > 절정감을 맞이할 때까지 사정관의 폐쇄 상태를 유지하지 못하고
  > 사정 근육이 이완되어 정액이 배출되는 경우.

#### [전립선 > 전립선] `clinic_02/c2_0101.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_02/c2_0101.html`
- **삽입 이미지 (2건):**
  - `[img]` `img/contxt_0101.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0101.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_02/img/sub_topimg.jpg`
- **본문 텍스트 (480자):**
  > 전립선
  > GANGNAM J ANDROLOGY CLINIC
  > 전립선
  > 전립선비대증
  > HoLEP시술
  > 유로리프트
  > 전립선염
  > 전립선암
  > 전립선통
  > 전립선
  > 전립선이란
  > 전립선은 정낭, 고환과 함께 생식을 가능하게 하는 성부속기관중의 하나로 정액의 액체성분중 약 3５％정도를 생산하고
  > 생산된 전립선액은 정자에 영양을 공급하며 사정된 정액을 굳지 않게 하여 정자의 운동성을 증진시켜 정자의 수정 능력을 높여주며
  > 또한 전립선액은 알카리성이므로 나팔관의 강산성을 중화시켜 정자가 안전하게 나팔관을 지나 난자와 만나 수정이 이루어지도록 도와줍니다.
  > 전립선은 남자의 방광 바로 밑에 밤톨만한 부드러운 조직으로 전립선 가운데 구멍이 뚫려 있어
  > 그 사이로 뇨와 정액이 지나가는 후부 요도와 사정관이 존재하므로 전립선에 이상이 생기면 배뇨에도 이상이 있고
  > 또한 성기능 장애(사정장애)를 일으킬 수가 있습니다. 대표적인 전립선 질환으로는 전립선염(전립선통), 전립선 비대증, 전립선암 등이 있습니다.

#### [전립선 > 전립선비대증] `clinic_02/c2_0201.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_02/c2_0201.html`
- **삽입 이미지 (3건):**
  - `[img]` `img/contxt_0201.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0201.png`
  - `[img]` `img/contxt_0202.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0202.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_02/img/sub_topimg.jpg`
- **본문 텍스트 (698자):**
  > 전립선
  > GANGNAM J ANDROLOGY CLINIC
  > 전립선
  > 전립선비대증
  > HoLEP시술
  > 유로리프트
  > 전립선염
  > 전립선암
  > 전립선통
  > 전립선비대증
  > 전립선비대증이란
  > 전립선 비대증은 질병 이름대로 전립선이 비대해지는 질환입니다.
  > 때문에 전립선 한가운데를 통과하는 요도를 압박하여 소변이 잘 안나오게 되거나 성기능 장애를 일으키기도 합니다.
  > 중년이후 소변때문에 밤에 자다가 한두번 이상 일어나 오줌을 자주 누게되는 빈뇨증상을 보이게 되면 전립선 비대증을 의심하게 됩니다.
  > 전립선비대증 증상
  > 빈뇨
  > 요도 폐색
  > 성기능 장애
  > 방광출구를 둘러싸고 있는 전립선의 비대하여 우선 그 부위를 압박하여 요도가 좁아지므로 방광에서 나오는 오줌줄기가 작아집니다.
  > 따라서 비대정도가 점점 심해 가면서 오줌 누기도 점점 어려워집니다.
  > 실제로는 반드시 그렇지는 않습니다. 실제로는 비대는 적으나 배뇨 장애는 매우 심한 반면,
  > 전립선비대 정도에는 개인차가 있어서 반드시 전립선 크기와 증상은 비례하지 않는다고 믿어도 되겠습니다.
  > 전립선은 크기만 가지고 비대증을 진단하지 않으며,
  > 오줌누기의 여러 가지 자각증상, 전립선을 손가락으로 만져 보거나 영상으로 보거나 오줌 누기의 객관적 판단 등의 종합적인 평가가 필요합니다.
  > 50대 이후의 소위 전립선 연령에서 오줌 누기가 정상이 아니라고 생각되면 될 수 있는 대로 속히 전문의의 도움을 받는 것이 현명합니다.
  > 전립선비대증에 따른 치료 방법은?

#### [전립선 > HoLEP시술] `clinic_02/c2_0301.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_02/c2_0301.html`
- **삽입 이미지 (34건):**
  - `[img]` `img/contxt_0302.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0302.png`
  - `[img]` `img/contxt_0304.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0304.png`
  - `[img]` `img/contxt_0305.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0305.png`
  - `[img]` `img/contxt_0306.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0306.png`
  - `[img]` `img/contxt_0307.jpg` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0307.jpg`
  - `[img]` `img/contxt_0308.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0308.png`
  - `[img]` `img/contxt_0309.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0309.png`
  - `[img]` `img/contxt_0310.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0310.png`
  - `[img]` `img/contxt_0311.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0311.png`
  - `[img]` `img/contxt_0312.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0312.png`
  - `[img]` `img/contxt_0313.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0313.png`
  - `[img]` `img/contxt_0315.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0315.png`
  - `[img]` `img/contxt_0316.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0316.png`
  - `[img]` `img/contxt_0317.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0317.png`
  - `[img]` `img/contxt_0318.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0318.png`
  - `[img]` `img/contxt_0319.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0319.png`
  - `[img]` `img/contxt_0320.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0320.png`
  - `[bg]` `img/sub_topimg3.jpg` → `http://www.manclinic.com/@2018/clinic_02/img/sub_topimg3.jpg`
  - `[bg]` `../img/common/num_wh_01.png` → `http://www.manclinic.com/@2018/img/common/num_wh_01.png`
  - `[bg]` `../img/common/num_wh_02.png` → `http://www.manclinic.com/@2018/img/common/num_wh_02.png`
  - `[bg]` `../img/common/num_wh_03.png` → `http://www.manclinic.com/@2018/img/common/num_wh_03.png`
  - `[bg]` `../img/common/num_wh_04.png` → `http://www.manclinic.com/@2018/img/common/num_wh_04.png`
  - `[bg]` `../img/common/num_wh_05.png` → `http://www.manclinic.com/@2018/img/common/num_wh_05.png`
  - `[bg]` `img/contxt_0301.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0301.png`
  - `[bg]` `img/contxt_0303.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0303.png`
  - `[bg]` `../img/common/num_bl_01.png` → `http://www.manclinic.com/@2018/img/common/num_bl_01.png`
  - `[bg]` `../img/common/num_bl_02.png` → `http://www.manclinic.com/@2018/img/common/num_bl_02.png`
  - `[bg]` `../img/common/num_bl_03.png` → `http://www.manclinic.com/@2018/img/common/num_bl_03.png`
  - `[bg]` `../img/common/num_bl_04.png` → `http://www.manclinic.com/@2018/img/common/num_bl_04.png`
  - `[bg]` `../img/common/num_bl_05.png` → `http://www.manclinic.com/@2018/img/common/num_bl_05.png`
  - `[bg]` `../img/common/num_bl_06.png` → `http://www.manclinic.com/@2018/img/common/num_bl_06.png`
  - `[bg]` `../img/common/num_bl_07.png` → `http://www.manclinic.com/@2018/img/common/num_bl_07.png`
  - `[bg]` `img/contxt_0314.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0314.png`
  - `[bg]` `img/contxt_0321.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0321.png`
- **본문 텍스트 (4245자):**
  > 전립선
  > GANGNAM J ANDROLOGY CLINIC
  > 전립선
  > 전립선비대증
  > HoLEP시술
  > 유로리프트
  > 전립선염
  > 전립선암
  > 전립선통
  > HoLEP 시술
  > HoLEP란 Holmium Laser Enucleation of Prostate 의 약자로
  > 지난 1998년 뉴질랜드의 Dr. Gilling 에 의해 Holmium 레이저를 이용한 전립선종 적출술로
  > 학회에 발표된 이후 유럽과 일본을 중심으로 널리 사용되고 있는 우리나라에서도 보건복지가족부 산하의 신의료기술 평가위원회부터
  > ‘안전성, 유효성 인증절차를 거친 새로운 의료기술’이라는 평가는 받은 수술입니다.
  > 조직의 침투 깊이가 0.4mm 인 End firing fiber 의 특징을 이용해서
  > 전립선 요도관을 압박하는 비대 된 조직을 섬세하게 박리해(Micro Dissection) 제거할 수 있습니다.
  > VIDEO GALLERY 더보기
  > 전립선비대증에 대한 근본적인 치료 방법은 다양합니다.
  > 최근 신의료기술로 등록된 최첨단 홀뮴레이저(Holmium Laser)를 이용해서,
  > 비대 된 전립선요도관을 안전하고(safe), 간편하고(simple), 빠르게(speed)시술하는 시술방법이 도입되었고,
  > 일본이나 유럽에서는 7년 전부터 시행되고 있습니다.
  > 일명 홀렙(HoLEP-Holmium Laser Enucleation of Prostate)치료법입니다.
  > 비뇨기과 전문의의 검진을 받고 적절한 치료를 받는다면 한밤중에 일어나 화장실을 문고리를 잡는 일은 더 이상 없을 것입니다.
  > 전립선 비대에 대한 적절한 치료로 숙면을 취할 수 있게 되면 낮에 젊은 사람 못지않은 활력을 되찾을 수 있습니다.
  > 건강한 전립선은 활기찬 황혼의 전제조건이 됩니다.
  > HoLEP 적용대상
  > 80g 이상 되는 거대 전립선 비대증으로 기존 수술법으로 치료가 어려운 분.
  > 기존의 수술 적 치료(TURP-경요도전립선절제술, PVP-전립선레이저기화술)후 재발하거나 효과가 없으신 분
  > 기존에 약을 복용하고 있으신 분으로 효과가 없으신 분.
  > 수술 시 통증이나 합병증이 걱정되시는 분.
  > 전신마취를 할 수 없는 분 - saddle block 마취
  > 홀렙수술과 경요도 전립선 절제술 비교
  > HoLEP
  > (내시경레이저 전립선비대 선종적출술)
  > TURP
  > (경요도전립선절제술)
  > 전립선 크기
  > 200cc이상 가능
  > 80cc 이상 불가능
  > 항응고제, 아스피린 복용
  > 가능
  > 부적용
  > 수술 후 방광세척
  > 불필요
  > 반드시 필요
  > 도뇨관 유치
  > 단시간
  > 장시간
  > 수혈 가능성
  > 1/10000이하
  > 10~15/100
  > 회복기간
  > 단시간
  > 장시간, 수주
  > 입원기간
  > 6~24시간
  > 4~7일
  > 요도 및 방광경부협착
  > 발기부전 가능성
  > 상대적 적다
  > 상대적으로 높다
  > 기존 내시경으로 전립선을 절제하는 시술인 경도요전립선절제술은 전기 칼을 이용해서 지혈이 되지 않기 때문에 출혈이 많고,
  > 열이 많이 발생하여 주변 정상조직에 손상을 줄 가능성이 높습니다.
  > 또한 전신마취, 하반신 마취를 해야 하고, 시술 후에도 약 5~7일 간 소변줄 유치와 수일간 입원이 필요합니다.
  > 이에 반해 HoLEP(전립선종 적출술)수술은 전립선조직의 침투 깊이가 0.4mm에 불과하기 때문에
  > 섬세박리(Micro Dissection)가 가능해 주변조직에 영향을 주지 않고 비대 된 전립선종만 정확하게 제거할 수 있습니다.
  > 또한 과거에는 개복을 통해 수술을 할 수 밖에 없었던 방법이 내시경을 통해 가능해졌고,
  > Holmium 레이저 특성상 출혈이 거의 없고 지혈이 용이하기 때문에 수술 후 통증이 거의 없고
  > 방광자극 증상(요급박을 일으키는 원인)이 없다는 것이 수술의 큰 장점입니다.
  > 본원에서 시행하는 HoLEP(전립선종 적출술)수술은 입원을 하지 않고, 당일 퇴원이 가능하고,
  > 말안장마취(saddle)를 시행하기 때문에 2~3시간 정도의 회복시간 후 바로 귀가하실 수 있습니다.
  > 또한 전립선결석 및 방광결석, 요도협착 증상으로 인한 배뇨장애 및 전립선통증을 동시에 치료하는 데에도 이용되고 있습니다.
  > HoLEP 수술의 3대 장점
  > 마이크로 박리
  > 완전 박리
  > 방광결석,
  > 전립선결석 치료 가능
  > 전립선 암 진단 가능
  > 홀뮴레이저는 비대 된 전립선종을 적출하는데 매우 적합하고 효과적인 특성을 가지고 있습니다.
  > 장점 1.
  > 조직의 침투 깊이가 0.44mm로 micro dissection (마이크로 박리)이 가능합니다.
  > 전립선조직에 침투하는 레이저는 약 0.44mm 로 적출되는 조직 이외에 정상적인 다른 조직에는 영향을 미치지 않고, 마이크로 박리가 가능하다는 특징이 있습니다.
  > 다른 조직에 영향을 주지 않는다는 의미는 수술 후 방광자극 증상을 현저하게 줄일 수 있어 수술 후 빠른 회복이 가능합니다.
  > 장점 2.
  > 거대 전립선(80g 이상)도 전립선 피막을 제외한 완전 박리가 가능합니다.
  > 현재까지 레이저의 특성을 보면 side firing fiber 로 비대 된 전립선조직의 완전제거가 사실상 어려웠기 때문에
  > 수술 후 약 2~3년 정도가 지나면 배뇨장애 증상이 다시 나타날 가능성이 있었습니다.
  > 하지만 홀뮴레이저는 end firing fiber 라는 특징이 있기 때문에 전립선크기에 상관없이 비대 된 전립선종만을 정확하게 적출할 수 있습니다.
  > 전립선피막만 남기기 때문에 세월이 흘러도 배뇨장애가 다시 나타나지 않습니다.
  > 장점 3.
  > 요도협착 및 전립선결석, 방광결석의 동시 치료가 가능하고,
  > 미처 발견하지 못한 전립선암 진단이 가능합니다.
  > 홀뮴레이저의 end firing fiber 는 요도협착으로 인한 배뇨장애를 효과적으로 치료 할 수 있습니다.
  > 요도는 매우 부드럽고 섬세한 조직이기 때문에 섬세하지 못한 레이저로는 치료가 불가능했습니다.
  > 하지만 홀뮴레이저를 이용한 요도협착 치료는 매우 성공적입니다.
  > 또한 방광결석이나 전립선결석의 치료가 가능하고 적출된 전립선조직을 분쇄기를 통해
  > 밖으로 배출하므로 미처 발견하지 못한 전립선암을 진단할 수 있습니다.
  > WHY HoLEP 시스템
  > Treatment
  > (치료방법)
  > Onset
  > Treatment
  > (하부요로증상)
  > Uroflowmetry
  > (요속)
  > Prostate size
  > (전립선 크기)
  > PVR
  > (잔료량)
  > Disease
  > progression
  > (질병의 진행)
  > 총점수
  > Holep(홀렙)
  > hours
  > ★★★★
  > ★★★★
  > ★★★★
  > ★★★★
  > ★★★★
  > 20
  > Open Prostatectomy
  > (개복수술)
  > hours
  > ★★★★
  > ★★★★
  > ★★★★
  > ★★★★
  > ★★★★
  > 20
  > TUMT
  > weeks
  > ★★★
  > ★★★
  > ★★
  > ★★
  > ★★★
  > 13
  > TUNA(온열치료)
  > weeks
  > ★★★
  > ★★★
  > ★★
  > ★
  > ★★
  > 11
  > TURP-TUIP
  > (경요도전립선절제술)
  > hours
  > ★★★★
  > ★★★★
  > ★★★
  > ★★★★
  > ★★★★
  > 19
  > KTP
  > (광선택 레이저 기화술)
  > days
  > ★★★
  > ★★★
  > ★★
  > ★★
  > ★★★
  > 13
  > - no influence(효과) / ★ mild influence / ★★ moderate influence / ★★★ strong influence / ★★★★ very strong influence(매우 강한 효과)
  > conclusions
  > at the present point, HoLEP is considered to be a...
  > - True alternative to TURP / Open Prostatectomy? YES!!
  > - Gold standard for BPH surgery?
  > 결론
  > 전립선비대증 수술 적 치료의 현재 시점에서...
  > 경요도전립선 절제술은 개복수술의 대안으로
  > 홀렙(HoLEP) 수술은 최고의 표준 치료법으로 간주됩니다.
  > 양성 전립선비대증
  > 전립선비대증에 대한 약물을 복용하고 있는 분으로 증상 개선이 없는 경우
  > 기존의 열치료 (TUNA, TUMT)와 경요도전립선절제술(TURP)에 효과가 없는 경우
  > 수술 시 또는 수술 후 통증이나 합병증이 걱정되시는 분
  > 전립선 크기가 80g 이상인 분으로 기존의 레이저치료가 불가능하신 분
  > 경요도전립선 절제술 또는 레이저기화술 수술 후 수 년 후 증상이 다시 나타나시는 분
  > 평소 방광자극 증상으로 요급박이 있으신 분
  > 수술 후 바로 일상으로 복귀를 해야 하는 분
  > 요도협착
  > 과거의 특별한 병력으로 인한 요도헙착
  > 요도내시경 수술 후 나타난 요도협착
  > 요도염 또는 요도 내 곤지름 치료 후 나타난 요도협착
  > 수년 간 자가 도뇨를 하고 계시는 분
  > 전립선결석
  > 전립선결석으로 인해 전립선염의 재발이 잦은 분
  > 전립선결석으로 인해 회음부 하복부 및 고환에 통증을 호소하는 분
  > 전립선결석으로 인해 배뇨가 불규칙 하신 분
  > 방광결석
  > 기존 체외충격파 시술(ESWL)로 치료가 어려운 방광결석의 경우
  > 방광결석으로 배뇨시 혈뇨가 나오는 분
  > 방광결석으로 아랫배 통증이 심하신 분
  > 양성 전립선비대증 홀렙(HoLEP) 수술 전 검사 항목
  > 요도협착 홀렙(HoLEP)수술 전 검사 항목
  > 전립선결석 홀렙(HoLEP)수술 전 검사 항목
  > 방광결석 홀렙(HoLEP)수술 전 검사 항목
  > 홀렙(HoLEP)수술 시스템

#### [전립선 > 유로리프트] `clinic_02/c2_0701.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_02/c2_0701.html`
- **삽입 이미지 (6건):**
  - `[img]` `img/contxt_0701.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0701.png`
  - `[img]` `img/contxt_0702.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0702.png`
  - `[bg]` `img/sub_topimg7.jpg` → `http://www.manclinic.com/@2018/clinic_02/img/sub_topimg7.jpg`
  - `[bg]` `../img/common/num_bl_01.png` → `http://www.manclinic.com/@2018/img/common/num_bl_01.png`
  - `[bg]` `../img/common/num_bl_02.png` → `http://www.manclinic.com/@2018/img/common/num_bl_02.png`
  - `[bg]` `../img/common/num_bl_03.png` → `http://www.manclinic.com/@2018/img/common/num_bl_03.png`
- **본문 텍스트 (445자):**
  > 전립선
  > GANGNAM J ANDROLOGY CLINIC
  > 전립선
  > 전립선비대증
  > HoLEP시술
  > 유로리프트
  > 전립선염
  > 전립선암
  > 전립선통
  > 유로리프트
  > 전립선비대증의 새로운 치료법
  > 비대해진 전립선을 자르거나 레이저로 태우지 않고
  > 특수하게 제작된 이식용 의료결찰사로 전립선 양쪽을 묶어주어 크기를 줄여줍니다.
  > 전립선 결찰술이라고도 합니다.
  > 유로리프트 수술과정
  > 국소마취/하반신 마취
  > 10분~20분 소요
  > 유로리프트 수술특징
  > 2013년
  > 미국 FDA허가
  > 피부 절개가 없어
  > 봉합 불필요
  > 당일 수술
  > 당일 퇴원
  > 수술 후
  > 즉시 일상생활
  > 발기부전 사정장애
  > 없음
  > 역행성 사정 없음
  > 요실금 요도협착
  > 등의 부작용이
  > 거의 없음
  > 내시경으로
  > 수술이 진행
  > 유로리프트 수술 전 후
  > 유로리프트 수술 후 주의사항
  > 무거운 물건을 들거나 무리한 운동을 피해주세요.
  > 수술 후 4주 간 흡연과 음주를 피해주세요.
  > 수술 4주 후 부터 성생활이 가능합니다.

#### [전립선 > 전립선염] `clinic_02/c2_0401.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_02/c2_0401.html`
- **삽입 이미지 (8건):**
  - `[img]` `img/contxt_0401.png` → `http://www.manclinic.com/@2018/clinic_02/img/contxt_0401.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_02/img/sub_topimg.jpg`
  - `[bg]` `../img/common/num_bl_01.png` → `http://www.manclinic.com/@2018/img/common/num_bl_01.png`
  - `[bg]` `../img/common/num_bl_02.png` → `http://www.manclinic.com/@2018/img/common/num_bl_02.png`
  - `[bg]` `../img/common/num_bl_03.png` → `http://www.manclinic.com/@2018/img/common/num_bl_03.png`
  - `[bg]` `../img/common/num_bl_04.png` → `http://www.manclinic.com/@2018/img/common/num_bl_04.png`
  - `[bg]` `../img/common/num_bl_05.png` → `http://www.manclinic.com/@2018/img/common/num_bl_05.png`
  - `[bg]` `../img/common/num_bl_06.png` → `http://www.manclinic.com/@2018/img/common/num_bl_06.png`
- **본문 텍스트 (5695자):**
  > 전립선
  > GANGNAM J ANDROLOGY CLINIC
  > 전립선
  > 전립선비대증
  > HoLEP시술
  > 유로리프트
  > 전립선염
  > 전립선암
  > 전립선통
  > 전립선염
  > 전립선염이란
  > 비뇨기과적으로는 4배분뇨법에 의한
  > 급성 세균성 전립선염, 만성 세균성 전립선염, 비세균성 전립선염, 그리고 전립선 통의 분류를 보편적으로 사용해 오고 있습니다.
  > 지금까지는 전립선염증후군 환자의 10% 이하인 세균성 전립선염 환자들에 대하여만 대부분의 연구가 진행되어 왔습니다.
  > 불임학적으로는 정액 안에 백혈구가 증가된 농정액증 소견을 보일 때를 말합니다.
  > 전립선-정낭염, 부고환-전립선-정낭염, 남성 부성선염, 정낭염(seminal inflammation) 등으로 불리며 이중에서 정낭염이란 용어가 보다 보편적으로 사용되고 있습니다.
  > 대부분 불임 환자들을 대상으로 자료가 발표된 것이고, 백혈구가 전립선 외에도 정낭이나 구부요도선 등 다른 부위에서 나올 수 있으며
  > 정액내의 백혈구증가 소견이 전립선염의 증상이나 전립선염이 있는지의 여부와 세균성인지 아닌 지와의 연관성이 적다는 단점이 있습니다.
  > 임상적인 진단으로는 전립선액에서 백혈구증가 소견이 보이지 않는 경우에도
  > 만성 전립선염에서 흔히 관찰되는 회음부 동통과 같은 전립선 증상을 호소하면 전립선염으로 진단하는 것입니다.
  > 환자의 입장에서는 많은 검사보다 우선 증상에 준하여 치료를 받음으로써 증상이 빨리 개선되는 긍정적인 면이 있습니다.
  > 전립선염의 증상
  > 여성에서는 콩팥과 방광의 비뇨기계와 임신과 관련한 생식기계가 완전히 분리되어 있으나
  > 남성에서는 비뇨기와 생식기가 분리되어 있지 않고 전립선에서 만나서 요도를 통해 소변과 정액이 나온다.
  > 사정시에 소변이 나오지 않고 아침에 발기가 되었을 때 소변이 잘 나오지 않는 것은 복잡한 신경분포로 구성된 특별한 장치가 전립선 내에 있어 작동하기 때문이다.
  > 따라서 이러한 전립선에 병이 생기면 배뇨증세와 동통과 같은 신경통, 그리고 성기능에 관련한 증세가 다양하게 발현될 수 있다.
  > 특징적인 전립선 질환 6가지
  > 고환과 항문상이(회음부)의 통증이나 불쾌감
  > 고환의 통증이나 불쾌감
  > 소변보는 것과 관계없는 성기의 끝의 통증이나 불쾌감
  > 허리 이하의 치골(불두덩이) 혹은 방광부위(아랫배)의 통증이나 불쾌감
  > 배뇨통
  > 성관계시 절정감을 느낄 때(사정시) 또는 그 이후의 통증이나 불쾌감
  > 전립선염의 원인과 치료
  > 급성 세균성 전립선염
  > (NIH Category I,
  > Acute Bacterial Prostatitis)
  > 세균성 전립선염의 발생과정은 직장내 균들의 직장으로부터 직접 전파 및 림프관을 통한 감염이나 요도로부터의 상행성 감염, 혹은 요도 카테타와 연관되어 감염되는 경우와 성관계로 인한 전염과 혈행성 감염 등이 있을 수 있으나 요도로부터의 상행성 감염이 가장 많다.
  > 급성전립선염은 갑작스런 고열과 오한, 하부요통, 회음부통증, 빈뇨, 요급박, 야간뇨, 배뇨통 및 배뇨곤란 등 방광 하부폐색증상을 보이고 근육통, 관절통의 증상으로 나타난다. 전립선의 직장촉진에서 매우 심한 압통, 부종과 온열감 등의 소견을 나타내므로 쉽게 진단할 수 있다. 세균혈증을 유발할 수 있으므로 전립선 마사지는 금기이다.
  > 치료는 일반적인 대증요법을 하면서, 항생제를 투여하면 비교적 잘 치료된다. 일반적인 대증요법으로 안정가료하면서 해열진통제를 투여하고, 충분한 수분을 섭취시키고, 대변 완화제 등을 투여하여 변비를 예방한다. 급성 요폐가 발생했을 때에는 입원가료를 원칙으로 하고, 치골상부천자로 배뇨시키는 것이 제일 좋은 방법이다.
  > 항생제는 감수성 검사에 의한 투여를 원칙으로 하고 혈중농도가 충분히 유지될 수 있는 용량을 투여하여야 한다. 열이 없어지고 나서 48시간이 지나서부터 경구제제로 바꾸어 투여한다. 대부분 2주면 증상이 호전되나 만성 세균성 전립선염으로 되는 것을 방지하기 위하여 30일 동안 투여하는 것을 권장한다. 하지만 적절하게 치료를 하여도 만성 세균성 전립선염으로 발전할 수 있으며, 그 빈도는 알려져 있지 않다.
  > 만성 세균성 전립선염
  > (NIH Category II,
  > Chronic Bacterial Prostatitis)
  > 재발성 요로 감염의 한 원인 질환으로 증상은 매우 다양하게 나타나며, 종종 무증상의 세균뇨 소견을 보이기도 한다. 전립선액이나 전립선 마사지 후 소변에서 균이 배양되는 경우에 진단되며 치료는 항생제 치료가 기본적이다.
  > 전립선 결석은 나이가 증가하면서 자연히 생기는 경우가 많고 전립선 증상이 없는 일반인에서도 많은 빈도로 관찰되고 있으므로 결석 자체가 문제가 되지는 않는 것으로 사료되지만 결석이 있는 환자에서 전립선염이 동반되며 치료가 잘되지 않는 경향이 있다. 특히 만성 세균성 전립선염인 경우에는 결석과 함께 전립선을 제거해주면 이론적으로 완치를 기대할 수 있을 것이다. 하지만 전립선염이 주로 생기는 말초대를 경요도로 절제한다는 것은 매우 힘들고, 역행성 사정과 성기능 감퇴 등의 수술후의 후유증을 고려한다면 이러한 시술은 매우 부정적이라 하겠다.
  > 항생제 치료와 함께 일반적인 대증요법으로 가급적 술과 커피와 자극적인 음식을 피하고, 온수좌욕과 주기적인 사정과 규칙적인 전립선 마사지와 함께 배뇨자극 증상을 개선하기 위하여 소염제나 항콜린제를 투여한다.
  > 만성 비세균성 전립선염
  > / 만성 골반통 증후군
  > (NIH Category III, Chronic
  > Nonbacterial Prostatitis /
  > Chronic Pelvic
  > Pain Syndrome)
  > o 염증성 만성 골반통 증후군(Category IIIa, Inflammatory CPPS)
  > 전립선염 증후군 중에서 가장 많은 환자가 이 군에 속한다. 원인은 아직까지 명확하게 규명되지는 않았으나 자가면역질환, 전립선관내로의 요역류, 바이러스성 등의 가설이 있다.
  > ① 항생제 치료
  > 항생제를 우선 투여하고 나서 치료에 반응하는지에 따라 치료 방침을 잡는 방법이 제시되고 있다. 비세균성이지만 먼저 2주간의 항생제를 투여하고 나서 증상의 호전이 있으면 세균성 전립선염 즉 Category II의 치료시에 투여하는 항생제를 동일한 기간동안 투여해야 한다. 항생제를 투여하는 기간은 적어도 2주 이상이며, 효과가 분명하지 않으면 6～8주 이상 항생제를 투여하지 말아야 한다.
  > ② Krisiloff 식이요법
  > 1,710명의 만성 비세균성 전립선염 환자들에게 12주간 술, 커피같은 카페인이 들어있는 식품과 자극적인 음식을 피하도록 하는 Krisiloff 식이요법을 시행한 결과 다른 약물 투여 없이 87%에서 증세가 상당히 개선되었다. 따라서 이러한 식생활을 병행하는 것이 좋다.
  > ③규칙적인 성생활, 전립선 마사지, 온좌욕
  > 규칙적인 성생활에 의한 전립선액의 배출이 가장 중요하다. “접하되 설하지 않는다.”는 동양적인 성사고 방식이 오히려 전립선 증상을 악화시킨다. 따라서 억지로 사정을 막지 말고 주 2회 정도의 규칙적인 부부생활로 전립선액을 배출해 주도록 하는 것이 좋다.
  > 전립선 마사지는 주 2～3회가 좋으며 병원에 자주 내원하기가 힘든 경우에는 배우자에게 도움을 받는 것도 좋다. 온좌욕은 전립선과 회음부의 근육을 이완시켜 통증을 완화시키고 염증 분비물의 배설을 촉진하며, 혈액순환을 증가시켜 전립선 세포 내로의 산소분압이 증가되어 근세포의 회복과 부종을 감소시킨다.
  > ④ 알파차단제
  > 방광 경부와 전립선에 위치한 알파 수용체를 차단함으로써 배뇨개선과 통증을 완화시켜준다. Terazocin이나 doxazocin 2～4mg으로 효과가 좋음 8～10mg을 투여하는 경우도 있다. 대부분 투약을 중지하면 증상이 재발하는 경향이 있다.
  > ⑤ 항염증제
  > 프로스타글라딘(prostaglandin) 생성을 억제함으로써 통증을 줄인다. 최근 COX-2 억제제가 많이 개발되어 임상실험 중이다.
  > ⑥ Finasteride
  > 전립선 증식에 작용하는 dihydrotestosterone 생성을 억제하는 약물로서, 만성 골반통 증후군 환자에서 시도하는 것은 finasteride가 전립선의 성장과 기능이 안드로겐에 영향을 받으며, 동물실험에서 비세균성 전립선염이 전립선 호르몬들에 영향을 받는 것으로 추측되고, 배뇨시 전립선관내로의 역류를 줄이는 잠재적인 영향을 주는 것으로 추측하고 있다.
  > ⑦ 생약제
  > 면역시스템의 활성, 항염효과, 진통효과, 진경효과 등의 작용으로 사용되고 있다. 유럽이나 미국에서는 건강식품점에서 많이 판매되고 있으며, 약초나 생약제로 종려나무열매(saw palmetto), 안젤리카나무 뿌리(Dong Quai), 마늘줄기, 호박씨, 아프리카 상록수 껍질(pygeum) 등이 있으며, 화분추출물 등이 있다.
  > o 비염증성 만성 골반통 증후군(Category IIIb, Non-inflammatory CPPS)
  > 방광경부와 전립선요도의 기능이상이나 골반긴장성 근육통, 혹은 스트레스 등으로 생각하고 있다.
  > 요류역학검사에서 특징적으로 최대요속이 감소되어 있고, 배뇨시에 방광내압이 낮은 소견을 보인다. 배뇨시에 외요도괄약근의 근전도가 증가되는 배뇨근-괄약근 협조장애가 나타난다. 즉 방광경부와 전립선요도의 기능이상으로 인하여 소변의 전립선관내로의 역류 등 전립선을 자극하여 증상이 유발될 수 있다.
  > 또는 골반근육이 습관적으로 수축하거나 긴장을 하면 통증이 유발될 수 있다. 앉거나 뛰는 등의 골반근육에 피로를 유발하는 활동을 할 때에 회음부 불쾌감이나 통증이 유발된다. 이러한 경우를 골반긴장성 근육통이라 하며, 직장수지 검사에서 골반근육의 압통을 느끼는 경우가 있다.
  > ① 항생제 치료
  > 세균성 전립선염이 비염증성 만성 골반통 증후군으로 진단될 수 있으므로 2～4주간 항생제를 투여한다. 만약 항생제 투여로 호전이 명확하게 있으면 세균성 전립선염에 준하여 치료해야 한다.
  > ② 근육이완제
  > 평활근 이완제로서 알파차단제가 배뇨개선과 통증 경감의 목적으로 사용된다. 골격근 이완제로 benzodiazepam 계통의 약물, 즉 diazepam, xanax 등과 baclofen이 골반근의 긴장성 근육통이 있는 환자에 유용하게 사용된다.
  > ③ 진통제
  > 진통제는 장기간 투여하지 않도록 하며, 마약성 진통제는 피하는 것이 좋다.
  > ④ 바이오 피드백 치료 및 전기자극 치료
  > 골반근의 긴장을 완화하고 잘 이완하도록 도와주는 것이 목적이다. 배뇨시에 여유를 갖게하고 힘을 주거나 급하게 배뇨하지 않도록 한다. 이완이 잘되면 통증도 경감하면 요속도 증가된다.
  > ⑤물리치료
  > 회음부의 압통을 느끼는 부위를 중심으로 근육 마사지 치료를 시행하여 통증을 경감시킨다.
  > ⑥ 스트레스 경감
  > ⑦ 대증적인 치료
  > 의자나 운전석에 쿠션을 투거나 회음부에 압통이 가지 않도록 고안된 도넛 모양의 쿠션을 사용하거나 자전거 타기를 하지 않는 등 딱딱한 자리에 오래 앉지 않도록 한다. 또한 전립선의 울혈을 방지하기 위하여 규칙적인 성생활과 주기적인 전립선 마사지를 받으면서 가급적이면 술, 커피, 자극적인 음식을 피하는 것이 도움을 준다.
  > o 무증상 전립선염(NIH Category IV, Asymptomatic Inflammatory Prostatitis)
  > 무증상 전립선염은 대부분 치료할 필요가 없다. 하지만 불임으로 내원한 환자에서 우연하게 발견돼 농정액증에서 전립선검사를 시행한 결과가 정상소견이라면 정낭의 염증을 의심하게 된다. 이러한 경우는 정자의 운동성을 증가시키기 위하여 2～3개월의 항생제 치료를 요한다.
  > 또한 전립선 특이항원(prostate specific antigen, PSA)이 비정상적으로 증가하여 전립선 조직검사를 시행한 후에 전립선염이 발견될 경우에는 4～6주정도 항생제 치료를 시행하고 PSA의 변화를 관찰하는 것이 필요하다.
  > 만성전립선염 환자들이 종종 전립선염 때문에 나중에 암이 되는 것이 아니냐는 질문을 한다. 현재로서는 밝혀진 바가 없으나 암과는 무관한 것으로 알려져 있다.
  > 전립선염의 치료방법은?

#### [전립선 > 전립선암] `clinic_02/c2_0501.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_02/c2_0501.html`
- **삽입 이미지 (1건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_02/img/sub_topimg.jpg`
- **본문 텍스트 (1024자):**
  > 전립선
  > GANGNAM J ANDROLOGY CLINIC
  > 전립선
  > 전립선비대증
  > HoLEP시술
  > 유로리프트
  > 전립선염
  > 전립선암
  > 전립선통
  > 전립선암
  > 전립선암이란
  > 전립선암은 어느 정도 진행된 후 진단이 되는 경우가 많이 있습니다.
  > 이때는 이미 척추나 뼈로 암세포가 전이 되어 그 부위의 통증을 호소하는 경우도 있고
  > 암 덩어리가 커진 경우 직장검사에서 전립선 비대증에 비해 딱딱하게 만져질 수 있으나 증상은 비슷하게 나타납니다.
  > 전립선내에는 복잡한 신경분포와 전립선 주위에 그물망 처럼 신경들이 있어 통증정도가 다양하며 위에 언급한 배뇨증상 외에도
  > 성기능 저하, 사정통, 조루, 성욕 감퇴 등의 성에 관련된 증세도 초래할 수 있어 증상만 갖고 어떤 질환임을 구분하기는 매우 어렵습니다.
  > 전립선암 원인
  > 유전적 소인
  > 남성 호르몬의 영향
  > 음식 및
  > 식이습관과 직업
  > 전립선암 진단
  > 직장 초음파 검사가 유용하며 전립선암은 발생초기에는 주목할 만한 증상이 없습니다.
  > 증상이 없다는 것이 초기암의 특징이라고 할수 있겠습니다.
  > 암은 전립선 주변부 (직장을 통하여 손가락으로 만져 볼수 있는 부위)에서 시발하는 것이 약 75%이므로,
  > 경험있는 비뇨기과 전문의가 이러한 초기암을 발견할 수 있는 확률은 75-80%입니다.
  > 즉 전립선 주변부에서 특이한 전립선의 탄력성과 고무와 같은 촉감과는 달리 딱딱하(때로는 돌과 같이 단단하다)게 만져지는 경결이 있으면, 거의 틀림없는 전립선암입니다.
  > 그 사람의 운명을 결정짓는 순간이 비뇨기과 전문의 손가락검진에서 결정됩니다.
  > 그러나 전립선 주변부 이외의 부위, 즉 중앙부와 이행부에 발생하는 25%의 조기암은 손가락 촉진으로 확인 할 수가 없습니다.
  > 그러나 최근에는 초음파검사 및 전립선암에서 분비하는 종양마커 즉, 전립선 특이항원을 혈액에서 검사하여, 확진 및 암의 진행정도를 판단할 수 있습니다.
  > 전립선암 치료
  > 암의 진행정도에 따라 치료법을 선택합니다.
  > 진행단계에 따라서 수술적인 요법,호르몬 치료,방사선 치료가사용되며 경우에 따라 위의 방법들이 병용해서 사용될수 있습니다.
  > 무엇보다도 조기에 발견하여 치료함이 중요합니다.

#### [전립선 > 전립선통] `clinic_02/c2_0601.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_02/c2_0601.html`
- **삽입 이미지 (6건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_02/img/sub_topimg.jpg`
  - `[bg]` `../img/common/num_bl_01.png` → `http://www.manclinic.com/@2018/img/common/num_bl_01.png`
  - `[bg]` `../img/common/num_bl_02.png` → `http://www.manclinic.com/@2018/img/common/num_bl_02.png`
  - `[bg]` `../img/common/num_bl_03.png` → `http://www.manclinic.com/@2018/img/common/num_bl_03.png`
  - `[bg]` `../img/common/num_bl_04.png` → `http://www.manclinic.com/@2018/img/common/num_bl_04.png`
  - `[bg]` `../img/common/num_bl_05.png` → `http://www.manclinic.com/@2018/img/common/num_bl_05.png`
- **본문 텍스트 (1884자):**
  > 전립선
  > GANGNAM J ANDROLOGY CLINIC
  > 전립선
  > 전립선비대증
  > HoLEP시술
  > 유로리프트
  > 전립선염
  > 전립선암
  > 전립선통
  > 전립선통
  > 만성 비세균성전립선염과 전립선통
  > 미국의 경우 비뇨기과외래로 내원하는 남성의 25%가 전립선염증상에 의한 것이라고 하였으며
  > 우리나라에서도 개원 비뇨기과 내원환자의 약 15-25%가 전립선염증후군으로 추정될 만큼 매우 흔한 질환입니다.
  > 이렇게 흔한 질환이지만 많은 의사들은 전립선염/전립선통의 원인이나 발생기전 및 치료에 있어서 뚜렸한 지침의 설정도 되어 있지 못한 편입니다.
  > 전립선염 증상 환자 600명의 분포조사결과 5%는 세균성 전립선염, 64%는 비세균성 전립선염, 31%는 전립선통의 분포를 보였습니다.
  > 일부 학자는 만성전립선염 증상을 가진 환자 80%가 전립선통이라고 보고하였습니다.
  > 예전에는 전립선염과 전립선통을 구분하였으나 최근에는 양자간에 구분을 하지 않는 경향이 있습니다.
  > 왜냐하면 전립선통이 있는 환자에서도 가끔 다수의 백혈구가 검출되기도 하며 또한 치료방법도 동일하기 때문입니다.
  > 직업과 전립선통증증후군의 연관성
  > 장기간 오래 앉아서 일을 하거나 소변을 오래 참는 경우에 전립선통을 호소하는 경우가 종종 있습니다.
  > 예를 들면 직업운전자나 앉은 자세로 오래 일하는 직업을 가진 경우입니다.
  > 일부학자들의 연구에 의하면 택시기사 405명과 전립선염 환자 93명을 비교한 결과 증상 점수가 전립선염환자와 유사하게 높았고,
  > 전립선초음파검사상 석회화가 55%에서 관찰되었고 전립선액에서 백혈구가 다수 나타났습니다.
  > 성기능약화와 조루증세가 45.5% 및 37.6%로 전립선염 환자와 비슷하였습니다.
  > 따라서 저자들은 특수환경 즉 앉아있는 자세와 스트레스, 긴장, 소변의 오래 참음 등이 많은 택시기사의 경우
  > 전립선통증세가 전립선염환자군과 유사하게 나타났음을 강조하였습니다.
  > 한편 1998년 미국비뇨기과학술대회에서 미국보스턴대학의 Erwin Goldstein교수는
  > 사이클선수들이 다른 운동선수에 비해 배뇨장애 및 성기능장애(발기장애, 사정장애, 여성의 불감증등)의 빈도가 높다고 발표하였습니다.
  > 즉, 사이클링같이 좁은 좌석에 앉아서 회음부를 자극시키는 운동을 하게 되면 골반 근육의 긴장성 통증과 경련을 유발하고
  > 이로 인한 요도 괄약근의 경련으로 배뇨 곤란 증상과 전립선통 증상이 나타나고
  > 골반 근육과 연관된 구부해면체 및 좌골해면체 근육의 기능이 원활치 못함으로서 발기 및 사정 장애를 초래한다고 하였습니다.
  > 전립선통의 치료
  > 약물치료
  > 알파 1- 아드레날린 수용체 차단제
  > 방광경부나 전립선부 요도는 알파 1 - 아드레날린수용체가 풍부하므로 알파 1-아드레날린 수용체 차단제를 사용하면 전립선통의 다수에서 관찰되는 방광경부 및 요도의 과도한 수축을 억제할 수 있습니다.
  > 골격근 이완제
  > 전립선통이 있는 다수의 환자에서 골반근육의 긴장성 근육통 내지 외요도괄약근의 수축소견이 있으므로 골격근을 이완시키는 약제를 투여하여 치료효과를 얻기도 합니다.
  > 항생제
  > 만성전립선염치료에 준하여 투여한다.
  > 항콜린 및 평활근이완제
  > 방광의 수축이상(배뇨근 불안정)이 동반되면서 빈뇨, 야간빈뇨, 요절박감들 방광자극증상을 많이 호소하는 경우에 투여한다.
  > 향정신성 약제
  > 이들 약제는 중추에서 serotonin의 재흡수를 억제함으로서 통증완화작용을 한다.
  > 초단파 온열요법
  > 온열요법의 치료근거는 열에 의한 균증식억제나 살균작용, 전립선 평활근 및 방광경부의 알파아들레날린 수용체 파괴에 의한 수축반응소실, 전립선평활근 및 방광경부의 알파 아드레날린수용체 파괴에 의한 수축반응소실, 전립선의 면역반응강화 또는 전립선내로 약제 침투성증가 등의 치료잇점이 있습니다.
  > 온수 좌욕 요법
  > 전립선 및 정낭의 평활근이완효과 및 혈액순환을 촉진하여 부종 및 염증반응을 감소시킵니다.
  > 정상적인 성생활 권장
  > 정신 심리요법
  > 6. 주의할 음식 : 자극성 음식, 카페인과다섭취, 알콜섭취

#### [남성성형 > 귀두확대술] `clinic_03/c3_0101.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_03/c3_0101.html`
- **삽입 이미지 (8건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_03/img/sub_topimg.jpg`
  - `[bg]` `img/contxt_0101.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0101.png`
  - `[bg]` `img/contxt_0102.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0102.png`
  - `[bg]` `img/contxt_0103.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0103.png`
  - `[bg]` `img/contxt_0104.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0104.png`
  - `[bg]` `img/contxt_0105.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0105.png`
  - `[bg]` `img/contxt_0106.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0106.png`
  - `[bg]` `img/contxt_0107.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0107.png`
- **본문 텍스트 (72자):**
  > 남성성형
  > GANGNAM J ANDROLOGY CLINIC
  > 귀두확대술
  > 음경굵기확대술
  > 음경길이연장술
  > 음경이물질제거
  > 음경만곡증
  > 함몰음경

#### [남성성형 > 음경굵기확대술] `clinic_03/c3_0201.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_03/c3_0201.html`
- **삽입 이미지 (5건):**
  - `[img]` `img/contxt_0201.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0201.png`
  - `[img]` `img/contxt_0202.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0202.png`
  - `[img]` `img/contxt_0203.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0203.png`
  - `[img]` `img/contxt_0204.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0204.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_03/img/sub_topimg.jpg`
- **본문 텍스트 (848자):**
  > 남성성형
  > GANGNAM J ANDROLOGY CLINIC
  > 귀두확대술
  > 음경굵기확대술
  > 음경길이연장술
  > 음경이물질제거
  > 음경만곡증
  > 함몰음경
  > 음경굵기확대술
  > 자가진피 음경확대술
  > 과거에는 엉덩이에서 진피지방을 채취해서 이식하는 수술을 했는데
  > 지금은 대체 이식물질을 이용해서 비뇨기과 영역에서 시술 가능
  > 자신의 둔부에서 채취한 진피조직을 음경에 이식하는 수술방법입니다.
  > 자신의 진피조직을 이용하기 때문에 부작용이 전혀 없으며, 조직자체도 두꺼워 확실한 확대효과를 보입니다.
  > 특히 음경의 부분에는 흉터가 남지 않으며 진피조직을 채취한 둔부도 최소한의 흉터로 잘 식별이 되지 않도록 강남 J 만의 노하우를 가지고 시술을 하고 있습니다.
  > 무흉터 저장진피음경확대술
  > 자가진피 음경확대술에 비하여 매우 간단합니다. 자신의 진피조직을 박리하는 과정에서 엉덩이 부분의 최소한의 흉터문제에 민감한 경우에는
  > 적극적으로 고려하여 저장진피 또는 대체진피 이식법으로 생각해 볼 수 있으며, 이러한 문제를 근본적으로 해결한 수술법입니다.
  > 진피를 박리하지 않으므로 엉덩이 부분에 흉터가 남지 않는 것은 당연한 일이며, 음경에도 물론 흉터가 남지 않습니다.
  > 수술 후 흉터가 문제가 되지 않기 때문에 완벽한 음경확대술 입니다. 저장진피를 자신에게 이식했을 때 자신의 혈관과
  > 신경이 자라나 수 개월 이내에 완벽하게 자신의 진피가 되기 때문에 부작용이 없습니다. 따라서 이러한 관계로 음경수술전문의 사이엔 이미
  > 저장진피의 음경확대술이 보편화되어 있습니다. 엉덩이 부분의 진피를 박리하는 과정이 없기 때문에 수술시간도 약 50분 정도 소요되며,
  > 수술 후에는 음경의 굵기가 약 1.5 배 정도, 길이는 3~4 cm 정도 확대되는 효과가 있는 것으로 보고 되고 있습니다.

#### [남성성형 > 음경길이연장술] `clinic_03/c3_0301.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_03/c3_0301.html`
- **삽입 이미지 (4건):**
  - `[img]` `img/contxt_0301.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0301.png`
  - `[img]` `img/contxt_0302.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0302.png`
  - `[img]` `img/contxt_0303.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0303.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_03/img/sub_topimg.jpg`
- **본문 텍스트 (1025자):**
  > 남성성형
  > GANGNAM J ANDROLOGY CLINIC
  > 귀두확대술
  > 음경굵기확대술
  > 음경길이연장술
  > 음경이물질제거
  > 음경만곡증
  > 함몰음경
  > 음경길이연장술
  > 현수인대절제술
  > 현수인대 절제술이란 몸 속 부분과 치골을 연결하는 끈으로 발기 시 성기의 방향이 위로 향하게 한며 발기조직을 몸에 고정시키는 역할을 합니다.
  > 길이 연장술은 몸 속에 숨어있는 발기조직 일부를 밖으로 꺼내는 수술로 약 3~5cm 정도 길이 연장 효과가 있습니다.
  > 남성의 성기에 대한 불만 중 굵기 다음으로 중요한 비중을 차지하는 것이 길이 입니다.
  > 일반적으로 남성 성기 길이를 결정하는 해면체는 발기 시 평상시에 비해 2배에서 크게는 3배 이상의 길이가 길어지게 하는 효과가 있으므로 실제의
  > 성 생활에는 그다지 중요한 문제가 되지 않습니다. 그러나 평상시의 길이가 너무 짧아 사회생활에 지장을 받는다면 의학적 도움을 필요로 한다고 봅니다.
  > 실제로 내원 상담하는 환자들의 길이 문제에 대한 고충은 생각보다 심각한 경우가 많습니다.
  > 음경이란 개인에 따라 다소 다르긴 하지만 몸 밖에 노출된 길이만큼 몸 속에 숨겨져 있습니다. 길이 연장술이란 치골하부에서 음경을 받쳐주고 있는 현수인대라는
  > 것을 부분적으로 해제하여 각도를 조절함으로써 길이연장의 효과를 보게 하는 수술로서 평상시의 음경의 길이는 평균 2-5cm(개인에 따라 다소 차이가 있음)의
  > 연장효과를 보이나 발기시의 길이까지 같은 비율로 길어지는 것은 결코 아닙니다. 사람에 따라 다르긴 하지만 수술 후 발기시의 길이가 수술 전과 비슷한 경우도 있습니다.
  > 무흉터 현수인대 절제술
  > 일반적으로 현수인대를 절제하여 음경의 길이연장을 하는 수술은 절개부위가 치골 아랫부분 즉, 음경의 뿌리 부분으로 시행이 되고 있으나,
  > 본원에서는 포경수술 부위로 절개하여 시술이 됩니다. 따라서 흉터가 전혀 남지 않습니다.
  > 현수인대절제술
  > 과거 포경수술시 음경의 표피를 너무 많이 절개하여 음경의 피부가 부족한 경우 음경부위를 S 자 모양으로 절개 하여 미세하게 봉합합니다.
  > 음경이 발기 충분한 발기를 방해하고 당기는 현상을 수술 적 방법으로 완화시킴

#### [남성성형 > 음경이물질제거] `clinic_03/c3_0401.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_03/c3_0401.html`
- **삽입 이미지 (2건):**
  - `[img]` `img/contxt_0401.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0401.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_03/img/sub_topimg.jpg`
- **본문 텍스트 (1205자):**
  > 남성성형
  > GANGNAM J ANDROLOGY CLINIC
  > 귀두확대술
  > 음경굵기확대술
  > 음경길이연장술
  > 음경이물질제거
  > 음경만곡증
  > 함몰음경
  > 음경이물질제거
  > 음경이물질제거
  > 음경확대의 목적으로 비의료인에 의해 음성적으로 시술되는 바셀린, 파라핀, 액체 실리콘 등은 액체상태로 주사기에 넣어 쉽게
  > 피부에 주입 할 수 있어 암암리에 많이 시행되어 심각한 부작용을 야기하는 경우가 많습니다. 특히 지나친 확대의 욕심으로 많은 양을 주입할 경우
  > 돌이킬 수 없는 결과를 초래하기도 합니다.
  > 이런 물질들은 초기에는 감염으로 인해 염증이 생겨 고름 같은 것이 나오지만 시간이 지날수록 피부의 괴사, 패혈증, 혈관으로 흡수되어 폐전색증
  > 등 심각한 부작용을 초래하고 있습니다. 경우에 따라 이물질들이 귀두를 파고 들어가 귀두가 딱딱해지기도 하고 음낭으로 파고 들어가 감염으로
  > 인해 아주 심각한 결과를 초래하기도 합니다. 심지어 이물질로 인한 음경암 등도 보고 되어 있고 위생 상태가 불량해 배우자에게도 나쁜 영향을 끼칩니다.
  > 음경피부에 바세린액 또는 파라핀액을 주사한 후 생긴 이물질 염증질환은 음경피부가 돌처럼 딱딱해지는 육아종(granuloma)을 형성하여
  > 음경피부의 정상적인 신축력의 정도를 현저히 감소시켜 발기력에 영향을 미치고 , 주변 혈관 및 신경을 침범하여 발기동통을 유발하고 심지어는
  > 지속적인 염증반응으로 발기살인 음경해면체(corpus carvenosum)에 까지 침범하여 심각한 발기장애를 유발할 수 있으므로
  > 반드시 완전 제거하는 것이 최선의 치료 방법이며, 만약 피부가 모자라 긴장이 있을 때는 음낭피부변이나 피부이식술로 해결해야 합니다.
  > 이들을 제거하기란 아주 간단한 일은 아닙니다. 이물질 주입 초기에 수술을 받는다면 별 문제없이 제거할 수 있지만 염증이 생기고
  > 피부괴사가 상당히 진행된 뒤에 수술을 하게 된다면 이물질만 제거하기 힘들 뿐 아니라 피부조직도 같이 제거를 해야 하고 음낭의 피부를
  > 이식하든지 아님 다른 부위의 피부를 이식해야 합니다. 가능한 한 조기에 제거하는 것이 피부조직을 덜 손상시킬 수 있으므로 바람직합니다.
  > 수술은 국소에 주사 된 모든 이물질(파라핀, 바셀린, 실리콘)을 가능한 한 모두 제거하고 건강한 피부로 결손 된 부위를 덮어 주는 방법인데
  > 이 물질에 의한 조직손상의 정도에 따라 수술이 간단할 수도 있고 큰 수술이 되기도 합니다. 괴사 범위가 넓을 경우에는 음낭의 피부나 허벅지의
  > 피부등을 이용한 이식수술을 필요로 하기도 합니다.

#### [남성성형 > 음경만곡증] `clinic_03/c3_0501.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_03/c3_0501.html`
- **삽입 이미지 (3건):**
  - `[img]` `img/contxt_0501.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0501.png`
  - `[img]` `img/contxt_0502.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0502.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_03/img/sub_topimg.jpg`
- **본문 텍스트 (517자):**
  > 남성성형
  > GANGNAM J ANDROLOGY CLINIC
  > 귀두확대술
  > 음경굵기확대술
  > 음경길이연장술
  > 음경이물질제거
  > 음경만곡증
  > 함몰음경
  > 음경만곡증
  > 음경만곡증
  > 음경이 전후좌우의 어느 방향으로든지 휘어 있는 경우를 음경 만곡증이라 말하며 원인은 선천적인 경우와 후천적인 경우가 있습니다.
  > ‘페이로니씨 병’ 이라고도 하는 이 질병은 과도한 성행위나 성병, 동맥경화증, 당뇨병, 비타민 E 결핍증, 자가 면역 질환, 유전적 요인 등이 관여한다고 알려져 있습니다.
  > 음경 만곡증이 있다고 해서 누구나 반드시 치료를 해야만 하는 것은 아닙니다. 질내 삽입이 힘들거나 불가능한 경우, 성교시 통증이 유발되고,
  > 외관상 어색함으로 인한 정신적 스트레스가 심한 경우에는 수술 등의 치료가 반드시 필요합니다.
  > 음경만곡증 교정은 다른 수술과는 달리 비뇨기과 남성의학전문의가 아닌 경우 수술하기도 어렵지만 한다고 하더라도 성기의 해부학적 - 생리학적 기능을 고려해서
  > 적절히 수술해야 하므로 경험 있는 비뇨기과 남성의학 전문의의 치료를 받는 것이 좋습니다.

#### [남성성형 > 함몰음경] `clinic_03/c3_0601.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_03/c3_0601.html`
- **삽입 이미지 (2건):**
  - `[img]` `img/contxt_0601.png` → `http://www.manclinic.com/@2018/clinic_03/img/contxt_0601.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_03/img/sub_topimg.jpg`
- **본문 텍스트 (948자):**
  > 남성성형
  > GANGNAM J ANDROLOGY CLINIC
  > 귀두확대술
  > 음경굵기확대술
  > 음경길이연장술
  > 음경이물질제거
  > 음경만곡증
  > 함몰음경
  > 함몰음경
  > 함몰음경
  > 음경이 작게 보이거나 완전히 숨어 있는 듯한 상태의 성기를 함몰음경이라 합니다.
  > 이런 음경은 모양이 마치 목을 잔뜩 움츠리고 있는 자라의 목과 비슷해서 자라고추라고 부릅니다.
  > 함몰음경인 경우 음경의 실제로 작은 것은 아닙니다. 음경이 치골 윗부분 즉 아랫배에 과도한 지방더미에 묻혀버려 작게 보이는 경우 입니다.
  > 함몰음경은 유아나 소아에게만 일어나는 현상은 아닙니다. 비만한 남성도 치골 부위에 과도한 지방의 축적으로 음경이 묻혀버려 잘 보이지 않게 됩니다.
  > 또한 현대인의 식생활, 운동부족 등으로 비만 인구가 늘어나는 것을 볼 때 함몰음경인 남성들 또한 늘어나는 추세입니다.
  > 특히, 날씨가 춥거나 운동을 많이 해서 탈수된 경우, 상체를 앞으로 구부렸을 때 더 함몰음경이 심해집니다.
  > 함몰음경 5가지 유형과 교정술
  > 물갈퀴 음경
  > 음경과 음낭 사이에 물갈퀴처럼 생긴 조직이 존재하여 음경을 작게 보이는 경우
  > 교정술 : 밖으로 나가지 못하게 잡아당기는 조직을 박리 느슨하게 해 주어서 음경이 밖으로 정상적으로 돌출할 수 있도록 한다.
  > 매몰음경
  > 아랫배의 과다한 지방축적으로 인하여 음경이 작게 보이는 경우
  > 교정술 :음경자체를 감싸고 있는 주변 지방조직을 적절하게 정상으로 만들어 주고 다시 들어가지 못하게 정상적인 위치에서 고정하는 술식을 적용한다.
  > 구치음경
  > 치골부의 외상(포경수술시 음경피부를 과도하게 절개한 경우)으로 외상이 아물면서 생긴 흉터가 딱딱하게 되어 음경을 가두어 버린 경우
  > 교정술 :모자라는 피부조직을 이식수술 해 줌으로써 음경이 정상적으로 앞으로 돌출 되게 만들어 주는 수술방법을 적용한다.
  > 마이크로 페니스
  > 내분비계의 이상 등으로 같은 연령의 평균 음경길이 +2배의 표준편차보다 작은 음경
  > 5. 위축음경
  > 타 생식기의 기형으로 인한 경우

#### [정관수술 > 정관수술 개요] `clinic_05/c5_0101.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_05/c5_0101.html`
- **삽입 이미지 (9건):**
  - `[img]` `img/contxt_0101.png` → `http://www.manclinic.com/@2018/clinic_05/img/contxt_0101.png`
  - `[img]` `img/contxt_0102.png` → `http://www.manclinic.com/@2018/clinic_05/img/contxt_0102.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_05/img/sub_topimg.jpg`
  - `[bg]` `../img/common/num_bl_01.png` → `http://www.manclinic.com/@2018/img/common/num_bl_01.png`
  - `[bg]` `../img/common/num_bl_02.png` → `http://www.manclinic.com/@2018/img/common/num_bl_02.png`
  - `[bg]` `../img/common/num_bl_03.png` → `http://www.manclinic.com/@2018/img/common/num_bl_03.png`
  - `[bg]` `../img/common/num_bl_04.png` → `http://www.manclinic.com/@2018/img/common/num_bl_04.png`
  - `[bg]` `../img/common/num_bl_05.png` → `http://www.manclinic.com/@2018/img/common/num_bl_05.png`
  - `[bg]` `../img/common/num_bl_06.png` → `http://www.manclinic.com/@2018/img/common/num_bl_06.png`
- **본문 텍스트 (596자):**
  > 정관수술
  > GANGNAM J ANDROLOGY CLINIC
  > 무도정관수술
  > 미세정관복원수술
  > 정관절제술
  > 정관절제술이란
  > 정관절제술은 정자의 통로인 정관을 막아 고환에서 계속 만들어지는 정자가 몸 밖으로 못나오게 하는 수술입니다.
  > 이 정관절제술은 정확하게는 양측성 부분적 정관절단술이라고 하는 것이 옳겠습니다. 주로 사회학적면으로는 남성불임술 이라고 합니다.
  > 그러나 일부에서는 불임술 이라는 어감이 너무 심각하다고 하여 기피하는 경향도 없지 않습니다.
  > 외국에서는 수술피임법이라고 하는데도 있습니다. 따라서 정관절제술과 남성불임술은 같은 뜻이 됩니다.
  > 정관절제 수술 전 후
  > 정관절제술의 목적
  > 정관절제술 즉, vasectomy 는 잘못된 명칭으로
  > 실제로는 정자의 통로인 정관을 수술로 차단시켜 임신을 막거나, 세균이 요도로부터 역행성으로 감염되는 부고환염을 일으키는 것을 예방하는 것입니다.
  > 좋지 못한 유전적 소인을 방지
  > 전립선수술 후의 부고환염 예방
  > 임신으로 인해 산모의 건강이 위태로울 때
  > 다산으로 인해 경제적인 고통이 심할 때
  > 부부간의 임신이 공포로 성생활이 원만히 이루어지지 못할 때
  > 인구증가억제를 위한 가족계획 등의 목적으로 시행되거나 최근에는 가족계획을 위한 피임 목적

#### [정관수술 > 무도정관수술] `clinic_05/c5_0201.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_05/c5_0201.html`
- **삽입 이미지 (2건):**
  - `[img]` `img/contxt_0201.png` → `http://www.manclinic.com/@2018/clinic_05/img/contxt_0201.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_05/img/sub_topimg.jpg`
- **본문 텍스트 (772자):**
  > 정관수술
  > GANGNAM J ANDROLOGY CLINIC
  > 무도정관수술
  > 미세정관복원수술
  > 무도정관수술
  > 무도정관수술
  > 음낭을 칼로 절개하는 대신에 부분 마취하에 특수한 기구로 2mm정도의 작은 구멍을 내고 정관을 차단하는 방법이며
  > 수술 후 수술부위의 작은 상처는 봉합할 필요가 없기 때문에 나중에 실밥을 푸는 그런 번거로움 또한 전혀 없습니다.
  > 수술은 약 5분정도 소요됩니다.
  > 이 수술법은 시간절약과 부작용을 최소화 하고 수술 후 곧 일상생활이 가능하며 봉합을 하지 않으므로 실밥을 푸는 번거로움이 없습니다.
  > 수술 후 일주일 정도면 다시 성생활을 하실 수 있는데, 체내에 남아 있는 정자가 모두 방출 될 때까지는 성관계시 약 20회 정도는 피임을 하셔야 됩니다.
  > 그리고 2달 후에 2회 이상 정액검사를 통해 수술의 결과를 확인하시면 됩니다.
  > 수술 후 정력감퇴나 정액량의 감소를 염려 하지만 걱정 하실 필요는 없습니다.
  > 발기기능은 음경해면체의 영향을 받으므로 정관은 영향을 주지 않습니다.
  > 정액은 거의가 정낭및 전립선의 분비액이고 전체 정액 중 정자의 양은 약 1%정도 이므로 정액량의 감소는 우려하지 않아도 됩니다.
  > 정관수술 후 남성호르몬은 고환에서 정상적으로 생산, 흡수되므로 성기능에는 전혀 영향을 미치지 않습니다.
  > 고식적인 정관절제술 VS 강남J비뇨기과 무도정관절제술
  > 구분
  > 고식적인 정관절제술
  > 강남J비뇨기과 무도정관절제술
  > 수술시간
  > 10~15분
  > 5분
  > 수술동통
  > 약간 있음
  > 거의 없음
  > 수술 후 내원
  > 반드시 내원
  > 내원할 필요 없음
  > 합병가능성
  > 높음
  > 매우 낮음
  > VIDEO GALLERY 더보기

#### [정관수술 > 미세정관복원수술] `clinic_05/c5_0301.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_05/c5_0301.html`
- **삽입 이미지 (5건):**
  - `[img]` `img/contxt_0301.png` → `http://www.manclinic.com/@2018/clinic_05/img/contxt_0301.png`
  - `[img]` `img/contxt_0302.png` → `http://www.manclinic.com/@2018/clinic_05/img/contxt_0302.png`
  - `[img]` `img/contxt_0303.png` → `http://www.manclinic.com/@2018/clinic_05/img/contxt_0303.png`
  - `[img]` `img/contxt_0304.png` → `http://www.manclinic.com/@2018/clinic_05/img/contxt_0304.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_05/img/sub_topimg.jpg`
- **본문 텍스트 (1767자):**
  > 정관수술
  > GANGNAM J ANDROLOGY CLINIC
  > 무도정관수술
  > 미세정관복원수술
  > 미세정관복원수술
  > 미세정관복원수술이란?
  > 정관 복원술이란 정관수술이나 다른 여러가지 요인으로 인하여 막힌 정관을 다시 연결하여 임신을 할 수 있도록 하는 수술입니다.
  > 근래에는 경제 사정의 호전으로 아기를 더 낳기를 원하는 가정이 늘고 사회적으로도 이혼율과 재혼율이 증가 하므로 정관 복원술의 수술 빈도는 점차 늘고 있는 추세입니다.
  > 머리카락 보다 더 가는 실로 끊어진 정관을 연결 시키므로 정교한 술기가 필요한 현미경적 수술이 중요하며 정관 수술후 모두가 임신이 가능한 것은 아니고
  > 정관수술 후 10년 이내 인 경우의 개통율은 90%이상이고, 실제 임신율은 여러 가지 원인(특히, 아내의 수임력, 항정자항체의발생)으로 60%~70%이상 보고되고 있습니다.
  > 수술방법에는 절단된 양쪽 정관을 한층으로 결합하는 단층 문합술과 안쪽의 점막과 바깥쪽의 근육층을 이어주는 이층문합 수술이 있습니다.
  > 정관 수술에서 중요한 점은 양쪽 절단된 정관의 점막을 세밀하고 정확하게 연결하고 문합부위에 잡아 당기는 힘이 미쳐서는 안됩니다.
  > 단층 문합술은 수술 시간이 적게 걸리고 비교적 간단하게 수술할 수 있지만 점막간의 정확한 연결이 어려워 연결 부위로 정액이 새어 협착을 일으키는 단점이 있습니다.
  > 이층문합 수술은 수술 시간이 더 걸리고 점막을 정확하게 연결할 수 있으며 점막의 문합 부위에 힘이 미치지 않는 장점이 있습니다.
  > 수술성공율 및 임신성공률에 영향을 미치는 인자로서 가장 중요한 요소가
  > 미세수술술기이므로 미세술기를 적용하는 비뇨기과 전문의에게 수술을 맡기는 것이 중요합니다.
  > 정관수술부위를 찾아서, 닫혀져 있었던 정관을 열었을 때 정액을 채취하여 채취한 정액속에 정자가 있는 경우에 있어서 수술 성공률이 더 높습니다.
  > 미세정관복원수술 수술 전/후 관리
  > 수술 전에는 혈액 검사,심전도 검사, 흉부방사선 촬영을 하여 몸의 이상 유무를 확인 합니다.
  > 수술 전날에 음낭부위를 면도하고 금식을 합니다. 마취는 편안하고 동통이 없는 국소 신경마취의 일종인 정색신경마취으로
  > 음낭 부위를 수술 하므로 수술 자국은 거의 남지 않으며 수술시간은 약 한 시간 반정도 소요 됩니다.
  > 수술 후는 일상생활은 가능하나 약 2주 동안 격한 운동을 하지말고 2~3일 간은 고환을 고정시켜 주는 것이 좋으며
  > 목욕은 5일 후부터 가능하며 부부 관계는 정액검사를 통해 정자를 확인한 후 약4주 후부터 하시는 것이 좋습니다.
  > 미세정관복원수술 성공률
  > 정관 복원술은 정관수술 후 7 년 까지는 성공률이 높으나 7년 ~ 10년이 지나면서부터 성공률이 저하 되므로
  > 정관 복원술을 결정 했다면 가능하면 빨리 하시는 것이 유리합니다. 하지만, 본원에서는 13년 된 분도 성공해서 임신까지 했습니다.
  > 정관복원수술의 대상은 남성의 피임을 목적으로 정관절제술의 시행한 환자에서 정로의 복원을 원하여 시행하는 경우가 대부분이고
  > 드물지만 서혜부탈창 수술. 서혜부열상 등 손상된 정관의 복원을 하기 위해 시행하게 됩니다.
  > 문합술기의 발달로 해보학적 개통율은 90% 달하지만 임신율이 40~70% 정도에 그치고 있습니다.
  > 이러한 성공률의 차이는 정관의 협착, 부고환기능의 저하, 항정자항체, 배우자의 이상 등이 원인이 되는 것으로 알려지고 있습니다.
  > 그러나 임신율을 저하시키는 현상은 완전히 규명되어 있지 않습니다.
  > 즉 정관폐쇄로 인한 국소적 또는 정신적 신체의 생리적 변화 문합술 후에도 완전히 회복되지 않는다는 것을 뜻하는 것입니다.
  > 이중에서 성공률에 영향을 미치는 요소 중 가장 중요한 것은 수술술기입니다.
  > VIDEO GALLERY 더보기

#### [포경수술 > 레이저포경수술] `clinic_07/c7_0101.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_07/c7_0101.html`
- **삽입 이미지 (2건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_07/img/sub_topimg.jpg`
  - `[bg]` `img/contxt_0101_bg.jpg` → `http://www.manclinic.com/@2018/clinic_07/img/contxt_0101_bg.jpg`
- **본문 텍스트 (1638자):**
  > 포경수술
  > GANGNAM J ANDROLOGY CLINIC
  > 레이저 포경수술
  > 포경수술이란
  > 포경수술의 시작은 신생아 때 종교적 의식으로 할례(포경수술)를 하는 유대인들로부터 시작된 것으로 알려져 있으며,
  > 서구 여러 나라에서도 포경이 오래 지속되면 성기가 불결하고, 성병이나 염증에 걸리기 쉽고 더 나아가 음경암에 걸릴 확률이 더 높습니다.
  > 하여 출생직후 수술을 해주었습니다. 그러나 요즘은 과학적 근거가 없고 신생아에게 정신적 및 신체적 피해를 주며
  > 음경기형을 가지고 태어난 신생아에서 후에 기형교정수술시 필요할지도 모르는 포피를 없애 버리는 큰 실수의 가능성이 있어
  > 신생아 포경수술은 시행하지 않는 추세입니다.
  > 수술 시기
  > 수술 시기에 관하여는 많은 의견이 있습니다.
  > 산부인과에서 신생아에게 포경수술을 시행해 왔으나 새로운 최근의 의학 이론에서는
  > 신생아일지라도 통증을 감지할수 있으므로 아기들의 정서 발달에 피해를 준다고 합니다.
  > 포경수술은 사춘기시절 즉, 11～16세에 하는 것이 일반적입니다.
  > 수술을 하더라도 어느 정도 수술 후의 통증을 참을 수 있는 나이가 적당합니다.
  > 하지만, 자주 염증이 생기며 오물이 포피 사이에 생기는 경우에는 어린 나이라도 반드시 수술하는 것이 좋습니다.
  > 반드시 포경 수술이 필요한 때는 진성포경인 경우인데 이 경우에는 포피가 너무 꽉 조이고 있어서 음경의 발육에 지장을 주기도하고
  > 발기가 어려워 정상적인 성관계에도 장애를 가져오고 소변 보는 것도 곤란하여 때로는 소변이 꺼꾸로 흘러 신장에 문제를 일으키기도 합니다.
  > 자신이 포경 수술의 필요성을 느낄 때 하는 것이 가장 좋습니다.
  > 사춘기를 지난 나이라도 결혼 전에 여성을 위해서나 자신을 위해서라도 하는 것이 좋은데,
  > 위생적으로 이점이 있을 뿐 아니라 음경암을 예방하는데 도움이 되기 때문입니다. 포경수술은 했을 때, 얻을 수 있는 효과는
  > 성기를 청결히 할 수 있고 구지(smegma: 귀두포피내에 하얗게 끼는 것) 의 만성자극을 피할 수 있으며,
  > 포피내의 병원균 번식으로 오는 귀두포피염, 귀두포피의 유착, 상행성 요로감염 및 음경암의 발생을 예방할 수 있습니다.
  > 수술방법
  > 윤절법
  > 레이저 수술
  > 특수성형 수술
  > 비뇨기과에서 가장 흔한 수술로 10분에서 20분 수술 후 거의 동통 없어서,
  > 수술후 일상생활 하는데 지장은 없으며 녹는실 또는 제거 하는 실을 사용하며 5일후 정도면 목욕이 가능합니다.
  > 포경 수술에는 여러 가지 방법이 있습니다.
  > 일반적으로 윤절법(환상절제술, 흔히 말아 넣는다고 함)과 레이저를 이용한 수술법, 특수성형 수술법(비만인 학생들에게서 나타나는 음경함몰의 경우 시행)등이 있으나,
  > 이중 통증이 가장 적고, 수술 중 출혈이 극히 적은 레이저 포경수술 방법을 이용하기도 합니다.
  > 환자에 따라 수술 방법이나 정확한 디자인이 필요하며 마취는 한 두 번 주사로 음경피부만을 부분 마취시키는
  > 음경배부신경마취(penile dorsal nerve block)로 10～20분이면 수술이 끝납니다.
  > 수술 후 곧바로 일상 생활이 가능한데, 그 다음날 정도면 바로 축구도 충분히 가능합니다.
  > 봉합실은 녹는 실을 사용하고 약 5일 후부터 샤워와 목욕이 가능합니다.
  > 합병증은 거의 없으나 있더라도 경미한 출혈, 염증, 상처가 벌어지는 정도의 경한 편이며
  > 비뇨기과 전문의사에게 수술을 받으면 합병증을 최소화시킬 수 있고 기타 기형 등을 감별할 수 있습니다.

#### [상담/예약 > Meet the expert (수술상담)] `02_coun/qna.html`
- **URL:** `http://www.manclinic.com/@2018/02_coun/qna.html`
- **삽입 이미지 (1건):**
  - `[bg]` `img/sub_topimg2.jpg` → `http://www.manclinic.com/@2018/02_coun/img/sub_topimg2.jpg`
- **본문 텍스트 (805자):**
  > 상담/예약
  > GANGNAM J ANDROLOGY CLINIC
  > Meet the expert (수술상담)
  > 온라인예약
  > Meet the expert (수술상담)
  > 상담리스트
  > NO
  > 제목
  > 날짜
  > 답변
  > 373 | Geometrty 음경만곡증/ 하향성선천적 하향성 음경만곡증 수술비용 문의 | 2026.11.19 | 대기
  > 372 | 무도 정관수술 / 미세 정관복원수술/2mm single puncture복원수술 | 2026.11.16 | 대기
  > 371 | 근본적 음낭수종/음낭수종절제술 문의 | 2026.10.08 | 대기
  > 370 | Geometrty 음경만곡증/ 하향성음경만곡증 진피이식수술 | 2026.10.01 | 대기
  > 369 | DTC 이물질제거/ 음경확대술 후 복원 상담 | 2026.09.18 | 대기
  > 368 | DTC 이물질제거/라이펜 제거 문의 | 2026.09.07 | 대기
  > 367 | 특수 포경수술/포피복원 | 2026.08.24 | 대기
  > 366 | J's Combi Operation (한번의 마취, 두 가지 이상의 수술)/ 이물질제거매독인가 피지낭종인가 모낭염인가 모르겠습니다(이 물질제거 상담으로 가야하나요) | 2026.08.21 | 대기
  > 365 | 특수 포경수술/Sleeve technique포경수술 문의드립니다 | 2026.08.19 | 대기
  > 364 | 무도 정관수술 / 미세 정관복원수술/2mm single puncture정관수술및 다른수술문의요 | 2026.08.18 | 대기
  > 상담하기
  > 제목
  > 내용
  > 작성자
  > .  1  .  2  .  3  .  4  .  5  .  6  .  7  .  8  .  9  .  10  .  >  >>

#### [상담/예약 > 공개상담 (구 온라인상담)] `02_coun/qna1.html`
- **URL:** `http://www.manclinic.com/@2018/02_coun/qna1.html`
- **삽입 이미지 (1건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/02_coun/img/sub_topimg.jpg`
- **본문 텍스트 (675자):**
  > 상담/예약
  > GANGNAM J ANDROLOGY CLINIC
  > Meet the expert (수술상담)
  > 온라인예약
  > 공개상담
  > 상담리스트
  > NO
  > 분류
  > 제목
  > 날짜
  > 조회수
  > 답변
  > 24179 | 발기부전 | 팽창형임프란트 시술비용 문의 | 2020.10.19 | 4336 | 답변
  > 24178 | 성기능 | 음경만곡증 | 2020.08.31 | 2487 | 답변
  > 24177 | 발기부전 | 팽창형임플란트 수술비용 | 2020.08.19 | 2138 | 답변
  > 24176 | 일반상담 | 음경만곡증 | 2020.08.06 | 2383 | 답변
  > 24175 | 전립선 | 전립선비대증 수술 | 2020.07.30 | 1685 | 답변
  > 24174 | 일반상담 | 세조각 팽창형 음경임플란트가 궁금합.. | 2020.07.27 | 1684 | 답변
  > 24173 | 발기부전 | 팽창형 임플란트 | 2020.03.08 | 2126 | 답변
  > 24172 | 전립선 | 전립선비대증 | 2020.03.06 | 1892 | 답변
  > 24171 | 일반상담 | 포경수술문의 | 2020.03.06 | 5844 | 답변
  > 24170 | 일반상담 | 팽창형임플 | 2020.03.05 | 1269 | 답변
  > 상담하기
  > 제목
  > 내용
  > 작성자
  > .  1  .  2  .  3  .  4  .  5  .  6  .  7  .  8  .  9  .  10  .  >  >>

#### [상담/예약 > 온라인예약] `02_coun/rev.html`
- **URL:** `http://www.manclinic.com/@2018/02_coun/rev.html`
- **삽입 이미지 (1건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/02_coun/img/sub_topimg.jpg`
- **본문 텍스트 (4133자):**
  > 상담/예약
  > GANGNAM J ANDROLOGY CLINIC
  > Meet the expert (수술상담)
  > 온라인예약
  > 온라인예약
  > 예약상황조회
  > 회원일 경우 로그인 후 확인 해 주세요. 로그인
  > 비회원 예약조회
  > 이름
  > 이메일
  > 확인
  > 이름
  > 생년월일
  > 이메일
  > 전화번호
  > -
  > -
  > 핸드폰
  > -
  > -
  > 예약일자
  > 시간선택
  > 오전 9시
  > 오전 10시
  > 오전 11시
  > 정오
  > 오후 1시
  > 오후 2시
  > 오후 3시
  > 오후 4시
  > 오후 5시
  > 오후 6시
  > 오후 7시
  > - 예약상담을 원하시는 날짜와 시간을 정확히 입력해 주셔야 합니다.
  > 제목
  > 내용
  > 개인정보취급방침
  > 개인정보취급방침
  > 강남J비뇨기과 (이하 '병원')이 취급하는 모든 개인정보는 관련법령에 근거하거나 정보주체의 동의에 의하여 수집ㆍ보유 및 처리되고 있습니다.
  > ■ 개인정보 수집에 대한 동의
  > 병원은 귀하께 회원가입시 개인정보보호방침 또는 이용약관의 내용을 공지 하며 회원가입버튼을 클릭하면 개인정보 수집에 대해 동의하신 것으로 봅니다.
  > ■ 개인정보의 수집목적 및 이용목적
  > 병원은 다음과 같은 목적을 위하여 개인정보를 수집하고 있습니다.
  > - 병원 및 제휴사이트 서비스를 위한 회원 가입 및 이용아이디 발급
  > - 서비스의 이행 (경품 등 우편물 배송 및 예약에 관한 사항)
  > - 장애처리 및 개별 회원에 대한 개인 맞춤서비스
  > - 서비스 이용에 대한 통계 수집
  > - 기타 새로운 서비스 및 정보 안내
  > 단, 이용자의 기본적 인권 침해의 우려가 있는 민감한 개인정보는 수집하지 않습니다.
  > 병원은 상기 범위내에서 보다 풍부한 서비스를 제공하기 위해 이용자의 자의에 의한 추가 정보를 수집합니다.
  > ■ 수집하는 개인정보 항목
  > 병원은 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
  > - 수집항목 : 이름 , 생년월일 , 성별 , 로그인ID , 비밀번호 , 자택 전화번호 , 자택 주소 , 휴대전화번호 , 이메일 , 주민등록번호 , 서비스 이용기록 , 접속 로그 , 쿠키 , 접속 IP 정보
  > - 개인정보 수집방법 : 홈페이지(회원가입, 게시판)
  > ■ 쿠키에 의한 개인정보 수집
  > 병원은 귀하에 대한 정보를 저장하고 수시로 찾아내는 '쿠키(cookie)'를 사용합니다. 쿠키는 웹사이트가 귀하의 컴퓨터 브라우저(넷스케이프, 인터넷 익스플로러 등)로 전송하는 소량의 정보입니다. 귀하께서 웹사이트에 접속을 하면 병원 웹서버는 귀하의 브라우저에 있는 쿠키의 내용을 읽고, 귀하의 추가정보를 귀하의 컴퓨터에서 찾아 접속에 따른 아이디등의 추가 입력 없이 서비스를 제공할 수 있습니다. 쿠키는 귀하의 컴퓨터는 식별하지만 귀하를 개인적으로 식별하지는 않습니다.
  > 또한 귀하는 쿠키에 대한 선택권이 있습니다. 웹브라우저의 옵션을 조정함으로써 모든 쿠키를 다 받아들이거나, 쿠키가 설치될 때 통지를 보내도록 하거나, 아니면 모든 쿠키를 거부할 수 있는 선택권을 가질 수 있습니다.
  > ▶ 쿠키 등 사용 목적
  > - 회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공
  > 귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.
  > ▶ 쿠키 설정 거부 방법
  > 예: 쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
  > 설정방법 예(인터넷 익스플로어의 경우)
  > : 웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보
  > 단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.
  > ■ 개인정보의 제3자에 대한 제공
  > 병원은 귀하의 개인정보를 (개인정보의 수집목적 및 이용목적)에서 고지한 범위내에서 사용하며, 동 범위를 초과하여 이용하거나 타인 또는 타기업·기관에 제공하지 않습니다.
  > 그러나 보다 나은 서비스 제공을 위하여 귀하가 회원가입 시 동의를 한 경우, 귀하의 개인정보를 제휴사에 제공하거나 또는 제휴사와 공유할 수 있습니다.
  > ■ 개인정보의 열람·정정
  > 귀하는 언제든지 등록되어 있는 귀하의 개인정보를 열람하거나 정정하실 수 있습니다. 개인정보 열람 및 정정을 하고자 할 경우에는 (회원정보수정)을 클릭하여 직접 열람 또는 정정하거나, 개인정보관리책임자에게 E-mail로 연락하시면 조치하여 드립니다.
  > 귀하가 개인정보의 오류에 대한 정정을 요청한 경우, 정정을 완료하기 전까지 당해 개인정보를 이용하지 않습니다.
  > ■ 개인정보의 보유기간 및 이용기간
  > 귀하의 개인정보는 다음과 같이 개인정보의 수집목적 또는 제공받은 목적이 달성되면 파기됩니다.
  > - 회원 가입정보의 경우, 회원 가입을 탈퇴하거나 회원에서 제명된 때
  > ■ 개인정보보호를 위한 기술적 대책
  > 병원은 귀하의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적 대책을 강구하고 있습니다.
  > 귀하의 개인정보는 비밀번호에 의해 보호되며, 파일 및 전송 데이터를 암호화하거나 파일 잠금기능(Lock)을 사용하여 중요한 데이터는 별도의 보안기능을 통해 보호되고 있습니다.
  > 병원은 회원인증과 관련 암호알고리즘을 이용하여 네트워크 상의 개인정보를 안전하게 전송할 수 있는 인증 및 보안장치를 채택하고 있으며 시스템상 사정에 의해 미시행시 도우미에 의한 의사 확인을 시행하고 있습니다.
  > 해킹 등에 의해 귀하의 개인정보가 유출되는 것을 방지하기 위해, 외부로부터의 침입을 차단하는 장치를 이용하고 있으며, 각 서버마다 침입탐지시스템을 설치하여 24시간 침입을 감시하고 있습니다.
  > ■ 개인정보 수집, 이용, 제공에 대한 동의철회
  > 회원 가입 등을 통해 개인정보의 수집, 이용, 제공에 대해 귀하께서 동의하신 내용을 귀하는 언제든지 철회 하실 수 있습니다. 동의철회는 웹사이트 및 개인정보관리책임자에게 E-mail등으로 연락하시면 즉시 개인정보의 삭제 등 필요한 조치를 하겠습니다.
  > ■ 개인정보의 파기절차 및 방법
  > 병원는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
  > ▶ 파기절차
  > 회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.
  > 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유 되어지는 이외의 다른 목적으로 이용되지 않습니다.
  > ▶ 파기방법
  > - 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
  > ■ 의견수렴 및 불만처리
  > 병원은 개인정보보호와 관련하여 귀하가 의견과 불만을 제기할 수 있는 창구를 개설하고 있습니다. 개인정보와 관련한 불만이 있으신 분은 병원의 개인정보 관리책임자에게 의견을 주시면 접수 즉시 조치하여 처리결과를 통보해 드립니다.
  > ■ 14세 미만 어린이들에 대한 보호정책
  > 병원은 14세 미만 어린이들에 대한 회원 미가입 정책과 함께 개인정보를 부모의 동의 없이 제3자와 공유하지 않으며 사용자에 관한 정보를 매매하거나 대여하지 않습니다.
  > ■ 개인정보 관리책임자
  > 1). 책임자
  > 가). 소속: 강남J비뇨기과
  > 나). 성명: 박천진
  > 다). 전자우편: tech@eurekanet.co.kr
  > 2). 담당자
  > 가). 소속: 강남J비뇨기과
  > 나). 성명: 박천진
  > 다). 전자우편: tech@eurekanet.co.kr
  > 라). 전화번호: (02)3018-7575
  > 귀하께서는 병원의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 병원는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.
  > 기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
  > 1.개인분쟁조정위원회 (www.1336.or.kr/1336)
  > 2.정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)
  > 3.대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600)
  > 4.경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)
  > 개인정보취급방침에 동의합니다.
  > 예약하기
  > 취소

#### [FAQ > 음경관련 FAQ] `05_faq/faq_01.html`
- **URL:** `http://www.manclinic.com/@2018/05_faq/faq_01.html`
- **삽입 이미지 (1건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/05_faq/img/sub_topimg.jpg`
- **본문 텍스트 (648자):**
  > FAQ
  > GANGNAM J ANDROLOGY CLINIC
  > 음경관련
  > 귀두관련
  > 전립선관련
  > 고환관련
  > 음경관련 FAQ
  > 상담리스트
  > NO
  > 제목
  > 37 | 보형물 수술후 치료기간과 정상적인 부부관계는 언제부터 가능한지요?
  > 그리고 수술 받은 분들이 만족하는지?
  > 36 | 음경 보형물 수술은 어떤 사람이 받는것인지요?
  > 보형물이 어떻게 들어가는지도 궁금합니다.
  > 35 | 음경 보형물이 어떤것인가요? 어떤 원리인지?
  > 34 | 홈페이지에 소개된 글에 의하면 선천적 음경 만곡증인 것 같습니다
  > 성기의 방향은 아래로 3/4 정도 휜 것 같구요
  > 물론 자세한 것은 상담을 받아봐야 알겠지만
  > 대략의 진료 진행 상황과 수술비를 알고 싶습니다
  > 33 | 아래 방향으로 음경의 휘어지는 페이로니 병을 가지고 있습니다. 성행위 도중 충격을 받은 적이 있는데 그 충격이 원인이 되는지 궁금합니다. 그리고 패치 방식으로 교정을 하는 수술이 있다고 보았는데 어떠한 수술 방법인지 궁금합니다.
  > 32 | 항문을 통한 섹스는 괜찮은가?
  > 31 | 오럴 섹스는 안전한가?
  > 30 | 음경왜소증이라는 말이 있는데 어느정도로 작아야 음경왜소증이라고 부르는지 알고싶습니다.
  > 29 | 당뇨가 있으면 발기부전이 오나요?
  > 28 | 음경보형물삽입술을 받으면 성적 쾌감이 전혀 없어지나요? 사정은 어떻게 되지요?
  > 1  2  3  4

#### [FAQ > 귀두관련 FAQ] `05_faq/faq_02.html`
- **URL:** `http://www.manclinic.com/@2018/05_faq/faq_02.html`
- **삽입 이미지 (1건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/05_faq/img/sub_topimg.jpg`
- **본문 텍스트 (1105자):**
  > FAQ
  > GANGNAM J ANDROLOGY CLINIC
  > 음경관련
  > 귀두관련
  > 전립선관련
  > 고환관련
  > 귀두관련 FAQ
  > 상담리스트
  > NO
  > 제목
  > 8 | 귀두확대술에 관심이 많은 30대 중반 남성입니다. 인터넷 홈페이지를 통해 소개되어 있는
  > S.G.A 수술을 보게 되었는데, 기존 수술과 다른 효과가 있는지 궁금합니다.
  > 7 | 초등학생 남자아이를 둔 부모입니다. 아이에게 포경수술을 시켜야 되는데 어느 시기가 가장 적당한지, 꼭 포경수술을 받아야 하는지 알고 싶습니다.
  > 6 | 포경수술은 꼭 해야만 하나요? 시기는 언제 쯤이 좋은가요?
  > 5 | 얼마전부터 성기에 물집이 생기기 시작했습니다. 전에도 생겨서 치료를 받았었는데, 1∼2달 간격으로 계속 나타나고 있어서 고민입니다. 완치는 안되는 겁니까?
  > 4 | 헤르페스 바이러스가 뭐예요?
  > 3 | 안녕하십니까? 5살난 어린아이에 관해 질의드립니다.
  > 아이가 성기 기둥부분이 아프다고 이야기하여 보니, 팬티에 노란 이물질이 조금
  > 묻어있고 기둥부분이 조금 붓어 있는듯합니다. 전부터 조금 아프다가 또 괜찮다
  > 고 합니다. 활동할때는 괜찮다고하는데, 소변을 볼때 아프다고 합니다. 이에 무
  > 슨 질병이 있는지 궁금합니다.
  > 2 | 안녕하세요
  > 30개월 된 남자아이의 아버지입니다.
  > 27개월째 되던 어느 날 아이의 고추가 부어 있는 것 같아 자세히 보니 오줌을 찔찔 싸면서 아프다고 하더니 오줌이 나오지않아 병원 응급실에 가서 하얀 찌꺼기를 억지로(아주 힘들게) 제거하고 약먹고 며칠 병원에 주사 치료하면서 종전처럼 정상적인 소변을 보게 되었습니다.
  > 가끔 고추 끝이 가렵다고 하기도 하고 아프다고 하기도 하는 데 포경수술을(전신마취) 해야 하는지 좀더 커서 해야하는지 아버지로서 걱정입니다.
  > 고추를 가끔 세척(까지지 않는)하는 방법이나 약 같은 혹은 기구 같은 게 있으면
  > 방법을 알려 주세요. 답변 기다립니다.
  > 1 | 오늘 인터넷을 보니 귀두만 확대하는 시술이 있다던데요. 귀두만 할 수 있는 건가요? 제가 보기엔 큰 수술 안하고 확대 할 수 있는 시술로 알고 있습니다만 어떤지요. 생각같아서는 좀더 길고 굵게 하고 싶은게 한국남성들의 소원 아니겠습니까만은 사진을 보니 너무 큰 수술 같아서 저는 귀두만이라도 하고 싶거든요. 답변 좀 부탁합니다. 감사합니다.
  > 1

#### [FAQ > 전립선관련 FAQ] `05_faq/faq_03.html`
- **URL:** `http://www.manclinic.com/@2018/05_faq/faq_03.html`
- **삽입 이미지 (1건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/05_faq/img/sub_topimg.jpg`
- **본문 텍스트 (840자):**
  > FAQ
  > GANGNAM J ANDROLOGY CLINIC
  > 음경관련
  > 귀두관련
  > 전립선관련
  > 고환관련
  > 전립선관련 FAQ
  > 상담리스트
  > NO
  > 제목
  > 8 | 저는 20대 프로그래머 입니다. 앉아서 근무하는 시간이 하루 10시간 이상이고 업무로 인한 스트레스로 매일 피곤해 있습니다. 그런데 얼마전 부터 별일 없이 성기 끝이 따갑고 불쾌한 기분이 하루에 3~4회씩 나타나고 있습니다. 특별한 성관계도 없었는데 이런 증상이 나타나니까 정말 짜증스럽습니다. 원장님 대체 원인이 무엇인가요?
  > 7 | 구강성교만해도 성병이 옮나요?
  > 6 | 직업 여성과 보름전에 성관계를 가졌습니다. 전까지는 괜찮았는데 보름이 지나서 지금은 그리 심하지는 않지만 성기의 전체적으로 약간 가렵군요. 뭐 그리 많이 가려운건 아니고요.. 그 이오의 증상은 없는데 혹시 성병인지? 아니면 그냥 일시적인 현상인지 모르겠네요. 성병이라면 며칠내로 나타나지 않나요? 그런데 시간이 많이 지나서..
  > 5 | 얼마전까지도 일주일에 2∼3 차례는 성관계를 반드시 가질 정도로 정력이 왕성했었습니다. 그런데 술을 먹고 본의 아니게 외도를 하게 됐는데 정액에 피가 섞여 나오고 있어 걱정이 됩니다. 성병입니까? 걱정되어 미치겠습니다.
  > 4 | 스킨 쉽과 키스만으로도 성병에 걸릴 수 있나요?
  > 3 | 입대전 친구들의 성화에 윤락가에 갔다가 병에 걸려서 약국에서 항생제를 먹었더니 따끔따끔한 증상이 없어져 치료된 거라 생각했습니다. 얼마전부터 다시 증상이 생겨서 병원에 가봤더니 만성전립선염 진단이 나왔습니다. 과음이나 과로하면 증상이 더욱 심해집니다. 결혼도 해야 하는데..... 빠른 시간안에 완치할 수는 없습니까?
  > 2 | 비임균성요도염에 대해서 알고싶어요.
  > 1 | 0
  > 1

#### [FAQ > 고환관련 FAQ] `05_faq/faq_04.html`
- **URL:** `http://www.manclinic.com/@2018/05_faq/faq_04.html`
- **삽입 이미지 (1건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/05_faq/img/sub_topimg.jpg`
- **본문 텍스트 (546자):**
  > FAQ
  > GANGNAM J ANDROLOGY CLINIC
  > 음경관련
  > 귀두관련
  > 전립선관련
  > 고환관련
  > 고환관련 FAQ
  > 상담리스트
  > NO
  > 제목
  > 79 | 아버님께 홀렙수술을 권유해 드릴 예정입니다. 3년전 대학병원에서 전립선비대증 수술 시 요도협착이 생겼고, 수술 후에도 전립선크기가 210g 입니다. 홀렙 수술로 치료가 가능한가요? 참고로 74세 이십니다.
  > 78 | 홀뮴레이저는 어떤 치료에 사용이 되나요?
  > 77 | 전립선크기가 90g 이라고 합니다. 홀렙 수술로 치료가 가능한가요?
  > 76 | 홀렙수술을 아버님께서 계획하고 있는데 치료가 효과적인가요?
  > 75
  > 전립선비대증의 수술적치료에는 어떤 것들이 있나요?
  > 74
  > 전립선절제술을 받으면 전립선암검사를 받지 않아도 되나요?
  > 73
  > 수술치료를 받으면 발기력이 많이 떨어지나요?
  > 72
  > 최신 치료법이 최상의 치료인가요?
  > 71
  > 과거에 새로운 치료방법이라고 해서 특정 치료를 받았는데, 다시 재발했거나 효과를 보지 못했다면 치료법이 틀린것이 아닐까요?
  > 70
  > 역사정을 피하려면 어떤 치료를 선택하는 것이 좋을까요?
  > 1  2  3  4  5  6  7  8

#### [회원 > 로그인] `04_member/login.html`
- **URL:** `http://www.manclinic.com/@2018/04_member/login.html`
- **삽입 이미지 (1건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/04_member/img/sub_topimg.jpg`
- **본문 텍스트 (108자):**
  > Member
  > GANGNAM J ANDROLOGY CLINIC
  > 로그인
  > 회원가입
  > 개인정보취급방침
  > 이용약관
  > ID/PW 찾기
  > Memeber
  > LOGIN
  > 아 이 디
  > 비밀번호
  > 로그인
  > 회원가입
  > ID/PW 찾기

#### [회원 > 회원가입] `04_member/join1.html`
- **URL:** `http://www.manclinic.com/@2018/04_member/join1.html`
- **삽입 이미지 (1건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/04_member/img/sub_topimg.jpg`
- **본문 텍스트 (약관/정책 전문 — 총 9023자, 앞부분 발췌):**
  > Member
  > GANGNAM J ANDROLOGY CLINIC
  > 로그인
  > 회원가입
  > 개인정보취급방침
  > 이용약관
  > ID/PW 찾기
  > Memeber
  > 회원가입
  > 개인정보취급방침
  > 개인정보취급방침
  > 강남J비뇨기과 (이하 '병원')이 취급하는 모든 개인정보는 관련법령에 근거하거나 정보주체의 동의에 의하여 수집ㆍ보유 및 처리되고 있습니다.
  > ■ 개인정보 수집에 대한 동의
  > 병원은 귀하께 회원가입시 개인정보보호방침 또는 이용약관의 내용을 공지 하며 회원가입버튼을 클릭하면 개인정보 수집에 대해 동의하신 것으로 봅니다.
  > ■ 개인정보의 수집목적 및 이용목적
  > 병원은 다음과 같은 목적을 위하여 개인정보를 수집하고 있습니다.
  > - 병원 및 제휴사이트 서비스를 위한 회원 가입 및 이용아이디 발급
  > - 서비스의 이행 (경품 등 우편물 배송 및 예약에 관한 사항)
  > - 장애처리 및 개별 회원에 대한 개인 맞춤서비스
  > - 서비스 이용에 대한 통계 수집
  > - 기타 새로운 서비스 및 정보 안내
  > 단, 이용자의 기본적 인권 침해의 우려가 있는 민감한 개인정보는 수집하지 않습니다.
  > 병원은 상기 범위내에서 보다 풍부한 서비스를 제공하기 위해 이용자의 자의에 의한 추가 정보를 수집합니다.
  > ■ 수집하는 개인정보 항목
  > 병원은 회원가입
  > *(... 이하 약관 전문 생략, 원본 HTML 보관)*

#### [푸터 > 개인정보취급방침] `04_member/member_01.html`
- **URL:** `http://www.manclinic.com/@2018/04_member/member_01.html`
- **삽입 이미지 (1건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/04_member/img/sub_topimg.jpg`
- **본문 텍스트 (약관/정책 전문 — 총 3913자, 앞부분 발췌):**
  > Member
  > GANGNAM J ANDROLOGY CLINIC
  > 로그인
  > 회원가입
  > 개인정보취급방침
  > 이용약관
  > ID/PW 찾기
  > Memeber
  > 개인정보취급방침
  > 개인정보취급방침
  > 강남J비뇨기과 (이하 '병원')이 취급하는 모든 개인정보는 관련법령에 근거하거나 정보주체의 동의에 의하여 수집ㆍ보유 및 처리되고 있습니다.
  > ■ 개인정보 수집에 대한 동의
  > 병원은 귀하께 회원가입시 개인정보보호방침 또는 이용약관의 내용을 공지 하며 회원가입버튼을 클릭하면 개인정보 수집에 대해 동의하신 것으로 봅니다.
  > ■ 개인정보의 수집목적 및 이용목적
  > 병원은 다음과 같은 목적을 위하여 개인정보를 수집하고 있습니다.
  > - 병원 및 제휴사이트 서비스를 위한 회원 가입 및 이용아이디 발급
  > - 서비스의 이행 (경품 등 우편물 배송 및 예약에 관한 사항)
  > - 장애처리 및 개별 회원에 대한 개인 맞춤서비스
  > - 서비스 이용에 대한 통계 수집
  > - 기타 새로운 서비스 및 정보 안내
  > 단, 이용자의 기본적 인권 침해의 우려가 있는 민감한 개인정보는 수집하지 않습니다.
  > 병원은 상기 범위내에서 보다 풍부한 서비스를 제공하기 위해 이용자의 자의에 의한 추가 정보를 수집합니다.
  > ■ 수집하는 개인정보 항목
  > 병원은 회원가입, 상담,
  > *(... 이하 약관 전문 생략, 원본 HTML 보관)*

#### [푸터 > 이용약관] `04_member/member_02.html`
- **URL:** `http://www.manclinic.com/@2018/04_member/member_02.html`
- **삽입 이미지 (1건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/04_member/img/sub_topimg.jpg`
- **본문 텍스트 (약관/정책 전문 — 총 5145자, 앞부분 발췌):**
  > Member
  > GANGNAM J ANDROLOGY CLINIC
  > 로그인
  > 회원가입
  > 개인정보취급방침
  > 이용약관
  > ID/PW 찾기
  > Memeber
  > 이용약관
  > 강남제이 비뇨기과 이용 약관
  > 제1장 총칙
  > [제1조 목적]
  > 이 약관은 강남제이 비뇨기과(이하 '회사')이 제공하는 서비스 이용조건 및 절차에 관한 사항과 기타 필요한 사항을 전기통신사업법 및 동법 시행령이 정하는 대로 준수하고 규정함을 목적으로 합니다.
  > [제2조 약관의 효력과 변경]
  > (1) 이 약관은 이용자에게 공시함으로서 효력이 발생합니다.
  > (2) 회사는 사정 변경의 경우와 영업상 중요 사유가 있을 때 약관을 변경할 수 있으며, 변경된 약관은 전항과 같은 방법으로 효력이 발생합니다.
  > [제3조 약관 외 준칙]
  > 이 약관에 명시되지 않은 사항이 관계 법령에 규정되어 있을 경우에는 그 규정에 따릅니다.
  > 제2장 회원 가입과 서비스 이용
  > [제1조 회원의 정의]
  > 회원이란 회사가 회원으로 적합하다고 인정하는 일반 개인으로 본 약관에 동의하고 서비스의 회원 가입양식을 작성하고 'ID'와 '비밀번호'를 발급 받은 사람을 말합니다.
  > [제2조 서비스 가입의 성립]
  > (1) 서비스 가입은 이용자의 이용 신청에 대한 회사의 이용 승낙과 이용자의 
  > *(... 이하 약관 전문 생략, 원본 HTML 보관)*

#### [병원소개 > (숨은/추가 발견) hp_03.html] `01_hp/hp_03.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/hp_03.html`
- **삽입 이미지 (13건):**
  - `[img]` `../../upload/masscom_UP1405937464.jpg` → `http://www.manclinic.com/upload/masscom_UP1405937464.jpg`
  - `[img]` `../../upload/masscom_UP1372973852.jpg` → `http://www.manclinic.com/upload/masscom_UP1372973852.jpg`
  - `[img]` `../../upload/masscom_UP1065788195.jpg` → `http://www.manclinic.com/upload/masscom_UP1065788195.jpg`
  - `[img]` `../../upload/masscom_UP1219835252.jpg` → `http://www.manclinic.com/upload/masscom_UP1219835252.jpg`
  - `[img]` `../../upload/masscom_UP1023316243.jpg` → `http://www.manclinic.com/upload/masscom_UP1023316243.jpg`
  - `[img]` `../../upload/masscom_UP1201603374.jpg` → `http://www.manclinic.com/upload/masscom_UP1201603374.jpg`
  - `[img]` `../../upload/masscom_UP1255001047.jpg` → `http://www.manclinic.com/upload/masscom_UP1255001047.jpg`
  - `[img]` `../../upload/masscom_UP1390204537.jpg` → `http://www.manclinic.com/upload/masscom_UP1390204537.jpg`
  - `[img]` `../../upload/masscom_UP1181204351.jpg` → `http://www.manclinic.com/upload/masscom_UP1181204351.jpg`
  - `[img]` `../../upload/masscom_UP1076062938.jpg` → `http://www.manclinic.com/upload/masscom_UP1076062938.jpg`
  - `[img]` `http://www.manclinic.com/upload/masscom2_UP1164322410.jpg` → `http://www.manclinic.com/upload/masscom2_UP1164322410.jpg`
  - `[img]` `http://www.manclinic.com/upload/masscom_UP1365301840.jpg` → `http://www.manclinic.com/upload/masscom_UP1365301840.jpg` | alt: "첨부파일"
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg`
- **본문 텍스트 (761자):**
  > 강남J비뇨기과 소개
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내
  > 인증서
  > 리스트
  > 연세대학교 동문회 이사 위촉장
  > 출처 : 연세대학교 동문회
  > 날짜 : 2009-01-14 15:17:19
  > 대한미용성형학회 참가 인증서
  > 출처 : 대한미용성형학회
  > 날짜 : 2008-10-08 14:48:40
  > 대한 비만체형학회 회원 인증서
  > 출처 : 강남 J
  > 날짜 : 2008-08-19 13:48:28
  > Korean Academy of Aesthetic Medicine Membership
  > 출처 : 강남 J
  > 날짜 : 2008-08-19 13:45:14
  > Union Internationale de Medecine Esthetique member
  > 출처 : 강남 J
  > 날짜 : 2008-06-25 13:24:00
  > 2007 AUA CME Credits and Certificates
  > 출처 : 강남 J
  > 날짜 : 2007-05-20 13:05:16
  > AUA 2007 미국 비뇨기학회 참가
  > 출처 : 강남 J
  > 날짜 : 2007-05-20 13:04:11
  > AGENDA for 2007 대한전립선학회 정기 학술대회 및 총회
  > 출처 : 강남 J
  > 날짜 : 2007-03-03 13:02:41
  > 춘계학술대회 심포지엄 강사 위촉
  > 출처 : 강남 J
  > 날짜 : 2007-03-03 13:00:34
  > AUA 2007 증명서
  > 출처 : 강남 J
  > 날짜 : 2007-05-19 12:41:21
  > 1  2  3  4

#### [병원소개 > (숨은/추가 발견) hp_06.html] `01_hp/hp_06.html`
- **URL:** `http://www.manclinic.com/@2018/01_hp/hp_06.html`
- **삽입 이미지 (1건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg`
- **본문 텍스트 (126자):**
  > 강남J(제이)비뇨의학과 소개
  > GANGNAM J ANDROLOGY CLINIC
  > 의료진 소개
  > 진료안내
  > 병원 둘러보기
  > 교육자 박천진
  > 언론보도자료
  > 대외활동
  > VIDEO GALLERY
  > 찾아오시는 길
  > 비급여비용안내
  > TV방송보기
  > TV방송보기

#### [성기능장애 > 조루증 원인 진단 (서브탭 발견)] `clinic_06/c6_0201.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_06/c6_0201.html`
- **삽입 이미지 (1건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_06/img/sub_topimg.jpg`
- **본문 텍스트 (746자):**
  > 성기능장애
  > GANGNAM J ANDROLOGY CLINIC
  > 조루증이란
  > 조루증 원인/진단
  > 조루증의 치료
  > 발기부전
  > 성기능검사
  > 발기부전치료
  > 조루증 원인/진단
  > 조루증 원인
  > 정신분석학적
  > 기우성이나 열등감이 강한 사람
  > 근심, 걱정, 불안, 공포, 성적충동이 죄의식 상태하에서 나왔을 때 자기 성기가 왜소하다고 생각하는 사람
  > 최초 성교가 불완전하게 이루어졌을 때
  > (초기의 성경험, 임신공포로 인한 질외사정)
  > 비뇨기과학적
  > 요도나 귀두의 지각과민, 음경, 요도전립선, 정낭, 요도괄약근, 방광, 방광삼각부 등에 병이 있을 때
  > 기타
  > 신경전도피로 지나친 성적자극으로 중추신경계 피로
  > (빈번한 자위행위, 열렬한 애무와 포옹, 키스)
  > 내분비적 원인-생식선 기능의 항진→지각신경과민
  > 국소적 사정반사가 예민한 경우-국소가 예민해져 뇌에서 조절을 하기 전에 사정을 해버리는 것
  > 조루증의 객관적 진단법
  > 성기능에 대한
  > 자가접근법
  > 행동학적 접근법
  > 정신학적 접근법
  > 내과적 검사
  > 진단법에는 자각적 진단과 객관적 진단법이 있으며
  > 객관적 진단에는 성기능에 대한 자가접근법, 행동학적 접근법, 정신학적 접근법, 내과적 검사등이 있으며
  > 내과적 검사에는 요로생식계 증상, 전반적 혹은 국소적 신경질환의 증상, 이전의 수술 및 외상병력, 약물복용, 이전 치료의 결과 등에 문진 및 신체검진,
  > 이외에 Biothesiometry(감각신경 진동각 검사), Sensory evoked potential sympathetic skin potential 검사 등이 많은 진단에 도움이 됩니다.

#### [성기능장애 > 조루증의 치료 (서브탭 발견)] `clinic_06/c6_0301.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_06/c6_0301.html`
- **삽입 이미지 (9건):**
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_06/img/sub_topimg.jpg`
  - `[bg]` `img/contxt_0301.png` → `http://www.manclinic.com/@2018/clinic_06/img/contxt_0301.png`
  - `[bg]` `img/contxt_0302.png` → `http://www.manclinic.com/@2018/clinic_06/img/contxt_0302.png`
  - `[bg]` `img/contxt_0303.png` → `http://www.manclinic.com/@2018/clinic_06/img/contxt_0303.png`
  - `[bg]` `img/contxt_0304.png` → `http://www.manclinic.com/@2018/clinic_06/img/contxt_0304.png`
  - `[bg]` `img/contxt_0305.png` → `http://www.manclinic.com/@2018/clinic_06/img/contxt_0305.png`
  - `[bg]` `img/contxt_0306.png` → `http://www.manclinic.com/@2018/clinic_06/img/contxt_0306.png`
  - `[bg]` `img/contxt_0307.png` → `http://www.manclinic.com/@2018/clinic_06/img/contxt_0307.png`
  - `[bg]` `img/contxt_0308.png` → `http://www.manclinic.com/@2018/clinic_06/img/contxt_0308.png`
- **본문 텍스트 (74자):**
  > 성기능장애
  > GANGNAM J ANDROLOGY CLINIC
  > 조루증이란
  > 조루증 원인/진단
  > 조루증의 치료
  > 발기부전
  > 성기능검사
  > 발기부전치료

#### [요로결석 > 요로결석 치료 (추가 하위 페이지 1)] `clinic_08/c8_030101.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_08/c8_030101.html`
- **삽입 이미지 (9건):**
  - `[img]` `img/contxt_0301.png` → `http://www.manclinic.com/@2018/clinic_08/img/contxt_0301.png`
  - `[img]` `img/contxt_0312.png` → `http://www.manclinic.com/@2018/clinic_08/img/contxt_0312.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_08/img/sub_topimg.jpg`
  - `[bg]` `../img/common/point_circle3.png` → `http://www.manclinic.com/@2018/img/common/point_circle3.png`
  - `[bg]` `../img/common/num_bl_01.png` → `http://www.manclinic.com/@2018/img/common/num_bl_01.png`
  - `[bg]` `../img/common/num_bl_02.png` → `http://www.manclinic.com/@2018/img/common/num_bl_02.png`
  - `[bg]` `../img/common/num_bl_03.png` → `http://www.manclinic.com/@2018/img/common/num_bl_03.png`
  - `[bg]` `../img/common/num_bl_04.png` → `http://www.manclinic.com/@2018/img/common/num_bl_04.png`
  - `[bg]` `../img/common/num_bl_05.png` → `http://www.manclinic.com/@2018/img/common/num_bl_05.png`
- **본문 텍스트 (997자):**
  > 요로결석
  > GANGNAM J ANDROLOGY CLINIC
  > 요로결석 원인 증상
  > 요로결석 진단
  > 요로결석 치료
  > 요로결석 치료
  > 체외충격파쇄석술(ESWL)
  > 결석의 위치가 상부요관이거나 지름이 4mm 이상인 경우에는 자연배출이 어렵기때문에
  > 고에너지 충격파를 몸 밖에서 쏘아 결석을 가루로 부수어 소변으로 자연배출 시키는 체외충격파쇄석술로 치료합니다.
  > 요로결석 치료장비
  > ESWL (체외충격파쇄석술)
  > URS/RIRS (내시경적결석제거술)
  > 항목
  > ESWL(체외충격파쇄석술)
  > RIRS(고해상도 7.5fr)
  > 수술방법
  > 비침습적 / 체외충격파 / 여러차례 시행 가능성
  > 침습적 / 내시경
  > 회복시간
  > 짧음(외래입원), 1시간 이내
  > 당일입원 당일퇴원
  > 통증
  > 경미함
  > 수술시 무통 / 회복시 경미한 통증
  > 성공률
  > (Stone free rate)
  > 60-80%(크기, 위치, 갯수에 따라 상이)
  > 80-90% (대부분 성공)
  > 합병증
  > 드물게 발생(출혈, 감염 등)
  > 발생가능성(출혈, 감염), 예방조치
  > 재발률
  > 비교적 높음
  > 비교적 낮음
  > 적응증
  > 5-10mm 이하 작은 결석
  > 5mm-20mm의 다발성, 양측성 가능
  > 마취
  > 필요시 진통제 투여
  > 척추, 수면 마취
  > 추세
  > 비침습적으로 ESWL이 선호되지만, RIRS가 보다 정밀하고 효과적인 방법으로 최근 10년간 증가 추세
  > 체외충격파쇄석술
  > (ESWL)
  > 체외충격파쇄석술은 몸 밖에서 충격파를 발생시켜 결석을 분쇄하는 비침습적 치료 방법입니다.
  > 분쇄된 결석 조각은 소변을 통해 자연 배출됩니다.
  > 이 방법은 통증이 적고 회복이 빠르며 입원이 필요하지 않은 장점이 있습니다.
  > 그러나 결석의 위치나 크기에 따라 여러 번의 시술이 필요할 수 있으며 신장 결석 파쇄에는 어려움이 있을 수 있습니다.
  > 체외충격파쇄석술 장비
  > 결석에 초점을 맞춘채로 체외충격파를 체내로 전달하여 4mm 이상의 결석을
  > 2mm 이하의 크기로 작게 분해시키고 요관을 통해 자연배출을 유도합니다.
  > 체외충격파쇄석술 장점
  > 높은 쇄석률
  > 검증받은 안전한 치료
  > 경제적인 치료(의료보험 적용)
  > 상처X, 통증X, 입원X, 마취X
  > 빠른 치료 및 회복

#### [요로결석 > 요로결석 치료 (추가 하위 페이지 2)] `clinic_08/c8_030102.html`
- **URL:** `http://www.manclinic.com/@2018/clinic_08/c8_030102.html`
- **삽입 이미지 (4건):**
  - `[img]` `img/contxt_0302.png` → `http://www.manclinic.com/@2018/clinic_08/img/contxt_0302.png`
  - `[img]` `img/contxt_0303.png` → `http://www.manclinic.com/@2018/clinic_08/img/contxt_0303.png`
  - `[bg]` `img/sub_topimg.jpg` → `http://www.manclinic.com/@2018/clinic_08/img/sub_topimg.jpg`
  - `[bg]` `../img/common/point_circle3.png` → `http://www.manclinic.com/@2018/img/common/point_circle3.png`
- **본문 텍스트 (1066자):**
  > 요로결석
  > GANGNAM J ANDROLOGY CLINIC
  > 요로결석 원인 증상
  > 요로결석 진단
  > 요로결석 치료
  > 요로결석 치료
  > 연성/경성 요관하내시경 결석제거술(RIRS/URS)
  > 쇄석술을 3회 이상 시행하였는데도 결석이 단단하여 제거되지 않거나, 위치가 좋지 않고 크기가 커서 쇄석술이 어려운 경우
  > 경성 요관내시경이나 연성 요관내시경을 삽입하여 결석을 파괴하는 요관 내시경 결석 제거술로 치료합니다.
  > 요로결석 치료장비
  > ESWL (체외충격파쇄석술)
  > URS/RIRS (내시경적결석제거술)
  > 항목
  > RIRS(고해상도 7.5fr)
  > ESWL(체외충격파쇄석술)
  > 수술방법
  > 침습적 / 내시경
  > 비침습적 / 체외충격파 / 여러차례 시행 가능성
  > 회복시간
  > 당일입원 당일퇴원
  > 짧음(외래입원), 1시간 이내
  > 통증
  > 수술시 무통 / 회복시 경미한 통증
  > 경미함
  > 성공률
  > (Stone free rate)
  > 80-90% (대부분 성공)
  > 60-80%(크기, 위치, 갯수에 따라 상이)
  > 합병증
  > 발생가능성(출혈, 감염), 예방조치
  > 드물게 발생(출혈, 감염 등)
  > 재발률
  > 비교적 낮음
  > 비교적 높음
  > 적응증
  > 5mm-20mm의 다발성, 양측성 가능
  > 5-10mm 이하 작은 결석
  > 마취
  > 척추, 수면 마취
  > 필요시 진통제 투여
  > 추세
  > 비침습적으로 ESWL이 선호되지만, RIRS가 보다 정밀하고 효과적인 방법으로 최근 10년간 증가 추세
  > 요관경하결석제거술
  > (URS)
  > 요관경하결석제거술은 요도를 통해 가느다란 내시경을 요관으로 삽입하여 결석을 직접 제거하는 방법입니다.
  > 홀뮴레이저를 사용하여 결석을 파쇄하고 제거하며 피부 절개가 필요 없는 무절개 내시경 수술입니다.
  > 이 방법은 체외충격파쇄석술로 제거되지 않는 결석이나 요관의 결석치료에 효과적입니다.
  > 시술 후 통증이나 합병증이 적고 회복이 빠른 장점이 있습니다.
  > 연성 요관내시경
  > 신장 결석 제거술
  > (RIRS)
  > 연성 요관내시경을 통해 신장 내부의 결석을 제거하는 방법으로 피부 절개 없이 요도를 통해 내시경을 삽입합니다.
  > 홀뮴레이저를 사용하여 결석을 파쇄하며 큰결석이나 다발성 결석, 상부요관이나 신장결석도 제거 할 수 있습니다.
  > 이 방법은 시술 성공률이 높고 부작용 발생 가능성이 낮으며 신체 부담이 거의 없는 장점이 있습니다.

---

### 3-2. 모바일 페이지 전체 (`http://m.manclinic.com/`)

#### [모바일 메인 페이지] `index.html`
- **URL:** `http://m.manclinic.com/index.html`
- **삽입 이미지 (6건):**
  - `[bg]` `img/vs6.jpg` → `http://m.manclinic.com/img/vs6.jpg`
  - `[bg]` `img/vs1.jpg` → `http://m.manclinic.com/img/vs1.jpg`
  - `[bg]` `img/vs2.jpg` → `http://m.manclinic.com/img/vs2.jpg`
  - `[bg]` `img/vs3.jpg` → `http://m.manclinic.com/img/vs3.jpg`
  - `[bg]` `img/vs4.jpg` → `http://m.manclinic.com/img/vs4.jpg`
  - `[bg]` `img/vs5.jpg` → `http://m.manclinic.com/img/vs5.jpg`
- **본문 텍스트 (27자):**
  > Meet the expert(수술상담)
  > 온라인예약

#### [모바일 > 음경임플란트] `landing1.html`
- **URL:** `http://m.manclinic.com/landing1.html`
- **삽입 이미지 (5건):**
  - `[bg]` `img/landing1_img_00.jpg` → `http://m.manclinic.com/img/landing1_img_00.jpg`
  - `[bg]` `img/landing1_img1.jpg` → `http://m.manclinic.com/img/landing1_img1.jpg`
  - `[bg]` `img/landing1_img2.jpg` → `http://m.manclinic.com/img/landing1_img2.jpg`
  - `[bg]` `img/landing1_img3.jpg` → `http://m.manclinic.com/img/landing1_img3.jpg`
  - `[bg]` `img/landing1_img4.jpg` → `http://m.manclinic.com/img/landing1_img4.jpg`
- **본문 텍스트 (27자):**
  > Meet the expert(수술상담)
  > 온라인예약

#### [모바일 > 전립선비대증] `landing2.html`
- **URL:** `http://m.manclinic.com/landing2.html`
- **삽입 이미지 (5건):**
  - `[bg]` `img/landing2_img_00.jpg` → `http://m.manclinic.com/img/landing2_img_00.jpg`
  - `[bg]` `img/landing2_img_01.jpg` → `http://m.manclinic.com/img/landing2_img_01.jpg`
  - `[bg]` `img/landing2_img_02.jpg` → `http://m.manclinic.com/img/landing2_img_02.jpg`
  - `[bg]` `img/landing2_img_03.jpg` → `http://m.manclinic.com/img/landing2_img_03.jpg`
  - `[bg]` `img/landing2_img_04.jpg` → `http://m.manclinic.com/img/landing2_img_04.jpg`
- **본문 텍스트 (27자):**
  > Meet the expert(수술상담)
  > 온라인예약

#### [모바일 > 음경만곡증] `landing3.html`
- **URL:** `http://m.manclinic.com/landing3.html`
- **삽입 이미지 (5건):**
  - `[bg]` `img/landing3_img_00.jpg` → `http://m.manclinic.com/img/landing3_img_00.jpg`
  - `[bg]` `img/landing3_img_01.jpg` → `http://m.manclinic.com/img/landing3_img_01.jpg`
  - `[bg]` `img/landing3_img_02.jpg` → `http://m.manclinic.com/img/landing3_img_02.jpg`
  - `[bg]` `img/landing3_img_03.jpg` → `http://m.manclinic.com/img/landing3_img_03.jpg`
  - `[bg]` `img/landing3_img_04.jpg` → `http://m.manclinic.com/img/landing3_img_04.jpg`
- **본문 텍스트 (27자):**
  > Meet the expert(수술상담)
  > 온라인예약

#### [모바일 > 음경 이물질 제거] `landing4.html`
- **URL:** `http://m.manclinic.com/landing4.html`
- **삽입 이미지 (5건):**
  - `[bg]` `img/landing4_img_00.jpg` → `http://m.manclinic.com/img/landing4_img_00.jpg`
  - `[bg]` `img/landing4_img_01.jpg` → `http://m.manclinic.com/img/landing4_img_01.jpg`
  - `[bg]` `img/landing4_img_02.jpg` → `http://m.manclinic.com/img/landing4_img_02.jpg`
  - `[bg]` `img/landing4_img_03.jpg` → `http://m.manclinic.com/img/landing4_img_03.jpg`
  - `[bg]` `img/landing4_img_04.jpg` → `http://m.manclinic.com/img/landing4_img_04.jpg`
- **본문 텍스트 (27자):**
  > Meet the expert(수술상담)
  > 온라인예약

#### [모바일 > 남성확대수술 (메뉴명 '음경 이물질 제거' 중복 오기재)] `landing5.html`
- **URL:** `http://m.manclinic.com/landing5.html`
- **삽입 이미지 (6건):**
  - `[img]` `img/landing5_img_03_btn.jpg` → `http://m.manclinic.com/img/landing5_img_03_btn.jpg`
  - `[bg]` `img/landing5_img_00.jpg` → `http://m.manclinic.com/img/landing5_img_00.jpg`
  - `[bg]` `img/landing5_img_01.jpg` → `http://m.manclinic.com/img/landing5_img_01.jpg`
  - `[bg]` `img/landing5_img_02.jpg` → `http://m.manclinic.com/img/landing5_img_02.jpg`
  - `[bg]` `img/landing5_img_03.jpg` → `http://m.manclinic.com/img/landing5_img_03.jpg`
  - `[bg]` `img/landing5_img_04.jpg` → `http://m.manclinic.com/img/landing5_img_04.jpg`
- **본문 텍스트 (27자):**
  > Meet the expert(수술상담)
  > 온라인예약

#### [모바일 > 요로결석 (드로어 메뉴 누락, 메인 배너 1번)] `landing6.html`
- **URL:** `http://m.manclinic.com/landing6.html`
- **삽입 이미지 (15건):**
  - `[bg]` `img/landing6_img_00.jpg` → `http://m.manclinic.com/img/landing6_img_00.jpg`
  - `[bg]` `img/landing6_img_01.jpg` → `http://m.manclinic.com/img/landing6_img_01.jpg`
  - `[bg]` `img/landing6_img_0901.jpg` → `http://m.manclinic.com/img/landing6_img_0901.jpg`
  - `[bg]` `img/landing6_img_1001.jpg` → `http://m.manclinic.com/img/landing6_img_1001.jpg`
  - `[bg]` `img/landing6_img_1101.jpg` → `http://m.manclinic.com/img/landing6_img_1101.jpg`
  - `[bg]` `img/landing6_img_02.jpg` → `http://m.manclinic.com/img/landing6_img_02.jpg`
  - `[bg]` `img/landing6_img_0201.jpg` → `http://m.manclinic.com/img/landing6_img_0201.jpg`
  - `[bg]` `img/landing6_img_0202.jpg` → `http://m.manclinic.com/img/landing6_img_0202.jpg`
  - `[bg]` `img/landing6_img_04.jpg` → `http://m.manclinic.com/img/landing6_img_04.jpg`
  - `[bg]` `img/landing6_img_05.jpg` → `http://m.manclinic.com/img/landing6_img_05.jpg`
  - `[bg]` `img/landing6_img_06.jpg` → `http://m.manclinic.com/img/landing6_img_06.jpg`
  - `[bg]` `img/landing6_img_12.jpg` → `http://m.manclinic.com/img/landing6_img_12.jpg`
  - `[bg]` `img/landing6_img_07.jpg` → `http://m.manclinic.com/img/landing6_img_07.jpg`
  - `[bg]` `img/landing6_img_08.jpg` → `http://m.manclinic.com/img/landing6_img_08.jpg`
  - `[bg]` `img/landing6_img_03.jpg` → `http://m.manclinic.com/img/landing6_img_03.jpg`
- **본문 텍스트 (27자):**
  > Meet the expert(수술상담)
  > 온라인예약

#### [모바일 > 비급여비용안내] `nonbenefit.html`
- **URL:** `http://m.manclinic.com/nonbenefit.html`
- **삽입 이미지 (1건):**
  - `[bg]` `http://www.manclinic.com//@2018/02_coun/img/sub_topimg2.jpg` → `http://www.manclinic.com//@2018/02_coun/img/sub_topimg2.jpg`
- **본문 텍스트 (813자):**
  > 비급여비용안내
  > 수술
  > 음경만곡증교정술
  > 음경만곡증교정술 (주름법)
  > 300~600만원
  > 음경보형물삽입수술
  > 굴곡형
  > 700만원
  > 팽창형
  > 1500만원
  > 전립선비대증 결찰수술
  > 400~1600만원
  > 음경만곡증교정술 (기하학적 백막이식수술)
  > 600~1200만원
  > 음경이물질제거수술
  > 바세린/파라핀
  > 500~1000만원
  > 지방/진피/필러
  > 300~600만원
  > 피판술
  > 상/하부 물갈퀴음경교정술
  > 200만원
  > 음낭터널피판술
  > 300만원
  > 피부결손으로 인한 피판술
  > 300만원
  > 음경확대수술
  > 국산 동종진피
  > 350만원
  > 수입 동종진피
  > 700만원
  > 히알루론산필러
  > 150만원
  > 귀두직하확대수술
  > 300만원
  > 함몰음경교정술
  > 외부근막고정술
  > 150만원
  > 치골지방제거술
  > 300~500만원
  > 배부신경차단술
  > 80만원
  > 포경수술
  > 소매법 디자인 포경수술
  > 80만원
  > 귀두포피유착박리 특수포경수술
  > 80만원
  > 포피소대성형술
  > 80만원
  > 베이스라인 포경수술
  > 150만원
  > 무도정관수술
  > 50만원
  > 실리콘링
  > C자형
  > 60만원
  > T자형
  > 120만원
  > 주사
  > IVC / IVNT (회복/면역주사)
  > 50~100만원
  > 남성호르몬 보충요법(센비도)
  > 30만원
  > 가다실 9
  > 회당 20만원
  > 요도마취(11ml)
  > 6만원
  > 검사
  > 성기능검사
  > 35만원
  > 음경혈관 도플러검사
  > 20만원
  > PHI (Prostate Health Index)
  > 20만원
  > HPV 항원검사
  > 16만원
  > 혈액검사
  > 5~10만원
  > 인공발기
  > 5만원
  > Testosterone 검사
  > 3만원
  > 남성호르몬 종합혈액검사
  > 10만원
  > 진동각검사
  > 3만원
  > 정액검사
  > 3만원
  > 제증명수수료
  > 진단서 / 소견서 / CD / 일반처방전
  > 1만원
  > 수술확인서 / 입퇴원확인서
  > 3천원
  > 진료기록사본
  > 1천원
  > 입원
  > 상급병실(1인실)
  > 40만원
  > Meet the expert(수술상담)
  > 온라인예약

#### [모바일 > Meet the expert (수술상담)] `coun.html`
- **URL:** `http://m.manclinic.com/coun.html`
- **삽입 이미지 (1건):**
  - `[bg]` `http://www.manclinic.com//@2018/02_coun/img/sub_topimg2.jpg` → `http://www.manclinic.com//@2018/02_coun/img/sub_topimg2.jpg`
- **본문 텍스트 (575자):**
  > Meet the expert (수술상담)
  > 상담리스트
  > 제목
  > 답변
  > Geometrty 음경만곡증/ 하향성선천적 하향성 음경만곡증 수술비용 문의 | 대기
  > 무도 정관수술 / 미세 정관복원수술/2mm single puncture복원수술 | 대기
  > 근본적 음낭수종/음낭수종절제술 문의 | 대기
  > Geometrty 음경만곡증/ 하향성음경만곡증 진피이식수술 | 대기
  > DTC 이물질제거/ 음경확대술 후 복원 상담 | 대기
  > DTC 이물질제거/라이펜 제거 문의 | 대기
  > 특수 포경수술/포피복원 | 대기
  > J's Combi Operation (한번의 마취, 두 가지 이상의 수술)/ 이물질제거매독인가 피지낭종인가 모낭염인가 모르겠습니다(이 물질제거 상담으로 가야하나요) | 대기
  > 특수 포경수술/Sleeve technique포경수술 문의드립니다 | 대기
  > 무도 정관수술 / 미세 정관복원수술/2mm single puncture정관수술및 다른수술문의요 | 대기
  > 상담하기
  > 제목
  > 내용
  > 작성자
  > .  1  .  2  .  3  .  4  .  5  .  6  .  7  .  8  .  9  .  10  .  >  >>
  > Meet the expert(수술상담)
  > 온라인예약

---

## 4. 기존 이미지 전체 다운로드 및 해상도(px)·분류 인벤토리

- **로컬 저장 경로:** `assets/reference/legacy_images/`
- **고유 이미지 총계:** **322건** (다운로드 성공 **320건**, 깨진 이미지 404 **2건**)
  - `[원본 유지 가능]`: **215건** (가로 600px 이상 고해상도 사진/배너/시설사진, 병원 로고, 가로 300px 이상 서브 페이지 본문 의학 도식·시술 안내 이미지)
  - `[저해상도 경고]`: **105건** (가로 600px 미만 인물/썸네일/UI 아이콘/배너 등 새 반응형 화면에서 확대 시 화질 저하 우려)
  - `[깨진 이미지(404)]`: **2건** (원본 서버 HTTP 404 응답으로 불러올 수 없음)

### 4-1. [깨진 이미지(404)] 목록 (2건)

| 분류 | 로컬 파일명 (`assets/reference/legacy_images/`) | 해상도 (가로×세로 px) | 용량 (KB) | 사용 페이지 | 원본 URL |
|---|---|---:|---:|---|---|
| [깨진 이미지(404)] | - | 오류 (HTTP 404) | - | PC:05_faq/faq_01.html, PC:05_faq/faq_02.html, PC:05_faq/faq_03.html 외 1건 | `http://www.manclinic.com/@2018/05_faq/img/sub_topimg.jpg` |
| [깨진 이미지(404)] | - | 오류 (HTTP 404) | - | PC 공통 헤더(구분선) | `http://www.manclinic.com/@2018/img/common/gnbborder.png` |

### 4-2. [원본 유지 가능] 목록 (215건)

| 분류 | 로컬 파일명 (`assets/reference/legacy_images/`) | 해상도 (가로×세로 px) | 용량 (KB) | 사용 페이지 | 원본 URL |
|---|---|---:|---:|---|---|
| [원본 유지 가능] | `ext_files_1440037807.jpg` | 2552 × 3510 | 925.2 | PC:01_hp/hp_09.html | `http://androj-p.com/files/1440037807.jpg` |
| [원본 유지 가능] | `ext_files_1502680902.jpg` | 803 × 2230 | 594.4 | PC:01_hp/hp_09.html | `http://androj-p.com/files/1502680902.jpg` |
| [원본 유지 가능] | `ext_files_1508828228.jpg` | 1668 × 2276 | 197.0 | PC:01_hp/hp_09.html | `http://androj-p.com/files/1508828228.jpg` |
| [원본 유지 가능] | `ext_files_1518511940.jpg` | 2525 × 3431 | 1704.8 | PC:01_hp/hp_09.html | `http://androj-p.com/files/1518511940.jpg` |
| [원본 유지 가능] | `ext_files_1520045011.jpg` | 871 × 2260 | 771.3 | PC:01_hp/hp_09.html | `http://androj-p.com/files/1520045011.jpg` |
| [원본 유지 가능] | `ext_files_1541644235.jpg` | 1242 × 2208 | 295.8 | PC:01_hp/hp_09.html | `http://androj-p.com/files/1541644235.jpg` |
| [원본 유지 가능] | `ext_files_1545379216.jpg` | 793 × 1122 | 26.2 | PC:01_hp/hp_09.html | `http://androj-p.com/files/1545379216.jpg` |
| [원본 유지 가능] | `m_20260824_popup.jpg` | 900 × 660 | 551.4 | 모바일 메인 팝업(진료시간표) | `http://m.manclinic.com/img/20260824_popup.jpg` |
| [원본 유지 가능] | `m_footer_bg.jpg` | 800 × 296 | 11.5 | 모바일 공통 푸터(배경) | `http://m.manclinic.com/img/footer_bg.jpg` |
| [원본 유지 가능] | `m_landing1_img1.jpg` | 800 × 630 | 308.1 | M:landing1.html | `http://m.manclinic.com/img/landing1_img1.jpg` |
| [원본 유지 가능] | `m_landing1_img2.jpg` | 800 × 590 | 180.3 | M:landing1.html | `http://m.manclinic.com/img/landing1_img2.jpg` |
| [원본 유지 가능] | `m_landing1_img3.jpg` | 800 × 450 | 221.9 | M:landing1.html | `http://m.manclinic.com/img/landing1_img3.jpg` |
| [원본 유지 가능] | `m_landing1_img4.jpg` | 800 × 572 | 93.8 | M:landing1.html | `http://m.manclinic.com/img/landing1_img4.jpg` |
| [원본 유지 가능] | `m_landing1_img_00.jpg` | 800 × 650 | 292.7 | M:landing1.html | `http://m.manclinic.com/img/landing1_img_00.jpg` |
| [원본 유지 가능] | `m_landing2_img_00.jpg` | 800 × 650 | 267.3 | M:landing2.html | `http://m.manclinic.com/img/landing2_img_00.jpg` |
| [원본 유지 가능] | `m_landing2_img_01.jpg` | 800 × 630 | 361.2 | M:landing2.html | `http://m.manclinic.com/img/landing2_img_01.jpg` |
| [원본 유지 가능] | `m_landing2_img_02.jpg` | 800 × 630 | 316.9 | M:landing2.html | `http://m.manclinic.com/img/landing2_img_02.jpg` |
| [원본 유지 가능] | `m_landing2_img_03.jpg` | 800 × 700 | 185.5 | M:landing2.html | `http://m.manclinic.com/img/landing2_img_03.jpg` |
| [원본 유지 가능] | `m_landing2_img_04.jpg` | 800 × 651 | 109.8 | M:landing2.html | `http://m.manclinic.com/img/landing2_img_04.jpg` |
| [원본 유지 가능] | `m_landing3_img_00.jpg` | 800 × 650 | 212.1 | M:landing3.html | `http://m.manclinic.com/img/landing3_img_00.jpg` |
| [원본 유지 가능] | `m_landing3_img_01.jpg` | 800 × 726 | 340.1 | M:landing3.html | `http://m.manclinic.com/img/landing3_img_01.jpg` |
| [원본 유지 가능] | `m_landing3_img_02.jpg` | 800 × 630 | 288.2 | M:landing3.html | `http://m.manclinic.com/img/landing3_img_02.jpg` |
| [원본 유지 가능] | `m_landing3_img_03.jpg` | 800 × 627 | 274.2 | M:landing3.html | `http://m.manclinic.com/img/landing3_img_03.jpg` |
| [원본 유지 가능] | `m_landing3_img_04.jpg` | 800 × 534 | 93.7 | M:landing3.html | `http://m.manclinic.com/img/landing3_img_04.jpg` |
| [원본 유지 가능] | `m_landing4_img_00.jpg` | 800 × 650 | 259.1 | M:landing4.html | `http://m.manclinic.com/img/landing4_img_00.jpg` |
| [원본 유지 가능] | `m_landing4_img_01.jpg` | 800 × 726 | 331.8 | M:landing4.html | `http://m.manclinic.com/img/landing4_img_01.jpg` |
| [원본 유지 가능] | `m_landing4_img_02.jpg` | 800 × 450 | 207.9 | M:landing4.html | `http://m.manclinic.com/img/landing4_img_02.jpg` |
| [원본 유지 가능] | `m_landing4_img_03.jpg` | 800 × 675 | 303.3 | M:landing4.html | `http://m.manclinic.com/img/landing4_img_03.jpg` |
| [원본 유지 가능] | `m_landing4_img_04.jpg` | 800 × 539 | 99.7 | M:landing4.html | `http://m.manclinic.com/img/landing4_img_04.jpg` |
| [원본 유지 가능] | `m_landing5_img_00.jpg` | 800 × 650 | 283.0 | M:landing5.html | `http://m.manclinic.com/img/landing5_img_00.jpg` |
| [원본 유지 가능] | `m_landing5_img_01.jpg` | 800 × 568 | 207.1 | M:landing5.html | `http://m.manclinic.com/img/landing5_img_01.jpg` |
| [원본 유지 가능] | `m_landing5_img_02.jpg` | 800 × 314 | 156.5 | M:landing5.html | `http://m.manclinic.com/img/landing5_img_02.jpg` |
| [원본 유지 가능] | `m_landing5_img_03.jpg` | 800 × 728 | 36.7 | M:landing5.html | `http://m.manclinic.com/img/landing5_img_03.jpg` |
| [원본 유지 가능] | `m_landing5_img_03_btn.jpg` | 650 × 366 | 129.9 | M:landing5.html | `http://m.manclinic.com/img/landing5_img_03_btn.jpg` |
| [원본 유지 가능] | `m_landing5_img_04.jpg` | 800 × 540 | 87.9 | M:landing5.html | `http://m.manclinic.com/img/landing5_img_04.jpg` |
| [원본 유지 가능] | `m_landing6_img_00.jpg` | 800 × 650 | 207.9 | M:landing6.html | `http://m.manclinic.com/img/landing6_img_00.jpg` |
| [원본 유지 가능] | `m_landing6_img_01.jpg` | 800 × 1200 | 567.9 | M:landing6.html | `http://m.manclinic.com/img/landing6_img_01.jpg` |
| [원본 유지 가능] | `m_landing6_img_02.jpg` | 800 × 800 | 344.9 | M:landing6.html | `http://m.manclinic.com/img/landing6_img_02.jpg` |
| [원본 유지 가능] | `m_landing6_img_0201.jpg` | 800 × 1000 | 305.9 | M:landing6.html | `http://m.manclinic.com/img/landing6_img_0201.jpg` |
| [원본 유지 가능] | `m_landing6_img_0202.jpg` | 800 × 1175 | 300.8 | M:landing6.html | `http://m.manclinic.com/img/landing6_img_0202.jpg` |
| [원본 유지 가능] | `m_landing6_img_03.jpg` | 800 × 1080 | 310.9 | M:landing6.html | `http://m.manclinic.com/img/landing6_img_03.jpg` |
| [원본 유지 가능] | `m_landing6_img_04.jpg` | 800 × 1080 | 318.8 | M:landing6.html | `http://m.manclinic.com/img/landing6_img_04.jpg` |
| [원본 유지 가능] | `m_landing6_img_05.jpg` | 800 × 1140 | 300.3 | M:landing6.html | `http://m.manclinic.com/img/landing6_img_05.jpg` |
| [원본 유지 가능] | `m_landing6_img_06.jpg` | 800 × 1080 | 210.1 | M:landing6.html | `http://m.manclinic.com/img/landing6_img_06.jpg` |
| [원본 유지 가능] | `m_landing6_img_07.jpg` | 800 × 300 | 52.9 | M:landing6.html | `http://m.manclinic.com/img/landing6_img_07.jpg` |
| [원본 유지 가능] | `m_landing6_img_08.jpg` | 800 × 180 | 39.0 | M:landing6.html | `http://m.manclinic.com/img/landing6_img_08.jpg` |
| [원본 유지 가능] | `m_landing6_img_0901.jpg` | 800 × 836 | 180.0 | M:landing6.html | `http://m.manclinic.com/img/landing6_img_0901.jpg` |
| [원본 유지 가능] | `m_landing6_img_1001.jpg` | 800 × 673 | 144.9 | M:landing6.html | `http://m.manclinic.com/img/landing6_img_1001.jpg` |
| [원본 유지 가능] | `m_landing6_img_1101.jpg` | 800 × 1079 | 192.6 | M:landing6.html | `http://m.manclinic.com/img/landing6_img_1101.jpg` |
| [원본 유지 가능] | `m_landing6_img_12.jpg` | 800 × 591 | 151.4 | M:landing6.html | `http://m.manclinic.com/img/landing6_img_12.jpg` |
| [원본 유지 가능] | `m_logo.png` | 318 × 58 | 4.2 | 모바일 공통 헤더(로고) | `http://m.manclinic.com/img/logo.png` |
| [원본 유지 가능] | `m_vs1.jpg` | 800 × 650 | 299.6 | M:index.html | `http://m.manclinic.com/img/vs1.jpg` |
| [원본 유지 가능] | `m_vs2.jpg` | 800 × 650 | 297.2 | M:index.html | `http://m.manclinic.com/img/vs2.jpg` |
| [원본 유지 가능] | `m_vs3.jpg` | 800 × 650 | 217.8 | M:index.html | `http://m.manclinic.com/img/vs3.jpg` |
| [원본 유지 가능] | `m_vs4.jpg` | 800 × 650 | 317.5 | M:index.html | `http://m.manclinic.com/img/vs4.jpg` |
| [원본 유지 가능] | `m_vs5.jpg` | 800 × 650 | 292.5 | M:index.html | `http://m.manclinic.com/img/vs5.jpg` |
| [원본 유지 가능] | `m_vs6.jpg` | 800 × 650 | 222.3 | M:index.html | `http://m.manclinic.com/img/vs6.jpg` |
| [원본 유지 가능] | `pc_01_hp_hp12_01.jpg` | 2000 × 1080 | 1253.6 | PC:01_hp/hp_12.html | `http://www.manclinic.com/@2018/01_hp/img/hp12_01.jpg` |
| [원본 유지 가능] | `pc_01_hp_hp12_02.jpg` | 2000 × 1758 | 1599.5 | PC:01_hp/hp_12.html | `http://www.manclinic.com/@2018/01_hp/img/hp12_02.jpg` |
| [원본 유지 가능] | `pc_01_hp_hp12_03.jpg` | 2000 × 1380 | 1243.7 | PC:01_hp/hp_12.html | `http://www.manclinic.com/@2018/01_hp/img/hp12_03.jpg` |
| [원본 유지 가능] | `pc_01_hp_hp12_04.jpg` | 2000 × 948 | 1068.6 | PC:01_hp/hp_12.html | `http://www.manclinic.com/@2018/01_hp/img/hp12_04.jpg` |
| [원본 유지 가능] | `pc_01_hp_hp12_05.jpg` | 2000 × 1168 | 1217.8 | PC:01_hp/hp_12.html | `http://www.manclinic.com/@2018/01_hp/img/hp12_05.jpg` |
| [원본 유지 가능] | `pc_01_hp_hp12_06.jpg` | 2000 × 1090 | 829.4 | PC:01_hp/hp_12.html | `http://www.manclinic.com/@2018/01_hp/img/hp12_06.jpg` |
| [원본 유지 가능] | `pc_01_hp_hp12_07.jpg` | 2000 × 1846 | 1287.0 | PC:01_hp/hp_12.html | `http://www.manclinic.com/@2018/01_hp/img/hp12_07.jpg` |
| [원본 유지 가능] | `pc_01_hp_sub_topimg.jpg` | 2000 × 250 | 282.9 | PC:01_hp/hp_01.html, PC:01_hp/hp_04.html, PC:01_hp/hp_11.html 외 14건 | `http://www.manclinic.com/@2018/01_hp/img/sub_topimg.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_01.jpg` | 950 × 630 | 604.2 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_01.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_02.jpg` | 950 × 630 | 604.8 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_02.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_03.jpg` | 950 × 630 | 613.0 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_03.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_04.jpg` | 950 × 630 | 513.1 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_04.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_05.jpg` | 950 × 630 | 453.6 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_05.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_06.jpg` | 950 × 630 | 481.9 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_06.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_07.jpg` | 950 × 630 | 526.4 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_07.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_08.jpg` | 950 × 630 | 449.0 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_08.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_09.jpg` | 950 × 630 | 442.0 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_09.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_10.jpg` | 950 × 630 | 561.0 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_10.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_11.jpg` | 950 × 630 | 395.3 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_11.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_12.jpg` | 950 × 630 | 462.6 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_12.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_13.jpg` | 950 × 630 | 464.8 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_13.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_14.jpg` | 950 × 630 | 437.7 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_14.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_15.jpg` | 950 × 630 | 418.7 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_15.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_16.jpg` | 950 × 630 | 411.6 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_16.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_17.jpg` | 950 × 630 | 473.7 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_17.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_18.jpg` | 950 × 630 | 433.3 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_18.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_19.jpg` | 950 × 630 | 446.4 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_19.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_20.jpg` | 950 × 630 | 390.7 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_20.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_21.jpg` | 950 × 630 | 417.2 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_21.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_22.jpg` | 950 × 630 | 531.2 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_22.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_23.jpg` | 950 × 630 | 518.2 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_23.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_24.jpg` | 950 × 630 | 512.7 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_24.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_25.jpg` | 950 × 630 | 553.3 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_25.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_26.jpg` | 950 × 630 | 558.7 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_26.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_27.jpg` | 950 × 630 | 475.9 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_27.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_28.jpg` | 950 × 630 | 535.0 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_28.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_29.jpg` | 950 × 630 | 457.3 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_29.jpg` |
| [원본 유지 가능] | `pc_01_hp_visual_30.jpg` | 950 × 630 | 401.0 | PC:01_hp/hp_11.html | `http://www.manclinic.com/@2018/01_hp/img/visual_30.jpg` |
| [원본 유지 가능] | `pc_02_coun_sub_topimg.jpg` | 2000 × 250 | 97.8 | PC:02_coun/qna1.html, PC:02_coun/rev.html | `http://www.manclinic.com/@2018/02_coun/img/sub_topimg.jpg` |
| [원본 유지 가능] | `pc_02_coun_sub_topimg2.jpg` | 2000 × 250 | 124.0 | PC:02_coun/qna.html, M:nonbenefit.html, M:coun.html | `http://www.manclinic.com/@2018/02_coun/img/sub_topimg2.jpg` |
| [원본 유지 가능] | `pc_04_member_sub_topimg.jpg` | 2000 × 250 | 97.8 | PC:04_member/login.html, PC:04_member/join1.html, PC:04_member/member_01.html 외 1건 | `http://www.manclinic.com/@2018/04_member/img/sub_topimg.jpg` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0101.png` | 1100 × 414 | 375.6 | PC:clinic_02/c2_0101.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0101.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0201.png` | 1100 × 310 | 261.3 | PC:clinic_02/c2_0201.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0201.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0202.png` | 1100 × 310 | 112.4 | PC:clinic_02/c2_0201.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0202.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0301.png` | 2000 × 200 | 32.2 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0301.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0302.png` | 1100 × 417 | 140.0 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0302.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0303.png` | 2000 × 481 | 202.1 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0303.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0304.png` | 1100 × 357 | 70.9 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0304.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0305.png` | 1100 × 357 | 123.7 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0305.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0306.png` | 1098 × 357 | 258.4 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0306.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0307.jpg` | 520 × 393 | 45.4 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0307.jpg` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0308.png` | 1200 × 280 | 330.5 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0308.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0309.png` | 1200 × 295 | 216.4 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0309.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0310.png` | 1200 × 301 | 244.2 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0310.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0311.png` | 860 × 280 | 140.3 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0311.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0312.png` | 570 × 265 | 135.3 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0312.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0314.png` | 2000 × 1200 | 2298.7 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0314.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0315.png` | 639 × 475 | 198.4 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0315.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0316.png` | 559 × 271 | 94.5 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0316.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0317.png` | 559 × 233 | 95.8 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0317.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0318.png` | 559 × 193 | 84.9 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0318.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0319.png` | 1200 × 344 | 28.5 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0319.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0320.png` | 1200 × 135 | 18.9 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0320.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0321.png` | 1920 × 650 | 1109.1 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0321.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0401.png` | 1100 × 311 | 109.3 | PC:clinic_02/c2_0401.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0401.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0701.png` | 1200 × 1020 | 260.9 | PC:clinic_02/c2_0701.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0701.png` |
| [원본 유지 가능] | `pc_clinic_02_contxt_0702.png` | 1200 × 371 | 365.4 | PC:clinic_02/c2_0701.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0702.png` |
| [원본 유지 가능] | `pc_clinic_02_sub_topimg.jpg` | 2000 × 250 | 106.8 | PC:clinic_02/c2_0101.html, PC:clinic_02/c2_0201.html, PC:clinic_02/c2_0401.html 외 2건 | `http://www.manclinic.com/@2018/clinic_02/img/sub_topimg.jpg` |
| [원본 유지 가능] | `pc_clinic_02_sub_topimg3.jpg` | 2000 × 550 | 393.5 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/sub_topimg3.jpg` |
| [원본 유지 가능] | `pc_clinic_02_sub_topimg7.jpg` | 2000 × 550 | 360.2 | PC:clinic_02/c2_0701.html | `http://www.manclinic.com/@2018/clinic_02/img/sub_topimg7.jpg` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0101.png` | 1920 × 680 | 536.1 | PC:clinic_03/c3_0101.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0101.png` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0102.png` | 1920 × 1157 | 610.3 | PC:clinic_03/c3_0101.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0102.png` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0103.png` | 1920 × 909 | 1131.2 | PC:clinic_03/c3_0101.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0103.png` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0104.png` | 1920 × 745 | 187.1 | PC:clinic_03/c3_0101.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0104.png` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0105.png` | 1920 × 1207 | 144.3 | PC:clinic_03/c3_0101.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0105.png` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0106.png` | 1920 × 730 | 61.3 | PC:clinic_03/c3_0101.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0106.png` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0107.png` | 1920 × 1034 | 147.5 | PC:clinic_03/c3_0101.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0107.png` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0201.png` | 1200 × 275 | 135.3 | PC:clinic_03/c3_0201.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0201.png` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0202.png` | 1200 × 400 | 46.9 | PC:clinic_03/c3_0201.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0202.png` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0203.png` | 1200 × 156 | 58.8 | PC:clinic_03/c3_0201.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0203.png` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0204.png` | 1200 × 400 | 32.8 | PC:clinic_03/c3_0201.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0204.png` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0301.png` | 1200 × 246 | 96.2 | PC:clinic_03/c3_0301.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0301.png` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0302.png` | 1200 × 400 | 33.6 | PC:clinic_03/c3_0301.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0302.png` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0303.png` | 1200 × 400 | 35.5 | PC:clinic_03/c3_0301.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0303.png` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0401.png` | 1200 × 799 | 1628.1 | PC:clinic_03/c3_0401.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0401.png` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0501.png` | 1200 × 211 | 86.0 | PC:clinic_03/c3_0501.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0501.png` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0502.png` | 1200 × 400 | 35.2 | PC:clinic_03/c3_0501.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0502.png` |
| [원본 유지 가능] | `pc_clinic_03_contxt_0601.png` | 1200 × 400 | 32.7 | PC:clinic_03/c3_0601.html | `http://www.manclinic.com/@2018/clinic_03/img/contxt_0601.png` |
| [원본 유지 가능] | `pc_clinic_03_sub_topimg.jpg` | 2000 × 250 | 161.1 | PC:clinic_03/c3_0101.html, PC:clinic_03/c3_0201.html, PC:clinic_03/c3_0301.html 외 3건 | `http://www.manclinic.com/@2018/clinic_03/img/sub_topimg.jpg` |
| [원본 유지 가능] | `pc_clinic_04_contxt_0101.png` | 591 × 319 | 24.5 | PC:clinic_04/c4_0101.html | `http://www.manclinic.com/@2018/clinic_04/img/contxt_0101.png` |
| [원본 유지 가능] | `pc_clinic_04_contxt_0102.png` | 880 × 310 | 398.9 | PC:clinic_04/c4_0101.html | `http://www.manclinic.com/@2018/clinic_04/img/contxt_0102.png` |
| [원본 유지 가능] | `pc_clinic_04_contxt_0103.png` | 840 × 326 | 392.7 | PC:clinic_04/c4_0101.html | `http://www.manclinic.com/@2018/clinic_04/img/contxt_0103.png` |
| [원본 유지 가능] | `pc_clinic_04_contxt_0104.png` | 761 × 319 | 65.5 | PC:clinic_04/c4_0101.html | `http://www.manclinic.com/@2018/clinic_04/img/contxt_0104.png` |
| [원본 유지 가능] | `pc_clinic_04_contxt_0201.png` | 1100 × 286 | 298.1 | PC:clinic_04/c4_0201.html | `http://www.manclinic.com/@2018/clinic_04/img/contxt_0201.png` |
| [원본 유지 가능] | `pc_clinic_04_contxt_0202.png` | 1100 × 1264 | 328.4 | PC:clinic_04/c4_0201.html | `http://www.manclinic.com/@2018/clinic_04/img/contxt_0202.png` |
| [원본 유지 가능] | `pc_clinic_04_contxt_0301.jpg` | 2000 × 1357 | 788.7 | PC:clinic_04/c4_0301.html | `http://www.manclinic.com/@2018/clinic_04/img/contxt_0301.jpg` |
| [원본 유지 가능] | `pc_clinic_04_contxt_0321.png` | 1920 × 650 | 1109.1 | PC:clinic_04/c4_0401.html | `http://www.manclinic.com/@2018/clinic_04/img/contxt_0321.png` |
| [원본 유지 가능] | `pc_clinic_04_contxt_0401.png` | 1920 × 453 | 141.3 | PC:clinic_04/c4_0401.html | `http://www.manclinic.com/@2018/clinic_04/img/contxt_0401.png` |
| [원본 유지 가능] | `pc_clinic_04_contxt_0402.png` | 1920 × 1298 | 480.4 | PC:clinic_04/c4_0401.html | `http://www.manclinic.com/@2018/clinic_04/img/contxt_0402.png` |
| [원본 유지 가능] | `pc_clinic_04_contxt_0403.png` | 1920 × 366 | 360.6 | PC:clinic_04/c4_0401.html | `http://www.manclinic.com/@2018/clinic_04/img/contxt_0403.png` |
| [원본 유지 가능] | `pc_clinic_04_contxt_0404.png` | 1920 × 686 | 1364.6 | PC:clinic_04/c4_0401.html | `http://www.manclinic.com/@2018/clinic_04/img/contxt_0404.png` |
| [원본 유지 가능] | `pc_clinic_04_contxt_0405.png` | 1920 × 518 | 96.7 | PC:clinic_04/c4_0401.html | `http://www.manclinic.com/@2018/clinic_04/img/contxt_0405.png` |
| [원본 유지 가능] | `pc_clinic_04_contxt_0406.png` | 1920 × 456 | 93.6 | PC:clinic_04/c4_0401.html | `http://www.manclinic.com/@2018/clinic_04/img/contxt_0406.png` |
| [원본 유지 가능] | `pc_clinic_04_contxt_0407.png` | 339 × 146 | 56.5 | PC:clinic_04/c4_0401.html | `http://www.manclinic.com/@2018/clinic_04/img/contxt_0407.png` |
| [원본 유지 가능] | `pc_clinic_04_contxt_0408.png` | 450 × 187 | 104.1 | PC:clinic_04/c4_0401.html | `http://www.manclinic.com/@2018/clinic_04/img/contxt_0408.png` |
| [원본 유지 가능] | `pc_clinic_04_sub_topimg.jpg` | 2000 × 250 | 198.3 | PC:clinic_04/c4_0401.html, PC:clinic_04/c4_0101.html, PC:clinic_04/c4_0201.html 외 1건 | `http://www.manclinic.com/@2018/clinic_04/img/sub_topimg.jpg` |
| [원본 유지 가능] | `pc_clinic_05_contxt_0101.png` | 1100 × 310 | 153.5 | PC:clinic_05/c5_0101.html | `http://www.manclinic.com/@2018/clinic_05/img/contxt_0101.png` |
| [원본 유지 가능] | `pc_clinic_05_contxt_0102.png` | 1100 × 360 | 270.9 | PC:clinic_05/c5_0101.html | `http://www.manclinic.com/@2018/clinic_05/img/contxt_0102.png` |
| [원본 유지 가능] | `pc_clinic_05_contxt_0201.png` | 1100 × 310 | 176.6 | PC:clinic_05/c5_0201.html | `http://www.manclinic.com/@2018/clinic_05/img/contxt_0201.png` |
| [원본 유지 가능] | `pc_clinic_05_contxt_0301.png` | 1100 × 310 | 163.6 | PC:clinic_05/c5_0301.html | `http://www.manclinic.com/@2018/clinic_05/img/contxt_0301.png` |
| [원본 유지 가능] | `pc_clinic_05_contxt_0302.png` | 1100 × 310 | 98.9 | PC:clinic_05/c5_0301.html | `http://www.manclinic.com/@2018/clinic_05/img/contxt_0302.png` |
| [원본 유지 가능] | `pc_clinic_05_contxt_0303.png` | 400 × 200 | 50.2 | PC:clinic_05/c5_0301.html | `http://www.manclinic.com/@2018/clinic_05/img/contxt_0303.png` |
| [원본 유지 가능] | `pc_clinic_05_contxt_0304.png` | 1100 × 262 | 23.0 | PC:clinic_05/c5_0301.html | `http://www.manclinic.com/@2018/clinic_05/img/contxt_0304.png` |
| [원본 유지 가능] | `pc_clinic_05_sub_topimg.jpg` | 2000 × 250 | 195.3 | PC:clinic_05/c5_0101.html, PC:clinic_05/c5_0201.html, PC:clinic_05/c5_0301.html | `http://www.manclinic.com/@2018/clinic_05/img/sub_topimg.jpg` |
| [원본 유지 가능] | `pc_clinic_06_contxt_0301.png` | 1920 × 600 | 1296.1 | PC:clinic_06/c6_0301.html | `http://www.manclinic.com/@2018/clinic_06/img/contxt_0301.png` |
| [원본 유지 가능] | `pc_clinic_06_contxt_0302.png` | 1920 × 798 | 65.4 | PC:clinic_06/c6_0301.html | `http://www.manclinic.com/@2018/clinic_06/img/contxt_0302.png` |
| [원본 유지 가능] | `pc_clinic_06_contxt_0303.png` | 1920 × 843 | 1713.1 | PC:clinic_06/c6_0301.html | `http://www.manclinic.com/@2018/clinic_06/img/contxt_0303.png` |
| [원본 유지 가능] | `pc_clinic_06_contxt_0304.png` | 1920 × 843 | 1024.1 | PC:clinic_06/c6_0301.html | `http://www.manclinic.com/@2018/clinic_06/img/contxt_0304.png` |
| [원본 유지 가능] | `pc_clinic_06_contxt_0305.png` | 1920 × 843 | 1964.3 | PC:clinic_06/c6_0301.html | `http://www.manclinic.com/@2018/clinic_06/img/contxt_0305.png` |
| [원본 유지 가능] | `pc_clinic_06_contxt_0306.png` | 1920 × 843 | 624.5 | PC:clinic_06/c6_0301.html | `http://www.manclinic.com/@2018/clinic_06/img/contxt_0306.png` |
| [원본 유지 가능] | `pc_clinic_06_contxt_0307.png` | 1920 × 843 | 1277.8 | PC:clinic_06/c6_0301.html | `http://www.manclinic.com/@2018/clinic_06/img/contxt_0307.png` |
| [원본 유지 가능] | `pc_clinic_06_contxt_0308.png` | 1920 × 843 | 1629.1 | PC:clinic_06/c6_0301.html | `http://www.manclinic.com/@2018/clinic_06/img/contxt_0308.png` |
| [원본 유지 가능] | `pc_clinic_06_sub_topimg.jpg` | 2000 × 250 | 297.8 | PC:clinic_06/c6_0101.html, PC:clinic_06/c6_0201.html, PC:clinic_06/c6_0301.html | `http://www.manclinic.com/@2018/clinic_06/img/sub_topimg.jpg` |
| [원본 유지 가능] | `pc_clinic_07_contxt_0101_bg.jpg` | 2000 × 680 | 236.3 | PC:clinic_07/c7_0101.html | `http://www.manclinic.com/@2018/clinic_07/img/contxt_0101_bg.jpg` |
| [원본 유지 가능] | `pc_clinic_07_sub_topimg.jpg` | 2000 × 250 | 229.0 | PC:clinic_07/c7_0101.html | `http://www.manclinic.com/@2018/clinic_07/img/sub_topimg.jpg` |
| [원본 유지 가능] | `pc_clinic_08_contxt_0101.png` | 1100 × 530 | 90.1 | PC:clinic_08/c8_0101.html | `http://www.manclinic.com/@2018/clinic_08/img/contxt_0101.png` |
| [원본 유지 가능] | `pc_clinic_08_contxt_0301.png` | 800 × 530 | 81.6 | PC:clinic_08/c8_030101.html | `http://www.manclinic.com/@2018/clinic_08/img/contxt_0301.png` |
| [원본 유지 가능] | `pc_clinic_08_contxt_0302.png` | 800 × 720 | 107.6 | PC:clinic_08/c8_030102.html | `http://www.manclinic.com/@2018/clinic_08/img/contxt_0302.png` |
| [원본 유지 가능] | `pc_clinic_08_contxt_0303.png` | 800 × 720 | 109.6 | PC:clinic_08/c8_030102.html | `http://www.manclinic.com/@2018/clinic_08/img/contxt_0303.png` |
| [원본 유지 가능] | `pc_clinic_08_contxt_0305.png` | 791 × 380 | 73.2 | PC:clinic_08/c8_0301.html | `http://www.manclinic.com/@2018/clinic_08/img/contxt_0305.png` |
| [원본 유지 가능] | `pc_clinic_08_contxt_0306.png` | 791 × 380 | 64.0 | PC:clinic_08/c8_0301.html | `http://www.manclinic.com/@2018/clinic_08/img/contxt_0306.png` |
| [원본 유지 가능] | `pc_clinic_08_contxt_0307.png` | 791 × 380 | 52.1 | PC:clinic_08/c8_0301.html | `http://www.manclinic.com/@2018/clinic_08/img/contxt_0307.png` |
| [원본 유지 가능] | `pc_clinic_08_contxt_0308.png` | 791 × 380 | 94.8 | PC:clinic_08/c8_0301.html | `http://www.manclinic.com/@2018/clinic_08/img/contxt_0308.png` |
| [원본 유지 가능] | `pc_clinic_08_contxt_0309.png` | 791 × 380 | 89.0 | PC:clinic_08/c8_0301.html | `http://www.manclinic.com/@2018/clinic_08/img/contxt_0309.png` |
| [원본 유지 가능] | `pc_clinic_08_contxt_0310.png` | 791 × 380 | 86.1 | PC:clinic_08/c8_0301.html | `http://www.manclinic.com/@2018/clinic_08/img/contxt_0310.png` |
| [원본 유지 가능] | `pc_clinic_08_contxt_0311.png` | 791 × 380 | 85.3 | PC:clinic_08/c8_0301.html | `http://www.manclinic.com/@2018/clinic_08/img/contxt_0311.png` |
| [원본 유지 가능] | `pc_clinic_08_contxt_0312.png` | 1000 × 833 | 283.8 | PC:clinic_08/c8_030101.html | `http://www.manclinic.com/@2018/clinic_08/img/contxt_0312.png` |
| [원본 유지 가능] | `pc_clinic_08_sub_topimg.jpg` | 2000 × 250 | 144.3 | PC:clinic_08/c8_0101.html, PC:clinic_08/c8_0201.html, PC:clinic_08/c8_0301.html 외 2건 | `http://www.manclinic.com/@2018/clinic_08/img/sub_topimg.jpg` |
| [원본 유지 가능] | `pc_common_footer_logo.png` | 282 × 53 | 4.0 | PC 공통 푸터(화이트 로고) | `http://www.manclinic.com/@2018/img/common/footer_logo.png` |
| [원본 유지 가능] | `pc_common_logo.png` | 282 × 53 | 7.3 | PC 공통 헤더(로고) | `http://www.manclinic.com/@2018/img/common/logo.png` |
| [원본 유지 가능] | `pc_main_depth11_1.jpg` | 2000 × 730 | 448.7 | PC:index.html | `http://www.manclinic.com/@2018/img/main/depth11_1.jpg` |
| [원본 유지 가능] | `pc_main_depth11_2.jpg` | 2000 × 730 | 458.5 | PC:index.html | `http://www.manclinic.com/@2018/img/main/depth11_2.jpg` |
| [원본 유지 가능] | `pc_main_depth11_3.jpg` | 2000 × 730 | 509.6 | PC:index.html | `http://www.manclinic.com/@2018/img/main/depth11_3.jpg` |
| [원본 유지 가능] | `pc_main_depth2_1.jpg` | 2000 × 730 | 592.3 | PC:index.html | `http://www.manclinic.com/@2018/img/main/depth2_1.jpg` |
| [원본 유지 가능] | `pc_main_depth2_2.jpg` | 2000 × 730 | 562.7 | PC:index.html | `http://www.manclinic.com/@2018/img/main/depth2_2.jpg` |
| [원본 유지 가능] | `pc_main_depth2_3.jpg` | 2000 × 730 | 552.5 | PC:index.html | `http://www.manclinic.com/@2018/img/main/depth2_3.jpg` |
| [원본 유지 가능] | `pc_main_depth3_1.jpg` | 2000 × 730 | 637.4 | PC:index.html | `http://www.manclinic.com/@2018/img/main/depth3_1.jpg` |
| [원본 유지 가능] | `pc_main_depth3_2.jpg` | 2000 × 730 | 544.8 | PC:index.html | `http://www.manclinic.com/@2018/img/main/depth3_2.jpg` |
| [원본 유지 가능] | `pc_main_depth3_3.jpg` | 2000 × 730 | 473.0 | PC:index.html | `http://www.manclinic.com/@2018/img/main/depth3_3.jpg` |
| [원본 유지 가능] | `pc_main_depth4_1.jpg` | 2000 × 730 | 547.4 | PC:index.html | `http://www.manclinic.com/@2018/img/main/depth4_1.jpg` |
| [원본 유지 가능] | `pc_main_depth4_2.jpg` | 2000 × 730 | 916.7 | PC:index.html | `http://www.manclinic.com/@2018/img/main/depth4_2.jpg` |
| [원본 유지 가능] | `pc_main_depth4_3.jpg` | 2000 × 730 | 1452.8 | PC:index.html | `http://www.manclinic.com/@2018/img/main/depth4_3.jpg` |
| [원본 유지 가능] | `pc_main_vs_1_1.png` | 2000 × 730 | 1260.2 | PC:index.html | `http://www.manclinic.com/@2018/img/main/vs_1_1.png` |
| [원본 유지 가능] | `pc_main_vs_1_2.png` | 2000 × 730 | 889.3 | PC:index.html | `http://www.manclinic.com/@2018/img/main/vs_1_2.png` |
| [원본 유지 가능] | `pc_main_vs_1_3.png` | 2000 × 730 | 1185.6 | PC:index.html | `http://www.manclinic.com/@2018/img/main/vs_1_3.png` |
| [원본 유지 가능] | `pc_popup_20260810_popup.jpg` | 600 × 660 | 255.8 | PC/모바일 메인 팝업(이웅희 원장) | `http://www.manclinic.com/@2018/img/popup/20260810_popup.jpg` |
| [원본 유지 가능] | `pc_popup_20260824_popup.jpg` | 900 × 660 | 551.4 | PC/모바일 메인 팝업(진료시간표) | `http://www.manclinic.com/@2018/img/popup/20260824_popup.jpg` |
| [원본 유지 가능] | `pc_mobile_footer_coun.jpg` | 800 × 152 | 67.6 | 모바일 공통 푸터(핫라인 배너) | `http://www.manclinic.com/mobile/img/footer_coun.jpg` |

### 4-3. [저해상도 경고] 목록 (105건)

| 분류 | 로컬 파일명 (`assets/reference/legacy_images/`) | 해상도 (가로×세로 px) | 용량 (KB) | 사용 페이지 | 원본 URL |
|---|---|---:|---:|---|---|
| [저해상도 경고] | `ext_files_1435895980.jpg` | 450 × 618 | 77.5 | PC:01_hp/hp_09.html | `http://androj-p.com/files/1435895980.jpg` |
| [저해상도 경고] | `ext_files_1441014060.jpg` | 500 × 687 | 86.6 | PC:01_hp/hp_09.html | `http://androj-p.com/files/1441014060.jpg` |
| [저해상도 경고] | `ext_files_1460692553.jpg` | 450 × 302 | 92.5 | PC:01_hp/hp_09.html | `http://androj-p.com/files/1460692553.jpg` |
| [저해상도 경고] | `m_bottom_quick_icon1.png` | 52 × 53 | 2.1 | 모바일 하단 고정바 | `http://m.manclinic.com/img/bottom_quick_icon1.png` |
| [저해상도 경고] | `m_bottom_quick_icon2.png` | 52 × 53 | 1.9 | 모바일 하단 고정바 | `http://m.manclinic.com/img/bottom_quick_icon2.png` |
| [저해상도 경고] | `m_bottom_quick_icon3.png` | 52 × 53 | 1.5 | 모바일 하단 고정바 | `http://m.manclinic.com/img/bottom_quick_icon3.png` |
| [저해상도 경고] | `m_bottom_quick_icon4.png` | 52 × 53 | 2.6 | 모바일 하단 고정바 | `http://m.manclinic.com/img/bottom_quick_icon4.png` |
| [저해상도 경고] | `m_menu.png` | 140 × 140 | 1.4 | 모바일 공통 헤더(햄버거) | `http://m.manclinic.com/img/menu.png` |
| [저해상도 경고] | `m_tel.png` | 140 × 140 | 3.0 | 모바일 공통 헤더(전화) | `http://m.manclinic.com/img/tel.png` |
| [저해상도 경고] | `pc_01_hp_gal_thum_01_01.jpg` | 320 × 170 | 23.7 | PC:01_hp/hp_07.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_01_01.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_01_02.jpg` | 320 × 170 | 25.9 | PC:01_hp/hp_07.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_01_02.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_01_03.jpg` | 320 × 170 | 20.7 | PC:01_hp/hp_07.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_01_03.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_01_04.jpg` | 320 × 170 | 18.3 | PC:01_hp/hp_07.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_01_04.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_02_01.jpg` | 320 × 170 | 15.6 | PC:01_hp/hp_07_02.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_01.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_02_02.jpg` | 320 × 170 | 11.9 | PC:01_hp/hp_07_02.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_02.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_02_03.jpg` | 320 × 170 | 11.5 | PC:01_hp/hp_07_02.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_03.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_02_04.jpg` | 320 × 170 | 11.3 | PC:01_hp/hp_07_02.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_04.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_02_05.jpg` | 320 × 170 | 23.5 | PC:01_hp/hp_07_02.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_05.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_02_06.jpg` | 320 × 170 | 20.6 | PC:01_hp/hp_07_02.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_06.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_02_07.jpg` | 320 × 170 | 36.7 | PC:01_hp/hp_07_02.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_07.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_02_08.jpg` | 320 × 170 | 11.9 | PC:01_hp/hp_07_02.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_08.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_02_09.jpg` | 320 × 170 | 12.2 | PC:01_hp/hp_07_02.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_09.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_02_10.jpg` | 320 × 170 | 12.1 | PC:01_hp/hp_07_02.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_02_10.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_03_01.jpg` | 320 × 170 | 61.8 | PC:01_hp/hp_07_03.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_01.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_03_02.jpg` | 320 × 170 | 60.4 | PC:01_hp/hp_07_03.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_02.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_03_03.jpg` | 320 × 170 | 58.6 | PC:01_hp/hp_07_03.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_03.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_03_04.jpg` | 320 × 170 | 52.3 | PC:01_hp/hp_07_03.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_04.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_03_05.jpg` | 320 × 170 | 54.3 | PC:01_hp/hp_07_03.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_05.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_03_06.jpg` | 320 × 170 | 53.7 | PC:01_hp/hp_07_03.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_06.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_03_07.jpg` | 320 × 170 | 68.7 | PC:01_hp/hp_07_03.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_07.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_03_08.jpg` | 320 × 170 | 69.8 | PC:01_hp/hp_07_03.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_08.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_03_09.jpg` | 320 × 170 | 58.8 | PC:01_hp/hp_07_03.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_09.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_03_10.jpg` | 320 × 170 | 63.5 | PC:01_hp/hp_07_03.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_03_10.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_04_01.jpg` | 320 × 170 | 11.4 | PC:01_hp/hp_07_04.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_04_01.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_04_02.jpg` | 320 × 170 | 11.5 | PC:01_hp/hp_07_04.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_04_02.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_04_03.jpg` | 320 × 170 | 11.7 | PC:01_hp/hp_07_04.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_04_03.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_04_04.jpg` | 320 × 170 | 15.7 | PC:01_hp/hp_07_04.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_04_04.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_04_05.jpg` | 320 × 170 | 30.3 | PC:01_hp/hp_07_04.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_04_05.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_04_06.jpg` | 320 × 170 | 29.8 | PC:01_hp/hp_07_04.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_04_06.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_04_07.jpg` | 320 × 170 | 37.1 | PC:01_hp/hp_07_04.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_04_07.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_04_08.jpg` | 320 × 170 | 23.6 | PC:01_hp/hp_07_04.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_04_08.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_05_01.jpg` | 320 × 170 | 10.0 | PC:01_hp/hp_07_05.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_05_01.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_05_02.jpg` | 320 × 170 | 46.5 | PC:01_hp/hp_07_05.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_05_02.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_05_03.jpg` | 320 × 170 | 20.1 | PC:01_hp/hp_07_05.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_05_03.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_06_01.jpg` | 320 × 170 | 28.3 | PC:01_hp/hp_07_06.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_06_01.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_06_02.jpg` | 320 × 170 | 26.4 | PC:01_hp/hp_07_06.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_06_02.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_06_03.jpg` | 320 × 170 | 26.0 | PC:01_hp/hp_07_06.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_06_03.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_06_04.jpg` | 320 × 170 | 20.3 | PC:01_hp/hp_07_06.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_06_04.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_07_01.jpg` | 320 × 170 | 20.0 | PC:01_hp/hp_07_07.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_07_01.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_07_02.jpg` | 320 × 170 | 26.5 | PC:01_hp/hp_07_07.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_07_02.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_07_03.jpg` | 320 × 170 | 60.4 | PC:01_hp/hp_07_07.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_07_03.jpg` |
| [저해상도 경고] | `pc_01_hp_gal_thum_07_04.jpg` | 320 × 170 | 19.1 | PC:01_hp/hp_07_07.html | `http://www.manclinic.com/@2018/01_hp/img/gal_thum_07_04.jpg` |
| [저해상도 경고] | `pc_01_hp_hp1_0101.jpg` | 500 × 524 | 239.4 | PC:01_hp/hp_01.html | `http://www.manclinic.com/@2018/01_hp/img/hp1_0101.jpg` |
| [저해상도 경고] | `pc_01_hp_hp1_0103.gif` | 504 × 75 | 5.3 | PC:01_hp/hp_01.html | `http://www.manclinic.com/@2018/01_hp/img/hp1_0103.gif` |
| [저해상도 경고] | `pc_01_hp_hp1_doc_sung.jpg` | 500 × 520 | 132.7 | PC:01_hp/hp_01.html | `http://www.manclinic.com/@2018/01_hp/img/hp1_doc_sung.jpg` |
| [저해상도 경고] | `pc_clinic_02_contxt_0313.png` | 280 × 232 | 97.1 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/clinic_02/img/contxt_0313.png` |
| [저해상도 경고] | `pc_common_header_tel.png` | 260 × 85 | 9.1 | PC 공통 헤더(전화/카톡) | `http://www.manclinic.com/@2018/img/common/header_tel.png` |
| [저해상도 경고] | `pc_common_num_bl_01.png` | 24 × 24 | 1.3 | PC:01_hp/hp_04.html, PC:clinic_08/c8_0101.html, PC:clinic_06/c6_0101.html 외 6건 | `http://www.manclinic.com/@2018/img/common/num_bl_01.png` |
| [저해상도 경고] | `pc_common_num_bl_02.png` | 24 × 24 | 1.4 | PC:01_hp/hp_04.html, PC:clinic_08/c8_0101.html, PC:clinic_06/c6_0101.html 외 6건 | `http://www.manclinic.com/@2018/img/common/num_bl_02.png` |
| [저해상도 경고] | `pc_common_num_bl_03.png` | 24 × 24 | 1.4 | PC:01_hp/hp_04.html, PC:clinic_08/c8_0101.html, PC:clinic_06/c6_0101.html 외 6건 | `http://www.manclinic.com/@2018/img/common/num_bl_03.png` |
| [저해상도 경고] | `pc_common_num_bl_04.png` | 24 × 24 | 1.4 | PC:01_hp/hp_04.html, PC:clinic_08/c8_0101.html, PC:clinic_06/c6_0101.html 외 5건 | `http://www.manclinic.com/@2018/img/common/num_bl_04.png` |
| [저해상도 경고] | `pc_common_num_bl_05.png` | 24 × 24 | 1.4 | PC:01_hp/hp_04.html, PC:clinic_08/c8_0101.html, PC:clinic_06/c6_0101.html 외 5건 | `http://www.manclinic.com/@2018/img/common/num_bl_05.png` |
| [저해상도 경고] | `pc_common_num_bl_06.png` | 24 × 24 | 1.4 | PC:01_hp/hp_04.html, PC:clinic_06/c6_0101.html, PC:clinic_02/c2_0301.html 외 2건 | `http://www.manclinic.com/@2018/img/common/num_bl_06.png` |
| [저해상도 경고] | `pc_common_num_bl_07.png` | 24 × 24 | 1.4 | PC:01_hp/hp_04.html, PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/img/common/num_bl_07.png` |
| [저해상도 경고] | `pc_common_num_bl_08.png` | 24 × 24 | 1.4 | PC:01_hp/hp_04.html | `http://www.manclinic.com/@2018/img/common/num_bl_08.png` |
| [저해상도 경고] | `pc_common_num_bl_09.png` | 24 × 24 | 1.4 | PC:01_hp/hp_04.html | `http://www.manclinic.com/@2018/img/common/num_bl_09.png` |
| [저해상도 경고] | `pc_common_num_wh_01.png` | 24 × 24 | 1.3 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/img/common/num_wh_01.png` |
| [저해상도 경고] | `pc_common_num_wh_02.png` | 24 × 24 | 1.4 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/img/common/num_wh_02.png` |
| [저해상도 경고] | `pc_common_num_wh_03.png` | 24 × 24 | 1.4 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/img/common/num_wh_03.png` |
| [저해상도 경고] | `pc_common_num_wh_04.png` | 24 × 24 | 1.3 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/img/common/num_wh_04.png` |
| [저해상도 경고] | `pc_common_num_wh_05.png` | 24 × 24 | 1.4 | PC:clinic_02/c2_0301.html | `http://www.manclinic.com/@2018/img/common/num_wh_05.png` |
| [저해상도 경고] | `pc_common_point_circle3.png` | 200 × 100 | 14.2 | PC:clinic_08/c8_0101.html, PC:clinic_08/c8_0201.html, PC:clinic_08/c8_030101.html 외 1건 | `http://www.manclinic.com/@2018/img/common/point_circle3.png` |
| [저해상도 경고] | `pc_common_quick_icon1.png` | 90 × 200 | 2.9 | PC 공통 퀵메뉴 | `http://www.manclinic.com/@2018/img/common/quick_icon1.png` |
| [저해상도 경고] | `pc_common_quick_icon2.png` | 90 × 200 | 2.4 | PC 공통 퀵메뉴 | `http://www.manclinic.com/@2018/img/common/quick_icon2.png` |
| [저해상도 경고] | `pc_common_quick_icon3.png` | 90 × 200 | 3.0 | PC 공통 퀵메뉴 | `http://www.manclinic.com/@2018/img/common/quick_icon3.png` |
| [저해상도 경고] | `pc_common_quick_icon4.png` | 90 × 200 | 3.5 | PC 공통 퀵메뉴 | `http://www.manclinic.com/@2018/img/common/quick_icon4.png` |
| [저해상도 경고] | `pc_common_quick_icon5.png` | 90 × 200 | 4.2 | PC 공통 퀵메뉴 | `http://www.manclinic.com/@2018/img/common/quick_icon5.png` |
| [저해상도 경고] | `pc_common_quick_icon6.png` | 90 × 105 | 4.4 | PC 공통 퀵메뉴 | `http://www.manclinic.com/@2018/img/common/quick_icon6.png` |
| [저해상도 경고] | `pc_common_quick_tit.png` | 100 × 42 | 2.0 | PC 공통 퀵메뉴 | `http://www.manclinic.com/@2018/img/common/quick_tit.png` |
| [저해상도 경고] | `pc_main_depth5_1.png` | 350 × 400 | 154.3 | PC:index.html | `http://www.manclinic.com/@2018/img/main/depth5_1.png` |
| [저해상도 경고] | `pc_main_depth5_2.png` | 350 × 400 | 109.2 | PC:index.html | `http://www.manclinic.com/@2018/img/main/depth5_2.png` |
| [저해상도 경고] | `pc_main_depth5_3.png` | 350 × 400 | 142.7 | PC:index.html | `http://www.manclinic.com/@2018/img/main/depth5_3.png` |
| [저해상도 경고] | `pc_main_depth5_4.png` | 350 × 400 | 123.0 | PC:index.html | `http://www.manclinic.com/@2018/img/main/depth5_4.png` |
| [저해상도 경고] | `pc_upload_masscom2_UP1164322410.jpg` | 70 × 96 | 19.9 | PC:01_hp/hp_05.html, PC:01_hp/hp_03.html | `http://www.manclinic.com/upload/masscom2_UP1164322410.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1023316243.jpg` | 400 × 291 | 114.4 | PC:01_hp/hp_03.html | `http://www.manclinic.com/upload/masscom_UP1023316243.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1032139786.jpg` | 300 × 300 | 84.6 | PC:01_hp/hp_05.html | `http://www.manclinic.com/upload/masscom_UP1032139786.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1036256570.jpg` | 240 × 170 | 39.2 | PC:01_hp/hp_05.html | `http://www.manclinic.com/upload/masscom_UP1036256570.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1065788195.jpg` | 400 × 291 | 122.9 | PC:01_hp/hp_03.html | `http://www.manclinic.com/upload/masscom_UP1065788195.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1076062938.jpg` | 400 × 300 | 103.8 | PC:01_hp/hp_03.html | `http://www.manclinic.com/upload/masscom_UP1076062938.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1181204351.jpg` | 450 × 857 | 1131.6 | PC:01_hp/hp_03.html | `http://www.manclinic.com/upload/masscom_UP1181204351.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1201603374.jpg` | 450 × 432 | 570.4 | PC:01_hp/hp_03.html | `http://www.manclinic.com/upload/masscom_UP1201603374.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1204818082.jpg` | 300 × 300 | 70.0 | PC:01_hp/hp_05.html | `http://www.manclinic.com/upload/masscom_UP1204818082.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1219835252.jpg` | 400 × 291 | 130.7 | PC:01_hp/hp_03.html | `http://www.manclinic.com/upload/masscom_UP1219835252.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1235445630.jpg` | 300 × 275 | 79.1 | PC:01_hp/hp_05.html | `http://www.manclinic.com/upload/masscom_UP1235445630.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1255001047.jpg` | 400 × 900 | 1054.7 | PC:01_hp/hp_03.html | `http://www.manclinic.com/upload/masscom_UP1255001047.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1271116837.jpg` | 300 × 300 | 76.1 | PC:01_hp/hp_05.html | `http://www.manclinic.com/upload/masscom_UP1271116837.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1334690092.jpg` | 300 × 300 | 44.3 | PC:01_hp/hp_05.html | `http://www.manclinic.com/upload/masscom_UP1334690092.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1357493078.jpg` | 300 × 300 | 76.1 | PC:01_hp/hp_05.html | `http://www.manclinic.com/upload/masscom_UP1357493078.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1365301840.jpg` | 300 × 420 | 66.7 | PC:01_hp/hp_05.html, PC:01_hp/hp_03.html | `http://www.manclinic.com/upload/masscom_UP1365301840.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1371269972.jpg` | 300 × 300 | 53.5 | PC:01_hp/hp_05.html | `http://www.manclinic.com/upload/masscom_UP1371269972.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1372973852.jpg` | 450 × 327 | 120.4 | PC:01_hp/hp_03.html | `http://www.manclinic.com/upload/masscom_UP1372973852.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1381628865.jpg` | 300 × 289 | 78.9 | PC:01_hp/hp_05.html | `http://www.manclinic.com/upload/masscom_UP1381628865.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1385093777.jpg` | 300 × 272 | 58.0 | PC:01_hp/hp_05.html | `http://www.manclinic.com/upload/masscom_UP1385093777.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1390204537.jpg` | 500 × 375 | 549.4 | PC:01_hp/hp_03.html | `http://www.manclinic.com/upload/masscom_UP1390204537.jpg` |
| [저해상도 경고] | `pc_upload_masscom_UP1405937464.jpg` | 450 × 619 | 198.4 | PC:01_hp/hp_03.html | `http://www.manclinic.com/upload/masscom_UP1405937464.jpg` |

---

## 5. 병원 사실 확인 요청서 (G1) 및 시안 제작용 임시 기준안

기존 PC·모바일 홈페이지에서 발견된 11개 불일치·오류 항목에 대해 병원 측 최종 확인이 필요한 질문표(G1)와, 답변 회신 전 시안 제작에 적용할 임시 기준안입니다.

### 5-1. [G1] 병원 사실 확인 질문표

| 번호 | 확인 영역 | 기존 사이트 불일치 현황 | 병원 측 확인 요청 질문 | 시안 제작용 임시 기준안 (회신 전 적용) |
|---|---|---|---|---|
| G1-01 | 의료진 구성 (1인 vs 2인) | PC 의료진 소개(`hp_01.html`)는 박천진 원장 단독 1인이나, 2026.08.10 팝업(`20260810_popup.jpg`)에 이웅희 원장(2026.08.21 진료 시작) 영입 안내가 존재함 | 신규 홈페이지 의료진 소개에 **박천진 원장·이웅희 원장 2인 체제**로 반영할지, 이웅희 원장의 공식 프로필 사진 원본 및 약력 텍스트를 제공해 주실 수 있는지 확인 부탁드립니다. | **2인 체제(박천진·이웅희 원장) 기준**으로 레이아웃 구성. 박천진 원장은 `hp_01.html` 원문 유지, 이웅희 원장은 `20260810_popup.jpg` 표기 약력 반영 + `[고해상도 원본 사진 교체 필요]` 표기 |
| G1-02 | 진료시간 및 휴진일 | PC 본문(`hp_04.html`·메인 `.depth7`)은 **월화목금 9~12/14~17, 수요일 휴진, 토 9~12:30**으로 표기된 반면, 2026.08.24 팝업(`20260824_popup.jpg`)은 **이웅희(월화수금 진료/목 휴진/토 오전) · 박천진(월~금 오전, 화수금 오후/월·목 오후 휴진/토 오전)**으로 상이함 | 현재 실제 운영 중인 공식 진료시간표와 휴진일이 **2026.08.24 팝업 기준(의료진별 요일 진료표)**이 맞는지 확인 부탁드립니다. | **가장 최신인 2026.08.24 팝업 기준(2인 요일별 진료시간표)**을 메인·진료안내·푸터에 통일 적용하고 `[병원 최종 확인 후 확정]` 주석 표기 |
| G1-03 | 상담 가능 시간 (3종 혼재) | ① PC 헤더·`hp_04`·`hp_08`: 월~금 9:00~18:00 / 토 9:00~13:00 ② PC 메인 카드 `depth5_2.png`: 월~토 8:00~20:00 ③ 모바일 푸터 `footer_coun.jpg`: 24시간 HOTLINE | 전화·카카오톡 공식 상담시간은 어느 기준(평일 9~18시/토 9~13시, 8~20시, 24시간)으로 통일해야 하는지 확인 부탁드립니다. | **평일 09:00~18:00 / 토 09:00~13:00** (상담시간 외 문자·카톡 순차 답변) 기준으로 통일 (PC 헤더·진료안내·오시는길 3곳 일치 기준) |
| G1-04 | 전화번호 (휴대폰 2종 불일치) | 대표 `02-3018-7575`, 상담 휴대폰 `010-9190-7575`로 표시되나, 모바일 푸터 이미지맵 링크만 **`tel:01031688275`**로 연결됨 | 실제 사용하는 상담 휴대폰 번호가 `010-9190-7575`가 맞는지, `010-3168-8275`는 구 번호(삭제 대상)인지 확인 부탁드립니다. | 대표전화 **`02-3018-7575`**, 상담 휴대폰/문자 **`010-9190-7575`**, 카카오톡 **`gnjurology`**로 전 페이지 통일 (`010-3168-8275` 제외) |
| G1-05 | 통합 메뉴 범위 (PC vs 모바일) | PC는 대메뉴 9개·하위 35개+ 페이지 제공, 모바일은 6개 질환 랜딩+상담+비급여만 제공(병원소개·전립선세부·성기능·정관·포경·FAQ·약관 누락) | 단일 반응형 홈페이지에서는 **PC 전체 메뉴(병원소개·전체 진료과목·상담/예약·FAQ·약관)**를 모바일에서도 모두 제공하는 구조로 통합해도 될지 확인 부탁드립니다. | **PC 전체 메뉴 구조를 단일 반응형 기준**으로 채택하고, 모바일 드로어 누락(`요로결석`)·오기재(`landing5`→남성확대수술) 오류를 모두 정상화 |
| G1-06 | PC GNB 조루증 링크 및 숨은 페이지 | PC GNB `조루증이란/원인진단/치료` 3개 메뉴가 모두 `c6_0101.html`로 연결되나 서버에 `c6_0201.html`, `c6_0301.html` 존재. 또한 `hp_03.html`, `hp_06.html`, `c8_030101/02.html` 잔존 | `c6_0201.html`(원인·진단), `c6_0301.html`(치료) 및 `c8_030101/02.html`(요로결석 치료 하위)을 정식 메뉴에 복구할지, 미사용 페이지(`hp_03`, `hp_06`)는 제외할지 확인 부탁드립니다. | `c6_0201`, `c6_0301`, `c8_030101/02`는 **정식 서브 페이지로 복구·연결**하고, GNB 미노출 잔존 페이지(`hp_03`, `hp_06`)는 시안 범위에서 제외 |
| G1-07 | 메인 카드 '논문 학술발표' 링크 불일치 | PC 메인 카드3 라벨은 `박천진원장 논문 학술발표`이나 실제 연결 페이지는 `Thanks Letter`(`hp_09.html`, 환자 감사편지, 2018년 마지막 게시물) | 해당 영역을 **Thanks Letter(환자 감사편지)**로 유지할지, 실제 논문·학술발표 목록으로 교체할지(또는 미사용 시 제외할지) 확인 부탁드립니다. | 실제 콘텐츠에 맞춰 **`Thanks Letter (환자 감사편지)`** 또는 **`교육자 박천진 / 대외활동`**으로 링크·라벨 일치 처리 |
| G1-08 | 상담 게시판 이원화 및 미답변 현황 | `qna.html`(수술상담, 최근 60건 전부 대기 상태), `qna1.html`(공개상담, 2020년 10월 이후 중단), `rev.html`(온라인예약)으로 분산됨 | 구 공개상담(`qna1.html`)을 폐지하고 **수술상담(비공개 Q&A) + 온라인예약** 2개 메뉴로 단순화할지 확인 부탁드립니다. | **수술상담(Meet the expert) + 온라인예약** 2개 메뉴로 통합 구성 (구 `qna1.html` 제외, 시안용 목업 폼·모달 구현) |
| G1-09 | 개인정보·민감정보 동의 및 구형 약관 | PC/모바일 상담·예약 폼 모두 단일 `개인정보취급방침 동의`만 존재(민감정보 별도 동의 없음). `member_01.html`에 구 양식(`주민등록번호`, `넷스케이프`) 문구 잔존 | 상담·예약 폼에 **일반 개인정보 수집 동의 + 민감정보(건강정보) 별도 동의**를 분리 배치하고, 최신 개인정보처리방침 원문을 제공해 주실 수 있는지 확인 부탁드립니다. | 공통 Rules에 따라 **일반 개인정보 / 민감정보(건강정보) 별도 동의 체크박스 분리 배치** + `[법무 검토 후 최종 확정]` 주석 삽입 |
| G1-10 | 외부 도메인 혼용 및 FAQ 오분류 | 모바일 하단바 오시는길이 `penisdoctor.co.kr`로 연결되고, `faq_04.html`(고환관련 FAQ)에 전립선비대증·홀렙 질문이 수록되어 있음 | 모든 내부 링크를 단일 도메인(`manclinic.com`) 상대경로로 통일하고, `faq_04.html`의 카테고리명/질문 분류를 실제 내용에 맞게 재정비해도 될지 확인 부탁드립니다. | 모든 링크를 **단일 프로젝트 상대경로**로 통일, FAQ는 실제 질문 주제에 맞춰 재분류(원문 Q&A 텍스트는 보존) |
| G1-11 | 저해상도 이미지 및 원본 사진 교체 | 박천진 원장 프로필 사진(`hp1_0101.jpg`, 500×524px) 등 105건이 가로 600px 미만 저해상도이며, `sub_topimg.jpg`/`gnbborder.png` 2건은 404 깨짐. 또한 모바일 `landing1~6`은 100% 통이미지임 | 의료진(박천진·이웅희 원장) 고해상도 원본 사진 및 최신 병원 내부 사진 제공 가능 여부를 확인 부탁드립니다. | 600px 이상 원본(시설 30장, 메인 비주얼, 본문 도식)은 최대한 재활용하고, 저해상도 인물/신규 사진 필요 영역은 기존 자산 참조 또는 `[임시 이미지 - 실제 촬영본 교체 필요]` 표시 |

### 5-2. 시안 제작용 임시 기준안 요약 (병원 회신 전 적용 원칙)
1. **의료진·진료시간:** 가장 최신 공지인 **2026.08.10 / 2026.08.24 팝업 기준(박천진·이웅희 2인 체제 및 요일별 진료시간표)**을 적용합니다.
2. **연락처·상담시간:** 대표 `02-3018-7575`, 상담 휴대폰 `010-9190-7575`, FAX `02-516-2030`, 카카오톡 `gnjurology`, 상담시간 `평일 09:00~18:00 / 토 09:00~13:00`으로 통일합니다.
3. **정보구조(IA):** PC 전체 9개 대메뉴 구조를 단일 반응형 기준으로 통합하되, PC GNB 오류(`c6_0201`, `c6_0301`)와 모바일 누락/오기재(`landing5`, `landing6`)를 정상화하고, 미운영 구 게시판(`qna1.html`) 및 404 상대경로를 정리합니다.
4. **컴플라이언스:** 모든 상담·예약 폼에 일반 개인정보 동의 + 민감정보(건강정보) 별도 동의 체크박스를 분리 배치하고 `[법무 검토 후 최종 확정]` 주석을 표기합니다.
5. **이미지 자산:** `assets/reference/legacy_images/`에 확보된 `[원본 유지 가능]` 215건을 1차 활용하고, `[저해상도 경고]` 영역 중 고해상도 인물/시설 사진이 필요한 위치는 `[임시 이미지 - 실제 촬영본 교체 필요]`로 명시합니다.
