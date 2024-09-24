import { useMemo } from "react";
import Taco from '@/../taco.json'
import { Food } from "@/entity/food";
import { PageContainer } from "@/components/PageContainer";
import { Header } from "@/components/Header";
import { DetailsLayout } from "@/layout/Details";

export async function getStaticPaths() {
  const paths = Taco.taco.map(f => ({ params: { id: `${f.id}` } }))
  return { paths, fallback: true }
}


type StaticProps = { params: { id: string } }


export default function FoodPage({ params }: StaticProps) {
  const food: Food | undefined = useMemo(
    () => Taco.taco.find(f => f.id === Number(params.id)), [params.id]
  )
  // const page = useMemo(() => Number(props.searchParams.page) || 1, [props.searchParams.page])
  if (!food) {
    return (
      <div>
        <p>
          NOT FOUND
        </p>
      </div>
    )
  }
  return (
    <DetailsLayout food={food} />
  )
}
