export class ProductService{
    getProducts() {
    return [
{  
    imageUrl: "http://loremflickr.com/150/150?random=1",
    productName: "Product 1",
    releasedDate: new Date(2016,5,30),
    description: "Yo wazzup bro, ma besto furendo...",
    rating: 4,
    numOfReviews: 2 
},

{  
    imageUrl: "http://loremflickr.com/150/150?random=2",
    productName: "Product 2",
    releasedDate: "October 27, 1992",
    description: "Yo wazzup bro, yaaaaaaasssss...",
    rating: 1,
    numOfReviews: 30 
},

{  
    imageUrl: "http://loremflickr.com/150/150?random=3",
    productName: "Product 3",
    releasedDate: "January 14, 2003",
    description: "Mai Brotha, you are mai brotha ahahahahah",
    rating: 3,
    numOfReviews: 21 

}];

    }
}