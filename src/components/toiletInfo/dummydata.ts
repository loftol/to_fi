interface ReviewData {
  id: number;
  name: string;
  main: string;
}

interface ToiletData {
  id: number;
  name: string;
  address: string;
  review: Array<ReviewData>;
}

const toiletArray: Array<ToiletData> = [
  {
    id: 1,
    name: '멋진 화장실',
    address: '서울시 마포구 광성로 6길 56',
    review: [
      {id: 1, name: '우진', main: '최악의 화장실이었어요'},
      {id: 2, name: '세진', main: '최고의 화장실이었어요'},
    ],
  },
  {
    id: 2,
    name: '예쁜 화장실',
    address: '서울시 마포구 광성로 6길 57',
    review: [
      {id: 1, name: '우진', main: '최악의 화장실이었어요'},
      {id: 2, name: '세진', main: '최고의 화장실이었어요'},
    ],
  },
  {
    id: 3,
    name: '더러운 화장실',
    address: '서울시 마포구 광성로 6길 58',
    review: [
      {id: 1, name: '우진', main: '최악의 화장실이었어요'},
      {id: 2, name: '세진', main: '최고의 화장실이었어요'},
    ],
  },
  {
    id: 4,
    name: '깨끗한 화장실',
    address: '서울시 마포구 광성로 6길 59',
    review: [
      {id: 1, name: '우진', main: '최악의 화장실이었어요'},
      {id: 2, name: '세진', main: '최고의 화장실이었어요'},
    ],
  },
  {
    id: 5,
    name: '최신 화장실',
    address: '서울시 마포구 광성로 6길 60',
    review: [
      {id: 1, name: '우진', main: '최악의 화장실이었어요'},
      {id: 2, name: '세진', main: '최고의 화장실이었어요'},
    ],
  },
];

export {ReviewData, ToiletData};
export default toiletArray;
