function MenuItem(props) {
  return (
    <div className="menu-item" style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
      <p><i>{props.description}</i></p>
    </div>
  );
}

export default MenuItem;