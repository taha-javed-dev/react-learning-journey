import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
const QueueForm = ({ onAdd }) => {
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !service.trim()) return;
    onAdd({ name, service });
    setName("");
    setService("");
  };
  return (
    <>
      <form className="queue-form-card" onSubmit={handleSubmit}>
        <h2 className="section-title">Add to Queue</h2>
        <div className="input-group">
          <input
            className="form-input"
            value={name}
            type="text"
            placeholder="Customer name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <select
            className="form-select"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select Service</option>
            <option value="Cunsaltation">Cunsaltation</option>
            <option value="Payment">Payment</option>
            <option value="Support">Support</option>
          </select>
        </div>
        <button
          className="btn-submit"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          <FaUserPlus /> Add Customer
        </button>
      </form>
    </>
  );
};
export default QueueForm;
