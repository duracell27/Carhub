import { MouseEventHandler } from "react";

export type CustomButton = {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "submit" | "reset" | undefined;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
};

export type SearchManufacturerProps = {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
};

export type CarProps = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};
export type OptionsProps = {
  title: string,
  value: string
}
export type CustomFilterProps = {
  title: string;
  options: OptionsProps[]
}

// Type '"undefined" | "button" | "submit" | "reset"' is not assignable to type '"button" | "submit" | "reset" | undefined'.
//   Type '"undefined"' is not assignable to type '"button" | "submit" | "reset" | undefined'.
