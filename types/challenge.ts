// types/challenge.ts

export type Challenge = {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  template: string;
  test: string;
  testCases: (string | number | [string, string] | [number, number])[];
  help: string;
};
