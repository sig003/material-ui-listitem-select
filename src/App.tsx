import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './style.css';

function App() {
  const list = ['aaaaaa', 'bbbbbb', 'cccccc', 'dddddd', 'eeeeee', 'ffffff', 'gggggg', 'hhhhhh', 'iiiiii', 'jjjjjj', 'kkkkkk'];

  const handleMouseOver = (e:any) => {    
    e.target.classList.add('Mui-focusVisible');  
  }
  const handleMouseLeave = (e:any) => {        
    e.target.classList.remove('Mui-focusVisible');    
  }

  return (
    <div className='container'>
      {list.map(i => 
          <>
          <ListItem 
            key={i}
            className='list'
            onMouseOver={handleMouseOver}                                  
            onMouseLeave={handleMouseLeave}
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
