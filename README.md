# Project Name - React Video Platform

A modern YouTube-style video platform built with React.js and Tailwind CSS, featuring a dark theme and responsive design.

## 🚀 Features

- **React.js Architecture**: Modern component-based structure with hooks
- **YouTube-Style Layout**: Top header, left sidebar, and main content area
- **Dark Theme**: Beautiful dark interface with purple accents
- **Responsive Design**: Works perfectly on all devices
- **Interactive Components**: Hover effects, state management, and smooth animations
- **Tailwind CSS**: Utility-first CSS framework with custom theming

## 🎨 Design Features

- **Header**: Search functionality, logo, and user profile
- **Sidebar**: Navigation icons and following section with user avatars
- **Hero Section**: Featured video with gradient background
- **Video Grid**: Popular videos with filter categories
- **Shorts Section**: Horizontal scrollable short videos
- **Modern UI**: Clean, professional interface with smooth transitions

## 🛠️ Tech Stack

- **React 18**: Latest React with hooks and modern features
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Autoprefixer**: Vendor prefix automation
- **Google Fonts**: Web typography (Inter, Poppins)
- **Font Awesome**: Professional icon library

## 📁 Project Structure

```
youtube-demo/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Top header with search
│   │   ├── Sidebar.jsx         # Left navigation sidebar
│   │   ├── MainContent.jsx     # Main content area
│   │   ├── VideoCard.jsx       # Video card component
│   │   └── ShortsCard.jsx      # Shorts card component
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   ├── input.css               # Tailwind CSS source
│   └── output.css              # Generated CSS (build)
├── index.html                  # HTML entry point
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
├── package.json                # Project dependencies
└── README.md                   # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Build CSS (first time)**

   ```bash
   npm run build:css:prod
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Available Scripts

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run build:css` - Watch mode for CSS development
- `npm run build:css:prod` - Production CSS build

## 🎨 Component Architecture

### App.jsx

Main application component that orchestrates the layout.

### Header.jsx

- Search functionality with state management
- Logo and branding
- User profile section

### Sidebar.jsx

- Navigation icons with active states
- Following section with user avatars
- Responsive hover effects

### MainContent.jsx

- Featured video hero section
- Popular videos with filter categories
- Shorts section with horizontal scroll
- Video grid layouts

### VideoCard.jsx

- Individual video display component
- Hover effects and click handlers
- Responsive design

### ShortsCard.jsx

- Short video display component
- Vertical aspect ratio
- Compact information display

## 🎨 Customization

### Colors

The project includes a comprehensive color system in `tailwind.config.js`:

- Primary, secondary, accent, and semantic colors
- Custom gradients and color variations

### Typography

- Inter: Primary body font
- Poppins: Display headings
- Custom font sizes and line heights

### Components

- Reusable component classes
- Custom utility classes
- Responsive breakpoints

## 📱 Responsive Features

- **Mobile**: Optimized for small screens
- **Tablet**: Responsive grid layouts
- **Desktop**: Full layout with sidebar
- **Large Screens**: Extended content areas

## 🔧 Development

### CSS Structure

- Tailwind directives in `src/input.css`
- Custom component classes
- Utility-first approach

### State Management

- React hooks for local state
- Component-level state management
- Event handlers and interactions

### Build Process

- Vite for fast development
- Tailwind CSS compilation
- PostCSS processing

## 🌟 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Fallbacks**: Graceful degradation for older browsers

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve the project.

---

**Built with ❤️ using React.js and Tailwind CSS**
