module.exports = function(){
    return {
        products: [
            {id: 1, name: 'Samsung S5',price:1000, imageUrl: '1.jpg', description: 'test'},
            {id: 2, name: 'Samsung S4',price:1000, imageUrl: '2.jpg', description: 'test2'},
            {id: 3, name: 'Samsung S1',price:1000, imageUrl: '3.jpg', description: 'test3'},
            {id: 4, name: 'Samsung S6',price:1000, imageUrl: '4.jpg', description: 'test4'},
        ],
        categories: [
            {
                id:1,  name: 'Telefon'
            },
            {
                id:1,  name: 'Bilgisayar'
            },
            {
                id:1,  name: 'Elektronik'
            }
        ],
        orders: [],
    }
}