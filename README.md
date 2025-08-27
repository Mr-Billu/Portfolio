# 🚀 Abdul Mueid - Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Design**: Clean and professional portfolio layout
- **Responsive**: Optimized for all devices and screen sizes
- **Smooth Animations**: Beautiful transitions powered by Framer Motion
- **Dark Theme**: Elegant dark color scheme with gradient accents
- **Interactive Navigation**: Smooth scrolling between sections
- **Performance Optimized**: Built with Vite for fast development and builds

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📱 Sections

- **Hero**: Introduction and call-to-action
- **About**: Personal information and skills
- **Projects**: Showcase of your work
- **Experience**: Professional experience and education
- **Footer**: Contact information and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🌐 Deployment

This portfolio is configured for GitHub Pages deployment.

### Deploy to GitHub Pages

1. **Push your code to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Set Source to "Deploy from a branch"
   - Select `gh-pages` branch
   - Save the changes

### Custom Domain (Optional)

If you have a custom domain:
1. Add your domain to the `homepage` field in `package.json`
2. Create a `CNAME` file in the `public` folder with your domain
3. Deploy again with `npm run deploy`

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── About.jsx
│   │   ├── BackgroundBlobs.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   └── Projects.jsx
│   ├── hooks/            # Custom React hooks
│   ├── config/           # Configuration files
│   ├── assets/           # Images and other assets
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors and Themes
- Modify the color scheme in `tailwind.config.js`
- Update gradient colors in component files
- Adjust background colors and text colors

### Content
- Update personal information in component files
- Add your own projects to the Projects component
- Modify the Experience section with your work history
- Update social media links in the Footer

### Styling
- Customize Tailwind classes in component files
- Modify animations in Framer Motion components
- Adjust spacing and layout as needed

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Name**: Abdul Mueid
- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

---

⭐ **Star this repository if you found it helpful!**
