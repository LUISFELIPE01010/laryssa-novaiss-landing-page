
import { Apple, Clock, Droplets, Smile } from 'lucide-react';

const Tips = () => {
  const tips = [
    {
      icon: Apple,
      title: "Como montar um prato equilibrado",
      description: "A regra simples: 1/2 prato de vegetais, 1/4 de proteína e 1/4 de carboidrato integral.",
      color: "from-rose-light to-rose-burnt/20"
    },
    {
      icon: Smile,
      title: "Dicas para manter a disciplina com leveza",
      description: "Foque no progresso, não na perfeição. Pequenos passos consistentes geram grandes resultados.",
      color: "from-rose-accent to-rose-light/30"
    },
    {
      icon: Clock,
      title: "Snacks rápidos e saudáveis",
      description: "Frutas com oleaginosas, iogurte natural com frutas vermelhas ou um mix de castanhas.",
      color: "from-nude-soft to-rose-light/30"
    },
    {
      icon: Droplets,
      title: "Hidratação: o poder da água",
      description: "Beba pelo menos 35ml por kg de peso corporal. Adicione limão ou hortelã para variar.",
      color: "from-rose-accent to-rose-burnt/10"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-rose mb-6">
            Dicas da Nutri
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-burnt to-rose-dark rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-rose/80 max-w-2xl mx-auto">
            Pequenas mudanças que fazem toda a diferença no seu dia a dia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover-lift animate-on-scroll border border-rose-light/20 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tip.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-light to-rose-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <tip.icon className="w-8 h-8 text-rose-dark" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-rose mb-4">
                  {tip.title}
                </h3>
                
                <p className="text-gray-rose/80 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
