/**
 * Compute the angle (in radians) from point A to point B.
 * Returns value in range [-π, π].
 */
export function angleBetween(ax, ay, bx, by) {
  return Math.atan2(by - ay, bx - ax);
}

/**
 * Compute the shortest angular difference between two angles (radians).
 * Always returns a value in [0, π].
 */
export function angularDiff(a, b) {
  let diff = Math.abs(a - b);
  if (diff > Math.PI) diff = 2 * Math.PI - diff;
  return diff;
}

/**
 * 3D distance between two points in space.
 */
export function distance3D(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = (a.z || 0) - (b.z || 0);
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Given a swipe angle and a current word, find the best connected word
 * (via graph edges) whose spatial direction most closely matches the swipe.
 * Returns the target word object, or null if no edges exist.
 */
export function findBestEdgeByAngle(currentWord, edges, words, swipeAngle) {
  if (!currentWord) return null;

  // Collect all unique connected word IDs
  const connectedIds = new Set();
  edges.forEach(e => {
    if (e.from === currentWord.id) connectedIds.add(e.to);
    if (e.to === currentWord.id) connectedIds.add(e.from);
  });

  if (connectedIds.size === 0) return null;

  let bestWord = null;
  let bestDiff = Infinity;

  connectedIds.forEach(targetId => {
    const target = words.find(w => w.id === targetId);
    if (!target) return;

    const targetAngle = angleBetween(currentWord.x, currentWord.y, target.x, target.y);
    const diff = angularDiff(swipeAngle, targetAngle);

    if (diff < bestDiff) {
      bestDiff = diff;
      bestWord = target;
    }
  });

  return bestWord;
}
