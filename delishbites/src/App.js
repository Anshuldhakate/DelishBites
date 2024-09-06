import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Input, FormControl, FormLabel, Select, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mealType: ''
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.mealType) {
      alert("Please fill in all the fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post('https://delishbites-backend.onrender.com/submit', formData);
      alert(response.data.message);
    } catch (error) {
      alert("There was an error submitting the form.");
    }

    onClose();
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src="https://media.istockphoto.com/id/1327942748/photo/nutritionist-icon.webp?a=1&b=1&s=612x612&w=0&k=20&c=LE7f-amoljO5SUwoihVjNQmd796xv43AjShHql4tRNM=" alt="DelishBites Logo" className="hero-logo" />
          <h1>Welcome to <br /> <span> DelishBites</span></h1>
          <p>Your favorite food, delivered fast and fresh.</p>
          <Button colorScheme="teal" onClick={onOpen}>
            Order Now
          </Button>
        </div>
      </section>

      {/* Body Section */}
      <section className="body">
        <h2>Why Choose DelishBites?</h2>
        <div className="services">
          <div className="service">
            <img src="https://plus.unsplash.com/premium_photo-1681488251928-7b1e0323fdd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Fast Delivery" />
            <p>Fast Delivery</p>
          </div>
          <div className="service">
            <img src="https://plus.unsplash.com/premium_photo-1664475857366-5475a73db5e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Quality Ingredients" />
            <p>Quality Ingredients</p>
          </div>
          <div className="service">
            <img src="https://images.unsplash.com/photo-1532635224-cf024e66d122?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Chef Specials" />
            <p>Chef Specials</p>
          </div>
        </div>
      </section>

      {/* Chakra UI Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Place Your Order</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired mb="4">
                <FormLabel>Your Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired mb="4">
                <FormLabel>Your Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired mb="4">
                <FormLabel>Your Phone</FormLabel>
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired mb="4">
                <FormLabel>Meal Type</FormLabel>
                <Select
                  name="mealType"
                  value={formData.mealType}
                  onChange={handleInputChange}
                >
                  <option value="">Choose Meal Type</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </Select>
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleSubmit} mr={3}>
              Submit
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <hr />


      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <p>&copy; 2024 DelishBites. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:info@delishbites.com">info@delishbites.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>
      </footer>


    </div>
  );
}

export default App;
