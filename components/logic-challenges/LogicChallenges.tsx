// LogicChallenges.tsx
"use client";
import { challenges } from "@/data/challenges";
import { useChallengeState } from "@/hooks/useChallengeState";
import { CompletionModal } from "../completion-modal/CompletionModal";
import { ChallengeCard } from "../challenge-card/ChallengeCard";

const LogicChallenges = () => {
  const {
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
  } = useChallengeState();

  const onRestart = () => {
    setCompleted(false);
    setCurrentChallenge(0);
    setProgress(0);
  };

  const challenge = challenges[currentChallenge];

  return (
    <div className="flex flex-col bg-background text-foreground mb-5">
      {completed ? (
        <CompletionModal onRestart={onRestart} />
      ) : (
        <ChallengeCard
          challenge={challenge}
          code={code}
          setCode={setCode}
          runTests={runTests}
          progress={progress}
          showHelp={showHelp}
          setShowHelp={setShowHelp}
        />
      )}
    </div>
  );
};

export default LogicChallenges;
