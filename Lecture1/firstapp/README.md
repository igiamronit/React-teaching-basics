### Lecture 1

### Step 1: 
* Create a new directory for your app
* Navigate into the directory.
```bash
mkdir firstapp
cd firstapp
```
* use `npx create-react-app .` to create a new React app in the current directory.
```bash
npx create-react-app .
```
* clear the boiler code.

### Step 2: Write your first .jsx code
* Change app.js to the following code:
```jsx
function App() {
  const name = "Ronit";
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is JSX in action.</p>
    </div>
  );
}

export default App;
```
### Step 3: Run your app
* Start the development server by running:
```bash
npm start
```
* Open your browser and go to `http://localhost:3000` to see your app in action.