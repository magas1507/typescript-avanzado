import {Product} from './product.model'
export interface createProductDto extends Omit< Product,'id' | 'createdAt' | 'updateAd' | 'category'>{
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>;

export interface updateProductDto extends Partial <createProductDto>{}

type example2 = Required<Product>

export interface FindProductDto extends Readonly<Partial<Product>> {}

type example3 = Readonly<Product>;