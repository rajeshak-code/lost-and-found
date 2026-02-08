// js/data.js
// Sample data for the Lost & Found Portal (static version)
// In a real app, this would come from a database (MongoDB, Firebase, etc.)
// For demo: new reports from report.html are stored in localStorage and can be merged

const items = [
  {
    id: 1,
    type: "lost",
    title: "Black Samsung Galaxy Buds",
    category: "Electronics",
    description: "Wireless earbuds in black case with small scratch on the lid. Last used during lunch break.",
    location: "College Canteen, Main Campus",
    date: "2026-02-05",
    contact: "rajesh.kumar@example.com / 98765 43210",
    image: "images/items/earbuds.jpg",
    status: "Pending"
  },
  {
    id: 2,
    type: "found",
    title: "Brown Leather Wallet",
    category: "Accessories",
    description: "Men's brown leather wallet containing some cash, PAN card, and college ID (name: Arjun). No phone inside.",
    location: "Central Library - Staircase area",
    date: "2026-02-06",
    contact: "finder.annapurna@gmail.com",
    image: "images/items/wallet.jpg",
    status: "Pending"
  },
  {
    id: 3,
    type: "lost",
    title: "College ID Card ",
    category: "Documents",
    description: "Student ID card with photo, roll no. 2023CS045, Department of Computer Science. Laminated.",
    location: "Bus Stop near Main College Gate",
    date: "2026-02-07",
    contact: "rajesh.kumar@example.com / 98765 43210",
    image: "images/items/id-card.jpg",
    status: "Pending"
  },
  {
    id: 4,
    type: "found",
    title: "Blue Umbrella (foldable)",
    category: "Accessories",
    description: "Medium-sized blue folding umbrella with white handle. Found after rain near auditorium.",
    location: "Main Auditorium Entrance",
    date: "2026-02-08",
    contact: "sneha.hostelwarden@gmail.com / 91234 56789",
    image: "images/items/umbrella.jpg",
    status: "Pending"
  },
  {
    id: 5,
    type: "lost",
    title: "Silver Analog Watch",
    category: "Jewelry",
    description: "Simple silver watch with black dial and leather strap. Lost during sports hour.",
    location: "Playground near Basketball Court",
    date: "2026-02-04",
    contact: "vignesh.sports@gmail.com",
    image: "images/items/watch.jpg",
    status: "Pending"
  },
  {
    id: 6,
    type: "found",
    title: "Red Notebook (Physics notes)",
    category: "Books",
    description: "Red spiral notebook with handwritten physics notes for semester 4. Name written inside: Priya.",
    location: "Lecture Hall 102 - Last bench",
    date: "2026-02-07",
    contact: "priya.phydept@example.com",
    image: "images/items/notebook.jpg",
    status: "Pending"
  },
  {
    id: 7,
    type: "lost",
    title: "Black Hoodie (size M)",
    category: "Clothing",
    description: "Black Nike hoodie with white logo on chest. Left in common room after group study.",
    location: "Boys Hostel Block C - Common Room",
    date: "2026-02-09",
    contact: "karthik.hostel@gmail.com / 99887 76655",
    image: "images/items/hoodie.jpg",
    status: "Pending"
  }
];

// Helper Functions

function getItemsByType(type) {
  // Returns all items of given type ("lost" or "found")
  // You can extend this later with sorting by date, filtering, etc.
  return items.filter(item => item.type === type);
}

function getItemById(id) {
  // Find single item by ID (used in details.html)
  return items.find(item => item.id == id);
}

// Optional: Function to get ALL items (useful if you add search/filter later)
function getAllItems() {
  return [...items];
}

// ────────────────────────────────────────────────
// How to merge with user-submitted items from report.html (localStorage)
// Add this to your listing pages (lost.html, found.html, index.html) if you want
// demo persistence across refreshes in the same browser

/*
function getAllItemsIncludingUserSubmitted() {
  let all = [...items];
  const stored = localStorage.getItem('lostFoundItems');
  if (stored) {
    const userItems = JSON.parse(stored);
    all = [...all, ...userItems];
  }
  // Optional: sort by date descending
  // all.sort((a, b) => new Date(b.date) - new Date(a.date));
  return all;
}
*/

// Then in lost.html / found.html, replace getItemsByType('lost') with:
// getAllItemsIncludingUserSubmitted().filter(item => item.type === 'lost')