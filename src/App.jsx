import React, { useState, useEffect, useRef } from 'react';

// --- Ícones como Componentes SVG ---
const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-4.3 1.4 -4.3-2.5 -6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.5 11.5 0 0 0-6 0c-2.3-1.6-3.3-1.3-3.3-1.3a4.2 4.2 0 0 0-.1 3.2a4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6.5-.9 1.3-.9 2.5v3.5"></path></svg>
);
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const YouTubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10C3.73 2.95 6.43.5 12 .5c5.57 0 8.27 2.45 9.5 6.5a24.12 24.12 0 0 1 0 10c-1.23 4.05-3.93 6.5-9.5 6.5s-8.27-2.45-9.5-6.5Z"></path><path d="m10 15 5-3-5-3z"></path></svg>
);
const VideoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m22 8-6 4 6 4V8Z"></path><rect x="2" y="6" width="14" height="12" rx="2" ry="2"></rect></svg>
);
const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);

// --- Componente da Tela Inicial (Hub) ---
const HomeView = ({ setPage }) => (
    <div>
        <header className="flex flex-col items-center text-center md:flex-row md:text-left">
            <img 
                src="https://github.com/ManaraMarcelo.png" 
                alt="Foto do Perfil de Marcelo Manara" 
                className="h-24 w-24 rounded-full border-2 border-white/50 shadow-lg md:h-32 md:w-32"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/128x128/333333/FFFFFF?text=MM'; }}
            />
            <div className="mt-4 md:ml-8 md:mt-0">
                <h1 className="text-4xl font-extrabold md:text-5xl">Marcelo Manara</h1>
                <p className="mt-1 text-xl text-white/80">DevSecOps & Cloud Engineer | Videomaker</p>
                <div className="mt-4 flex justify-center space-x-4 md:justify-start">
                    <a href="https://github.com/ManaraMarcelo" target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-white" aria-label="GitHub"><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/in/marcelo-manara" target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-white" aria-label="LinkedIn"><LinkedInIcon /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-white" aria-label="YouTube"><YouTubeIcon /></a>
                </div>
            </div>
        </header>
        <div className="mt-10 grid gap-6 border-t border-white/20 pt-8 md:grid-cols-2">
            <button onClick={() => setPage('dev')} className="glass-effect transform rounded-lg p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/60">
                <h2 className="flex items-center text-2xl font-medium"><CodeIcon />Portfólio de Desenvolvimento</h2>
                <p className="mt-2 text-white/80">Explore minhas habilidades em Cloud, DevSecOps, projetos de software e mais.</p>
            </button>
            <button onClick={() => setPage('video')} className="glass-effect transform rounded-lg p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/60">
                <h2 className="flex items-center text-2xl font-medium"><VideoIcon />Portfólio Audiovisual</h2>
                <p className="mt-2 text-white/80">Veja meu trabalho com vídeos, focados em impacto, sentimento e narrativa.</p>
            </button>
        </div>
    </div>
);

// --- Componente da Tela de Desenvolvimento ---
const DevView = () => (
    <div>
        <h2 className="text-3xl font-medium">Desenvolvimento & Tecnologia</h2>
        <section className="mt-6">
            <h3 className="text-xl font-medium">Resumo Profissional</h3>
            <p className="mt-2 leading-relaxed text-white/90">
                Estudante de Análise e Desenvolvimento de Sistemas com grande interesse em <strong>segurança, automação e desenvolvimento de soluções inovadoras</strong>. Minha missão é ajudar pessoas por meio da tecnologia, criando aplicações seguras, eficientes e visualmente impactantes.
            </p>
        </section>
        <section className="mt-6 border-t border-white/20 pt-6">
             <h3 className="text-xl font-medium">Tecnologias e Habilidades</h3>
            <div className="mt-4 space-y-3">
                <div>
                    <h4 className="mb-2 font-medium">Linguagens & Frameworks:</h4>
                    <div className="flex flex-wrap gap-2">
                        {['Python', 'C# + .NET', 'C/C++', 'Bash', 'SQL', 'HTML/CSS'].map(skill => <span key={skill} className="rounded-full bg-white/10 px-3 py-1 text-sm">{skill}</span>)}
                    </div>
                </div>
                <div>
                    <h4 className="mb-2 font-medium">Cloud & DevOps:</h4>
                    <div className="flex flex-wrap gap-2">
                         {['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Linux', 'Git'].map(skill => <span key={skill} className="rounded-full bg-white/10 px-3 py-1 text-sm">{skill}</span>)}
                    </div>
                </div>
            </div>
        </section>
        <section className="mt-6 border-t border-white/20 pt-6">
            <h3 className="text-xl font-medium">Projetos em Destaque</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
                <a href="https://github.com/ManaraMarcelo/Sistema_Escalonavel_AWS-WordPress" target="_blank" rel="noopener noreferrer" className="glass-effect block transform rounded-xl p-4 transition-all duration-300 hover:border-white/50 hover:scale-105">
                    <h4 className="font-medium">WordPress Escalável na AWS</h4>
                    <p className="mt-1 text-sm text-white/80">Infraestrutura com alta disponibilidade usando EC2, RDS, EFS e Auto Scaling.</p>
                </a>
                <a href="https://github.com/ManaraMarcelo/Sistema_Monitoramento_de_Servidor_Linux-AWS" target="_blank" rel="noopener noreferrer" className="glass-effect block transform rounded-xl p-4 transition-all duration-300 hover:border-white/50 hover:scale-105">
                    <h4 className="font-medium">Monitoramento de Servidor Linux</h4>
                    <p className="mt-1 text-sm text-white/80">Scripts em Bash/Python para monitorar Nginx e notificar via Telegram.</p>
                </a>
                <a href="https://github.com/ManaraMarcelo/Deploy_Manager" target="_blank" rel="noopener noreferrer" className="glass-effect block transform rounded-xl p-4 transition-all duration-300 hover:border-white/50 hover:scale-105">
                    <h4 className="font-medium">API CRUD 'DeployManager'</h4>
                    <p className="mt-1 text-sm text-white/80">API RESTful com ASP.NET Core e SQL Server.</p>
                </a>
                <a href="https://github.com/ManaraMarcelo/Projeto-Pipeline" target="_blank" rel="noopener noreferrer" className="glass-effect block transform rounded-xl p-4 transition-all duration-300 hover:border-white/50 hover:scale-105">
                    <h4 className="font-medium">Projeto Pipeline</h4>
                    <p className="mt-1 text-sm text-white/80">Integração de K8s, Docker, Jenkins criando um fluxo completo de pipeline acionado pelo 'push' do git.</p>
                </a>
            </div>
        </section>
    </div>
);

