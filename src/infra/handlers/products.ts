import middy from "@middy/core";
import { HttpRouterHandler } from "../http/HttpRouterHandler";
import { ProductsRouter } from "../routers/products/products-router";

const productsRouter = new ProductsRouter();
const routerHandler = HttpRouterHandler.create(productsRouter);

export const handler = middy().handler(routerHandler);
