// =====================================================
// RESTAURANDO A CASA - SITE PREMIUM
// =====================================================
// COMO USAR AS IMAGENS DOS ARQUIVOS ZIP
// =====================================================
// 1. Extraia CAPAS.zip para:
//    /public/capas
//
// 2. Extraia logomarca.zip para:
//    /public/logo
//
// 3. Renomeie as capas nesta sequência:
//
// /public/capas/de-nada-terei-falta.png
// /public/capas/sacerdocio-santo.png
// /public/capas/destronando-ansiedade.png
// /public/capas/destronando-inseguranca.png
// /public/capas/destronando-deserto.png
// /public/capas/destronando-medo.png
// /public/capas/guardiao-1.png
// /public/capas/guardiao-2.png
// /public/capas/guardiao-3.png
// /public/capas/guardiao-4.png
// /public/capas/karnak-12.png
//
// 4. Coloque a logomarca em:
// /public/logo/logo.png
// =====================================================

const books = [
  {
    title: "De Nada Terei Falta",
    subtitle: "Conheça o Pastor do Salmo",
    ebookPrice: "R$ 8,90",
    printedPrice: "R$ 37,92",
    image: "/capas/de-nada-terei-falta.png",
    amazon: "https://www.amazon.com.br/s?k=Nada+Terei+Falta+Conhe%C3%A7a+Pastor%2C+__B0DVX3VZBK&i=digital-text&tag=kbl-20&ref=nb_sb_noss",
    printed: "https://loja.uiclap.com/titulo/ua92695"
  },
  {
    title: "O Sacerdócio Santo",
    subtitle: "Um Chamado à Intercessão e Adoração",
    ebookPrice: "R$ 4,99",
    printedPrice: "R$ 37,21",
    image: "/capas/sacerdocio-santo.png",
    amazon: "https://www.amazon.com.br/s?k=Sacerd%C3%B3cio+Santo+Chamado+Intercess%C3%A3o+Adora%C3%A7%C3%A3o%2C+__B0F5LCVCRW&i=digital-text&tag=kbl-20&ref=nb_sb_noss",
    printed: "https://loja.uiclap.com/titulo/ua98251"
  },
  {
    title: "Destronando a Ansiedade",
    subtitle: "Um guia cristão para vencer o medo e viver em paz",
    ebookPrice: "R$ 17,00",
    printedPrice: "R$ 36,34",
    image: "/capas/destronando-ansiedade.png",
    amazon: "https://www.amazon.com.br/Destronando-Ansiedade-crist%C3%A3o-vencer-silenciar-ebook/dp/B0FLX2HT43/",
    printed: "https://loja.uiclap.com/titulo/ua133134"
  },
  {
    title: "Destronando a Insegurança",
    subtitle: "Fortaleça sua identidade e descanse na Graça",
    ebookPrice: "R$ 17,00",
    printedPrice: "R$ 36,34",
    image: "/capas/destronando-inseguranca.png",
    amazon: "https://www.amazon.com.br/s?k=DESTRONANDO+INSEGURAN%C3%87A+fortalecer+identidade+descansar%2C+_B0F5NBXPTT&i=digital-text&tag=kbl-20&ref=nb_sb_noss",
    printed: "https://loja.uiclap.com/titulo/ua98255"
  },
  {
    title: "Destronando o Deserto",
    subtitle: "Descobrindo a Graça em terrenos áridos",
    ebookPrice: "R$ 17,00",
    printedPrice: "R$ 36,34",
    image: "/capas/destronando-deserto.png",
    amazon: "https://www.amazon.com.br/s?k=Destronando+Deserto+Descobrindo+Terrenos-%C3%81ridos%2C+_B0F9XWQG33&i=digital-text&tag=kbl-20&ref=nb_sb_noss",
    printed: "https://loja.uiclap.com/titulo/ua98261"
  },
  {
    title: "Destronando o Medo",
    subtitle: "Do pavor à confiança, pela graça",
    ebookPrice: "R$ 17,00",
    printedPrice: "R$ 36,35",
    image: "/capas/destronando-medo.png",
    amazon: "https://www.amazon.com.br/s?k=DESTRONANDO+MEDO+pavor+confian%C3%A7a+gra%C3%A7a%2C+_B0FNZWZ3M1&i=digital-text&tag=kbl-20&ref=nb_sb_noss",
    printed: "https://loja.uiclap.com/titulo/ua132845"
  }

  ,
  {
  title: "KARNAK-12",
  subtitle: "A cidade sob o silêncio",
  ebookPrice: "R$ 9,60",
  printedPrice: "R$ 34,90",
  image: "/capas/karnak-12.png",
  amazon:
    "https://www.amazon.com.br/KARNAK-12-SIL%C3%8ANCIO-hist%C3%B3ria-Arrependimento-Reden%C3%A7%C3%A3o-ebook/dp/B0GXLBDPJP",
  printed: "#"
},

{
  title: "O Guardião das Estrelas I",
  subtitle: "Cidade Flutuante: Horizonte Desconhecido",
  ebookPrice: "R$ 9,90",
  printedPrice: "R$ 36,66",
  image: "/capas/guardiao-1.png",
  amazon:
    "https://www.amazon.com.br/s/ref=nb_sb_noss?tag=kbl-20&url=search-alias%3Ddigital-text&field-keywords=Cidade+Flutuante+Horizonte+Desconhecido+Guardi%C3%A3o%2C+_B0FQ4J5WJW",
  printed:
    "https://loja.uiclap.com/titulo/ua133153"
},

{
  title: "O Guardião das Estrelas II",
  subtitle: "A Chama Entre as Sombras",
  ebookPrice: "R$ 9,90",
  printedPrice: "R$ 37,19",
  image: "/capas/guardiao-2.png",
  amazon:
    "https://www.amazon.com.br/Guardi%C3%A3o-das-Estrelas-Chama-Sombras-ebook/dp/B0FQM1H8L2/",
  printed:
    "https://loja.uiclap.com/titulo/ua133164"
},

{
  title: "O Guardião das Estrelas III",
  subtitle: "O Caminho da Libertação",
  ebookPrice: "R$ 9,90",
  printedPrice: "R$ 34,90",
  image: "/capas/guardiao-3.png",
  amazon:
    "https://www.amazon.com.br/s?k=Guardi%C3%A3o+das+Estrelas+Caminho+Liberta%C3%A7%C3%A3o%2C+_B0FQRKR62Z",
  printed:
    "https://loja.uiclap.com/titulo/ua133169"
},

{
  title: "O Guardião das Estrelas IV",
  subtitle: "A Nova Cidade",
  ebookPrice: "R$ 9,90",
  printedPrice: "R$ 34,55",
  image: "/capas/guardiao-4.png",
  amazon:
    "https://www.amazon.com.br/s?k=Guardi%C3%A3o+das+Estrelas+Nova+Cidade%2C+_B0FR7MJRL6",
  printed:
    "https://loja.uiclap.com/titulo/ua133176"
},

];

