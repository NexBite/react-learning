export default function CounterButtons({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '8px' }}>
        Decrease
      </button>
    </div>
  );
}