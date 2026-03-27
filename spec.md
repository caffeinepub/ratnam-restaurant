# Ratnam Restaurant - Visual Upgrade & Feature Enhancement

## Current State
- Multi-page React app: Home, Menu, Services, About, Contact
- Backend with submitOrder/submitReservation/getAllOrders/getAllReservations APIs
- Existing food images: chicken-biryani, fry-piece-biryani, natukodi, tandoori-wings-prawns, restaurant-interior
- Standard card-based UI with saffron/maroon color scheme
- ReservationModal already exists with full form fields
- No menu item images (text-only cards)
- No WhatsApp button, no Google Maps embed, no Today's Special, no veg/non-veg filter
- Phone placeholder on Contact page; real number is +91 9247479945

## Requested Changes (Diff)

### Add
- **Glassmorphism design system**: Glass cards (backdrop-blur, semi-transparent backgrounds, glass borders), translucent header on scroll, frosted overlays throughout
- **Traditional Andhra motifs**: Kolam-inspired decorative dividers between sections, lotus/paisley SVG accents, brass/gold gradient treatments, vermillion accents
- **Menu item images**: Show food images on menu cards. Mapping:
  - Biryani category: chicken-biryani, fry-piece-biryani, mutton-biryani, egg biryani (use chicken-biryani), veg biryani (use palak-paneer)
  - Natukodi: natukodi image
  - Tandoori: tandoori-wings-prawns, chicken-tikka, paneer (use chicken-tikka), tandoori-wings-prawns
  - Curries: butter-chicken, palak-paneer, fish-curry
  - Starters: chicken-65
  - Desserts: hyderabadi-dessert
  - Breads: no image (show placeholder color)
- **Veg/Non-veg filter** on Menu page: badge tags on items (green dot = veg, orange dot = non-veg), filter toggle buttons at top
- **Today's Special banner** on Home page between hero and Why Choose Us: rotating banner with featured dish and gold badge
- **WhatsApp floating button**: fixed bottom-right, links to wa.me with placeholder number, green with WhatsApp icon
- **Google Maps embed** on Contact page: iframe embed of the real address at Chodavaram, Andhra Pradesh
- **Real phone number**: Update Contact page phone to +91 9247479945

### Modify
- **index.css**: Add glass utility classes (.glass-card, .glass-header), Andhra motif CSS (decorative border patterns), keep existing OKLCH tokens
- **Header**: Apply glass morphism effect when scrolled (transparent + blur at top, becomes dark on scroll, or always glass)
- **Home page**: Add Today's Special section; apply glass styling to feature cards, testimonial cards
- **Menu page**: Add food images to each menu item card (thumbnail), add veg/non-veg filter
- **Contact page**: Add Google Maps iframe, update phone to +91 9247479945
- **App.tsx**: Add WhatsApp floating button component

### Remove
- Nothing to remove

## Implementation Plan
1. Update `index.css` - add glass utility classes (.glass-card with backdrop-blur + border), Andhra pattern decorative elements
2. Update `Header.tsx` - glassmorphism effect (backdrop-blur + transparent bg)
3. Update `Home.tsx` - Today's Special banner, glass cards for features/testimonials, kolam decorative dividers
4. Update `Menu.tsx` - add image thumbnails per item, veg/non-veg tags, filter UI
5. Update `Contact.tsx` - Google Maps iframe, real phone number
6. Update `App.tsx` - floating WhatsApp button
7. Validate and build
