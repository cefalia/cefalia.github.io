let heroItems = Array.prototype.slice.call(document.querySelector('.hero').children);
let currentItemIndex = 1;

function changeHeroItem() {
  currentItem = heroItems[currentItemIndex];

  console.log(currentItem);
  
  heroItems = heroItems.map((item, index) => {
    console.log(item);
   if (index === currentItemIndex) {
      item.classList.remove('hidden');
   } else {
    if (!item.classList.contains('hidden')) {
      item.classList.add('hidden');
    }    
   }

   return item;
  });

  const lastItem = heroItems.length === currentItemIndex + 1;
  if (lastItem) {
    currentItemIndex = 0;
  } else {
    currentItemIndex += 1;
  }
}

function scroll() {
  setInterval(changeHeroItem, 4000);
}

scroll();