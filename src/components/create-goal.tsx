import { X, DoorClosed, SaveIcon } from 'lucide-react'

import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'
import { Label } from './ui/label'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './ui/radio-group'
import { Input } from './ui/input'

export function CreateGoal() {
  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <DialogTitle>Criar meta</DialogTitle>
            <DialogClose>
              <X className="size={5} text-zinc-600" />
            </DialogClose>
          </div>

          <DialogDescription>
            Adicione atividades que te fazem bem e que você quer continuar
            praticando toda semana.
          </DialogDescription>
        </div>

        <form action="" className="flex flex-col flex-1 justify-between gap-4">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Qual a atividade?</Label>
              <Input
                autoFocus
                type="text"
                name="title"
                id="title"
                placeholder="ex.: Exercícios, dormir bem, etc..."
                className="bg-zinc-900 px-4 py-3 rounded-lg text-sm placeholder:text-zinc-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Quantas vezes por semana?</Label>
              <RadioGroup>
                <RadioGroupItem value="1">
                  <RadioGroupIndicator />
                  <span className="font-medium text-sm text-zinc-300 leading-none">
                    1x por semana
                  </span>
                  <span className="text-lg leading-none">🥱</span>
                </RadioGroupItem>{' '}
                <RadioGroupItem value="2">
                  <RadioGroupIndicator />
                  <span className="font-medium text-sm text-zinc-300 leading-none">
                    2x por semana
                  </span>
                  <span className="text-lg leading-none">🙂</span>
                </RadioGroupItem>{' '}
                <RadioGroupItem value="3">
                  <RadioGroupIndicator />
                  <span className="font-medium text-sm text-zinc-300 leading-none">
                    3x por semana
                  </span>
                  <span className="text-lg leading-none">😎</span>
                </RadioGroupItem>{' '}
                <RadioGroupItem value="4">
                  <RadioGroupIndicator />
                  <span className="font-medium text-sm text-zinc-300 leading-none">
                    4x por semana
                  </span>
                  <span className="text-lg leading-none">😜</span>
                </RadioGroupItem>{' '}
                <RadioGroupItem value="5">
                  <RadioGroupIndicator />
                  <span className="font-medium text-sm text-zinc-300 leading-none">
                    5x por semana
                  </span>
                  <span className="text-lg leading-none">🤨</span>
                </RadioGroupItem>{' '}
                <RadioGroupItem value="6">
                  <RadioGroupIndicator />
                  <span className="font-medium text-sm text-zinc-300 leading-none">
                    6x por semana
                  </span>
                  <span className="text-lg leading-none">🤯</span>
                </RadioGroupItem>{' '}
                <RadioGroupItem value="7">
                  <RadioGroupIndicator />
                  <span className="font-medium text-sm text-zinc-300 leading-none">
                    Todos os dias da semana
                  </span>
                  <span className="text-lg leading-none">🔥</span>
                </RadioGroupItem>
              </RadioGroup>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <DialogClose asChild>
              <Button type="button" variant="secondary" className="flex-1">
                <DoorClosed className="size={4}" />
                Fechar
              </Button>
            </DialogClose>
            <Button type="button" className="flex-1">
              <SaveIcon className="size={4}" />
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}
