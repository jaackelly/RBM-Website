# Rising Barber Mentorship - Landing Page

A modern, responsive landing page built with Next.js 14+ for "Rising Barber Mentorship" business. This single-page application features video training and calendar booking functionality with clean, professional design.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Video Section**: Placeholder for Loom video integration
- **Calendar Booking**: Mock interface ready for Calendly integration
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Built with Next.js 14+ App Router for optimal loading

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **TypeScript**: Full type safety
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
barber-landing/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Dark header with branding
│   │   ├── VideoSection.tsx    # Video placeholder with play interface
│   │   ├── CalendarSection.tsx # Mock calendar for booking
│   │   └── Footer.tsx          # Professional footer
│   ├── globals.css             # Global styles and Tailwind
│   ├── layout.tsx              # Root layout with SEO metadata
│   └── page.tsx                # Main landing page
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
└── package.json               # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone and navigate to the project:**
   ```bash
   cd barber-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Integration Points

### Video Integration (Loom)

**Location**: `app/components/VideoSection.tsx`

**Current State**: Placeholder with play button and loading states

**Integration Steps**:
1. Replace the placeholder `<div>` with Loom embed iframe
2. Update `handlePlayClick` function to control video playback
3. Maintain the 16:9 aspect ratio container

**Code Location**:
```typescript
// TODO: Replace this placeholder with Loom embed code when provided
// Loom embed iframe will be inserted here
```

### Calendar Integration (Calendly)

**Location**: `app/components/CalendarSection.tsx`

**Current State**: Mock calendar interface with June 2025 dates

**Integration Steps**:
1. Replace mock calendar with Calendly embed widget
2. Configure Calendly settings via props or data attributes
3. Style the embed to match site design
4. Update booking confirmation flow

**Code Location**:
```typescript
// TODO: Replace with actual Calendly integration when provided
console.log('Book call clicked - Calendly integration will be added here')
```

## 🎨 Design System

### Colors

- **Primary Blue**: `#3B82F6` (blue-600)
- **Success Green**: `#22C55E` (green-600)  
- **Dark Background**: `#000000` (black)
- **Light Background**: `#FFFFFF` (white)
- **Text**: `#111827` (gray-900)

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights (600-900)
- **Body**: Regular weight (400)
- **Responsive**: Mobile-first approach

### Components

Custom CSS classes in `globals.css`:
- `.container-custom`: Responsive container
- `.btn-primary`: Primary button styling
- `.video-container`: 16:9 video container
- `.calendar-date-*`: Calendar date states

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## 🔍 SEO & Meta Tags

- Comprehensive meta tags in `layout.tsx`
- Open Graph and Twitter Card support
- Semantic HTML structure
- Accessibility attributes

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect GitHub repository to Vercel**
2. **Configure build settings:**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables** (when needed):
   ```
   NEXT_PUBLIC_CALENDLY_URL=your_calendly_url
   LOOM_VIDEO_ID=your_loom_video_id
   ```

### Other Platforms

The project works with any platform supporting Next.js:
- Netlify
- Railway
- Digital Ocean App Platform

## 📋 Development Checklist

### Initial Build ✅
- [x] Next.js project setup
- [x] Component structure
- [x] Responsive design
- [x] Video placeholder
- [x] Calendar mock interface
- [x] SEO optimization

### Future Integrations
- [ ] Loom video embed
- [ ] Calendly calendar integration
- [ ] Analytics tracking
- [ ] Contact form backend
- [ ] Payment processing (if needed)

## 🛠️ Customization

### Updating Content

1. **Headlines**: Edit in `app/page.tsx`
2. **Video Details**: Update `app/components/VideoSection.tsx`
3. **Calendar Dates**: Modify `app/components/CalendarSection.tsx`
4. **Contact Info**: Update `app/components/Footer.tsx`

### Styling Changes

1. **Colors**: Update `tailwind.config.ts`
2. **Fonts**: Modify `app/layout.tsx`
3. **Components**: Edit `app/globals.css`

## 📞 Support

For questions about integration or customization:

- **Email**: info@risingbarbermentorship.com
- **Documentation**: See component comments for integration notes

## 📄 License

© 2025 Rising Barber Mentorship. All rights reserved.

---

**Note**: This is the initial build with placeholder integrations. Video (Loom) and calendar (Calendly) integrations will be added in the next phase of development.
