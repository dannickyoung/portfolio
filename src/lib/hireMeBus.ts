const EVENT = "hire-me:open";

export function openHireMe() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(EVENT));
}

export function onHireMeOpen(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
}
