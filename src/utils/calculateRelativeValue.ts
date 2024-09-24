import { Food, FoodValue } from "@/entity/food";

export function relativeValue(value:FoodValue, relative:number) {
  if(!value) return value

  return Number(value) * (relative/100)
}

export function relativeFoodValues(food:Food, relative:number) {
   const foodWithRelativeValues:Food = {
    id:food.id,
    name:food.name,
    c:relativeValue(food.c, relative),
    calcio:relativeValue(food.calcio, relative),
    carboidratos:relativeValue(food.carboidratos, relative),
    cinzas:relativeValue(food.cinzas, relative),
    cobre:relativeValue(food.cobre, relative),
    colesterol:relativeValue(food.colesterol, relative),
    ferro:relativeValue(food.ferro, relative),
    fibra:relativeValue(food.fibra, relative),
    fosforo:relativeValue(food.fosforo, relative),
    Kcal:relativeValue(food.Kcal, relative),
    lipideos:relativeValue(food.lipideos, relative),
    magnesio:relativeValue(food.magnesio, relative),
    manganes:relativeValue(food.manganes, relative),
    niacina:relativeValue(food.niacina, relative),
    piridoxina:relativeValue(food.piridoxina, relative),
    potassio:relativeValue(food.potassio, relative),
    proteina:relativeValue(food.proteina, relative),
    RAE:relativeValue(food.RAE, relative),
    RE:relativeValue(food.RE, relative),
    retinol:relativeValue(food.retinol, relative),
    riboflavina:relativeValue(food.riboflavina, relative),
    sodio:relativeValue(food.sodio, relative),
    tiamina:relativeValue(food.tiamina, relative),
    umidade:food.umidade,
    zinco:relativeValue(food.zinco, relative),
  }
  return foodWithRelativeValues
}