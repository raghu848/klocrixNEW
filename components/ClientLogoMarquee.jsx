'use client'

// Entries without `src` fall back to a text wordmark (no logo file yet).
const clients = [
  { name: 'GDPL', src: 'GDPL_Logo_white.png' },
  { name: 'Prestige Realty', src: 'Prestige_Realty-01_white.png' },
  { name: 'Gulfin Valley', src: 'Logo (2).png' },
  { name: 'Amayra Trillium', src: 'Amayra logo.png' },
  { name: 'The Grand Sky', src: 'Logo_Grand_sky_golden.png' },
  { name: 'Monga Toyota' },
  { name: 'Fineness Australia', src: 'Fineness.png' },
  { name: 'Fine Cabinets' },
  { name: 'WorkVEU', src: 'Logo_white 1.png' },
  { name: 'Larissa Enroute', src: 'Larissa Enroute_white.png' },
  { name: 'Antaara', src: 'Antaara e-brochure.png' },
  { name: 'Developers', src: 'Logo_2_white.png' },
  { name: 'Client', src: 'Logo_White 2.png' },
  { name: 'Client', src: 'Logo_white.png' },
  { name: 'Client', src: 'Shape 1.png' },
]

// Duplicate for seamless infinite scroll
const infiniteClients = [...clients, ...clients, ...clients]

export default function ClientLogoMarquee() {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient fade effects */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#151517] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#151517] to-transparent z-10" />

      <div className="flex select-none overflow-hidden">
        <div className="flex space-x-12 items-center flex-shrink-0 px-10 animate-marquee">
          {/* Leading Text that flows with the logos */}
          <div className="flex items-center gap-8 mr-8">
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] md:text-xs">
              Trusted by Industry Leaders Worldwide
            </span>
            <div className="w-8 h-[1px] bg-white/10" />
          </div>

          {infiniteClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center justify-center flex-shrink-0 opacity-70 hover:opacity-100 scale-90 hover:scale-100 transition-all duration-500"
            >
              {client.src ? (
                <img
                  src={`/client logos/${client.src}`}
                  alt={client.name}
                  loading="lazy"
                  className="h-12 md:h-16 w-auto max-w-[180px] object-contain"
                />
              ) : (
                <span className="text-lg md:text-xl font-black tracking-tighter text-white/90 hover:text-accent transition-colors duration-300">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