// =====================================================
// DEPLOY VERCEL + NEXT.JS
// =====================================================
// 1. CRIAR O PROJETO NEXT:
// npx create-next-app@latest restaurando-a-casa
//
// CONFIGURAÇÕES:
// ✔ TypeScript: YES
// ✔ ESLint: YES
// ✔ Tailwind: YES
// ✔ src/: NO
// ✔ App Router: YES
// ✔ Turbopack: YES
// ✔ Import alias: YES
//
// =====================================================
// 2. SUBSTITUIR app/page.tsx
// =====================================================
// Cole TODO este código dentro do arquivo:
// /app/page.tsx
//
// =====================================================
// 3. ADICIONAR IMAGENS
// =====================================================
// Estrutura:
// /public/capas
// /public/logo
//
// Extraia os arquivos ZIP nessas pastas.
//
// =====================================================
// 4. RODAR LOCALMENTE
// =====================================================
// npm run dev
//
// Acesse:
// http://localhost:3000
//
// =====================================================
// 5. ENVIAR PARA GITHUB
// =====================================================
// git init
// git add .
// git commit -m "site restaurando a casa"
//
// Crie um repositório no GitHub:
// https://github.com
//
// git remote add origin URL_DO_REPOSITORIO
// git push -u origin main
//
// =====================================================
// 6. PUBLICAR NA VERCEL
// =====================================================
// 1. Crie conta:
// https://vercel.com
//
// 2. Clique:
// Add New Project
//
// 3. Conecte GitHub
//
// 4. Selecione o repositório
//
// 5. Deploy
//
// =====================================================
// 7. CONECTAR DOMÍNIO
// =====================================================
// restaurandoacasa.com.br
//
// Na Vercel:
// Settings → Domains
//
// Adicione:
// restaurandoacasa.com.br
// www.restaurandoacasa.com.br
//
// Depois configure os DNS no Registro.br
// apontando para a Vercel.
// =====================================================

