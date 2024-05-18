

// Multithread in Node JS using worker thread
// create a new thread using the function parentPort.on

const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  // This is the main thread
  const worker = new Worker(__filename);
  worker.on('message', message => {
    console.log('Received message from worker:', message);
  });
  worker.postMessage('Hello from main thread!');
} else {
  // This is the worker thread
  parentPort.on('message', message => {
    console.log('Received message from main thread:', message);
    parentPort.postMessage('Hello from worker thread!');
  });
}


// This is used to scale Node JS application
// Create multiple process based on no of CPUs available

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case, it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}



// MicroFrontEnd - Module Federation
// Custom event communication
// In Microfrontend 1
const event = new CustomEvent('custom-event', { detail: { data: 'some data' } });
window.dispatchEvent(event);

// In App Shell or another Microfrontend
window.addEventListener('custom-event', (event) => {
  console.log(event.detail.data);
});


// Shared State communication
// Shared store setup (could be in a separate package)
import { createStore } from 'redux';

const initialState = {
  value: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
