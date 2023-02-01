let catalog = [
  {
    title: "apples",
    category: "fruit",
    price: Number("16.25"),
    image: "https://picsum.photos/151/150",
    _id: "1",
  },
  {
    title: "oranges",
    category: "fruit",
    price: Number("1.3"),
    image: "https://picsum.photos/150/151",
    _id: "2",
  },
  {
    title: "bananas",
    category: "fruit",
    price: Number("1.4"),
    image: "https://picsum.photos/152/150",
    _id: "3",
  },
  {
    title: "pears",
    category: "fruit",
    price: Number("1.5"),
    image: "https://picsum.photos/150/152",
    _id: "4",
  },
  {
    title: "grapes",
    category: "fruit",
    price: Number("1.6"),
    image: "https://picsum.photos/153/150",
    _id: "5",
  },
  {
    title: "carrots",
    category: "vegetable",
    price: Number("1.7"),
    image: "https://picsum.photos/150/153",
    _id: "6",
  },
  {
    title: "celery",
    category: "vegetable",
    price: Number("1.8"),
    image: "https://picsum.photos/154/150",
    _id: "7",
  },
];

class DataService {
  getData() {
    return catalog;
  }
}

export default DataService;
