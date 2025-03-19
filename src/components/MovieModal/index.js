import React from 'react'
import "./MovieModal.css";

function MovieModal({
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModalOpen,
}) {
  return (
    <div className='presentation'>
        <div className='wrapper-modal'>
            <div className='modal'>
                <span onClick={() => setModalOpen(false)}>
                    X
                </span>
            </div>
        </div>
    </div>
  )
}

export default MovieModal;
