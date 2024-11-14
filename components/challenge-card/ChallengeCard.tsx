// components/ChallengeCard.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Challenge } from "@/types/challenge"; // Importa la interfaz

interface ChallengeCardProps {
  challenge: Challenge; // Usa el tipo Challenge en lugar de any
  code: string;
  setCode: (code: string) => void;
  runTests: () => void;
  progress: number;
  showHelp: boolean;
  setShowHelp: (show: boolean) => void;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  challenge,
  code,
  setCode,
  runTests,
  progress,
  showHelp,
  setShowHelp,
}) => {
  return (
    <Card className="w-[720px] mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{challenge.title}</CardTitle>
          <Button
            variant="outline"
            className="ml-2"
            onClick={() => setShowHelp(!showHelp)}
          >
            <Lightbulb
              className="text-cyan-700 dark:text-amber-400"
              size={16}
            />
          </Button>
        </div>
        <CardDescription>Dificultad: {challenge.difficulty}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{challenge.description}</p>
        {showHelp && challenge.help && (
          <div className="mb-8 p-2 bg-gray-100 text-gray-700 rounded shadow-lg">
            <strong>Tip:</strong> {challenge.help}
          </div>
        )}
        <SyntaxHighlighter language="javascript" style={tomorrowNightEighties}>
          {code}
        </SyntaxHighlighter>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="font-mono mt-4"
          rows={10}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={runTests}>Ejecutar pruebas</Button>
        <div className="flex items-center gap-2">
          <span className="text-sm">{`${Math.round(
            progress
          )}% Completado`}</span>
          <Progress value={progress} className="w-1/2" />
        </div>
      </CardFooter>
    </Card>
  );
};
