import React from 'react'
import "./businessList.css"
import Business from '../business/Business'

const BusinessList = props => {
  const businessList = props.businesses.map(bus => (
    <Business 
      name={bus.name}
      imageSrc={bus.imageSrc}
      address={bus.address}
      city={bus.city}
      state={bus.state}
      zipCode={bus.zipCode}
      category={bus.category}
      rating={bus.rating}
      reviewCount={bus.reviewCount}
    />
  ))
  return (
    <div className="BusinessList">
      {businessList}
    </div>
  )
}


export default BusinessList