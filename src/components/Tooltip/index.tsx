import { ReactNode } from "react";
import * as UI from '@/components/ui/tooltip'
type TooltipProps = {
  children:ReactNode
  text:string
}
function Tooltip({children, text}: TooltipProps) {
  return (
    <UI.TooltipProvider>
      <UI.Tooltip>
        <UI.TooltipTrigger asChild>
            {children}
        </UI.TooltipTrigger>
        <UI.TooltipContent className=" bg-zinc-200 px-1 border-zinc-300  rounded">
          {text}
        </UI.TooltipContent>
      </UI.Tooltip>
    </UI.TooltipProvider>
  )
}

export default Tooltip