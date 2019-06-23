// item example
// {
//   name: 'Name', 
//   description: 'Description', 
//   expirationDate: '01-30-1999' 
// }

const filterByExpiration = items =>
    !Array.isArray(items)
        ? []
        : items.filter(item => Date.parse(item.expirationDate) > Date.now());