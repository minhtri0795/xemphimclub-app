import React from "react";
function TrailerPopup({ videoKey, closePopup }) {
  return (
    <div className="modal-root">
      <div className="modal is-active">
        <div className="modal-background" onClick={closePopup}></div>
        <div className="modal-content">
          <div className="embed-responsive">
            <iframe
              title="video"
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
        <div className="modal-close" onClick={closePopup}></div>
      </div>
    </div>
  );
}

export default TrailerPopup;
