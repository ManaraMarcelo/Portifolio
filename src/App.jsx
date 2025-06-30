import React, { useEffect, useRef } from 'react';

// --- Ícones como Componentes SVG ---
const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-4.3 1.4 -4.3-2.5 -6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.5 11.5 0 0 0-6 0c-2.3-1.6-3.3-1.3-3.3-1.3a4.2 4.2 0 0 0-.1 3.2a4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6.5-.9 1.3-.9 2.5v3.5"></path></svg>
);
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

// --- Componente de Fundo com Pixels Animados ---
const PixelBackground = () => (
    <div className="pixel-background">
        <div className="pixels-layer-1"></div>
        <div className="pixels-layer-2"></div>
        <div className="pixels-layer-3"></div>
    </div>
);


// --- Componente Principal (App) ---
export default function App() {
    const cardRef = useRef(null);
    
    // Efeito de inclinação do card
    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;
        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            const { width, height } = rect;
            const rotateX = (y / height - 0.5) * -8;
            const rotateY = (x / width - 0.5) * 8;
            card.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };
        const handleMouseLeave = () => {
            card.style.transform = `perspective(1500px) rotateX(0) rotateY(0)`;
        };
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);
    
    return (
        <>
            {/* Estilos injetados diretamente para garantir a compatibilidade */}
            <style>
                {`
                body {
                    background: linear-gradient(to top, hsl(270, 20%, 18%), hsl(240, 5%, 12%));
                    font-family: 'Inter', sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    overflow: hidden; /* Previne barras de rolagem indesejadas */
                }
                
                .glass-effect {
                    background: rgba(10, 10, 20, 0.4);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .pixel-background {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                }

                @keyframes movePixels {
                    from { transform: translateY(0); }
                    to { transform: translateY(-100vh); }
                }

                [class^="pixels-layer-"] {
                    position: absolute;
                    width: 100%;
                    height: 100vh;
                    top: 100vh;
                    will-change: transform;
                }
                
                .pixels-layer-1 {
                    --pixel-size: 2px;
                    --shadow-color: hsl(190, 70%, 70%);
                    box-shadow: 
                        10vw 2vh 0 var(--pixel-size) var(--shadow-color), 88vw 15vh 0 var(--pixel-size) var(--shadow-color),
                        5vw 35vh 0 var(--pixel-size) var(--shadow-color), 50vw 48vh 0 var(--pixel-size) var(--shadow-color),
                        23vw 78vh 0 var(--pixel-size) var(--shadow-color), 72vw 92vh 0 var(--pixel-size) var(--shadow-color);
                    animation: movePixels 20s linear infinite;
                }
                
                .pixels-layer-2 {
                    --pixel-size: 3px;
                    --shadow-color: hsl(260, 70%, 75%);
                    box-shadow: 
                        95vw 8vh 0 var(--pixel-size) var(--shadow-color), 4vw 22vh 0 var(--pixel-size) var(--shadow-color),
                        38vw 41vh 0 var(--pixel-size) var(--shadow-color), 81vw 53vh 0 var(--pixel-size) var(--shadow-color),
                        21vw 69vh 0 var(--pixel-size) var(--shadow-color), 66vw 88vh 0 var(--pixel-size) var(--shadow-color);
                    animation: movePixels 30s linear infinite;
                }

                .pixels-layer-3 {
                    --pixel-size: 2px;
                    --shadow-color: hsl(320, 70%, 70%);
                     box-shadow: 
                        5vw 12vh 0 var(--pixel-size) var(--shadow-color), 77vw 28vh 0 var(--pixel-size) var(--shadow-color),
                        33vw 55vh 0 var(--pixel-size) var(--shadow-color), 91vw 67vh 0 var(--pixel-size) var(--shadow-color),
                        15vw 81vh 0 var(--pixel-size) var(--shadow-color), 59vw 95vh 0 var(--pixel-size) var(--shadow-color);
                    animation: movePixels 40s linear infinite;
                }

                /* ATUALIZAÇÃO: Estilização da Barra de Rolagem */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 14px; /* Largura total da área da barra */
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent; /* Fundo da trilha transparente */
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(255, 255, 255, 0.2); /* Cor da barra */
                    border-radius: 20px; /* Bordas arredondadas */
                    border: 4px solid transparent; /* Borda transparente para criar espaçamento */
                    background-clip: content-box; /* Faz a borda ser "para dentro" */
                }
                
                /* Compatibilidade com Firefox */
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
                }
                `}
            </style>
            
            <PixelBackground />
            
            <div className="flex min-h-screen items-center justify-center p-4 text-white sm:p-6 lg:p-8 relative z-10">
                {/* ATUALIZAÇÃO: Estrutura da barra de rolagem corrigida */}
                <div ref={cardRef} className="glass-effect w-full max-w-4xl rounded-3xl shadow-2xl transition-transform duration-300 ease-out flex flex-col max-h-[90vh]">
                    <div className="custom-scrollbar overflow-y-auto">
                        <div className="p-6 md:p-10">
                            {/* Conteúdo do Portfólio */}
                            <header className="flex flex-col items-center text-center md:flex-row md:text-left">
                                <img 
                                    src="https://github.com/ManaraMarcelo.png" 
                                    alt="Foto do Perfil de Marcelo Manara" 
                                    className="h-24 w-24 rounded-full border-2 border-white/50 shadow-lg md:h-32 md:w-32"
                                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/128x128/333333/FFFFFF?text=MM'; }}
                                />
                                <div className="mt-4 md:ml-8 md:mt-0">
                                    <h1 className="text-4xl font-bold md:text-5xl">Marcelo Manara</h1>
                                    <p className="mt-1 text-xl text-white/80">DevSecOps & Cloud Engineer</p>
                                    <div className="mt-4 flex justify-center space-x-4 md:justify-start">
                                        <a href="https://github.com/ManaraMarcelo" target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-white" aria-label="GitHub"><GitHubIcon /></a>
                                        <a href="https://www.linkedin.com/in/marcelo-manara" target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-white" aria-label="LinkedIn"><LinkedInIcon /></a>
                                    </div>
                                </div>
                            </header>

                            <main>
                                <section className="mt-8 border-t border-white/20 pt-6">
                                    <h2 className="text-2xl font-semibold">Resumo Profissional</h2>
                                    <p className="mt-2 leading-relaxed text-white/90">
                                        Estudante de Análise e Desenvolvimento de Sistemas com grande interesse em <strong>segurança, automação e desenvolvimento de soluções inovadoras</strong>. Minha missão é ajudar pessoas por meio da tecnologia, criando aplicações seguras, eficientes e visualmente impactantes.
                                    </p>
                                </section>
                                
                                <section className="mt-8 border-t border-white/20 pt-6">
                                     <h2 className="text-2xl font-semibold">Tecnologias e Habilidades</h2>
                                    <div className="mt-4 space-y-4">
                                        <div>
                                            <h3 className="mb-2 font-semibold">Linguagens & Frameworks:</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {['Python', 'C# + .NET', 'C/C++', 'Bash', 'SQL', 'HTML/CSS'].map(skill => <span key={skill} className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium">{skill}</span>)}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 font-semibold">Cloud & DevOps:</h3>
                                            <div className="flex flex-wrap gap-2">
                                                 {['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Linux', 'Git'].map(skill => <span key={skill} className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium">{skill}</span>)}
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="mt-8 border-t border-white/20 pt-6">
                                    <h2 className="text-2xl font-semibold">Projetos em Destaque</h2>
                                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                                        <a href="https://github.com/ManaraMarcelo/Wordpress-Scalable-with-AWS" target="_blank" rel="noopener noreferrer" className="glass-effect block transform rounded-xl p-4 transition-all duration-300 hover:border-white/50 hover:scale-105">
                                            <h3 className="font-semibold">WordPress Escalável na AWS</h3>
                                            <p className="mt-1 text-sm text-white/80">Infraestrutura com alta disponibilidade usando EC2, RDS, EFS e Auto Scaling.</p>
                                        </a>
                                        <a href="https://github.com/ManaraMarcelo/Server-Monitoring-System" target="_blank" rel="noopener noreferrer" className="glass-effect block transform rounded-xl p-4 transition-all duration-300 hover:border-white/50 hover:scale-105">
                                            <h3 className="font-semibold">Monitoramento de Servidor Linux</h3>
                                            <p className="mt-1 text-sm text-white/80">Scripts em Bash/Python para monitorar Nginx e notificar via Telegram.</p>
                                        </a>
                                        <a href="https://github.com/ManaraMarcelo/DeployManager" target="_blank" rel="noopener noreferrer" className="glass-effect block transform rounded-xl p-4 transition-all duration-300 hover:border-white/50 hover:scale-105">
                                            <h3 className="font-semibold">API CRUD 'DeployManager'</h3>
                                            <p className="mt-1 text-sm text-white/80">API RESTful com ASP.NET Core e SQL Server.</p>
                                        </a>
                                        <a href="https://github.com/ManaraMarcelo/TCC-Eletronica" target="_blank" rel="noopener noreferrer" className="glass-effect block transform rounded-xl p-4 transition-all duration-300 hover:border-white/50 hover:scale-105">
                                            <h3 className="font-semibold">Automação de Aquário (TCC)</h3>
                                            <p className="mt-1 text-sm text-white/80">Sistema eletrônico em C++ para controle de temperatura e alimentação.</p>
                                        </a>
                                    </div>
                                </section>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
