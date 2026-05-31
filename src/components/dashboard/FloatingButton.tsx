import { useState } from "react";

import QuickAddSheet from "./QuickAddSheet";

export default function FloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="floating-btn"
        onClick={() =>
          setOpen(true)
        }
      >
        +
      </button>

      <QuickAddSheet
        open={open}
        onClose={() =>
          setOpen(false)
        }
      />
    </>
  );
}