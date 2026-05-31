import { useState } from "react";

type Props = {
  onSearch: (value: string) => void;
};

export default function FoodSearch({ onSearch }: Props) {
  const [value, setValue] = useState("");

  return (
    <input
      value={value}
      placeholder="Search food..."
      onChange={(e) => {
        setValue(e.target.value);
        onSearch(e.target.value);
      }}
      style={{
        width: "100%",
        padding: "14px",
        borderRadius: "12px",
        background: "#111",
        color: "#fff",
        border: "1px solid #222",
      }}
    />
  );
}