import { create } from 'zustand'
import Input from '../../components/elements/Input'

export const useFinder = create<{
  finderString: string
  setFinderString: (text: string) => void
}>((set) => ({
  finderString: '',
  setFinderString: (text: string) => set({ finderString: text }),
}))

export default function Finder({ className }: { className?: string }) {
  const { finderString, setFinderString } = useFinder()

  return <div className={className}>
    <Input 
      type="text" 
      value={finderString}
      onChange={(e) => setFinderString(e.target.value)}
    />
  </div>
}
