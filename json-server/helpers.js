// фильтр
function filterHandler(type, q) {
    const searchString = q.toLowerCase();
    return (item) => {
        let itemFound = true;
        if (type) {
            itemFound = item.type === type;
        }
        if (itemFound && searchString !== '') {
            const titleString = item.title.toLowerCase();
            const descriptionString = item.description.toLowerCase();
            itemFound =
                titleString.includes(searchString) ||
                descriptionString.includes(searchString);
        }
        return itemFound;
    };
}

// сортировка
function sortHandler(order, sort) {
    return (a, b) => {
        if (order === 'asc') {
            if (sort === 'views') return a.views - b.views;
            return a[sort].localeCompare(b[sort]);
        }
        if (sort === 'views') return b.views - a.views;
        return b[sort].localeCompare(a[sort]);
    };
}

module.exports = {
    sortHandler,
    filterHandler,
};
