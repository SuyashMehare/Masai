function countAndSortCategories(categories = []) {
    let countStocks = categories
    .reduce((accum, crnt) => {
        accum[crnt] = accum[crnt] + 1 || 1
        return accum;
    }, {})
    
    let sortedCategories = Object.entries(countStocks).sort((a, b) => b[1]- a[1]);
    
    return sortedCategories;
}

// countStocks(["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"])
