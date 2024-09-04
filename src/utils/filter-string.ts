import { Food } from "@/entity/food";
import { separetorsRegex } from "./regex";

export function removeAccents(str: string): string {
  return str.replace(/[áàâäéèêëíìîïóòôöúùûü]/gi, (match) => {
    switch (match) {
      case 'á':
      case 'à':
      case 'â':
      case 'ä':
        return 'a';
      case 'é':
      case 'è':
      case 'ê':
      case 'ë':
        return 'e';
      case 'í':
      case 'ì':
      case 'î':
      case 'ï':
        return 'i';
      case 'ó':
      case 'ò':
      case 'ô':
      case 'ö':
        return 'o';
      case 'ú':
      case 'ù':
      case 'û':
      case 'ü':
        return 'u';
      default:
        return match;
    }
  });
}

// Test the function
// console.log(removeAccents('Crème Brûlée')); // outputs: "Creme Brulee"
// console.log(removeAccents('áàâäéèêëíìîïóòôöúùûü')); // outputs: "aaaaeeeeiiiioooouuuu"

export function filterFoodsByName(foods:Food[], toFind:string) {
  let filter = toFind.toLowerCase().replaceAll(separetorsRegex,'')
  filter = removeAccents(filter)


  return foods.filter(f=> removeAccents(f.name.toLocaleLowerCase()).replaceAll(separetorsRegex,'').includes(filter))
}