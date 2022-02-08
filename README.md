This coding challenge is to demonstrate your ability as a ReactJS developer. Do not install any new package. Make use of packages installed already. Please clone this Github repo and submit a PR once completed.

# Evaluation criteria

The project should be functionally complete as well as it should be done with proper coding approach. Coding approach weigh more than completion.

# Task details

In this task, You have to implement custom form validation on four input fields, and make an API call on form submission.

On page load, Check for query parameters in the URL and pre fill input fields with the data in the params. Here is a sample URL with query params

```
https://localhost:3000/?name="Test User"&gender="male"&email="tester@gmail.com"&phone="923231111111"
```

Pass props error and errorMessage to display error message on failed validation.
Validation error should not be showed while typing or focused.

On submit make a POST API call to this endpoint, you should validate the data before passing it to the API below and display server response in a div above the form.

```
URL: https://react-coding-challenge-dev.herokuapp.com/api/users
Method: POST
Body: {
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "phone": "+923001234567",
    "gender": "male"
}
```

![ScreenShot](/public/preview.png)

Validations for each field is listed below.

### Name

    1- This field should not be empty
    2- The name should be at least 3 characters long

### Gender

    1- This is a required field

### Email

    1- The email field should not be empty
    2- It should only accept a valid email address

### Phone number

    1- Phone number field is optional
    2- If phone number is entered, it should be a valid Pakistani phone number with country code.
