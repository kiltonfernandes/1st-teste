class Counter {
  #value;

  constructor(initialValue = 0) {
    this.#value = initialValue;
  }

  increment() {
    this.#value += 1;
    return this.#value;
  }

  getValue() {
    return this.#value;
  }

  reset(value = 0) {
    this.#value = value;
    return this.#value;
  }
}

window.Counter = Counter;
