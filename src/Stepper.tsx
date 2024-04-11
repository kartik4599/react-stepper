import { useState } from "react";

const Stepper: React.FC<{
  steps: {
    id: string;
    component: () => JSX.Element;
  }[];
}> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const CurrentComponent = steps[currentStep].component;

  const progressWidth = () => {
    const perStepWidth = (100 / (steps.length - 1)) * currentStep;

    return {
      width: `${perStepWidth}%`,
      height: "100%",
      background: "#15c422",
      transition: " all 0.5s ease-out",
    };
  };

  return (
    <>
      <div style={{ width: "100%", position: "relative", height: "100px" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            height: "50px",
            position: "absolute",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={step.id}
              style={{
                height: "50px",
                width: "50px",
                textAlign: "center",
                background:
                  index < currentStep
                    ? "#15c422"
                    : currentStep === index
                    ? "#1c98ff"
                    : "#ccc",
                borderRadius: "50%",
                margin: "0px 10px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
                zIndex: "2",
              }}
              onClick={() => setCurrentStep(index)}
            >
              <span>{step.id}</span>
            </div>
          ))}
        </div>
        <div
          style={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <div
            style={{
              zIndex: "1",
              margin: "0px 15px",
              display: "flex",
              width: "100%",
              background: "grey",
              height: "3px",
            }}
          >
            <div style={progressWidth()}></div>
          </div>
        </div>
      </div>
      <div>
        <CurrentComponent />
      </div>
    </>
  );
};

export default Stepper;
