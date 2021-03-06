import React from 'react';
import './Fetchusers.css';

//const mytimeout=setTimeout(Loader,5000);

const Loader = () => {
    const mytimeout=setTimeout(Loader,5000);
    return(
        <div class="d-flex justify-content-center" id="load">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
}

export default Loader;