import { Plus } from 'lucide-react'

import logo from '../assets/logo-in-orbit.svg'
import letsStart from '../assets/lets-start.svg'

import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'

export function EmptyGoals() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-screen">
      <img src={logo} alt="logo" />
      <img src={letsStart} alt="logo" />
      <p className="max-w-80 text-center text-zinc-300 leading-relaxed">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size={4}" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