// --- Componente da Tela de Vídeo ---
const VideoView = () => {
    const videos = [
        { title: "Vídeo Institucional - Empresa X", description: "Direção e edição para campanha de marca.", link: "https://www.instagram.com/reel/DKcO4EMuN4T/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", thumbnail: "https://placehold.co/600x400/1B2735/FFFFFF?text=Seu+Video+1" },
        { title: "Reel Promocional - Produto Y", description: "Vídeo curto e dinâmico para redes sociais.", link: "https://www.instagram.com/reel/DFfiDzjOMje/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", thumbnail: "https://placehold.co/600x400/2C3E50/FFFFFF?text=Seu+Video+2" },
        { title: "Cobertura de Evento - Z", description: "Melhores momentos do evento corporativo.", link: "https://www.instagram.com/reel/DJvBLAWu1kG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", thumbnail: "https://placehold.co/600x400/34495E/FFFFFF?text=Seu+Video+3" }
    ];
    return (
        <div>
            <h2 className="text-3xl font-medium">Portfólio Audiovisual</h2>
            <p className="mt-2 text-white/80">Vídeos com foco em impacto, sentimento e narrativa. Clique para assistir.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {videos.map((video, index) => (
                    <a href={video.link} key={index} target="_blank" rel="noopener noreferrer" className="group glass-effect transform rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/50">
                        <img src={video.thumbnail} alt={video.title} className="h-40 w-full object-cover" />
                        <div className="p-4"><h3 className="font-medium text-lg">{video.title}</h3><p className="text-sm text-white/80">{video.description}</p></div>
                    </a>
                ))}
            </div>
        </div>
    );
};


// --- Componente Principal (App) ---
export default function App() {
    const [page, setPage] = useState('home');
    const cardRef = useRef(null);
    const [contentKey, setContentKey] = useState(0);

    const navigateTo = (newPage) => {
        setContentKey(prevKey => prevKey + 1);
        setPage(newPage);
    };
    
    // Efeito de inclinação do card
    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;
        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            const { width, height } = rect;
            const rotateX = (y / height - 0.5) * -10;
            const rotateY = (x / width - 0.5) * 10;
            card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };
        const handleMouseLeave = () => {
            card.style.transform = `perspective(1200px) rotateX(0) rotateY(0)`;
        };
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);
    
    const renderPage = () => {
        switch (page) {
            case 'dev': return <DevView />;
            case 'video': return <VideoView />;
            default: return <HomeView setPage={navigateTo} />;
        }
    };
    
    return (
        <>
            {/* Estilos injetados diretamente para garantir a compatibilidade */}
            <style>
                {`
                body {
                    background: radial-gradient(ellipse at center, hsl(231, 28%, 20%) 0%, #000000 70%);
                    font-family: 'Inter', sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                .glass-effect {
                    background: rgba(10, 10, 20, 0.4);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                `}
            </style>
            <div className="flex min-h-screen items-center justify-center p-4 text-white sm:p-6 lg:p-8">
                <div ref={cardRef} className="glass-effect w-full max-w-5xl rounded-3xl shadow-2xl transition-transform duration-300 ease-out">
                    <div className="max-h-[90vh] overflow-y-auto p-6 md:p-10">
                        {page !== 'home' && (
                            <button onClick={() => navigateTo('home')} className="mb-6 flex items-center text-white/80 transition-colors hover:text-white">
                                <ArrowLeftIcon /> Voltar
                            </button>
                        )}
                        <div key={contentKey} className="animate-fade-in">{renderPage()}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
