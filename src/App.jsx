

/**To un-comment the import below while testing the dialogbox prior to exporting it in the separate 
 * package npm package packagejs */
// import DialogBoxProvider from './modal/DialogBoxProvider';

/**
 * VERY IMPORTANT!!!!!
 * Depedending on how you are testing the DialogBox component, you need to uncomment the appropriate import statement below.
 * 
 * Test type 1:
 * If you are testing the DialogBox component as part of this project,
 * then import the DialogBoxProvider from the local filepath of this project: './modal/DialogBoxProvider'
 * 
 * Test type 2:
 * If you are testing the DialogBox component as an npm package,
 * then import the DialogBoxProvider from 'dialogboxjs'
 * 
 * Based on the above, please comment/uncomment the appropriate import statement below.
 */

// import DialogBoxProvider from './modal/DialogBoxProvider'; // Test type 1
import DialogBoxProvider from 'dialogboxjs'; // Test type 2
import MyComponent from './MyComponent';

export default function App() {

  return (
    // The component that is going to use the DialogBox must be wrapped in the DialogBoxProvider.
    <DialogBoxProvider>
      <MyComponent />
    </DialogBoxProvider>
  );
}
