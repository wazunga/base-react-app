import React, {Fragment} from 'react'
import ErrorDisplay from '../../components/ErrorDisplay/ErrorDisplay'
import errorTest from '../../assets/testErrorDisplay.svg'

const SiteStatus = () => (
	<Fragment>
		<div><h1>SiteStatus</h1></div>
		<ErrorDisplay
			img={errorTest}
			title="Title Test"
			message="Message Test"
		/>
	</Fragment>
 
)

export default SiteStatus
