export const loadState = <T>(key: string, fallback: T): T => {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw == null) return fallback;
    return JSON.parse(raw) as T;
  } catch (e) {
    console.warn("Error loading state from localStorage:", e);
    return fallback;
  }
};

export const saveState = <T>(key: string, state: T): void => {
  if (typeof window === "undefined") return;
  try {
    const raw = JSON.stringify(state);
    window.localStorage.setItem(key, raw);
  } catch (e) {
    console.warn("Error saving state to localStorage:", e);
  }
};
