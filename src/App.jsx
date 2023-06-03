import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="p-3">
      <Navbar />
      <div className="home-hero fraunces text-center rounded-4">
        <h1>Great coffee made simple</h1>
        <p className="barlow">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button className="btn">Create you plan</button>
      </div>
    </div>
  );
}

export default App;
