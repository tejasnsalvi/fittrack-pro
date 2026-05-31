import { useState } from "react";
import { defaultFoods } from "../../database/defaultFoods";
import type { FoodItem } from "../../types/food";

import FoodSearch from "../../components/food/FoodSearch";
import FoodCard from "../../components/food/FoodCard";
import { db } from "../../database/db";

export default function FoodPage() {
  const [foods] = useState<FoodItem[]>(defaultFoods);

  const [filteredFoods, setFilteredFoods] =
    useState<FoodItem[]>(defaultFoods);

  function handleSearch(value: string) {
    const search = value.toLowerCase().trim();

    if (!search) {
      setFilteredFoods(foods);
      return;
    }

    setFilteredFoods(
      foods.filter((food) =>
        food.name.toLowerCase().includes(search),
      ),
    );
  }

  async function handleAdd(food: FoodItem, qty: number) {
    const today = new Date().toISOString().split("T")[0];

    await db.dailyFoodLogs.add({
      date: today,
      foodId: food.id!,
      quantity: qty,
      calories: food.calories * qty,
      protein: food.protein * qty,
    });

    alert(`${food.name} added`);
  }

  return (
    <div
      style={{
        padding: 16,
        paddingBottom: 100,
      }}
    >
      <h1>My Foods</h1>

      <FoodSearch onSearch={handleSearch} />

      <div style={{ height: 12 }} />

      <h3>Total Foods: {filteredFoods.length}</h3>

      {filteredFoods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          onAdd={handleAdd}
        />
      ))}
    </div>
  );
}