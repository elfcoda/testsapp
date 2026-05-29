import { Words } from './words.js';

// Create a map of morphemes to word IDs for quick lookup
const morphemeToWords = {};
Words.forEach(word => {
  word.morphemes.forEach(morpheme => {
    const morphemeKey = morpheme.text;
    if (!morphemeToWords[morphemeKey]) {
      morphemeToWords[morphemeKey] = [];
    }
    morphemeToWords[morphemeKey].push(word.id);
  });
});

// Build graph edges: connect words that share morphemes
export const graphEdges = [];
const addedEdges = new Set(); // Prevent duplicates

Object.entries(morphemeToWords).forEach(([morpheme, wordIds]) => {
  // Create a chain for each morpheme family
  for (let i = 0; i < wordIds.length - 1; i++) {
    const from = wordIds[i];
    const to = wordIds[i + 1];
    const edgeKey = `${from}->${to}`;
    
    if (!addedEdges.has(edgeKey)) {
      graphEdges.push({
        from,
        to,
        sharedMorpheme: morpheme
      });
      addedEdges.add(edgeKey);
    }
  }
  
  // Add cyclic edge back to first word
  if (wordIds.length > 1) {
    const from = wordIds[wordIds.length - 1];
    const to = wordIds[0];
    const edgeKey = `${from}->${to}`;
    
    if (!addedEdges.has(edgeKey)) {
      graphEdges.push({
        from,
        to,
        sharedMorpheme: morpheme
      });
      addedEdges.add(edgeKey);
    }
  }
});

/**
 * Get all words that contain a specific morpheme
 * @param {string} morphemeText - The morpheme to search for (e.g., "un-", "act", "-tion")
 * @returns {array} Array of word objects containing that morpheme
 */
export function getWordsByMorpheme(morphemeText) {
  const wordIds = morphemeToWords[morphemeText] || [];
  return wordIds
    .map(id => Words.find(w => w.id === id))
    .filter(w => w !== undefined);
}

/**
 * Get the next word in the morpheme chain (cyclic)
 * @param {string} currentWordId - The current word ID
 * @param {string} morphemeText - The morpheme shared in the chain
 * @returns {string|null} The next word ID, or null if not found
 */
export function getNextWordInMorphemeChain(currentWordId, morphemeText) {
  const wordIds = morphemeToWords[morphemeText];
  
  if (!wordIds || wordIds.length === 0) {
    return null;
  }
  
  const currentIndex = wordIds.indexOf(currentWordId);
  
  if (currentIndex === -1) {
    return null; // Current word not in this morpheme chain
  }
  
  // Cyclic: return to first if at end
  const nextIndex = (currentIndex + 1) % wordIds.length;
  return wordIds[nextIndex];
}

// Export morpheme map for advanced use cases
export { morphemeToWords };
