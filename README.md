# DelishBites

Welcome to the **DelishBites** website repository! This project features a modern, responsive website for a food delivery service. Built using React and Chakra UI, the site showcases a hero section, service offerings, and a contact form with a modal for ordering. The backend is hosted on Render and integrated using Axios for API requests.

## Features

- **Hero Section**: Eye-catching hero section with a responsive background image and animated logo.
- **Service Highlights**: Section to display service features with responsive images and hover effects.
- **Order Modal**: A Chakra UI modal for placing orders, including form validation and API submission.
- **Responsive Design**: Fully responsive layout that adjusts for mobile, tablet, and desktop devices.
- **Footer**: Informative footer with navigation and contact information.

## Technologies Used

### Frontend:

- **React**: JavaScript library for building user interfaces.
- **Chakra UI**: React component library for building accessible and reusable UI components.
- **CSS**: Custom styling for layout and responsive design.

### Backend:

- **Express**: Backend framework used for API development.
- **Axios**: For sending HTTP requests from the frontend to the backend.
- **Node.js**: JavaScript runtime for building the backend server.
- **Render**: Platform as a service (PaaS) used to host the backend API.

### API Endpoint:

The form submissions are sent to a backend API hosted on Render. The backend API handles form data submission and sends a response back to the frontend.

- **POST** `https://delishbites-backend.onrender.com/submit`: Receives order form data (name, email, phone, meal type) and responds with a success or error message.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/delishbites.git

2. Navigate into the project directory:

   ```bash
   cd delishbites

3. Install the dependencies:

   ```bash
   npm install
4. Run the development server:

   ```bash
   npm start
This will start the app at http://localhost:3000 in your browser.


### Backend Setup (Optional for Local Development)

 To run the backend locally, follow these steps:

 1. Clone the backend repository (if it's separate):

    ```bash
    git clone https://github.com/your-username/delishbites-backend.git

 2. Navigate to the backend directory and install dependencies:

    ```bash
    cd delishbites-backend
    npm install

 3. Start the backend server:

    ```bash

    npm start
    The backend should be running at http://localhost:5000.

 4. Update the Axios API call in the frontend to point to your local backend during development:

    const response = await axios.post('http://localhost:5000/submit', formData);


### Usage 
 Homepage: View the hero section with the logo and CTA button.
 Service Section: Explore the services offered with interactive images.
 Order Modal: Click the "Order Now" button to open the modal and place an order. The form data is submitted to the backend API hosted on Render.
