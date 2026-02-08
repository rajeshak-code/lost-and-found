
/**
 * Get all items of a specific type ("lost" or "found")
 * @param {string} type - "lost" or "found"
 * @returns {Array} Filtered items
 */
function getItemsByType(type) {
  return items.filter(item => item.type === type);
}

/**
 * Get a single item by its ID
 * @param {string|number} id - Item ID from URL or data
 * @returns {Object|undefined} Matching item or undefined
 */
function getItemById(id) {
  return items.find(item => item.id == id);
}

/**
 * Get ALL items (both lost and found)
 * Useful for search or future features
 * @returns {Array} All items
 */
function getAllItems() {
  return [...items];
}

// ────────────────────────────────────────────────
// LocalStorage Integration (for user-submitted reports)
// ────────────────────────────────────────────────

/**
 * Get user-submitted items from localStorage (simulated database)
 * @returns {Array} Array of user-reported items
 */
function getUserSubmittedItems() {
  const stored = localStorage.getItem('lostFoundItems');
  return stored ? JSON.parse(stored) : [];
}

/**
 * Get combined items: static data + user submissions
 * Use this instead of getItemsByType() if you want reported items to appear
 * @param {string} type - Optional: filter by "lost" or "found"
 * @returns {Array} Merged and optionally filtered items
 */
function getAllItemsIncludingUserSubmitted(type = null) {
  let all = [...items]; // static sample data

  const userItems = getUserSubmittedItems();
  all = [...all, ...userItems];

  // Optional: sort by date (newest first)
  all.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (type) {
    return all.filter(item => item.type === type);
  }
  return all;
}

// ────────────────────────────────────────────────
// Utility Functions (optional but useful)
// ────────────────────────────────────────────────

/**
 * Format a date string nicely (e.g., 2026-02-05 → Feb 05, 2026)
 * @param {string} dateStr - YYYY-MM-DD
 * @returns {string} Formatted date
 */
function formatDate(dateStr) {
  if (!dateStr) return "Date not specified";
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

/**
 * Get badge class based on item type
 * @param {string} type - "lost" or "found"
 * @returns {string} CSS class (badge-lost or badge-found)
 */
function getBadgeClass(type) {
  return type === 'lost' ? 'badge-lost' : 'badge-found';
}

/**
 * Get badge text
 * @param {string} type - "lost" or "found"
 * @returns {string} "LOST" or "FOUND"
 */
function getBadgeText(type) {
  return type === 'lost' ? 'LOST' : 'FOUND';
}

// ────────────────────────────────────────────────
// Optional: Clear localStorage (for testing/demo reset)
// Call this from console if needed: clearUserSubmissions()
// ────────────────────────────────────────────────

function clearUserSubmissions() {
  localStorage.removeItem('lostFoundItems');
  console.log('User-submitted items cleared.');
  alert('Demo submissions cleared! Refresh pages to see changes.');
}

// ────────────────────────────────────────────────
// Export / Global Availability
// In a larger project you'd use modules, but for simple static site:
// these functions are globally available after <script src="js/script.js">
// ────────────────────────────────────────────────

console.log("script.js loaded – helpers ready for Lost & Found Portal");