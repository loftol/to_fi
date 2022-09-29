# to_fi

toilet finder <br>
***그저 화장실을 찾아줄 뿐인 프로젝트***

## set up this project

```
npm i yarn
yarn install
yarn add react-native -g
yarn add react-native-cli -g
```

## run this project

처음 실행한다면 최상위 디렉토리에
localInfo.ts 파일 생성 후

```
const localInfo = {
  hostIp: '자기 ip 및 port(map web 쪽에서 사용하는 ip)',
};

export default localInfo;
```
위와 같은 코드 추가하고,

.env 파일도 추가한 후
```
HOST='hostIp에 써놓은 거랑 같은 ip'
```

webapp 쪽에도 .env 파일 추가해주고
```
REACT_APP_KAKAO_KEY=acb011fff6bab2627326827ba2115276
HOST=0.0.0.0
```
이렇게 작성하면 됨

If you are devloping for android then
```
yarn android
```
**android studio 설치하고, 가상 디바이스까지 만들어진 상태에서 android studio가 켜져있는 중에 실행시켜야 정상작동**

or ios then
```
yarn ios
```

## extensions

1. prettier
1. eslint

## purpose

react-native, node.js 등을 이용하는 앱 개발 도전하기
