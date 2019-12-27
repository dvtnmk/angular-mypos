export interface ProductResponse{
  result: Product | Product[];
  message: string;
}

export class Product {
    productId: number;
    name: string;
    stock: number;
    price: number;
    image: any;
    qty: number;
    created: Date;
  }