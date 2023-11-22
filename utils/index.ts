import { CarProps } from "@/types";
import exp from "constants";
import { type } from "os";
type FilterProps = {
  manufacturer: string
    year: number
    fuel: string
    limit: number
    model: string
}
export async function fetchCars(filtesrs: FilterProps) {
  const headers = {
    "X-RapidAPI-Key": "9ee8478925msh155b55995e03b7cp147f40jsn9c8ea5bd8637",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const {manufacturer, year,model,fuel,limit} = filtesrs
  const baseUrl = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}&make=${manufacturer}`
  const response = await fetch(baseUrl, {
    headers: headers,
  })

  const result = await response.json();

  return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

export const generateCarImageUrl = (car: CarProps, angle?: string)=>{
  const url = new URL('https://cdn.imagin.studio/getImage')

  const {make, year, model} = car

  url.searchParams.append('customer', 'hrjavascript-mastery')
  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  url.searchParams.append('angle', `${angle}`)

  return `${url}`
}

export const updateSearchParams = (type: string, value: string) =>{
  const searchParams = new URLSearchParams(window.location.search);
    
  searchParams.set(type, value);
 
  const newPathname = `${
    window.location.pathname
  }?${searchParams.toString()}`;

  return newPathname
}

export type showMoreProps = {
  pageNumber:number,
  isNext: boolean
}