class Log {
  #sport;
  #distance;
  #duration;
  constructor(sport, distance, duration) {
    this.#sport = sport;
    this.#distance = distance;
    this.#duration = duration;
  }
  get distance() {
    return this.#distance;
  }
  get sport() {
    return this.#sport;
  }
  get duration() {
    return this.#duration;
  }
}
export default Log;
