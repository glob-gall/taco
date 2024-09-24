"use client"
import { Food } from "@/entity/food";
import Tooltip from "@/components/Tooltip";
import Input from "@/components/Input";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { ArrowRight, EllipsisVertical, Eye, LoaderCircle, Search } from "lucide-react";
import { filterFoodsByName } from "@/utils/filter-string";
import { Pagination } from "@/components/Pagination";
import { useSearchParams } from 'next/navigation'
import { Navbar } from "@/components/Navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TableData } from "./TableData";
import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";
import { Header } from "@/components/Header";

type HomeLayoutProps = {
  foods: Food[]
}
type SearchParams = {
  page?: string
}
export default function HomeLayout({ foods }: HomeLayoutProps) {
  const [filter, setFilter] = useState('')
  const [loadingFilter, setLoadingFilter] = useState(false)
  const params = useSearchParams()
  const page = useMemo(() => Number(params.get('page')) || 1, [params])
  console.log({ params });


  const foodsFiltered = useMemo(() => {
    setLoadingFilter(true)
    const filtered = filterFoodsByName(foods, filter)
    setLoadingFilter(false)
    return filtered
  }, [filter, foods])

  const pageFoods = useMemo(() => {
    const start = (page * 10) - 10
    const end = start + 10
    return foodsFiltered.slice(start, end)
  }, [foodsFiltered, page])

  const handleChangeFilter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }, [])

  return (
    <PageContainer>
      <div className="flex flex-row justify-between align-bottom flex-wrap">

        <div className="flex flex-col w-full">
          <Header />

          <div className="flex flex-row items-center gap-2">
            <div className="bg-zinc-800 items-center justify-center flex w-9 h-9 rounded">
              {loadingFilter ? (
                <LoaderCircle className="text-zinc-200" />
              ) : (
                <Search className="text-zinc-200" />
              )}
            </div>
            <Input
              value={filter}
              onChange={handleChangeFilter}
              placeholder="Procurar alimento"
            />
          </div>


          <div className="flex flex-row gap-1 mt-1 ml-auto">
            <p className="text-zinc-300 font-bold">
              Valores relativos a 100g
            </p>
            <p className="text-sm bg-sky-500 rounded py-1 px-2" >
              Carboidratos(g)
            </p>

            <p className="text-sm bg-green-500 rounded py-1 px-2" >
              Proteína(g)
            </p>

            <p className="text-sm bg-orange-500 rounded py-1 px-2" >
              Lipídeos(g)
            </p>
          </div>
        </div>

      </div>

      <Accordion type="multiple" className="bg-zinc-200 rounded mt-1">
        {
          pageFoods.map(food => (
            <AccordionItem
              key={food.id}
              value={`${food.id}`}
              className="hover:bg-zinc-300 duration-200 rounded"
            >
              <AccordionTrigger>
                <div className="flex flex-row justify-between flex-1 flex-wrap">
                  <p>{food.name}</p>

                  <div className="flex flex-row gap-1">

                    <Tooltip text="Carboídratos">
                      <p className="text-sm bg-sky-500 rounded py-1 px-2 w-16" >
                        {typeof (food.carboidratos) === 'number' ? food.carboidratos.toFixed(2) : (food.carboidratos || '-')}
                      </p>
                    </Tooltip>

                    <Tooltip text="Proteínas">
                      <p className="text-sm bg-green-500 rounded py-1 px-2 w-16" >
                        {typeof (food.proteina) === 'number' ? food.proteina.toFixed(2) : (food.proteina || '-')}
                      </p>
                    </Tooltip>

                    <Tooltip text="Lipídeos">
                      <p className="text-sm bg-orange-500 rounded py-1 px-2 w-16" >
                        {typeof (food.lipideos) === 'number' ? food.lipideos.toFixed(2) : (food.lipideos || '-')}
                      </p>
                    </Tooltip>

                    <Link href={`/${food.id}`} className="flex">
                      <Tooltip text="Detalhes">
                        <p className="text-sm  rounded flex justify-center items-center w-7 duration-200 text-zinc-800 hover:bg-zinc-800 hover:text-zinc-200">
                          <Eye size={18} />
                        </p>
                      </Tooltip>
                    </Link>

                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 flex gap-1 flex-wrap">
                <TableData
                  name="Cálcio"
                  value={food.calcio}
                  unit="mg"
                />

                <TableData
                  name="Cinzas"
                  value={food.cinzas}
                  unit="g"
                />

                <TableData
                  name="Cobre"
                  value={food.cobre}
                  unit="mg"
                />

                <TableData
                  name="Fibras"
                  value={food.fibra}
                  unit="g"
                />

                <TableData
                  name="Ferro"
                  value={food.ferro}
                  unit="mg"
                />

                <TableData
                  name="Fósforo"
                  value={food.fosforo}
                  unit="mg"
                />

                <TableData
                  name="Kcal"
                  value={food.Kcal}
                  unit=""
                />

                <TableData
                  name="Magnésio"
                  value={food.magnesio}
                  unit="mg"
                />

                <TableData
                  name="Manganês"
                  value={food.manganes}
                  unit="mg"
                />

                <TableData
                  name="Niacina"
                  value={food.niacina}
                  unit="mg"
                />

                <TableData
                  name="Piridoxina"
                  value={food.piridoxina}
                  unit="mg"
                />

                <TableData
                  name="Potássio"
                  value={food.potassio}
                  unit="mg"
                />

                <TableData
                  name="RAE"
                  value={food.RAE}
                  unit="mcg"
                />

                <TableData
                  name="RE"
                  value={food.RE}
                  unit="mcg"
                />

                <TableData
                  name="Retinol"
                  value={food.retinol}
                  unit="mcg"
                />

                <TableData
                  name="Riboflavina"
                  value={food.riboflavina}
                  unit="mg"
                />

                <TableData
                  name="Sódio"
                  value={food.sodio}
                  unit="mg"
                />

                <TableData
                  name="Tiamina"
                  value={food.tiamina}
                  unit="mg"
                />

                <TableData
                  name="Umidade"
                  value={food.umidade}
                  unit="mg"
                />

                <TableData
                  name="Vitamina C"
                  value={food.c}
                  unit="mg"
                />

                <TableData
                  name="Zinco"
                  value={food.zinco}
                  unit="mg"
                />

              </AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>

      <div className="mt-1 flex">
        <Pagination len={foodsFiltered.length} size={10} />
      </div>

    </PageContainer>
  );
}
