import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  // States to manage the loading for each button
  const [loadingStates, setLoadingStates] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
  });

  // Simulate an asynchronous loading process
  const handleClick = (buttonKey: string) => {
    setLoadingStates((prev) => ({ ...prev, [buttonKey]: true }));
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [buttonKey]: false }));
    }, 2000); // Simulates a 2-second action
  };

  return (
    // Black background to simulate Deezer's dark mode
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white space-y-4">
      <h1 className="text-2xl font-bold mb-4">Example with 5 Buttons</h1>
      <h2>
        (Click to test loading (loading) or disabling (disabled) the buttons)
      </h2>

      {/* Button 1 */}
      <Button
        variant="outline"
        colorPalette="gray"
        size="md"
        loading={loadingStates.button1}
        loadingText="Loading..."
        onClick={() => handleClick("button1")}
      >
        See More
      </Button>

      {/* Button 2 */}
      <Button
        variant="plain"
        colorPalette="gray"
        size="xs"
        loading={loadingStates.button2}
        loadingText="Loading..."
        onClick={() => handleClick("button2")}
      >
        Discover
      </Button>

      {/* Button 3 */}
      <Button
        variant="solid"
        colorPalette="purple"
        size="lg"
        loading={loadingStates.button3}
        loadingText="Loading..."
        onClick={() => handleClick("button3")}
      >
        My Music on Shuffle
      </Button>

      {/* Button 4 */}
      <Button
        variant="surface"
        colorPalette="purple"
        size="sm"
        loading={loadingStates.button4}
        loadingText="Saving"
        onClick={() => handleClick("button4")}
      >
        Activate
      </Button>

      {/* Button 5: Disabled function */}
      <Button variant="ghost" colorPalette="gray" size="xs" disabled={true}>
        Later
      </Button>
    </div>
  );
}

export default App;
