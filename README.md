# Reset Coffee – QR Digital Menu

![Reset Coffee Cover](https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwUUQnsUZbk01F2uFOV4V6__VZwszsAEdgJ8T7I2p1fon_ye_HBuCY2RzhLfeupHVz7bwRmAXd7_TTASTzfnojqQam1et3UMxXkhVgq7x1PBeKi8pL37-0TrOJBGfTnPzLFxruRNw=s680-w680-h510-rw)

Reset Coffee is a modern web application built for cafés and bars that allows customers to view the menu by scanning a QR code. The menu opens directly in the browser, providing a fast, clean, and simple alternative to traditional physical menus.

## Features

- **QR Code Access**  
  Customers scan a code to open the menu instantly—no app downloads required.

- **Organized Menu**  
  Items are clearly displayed by categories (e.g., Coffee, Tea, Pastries).

- **Mobile-First Design**  
  Fully responsive and optimized for smartphones and tablets.

- **Fast & Lightweight**  
  Built with React and Vite for a smooth, quick-loading experience.

- **Clean UI**  
  Intuitive and user-friendly interface designed for easy browsing.

## Live Demo & QR Code

The application is deployed and ready to use. Scan the QR code below with your phone's camera or click the link to view the live menu.

**Live URL:**  
https://ivanpavlovic-web.github.io/reset-qr/

![QR Code](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://ivanpavlovic-web.github.io/reset-qr/)

Scan this code to open the menu.

## Screenshots

### Main Menu View

![Main Menu](https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80)

The main menu interface, showcasing different drink categories.

### Mobile View

![Mobile View](https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80)

The responsive design ensures a perfect experience on any device.

## Tech Stack

- **React** – Building the interactive user interface  
- **Vite** – Fast build tool and development server  
- **JavaScript (ES6+)** – Core programming language  
- **CSS** – Styling and responsive layout  

## Getting Started

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm (usually comes with Node.js)

### Installation

Clone the repository:
```bash
git clone https://github.com/IvanPavlovic-web/reset-qr.git
cd reset-qr
```
Install dependencies:
```bash
npm install
```
Start the development server:
```bash
npm run dev
```
Open your browser and navigate to http://localhost:5173

## Project Structure
```bash
reset-qr/
├── src/
│   ├── components/
│   │   ├── MenuCategory.jsx
│   │   ├── MenuItem.jsx
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── menuItems.js
│   ├── styles/
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── index.html
├── package.json
├── vite.config.js
└── README.md
```
