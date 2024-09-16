interface ComponentBProps {
  total?: number;
  handleTotal?: () => void;
}

const ComponentB = ({ total, handleTotal }: ComponentBProps) => {
  return (
    <>
      <h1>Total: {total} </h1>
      <button onClick={handleTotal}>Add</button>
    </>
  );
};

export default ComponentB;
