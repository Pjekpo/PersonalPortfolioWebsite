import { Storefront } from "./Storefront";
import { ModeToggle } from "./ModeToggle";

type Mode = "portfolio" | "storefront";

export function StorefrontPage({
  mode,
  onModeChange
}: {
  mode: Mode;
  onModeChange: (m: Mode) => void;
}) {
  return (
    <div className="relative pt-20 md:pt-24">
      <div className="container mx-auto px-6 flex justify-center mb-6 md:mb-8">
        <ModeToggle mode={mode} onChange={onModeChange} />
      </div>
      <Storefront />
    </div>
  );
}
