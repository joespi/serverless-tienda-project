import { ProductsController } from "../../../src/infra/routers/products/products-router";
import { describe, expect, it } from "vitest";

describe("products - controller", () => {
  const controller = new ProductsController();

  it("should get a http response with status code 200 and a list products when a http GET request is sent to /products", () => {
    const event = {};
    const response = controller.getAll(event);
    const body = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(body.length).toBeGreaterThan(0);
  });

  it("should get a http response with status code 200 and a product when a http GET request is sent to /products/{id}", () => {
    const event = { pathParameters: { id: 1 } };
    const response = controller.getById(event);
    const body = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(body.id).toBe(event.pathParameters.id);
  });
});
