
import { Star, TrendingUp, Heart } from 'lucide-react';

const Results = () => {
  const transformations = [
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Me sinto mais leve, confiante e com energia.",
      name: "Maria, 32 anos",
      result: "12kg em 6 meses"
    },
    {
      image: "https://images.unsplash.com/photo-1594736797933-d0c4a7d0daa3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
      quote: "Aprendi a me alimentar sem medo, sem culpa.",
      name: "Ana, 28 anos",
      result: "Ganhou 5kg de massa magra"
    },
    {
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Finalmente entendi que saúde não é sinônimo de restrição.",
      name: "Carla, 35 anos", 
      result: "Melhorou energia e disposição"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-nude-soft">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-rose mb-6">
            Resultados Reais
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-burnt to-green-leaf rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-rose/80 max-w-2xl mx-auto">
            Veja como a nutrição personalizada transformou a vida dessas mulheres
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover-lift animate-on-scroll text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <img 
                  src={transformation.image}
                  alt={`Transformação ${transformation.name}`}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-rose-light/50"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-leaf rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-rose-burnt fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-rose italic mb-4 text-lg">
                "{transformation.quote}"
              </blockquote>
              
              <div className="border-t border-rose-light/30 pt-4">
                <p className="font-semibold text-gray-rose mb-1">
                  {transformation.name}
                </p>
                <p className="text-sm text-green-leaf font-medium">
                  {transformation.result}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-rose-light/30 px-6 py-3 rounded-full">
            <Heart className="w-5 h-5 text-rose-burnt fill-current" />
            <span className="text-gray-rose font-medium">
              Mais de 500 vidas transformadas com amor e cuidado
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
