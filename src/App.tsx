import { MouseEvent } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './style.css';

function App() {
  const list = ['aaaaaa', 'bbbbbb', 'cccccc', 'dddddd', 'eeeeee', 'ffffff', 'gggggg', 'hhhhhh', 'iiiiii', 'jjjjjj', 'kkkkkk'];

  const handleMouseOver = (e: MouseEvent) => {
    const target: HTMLElement = e.target as HTMLElement;
    target.classList.add('Mui-focusVisible');
  }
  const handleMouseOut = (e: MouseEvent) => {
    const target: HTMLElement = e.target as HTMLElement;
    target.classList.remove('Mui-focusVisible');    
  }

  return (
    <div className='container'>
      {list.map(i => 
          <>
          <ListItem 
            key={i}
            className='list'
            onMouseOver={handleMouseOver}                                  
            onMouseOut={handleMouseOut}
          >
            <ListItemText primary={i} />
         </ListItem>
         <Divider />
         </>
        )}
    </div>
  );
}

export default App;
