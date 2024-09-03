// components/Stepper.js
import { Children } from "react";

export function Stepper({ currentStep, children }) {
  return <div>{Children.toArray(children)[currentStep]}</div>;
}

export function Step({ title, children }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}
