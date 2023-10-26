import React from "react";

function Homepage() {
  return (
    <div>
      <div className="row ">
        <div className="col container mt-4  d-flex justify-content-around">
          <ul class="list-group">
            <li class="list-group-item active">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
        </div>
        <div className="col mt-4 ">
            <div className="row"><i class="bi bi-arrow-right"></i></div>
            <div className="row m-5"><i class="bi bi-arrow-left"></i></div>
        </div>
        <div className="col  container mt-4 d-flex justify-content-around">
          <ul class="list-group">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
