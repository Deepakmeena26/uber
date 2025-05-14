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
  "firstname": "Jane",
  "lastname": "Doe",
  "email": "captain@example.com",
  "password": "securepassword123",
  "confirmPassword": "securepassword123"
}
```

---

### Features:
- Input fields for first name, last name, email, password, and confirm password.
- A "Sign Up" button to submit the form.
- A link to navigate to the `/captainlogin` page if the captain already has an account.

---

### Filepath:
Save this file as `README.md` in the `Frontend` folder:
````plaintext
[README.md](http://_vscodecontentref_/0)