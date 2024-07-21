import React, { useState } from 'react';
import './../styles/recentposts.css';
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';

const Recentposts = ({ stories }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentStories = stories.slice(indexOfFirstItem, indexOfLastItem);

  const stripHtmlAndTruncate = (html, maxLength) => {
    let text = html.replace(/<[^>]+>/g, '');
    if (text.length > maxLength) {
      text = text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div>
        <div style={{ textAlign: 'justify', paddingLeft: '1rem', paddingRight: '1rem' }}>
          <div className="headin">
            <span>Recent Posts</span>
          </div>
          <div className='blogss'>
            {currentStories.map((story, index) => (
              <Link to={`/blog/${story.id}`} className='booxx' key={index}>
                <div style={{ width: "100%", height: '40vh', display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div style={{ width: "100%", height: "100%", borderRadius: '10px' }}>
                    <img src={story.image} alt='pic of blogs' style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: '1rem' }} />
                  </div>
                </div>
                <div className='autor'>{story.publisher} - {story.posteddate}</div>
                <div className='ins'>{stripHtmlAndTruncate(story.title, 30)}</div>
                <p className='inside'>{stripHtmlAndTruncate(story.intro, 150)}</p>
                <div className='bottom'>Read More...</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className='pagging'>
        <Pagination
          count={Math.ceil(stories.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape='circular'
        />
      </div>
    </div>
  );
};

export default Recentposts;
