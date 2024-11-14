// hooks/useChallengeState.ts
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { challenges } from "@/data/challenges";

export const useChallengeState = () => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [code, setCode] = useState(challenges[0].template);
  const [progress, setProgress] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [completed, setCompleted] = useState(false);
  const { toast } = useToast();

  const runTests = () => {
    try {
      if (!code.trim()) {
        toast({
          title: "Error",
          description:
            "El código está vacío. Escribe una solución antes de ejecutar las pruebas.",
          variant: "destructive",
        });
        return;
      }

      const userFunction = new Function(`return ${code}`)();
      if (typeof userFunction !== "function")
        throw new Error("El código no define una función válida.");

      const challenge = challenges[currentChallenge];
      const testFunction = new Function(`return ${challenge.test}`)();
      const results = challenge.testCases.map((testCase) => {
        const expected = Array.isArray(testCase)
          ? testFunction(...testCase)
          : testFunction(testCase);
        const actual = Array.isArray(testCase)
          ? userFunction(...testCase)
          : userFunction(testCase);
        return expected === actual;
      });

      if (results.every((result) => result)) {
        toast({
          title: "¡Éxito!",
          description: "Has completado el desafío correctamente.",
        });
        if (currentChallenge < challenges.length - 1) {
          setCurrentChallenge(currentChallenge + 1);
          setCode(challenges[currentChallenge + 1].template);
          setProgress(((currentChallenge + 1) / challenges.length) * 100);
        } else {
          setCompleted(true);
          toast({
            title: "¡Felicidades!",
            description: "Has completado todos los desafíos.",
          });
        }
      } else {
        toast({
          title: "Intenta de nuevo",
          description: "Tu solución no pasó todas las pruebas.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error en runTests:", error);
      toast({
        title: "Error",
        description:
          "Hubo un error al ejecutar tu código: " +
          (error instanceof Error ? error.message : "Error desconocido"),
        variant: "destructive",
      });
    }
  };

  return {
    currentChallenge,
    code,
    setCode,
    progress,
    showHelp,
    setShowHelp,
    completed,
    runTests,
    setCompleted,
    setCurrentChallenge,
    setProgress,
  };
};
