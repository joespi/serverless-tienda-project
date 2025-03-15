import httpRouterHandler from "@middy/http-router";
import { HttpRouter } from "../interfaces/HttpRouter";

export class HttpRouterHandler {
  static create(router: HttpRouter) {
    return httpRouterHandler(router.getRoutes());
  }
}
