import Image from 'next/image'

import nlwLogo from '../../assets/nlw-spacetime-logo.svg'

export const Hero = () => {
  return (
    <div className="space-y-4 ">
      <Image src={nlwLogo} alt="NLW Spacetime" />

      <div className="max-w-[300px] space-y-1">
        <h1 className="text-3xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-xs leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <a
        href="#"
        className="inline-block rounded-full bg-green-500 px-3 py-2 font-alt text-xs uppercase leading-none text-black hover:bg-green-600"
      >
        cadastrar lembranças
      </a>
    </div>
  )
}
