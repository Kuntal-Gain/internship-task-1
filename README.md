# Registration Form Project

This project Given By Celebral Technologies as React JS Intern Building a simple registration form built with React. It includes validation logic to ensure the input data is correct and displays a success message upon successful form submission.

## Problem Statement

### Assignment #1

> Create a React form with validation for required fields without using third-party libraries.

#### Task 1

- Display error messages.
- Disable submission until fields are filled correctly.

#### Task 2

- Show all the filled details on a new route post-successful submission.

#### Task 3

- Fields required:
  - First Name
  - Last Name
  - Username
  - E-mail
  - Password (show/hide)
  - Phone No. (country code ____ number)
  - Country (dropdown)
  - City (dropdown)
  - Pan No.
  - Aadhar No.

## Project Structure

```
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── success_state.js
│   │   └── textfield_component.js
│   ├── utils
│   │   └── validation_logic.js
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Components

- **App.js**: Main component that contains the registration form and handles form submission logic.
- **textfield_component.js**: A reusable input field component used in the form.
- **success_state.js**: A component that renders a success message after form submission.
- **validation_logic.js**: Contains the validation logic for the form inputs.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/registration-form.git
   ```
2. Navigate to the project directory:
   ```
   cd registration-form
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Project

To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

## Form Validation

The form includes the following fields:
- First Name
- Last Name
- Username
- Email
- Password
- Phone
- Country
- City
- PAN No.
- Aadhar No.

Validation logic ensures that all fields are filled out correctly before allowing the form to be submitted.

## Form Submission

Upon successful submission, the form data is validated, and if there are no errors, a success message is displayed.

## Styling

The project uses a simple CSS file (`App.css`) to style the form. Key styles include:
- Centered form container with padding and shadow.
- Styled input fields and submit button.
- Error messages displayed in red.

## Example Usage

1. Fill in all the required fields in the form.
2. Click the "Sign In" button.
3. If the validation passes, a success message is displayed.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## Contact

For any questions or feedback, please contact [work.kuntalgain@gmail.com](mailto:work.kuntalgain@gmail.com).

---

### Notes

- Ensure you have Node.js installed on your machine.
- Customize the form fields and validation logic as per your requirements.
- You can extend the form to include more fields or advanced validation as needed.

Happy coding!