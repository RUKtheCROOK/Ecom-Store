let catalog = [
  {
    title: "apples",
    category: "fruit",
    price: Number("16.25"),
    image: "/images/apples.png",
    _id: "1",
  },
  {
    title: "oranges",
    category: "fruit",
    price: Number("1.3"),
    image: "/images/oranges.png",
    _id: "2",
  },
  {
    title: "bananas",
    category: "fruit",
    price: Number("1.4"),
    image: "/images/bananas.png",
    _id: "3",
  },
  {
    title: "pears",
    category: "fruit",
    price: Number("1.5"),
    image: "/images/pears.png",
    _id: "4",
  },
  {
    title: "grapes",
    category: "fruit",
    price: Number("1.6"),
    image: "/images/grapes.png",
    _id: "5",
  },
  {
    title: "carrots",
    category: "vegetable",
    price: Number("1.7"),
    image: "/images/carrots.png",
    _id: "6",
  },
  {
    title: "celery",
    category: "vegetable",
    price: Number("1.8"),
    image: "/images/celery.png",
    _id: "7",
  },
];

class DataService {
  getData() {
    return catalog;
  }
}

export default DataService;
