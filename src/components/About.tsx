
import { Star, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-rose-light rounded-3xl transform -rotate-3 opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Laryssa Novais - Sobre mim"
                className="relative rounded-3xl shadow-xl w-full max-w-md mx-auto object-cover h-[500px]"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8 animate-on-scroll">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-rose mb-4">
                Quem sou eu?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-rose-burnt to-green-leaf rounded-full"></div>
            </div>
            
            <p className="text-lg text-gray-rose leading-relaxed">
              Nutricionista formada, com foco em nutrição clínica feminina. Acredito que comer bem não precisa ser difícil, nem chato. Comigo, você terá acompanhamento humano, personalizado e respeitoso com sua rotina, suas emoções e seu corpo.
            </p>
            
            <p className="text-lg text-gray-rose leading-relaxed">
              Minha missão é simplificar a nutrição e fazer você se sentir incrível no seu corpo.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-rose-burnt" />
                </div>
                <div className="text-2xl font-bold text-gray-rose">500+</div>
                <div className="text-sm text-gray-rose">Vidas transformadas</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-leaf/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-green-leaf" />
                </div>
                <div className="text-2xl font-bold text-gray-rose">5 anos</div>
                <div className="text-sm text-gray-rose">De experiência</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-nude-soft rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-rose-burnt" />
                </div>
                <div className="text-2xl font-bold text-gray-rose">100%</div>
                <div className="text-sm text-gray-rose">Personalizado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
