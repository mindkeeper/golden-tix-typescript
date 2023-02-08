export type buttonSize = "regular" | "small" | "large";
export type buttonVariant = "regular" | "outline" | "link";

export const sizes: { [key in buttonSize]: string } = {
  regular: "px-4 py-3 sm",
  small: "p-2",
  large: "px-5 py-3 text-base",
};

export const variants: { [key: string]: string } = {
  regular:
    "bg-primary-purple text-white hover:font-semibold disabled:hover:bg-primary-purple",
  outline:
    "text-primary-purple bg-transparent border-2 border-primary-purple hover:font-semibold hover:bg-primary-purple hover:text-white",
  link: "bg-transparent text-primary-purple hover:underline disabled:no-underline",
};

// export interface Ripple {
//   isActive: boolean;
//   rippleX: number;
//   rippleY: number;
// }
