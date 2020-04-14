import React from "react";

const Post = ({
  image,
  title,
  created_at,
  description,
  posted_by,
  category,
  likes
}) => {
  return (
    <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
      <div className="timeline-arrow"></div>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={image}
              className="card-img"
              alt="..."
              height="180px"
              width="180px"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {title}
              </h5>
              <p className="card-text">{description.slice(0, 100)}......</p>
              <p className="card-text">
                <span className="small text-gray">
                  <i className="fa fa-clock-o mr-1"></i>
                  {created_at}
                </span>
                <span className="small text-gray text-capitalize"><b>{posted_by}</b></span>
                <span className="small text-gray pl-4">
                  <i className="fa fa-love"></i>
                  {likes} Likes
                </span>
                <span className="small text-gray pl-4">
                  <i className="fa fa-love"></i>
                  category : {category}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Post;
