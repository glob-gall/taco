"use client"
import { Header } from "@/components/Header";
import Input from "@/components/Input";
import { PageContainer } from "@/components/PageContainer";
import { Food, FoodValue } from "@/entity/food";
import { relativeFoodValues } from "@/utils/calculateRelativeValue";
import { Pencil } from "lucide-react";
import { ChangeEvent, useCallback, useMemo, useState } from "react";


type TableItemProps = {
  name: string
  value: FoodValue
  unit: string
}

function TableItem({ name, unit, value }: TableItemProps) {
  return (
    <div className="flex flex-col bg-zinc-300  rounded py-2 px-3 w-32">

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



type DetailsProps = {
  food: Food
}
function Micronutrients({ food }: DetailsProps) {
  return (
    <div className="flex flex-wrap gap-1">
      <TableItem
        name="Proteína"
        value={food.proteina}
        unit="g"
      />

      <TableItem
        name="Kcal"
        value={food.Kcal}
        unit=""
      />

      <TableItem
        name="Carboidrato"
        value={food.carboidratos}
        unit="g"
      />

      <TableItem
        name="Lipídeos"
        value={food.lipideos}
        unit="g"
      />

      <TableItem
        name="Cálcio"
        value={food.calcio}
        unit="mcg"
      />

      <TableItem
        name="Cinzas"
        value={food.cinzas}
        unit="g"
      />

      <TableItem
        name="Cobre"
        value={food.cobre}
        unit="mcg"
      />

      <TableItem
        name="Fibra"
        value={food.fibra}
        unit="g"
      />

      <TableItem
        name="Ferro"
        value={food.ferro}
        unit="mcg"
      />

      <TableItem
        name="Fósforo"
        value={food.fosforo}
        unit="mcg"
      />

      <TableItem
        name="Magnésio"
        value={food.magnesio}
        unit="mcg"
      />

      <TableItem
        name="Manganês"
        value={food.manganes}
        unit="mcg"
      />

      <TableItem
        name="Niacina"
        value={food.niacina}
        unit="mcg"
      />

      <TableItem
        name="Piridoxina"
        value={food.piridoxina}
        unit="mcg"
      />

      <TableItem
        name="Potássio"
        value={food.potassio}
        unit="mcg"
      />

      <TableItem
        name="RE"
        value={food.RE}
        unit="mcg"
      />

      <TableItem
        name="RAE"
        value={food.RAE}
        unit="mcg"
      />

      <TableItem
        name="Retinol"
        value={food.retinol}
        unit="mcg"
      />

      <TableItem
        name="Riboflavina"
        value={food.riboflavina}
        unit="mcg"
      />

      <TableItem
        name="Sódio"
        value={food.sodio}
        unit="mcg"
      />

      <TableItem
        name="Tiamina"
        value={food.tiamina}
        unit="mcg"
      />

      <TableItem
        name="Umidade"
        value={food.umidade}
        unit="%"
      />

      <TableItem
        name="Vitamina C"
        value={food.c}
        unit="mcg"
      />

      <TableItem
        name="Zinco"
        value={food.zinco}
        unit="mcg"
      />

    </div>
  )
}
export function DetailsLayout({ food }: DetailsProps) {
  const [gramas, setGramas] = useState(100)

  const changeInputGramas = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    value = value.replace(/[^0-9]/, '')
    setGramas(Number(value))
  }, [])

  const relativeValues = useMemo(() => {
    if(gramas === 100) return food
    return relativeFoodValues(food,gramas)
  },[food,gramas])

  return (
    <PageContainer>
      <Header />

      <div className="bg-zinc-200 rounded p-3">
        <div className="flex items-center mb-14 justify-between">
          <h2 className="text-zinc-700 font-bold text-lg ">
            {food.name}
          </h2>

          <div className="flex items-center bg-zinc-100 rounded pr-2">
            <Input value={gramas} id="gramas" onChange={changeInputGramas} type="text" className="w-20 hover:outline-none text-zinc-700 font-bold" />
            <label className="" htmlFor="gramas">
              <Pencil size={24} className="pl-2 text-zinc-700" />
            </label>
          </div>
        </div>


        <Micronutrients food={relativeValues} />
      </div>
    </PageContainer>
  )
}