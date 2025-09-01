export const loadState = <T>(key: string, fallback: T): T => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return fallback; // si no hay nada en localStorage => fallback (MOK)
    }
    return JSON.parse(serializedState) as T;
  } catch (e) {
    console.warn("Error loading state from localStorage:", e);
    return fallback;
  }
};

export const saveState = <T>(key: string, state: T): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (e) {
    console.warn("Error saving state to localStorage:", e);
  }
};
