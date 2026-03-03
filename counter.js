class Counter {
  #value;
  #storageKey;

  constructor(initialValue = 0, storageKey = null) {
    this.#storageKey = storageKey;
    this.#value = this.#loadInitialValue(initialValue);
  }

  increment() {
    this.#value += 1;
    this.#writeValue(this.#value);
    return this.#value;
  }

  getValue() {
    return this.#value;
  }

  reset(value = 0) {
    this.#value = value;
    this.#writeValue(this.#value);
    return this.#value;
  }

  #loadInitialValue(fallback) {
    if (!this.#storageKey) {
      return fallback;
    }

    try {
      const stored = localStorage.getItem(this.#storageKey);
      if (stored !== null) {
        const parsed = Number(stored);
        if (!Number.isNaN(parsed)) {
          return parsed;
        }
      }
    } catch {
      // Ignore failures (e.g., localStorage unavailable) and fall back to initial value.
    }

    this.#writeValue(fallback);
    return fallback;
  }

  #writeValue(value) {
    if (!this.#storageKey) {
      return;
    }

    try {
      localStorage.setItem(this.#storageKey, String(value));
    } catch {
      // Ignore failures so the counter still works without persistence.
    }
  }
}

window.Counter = Counter;
