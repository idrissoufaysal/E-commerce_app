

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
    count: number;

    };
  }

  export interface CardStore{
    card:Product[],
    addToCard:(item:Product)=>void,
    removeToCard:(item:Product,id:number)=>void
  }
 
  