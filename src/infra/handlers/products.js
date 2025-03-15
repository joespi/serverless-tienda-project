import middy from "@middy/core";
import httpRouterHandler from "@middy/http-router";

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

const getAllHandler = middy().handler((event) => {
  console.log({ event });

  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
});

const getByIdHandler = middy().handler((event) => {
  console.log({ event });

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
});

const routes = [
  { method: "GET", path: "/products", handler: getAllHandler },
  { method: "GET", path: "/products/{id}", handler: getByIdHandler },
];

export const handler = middy().handler(httpRouterHandler(routes));
