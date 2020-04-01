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
    <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
      <div class="timeline-arrow"></div>
      <div class="card mb-3" style={{ maxWidth: "540px" }}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src={image}
              class="card-img"
              alt="..."
              height="180px"
              width="180px"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                {title}
              </h5>
              <p class="card-text">{description.slice(0, 100)}......</p>
              <p class="card-text">
                <span class="small text-gray">
                  <i class="fa fa-clock-o mr-1"></i>
                  {created_at}
                </span>
                <span class="small text-gray text-capitalize"><b>{posted_by}</b></span>
                <span class="small text-gray pl-4">
                  <i class="fa fa-love"></i>
                  {likes} Likes
                </span>
                <span class="small text-gray pl-4">
                  <i class="fa fa-love"></i>
                  {category} -- category
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
