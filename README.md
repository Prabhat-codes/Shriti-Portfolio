# Shriti Chandra - Portfolio Website

A modern, clean portfolio website built with React.js for Shriti Chandra, a Software Developer & Product Manager.

## Features

- **Dark Theme Design**: Modern dark UI with orange accents matching the provided design
- **Responsive Layout**: Profile card on left, content sections on right
- **Sections Included**:
  - Hero section with stats
  - About section
  - Experience timeline
  - Skills & Tools
  - Education
  - Honors & Awards
  - Contact form

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── ProfileCard.js       # Left profile card
│   ├── Hero.js              # Hero section with title and stats
│   ├── About.js            # About section
│   ├── Experience.js       # Work experience timeline
│   ├── Skills.js           # Skills and tools
│   ├── Education.js        # Education history
│   ├── Awards.js           # Honors and awards
│   └── Contact.js           # Contact form
├── App.js                  # Main app component
├── App.css                 # App styles
├── index.js                # Entry point
└── index.css               # Global styles
```

## Customization

- Update profile information in `src/components/ProfileCard.js`
- Modify experience data in `src/components/Experience.js`
- Update skills in `src/components/Skills.js`
- Change colors in component CSS files (look for `#FF6B35` for orange accent)

## Technologies Used

- React 18
- CSS3 (Custom styling)
- Inter font family

## License

This project is private and personal.
