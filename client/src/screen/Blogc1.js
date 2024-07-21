import React from 'react';
import './../styles/blogc1.css';
import './../styles/recentposts.css';
import './Blogs';
import { Link } from 'react-router-dom';

const stripHtmlAndTruncate = (html, maxLength) => {
    let text = html.replace(/<[^>]+>/g, '');
    
    if (text.length > maxLength) {
      text = text.substring(0, maxLength) + '...';
    }
    return text;
  };

const Blogc1 = ({stories}) => {
return (
    <div>
        <title>Blog page</title>
        <center style={{textAlign:'justify', paddingLeft: '1rem', paddingRight: '1rem'}}>
                <div>
                    <div class="froker-blog">
                        <span>
                            <span class="froker-blog-span">FROKER </span>
                            <span class="froker-blog-span2"></span>
                            <span class="froker-blog-span3">BLOG</span>
                        </span>
                    </div>
                    <center>
                        <div className="sub">
                            Articles covering the most recent <br></br>updates and advancements
                        </div>
                    </center>
                </div>
                <div className='blogs'>
                    {stories.slice(13,14).map((stories, index) => (
                        <Link to={`/blog/${stories.id}`} className='boox1' key={index}>  
                          <div className='subboox'>
                                <img src={stories.image} alt='pic of blogs' className='blogimg1'style={{borderRadius:'20px'}}/>
                            </div>
                            <div className='autor'>{stories.publisher} - {stories.posteddate}</div>
                            <div className='ins'>{stripHtmlAndTruncate(stories.title, 30)}</div>
                            <p className='inside'>{stripHtmlAndTruncate(stories.intro, 80)}</p>
                            <div className='bottom'>Read More...</div>
                        </Link> 
                        ))}
                        <div className='sideblog'> 
                        {stories.slice(11,13).map((stories, index) => (
                            <Link to={`/blog/${stories.id}`} className='boox2'  key={index}>
                                    <div className='subbboox'>
                                        <img src={stories.image} alt='pic of blogs' className='blogimg2 '/>
                                    </div>
                                    <div className='side'>
                                        <div className='autor'>{stories.publisher} - {stories.posteddate}</div>
                                        <div className='ins'>{stripHtmlAndTruncate(stories.title, 30)}</div>
                                        <p className='inside'>{stripHtmlAndTruncate(stories.intro, 50)}</p>
                                        <div className='bottom'>Read More...</div>
                                    </div>
                            </Link> 
                            ))}
                </div> 
                </div>
        </center>
    </div>
  )
}

export default Blogc1;
