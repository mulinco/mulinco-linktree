export default function Avatar({ isKawaii, onDoubleClick }: { isKawaii: boolean, onDoubleClick?: () => void }) {
  return (
    <div 
      className="relative w-40 h-40 flex items-center justify-center cursor-pointer mb-2"
      onDoubleClick={onDoubleClick}
      title="duplo-clique para trocar seu tema"
    >
      {/* ---------------- GOTH AVATAR ---------------- */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-all duration-[800ms] ease-out z-10
          ${isKawaii ? 'opacity-0 scale-75 -rotate-12 pointer-events-none' : 'opacity-100 scale-100 rotate-0'}
        `}
      >
        {/* Reflexo vermelho pulsante ao redor (Formato perfeitamente circular) */}
        <div className="absolute w-[120px] h-[120px] rounded-full border border-red/60 animate-[redPulse_3s_ease-in-out_infinite]" />
        
        {/* Avatar Circular Gótico */}
        <div className="relative w-28 h-28 rounded-full border border-red shadow-[0_0_30px_5px_rgba(210,4,45,0.4)] overflow-hidden bg-[rgba(26,11,11,1)] transition-transform hover:scale-[1.03] duration-300">
           <img 
            src="/maria-avatar.jpg" 
            alt="Avatar Gótico" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* ---------------- KAWAII AVATAR ---------------- */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-all duration-[800ms] ease-out z-20
          ${isKawaii ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-125 rotate-12 pointer-events-none'}
        `}
      >
        {/* Artefato fofo Kawaii (Gotícula/Blob orgânica elegante com borda reforçada) */}
        <div 
          className="relative w-[130px] h-[130px] animate-morph overflow-hidden border-[8px] border-white shadow-[0_10px_25px_rgba(238,170,195,0.5)] bg-white transition-transform hover:scale-[1.03] duration-300"
        >
          <img 
            src="/maria-avatar-kawaii.png" 
            alt="Avatar Kawaii" 
            className="w-full h-full object-cover scale-[1.12]" 
          />
        </div>
      </div>
    </div>
  )
}
