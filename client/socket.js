import {EventEmitter} from 'events';

class Socket {
  constructor(ws, ee = new EventEmitter()) {
    this.ws = ws;
    this.ee = ee;

    ws.onmessage = this.message.bind(this);
    ws.onopen = this.open.bind(this);
    ws.onclose = this.close.bind(this);
    ws.onerror = this.error.bind(this);
  }
  on(name, fn) {
    this.ee.on(name, fn);
  }
  off (name, fn) {
    this.ee.removeListener(name, fn);
  }
  emit(name, data) {
    const message = JSON.stringify({name, data});
    this.ws.send(message);
  }
  message(e) {
    console.log('[WS] message');
    try {
      console.log(e.data);
      const message = JSON.parse(e.data);
      this.ee.emit(message.name, message.data);
    }
    catch (err) {
      this.ee.emit('error', err);
    }
  }
  open() {
    console.log('[WS] connect');
    this.ee.emit('connect');
  }
  close(e) {
    console.warn('[WS] disconnect: ');
    console.warn(e);
    this.ee.emit('disconnect');
  }
  error(e) {
    console.error('[WS] error: ');
    console.error(e);
  }
}

export default Socket;
