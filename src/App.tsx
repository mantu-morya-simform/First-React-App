import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import CounterIncSame from "./components/CounterIncSame";
import PrintDetail from "./components/PrintDetail";
import RenderList from "./components/RenderList";
import ReusedComponent from "./components/ReusedComponent";

function App() {
  console.log("hello");
  return (
    <>
      {/* component to print Detail */}
      <PrintDetail />
      <Button />
      <RenderList />
      <ReusedComponent name="Mantu" />
      <ReusedComponent name="Krish" />
      <ReusedComponent name="Satyam" />
      {/* // counter update same time */}
      <CounterIncSame />
      {/*use different counter instance so it separately increment both counter */}
      <Counter />
    </>
  );
}

export default App;
