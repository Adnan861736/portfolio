# Portfolio Website - Adnan Hlwnji

A professional portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring a modern dark theme and bilingual support (English/Arabic).

## ✨ Features

- **Modern Design**: Clean, professional dark theme with smooth animations
- **Bilingual Support**: Full Arabic and English localization
- **Project Gallery**: Interactive project cards with modal details
- **Image Carousel**: Touch-enabled image carousel in project modals
- **Responsive**: Fully responsive design for all devices
- **Performance Optimized**:
  - Next.js Image optimization
  - Lazy loading
  - Fast page loads
- **SEO Ready**: Optimized meta tags and semantic HTML

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js Image component

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd portofolioo
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Add your images:
   - Add your profile picture as \`/public/profile.jpg\`
   - Add project screenshots in \`/public/projects/\` folders
   - See \`/public/projects/README.md\` for detailed instructions

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

\`\`\`
portofolioo/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── ProjectCard.tsx   # Project card component
│   │   └── ProjectModal.tsx  # Project modal with carousel
│   └── data/
│       └── projects.ts       # Project data
├── public/
│   ├── projects/             # Project screenshots
│   ├── profile.jpg           # Your profile picture
│   └── Adnan_Hlwnji_CV (1).pdf  # Your CV
├── tailwind.config.js        # Tailwind configuration
└── next.config.ts            # Next.js configuration
\`\`\`

## 🎨 Customization

### Adding New Projects

Edit \`src/data/projects.ts\` and add your project:

\`\`\`typescript
{
  id: 'your-project-id',
  title: {
    en: 'Project Title',
    ar: 'عنوان المشروع'
  },
  description: {
    en: 'Project description...',
    ar: 'وصف المشروع...'
  },
  images: [
    '/projects/your-project/main.png',
    '/projects/your-project/details.png',
    '/projects/your-project/mobile.png',
  ],
  githubUrl: 'https://github.com/your-username/your-repo',
  tags: ['React', 'TypeScript', 'etc'],
  featured: true // or false
}
\`\`\`

### Updating Personal Information

1. **Contact Info**: Update in \`src/app/page.tsx\`
2. **CV**: Replace \`public/Adnan_Hlwnji_CV (1).pdf\`
3. **Profile Picture**: Replace \`public/profile.jpg\`
4. **GitHub URL**: Update in \`src/app/page.tsx\`

### Styling

- **Colors**: Edit \`tailwind.config.js\` to change theme colors
- **Fonts**: Modify in \`src/app/layout.tsx\`
- **Animations**: Add custom animations in \`tailwind.config.js\`

## 📸 Adding Your Images

### Profile Picture
Add your profile picture as:
- Path: \`/public/profile.jpg\`
- Recommended: Square image, 500x500px minimum

### Project Screenshots
For each project, add 3 images:

**BookStore Project:**
- \`public/projects/bookstore/main.png\`
- \`public/projects/bookstore/details.png\`
- \`public/projects/bookstore/mobile.png\`

**Other Projects:**
Follow the same pattern for souq, food-delivery, crud, and portfolio projects.

**Image Guidelines:**
- Format: PNG or JPG
- Size: 1200x800px recommended
- File size: Keep under 500KB for optimal performance

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📝 Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm start\` - Start production server
- \`npm run lint\` - Run ESLint

## 🎯 Features Breakdown

### Language Toggle
Switch between English and Arabic with RTL support

### Project Modal
- Image carousel with navigation
- Touch/swipe support
- Project description
- Technology tags
- GitHub link

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Touch-friendly interactions

### Performance
- Image optimization with Next.js Image
- Lazy loading
- Code splitting
- Fast page loads

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Adnan Hlwnji**
- GitHub: [@Adnan861736](https://github.com/Adnan861736)
- Email: adnanhlwngi@gmail.com
- Phone: +963646590668

---

Made with ❤️ using Next.js and Tailwind CSS
