import "./App.css";
import Stepper from "./Stepper";

function App() {
  const step = [
    {
      id: "1",
      component: () => {
        return <div>Start</div>;
      },
    },
    {
      id: "2",
      component: () => {
        return <div>Address</div>;
      },
    },
    {
      id: "3",
      component: () => {
        return <div>Payment</div>;
      },
    },
    {
      id: "4",
      component: () => {
        return <div>Complete</div>;
      },
    },
  ];

  return (
    <div
      style={{
        // height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Stepper steps={step} />
    </div>
  );
}

export default App;
