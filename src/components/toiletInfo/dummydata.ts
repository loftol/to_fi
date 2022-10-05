interface ReviewData {
  name: string;
  main: string;
}

interface ToiletData {
  name: string;
  address: string;
  review: Array<ReviewData>;
}

const toiletArray: Array<ToiletData> = [
  {
    name: '동의',
    address: '서울시 마포구 광성로 6길 56',
    review: [
      {name: '우진', main: '최악의 화장실이었어요'},
      {name: '세진', main: '최고의 화장실이었어요'},
    ],
  },
];

export {ReviewData, ToiletData};
export default toiletArray;
