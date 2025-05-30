import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "A Laryssa mudou minha forma de ver a alimentação. Ela é humana, acessível e maravilhosa. Finalmente consegui emagrecer sem sofrimento!",
      name: "Camila",
      age: "28 anos",
      image: "/lovable-uploads/68e54351-155a-4d01-ae41-61d0c1c4b649.png"
    },
    {
      quote: "Depois do acompanhamento com a Laryssa, me senti empoderada e finalmente em paz com meu corpo. Ela entende as dificuldades da mulher moderna.",
      name: "Juliana", 
      age: "35 anos",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "O cuidado da Laryssa vai além da nutrição. Ela me ajudou a ter uma relação saudável com a comida e comigo mesma. Recomendo de olhos fechados!",
      name: "Fernanda",
      age: "31 anos", 
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Pensava que nunca conseguiria ganhar massa magra sendo vegetariana. A Laryssa me provou o contrário com um plano perfeito para mim!",
      name: "Patrícia",
      age: "29 anos",
      image: "/lovable-uploads/664513b9-6638-4e15-a37f-a7e3a043e268.png"
    },
    {
      quote: "A consulta com a Laryssa foi transformadora. Ela realmente escuta e cria um plano que funciona na vida real, não só na teoria.",
      name: "Renata",
      age: "33 anos",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Sofria com TPM intensa e a Laryssa me ajudou através da alimentação. Hoje me sinto equilibrada e com muito mais disposição!",
      name: "Luciana",
      age: "27 anos",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-rose mb-6">
            O que minhas pacientes dizem
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-burnt to-rose-dark rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-rose/80 max-w-2xl mx-auto">
            Histórias reais de transformação e empoderamento feminino
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-nude-soft rounded-3xl p-8 shadow-lg hover-lift animate-on-scroll border border-rose-light/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 text-rose-burnt/30 mb-4" />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-rose-burnt fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-rose leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}, paciente satisfeita`}
                  className="w-12 h-12 rounded-full object-cover border-2 border-rose-light/50"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-gray-rose">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-rose/70">
                    {testimonial.age}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
