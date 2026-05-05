import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
  size?: "md" | "lg" | "xl";
}

export const Modal = ({ open, onOpenChange, title, description, children, size = "lg" }: ModalProps) => {
  const sizeClass = size === "xl" ? "sm:max-w-4xl" : size === "lg" ? "sm:max-w-2xl" : "sm:max-w-lg";
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`${sizeClass} max-h-[88vh] overflow-y-auto rounded-2xl`}>
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-primary">{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
      </DialogContent>
    </Dialog>
  );
};
