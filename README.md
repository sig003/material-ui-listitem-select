# Material-UI/ListItem : mouse drag select problem solution

1. Material-ui's components > ListItem : not working mouse drag select
2. Because ListItem's 'button' option
3. But remove button option > not working cursor:pointer and background focus highlighting
4. So ListItem needs css control.
- Mouse over > cursor : pointer

```CSS
.list {
	cursor: pointer;
}
```

- Mouse over > Item background focus hoghlighting

```JAVASCRIPT
  import { MouseEvent } from 'react';

  const handleMouseOver = (e: MouseEvent) => {  
    const target: HTMLElement = e.target as HTMLElement;
    target.classList.add('Mui-focusVisible');  
  }
  const handleMouseOut = (e: MouseEvent) => {      
    const target: HTMLElement = e.target as HTMLElement;
    target.classList.remove('Mui-focusVisible');    
  }

  ...

	<ListItem 
	key={i}
	className='list'
	onMouseOver={handleMouseOver}                                  
	onMouseOut={handleMouseOut}
          >
```

