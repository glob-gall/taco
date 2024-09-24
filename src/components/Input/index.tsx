import { ComponentProps } from "react";
import * as UI from "@/components/ui/input";

type InputProps = ComponentProps<'input'>
function Input(props: InputProps) {
  return (
    <UI.Input className="bg-zinc-800 border-zinc-800 text-zinc-300 rounded h-9" {...props} />
  )
}

export default Input