# Bits & Bots

"This project exam2 uses React for the frontend, Sass as the CSS preprocessor with BEM and DRY principles, and Bootstrap/React-Bootstrap for UI components. It integrates a headless WordPress CMS for content management and API, resulting in an efficient web application."# Bits & Bots

- [x] Research information
- [x] Planning Design
- [x] Adobe XD style guide
- [x] Adobe Desktop Version
- [x] Prototype the Desktop Version
- [x] Adobe Mobile Version
- [x] Prototype the Mobile Version
- [x] Wordpress Headless CMS
- [x] Adding game images and data
- [x] Creating React repository on GitHub
- [x] Creating the landing page
- [x] Creating image slider
- [x] Creating a login form
- [x] Creating registration form
- [x] Adding validation for registration
- [x] Creating header
- [x] Creating navbar
- [x] Adding brand name
- [x] Hiding the navbar on the landing page, visible only to authenticated users
- [x] Creating the browse page
- [x] Creating search functionality
- [x] Creating category dropdown
- [x] Fetching data from the Headless CMS
- [x] Creating car page
- [x] Creating checkout
- [x] Adding and creating product details
- [x] Creating checkout success page
- [x] Arranging cards and ensuring responsiveness for smaller devices
- [x] Adding hamburger menu for smaller devices, hiding it on the landing page
- [x] Testing and fixing errors
- [x] Adding content to README file

## REQUIRED FORMAT LINKS

