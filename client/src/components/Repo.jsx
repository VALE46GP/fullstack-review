import React from 'react';

const Repo = (props) => (
  <div>
    <div className="divTable minimalistBlack">
      <div className="divTableHeading">
        <div className="divTableRow">
        </div>
      </div>
      <div className="divTableBody">
        <div className="divTableRow">
          <div className="divTableCell">Title</div>
          <div className="divTableCell"><a href={props.data.html_url}>{props.data.name}</a></div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">Author</div>
          <div className="divTableCell">{props.data.username}</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">Updated Last</div>
          <div className="divTableCell">{props.data.updated}</div>
        </div>
      </div>
      <div className="divTableFoot tableFootStyle">
        <div className="divTableRow">
        </div>
      </div>
    </div>
    <div><br/></div>
  </div>
);

export default Repo;

/*


 */