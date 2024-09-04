import * as UI from "@/components/ui/pagination"
import { useRouter, useSearchParams } from "next/navigation"
import { useMemo } from "react"

type PaginationProps = {
  len:number
  size:number
}

function urlParam(page:number){
  return `/?${new URLSearchParams({page: String(page)}).toString()}`
}

export function Pagination({ len, size }: PaginationProps) {
  const searchParams = useSearchParams()
  
  const totalPages = useMemo(()=> Math.ceil(len/size) ,[len, size])
  const current = useMemo(() => Number(searchParams.get('page')) || 1,[searchParams])
  

  return (
    <UI.Pagination className="bg-zinc-200 rounded">
      <UI.PaginationContent>

        <UI.PaginationItem>
          <UI.PaginationFirst href={urlParam(1)}/>
        </UI.PaginationItem>
        <UI.PaginationItem>
          <UI.PaginationPrevious href={urlParam(+current-1 || 1)}/>
        </UI.PaginationItem>

        <UI.PaginationItem>
            {current}
        </UI.PaginationItem>

        <UI.PaginationItem>
          <UI.PaginationNext href={urlParam(+current+1)} />
        </UI.PaginationItem>

        <UI.PaginationItem>
          <UI.PaginationLast href={urlParam(totalPages)} />
        </UI.PaginationItem>
      </UI.PaginationContent>
    </UI.Pagination>
  )
}
