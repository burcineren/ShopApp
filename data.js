module.exports = function(){
    return {
        products: [
            {id: 1, name: 'Phone',price:1000, imageUrl: 'phone.jpg', description: 'Telefon', category: 'Telefon'},
            {id: 2, name: 'Phone',price:1000, imageUrl: 'phone2.jpg', description: 'test2', category: 'Telefon'},
            {id: 3, name: 'Macbook',price:1000, imageUrl: 'macbook.jpeg', description: 'test3', category: 'Bilgisayar'},
            {id: 4, name: 'Samsung',price:1000, imageUrl: 'b-0352.jpg', description: 'test4', category: 'Elektronik'},
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