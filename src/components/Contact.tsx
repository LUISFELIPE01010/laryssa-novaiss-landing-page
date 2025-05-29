import { MessageCircle, Instagram, MapPin, Clock, Phone, Heart } from 'lucide-react';
const Contact = () => {
  const whatsappUrl = "https://wa.me/5513996631392";
  const instagramUrl = "https://instagram.com/laryssanutri";
  return <section className="py-20 bg-gradient-to-br from-rose-light/20 to-rose-accent/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-rose mb-6">
            Vamos conversar?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-burnt to-rose-dark rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-rose/80 max-w-2xl mx-auto">
            Estou aqui para te ajudar a transformar sua relação com a alimentação
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8 animate-on-scroll">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover-lift">
              <h3 className="text-2xl font-semibold text-gray-rose mb-6">
                Entre em contato
              </h3>
              
              <div className="space-y-6">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-rose-dark/10 hover:bg-rose-dark/20 transition-colors group" aria-label="Entrar em contato via WhatsApp">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{
                  backgroundColor: '#B8817A'
                }}>
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-rose">WhatsApp</p>
                    <p className="text-gray-rose/70">(13) 99663-1392</p>
                  </div>
                </a>
                
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-rose-light/30 hover:bg-rose-light/50 transition-colors group" aria-label="Seguir no Instagram">
                  <div className="w-12 h-12 bg-rose-burnt rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-rose">Instagram</p>
                    <p className="text-gray-rose/70">@laryssanutri</p>
                  </div>
                </a>
                
                <a href="tel:+5513996631392" className="flex items-center gap-4 p-4 rounded-2xl bg-nude-soft hover:bg-rose-light/30 transition-colors group" aria-label="Ligar para Laryssa Novais">
                  <div className="w-12 h-12 bg-rose-burnt rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-rose">Telefone</p>
                    <p className="text-gray-rose/70">(13) 99663-1392</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Atendimento Info */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-rose mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-rose-dark" />
                Informações de Atendimento
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-rose-dark rounded-full mt-2"></div>
                  <p className="text-gray-rose">
                    <strong>Online:</strong> Atendimento para todo o Brasil via consulta virtual
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-rose-burnt rounded-full mt-2"></div>
                  <p className="text-gray-rose">
                    <strong>Presencial:</strong> Baixada Santista - SP
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-rose-dark mt-0.5" />
                  <p className="text-gray-rose">
                    <strong>Horários:</strong> Segunda a sexta, das 8h às 18h
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Card with Professional Image */}
          <div className="animate-on-scroll">
            <div className="bg-gradient-to-br from-rose-burnt to-rose-dark rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                
              </div>
              
              <div className="relative z-10 text-center">
                <Heart className="w-16 h-16 mx-auto mb-6 fill-current" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Pronta para transformar sua vida?
                </h3>
                <p className="text-lg mb-8 leading-relaxed">
                  Não espere mais para cuidar de você. Vamos juntas construir uma relação leve e amorosa com a alimentação.
                </p>
                
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-white text-rose-dark px-8 py-4 rounded-full font-semibold text-lg hover-lift shadow-lg hover:shadow-xl transition-all" aria-label="Agendar consulta nutricional">
                  <MessageCircle className="w-6 h-6" />
                  Agendar minha consulta
                </a>
                
                <p className="text-sm mt-6 opacity-90">
                  Primeira consulta: avaliação completa e plano personalizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;