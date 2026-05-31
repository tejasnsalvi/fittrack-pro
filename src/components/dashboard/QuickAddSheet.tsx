import "./QuickAddSheet.css";

import { addWater } from "../../utils/water";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function QuickAddSheet({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  async function handleWater(
    amount: number,
  ) {
    await addWater(amount);

    onClose();
  }

  return (
    <>
      <div
        className="sheet-backdrop"
        onClick={onClose}
      />

      <div className="sheet">
        <div className="sheet-handle" />

        <h2>Quick Add Water</h2>

        <button
          className="sheet-item"
          onClick={() =>
            handleWater(250)
          }
        >
          💧 +250 ml
        </button>

        <button
          className="sheet-item"
          onClick={() =>
            handleWater(500)
          }
        >
          💧 +500 ml
        </button>

        <button
          className="sheet-item"
          onClick={() =>
            handleWater(750)
          }
        >
          💧 +750 ml
        </button>

        <button
          className="sheet-item"
          onClick={() =>
            handleWater(1000)
          }
        >
          💧 +1000 ml
        </button>

        <button
          className="sheet-cancel"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </>
  );
}