import { useState } from "react";

function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
          px-6 py-2 rounded-lg font-medium transition-all duration-300
          ${size === "small" ? "text-sm px-4 py-1" : ""}
          ${size === "large" ? "text-lg px-8 py-3" : ""}
          ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
          ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600 text-white" : ""}
          ${color === "danger" ? "bg-red-500 hover:bg-red-600 text-white" : ""}
          ${color === "success" ? "bg-green-500 hover:bg-green-600 text-white" : ""}
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          `}
    >
      {text}
    </button>
  );
}

const BasicProps = () => {
  const [count, setCount] = useState(0);
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h1 className="text-2xl">Basic props</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sunt
        temporibus ullam eos commodi laboriosam iste.
      </p>
      <div className="space-y-4 space-x-2">
        <h3 className="text-lg">Different colors</h3>

        <Button
          text="Primary"
          color="primary"
          onClick={() => setCount(count + 1)}
        />
        <Button
          text="Secondary"
          color="secondary"
          onClick={() => setCount(count + 1)}
        />
        <Button
          text="Danger"
          color="danger"
          onClick={() => setCount(count + 1)}
          disabled={false}
        />
        <Button
          text="Success"
          color="success"
          onClick={() => setCount(count + 1)}
          disabled={false}
        />
        <h3 className="text-lg">Different Sizes</h3>
        <Button
          text="Small"
          size="small"
          color="primary"
          onClick={() => setCount(count + 1)}
          disabled={false}
        />
        <Button
          text="Default"
          color="primary"
          onClick={() => setCount(count + 1)}
          disabled={false}
        />
        <Button
          size="large"
          color="primary"
          text="Large"
          onClick={() => setCount(count + 1)}
          disabled={false}
        />
        <h3 className="text-lg">Disabled State</h3>
        <Button
          text="Enabled"
          color="primary"
          onClick={() => setCount(count + 1)}
          disabled={true}
        />
        <Button
          text="Disabled"
          color="primary"
          onClick={() => setCount(count + 1)}
          disabled={false}
        />
      </div>
      <div className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md border border-gray-700 font-semibold text-lg">
        Click Count: {count}
      </div>
    </section>
  );
};
export default BasicProps;
