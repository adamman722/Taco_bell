const dropItems = document.getElementById("drop-items");

new Sortable(dropItems, {
  swapThreshold: 1,
  animation: 150,
});
