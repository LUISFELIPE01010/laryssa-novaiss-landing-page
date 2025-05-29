
import { Heart, Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
  const whatsappUrl = "https://wa.me/5513996631392";

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-nude-soft px-4 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 animate-slide-in-left">
          <div className="flex items-center gap-2 text-rose-dark">
            <Heart className="w-6 h-6 fill-current" />
            <span className="text-sm font-medium tracking-wide uppercase">Nutricionista Laryssa Novais</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="text-gray-rose">Cuide de você</span>
            <br />
            <span className="text-gradient">com leveza</span>
            <br />
            <span className="text-gray-rose">e amor.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-rose leading-relaxed max-w-2xl">
            Sou a Laryssa Novais, nutricionista apaixonada por transformar vidas através da alimentação leve, prática e prazerosa. Atendo mulheres que desejam emagrecer, ganhar massa e melhorar a saúde de forma gentil e personalizada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-rose-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover-lift shadow-lg hover:bg-rose-dark/90 transition-all"
              aria-label="Entrar em contato via WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
              Quero falar com a nutri
            </a>
            
            <a 
              href="tel:+5513996631392"
              className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-rose-dark text-rose-dark px-8 py-4 rounded-full font-semibold text-lg hover-lift hover:bg-rose-dark hover:text-white transition-all"
              aria-label="Ligar para Laryssa Novais"
            >
              <Phone className="w-6 h-6" />
              (13) 99663-1392
            </a>
          </div>
        </div>
        
        {/* Image */}
        <div className="animate-slide-in-right">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-light to-rose-accent rounded-3xl transform rotate-6 opacity-20"></div>
            <img 
              src="/lovable-uploads/38ce4de6-829c-4c3c-b44d-a913ef18f986.png"
              alt="Laryssa Novais, nutricionista sorrindo em ambiente acolhedor com frutas ao fundo"
              className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover h-[500px] md:h-[600px]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
