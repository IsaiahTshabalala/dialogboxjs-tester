````markdown
# Modal Dialog Test App

This is a simple React + Vite test application demonstrating the use of the **DialogBoxJS** package — a reusable modal dialog box component. 
This project is meant to be a sandbox/test environment for `dialogboxjs`. 

---

## Features

- Demonstrates using `DialogBoxProvider` and `DialogBox` components.
- Shows opening and closing a modal programmatically via `useDialogBox` hook.
- Lightweight Vite + React setup.

---

## Prerequisites

- Node.js >= 18
- npm >= 9

---

## Setup

1. Clone this repository:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
````

2. Install dependencies:

```bash
npm install
```

3. Link your local DialogBoxJS package (optional if testing locally):

```bash
cd ../dialogboxjs
npm link
cd ../<repo-name>
npm link dialogboxjs
```

> If using the published npm package, just install it normally:

```bash
npm install dialogboxjs
```

---

## Running the App

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

You should see a page with a button to open the DialogBox modal.

---

## Project Structure

```
src/
  modal/
    DialogBox.jsx   # The actual DialogBox component. For testing DialogBox as part of this project.
                      Please ignore if you are testing the component as the dialogboxjs npm package.
    DialogBoxProvider.js # Context provider to expose functions to open and close the DialogBox.
                    
  App.jsx           # Root component, wraps everything in DialogBoxProvider
  MyComponent.jsx   # Sample component demonstrating DialogBox usage
  main.jsx          # Entry point for Vite
```

---

## Usage Example

```jsx
// File: ./src/MyComponent.jsx
import { DialogBox } from 'dialogboxjs';
import { useDialogBox } from 'dialogboxjs';
import { useEffect, useState } from 'react';

export default function MyComponent() {
    // Custom hook to access functions for opening/closing the dialog box.
    const { requestOpen, requestClose } = useDialogBox();
    const [myInput, setMyInput] = useState('');

    const inputChanged = (e) => {
        setMyInput(e.target.value);
    };

    const closeButtonClicked = () => {
        // Do something before closing the dialog box.
        if (myInput.trim().length > 0) {            
            alert(`You entered: ${myInput}`);
        }

        requestClose();
    }; 
    
    const openButtonClicked = () => {
        // Do something before opening the dialog box.
        setMyInput('');
        requestOpen();
    };

    return (
        <div>
            <h1>DialogBox Example</h1>
            <p>Click the button to open the DialogBox.</p>
            <button onClick={openButtonClicked} >Open Modal</button>
            <DialogBox>
                <h2 >Hello from DialogBox!</h2>
                <input type="text" placeholder="Type something..."
                        value={myInput} onChange={inputChanged} />
                <p>Click the button to close the DialogBox</p>
                <button onClick={closeButtonClicked} >Close Modal</button>
            </DialogBox>
        </div>
    );
}


// ------------------------------------------------------------ 
// File: App.jsx (or any other component .jsx file)
import DialogBoxProvider from 'dialogboxjs';

export default function App() {
    return (
        <DialogBoxProvider>
        <MyComponent />
        </DialogBoxProvider>
    );
}
```

---

## Notes
* Ensure `DialogBoxProvider` wraps all components that use `DialogBox`. *
* NB. One `DialogBoxProvider` for one `DialogBox`.
* This project is meant as a sandbox/test environment for `dialogboxjs`.

---

## License

MIT License

```
```
