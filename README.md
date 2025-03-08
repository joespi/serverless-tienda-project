# serverless-tienda-project
Project to practice serverless AWS

Descripción de la API: Se requiere un servicio que ayude a una empresa a distribuir su mercancia. Para eso se necesita conocer de los clientes:

- Nombre/Razón Social
- Empresa/Persona
- Ubicación geográfica. 
- Nro de contacto
- Email

Producto:
- Nombre
- Tipo
- Cantidad
- Precio

Pedido:
- customer_id
- products
- amount
- total_amount
- status
- delivery_address


GET /customers
GET /customers/{customer_id}
GET /customers/{customer_id}/orders
GET /customers/{customer_id}/orders/{order_id}
GET /customers?razon_social={razon_social}

POST /customers -> {  name: string, kind: <Empresa/Persona>, phone: string, email: string, address: string, created_at: string, updated_at: string }
DELETE /customers/{customer_id}
PUT /customers/{customer_id} ->  {  name: string, kind: <Empresa/Persona>, phone: string, email: string, address: string, created_at: string, updated_at: string }

GET /products
GET /products/{product_id}
GET /products?kind={product_kind}

POST /products -> { name: string, kind: string, price: float, stock: number, created_at: string, updated_at: string }
DELETE /products/{product_id}
PUT /products/{product_id} ->  { name: string, kind: string, price: float, stock: number, created_at: string, updated_at: string }

GET /sales
GET /sales/{sale_id}
GET /sales?sale_id={sale_id}

POST /orders -> { customer_id: string, products: [{product_id: string, quantity: number }], created_at: string, amount: float, total_amount: float, delivery_address: string, status: <Pending/InProgress/Done> }


GET /orders
GET /orders?client_name,status,created_at
GET /orders/{order_id}

DELETE /orders/{order_id}
PUT /orders/{order_id} -> { client_id: string, products: [{product_id: string, quantity: number }], created_at: string, amount: float, total_amount: float, address: string, status: <Pending/InProgress/Done> }


// Infra
- DynamoDB:
    - CustomersTable
    - ProductsTable
    - OrdersTable
- Lambdas:
    - CustomersLambda
    - ProductsLambda
    - OrdersLambda
- API Gateway
    - Endpoints -> Lambdas
- Cognito:
    - Pool de usuario para administrar los clientes, productos, y pedidos.
    - Administrador para crear usuarios
- Ambientes:
    - Pruebas/Integración/Temporales
    - Productivo