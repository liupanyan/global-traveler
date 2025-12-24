import { SavedTrip } from './types';

const STORAGE_KEY = 'gp_saved_trips_v1';

export const getSavedTrips = (): SavedTrip[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to parse saved trips", e);
    return [];
  }
};

export const saveTrip = (trip: SavedTrip): void => {
  try {
    const current = getSavedTrips();
    // Add to the beginning of the list
    const updated = [trip, ...current];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to save trip", e);
    alert("保存失败，可能是存储空间已满。");
  }
};

export const deleteTrip = (id: string): SavedTrip[] => {
  try {
    const current = getSavedTrips();
    const updated = current.filter(t => t.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error("Failed to delete trip", e);
    return [];
  }
};
