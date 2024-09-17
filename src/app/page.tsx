import { useMemo } from "react";
import Taco from '@/../taco.json'
import { Food } from "@/entity/food";
import HomeLayout from "@/layout/Home";

// type HomeProps = {
//   params: any,
//   searchParams: {
//     page?:string
//   }
// }
export default function Home() {
  const taco: Food[] = useMemo(() => Taco.taco, [])
  // const page = useMemo(() => Number(props.searchParams.page) || 1, [props.searchParams.page])

  return <HomeLayout foods={taco} />
}
