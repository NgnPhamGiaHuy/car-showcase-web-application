# 🚗 Car Showcase Web Application

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) 
![License](https://img.shields.io/badge/license-MIT-blue)
![Next.js](https://img.shields.io/badge/Next.js-13.4.19-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)

## 📝 Description

A modern web application for browsing, filtering, and viewing details of various car models. Built with Next.js, TypeScript, and Tailwind CSS, this platform connects to the Cars by API Ninjas for vehicle data and Imagin Studio API for car images, creating a responsive and interactive car browsing experience.

The application allows users to search for cars by manufacturer, model, year, and fuel type, making it easy to find specific vehicles based on preferences.

## ✨ Features

- **Search cars** by manufacturer with an autocomplete dropdown
- **Filter vehicles** by year of production and fuel type
- **View detailed specifications** including MPG, transmission type, and drive
- **Calculate rental prices** based on car age and efficiency
- **Responsive design** optimized for all device sizes
- **Server-side rendering** for improved performance and SEO
- **Modern UI** with smooth transitions and interactive elements

## 🖼️ Demo / Screenshots

![Car Showcase Demo](https://github.com/HinhNhuLaHuy/Web-Application-Car-Showcase/assets/84061230/dd7a3c42-9991-47a1-bb40-64a3c30d5f02)

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/ngnphamgiahuy/car-showcase-web-application.git

# Navigate to project directory
cd car-showcase-web-application

# Navigate to source directory
cd src

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Usage

After installation, the application will be running at http://localhost:3000. You can:

- Browse featured cars on the homepage
- Search for specific manufacturers using the search bar
- Filter cars by year and fuel type
- Click "View More" on any car card to see detailed specifications
- Navigate through multiple pages of results using the "Show More" button

## 🔧 Configuration

Create a `.env` file in the `src` directory with the following variables:

```env
RAPID_API_KEY=your_rapid_api_key
RAPID_API_HOST=cars-by-api-ninjas.p.rapidapi.com
```

You'll need to obtain an API key from RapidAPI for the Cars by API Ninjas service.

## 🗂️ Folder Structure

```
src/
├── app/                  # Next.js app directory
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Home page component
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── CarCard.tsx       # Car card component
│   ├── CarDetails.tsx    # Car details modal
│   ├── Catalogue.tsx     # Car catalogue section
│   ├── CustomButton.tsx  # Reusable button component
│   ├── Hero.tsx          # Hero section component
│   ├── SearchBar.tsx     # Search functionality
│   └── ...               # Other components
├── constants/            # Application constants
│   └── index.ts          # Manufacturers, years, fuel types
├── types/                # TypeScript type definitions
│   └── index.ts          # Interface definitions
├── utils/                # Utility functions
│   └── index.ts          # API calls, car image generation
├── public/               # Static assets
└── ...                   # Configuration files
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

```bash
# Create a new branch
git checkout -b feature/your-feature-name

# Commit your changes
git commit -m "Add your feature description"

# Push to the branch
git push origin feature/your-feature-name
```

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Headless UI](https://headlessui.dev/) - For accessible UI components
- [Cars by API Ninjas](https://rapidapi.com/apininjas/api/cars-by-api-ninjas) - For car data
- [Imagin Studio](https://www.imagin.studio/) - For car images
