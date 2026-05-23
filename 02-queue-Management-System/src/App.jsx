import { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";
import './App.css';

export default function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting"}]);
  };
  const updateStatus = (id, newStatus) => {
    setQueue(queue.map( (customer) => ( 
      customer.id === id ? {...customer, status: newStatus} : customer
    )))
  };
  const removeFromQueue = (id) => {
    setQueue(queue.filter( (customer) => customer.id !== id));
  };

  return (
    <>
      <div className="app-container">
        <div className="app-wrapper">
          <header className="app-header">
            <h1> Queue Management System</h1>
            <p>Manage your customers efficiently</p>
          </header>
          <main className="app-main">
            <QueueForm onAdd={addToQueue}/>
            <QueueDisplay 
            queue={queue}
            onUpdateStatus={updateStatus}
            onRemove={removeFromQueue}
            />
          </main>
        </div>
      </div>
    </>
  );
}
