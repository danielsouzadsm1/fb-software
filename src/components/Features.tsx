import { Code2, Globe, Smartphone, Database, Shield, Gauge } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Software Sob Medida",
    description: "Sistemas desenvolvidos do zero para atender às necessidades exclusivas do seu negócio.",
    backDescription: "Criamos soluções exclusivas que se adaptam ao seu fluxo de trabalho, e não o contrário. Focamos na resolução de problemas específicos com sistemas escaláveis, eliminando limitações de softwares de prateleira e garantindo total controle sobre a evolução do produto.",
    backIcon: Code2,
  },
  {
    icon: Globe,
    title: "Aplicações Web",
    description: "Plataformas modernas, rápidas e escaláveis com as melhores tecnologias do mercado.",
    backDescription: "Desenvolvimento de plataformas acessíveis via navegador com foco em alta disponibilidade e experiência do usuário (UX). Utilizamos frameworks modernos para garantir que sua aplicação seja rápida, responsiva em qualquer dispositivo e preparada para grandes volumes de acessos.",
    backIcon: Globe,
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Aplicativos nativos e híbridos com experiência fluida em iOS e Android.",
    backDescription: "Construção de aplicativos nativos ou híbridos (iOS e Android) que aproveitam ao máximo o hardware dos dispositivos. Focamos em performance, design intuitivo e funcionalidades offline para manter seus usuários engajados onde quer que eles estejam.",
    backIcon: Smartphone,
  },
  {
    icon: Database,
    title: "Integrações & APIs",
    description: "Conectamos seus sistemas para automatizar fluxos e eliminar retrabalho.",
    backDescription: "Unificamos seu ecossistema digital fazendo com que diferentes softwares conversem entre si. Desenvolvemos e consumimos APIs seguras para automatizar a troca de dados, reduzir erros manuais e centralizar a gestão da sua operação.",
    backIcon: Database,
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Arquitetura robusta com práticas de segurança em cada camada da aplicação.",
    backDescription: "Implementamos uma camada rigorosa de proteção. Isso inclui criptografia de dados, autenticação multifator, auditorias de vulnerabilidade e conformidade com a LGPD para garantir a integridade das informações da sua empresa.",
    backIcon: Shield,
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Otimização contínua para garantir velocidade e eficiência em escala.",
    backDescription: "Análise e otimização de código e infraestrutura para garantir tempos de resposta mínimos. Aplicamos técnicas avançadas de cache, compressão e monitoramento em tempo real para que sua plataforma suporte o crescimento do negócio sem perder velocidade.",
    backIcon: Gauge,
  },
];

const Features = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Soluções completas para sua <span className="text-gradient">transformação digital</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Da ideia à entrega, cuidamos de cada etapa com excelência técnica e foco em resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group w-full h-[270px] md:h-[230px] lg:h-[250px] [perspective:1000px]"
            >
              <div className="relative w-full h-full transition-transform duration-700 will-change-transform [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 card-glass rounded-xl p-4 flex flex-col [backface-visibility:hidden]">
                  <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                    <feature.icon size={20} className="text-primary" />
                  </div>

                  <h3 className="font-display text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute inset-0 card-glass rounded-xl p-4 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  {feature.backIcon && (
                    <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center mb-2">
                      <feature.backIcon size={20} className="text-primary" />
                    </div>
                  )}

                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    {feature.backDescription}
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

export default Features;
