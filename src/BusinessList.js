import React from 'react';


import './BusinessList.css';

import Business from './Business.js';

class BusinessList extends React.Component{
	render()
	
	{
		console.log(this.props.businesses);
		 return (
      <div className="BusinessList">
        {
			<div className="BusinessList">
			
			{this.props.businesses.map(single => <Business business = {single} key = {this.props.businesses.id}/>)}
			</div>
			
		}
	  </div>
);
 
	}
}

export default BusinessList;