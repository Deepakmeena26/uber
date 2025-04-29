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