const repairs = [
  { id: 1, item: "Lamp", done: false },
  { id: 2, item: "Bike", done: true }
];

const openItems = repairs
  .filter(repair => !repair.done)
  .map(repair => repair.item.toUpperCase());

console.log(openItems);
console.log(repairs[0].item);