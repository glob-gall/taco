import { ReactNode } from "react"

type PageContainerProps = {
  children: ReactNode
}
export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="bg-zinc-900 min-h-screen w-full">
      <div className="max-w-7xl mx-auto py-5 px-2">
        {children}
      </div>
    </div>
  )
}