import middy from "@middy/core";
import { HttpRouter } from "../../http/HttpRouter";
import { HttpMethod } from "../../http/types";

const products = [
  {
    id: 1,
    name: "Dogourment",
    kind: "dog-food",
    stock: 0,
    price: 1000,
  },
  {
    id: 2,
    name: "Catburger",
    kind: "cat-food",
    stock: 0,
    price: 1000,
  },
];

export class ProductsController {
  getAll(event: any) {
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  }

  getById(event: any) {
    const { id } = event.pathParameters;

    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Not found" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(product),
    };
  }
}

export class ProductsRouter implements HttpRouter {
  controller: ProductsController;

  constructor() {
    this.controller = new ProductsController();
  }

  getRoutes() {
    return [
      {
        method: HttpMethod.Get,
        path: "/products",
        handler: middy().handler(this.controller.getAll),
      },
      {
        method: HttpMethod.Get,
        path: "/products/{id}",
        handler: middy().handler(this.controller.getById),
      },
    ];
  }
}
