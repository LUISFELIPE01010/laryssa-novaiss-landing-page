
import { Target, Dumbbell, Heart, Utensils, Video, MessageCircle } from 'lucide-react';

const Services = () => {
  const whatsappUrl = "https://wa.me/5513996631392";
  
  const services = [
    {
      icon: Target,
      title: "Emagrecimento saudável e consciente",
      description: "Perca peso de forma sustentável, sem dietas restritivas ou sofrimento."
    },
    {
      icon: Dumbbell,
      title: "Ganho de massa magra",
      description: "Estratégias nutricionais para fortalecer e tonificar seu corpo de forma natural."
    },
    {
      icon: Heart,
      title: "Nutrição para mulheres com SOP, ansiedade ou TPM",
      description: "Cuidado especializado para questões hormonais e emocionais femininas."
    },
    {
      icon: Utensils,
      title: "Reeducação alimentar para a vida real",
      description: "Aprenda a comer bem dentro da sua rotina, sem complicações."
    },
    {
      icon: Video,
      title: "Consultas online ou presenciais",
      description: "Flexibilidade total para caber na sua agenda e localização."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-nude-soft to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-rose mb-6">
            Como posso te ajudar?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-burnt to-rose-dark rounded-full mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover-lift animate-on-scroll border border-rose-light/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-rose-light to-rose-accent rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-rose-dark" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-rose mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-rose/80 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-rose-dark font-semibold hover:text-rose-dark/80 transition-colors"
                aria-label={`Agendar consulta para ${service.title}`}
              >
                <MessageCircle className="w-5 h-5" />
                Agende sua consulta agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
