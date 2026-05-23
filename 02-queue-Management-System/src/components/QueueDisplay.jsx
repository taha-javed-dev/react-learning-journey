const QueueDisplay = ({queue, onUpdateStatus, onRemove}) => {
  const getStatusColor = (status) => {
    switch(status) {
      case "waiting": return "#ff9f43";
      case "serving": return "#10ac84";
      case "completed": return "#54a0ff";
      default:  return "#ee5253";
    }
  }
  return (
    <div className="queue-display-card">
        <h2 className="section-title">Current Queue</h2>
        {queue.lenght === 0 ? (
          <p className="no-data">No customer data</p>
        ) : (
          <div className="customer-list"> 
          {queue.map((customer) => (
            <div key={customer.id} className="customer-item">
              <div className="customer-info">
                <h3>{customer.name}</h3>
                <p>{customer.service}</p>
                <span 
                className="status-badge"
                style={{ color: getStatusColor(customer.status)}}
                >{customer.status}</span>
              </div>
              <div className="action-buttons">
                {customer.status === "waiting" && (
                  <button
                  className="btn btn-serve"
                  onClick={() => onUpdateStatus(customer.id, "serving") }
                  >Serve</button>
                )}
                {customer.status === "serving" && (
                  <button
                  className="btn btn-complete"
                  onClick={() => onUpdateStatus(customer.id, "completed") }
                  >Complete</button>
                )}
                <button 
                className="btn btn-remove"
                onClick={ () => onRemove(customer.id)}>Remove</button>
              </div>
            </div>
          ))}</div>
        )}
    </div>
  )
}
export default QueueDisplay;