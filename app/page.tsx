import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import LogicChallenges from "@/components/logic-challenges/LogicChallenges";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8  gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start py-8">
        <LogicChallenges />
      </main>
      <Footer />
    </div>
  );
}
