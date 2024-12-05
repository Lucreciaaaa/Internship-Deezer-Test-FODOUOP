import React from "react";
import {
  ButtonVariant,
  ColorPalette,
  ButtonSize,
  sizeClasses,
  colorClasses,
} from "../utils/buttonConfig";

interface ButtonProps {
  variant?: ButtonVariant; // Button variant (e.g., solid, outline, etc.)
  colorPalette?: ColorPalette; // Color palette
  size?: ButtonSize; // Button size
  loading?: boolean; // Button loading state
  loadingText?: React.ReactNode; // Text displayed while loading
  children: React.ReactNode; // Button content
  disabled?: boolean; // Whether the button is disabled
  onClick?: () => void; // Click function
}

function Button({
  variant = "solid", // Default variant (solid)
  colorPalette = "gray", // Default color (gray)
  size = "md", // Default size (md)
  loading = false, // Loading indicator
  loadingText,
  children,
  disabled = false, // Disabled button indicator
  onClick,
}: ButtonProps) {
  // Base classes for the button
  const baseClass =
    "rounded font-medium focus:outline-none focus:ring transition duration-150";

  // Size of the button based on selected option
  const sizeClass = sizeClasses[size];

  // Combined variant and color class
  const variantClass = colorClasses[variant][colorPalette];

  // Disabled or loading class for the button
  const disabledClass =
    disabled || loading ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={`${baseClass} ${sizeClass} ${variantClass} ${disabledClass}`} // Applying the classes
      onClick={onClick} // Click function
      disabled={disabled || loading} // Disable the button if loading or explicitly disabled
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <span
            className={`loader inline-block border-2 border-t-transparent rounded-full w-4 h-4 animate-spin mr-2 ${colorClasses.plain[colorPalette]}`}
          ></span>
          {loadingText && <span>{loadingText}</span>}
        </div>
      ) : (
        children // Show button text if not loading
      )}
    </button>
  );
}

export default Button;

/* Issues faced:
1. Reproducing colors (bg, text, border) with Tailwind: Difficulty coordinating the different Tailwind classes for colors (bg, text, etc.) with button variants (solid, outline).
2. Displaying CSS styles in localhost: Some Tailwind styles were not applied correctly in the development environment, especially with the build process.
3. Combining variant and color function: Had to find a way to apply the correct variants and colors (didn't managed to make it dynamically within the time), which is somewhat complex when managing multiple props at once.

Challenges and decisions:
1. Managing the `loading` and `disabled` states to be coupled with other props (e.g., color, variant).
2. Ensuring the loading spinner's color adapts to the button's text color.


Props:
The Button component accepts several props :

variant: Controls the button style (e.g., "outline", "solid", "plain").
colorPalette: Determines the color scheme for the button.
size: Specifies the size of the button.
loading: A boolean that controls whether the button shows a loading state.
loadingText: Displays custom text when the button is in the loading state.
disabled: A boolean that disables the button if set to true.
onClick: A callback function that handles the button click event.

State Management: I used useState for managing the loading state of each button  
I chose the px-4 py-2 padding utility for the buttons to ensure consistency in spacing and a get closer to the chakra ui model.
The decision to separate color and size into their respective classes allows for better maintainability and easier updates to the button design in the future.

 */
