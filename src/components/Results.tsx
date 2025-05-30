
import { Star, TrendingUp, Heart, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Results = () => {
  const beforeAfterImages = [
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Mulher saudável e confiante mostrando resultados de emagrecimento",
      title: "Transformação Real",
      description: "12kg perdidos em 6 meses",
      name: "Maria, 32 anos",
      feedback: "Me sinto mais leve, confiante e com energia. Aprendi que é possível emagrecer com saúde!"
    },
    {
      image: "https://images.unsplash.com/photo-1594736797933-d0c4a7d0daa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Mulher forte e definida mostrando ganho de massa magra",
      title: "Corpo Forte e Definido",
      description: "5kg de massa magra conquistados",
      name: "Ana, 28 anos",
      feedback: "Ganhei músculos e disposição. Finalmente entendi como me alimentar para ter o corpo que sempre quis."
    },
    {
      image: "https://images.unsplash.com/photo-1506629905607-c28b29b5f7d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Mulher radiante e energética após transformação nutricional",
      title: "Energia e Vitalidade",
      description: "Disposição e bem-estar recuperados",
      name: "Carla, 35 anos",
      feedback: "Minha energia voltou! Acordo disposta e me sinto revigorada todos os dias."
    },
    {
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Mulher feliz e confiante após processo de reeducação alimentar",
      title: "Autoestima Renovada",
      description: "Relação saudável com a comida",
      name: "Juliana, 29 anos",
      feedback: "Aprendi a me alimentar sem medo, sem culpa. Minha relação com a comida mudou completamente."
    },
    {
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Mulher ativa e saudável praticando exercícios",
      title: "Vida Ativa",
      description: "Força e resistência conquistadas",
      name: "Fernanda, 31 anos",
      feedback: "Consegui ganhar força e resistência. Hoje me sinto uma pessoa completamente nova e ativa."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-nude-soft">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-rose mb-6">
            Resultados Reais que Inspiram
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-burnt to-rose-dark rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-rose/80 max-w-3xl mx-auto">
            Cada transformação é única e especial. Veja como a nutrição personalizada e consciente 
            transformou a vida dessas mulheres incríveis, criando resultados duradouros e uma relação 
            saudável com o próprio corpo.
          </p>
        </div>

        {/* Galeria Visual de Resultados */}
        <div className="mb-16 animate-on-scroll">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {beforeAfterImages.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-3xl p-6 shadow-lg hover-lift border border-rose-light/20 h-full">
                    <div className="relative mb-4 overflow-hidden rounded-2xl">
                      <img 
                        src={item.image} 
                        alt={item.alt} 
                        className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-105" 
                        loading="lazy" 
                      />
                      <div className="absolute top-4 right-4 w-10 h-10 bg-rose-burnt rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-rose mb-2">
                      {item.title}
                    </h3>
                    <p className="text-rose-burnt font-medium mb-3">
                      {item.description}
                    </p>
                    
                    {/* Nome e Feedback */}
                    <div className="border-t border-rose-light/30 pt-4">
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-rose-burnt fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-gray-rose/80 italic text-sm mb-2 leading-relaxed">
                        "{item.feedback}"
                      </blockquote>
                      <p className="font-semibold text-gray-rose text-sm">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        {/* Call to Action */}
        <div className="text-center animate-on-scroll">
          <div className="bg-gradient-to-br from-rose-light/20 to-nude-soft/50 rounded-3xl p-8 border border-rose-light/30">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-rose-burnt fill-current" />
              <span className="text-gray-rose font-semibold text-lg">
                Mais de 500 vidas transformadas com amor e cuidado
              </span>
            </div>
            
            <p className="text-gray-rose/80 mb-6 max-w-2xl mx-auto">
              Sua transformação pode ser a próxima! Descubra como a nutrição consciente 
              pode revolucionar sua relação com a comida e com seu corpo.
            </p>
            
            <a 
              href="https://wa.me/5513996631392" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-rose-burnt text-white px-8 py-4 rounded-full font-semibold hover-lift shadow-lg hover:bg-rose-burnt/90 transition-all" 
              aria-label="Iniciar minha transformação via WhatsApp"
            >
              Quero iniciar minha transformação
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
