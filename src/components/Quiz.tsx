
import { useState } from 'react';
import { CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Qual é o seu principal objetivo agora?",
      options: [
        "Perder peso de forma saudável",
        "Ganhar massa muscular",
        "Melhorar minha energia e disposição",
        "Não sei, quero descobrir"
      ]
    },
    {
      question: "Como está sua relação com a comida?",
      options: [
        "Tenho dificuldade para controlar o que como",
        "Como bem, mas sinto que posso melhorar",
        "Às vezes me sinto culpada depois de comer",
        "Quero aprender a comer melhor"
      ]
    },
    {
      question: "Qual sua maior dificuldade?",
      options: [
        "Falta de tempo para me cuidar",
        "Não sei como montar refeições saudáveis",
        "Ansiedade interfere na minha alimentação",
        "Não consigo manter consistência"
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const weightLossKeywords = ['perder peso', 'controlar', 'culpada'];
    const muscleGainKeywords = ['massa muscular', 'comer melhor'];
    const wellnessKeywords = ['energia', 'disposição', 'ansiedade', 'tempo'];

    const answerText = answers.join(' ').toLowerCase();
    
    if (weightLossKeywords.some(keyword => answerText.includes(keyword))) {
      return {
        title: "Emagrecimento Saudável pode ser seu caminho! 🌸",
        description: "Baseado nas suas respostas, você se beneficiaria de um acompanhamento focado em emagrecimento consciente e mudança de hábitos alimentares."
      };
    } else if (muscleGainKeywords.some(keyword => answerText.includes(keyword))) {
      return {
        title: "Ganho de Massa Muscular é perfeito para você! 💪",
        description: "Suas respostas indicam que você está pronta para focar no fortalecimento e tonificação do seu corpo através da nutrição estratégica."
      };
    } else {
      return {
        title: "Bem-estar e Reeducação Alimentar é o ideal! ✨",
        description: "Você se beneficiaria de um acompanhamento holístico, focado em energia, disposição e uma relação saudável com a comida."
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const result = getResult();
    return (
      <section className="py-20 bg-gradient-to-br from-rose-light/30 to-green-leaf/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl animate-scale-in">
            <div className="mb-8">
              <CheckCircle className="w-20 h-20 text-green-leaf mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-rose mb-4">
                {result.title}
              </h3>
              <p className="text-lg text-gray-rose/80 leading-relaxed mb-8">
                {result.description}
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="https://wa.me/5513996631392"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-leaf text-white px-8 py-4 rounded-full font-semibold text-lg hover-lift shadow-lg hover:bg-opacity-90 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                Vamos conversar sobre isso?
              </a>
              
              <div>
                <button 
                  onClick={resetQuiz}
                  className="text-rose-burnt hover:text-rose-burnt/80 transition-colors"
                >
                  Refazer o quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-rose-light/30 to-green-leaf/20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-rose mb-6">
            Descubra seu caminho ideal
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-burnt to-green-leaf rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-rose/80">
            Será que o melhor caminho para você é emagrecer ou ganhar massa?
          </p>
        </div>
        
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl animate-on-scroll">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-rose/60 mb-2">
              <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-rose-light/30 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-rose-burnt to-green-leaf h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-rose mb-8">
              {questions[currentQuestion].question}
            </h3>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left p-6 rounded-2xl border-2 border-rose-light/30 hover:border-rose-burnt/50 hover:bg-rose-light/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-rose">{option}</span>
                    <ArrowRight className="w-5 h-5 text-rose-burnt opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
