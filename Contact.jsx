import React from 'react';

function Contact() {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #fffde7 0%, #fff9c4 50%, #fff59d 100%)',
      padding: '40px', 
      minHeight: '400px',
      color: 'black'
    }}>
      <h1>Contact Page</h1>
      <p>Get in touch with us through this contact page.</p>
      <div style={{ marginTop: '30px' }}>
        <h2>Contact Information</h2>
        <p>We'd love to hear from you! Here are the different ways you can reach out to us:</p>
        <ul>
          <li><strong>Email:</strong> code@gmail.com</li>
          <li><strong>Phone:</strong> +91 5432678890</li>
          <li><strong>Address:</strong> 123 Web Street, Digital City</li>
        </ul>
      </div>
      <div style={{ marginTop: '30px' }}>
        <h3>Business Hours</h3>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
      <div style={{ marginTop: '30px' }}>
        <h3>Send us a Message</h3>
        <p>Feel free to reach out with any questions, comments, or project inquiries.</p>
        <p>We typically respond within 24-48 hours during business days.</p>
      </div>
    </div>
  );
}

export default Contact;
