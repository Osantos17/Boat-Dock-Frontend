export function BoatsIndex(props) {
  return (
    <div>
      <h1>All boats</h1>
      {props.boats.map((boat) => (
         <div key={boat.id}>
           <h2>Name: {boat.name}</h2>
           <p> Size: {boat.size}</p>
           <p>Captain: {boat.captain}</p>
         </div>
      ))}
    </div>
  );
}