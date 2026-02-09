// js/script.js
// Common JavaScript utilities for the Lost & Found Portal

// ────────────────────────────────────────────────
// Core Data Access Functions
// ────────────────────────────────────────────────

/**
 * Get all items of a specific type ("lost" or "found")
 * @param {string} type - "lost" or "found"
 * @returns {Array} Filtered items
 */
function getItemsByType(type) {
  const all = getAllItemsIncludingUserSubmitted();
  
  const filtered = all.filter(item => {
    const itemType = item.type ? item.type.trim().toLowerCase() : '';
    const match = itemType === type.toLowerCase();
    return match;
  });

  console.log(`getItemsByType("${type}") returned ${filtered.length} items`);

  return filtered;
}

/**
 * Get a single item by its ID (checks both static + user-submitted)
 * @param {string|number} id - Item ID
 * @returns {Object|undefined} Matching item or undefined
 */
function getItemById(id) {
  const allItems = getAllItemsIncludingUserSubmitted();
  return allItems.find(item => item.id == id);
}

/**
 * Get ALL items (both lost and found) including user-submitted ones from localStorage
 * @returns {Array} All items sorted by date (newest first)
 */
function getAllItemsIncludingUserSubmitted() {
  let all = [...items]; // static sample data from data.js

  // Load user-submitted items from localStorage
  const stored = localStorage.getItem('lostFoundItems');
  if (stored) {
    const userItems = JSON.parse(stored);
    all = [...all, ...userItems];
  }

  // Sort by date (newest first)
  all.sort((a, b) => new Date(b.date) - new Date(a.date));

  return all;
}

/**
 * Get user-submitted items from localStorage only
 * @returns {Array} User-reported items
 */
function getUserSubmittedItems() {
  const stored = localStorage.getItem('lostFoundItems');
  return stored ? JSON.parse(stored) : [];
}

// ────────────────────────────────────────────────
// Utility Functions
// ────────────────────────────────────────────────

/**
 * Format date nicely (e.g., 2026-02-05 → Feb 05, 2026)
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
 */
function getBadgeClass(type) {
  return type === 'lost' ? 'badge-lost' : 'badge-found';
}

/**
 * Get badge text
 */
function getBadgeText(type) {
  return type.toUpperCase();
}

// ────────────────────────────────────────────────
// Clear demo data (useful for testing)
// Call from console: clearUserSubmissions()
// ────────────────────────────────────────────────
function clearUserSubmissions() {
  localStorage.removeItem('lostFoundItems');
  console.log('User-submitted items cleared.');
  alert('Demo user reports cleared! Refresh pages to see changes.');
}

console.log("script.js loaded – helpers ready (with localStorage merge)");