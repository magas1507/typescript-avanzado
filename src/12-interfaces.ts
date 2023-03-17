type Sizes = 'S' | 'M' | 'L';
type userId = string | number;

interface Product {
  id: string | number;
  title: string;
  createAt: Date;
  stock: number;
  size?: Sizes;
}

const produtcs: Product[] = [];

produtcs.push({
  id:'1',
  title: 'p1',
  createAt: new Date(),
  stock: 90

})

const addProduct = (data:Product) => {
  produtcs.push(data);
}
