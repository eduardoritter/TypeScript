interface EventObserver {
  notify() : void
}

class EventObserverImpl implements EventObserver {
  constructor(private name: string){}
  notify(): void {
    console.log('notify event ' + this.name )
  }
}

interface EventNotifier {
  add(observer: EventObserver) : void
  notifyAll(): void
}

class EventNotifierImpl implements EventNotifier {
  
  private observers = new Set<EventObserver>()

  add(observer: EventObserver): void {
    this.observers.add(observer)
  }

  notifyAll(): void {
    this.observers.forEach((observer) => {
      observer.notify()
    })
  }
}

const eventCreate = new EventObserverImpl('Create');
const eventUpdate = new EventObserverImpl('Update');

const eventNotifier = new EventNotifierImpl();
eventNotifier.add(eventCreate)
eventNotifier.add(eventUpdate)

eventNotifier.notifyAll()

const eventDelete = new EventObserverImpl('Delete');
eventNotifier.add(eventDelete)

eventNotifier.notifyAll()
