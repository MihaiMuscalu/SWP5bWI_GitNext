import TextCard from "./components/ui/TextCard";


export default function Home() {
  return (
    <div className="min-h-screen flex items-start pt-20 justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-4xl mb-4 font-bold text-center text-blue-900">Welcome to my AutoShowcase</h1>
          <p className="text-center font-bold mb-6 text-purple-900">This is a demo project for a ReactNext course</p>
        </div>
        <div className="grid grid-cols-2 text-center gap-8 max-w-5xl mx-auto px-8 py-12 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
          <TextCard 
            header="Cars" 
            text="An array list comprised of Card components with a car having a motor and other variables."
            href="/cars"
          />
          <TextCard 
            header="Trucks" 
            text=""
            href="/trucks"
          />
        </div>
      </div>
    </div>
  );
}
