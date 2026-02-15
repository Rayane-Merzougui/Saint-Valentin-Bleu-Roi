"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Mail, Play, Pause, ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// --- CONFIGURATION PERSONNALISABLE ---
const CONFIG = {
  prenom: "Ma 7bouba ",
  surnom: "Mon Amour",
  dateRencontre: "2025-03-15", // Format YYYY-MM-DD
  lettre: `Abir,

Kayn bniyadem ydokhlo f 7yatk w ymchiw bla ma ykheliw hata 2atar ghi fato w sayi, W kayn nti . Nti li bdltili ga3 7yati m nhar li t3arft bik.

Kol la7da rani mfwtha m3ak b nisba liya rah cadeau mdholi rbi. Nkon mfwt nhar k7al khas ghi nchikh m3ak chwiya bach dnya ttnwr , w je sais ma ntfahmoch f la music mais dahka ta3k la plus belle mélodie b nisba liya. had 3id l7ob chtah occasion bach n3abrlk 3la lmacha3ir taw3i.

Nti 7bibti , 3ayniya , sahabti , w kolchi f 7yati. w merci 3la li ziyntili 7yati .

Je t'aime, du plus profond de mon coeur.`,
  raisons: [
    "La façon ta3 3aynik ki ybriyiw ki tdahki",
    "l7amas ta3k ki nkono f sujet tbghih",
    "Ki nkono chaykhin w f drba tskri hadi tjr dahakni",
    "la voix ta3k tzid ta3jbni a chauque fois nsma3ha",
    "ki ta7achmi ki nkono m3a ba3d hadi tjr cute",
    "tjr ta3arfi kich dahkini (lprblm machi bl3ani ms dahkini)",
    "9lbk byed w ch7al ma nzid na3arfah yzid ybanli byed",
    "lcaractér ta3k 9wiy",
    "Ki tkoni nayda m rgad w tziftili vcl tbani ki lbébé ms ta3jbni",
    "Manich 3arf 3lach ms nifk ybouji ki tkon tkhemi w chaba",
    "l2ana9a ta3k tjr tktlni",
    "Chaj3a ta3k tkhla3ni",
    "tfahmini w nfahmk khtrat bla hadra",
    "style ta3k f lbsa howa le meilleur li chtah f 7yati",
    "Dayra fiya confience w 3arfa les capacité ta3i",
    "golthalk bzf ms dahka ta3k tnwr ga3 dnya",
    "tgoli bli ma3andkch sbr ms prouvitili bli 3aaandk",
    "chyakhat tawa3na f lil (afdal haja f nhari)",
    "lfodol ta3k , tjr tbghi tt3almi",
    "Simplement parce que tu es TOI.",
    "ki nkono m3a ba3d khtrat tchofi fiya 7asbtni maranich nchof fik ms si",
    "l'intelligence ta3k m3a les meilleurs",
    "l7nana ta3k",
    "ki diri lmaquillage tweli to7fa faniya",
    "b la façon ta3k jss ms mthalya fiya",
    "tellement tdahki bzf kol dahka ta3k 3andha ma3na",
    "lmachoir ta3k ki tbda trjf ki tgbdi dahka",
    "Parce que tu rends ma vie meilleure chaque jour",
    "Chaque souvenir rah 3andi m3ak",
    "W mzl nzido ndiro des souvenir",
  ],
};

