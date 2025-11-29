/**File: ./src/MyComponent.jsx
 * Author: ITA
 * MyComponent: A sample component demonstrating the use of DialogBox.
 * This component includes a button to open the DialogBox and displays some content within it.
 * 
 * Change Log
 * =========================================================
 * Date        Version   Author  Description
 * =========================================================
 * 2025/11/27  1.0.0     ITA     Genesis.
*/

/** VERY IMPORTANT!!!
 * Depending on how you are testing the DialogBox component, you need to uncomment the appropriate import statement below.
 * 
 * Test type 1:
 * If you are testing the DialogBox component as part of this project,
 * then import the DialogBox and useDialogBox from the local filepath of this project: './modal/DialogBox' and './modal/DialogBoxProvider'
 * 
 * Test type 2:
 * If you are testing the DialogBox component as an npm package,
 * then import the DialogBox and useDialogBox from 'dialogboxjs'
 * 
 * Based on the above, please comment/uncomment the appropriate import statements below.
 */
import { DialogBox } from 'dialogboxjs';
import { useDialogBox } from 'dialogboxjs';
// import DialogBox from './modal/DialogBox';
// import { useDialogBox } from './modal/DialogBoxProvider';
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
        else {
            setMyInput('');
            return;
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
                <button onClick={requestClose} >Cancel</button>
                <button onClick={closeButtonClicked} >Submit</button>
            </DialogBox>
        </div>
    );
}