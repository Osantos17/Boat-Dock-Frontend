export function BoatsNew(props) {

  const handleSubmit = (event) => {
      event.preventDefault();
     const params = new FormData(event.target);
     props.onCreateBoat(params, () => event.target.reset());
   };


  return (
    <div>
      <h1>New Boat</h1>
      <form onSubmit = {handleSubmit}>
        <div>
          Name: <br /><input name="name" type="text" />
        </div>
        <div>
          Size: <br /><input name="size" type="text" />
        </div>
        <div>
          Captain: <br /><input name="captain" type="text" />
        </div>
        <br />
        <button type="submit">Create boat</button>
      </form>
    </div>
  );
}