### Student ID: WEB6-0075 - Assignment Set:3

# Express & MongoDB API for Car and Order Management

This project is a Node.js application built with Express and MongoDB. It provides APIs for managing cars and orders. The application includes various routes for CRUD operations, revenue calculation, and error handling.

## Features

- **Car Management**:
  - Create a new car.
  - Get a list of all cars.
  - Get a car by ID.
  - Update a car.
  - Delete a car.


- **Order Management**:
  - Create an order.
  - Calculate total revenue from all orders.

- **Error Handling**:
  - Custom error handler to catch and respond to errors across the application.

- **API Documentation**:
  - API responses are structured with success flags and error handling.


## Setup Instructions

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/nasim0994/level2_assignment2.git
cd level2_assignment2
```

### 2. Install Dependencies

Once you have cloned the repository, install the necessary dependencies by running:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of the project and add the following variables:

```env
PORT=5000
DB_URL=
```

### 4. Running the Project

#### Development Mode

To run the project in development mode with hot reloading, use:

```bash
npm run dev
```

This will start the server and allow you to make changes and see them reflected immediately.

#### Production Mode

To run the project in production mode, first build the TypeScript code:

```bash
npm run build
```

Then start the server:

```bash
npm start
```

### 5. Linting & Code Quality

#### Linting

To check for linting issues, run the following command:

```bash
npm run lint
```

#### Fixing Linting Issues

To automatically fix linting issues, use:

```bash
npm run lint:fix
```

#### Formatting Code

To format the code according to the predefined style guide, run:

```bash
npm run format
```

### 6. API Endpoints

Here are the available API endpoints for interacting with the application:

#### **Car Management Endpoints**

- **POST /api/cars**

  - Creates a new car.
  - **Request Body**:
    ```json
      {
        "brand": "Toyota",
        "model": "Camry",
        "year": 2024,
        "price": 25000,
        "category": "Sedan",
        "description": "A reliable family sedan with modern features.",
        "quantity": 50,
        "inStock": true
      }
    ```

- **GET /api/cars**

  - Fetches a list of all cars.

- **GET /api/cars/:id**

  - Fetches a single car by its ID.

- **PUT /api/cars/:id**

  - Updates a car's details.
  - **Request Body**:
    ```json
    {
      "name": "Updated Car Name",
      "brand": "Updated Car Brand",
      "quantity": 15,
      "price": 55000
    }
    ```

- **DELETE /api/cars/:id**
  - Deletes a car by its ID.

#### **Order Management Endpoints**

- **POST /api/orders**

  - Creates a new order.
  - **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "car": "carId",
      "quantity": 2,
      "totalPrice": 100000
    }
    ```

- **GET /api/orders/revenue**
  - Calculates and returns the total revenue from all orders.
  - **Response**:
    ```json
    {
      "message": "Revenue calculated successfully",
      "status": true,
      "data": {
        "totalRevenue": 810000
      }
    }
    ```



### 9. Directory Structure

```
/src
  /modules
    /car
      carInterface.ts
      carController.ts
      carService.ts
      carModel.ts
      carRoute.ts
    /order
      orderInterface.ts
      orderController.ts
      orderService.ts
      orderModel.ts
      orderRoute.ts
  /config
    index.ts
  app.ts
  server.ts
/package.json
/vercel.json
/.env
```


📺 Project Walkthrough Video
![Watch the video](https://img.youtube.com/vi/LTkTJsm92Tk/0.jpg)  

🎥 **Watch Now:** [Project Walkthrough Video](https://www.youtube.com/watch?v=LTkTJsm92Tk)