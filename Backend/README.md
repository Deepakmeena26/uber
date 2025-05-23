# User Endpoints Documentation

## 1. `/users/register`

### Method: `POST`

#### Description:
This endpoint is used to register a new user in the system. It validates the input data, checks if the user already exists, hashes the password, and creates a new user in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the user details.

---

### Request Body:
The request body should be sent in JSON format with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min: 3 characters, required)",
    "lastname": "string (min: 3 characters, optional)"
  },
  "email": "string (valid email format, required)",
  "password": "string (min: 6 characters, required)"
}
```

#### Example Request:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

---

### Responses:

#### Success:
- **Status Code:** `201 Created`
- **Response Body:**
```json
{
  "token": "string (JWT token)",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}
```

#### Validation Errors:
- **Status Code:** `400 Bad Request`
- **Response Body:**
```json
{
  "errors": [
    {
      "msg": "string (error message)",
      "param": "string (field name)",
      "location": "string (body)"
    }
  ]
}
```

#### User Already Exists:
- **Status Code:** `400 Bad Request`
- **Response Body:**
```json
{
  "message": "User already exist"
}
```

---

## 2. `/users/login`

### Method: `POST`

#### Description:
This endpoint is used to authenticate a user. It validates the input data, checks if the user exists, and verifies the password. Upon successful authentication, it returns a JSON Web Token (JWT) and the user details.

---

### Request Body:
The request body should be sent in JSON format with the following structure:

```json
{
  "email": "string (valid email format, required)",
  "password": "string (min: 6 characters, required)"
}
```

#### Example Request:
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

---

### Responses:

#### Success:
- **Status Code:** `200 OK`
- **Response Body:**
```json
{
  "token": "string (JWT token)",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}
```

#### Validation Errors:
- **Status Code:** `400 Bad Request`
- **Response Body:**
```json
{
  "errors": [
    {
      "msg": "string (error message)",
      "param": "string (field name)",
      "location": "string (body)"
    }
  ]
}
```

#### Invalid Credentials:
- **Status Code:** `401 Unauthorized`
- **Response Body:**
```json
{
  "message": "Invalid email or password"
}
```

---

## 3. `/users/profile`

### Method: `GET`

#### Description:
This endpoint is used to retrieve the profile of the currently authenticated user. The user must provide a valid JWT token in the request headers or cookies.

---

### Headers:
- `Authorization`: `Bearer <JWT token>` (required if not using cookies)

---

### Responses:

#### Success:
- **Status Code:** `200 OK`
- **Response Body:**
```json
{
  "_id": "string",
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string"
}
```

#### Unauthorized:
- **Status Code:** `401 Unauthorized`
- **Response Body:**
```json
{
  "message": "Unauthorized"
}
```

---

## 4. `/users/logout`

### Method: `GET`

#### Description:
This endpoint is used to log out the currently authenticated user. It clears the authentication token from cookies and blacklists the token to prevent further use.

---

### Headers:
- `Authorization`: `Bearer <JWT token>` (required if not using cookies)

---

### Responses:

#### Success:
- **Status Code:** `200 OK`
- **Response Body:**
```json
{
  "message": "Logged out"
}
```

#### Unauthorized:
- **Status Code:** `401 Unauthorized`
- **Response Body:**
```json
{
  "message": "Unauthorized"
}
```

---

### Example cURL Requests:

#### `/users/profile`:
```bash
curl -X GET http://localhost:3000/users/profile \
-H "Authorization: Bearer <JWT token>"
```

#### `/users/logout`:
```bash
curl -X GET http://localhost:3000/users/logout \
-H "Authorization: Bearer <JWT token>"
```






# Captain Endpoints Documentation

## 1. `/captains/register`

### Method: `POST`

#### Description:
This endpoint is used to register a new captain in the system. It validates the input data, checks if the captain already exists, hashes the password, and creates a new captain in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the captain details.

---

### Request Body:
The request body should be sent in JSON format with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min: 3 characters, required)",
    "lastname": "string (min: 3 characters, optional)"
  },
  "email": "string (valid email format, required)",
  "password": "string (min: 6 characters, required)",
  "vehicle": {
    "color": "string (min: 3 characters, required)",
    "plate": "string (min: 3 characters, required)",
    "capacity": "number (min: 1, required)",
    "vehicleType": "string (one of: 'car', 'motorcycle', 'auto', required)"
  }
}
```

#### Example Request:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "securepassword123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

---

### Responses:

#### Success:
- **Status Code:** `201 Created`
- **Response Body:**
```json
{
  "token": "string (JWT token)",
  "captain": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    },
    "status": "string (default: 'inactive')"
  }
}
```

#### Validation Errors:
- **Status Code:** `400 Bad Request`
- **Response Body:**
```json
{
  "errors": [
    {
      "msg": "string (error message)",
      "param": "string (field name)",
      "location": "string (body)"
    }
  ]
}
```

