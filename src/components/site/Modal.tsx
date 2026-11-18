import { useEffect, useRef, type ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  className?: string;
  children: ReactNode;
}

/**
 * Accessible modal built on the native <dialog> element: showModal() makes the rest of the page inert
 * (focus stays inside), Escape closes it, clicking the backdrop closes it, and focus returns to the
 * element that opened it.
 */
export function Modal({ open, onClose, labelledBy, className = "", children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      returnFocus.current = document.activeElement as HTMLElement | null;
      dialog.showModal();
      document.documentElement.classList.add("no-scroll");
      requestAnimationFrame(() => dialog.querySelector<HTMLElement>(".modal__close")?.focus());
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={`modal ${className}`}
      aria-labelledby={labelledBy}
      onClose={() => {
        document.documentElement.classList.remove("no-scroll");
        onClose();
        returnFocus.current?.focus();
      }}
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close();
      }}
    >
      {open && (
        <div className="modal__panel">
          <button type="button" className="modal__close" onClick={() => ref.current?.close()} autoFocus>
            Close <span aria-hidden="true">[esc]</span>
          </button>
          {children}
        </div>
      )}
    </dialog>
  );
}
