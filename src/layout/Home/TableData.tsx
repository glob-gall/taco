
type TableDataProps = {
  name: string
  value: string | number | null
  unit: string
}
export function TableData({ name, unit, value }: TableDataProps) {
  return (
    <div className="flex flex-col bg-zinc-300  rounded py-1 px-2">

      <p className="text-xs text-zinc-600 font-bold">
        {name}{unit && `(${unit})`}
      </p>

      <p className="text-zinc-900">
        {value ?
          `${typeof (value) === 'number' ? `${value.toFixed(2)}` : value}`
          : (
            '-'
          )}
      </p>

    </div>
  )
}