#### Captain Already Exists:
- **Status Code:** `400 Bad Request`
- **Response Body:**
```json
{
  "message": "Captain already exist"
}
```

---

### Validation Rules:
1. `email` must be a valid email address.
2. `fullname.firstname` must be at least 3 characters long.
3. `password` must be at least 6 characters long.
4. `vehicle.color` must be at least 3 characters long.
5. `vehicle.plate` must be at least 3 characters long.
6. `vehicle.capacity` must be a number greater than or equal to 1.
7. `vehicle.vehicleType` must be one of the following: `car`, `motorcycle`, `auto`.

---

## 2. `/captains/login`

### Method: `POST`

#### Description:
This endpoint is used to authenticate a captain. It validates the input data, checks if the captain exists, and verifies the password. Upon successful authentication, it returns a JSON Web Token (JWT) and the captain details.

---

### Request Body:
The request body should be sent in JSON format with the following structure:

```json
{
  "email": "string (valid email format, required)",
  "password": "string (min: 6 characters, required)"
}
```

#### Example Request:
```json
{
  "email": "jane.doe@example.com",
  "password": "securepassword123"
}
```

---

### Responses:

#### Success:
- **Status Code:** `200 OK`
- **Response Body:**
```json
{
  "token": "string (JWT token)",
  "captain": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    },
    "status": "string"
  }
}
```

#### Validation Errors:
- **Status Code:** `400 Bad Request`
- **Response Body:**
```json
{
  "errors": [
    {
      "msg": "string (error message)",
      "param": "string (field name)",
      "location": "string (body)"
    }
  ]
}
```

#### Invalid Credentials:
- **Status Code:** `401 Unauthorized`
- **Response Body:**
```json
{
  "message": "Invalid email or password"
}
```

---

## 3. `/captains/profile`

### Method: `GET`

#### Description:
This endpoint is used to retrieve the profile of the currently authenticated captain. The captain must provide a valid JWT token in the request headers or cookies.

---

### Headers:
- `Authorization`: `Bearer <JWT token>` (required if not using cookies)

---

### Responses:

#### Success:
- **Status Code:** `200 OK`
- **Response Body:**
```json
{
  "captain": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    },
    "status": "string",
    "location": {
      "ltd": "number",
      "lng": "number"
    }
  }
}
```

#### Unauthorized:
- **Status Code:** `401 Unauthorized`
- **Response Body:**
```json
{
  "message": "Unauthorized"
}
```

---

## 4. `/captains/logout`

### Method: `GET`

#### Description:
This endpoint is used to log out the currently authenticated captain. It clears the authentication token from cookies and blacklists the token to prevent further use.

---

### Headers:
- `Authorization`: `Bearer <JWT token>` (required if not using cookies)

---

### Responses:

#### Success:
- **Status Code:** `200 OK`
- **Response Body:**
```json
{
  "message": "Logout successfully"
}
```

#### Unauthorized:
- **Status Code:** `401 Unauthorized`
- **Response Body:**
```json
{
  "message": "Unauthorized"
}
```

---

### Example cURL Requests:

#### `/captains/login`:
```bash
curl -X POST http://localhost:3000/captains/login \
-H "Content-Type: application/json" \
-d '{
  "email": "jane.doe@example.com",
  "password": "securepassword123"
}'
```

#### `/captains/profile`:
```bash
curl -X GET http://localhost:3000/captains/profile \
-H "Authorization: Bearer <JWT token>"
```

#### `/captains/logout`:
```bash
curl -X GET http://localhost:3000/captains/logout \
-H "Authorization: Bearer <JWT token>"
```

---

## Additional Backend Notes

### Token Blacklisting on Logout
- When a user or captain logs out, their JWT token is added to a blacklist (`blacklistToken.model.js`).
- Any blacklisted token is rejected for future requests, ensuring secure logout.

### Authentication Middleware
- `authUser` middleware checks for a valid user token and ensures it is not blacklisted.
- `authCaptain` middleware checks for a valid captain token and ensures it is not blacklisted.
- Both middlewares attach the authenticated user/captain to the request object for use in protected routes.

### Profile Endpoints
- `/users/profile` and `/captains/profile` return the authenticated user's or captain's profile data.
- These endpoints require a valid JWT token in the `Authorization` header or cookies.

### Logout Endpoints
- `/users/logout` and `/captains/logout` clear the authentication cookie and blacklist the token, preventing reuse.

### Consistent Response Structure
- All endpoints return JSON responses with clear status codes and messages for success and error cases.

### Validation
- All registration and login endpoints use `express-validator` to enforce required fields and data formats.

### Environment Variables
- The backend uses environment variables (such as `JWT_SECRET`) for security and configuration.