# Frontend UI Documentation

This document provides details about the user interface for the following pages: `/userlogin`, `/usersignup`, `/captainlogin`, and `/captainsignup`. It describes their functionality, required data, and how they interact with the backend.

---

## 1. `/userlogin`

### Description:
The `/userlogin` page is used by users to log in to their accounts. It collects the user's email and password and sends them to the backend for authentication.

---

### Required Data:
- **Email:** A valid email address (required).
- **Password:** A string with at least 6 characters (required).

---

### Example Data:
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

---

### Features:
- Input fields for email and password.
- A "Login" button to submit the form.
- A link to navigate to the `/usersignup` page if the user doesn't have an account.
- A button to switch to the `/captainlogin` page.

---

## 2. `/usersignup`

### Description:
The `/usersignup` page allows users to create a new account. It collects the user's first name, last name, email, and password, and confirms the password before sending the data to the backend.

---

### Required Data:
- **First Name:** A string with at least 3 characters (required).
- **Last Name:** A string with at least 3 characters (optional).
- **Email:** A valid email address (required).
- **Password:** A string with at least 6 characters (required).
- **Confirm Password:** Must match the password field (required).

---

### Example Data:
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "user@example.com",
  "password": "securepassword123",
  "confirmPassword": "securepassword123"
}
```

---

### Features:
- Input fields for first name, last name, email, password, and confirm password.
- A "Sign Up" button to submit the form.
- A link to navigate to the `/userlogin` page if the user already has an account.

---

## 3. `/captainlogin`

### Description:
The `/captainlogin` page is used by captains to log in to their accounts. It collects the captain's email and password and sends them to the backend for authentication.

---

### Required Data:
- **Email:** A valid email address (required).
- **Password:** A string with at least 6 characters (required).

---

### Example Data:
```json
{
  "email": "captain@example.com",
  "password": "securepassword123"
}
```

---

### Features:
- Input fields for email and password.
- A "Login" button to submit the form.
- A link to navigate to the `/captainsignup` page if the captain doesn't have an account.
- A button to switch to the `/userlogin` page.

---

## 4. `/captainsignup`

### Description:
The `/captainsignup` page allows captains to create a new account. It collects the captain's first name, last name, email, and password, and confirms the password before sending the data to the backend.

---

### Required Data
- **First Name:** (min 3 characters, required)
- **Last Name:** (optional)
- **Email:** (valid email, required)
- **Password:** (min 6 characters, required)
- **Confirm Password:** (must match password, required)
- **Vehicle Color:** (min 3 characters, required)
- **Vehicle Plate:** (min 3 characters, required)
- **Vehicle Capacity:** (number, min 1, required)
- **Vehicle Type:** (one of: `car`, `motorcycle`, `auto`, required)

#### Example Data
```json
{
  "firstname": "Jane",
  "lastname": "Doe",
  "email": "jane.doe@example.com",
  "password": "securepassword123",
  "confirmPassword": "securepassword123",
  "vehicleColor": "Red",
  "vehiclePlate": "ABC123",
  "vehicleCapacity": 4,
  "vehicleType": "car"
}
```

---

### Features:
- Input fields for first name, last name, email, password, and confirm password.
- A "Sign Up" button to submit the form.
- A link to navigate to the `/captainlogin` page if the captain already has an account.

---

---

## Additional Frontend Notes

### Protected Routes
- `UserProtectWrapper` and `CaptainProtectWrapper` components protect user and captain routes, respectively.
- They check for a valid token in local storage and verify it with the backend before rendering protected pages.

### Logout Functionality
- `UserLogout` and `CaptainLogout` components call the respective backend logout endpoints, remove the token from local storage, and redirect to the login page.

### Token Storage
- JWT tokens are stored in `localStorage` after successful login or signup and are included in the `Authorization` header for protected requests.

### Context Usage
- User and captain data are managed using React Context (`UserContext` and `CaptainContext`) for global state management.

### API URLs
- All API requests use environment variables (`VITE_BASE_URL` or `VITE_API_URL`) for backend URLs, making it easy to switch between development and production environments.

### Form Validation
- Signup forms check for password confirmation and required fields before sending data to the backend.

### Navigation
- After successful login or signup, users and captains are redirected to their respective home pages.

### Environment Variables
- The frontend uses `.env` variables for API URLs and other configuration.