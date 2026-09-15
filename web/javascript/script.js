const repairs = [
  { id: 1, item: "Lamp", done: false },
  { id: 2, item: "Bike", done: true }
];

const openItems = repairs
  .filter(repair => !repair.done)
  .map(repair => repair.item.toUpperCase());


function openNames(repairs) {
    return repairs.filter(r => !r.done).map(r => r.item);
}

const result = openNames(repairs);

console.log(openItems);
console.log(repairs[0].item);
console.log(result === repairs)