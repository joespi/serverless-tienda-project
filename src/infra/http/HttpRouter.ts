import { APIGatewayProxyEvent } from "aws-lambda";
import { Route } from "@middy/http-router";

export interface HttpRouter {
  getRoutes(): Route<APIGatewayProxyEvent, any>[];
}
