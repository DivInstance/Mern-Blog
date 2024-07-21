import React, {useEffect} from 'react';
import './../styles/blog.css';
import Component1 from './Blogc1'; 
import Component2 from './Recentposts';
import SuscribeNewsletter from './SuscribeNewsletter';
import { stories } from './blogdata';

export default function Blogs() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', scrollToTop);
    return () => {
      window.removeEventListener('beforeunload', scrollToTop);
    };
  }, []);

  return (
    <div className='wholebody'> 
      <div className='body1'>
        <Component1 stories={stories}/>
      </div>
      <div className='body2'>
        <Component2 stories={stories}/>    
      </div>
      <div>
        <SuscribeNewsletter/>
      </div>
    </div>
  );
  
}