| Resource                 | URL                                                                                       |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| Functional Specification | [Project Brief](file:///C:/Users/honey/Downloads/ProjectExam2_Resit.pdf)                  |
| Gantt Chart              | [Gantt Chart URL](<file:///C:/Users/honey/Downloads/Bits%20&amp%3B%20Bots%20(2).pdf>)     |
| Design Prototype         | [Desktop Prototype](https://xd.adobe.com/view/cde56c69-c26d-4fd9-8393-4e180d2bea64-98b6/) |
| Design Prototype         | [Mobile Prototype](https://xd.adobe.com/view/8610cd1a-75a0-48a6-be37-c57c2ca5e323-d343/)  |
| Style Guide              | [Style Guide](https://xd.adobe.com/view/8072be7c-e4f6-4f8e-86b8-ed5fc2f4b7b2-d521/)       |
| Kanban Board             | [Project Board Link](https://app.ganttpro.com/#/project/1695031576177/board)              |
| Repository               | [Github Project Repository](https://github.com/NeNorvalls/bits_and_bots_final_exam2.git)  |
| Hosted Demo              | [Netlify Link](https://bits-and-bots.netlify.app/)                                        |

## Breakdown of what is happening per page

### LandingPage

- The code starts with several import statements, including React, an ImageSlider component, and two authentication-related components, LoginForm and RegisterForm.
- Additionally, there's an import for a style sheet (LandingPage.scss).
- The LandingPage component is declared functional and accepts a prop called setIsLoggedIn, likely used to update the login status in the parent component.
- It begins with a header section that contains a title ("Features").
- Below the header, there's a section for an ImageSlider component that likely displays images or content related to the application's features.
- There's a section with two columns for forms:
  - The left column contains a LoginForm component, and the setIsLoggedIn prop is passed to it for updating the login status.
  - The right column contains a RegisterForm component for user registration, but it doesn't receive any login status props.

### Header

- Imports various dependencies, including React, useState, useEffect from React, Link from react-router-dom, FontAwesome icons for a shopping cart, and a custom useCart hook.
- Additionally, it imports a style sheet (Header.scss).
- Declares the Header component as functional and accepts an isloggedin prop, likely indicating whether a user is logged in.
- Manages the state of isMenuOpen to control the mobile menu's visibility.
- Uses the useCart hook to get the cart quantity from a cart context, representing the number of items in the user's shopping cart.
- Uses the useEffect hook to add an event listener for the window's resize event, closing the mobile menu when the window width exceeds 768 pixels.
- Provides navigation links and a mobile menu toggle button based on the user's login status, handling responsiveness by automatically closing the mobile menu when needed.

### Footer

- Represents a web application's footer section.
- Imports React and a style sheet (Footer.scss).
- Consists of a footer element with the class footer.
- Within the footer element, there's a div element with the class footer\_\_container.
- Inside the container, there's another div element with the class footer\_\_content.
- Inside the footer**content div, there's a paragraph element with the class footer**text containing a copyright notice: "© Designed by NeNorvalls 2023. Bits & Bots. All rights reserved."

### ImageSlider

- Represents a component with a simple image slider or carousel, allowing users to view a collection of images and navigate through them using "Previous" and "Next" buttons.
- Imports React, useState hook from React, and a style sheet (ImageSlider.scss).
- Imports a series of image files representing video game covers.
- Manages the currentSlide state to track the currently displayed slide (image).
- Defines an array called slides, containing objects for each slide with image and alt properties.
- Provides functions for handling "Next" and "Previous" button clicks to update the currentSlide state.
- Renders the image slider with a div element containing an img element for the current slide and buttons for navigation.

### Login Form

- Begins with several import statements, including React, useState hook from React, a style sheet (Login.scss), and the useNavigate function from react-router-dom library.
- Declares the LoginForm component as functional and accepts a prop called setIsLoggedIn, likely used to update the login status.
- Initializes state objects for user email, password, and error messages using the useState hook.
- Provides functions for handling input changes and form submission.
- Validates user input and handles various scenarios such as user not found and incorrect password.
- Renders a login form with input fields for email and password, error message display, and a "Login" button.

### RegisterForm

- Allows users to provide their name, email, and password and confirm the password to create an account.
- Imports React, useState hook from React, a style sheet (Register.scss), and the useNavigate function from react-router-dom.
- Manages state objects for form data, validation errors, and selected category.
- Provides functions for handling input changes, form submission, and data validation.
- Renders a registration form with input fields for name, email, password, and confirmPassword, displaying validation errors and a "Register" button.

### BrowsePage

- Allows users to browse and view products.
- Imports various dependencies, including React, useState, useEffect from React, a style sheet (BrowsePage.scss), and several other features and utility functions.
- Manages state variables for products, current page, error messages, selected product, product category, modal visibility, and loading status.
- Fetches product data from an external API using the useEffect hook and handles loading and error scenarios.
- Provides functions for selecting a product category, pagination, adding a product to the cart, and viewing product details.
- Renders a grid of product cards, handles loading and errors, and displays a modal for viewing product details.

### Search

- Handles user input to search for games by title and displays search results.
- Allows users to click on search results to view more details about selected games.
- Imports React, useState, useEffect from React, the Modal component from 'react-modal,' and some UI components from 'react-bootstrap.'
- Manages state variables for search query, search results, selected result, and modal visibility.
- Provides functions for handling input changes, fetching games based on the query, and handling result clicks.
- Renders a search input field, displays search results with clickable items, and shows a modal for viewing game details.

### Category

- Provides a dropdown menu for users to select a category filter for browsing games.
- Imports React and useState from React.
- Accepts a prop named onSelectCategory and manages the selected category state.
- Provides a function for handling category changes.
- Renders a dropdown menu with options for selecting a category.

### ProductDetails

- Displays detailed information about a selected game, including title, image, description, price, release date, availability, and categories.
- Provides a button to add the game to the shopping cart.
- Imports React, UI components from 'react-bootstrap,' and the useCart hook from the cart context.
- Accepts a selectedGame prop representing game details.
- Provides a function for adding the game to the cart.
- Renders game details and an "Add to Cart" button.

### Cart

- Allows users to view and manage items in the cart, including removing items, adjusting quantities, clearing the cart, and proceeding to checkout.
- Imports React, the useCart hook from the cart context, the useNavigate hook from 'react-router-dom,' and UI components from 'react-bootstrap.'
- Manages cart-related states and functions using the useCart hook.
- Provides functions for incrementing, decrementing, removing items, clearing the cart, and proceeding to checkout.
- Renders cart items, quantity adjustments, total cost, and action buttons.

### Checkout

- Handles the checkout process, including collecting billing and payment information from the user.
- Displays a modal to confirm successful checkout.
- Imports React, UI components from 'react-bootstrap,' the useCart hook from the cart context, and the useNavigate hook from 'react-router-dom.'
- Manages form data, validation errors, and modal visibility using local state.
- Validates form data and handles form submission.
- Renders a checkout form with billing and payment information fields.
- Displays a modal for successful checkout with a "Close" button.

### CartProvider

- Manages the shopping cart state in a React application using a context-based approach.
- Creates a CartContext with createContext() to hold cart-related state and methods.
- Wraps the application with CartProvider to make cart state and functions accessible to child components.
- Initializes the cart state from local storage for data persistence.
- Provides functions for adding, removing, incrementing, decrementing, calculating totals, and clearing the cart.
- Defines the useCart hook to access cart state and functions in any component within the CartProvider's scope.
