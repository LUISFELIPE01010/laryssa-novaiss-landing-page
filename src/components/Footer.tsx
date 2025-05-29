
import { Heart, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-rose text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 fill-current text-rose-light" />
              <span className="text-xl font-semibold">Laryssa Novais</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Nutricionista dedicada a transformar vidas através da alimentação consciente, leve e prazerosa.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Serviços</h4>
            <ul className="space-y-2 text-white/80">
              <li>Emagrecimento saudável</li>
              <li>Ganho de massa magra</li>
              <li>Nutrição feminina</li>
              <li>Reeducação alimentar</li>
              <li>Consultas online</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5513996631392"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                aria-label="Contato via WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                (13) 99663-1392
              </a>
              
              <a 
                href="https://instagram.com/laryssanutri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                aria-label="Seguir no Instagram"
              >
                <Instagram className="w-5 h-5" />
                @laryssanutri
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 mb-4">
            © {currentYear} Laryssa Novais - Nutricionista. Todos os direitos reservados.
          </p>
          <p className="text-white/60 text-sm">
            CRN/SP 12345 • Atendimento online para todo o Brasil • Presencial na Baixada Santista
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
