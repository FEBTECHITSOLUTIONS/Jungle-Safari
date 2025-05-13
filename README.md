Jungle Safari 🐯🌿

Welcome to Jungle Safari, a beautifully crafted website for booking and exploring safari experiences in Jim Corbett National Park. Whether you're planning a thrilling Jeep Jungle Safari, a group-friendly Canter Safari, or a serene Elephant Ride, this website provides all the information you need to make your adventure unforgettable.
🌐 Live Demo
Check out the live website at jungle-safari.vercel.app.
📂 Repository
Find the source code on GitHub: https://github.com/Anasmalik57/Jungle-Safari.
📖 About the Project
Jungle Safari is a Next.js-based web application designed to help users explore and book safari experiences in Jim Corbett National Park, one of India's oldest tiger reserves. The website offers detailed information about safari services, the history of Jim Corbett, travel options, and a stylish contact form for inquiries. With a focus on user experience, SEO optimization, and responsive design, this project aims to provide an engaging platform for wildlife enthusiasts.
Key Features

Safari Services: Detailed cards for Jeep Jungle Safari, Canter Safari, and Elephant Ride with descriptions, highlights, and images.
History & Travel Info: Learn about the history of Jim Corbett National Park and how to reach it via road, train, bus, or air.
Stylish Contact Form: A modern contact form using FormSubmit to send inquiries directly to the admin email.
Responsive Design: Fully responsive layout that works seamlessly on desktops, tablets, and mobile devices.
SEO Optimized: Integrated keywords ("Jungle Safari," "Jim Corbett," "Jim Corbett Safari") and metadata for better search visibility.
Interactive UI: Smooth animations, hover effects, and a blue-gold color scheme for a professional and engaging look.
WhatsApp CTA: Direct WhatsApp link for quick inquiries and bookings.

🚀 Getting Started
Follow these steps to set up and run the project locally.
Prerequisites

Node.js (v14 or higher)
npm or Yarn
Git

Installation

Clone the Repository:
git clone https://github.com/Anasmalik57/Jungle-Safari.git
cd Jungle-Safari


Install Dependencies:
npm install

or
yarn install


Set Up Environment Variables:

This project uses FormSubmit for the contact form. Ensure the email (itsanas477@gmail.com) is verified with FormSubmit.
No additional environment variables are required for this project.


Run the Development Server:
npm run dev

or
yarn dev

The app will be available at http://localhost:3000.


Deployment
The project is deployed on Vercel. To deploy your own version:

Push your changes to GitHub.
Connect your repository to Vercel.
Deploy with Vercel's default settings for Next.js projects.
Live URL: jungle-safari.vercel.app



🛠️ Technologies Used

Next.js: React framework for server-side rendering and static site generation.
React: Frontend library for building UI components.
Tailwind CSS: Utility-first CSS framework for styling.
React Icons: Icon library for thematic icons (e.g., FaEnvelope, FaHistory).
FormSubmit: Service for handling form submissions via email.
Vercel: Hosting and deployment platform.

📄 Project Structure
Jungle-Safari/
├── components/          # React components (Navbar, Hero, ContactForm, etc.)
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── AboutSection.jsx
│   ├── SafariPackage.jsx
│   ├── SafariZones.jsx
│   ├── GallerySection.jsx
│   ├── SafariServed.jsx
│   ├── CorbettLegacy.jsx
│   ├── ContactForm.jsx
│   └── Footer.jsx
├── pages/              # Next.js pages
│   ├── index.jsx       # Home page
│   └── _app.jsx        # Custom App component
├── public/             # Static assets (images, etc.)
│   ├── images/
│   └── favicon.ico
├── styles/             # Global styles (if any)
│   └── globals.css
├── tailwind.config.js  # Tailwind CSS configuration
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation

📈 SEO Optimization
The website is optimized for search engines with the following features:

Metadata: Each page includes SEO metadata (title, description, keywords) to improve search visibility.export const metadata = {
  title: "Jungle Safari | Jim Corbett National Park",
  description: "Book your Jungle Safari in Jim Corbett National Park. Explore Jeep, Canter, and Elephant Safaris with ease.",
  keywords: "Jungle Safari, Jim Corbett, Jim Corbett Safari",
};


Semantic HTML: Structured markup for better indexing.
Schema Markup: Added for key sections (e.g., Contact Page, Tourist Attraction).

To further enhance SEO:

Add more schema markup for events or offers.
Optimize images with descriptive alt text.

📧 Contact Form Setup
The contact form uses FormSubmit to send inquiries to itsanas477@gmail.com. After submission, users are redirected to https://corbettjunglesafari.in. To set up the form:

Verify the email (itsanas477@gmail.com) with FormSubmit.
Ensure the redirect URL (https://corbettjunglesafari.in) is correct and accessible.
Optionally enable CAPTCHA on FormSubmit's dashboard for added security.

🤝 Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m "Add your feature").
Push to your branch (git push origin feature/your-feature).
Open a Pull Request on GitHub.

Please ensure your code follows the project's coding style and includes relevant tests.
📜 License
This project is licensed under the MIT License. See the LICENSE file for details.
🙏 Acknowledgements

Thanks to FormSubmit for the easy form submission service.
Icons provided by React Icons.
Hosted on Vercel for seamless deployment.


🌟 Happy Safari Planning! 🌟For any inquiries, reach out via the Contact Form or directly on GitHub.
