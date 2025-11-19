import FloatingEmojis from "@/components/FloatingEmojis";

export default function Home() {
  return (
    <main className="relative">
      <FloatingEmojis />

      <section className="min-h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-6xl font-bold">Hello, I'm Moch. Iqbal Maulana Fiekri 👋</h1>
        <p className="mt-4 text-lg opacity-80">Backend / Full Stack Developer</p>
      </section>
    </main>
  );
}
