import { useState } from "react";
import type { FoodItem } from "../../types/food";

type Props = {
  food: FoodItem;
  onAdd: (food: FoodItem, qty: number) => void;
};

export default function FoodCard({ food, onAdd }: Props) {
  const [qty, setQty] = useState(1);

  return (
    <div
      style={{
        background: "#111",
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
      }}
    >
      <h3>{food.name}</h3>

      <p>
        {food.calories} cal • {food.protein}g protein
      </p>

      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
        }}
      >
        <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>

        <span>{qty}</span>

        <button onClick={() => setQty(qty + 1)}>+</button>

        <button
          onClick={() => onAdd(food, qty)}
          style={{
            marginLeft: "auto",
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}