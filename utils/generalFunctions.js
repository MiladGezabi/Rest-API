
function generateRandomId() {
  return Math.round(Math.random() * 1000000000)
}

function sortResults(results, sort, order) {
  return results.sort((a, b) => {
    if (sort === 'price') {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    } else if (sort === 'name') {
      return order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    }
  });
}

export { generateRandomId, sortResults }