import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import assests from './assests/index'

function App() {
  const secondaryColor = assests.color.secondary;
 console.log(secondaryColor);
 console.log(assests);
  return (
<div>
  Kanban app
  <p>{secondaryColor}</p>

</div>
  );
}

export default App;
