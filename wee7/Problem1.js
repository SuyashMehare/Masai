promise1
  .then(() => promise2)
  .then(() => promise3)
  .then(() => console.log("All done"))
  .catch(() => console.log("Error caught"));
