// Features

// Variant
export type ButtonVariant =
  | "solid"
  | "outline"
  | "ghost"
  | "subtle"
  | "surface"
  | "plain";

// Color
export type ColorPalette =
  | "gray"
  | "red"
  | "green"
  | "blue"
  | "teal"
  | "pink"
  | "purple"
  | "cyan"
  | "orange"
  | "yellow";

// Size
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export const sizeClasses: Record<ButtonSize, string> = {
  xs: "text-xs",
  sm: "px-4 py-2 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-4 py-2 text-lg",
  xl: "px-4 py-2 text-xl",
};

export const colorClasses: Record<
  ButtonVariant,
  Record<ColorPalette, string>
> = {
  solid: {
    gray: "bg-white rounded text-black p-7 font-sans px-4 py-2 hover:bg-gray-300",
    red: "bg-[#c72323] text-white font-sans px-4 py-2 hover:bg-[#a91d1d]",
    orange: "bg-[#f97316] text-black font-sans px-4 py-2 hover:bg-[#d65d12]",
    yellow: "bg-[#e5cb41] text-black font-sans px-4 py-2 hover:bg-[#c2ad36]",
    green: "bg-[#16a34a] text-white font-sans px-4 py-2 hover:bg-[#12893e]",
    teal: "bg-[#0d9488] text-white font-sans px-4 py-2 hover:bg-[#0b7b70]",
    blue: "bg-[#225ad5] text-white font-sans px-4 py-2 hover:bg-[#1c4fb2]",
    cyan: "bg-[#0884a1] text-white font-sans px-4 py-2 hover:bg-[#066e84]",
    purple: "bg-[#9333ea] text-white font-sans px-4 py-2 hover:bg-[#7829bd]",
    pink: "bg-[#db2777] text-white font-sans px-4 py-2 hover:bg-[#b21d63]",
  },

  outline: {
    gray: "bg-transparent border border-[#686868] text-[#dadadd]  hover:bg-[#18181b]",
    red: "bg-transparent border border-[#400e0e] text-[#fca5a5] hover:bg-[#300c0c]",
    green:
      "bg-transparent border border-[#0f3c22] text-green-500 hover:bg-[#042713]",
    blue: "bg-transparent border border-[#1a3000] text-[#a3cfff] hover:bg-[#14204a]",
    teal: "bg-transparent border border-[#032726] text-teal-500 hover:bg-[#134152]",
    pink: "bg-transparent border border-[#6d0e34] text-[#f6a5d1] hover:bg-[#45061f]",
    purple:
      "bg-transparent border border-[#2f0553] text-[#d8b4fe] hover:bg-[#2f0553]",
    cyan: "bg-transparent border border-[#134152] text-[#67e8f9] hover:bg-[#072a38]",
    orange:
      "bg-transparent border border-[#6c2710] text-[#ebab6b] hover:bg-[#3b1106]",
    yellow:
      "bg-transparent border border-[#713f12] text-[#f3d743] hover:bg-[#422006]",
  },
  ghost: {
    gray: "bg-transparent text-[#dadadd]  hover:bg-[#18181b]",
    red: "bg-transparent text-[#fca5a5] hover:bg-[#300c0c]",
    green: "bg-transparent text-green-500 hover:bg-[#042713]",
    blue: "bg-transparent text-[#a3cfff] hover:bg-[#14204a]",
    teal: "bg-transparent text-teal-500 hover:bg-[#134152]",
    pink: "bg-transparent text-[#f6a5d1] hover:bg-[#45061f]",
    purple: "bg-transparent text-[#d8b4fe] hover:bg-[#2f0553]",
    cyan: "bg-transparent text-[#67e8f9] hover:bg-[#072a38]",
    orange: "bg-transparent text-[#ebab6b] hover:bg-[#3b1106]",
    yellow: "bg-transparent text-[#f3d743] hover:bg-[#422006]",
  },

  plain: {
    gray: "bg-transparent text-[#dadadd] ",
    red: "bg-transparent text-[#fca5a5] ",
    green: "bg-transparent text-green-500 ",
    blue: "bg-transparent text-[#a3cfff] ",
    teal: "bg-transparent text-teal-500 ",
    pink: "bg-transparent text-[#f6a5d1] ",
    purple: "bg-transparent text-[#d8b4fe] ]",
    cyan: "bg-transparent text-[#67e8f9] ",
    orange: "bg-transparent text-[#ebab6b] ",
    yellow: "bg-transparent text-[#f3d743] ",
  },

  subtle: {
    gray: "bg-[#27272a] text-[#dadadd] hover:bg-[#18181b]",
    red: "bg-[#300c0c] text-[#fca5a5] hover:bg-[#511111]",
    green: "bg-[#042713] text-green-500 hover:bg-[#124a28]",
    blue: "bg-[#14204a] text-[#a3cfff] hover:bg-[#1a3478]",
    teal: "bg-[#134152] text-teal-500 hover:bg-[#114240]",
    pink: "bg-[#45061f] text-[#f6a5d1] hover:bg-[#6d0e34]",
    purple: "bg-[#2f0553] text-[#d8b4fe] hover:bg-[#4a1772]",
    cyan: "bg-[#072a38] text-[#67e8f9] hover:bg-[#134152]",
    orange: "bg-[#3b1106] text-[#ebab6b] hover:bg-[#6c2710]",
    yellow: "bg-[##422006] text-[#f3d743] hover:bg-[#422006]",
  },
  surface: {
    gray: "bg-[#27272a] border border-[#686868] text-[#dadadd] hover:bg-[#18181b]",
    red: "bg-[#300c0c] border border-[#400e0e] text-[#fca5a5] hover:bg-[#511111]",
    green:
      "bg-[#042713]border border-[#0f3c22] text-green-500 hover:bg-[#124a28]",
    blue: "bg-[#14204a] border border-[#1a3000] text-[#a3cfff] hover:bg-[#1a3478]",
    teal: "bg-[#134152] border border-[#032726] text-teal-500 hover:bg-[#114240]",
    pink: "bg-[#45061f] border border-[#6d0e34] text-[#f6a5d1] hover:bg-[#6d0e34]",
    purple:
      "bg-[#2f0553] border border-[#2f0553] text-[#d8b4fe] hover:bg-[#4a1772]",
    cyan: "bg-[#072a38] border border-[#134152] text-[#67e8f9] hover:bg-[#134152]",
    orange:
      "bg-[#3b1106] border border-[#6c2710] text-[#ebab6b] hover:bg-[#6c2710]",
    yellow:
      "bg-[##422006] border border-[#713f12] text-[#f3d743] hover:bg-[#422006]",
  },
};
