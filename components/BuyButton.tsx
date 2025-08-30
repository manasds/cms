// BuyButton.tsx
"use client";

export default function BuyButton({ courseId }: { courseId: string }) {
  const handleClick = () => {
    console.log(`Buying course with id: ${courseId}`);
  };

  return (
    <button
      onClick={handleClick}
      className="w-1/2 py-1 px-0 text-red-500 font-medium text-2xl rounded-md transition-all duration-150 hover:bg-neutral-400 cursor-pointer"
    >
      Buy
    </button>
  );
}
