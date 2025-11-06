type Mode = "portfolio" | "storefront";

export function ModeToggle({
  mode,
  onChange,
  className = "",
}: {
  mode: Mode;
  onChange: (m: Mode) => void;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center p-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md ${className}`}
    >
      <button
        onClick={() => onChange("portfolio")}
        className={`px-3 py-1 rounded-full text-sm transition-colors ${
          mode === "portfolio" ? "bg-white text-black" : "text-gray-300 hover:text-white"
        }`}
      >
        Portfolio
      </button>
      <button
        onClick={() => onChange("storefront")}
        className={`px-3 py-1 rounded-full text-sm transition-colors ${
          mode === "storefront" ? "bg-white text-black" : "text-gray-300 hover:text-white"
        }`}
      >
        Storefronts
      </button>
    </div>
  );
}

