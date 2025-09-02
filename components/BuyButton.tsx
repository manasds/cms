// BuyButton.tsx
"use client";
import purchasecourse from "@/app/actions/purchase";
export default function BuyButton({ courseId }: { courseId: number }) {
  return (
    <button
      onClick={async () => {
        try {
          await purchasecourse(courseId);
          alert("Purchase successful!");
        } catch (e) {
          console.error(e);
          alert("Something went wrong");
        }
      }}
      className="w-1/2 py-1 px-0 text-red-500 font-medium text-2xl rounded-md transition-all duration-150 hover:bg-neutral-400 cursor-pointer"
    >
      Buy
    </button>
  );
}