export default function RestaurandoCasaPremium() {
  return (
    <main className="bg-gradient-to-b from-[#f8f4ec] via-[#f6f1e8] to-[#efe6d6] text-slate-900 overflow-hidden">
      <div className="fixed top-0 left-0 w-72 h-72 bg-amber-200/30 blur-3xl rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-72 h-72 bg-indigo-300/20 blur-3xl rounded-full pointer-events-none"></div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#312e81] text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 md:py-20 grid lg:grid-cols-[1fr_0.95fr] gap-10 lg:gap-16 items-center">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center justify-center mx-auto px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 text-center">
              <span className="text-sm uppercase tracking-[0.2em] text-amber-200 text-center">
                Livros cristãos • Fé • Cura • Esperança
              </span>
            </div>

            <img
              src="/logo/logo.png"
              alt="Restaurando a Casa"
              className="w-40 md:w-52 mb-8 md:mb-10 mx-auto"
            />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 text-center">
              Restaurando a <span className="text-amber-300">Casa</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-2xl mb-10 text-center">
              Seja bem-vindo ao lugar onde restauramos juntos o equilíbrio e a harmonia na nossa casa mais preciosa: nós mesmos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#catalogo"
                className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-8 py-5 rounded-2xl transition-all shadow-2xl"
              >
                Explorar Livros
              </a>

              <a
                href="#sobre"
                className="border border-white/20 hover:bg-white/10 px-8 py-5 rounded-2xl transition-all"
              >
                Conheça o Projeto
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 max-w-[520px] mx-auto items-stretch">
            {books.slice(0,4).map((book) => (
              <a
                key={book.title}
                href={book.amazon}
                target="_blank"
                className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[32px] p-4 shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 block group overflow-hidden h-full flex flex-col min-h-[420px]"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-[220px] sm:h-[260px] lg:h-[240px] object-contain bg-gradient-to-b from-white to-slate-100 rounded-2xl mb-4 p-3 group-hover:scale-105 transition-all duration-700"
                />

                <h3 className="font-black text-xl leading-tight mb-2">
                  {book.title}
                </h3>

                <p className="text-slate-300 text-sm mb-3 flex-1">
                  {book.subtitle}
                </p>

                <div className="text-amber-300 font-bold text-lg">
                  {book.ebookPrice}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="uppercase tracking-[0.2em] text-amber-700 font-bold text-sm">
              Sobre o projeto
            </span>

            <h2 className="text-5xl font-black mt-5 mb-8 leading-tight">
              Uma missão de restauração através da Palavra de Deus
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Restaurando a Casa nasceu para levar esperança, transformação emocional e crescimento espiritual através de livros cristãos acessíveis e profundamente inspiradores.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Cada obra foi escrita para fortalecer sua fé, restaurar sua identidade em Deus e ajudar você a enfrentar os desafios da vida com graça, coragem e esperança.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-[#f8f5ef] rounded-3xl p-6 border border-[#ece4d8]">
                <h3 className="font-black text-xl mb-3">
                  📱 Leia no Kindle
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  Leia no celular, tablet, computador ou Kindle com toda praticidade da Amazon.
                </p>
              </div>

              <div className="bg-[#f8f5ef] rounded-3xl p-6 border border-[#ece4d8]">
                <h3 className="font-black text-xl mb-3">
                  📚 Livro Impresso
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  Tenha uma experiência especial com livros físicos entregues em todo Brasil.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-amber-200 rounded-full blur-3xl opacity-50"></div>

            <img
              src="/capas/destronando-ansiedade.png"
              alt="Livro destaque"
              className="relative z-10 rounded-[36px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CATALOGO */}
      <section id="catalogo" className="py-28 bg-[#f6f1e8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="uppercase tracking-[0.2em] text-amber-700 font-bold text-sm">
              Catálogo oficial
            </span>

            <h2 className="text-5xl font-black mt-5 mb-8">
              Ebooks e livros impressos para fortalecer sua fé
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed">
              Escolha o formato ideal para sua jornada espiritual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {books.map((book) => (
              <div
                key={book.title}
                className="group bg-white/80 backdrop-blur-xl rounded-[36px] overflow-hidden shadow-xl hover:shadow-[0_25px_80px_rgba(0,0,0,0.18)] hover:-translate-y-3 transition-all duration-500 border border-white/60"
              >
                <div className="overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-[320px] sm:h-[420px] object-contain bg-gradient-to-b from-[#faf7f2] to-[#f3eadf] group-hover:scale-110 transition-all duration-700 p-5"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl sm:text-3xl font-black leading-tight mb-4">
                    {book.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed min-h-[60px] mb-8">
                    {book.subtitle}
                  </p>

                  <div className="space-y-4">
                    <a
                      href={book.amazon}
                      target="_blank"
                      className="flex items-center justify-between bg-gradient-to-r from-slate-900 to-slate-700 hover:scale-[1.02] text-white px-6 py-5 rounded-2xl transition-all shadow-xl"
                    >
                      <div>
                        <div className="font-black text-lg">
                          Ler no Kindle
                        </div>

                        <div className="text-slate-300 text-sm">
                          {book.ebookPrice}
                        </div>
                      </div>

                      <span className="text-2xl">→</span>
                    </a>

                    <a
                      href={book.printed}
                      target="_blank"
                      className="flex items-center justify-between bg-[#f6f1e8] hover:bg-[#efe7d8] border border-[#e7dcc8] px-6 py-5 rounded-2xl transition-all hover:scale-[1.02]"
                    >
                      <div>
                        <div className="font-black text-lg">
                          Comprar Impresso
                        </div>

                        <div className="text-slate-600 text-sm">
                          {book.printedPrice}
                        </div>
                      </div>

                      <span className="text-2xl">📚</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERIE */}
      <section className="py-28 bg-gradient-to-r from-amber-100 via-orange-50 to-yellow-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="uppercase tracking-[0.2em] text-amber-700 font-bold text-sm">
              Coleção especial
            </span>

            <h2 className="text-5xl font-black mt-5 mb-8 leading-tight">
              Destronando a ansiedade, o medo e a insegurança
            </h2>

            <p className="text-xl text-slate-700 leading-relaxed mb-10">
              Uma série transformadora sobre identidade, graça, paz e restauração emocional à luz da Palavra de Deus.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-6 py-4 rounded-2xl shadow-lg font-semibold">
                ✔ Cura emocional
              </div>

              <div className="bg-white px-6 py-4 rounded-2xl shadow-lg font-semibold">
                ✔ Identidade em Cristo
              </div>

              <div className="bg-white px-6 py-4 rounded-2xl shadow-lg font-semibold">
                ✔ Paz e esperança
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 items-start max-w-[520px] mx-auto">
            <img src="/capas/destronando-ansiedade.png" className="rounded-3xl shadow-2xl w-full object-contain bg-white p-3" />
            <img src="/capas/destronando-inseguranca.png" className="rounded-3xl shadow-2xl w-full object-contain bg-white p-3 translate-y-8" />
            <img src="/capas/destronando-deserto.png" className="rounded-3xl shadow-2xl w-full object-contain bg-white p-3 -translate-y-8" />
            <img src="/capas/destronando-medo.png" className="rounded-3xl shadow-2xl w-full object-contain bg-white p-3" />
          </div>
        </div>
      </section>


      {/* FICÇÃO */}
      <section className="py-28 bg-[#0f172a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="uppercase tracking-[0.2em] text-amber-300 font-bold text-sm">
              Ficção & Jornada
            </span>

            <h2 className="text-5xl font-black mt-5 mb-8">
              Universos, mistérios e jornadas épicas
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed">
              Conheça coleções inspiradoras que unem imaginação, propósito e reflexão.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {books.slice(6).map((book) => (
              <div
                key={book.title}
                className="bg-white/10 backdrop-blur-xl rounded-[28px] overflow-hidden border border-white/10 hover:-translate-y-3 transition-all duration-500"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-[320px] object-contain bg-gradient-to-b from-slate-100 to-slate-300 p-4"
                />

                <div className="p-5">
                  <h3 className="font-black text-lg mb-2">
                    {book.title}
                  </h3>

                  <p className="text-slate-300 text-sm">
                    {book.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* TESTEMUNHOS */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="uppercase tracking-[0.2em] text-amber-700 font-bold text-sm">
              Testemunhos
            </span>

            <h2 className="text-5xl font-black mt-5 mb-8">
              Histórias de restauração
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed">
              Pessoas impactadas através da Palavra, da fé e da esperança.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f8f5ef] rounded-[32px] p-8 shadow-xl">
              <p className="text-slate-700 leading-relaxed mb-6">
                “Esses livros me ajudaram a vencer a ansiedade e voltar a confiar em Deus.”
              </p>
              <div className="font-black text-slate-900">— Leitora Amazon</div>
            </div>

            <div className="bg-[#f8f5ef] rounded-[32px] p-8 shadow-xl">
              <p className="text-slate-700 leading-relaxed mb-6">
                “Uma leitura acolhedora, profunda e extremamente necessária.”
              </p>
              <div className="font-black text-slate-900">— Comunidade Restaurando a Casa</div>
            </div>

            <div className="bg-[#f8f5ef] rounded-[32px] p-8 shadow-xl">
              <p className="text-slate-700 leading-relaxed mb-6">
                “Encontrei esperança novamente através dessas mensagens.”
              </p>
              <div className="font-black text-slate-900">— Leitor Kindle</div>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl text-3xl transition-all hover:scale-110"
      >
        💬
      </a>


      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <span className="uppercase tracking-[0.2em] text-amber-300 font-bold text-sm">
            Comece hoje sua jornada
          </span>

          <h2 className="text-5xl lg:text-6xl font-black leading-tight mt-6 mb-10">
            Deus ainda restaura histórias
          </h2>

          <p className="text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Escolha um livro, fortaleça sua fé e permita que a Palavra transforme sua vida.
          </p>

          <a
            href="#catalogo"
            className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-10 py-6 rounded-2xl text-xl transition-all shadow-2xl"
          >
            Explorar Catálogo
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-slate-400 py-14 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-8 text-center">
          <div className="flex flex-col items-center lg:items-center">
            <img
              src="/logo/logo.png"
              alt="Restaurando a Casa"
              className="w-40 mb-4"
            />

            <p className="max-w-md leading-relaxed text-center">
              Livros cristãos para restaurar vidas através da Palavra de Deus.
            </p>
          </div>

          <div className="text-sm text-slate-500 text-center lg:text-right">
            © 2026 Restaurando a Casa
            <br />
            Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
