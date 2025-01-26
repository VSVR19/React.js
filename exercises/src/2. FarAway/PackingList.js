const PackingList = props => {
  return <div className="list">
    <ul>
      {
        props.initialItems.map((item) => <li key={item.id}>
          <span style={ item.packed ? {textDecoration: 'line-through'} : {} }>{item.quantity} {item.description}</span>
          <button>❌</button>
        </li>)
      }
    </ul>
  </div>
};



export { PackingList };