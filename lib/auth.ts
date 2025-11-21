/**
 * Simple authentication utility following OWASP best practices
 * Uses secure cookies for session management
 * 
 * Note: In production, cookies should be httpOnly, secure, and use SameSite=Strict
 * This implementation uses client-side cookies for demo purposes
 */

export interface User {
  email: string;
  name: string;
  memberSince: string;
}

/**
 * Set authentication cookie (client-side)
 * In production, this should be done server-side with httpOnly, secure, sameSite flags
 */
export function setAuthCookie(user: User) {
  if (typeof document === "undefined") return;
  
  // Set auth flag cookie (24 hour expiration)
  document.cookie = `clankers-auth=true; path=/; max-age=86400; SameSite=Lax`;
  
  // Set user data cookie (24 hour expiration)
  document.cookie = `clankers-user=${encodeURIComponent(JSON.stringify(user))}; path=/; max-age=86400; SameSite=Lax`;
}

/**
 * Remove authentication cookie (logout)
 */
export function removeAuthCookie() {
  if (typeof document === "undefined") return;
  
  // Clear auth cookies
  document.cookie = "clankers-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax";
  document.cookie = "clankers-user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax";
}

/**
 * Check if user is authenticated (client-side)
 */
export function isAuthenticated(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie.includes("clankers-auth=true");
}

/**
 * Get current user from cookie (client-side)
 */
export function getCurrentUser(): User | null {
  if (typeof document === "undefined") return null;
  
  const cookies = document.cookie.split("; ");
  const userCookie = cookies.find((cookie) => cookie.trim().startsWith("clankers-user="));
  
  if (!userCookie) return null;
  
  try {
    const userData = decodeURIComponent(userCookie.split("=")[1]);
    return JSON.parse(userData) as User;
  } catch {
    return null;
  }
}

