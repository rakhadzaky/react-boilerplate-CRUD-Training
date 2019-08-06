import React from 'react'
import GoogleMapReact from 'google-map-react'

export default function GoogleMap({ children, bootstrapURLKeys, defaultCenter, defaultZoom }) {
	return(
		<GoogleMapReact bootstrapURLKeys={ bootstrapURLKeys }
						defaultCenter={ defaultCenter }
          				defaultZoom={ defaultZoom }> 
	          { children }
        </GoogleMapReact>
	)
}