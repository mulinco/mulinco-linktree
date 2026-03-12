export default function Avatar({ isKawaii, onDoubleClick }: { isKawaii: boolean, onDoubleClick?: () => void }) {
  return (
    <div 
      className={`relative ${isKawaii ? 'sticker-effect-hero' : ''}`}
      onDoubleClick={onDoubleClick}
      title="Segredo: duplo-clique para trocar seu tema"
    >
      {!isKawaii && (
        <div
          className="avatar-ring absolute inset-0"
        />
      )}
      
      <div
        className={`relative w-28 h-28 flex items-center justify-center text-2xl font-bold select-none overflow-hidden ${
          isKawaii ? 'animate-morph' : 'goth-avatar-pic'
        }`}
        style={{
          background: isKawaii ? '#fff' : 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
          border: isKawaii ? '4px solid #fff' : 'none',
          color: 'var(--accent)',
          boxShadow: isKawaii ? 'none' : '0 0 40px rgba(210, 4, 45, 0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        <img 
          src="/maria-avatar.jpg" 
          alt="Avatar" 
          className="w-full h-full object-cover foto-dark" 
        />
        <img 
          src="/maria-avatar.jpg" 
          alt="Avatar Kawaii" 
          className="w-full h-full object-cover foto-light" 
        />
      </div>
    </div>
  )
}
