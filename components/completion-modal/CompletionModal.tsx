// components/CompletionModal.tsx
import { Button } from "@/components/ui/button";

interface CompletionModalProps {
  onRestart: () => void;
}

export const CompletionModal: React.FC<CompletionModalProps> = ({
  onRestart,
}) => {
  return (
    <div className="fixed inset-0 flex items-center p-20 justify-center bg-black bg-opacity-50 backdrop-blur-lg">
      <div className="bg-card border p-6 rounded-lg shadow-xl text-center">
        <h2 className="text-2xl font-bold">¡Felicidades!</h2>
        <p className="mt-4">Has completado todos los desafíos.</p>
        <Button className="mt-4" onClick={onRestart}>
          Empezar de nuevo
        </Button>
      </div>
    </div>
  );
};
