# 맞춤형 운동 관리 플래폼 코치코치
<img width="4096" alt="서비스 소개 (최신)@2x (2)" src="https://github.com/user-attachments/assets/28b7e428-b958-43d2-a73e-0b93af6b31f0" /><br>


- **🌐 배포 URL :** [https://coach-coach.site/](https://coach-coach.site/)
- **🗓️ 1차 프로젝트 기간 :** 2024-07-24 ~ 2024-8-29
- **🗓️ 2차 프로젝트 기간 :** 2024-09-02 ~ 2024-11-21

<br><br>

## 프로젝트 소개
> 코치코치는 회원과 운동 코치를 연결하는 스마트 플랫폼입니다! <br>
개인 맞춤형 코칭과 운동 루틴으로 목표 달성을 도와드립니다.

### 주요 특징
- **코치 & 회원 동시 가능** : 코치로 활동하면서 동시에 다른 코치의 회원으로도 참여가 가능합니다.
- **맞춤형 운동 루틴 작성** : 회원 또는 코치가 맞춤형 운동 루틴을 제공합니다.
- **알림 기능** : 매칭 성공 시 즉시 알림을 제공합니다.
- **운동 기록 관리** : 달력 및 차트로 성과를 추적합니다.
<br><br>

##  FE 팀원
|         **고윤성**          |         **이현철**          |         **하주영**          |
|:--------------------------:|:--------------------------:|:--------------------------:|
| [<img src="https://avatars.githubusercontent.com/u/30286303?v=4" height=150 width=150> <br/> @yoonsaeng](https://github.com/yoonsaeng) | [<img src="https://avatars.githubusercontent.com/u/83640773?v=4" height=150 width=150> <br/> @hcheorii](https://github.com/hcheorii) | [<img src="https://avatars.githubusercontent.com/u/92720304?v=4" height=150 width=150> <br/> @hazzuu123](https://github.com/hazzuu123) |

<br><br>


## 역할 분담
### 😛 하주영
- **UI**
  - 페이지: 홈, 코치 리스트 검색, 상세 코치, 알림 조회, 기록(달력, 선차트)
  - 공통 컴포넌트: 드롭다운, 모달
- **기능**
  - 홈, 코치 리스트, 코치 상세 조회
  - 무한 스크롤
  - 좋아요 등록 및 해제
  - 리뷰 조회, 등록, 수정, 삭제
  - 배포, 커스텀 도메인
  - MSW 세팅

### 😎 고윤성
- **UI**
  - 페이지: 내 루틴, 내 코치 루틴, 루틴 작성, 수정 모달, 매칭 회원 리스트
  - 공통 컴포넌트: 헤더, 푸터
- **기능**
  - 문의/매칭 회원 등록, 조회, 삭제
  - 루틴 조회
  - 루틴, 카테고리, 액션 추가, 수정 및 삭제
  - Github actions
  - Sentry, SEO 세팅
  
### 🙄 이현철
- **UI**
  - 페이지: 로그인, 회원가입, 마이 페이지, 코치 전용 마이 페이지
  - 공통 컴포넌트: CSS 테마 
- **기능**
  - 회원가입, 로그인
  - 마이페이지 조회, 수정
  - 토큰 재발급
  - 닉네임, 이메일 중복 확인
  - 로그아웃, 회원탈퇴
  - Storybook 세팅
<br><br>
##  기술 스택
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1725258882635?alt=media&token=1eb5bb92-64e0-450a-83fe-df3be2975a39)](https://github.com/msdio/stackticon)
<br><br>

## 브랜치 전략
- **트렁크 기반 전략**
  ![trunk](https://github.com/user-attachments/assets/71aaa0ac-9cef-4a82-a6bf-4c30d11bab52)
  - 트렁크 기반 전략은 ```main```이라는 주 브랜치 하나만 운영하며, ```git flow```과 다르게 ```dev``` 브랜치를 두지 않고, 신규 기능 브랜치는 바로 ```main```브랜치로 병합합니다
  - 작업 단위를 더 잘게 쪼개어, 더 자주 커밋하고 병합합니다
  - 선택한 이유:
      - 브랜치 관리에 드는 시간과 노력이 절약되어,짧은 프로젝트에 적합하다고 판단
      - 배포 프로세스가 간단해져서, 더욱 자주 배포가 가능
<br><br>


## 페이지별 기능
### [일반 계정 회원가입] 
1. 각 필드는 실시간 유효성 검사를 진행하며, 이메일은 중복 확인을 반드시 거쳐야 합니다.
   👉 모든 조건을 충족할 경우 회원가입 버튼이 활성화됩니다.
2. 회원가입에 성공하면 회원가입 성공 페이지로 이동합니다.
3. 회원가입 후 기본 권한은 회원으로 설정되며 코치 권한은 부여되지 않습니다.

| 필드        | 조건                                                                 |
|-------------|----------------------------------------------------------------------|
| 닉네임       | 숫자, 영어, 완성형 한글(가-힣)만 포함 가능, 2~10자 이내               |
| 비밀번호     | 알파벳, 숫자, 특수문자가 각각 최소 1개 포함, 8~20자 이내               |
| 이메일       | 올바른 이메일 형식                                                  |
| 공통 조건    | 각 필드는 빈 값일 수 없음                                             |

|일반 계정 회원가입|
|---------------|
|<img src="https://github.com/user-attachments/assets/1a4fef3b-69e4-4537-97b3-0da00c1aebf1" alt="signup" width="300">|

### [로그인] 
1. 이메일 또는 비밀번호는 실시간 유효성 검사를 진행하며, 조건을 충족시키지 못할 경우 경고 문구가 나타납니다.
2. 로그인에 성공하면 zustand 상태 관리 스토어에 로그인 상태를 업데이트합니다.

|로그인|
|---------------|
|<img src="https://github.com/user-attachments/assets/2b0c9273-52a4-490c-ae70-e0a471506485" alt="login" width="300">|

### [로그아웃]
1. 마이페이지의 계정관리 > 로그아웃 버튼을 클릭하면 확인창이 뜹니다.
2. 로그아웃 시 로그인 페이지로 이동합니다.
   
### [회원 탈퇴]
1. 마이페이지의 계정관리 > 회원탈퇴 버튼을 클릭하면 확인창이 뜹니다.
2. 코치가 탈퇴하면 코치가 작성한 루틴은 내 루틴으로 이동합니다.

### [프로필]
- **공통 사항**
1. 내 프로필과 코치 전용 프로필은 **탭**으로 전환이 가능합니다.
2. 주소 : 다음 검색을 이용하여 구 주소를 저장하고, 세부 정보를 선택 사항으로 입력받습니다.
3. 코칭 종목 : 여러 개 선택할 수 있습니다.
4. 이미지 :  5MB 이하의 크기이며, 특정 확장자(JPG, PNG, GIF 등)를 만족해야 합니다.
5. 필드 : 이메일과 닉네임은 필수, 나머지는 선택 사항입니다.

|프로필 탭 전환|
|---------------|
|<img src="https://github.com/user-attachments/assets/5c837b05-9deb-459f-b0e8-35e2142689f3" alt="profile" width="300">|

- **내 프로필**
1. 마이페이지의 내 프로필 버튼을 클릭하여 진입할 수 있습니다.
2. 이미지, 닉네임, 성별, 관심 종목, 주소, 자기소개를 입력하고 수정할 수 있습니다.
3. 등록에 성공하면, 이후 매칭된 코치가 내 프로필을 확인할 수 있습니다.

|내 프로필|
|---------------|
|<img src="https://github.com/user-attachments/assets/c1d097d2-2afe-4472-b929-e58395eee7b8" alt="my profile" width="300">|

- **코치 전용 프로필**
1. 코치 최초 등록할 때는 먼저 전환 버튼을 눌러야합니다.
2. 코칭 종목과 시설 주소, 문의가능시간, 오픈 카카오톡 링크, 자기소개, 정보 공개 선택(체크박스)를 입력하고 수정할 수 있습니다.
3. 등록에 성공하면, 정보 공개 선택에 따라 코치 카테고리 페이지에 노출됩니다.

|코치 전용 프로필|
|---------------|
|<img src="https://github.com/user-attachments/assets/d0fde2d5-3164-4f16-aca9-4368a7742b73" alt="coach profile" width="300">|


## [홈 화면]
1. **종목 리스트** : 12가지의 운동 종목들을 클릭하면, 해당 종목을 코칭하는 코치 리스트 페이지로 이동합니다.
2. **이번주 인기 코치 TOP3** : 최근 일주일 간 좋아요 수가 가장 많은 코치 3명을 보여줍니다.

|홈|
|---|
|<img src="https://github.com/user-attachments/assets/80ecef39-7936-4fb1-9f8b-b301aa819dc3" alt="home" width="300">|

## [코치 리스트]
- 코치 리스트를 **무한 스크롤**로 끊김없이 보여줍니다.
- 원하는 **정렬순**, **운동 종목**, **성별**에 맞는 필터링된 리스트를 제공합니다.
  - 정렬 순 : 최신순, 리뷰순, 좋아요순, MY(내가 좋아요 누른 코치)
  - 종목 : 12가지의 종목
- **검색**을 할 수 있습니다.

|정렬순, 운동 종목 선택|성별 선택|검색했을 때|
|---------------|---------------|-----------|
|<img src="" alt="coach profile" width="300">|<img src="" alt="coach profile" width="300">|<img src="https://github.com/user-attachments/assets/b4e2b898-5f7d-46b0-a43b-6cfeb738cb46" alt="search" width="300">|

### ✔️ 정렬 필터링 
- 최신순, 리뷰순, 좋아요순, MY(관심코치) 순으로 필터링 할 수 있습니다.
- 기본값은 최신순입니다! 제일 최근에 코치 프로필을 등록/수정한 코치부터 볼 수 있어요.
### ✔️ 종목 필터링 
- 원하는 종목을 필터링하여 코치 리스트를 볼 수 있습니다. 
- 여러분이 관심있는 종목을 가르치는 코치를 찾아볼까요?

## 📌 코치 디테일
![review](https://github.com/user-attachments/assets/62e26072-bbe2-413d-af77-23a9f6d9439d)
### ✔️ 카카오톡 문의
- 코치가 코치 프로필에 등록한 오픈 카카오톡 링크로 들어갈 수 있습니다.
- 이 기능은 추후에 채팅 서비스를 도입하면 사라집니다. 
- 조금만 기다려주세요!

### ✔️ 매칭 신청
- 코치와 충분한 대화 후 매칭을 신청하고 싶다면 `코치님께 매칭 신청하기` 버튼을 눌러보세요!
- 코치와 매칭되면, 코치가 직접 루틴을 짜주는 등 다양한 기능을 즐길 수 있답니다 

### ✔️ 리뷰 작성
- 다른 사용자들을 위해 리뷰를 남겨주세요!
- 여러분의 리뷰는 다른 사용자에게 큰 도움이 될 것입니다.
- 리뷰 테러를 방지하기 위해, 리뷰는 매칭을 신청한 코치에게만 작성할 수 있습니다!
- 솔직한 건 좋되, 무분별한 비난은 자제❌부탁드려요! 

## 📌 루틴 페이지
![routine]()
- 루틴 페이지에는 내 루틴과 내 코치 루틴이 있습니다. 

### ✔️ 내 루틴
![myRoutine]()
- 사용자 본인이 자신만을 위한 루틴을 작성할 수 있습니다.
- 루틴을 작성할 때에는 루틴 이름과 종목을 선택해야 합니다.
- 루틴으로 들어가면 카테고리를 추가할 수 있습니다.
  - 카테고리 추가 시에는 카테고리 이름이 필수 입력값입니다.
  - 해당 카테고리 안에 세부적인 운동을 추가할 수 있습니다. 
    - 운동명을 제외한 나머지 필드값은 선택입니다! 
    - 본인의 기호에 맞게 작성해보세요! (ex: 10분 3세트, 10회 2세트)
  - 해당 카테고리 하위의 운동을 모두 완료하면 체크표시를 눌러보세요!
  - 완료된 운동은 기록페이지에서도 볼 수 있습니다! 
  - 완료 여부는 자정이 지나면 초기화되니 꼬옥 바로바로 체크해주세요!

### ✔️ 내 코치 루틴 
![coachRoutine]()
- 내 코치 루틴을 클릭하면 매칭된 코치와 매칭 진행 중인 코치를 볼 수 있습니다.
- 매칭된 코치를 클릭하면, 해당 코치가 작성해준 루틴을 볼 수 있습니다
- 코치가 작성해준 루틴을 보고, 운동해볼까요? 

## 📌 알림 페이지
![notification](https://github.com/user-attachments/assets/d3d0a6a4-efcb-4472-ba67-be412f62a502)
- 알림 페이지에서 알림을 볼 수 있습니다.
- 확인한 알림은 개별 삭제할 수 있습니다.
- 전체 알림을 확인했다면, 전체 삭제도 가능합니다!

### ✔️ 회원
- 회원의 경우 아래와 같은 상황에서 알림이 옵니다!
  - 코치가 매칭 신청을 수락했을 때
  - 코치가 매칭 신청을 거절했을 때
  - 코치가 매칭 회원에서 삭제했을 때
### ✔️ 코치 
- 코치의 경우 아래와 같은 상황에서 알림이 옵니다!
  - 회원이 리뷰를 남겼을 때
  - 회원이 매칭을 신청했을 때

## 📌 매칭 회원 리스트 
![matchingList](https://github.com/user-attachments/assets/06a8e1ce-daf6-4571-9add-3b5a57141127)
- 매칭 회원 리스트에서 매칭된 회원과 매칭 신청한 회원을 볼 수 있습니다.
### ✔️ 매칭 신청 수락/거절
- 매칭을 신청한 회원(문의 회원)과 충분한 대화 후 해당 회원을 코칭하고 싶으면 해당 회원을 클릭한 후 `회원 추가` 버튼을 눌러주세요!
- 만약, 해당 회원을 코칭하기 어려울 것 같다면 아쉽지만 다음을 기약하며 해당 회원을 클릭한 후 `거절` 버튼을 눌러주세요..
### ✔️ 매칭 회원 삭제
- 매칭된 회원과 더 이상 매칭을 이어가고 싶지 않다면 `삭제` 버튼을 눌러주세요..
- 일방적인 삭제는 자제❌해주세요!! 
### ✔️ 회원 루틴 작성 (TODO 위치 선정)
- 내 회원에서 회원 클릭 후 `루틴 작성` 버튼을 누르면 해당 회원의 루틴을 작성할 수 있는 페이지로 이동하게 됩니다.
- 내 루틴에서 루틴 작성하는 것과 마찬가지로 루틴, 카테고리, 운동을 작성할 수 있습니다 
  - 운동 가이드를 적어주면 회원이 더욱 쉽게 운동할 수 있겠죠?
  - 회원에게 알맞은 루틴을 작성해주세요! 수정도 가능하니, 걱정하지마세요~
  - 만약 한 회원에게 여러 종목을 가르친다면 새로운 루틴도 추가 가능하니, 여러분의 코칭 실력을 마음껏 뽐내보세요!


## 📌 기록 페이지
![userRecord](https://github.com/user-attachments/assets/4cca46c7-7f61-4412-855a-c92e6b7fe97c)
- 기록 페이지에서 운동 완료한 날을 도장 유무로 확인할 수 있습니다!
  - 이번 달을 도장으로 다 채워볼까요? 파이팅!
- 아래 차트를 통해 신체 기록도 볼 수 있습니다
  - 그래프를 통해 더욱 한 눈에 볼 수 있는 신체 정보로 목표를 달성해보세요!
  - 탭을 눌러서 원하는 값을 볼 수 있습니다 
### ✔️ 신체 기록 작성
- 신체 기록을 작성하고 싶다면 해당 날짜를 클릭해보세요!
- `변경` 버튼을 누른 후, 신체 기록을 입력할 수 있습니다.
- `저장` 버튼 누르는 거 잊지마세요! 원하는 기록만 저장해도 좋으니 신체 기록도 꾸준히 남겨보아요!

### ✔️ 기록 디테일 페이지 조회 
- 날짜를 클릭하면 기록 디테일 페이지를 조회할 수 있어요
- 해당 날짜에 완료한 운동과 기록한 신체 정보를 볼 수 있어요!




