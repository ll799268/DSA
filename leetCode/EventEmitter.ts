type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void
}

/**
 * 事件发射器
 */
class EventEmitter {
  private event: { [key: string]: Callback[] } = {}

  subscribe(eventName: string, callback: Callback): Subscription {
    eventName in this.event ?
      this.event[eventName].push(callback) :
      this.event[eventName] = [callback]

    return {
      unsubscribe: () => {
        this.event[eventName] = this.event[eventName].filter((cb: Callback) => cb !== callback)
      }
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    if (!(eventName in this.event)) return []
    return this.event[eventName].map((fn: Callback) => fn(...args))
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
