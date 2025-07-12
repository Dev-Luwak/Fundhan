import { features } from "../assets/assets"

function FeatureHighlights() {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">Why Fundhan?</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="bg-indigo-100 p-6 rounded-xl text-center shadow hover:scale-105">
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-700 text-sm">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default FeatureHighlights;