export default function ValentinePage() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [clickedHearts, setClickedHearts] = useState<number[]>([]);
  const [activeReason, setActiveReason] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [daysCount, setDaysCount] = useState(0);
  const [easterEggCount, setEasterEggCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Calcul des jours d'amour
    const start = new Date(CONFIG.dateRencontre);
    const now = new Date();
    const diff = Math.floor(
      (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    setDaysCount(diff);

    // Récupérer les cœurs cliqués du localStorage
    const saved = localStorage.getItem("clickedHearts");
    if (saved) setClickedHearts(JSON.parse(saved));
  }, []);

  const handleHeartClick = (index: number) => {
    if (!clickedHearts.includes(index)) {
      const newClicked = [...clickedHearts, index];
      setClickedHearts(newClicked);
      localStorage.setItem("clickedHearts", JSON.stringify(newClicked));
    }
    setActiveReason(CONFIG.raisons[index]);
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleTitleClick = () => {
    const newCount = easterEggCount + 1;
    setEasterEggCount(newCount);
    if (newCount >= 3) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 5000);
      setEasterEggCount(0);
    }
  };

  return (
    <main className="min-h-screen selection:bg-royal-blue/30">
      {/* Audio Element (Hidden) */}
      <audio ref={audioRef} loop src="/Assets/Shivers.mp3" />

      {/* Floating Music Control */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-royal-blue/20 text-royal-blue hover:scale-110 transition-transform"
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>

      {/* Section 1: Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-royal-blue/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-royal-blue/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            onClick={handleTitleClick}
            className="text-5xl md:text-7xl font-serif text-royal-blue mb-4 cursor-pointer select-none"
          >
            Pour toi, {CONFIG.prenom}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 font-light">
            Un petit coin du web rien que pour nous, pour te rappeler à quel
            point tu es spéciale.
          </p>

          <AnimatePresence>
            {showEasterEgg && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="text-royal-blue font-serif italic mb-4"
              >
                ✨ Tu as trouvé le message secret : Je t'aime plus que tout au
                monde ! ✨
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setIsLetterOpen(true)}
            className="group relative px-8 py-4 bg-royal-blue text-white rounded-full overflow-hidden transition-all hover:shadow-xl hover:shadow-royal-blue/20 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail size={20} />
              Ouvre-moi
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-royal-blue/40"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Letter Modal */}
      <AnimatePresence>
        {isLetterOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#FDFBF7] p-4 sm:p-6 md:p-8 lg:p-12 rounded-sm shadow-2xl border-[6px] sm:border-[8px] md:border-[12px] border-white max-h-[90vh] overflow-y-auto"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(0,0,0,0.05), 0 20px 50px rgba(0,0,0,0.1)",
              }}
            >
              <button
                onClick={() => setIsLetterOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-royal-blue transition-colors"
              >
                Fermer
              </button>

              <div className="font-serif text-slate-800 leading-relaxed whitespace-pre-line text-base sm:text-lg md:text-xl">
                {CONFIG.lettre.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.02 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              <div className="mt-12 flex justify-end">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: CONFIG.lettre.length * 0.02 + 0.5 }}
                  className="text-right"
                >
                  <p className="font-serif italic text-royal-blue text-xl">
                    Ton {CONFIG.surnom}
                  </p>
                  <Heart
                    className="inline-block text-royal-blue fill-royal-blue mt-2"
                    size={20}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Section 2: Reasons */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-royal-blue mb-4">
            Tant de raisons de t'aimer...
          </h2>
          <p className="text-slate-500 mb-16">
            Clique sur un cœur pour découvrir une raison
          </p>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-4 md:gap-6">
            {CONFIG.raisons.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleHeartClick(index)}
                className={cn(
                  "aspect-square flex items-center justify-center rounded-2xl transition-all duration-500",
                  clickedHearts.includes(index)
                    ? "bg-royal-blue/10 text-royal-blue border-2 border-royal-blue/20"
                    : "bg-slate-50 text-slate-300 hover:text-royal-blue/40"
                )}
              >
                <Heart
                  size={24}
                  className={cn(
                    clickedHearts.includes(index) && "fill-royal-blue"
                  )}
                />
              </motion.button>
            ))}
          </div>

          <div className="mt-12">
            <button
              onClick={() => {
                const randomIdx = Math.floor(
                  Math.random() * CONFIG.raisons.length
                );
                handleHeartClick(randomIdx);
              }}
              className="text-royal-blue border-b border-royal-blue/30 pb-1 hover:border-royal-blue transition-all"
            >
              Tirer une raison au hasard
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeReason && (
              <motion.div
                key={activeReason}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-16 p-8 glass rounded-3xl max-w-2xl mx-auto border-royal-blue/10"
              >
                <Sparkles className="text-royal-blue mx-auto mb-4" size={32} />
                <p className="text-2xl font-serif text-slate-800 italic">
                  "{activeReason}"
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Section 3: Final */}
      <section className="py-24 px-4 bg-[#F5F5F7] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl text-slate-500 uppercase tracking-widest mb-4">
              Notre Histoire
            </h3>
            <div className="text-6xl md:text-8xl font-serif text-royal-blue mb-2">
              {daysCount}
            </div>
            <p className="text-xl text-slate-600 italic">
              jours de bonheur à tes côtés
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-slate-800">
              Et toi, tu m'aimes ?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => alert("3rftha! ❤️")}
                className="px-8 py-3 bg-royal-blue text-white rounded-full hover:scale-105 transition-transform shadow-lg shadow-royal-blue/20"
              >
                Oui
              </button>
              <button
                onClick={() => alert("Hata ana, Ktr mli raki 7asba ! 🥰")}
                className="px-8 py-3 bg-white text-royal-blue border border-royal-blue/20 rounded-full hover:scale-105 transition-transform shadow-sm"
              >
                Oui évidemment
              </button>
            </div>
          </div>

          <footer className="mt-32 text-slate-400 text-sm">
            <p>Fait avec tout mon amour pour {CONFIG.prenom}</p>
            <p className="mt-2">Saint-Valentin 2026</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
