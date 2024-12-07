# Interactive Web Page with Dynamic Elements

This project implements an interactive web page with various dynamic elements, including a sidebar, testimonials modal, custom select dropdown, contact form validation, and page navigation.

The web application provides a rich user experience through JavaScript-powered interactivity. It features a responsive design with a toggleable sidebar for mobile devices, a modal system for displaying detailed testimonials, and a custom select dropdown for content filtering. The project also includes form validation for a contact form and smooth page navigation without full page reloads.

These features combine to create a modern, user-friendly interface that enhances engagement and improves the overall user experience. The modular structure of the JavaScript code allows for easy maintenance and potential expansion of functionality.

## Repository Structure

```
.
├── assets
│   ├── css
│   │   └── style.css
│   └── js
│       └── script.js
└── index.html
```

- `assets/`: Directory containing static assets
  - `css/`: Directory for CSS stylesheets
    - `style.css`: Main stylesheet for the project
  - `js/`: Directory for JavaScript files
    - `script.js`: Main JavaScript file containing all interactive functionality
- `index.html`: Main HTML file for the web application

## Usage Instructions

### Installation

1. Clone the repository to your local machine.
2. No additional installation steps are required as this is a static web application.

### Getting Started

1. Open the `index.html` file in a modern web browser.
2. The interactive elements should be functional immediately.

### Features and Usage

1. **Sidebar Toggle (Mobile)**
   - Click the sidebar button to toggle the sidebar visibility on mobile devices.

2. **Testimonials Modal**
   - Click on a testimonial item to open a modal with detailed information.
   - Close the modal by clicking the close button or anywhere outside the modal.

3. **Custom Select Dropdown**
   - Click on the custom select element to open the dropdown.
   - Select a category to filter the content accordingly.

4. **Contact Form Validation**
   - Fill out the contact form fields.
   - The submit button will be enabled only when all required fields are valid.

5. **Page Navigation**
   - Click on navigation links to switch between different pages of the website without reloading.

### Code Example

Here's an example of how the testimonials modal functionality is implemented:

```javascript
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);
```

### Troubleshooting

1. **Issue: Sidebar not toggling on mobile**
   - Ensure that the correct data attributes are set in your HTML:
     ```html
     <button data-sidebar-btn>Toggle Sidebar</button>
     <div data-sidebar>Sidebar Content</div>
     ```
   - Check if the JavaScript file is properly loaded in your HTML.

2. **Issue: Custom select dropdown not working**
   - Verify that the HTML structure matches the expected format:
     ```html
     <div data-select>
       <span data-selecct-value></span>
       <ul>
         <li data-select-item>Item 1</li>
         <li data-select-item>Item 2</li>
       </ul>
     </div>
     ```
   - Ensure that the JavaScript file is loaded after the HTML content.

3. **Issue: Contact form submit button always disabled**
   - Check if all required form fields have the `required` attribute set.
   - Verify that the form and its inputs have the correct data attributes:
     ```html
     <form data-form>
       <input data-form-input required>
       <button data-form-btn disabled>Submit</button>
     </form>
     ```

### Debugging

To enable debug mode:

1. Open the browser's developer tools (usually F12 or right-click and select "Inspect").
2. Go to the Console tab.
3. Add `console.log()` statements in the JavaScript code to output variable values or execution flow information.

Example:
```javascript
formInputs[i].addEventListener("input", function () {
  console.log("Form input changed:", this.value);
  if (form.checkValidity()) {
    console.log("Form is valid");
    formBtn.removeAttribute("disabled");
  } else {
    console.log("Form is invalid");
    formBtn.setAttribute("disabled", "");
  }
});
```

## Data Flow

The data flow in this application primarily revolves around user interactions triggering JavaScript functions that manipulate the DOM. Here's a high-level overview of the data flow:

1. User interacts with a UI element (e.g., clicks a button, fills a form)
2. Event listener captures the interaction
3. JavaScript function is triggered
4. Function manipulates DOM elements (e.g., toggles classes, updates content)
5. UI updates to reflect the changes

```
[User Input] -> [Event Listener] -> [JavaScript Function] -> [DOM Manipulation] -> [UI Update]
```

Key technical considerations:
- The application relies heavily on DOM manipulation for dynamic updates.
- Data is not persisted beyond the current session.
- All interactions are client-side, with no server communication.