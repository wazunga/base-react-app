import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

export const ErrorDisplayButton = ({btnLabel}) => (	
	<Fragment>
		<Link to='/'
			className="px-3 py-2 text-xs uppercase font-bold leading-snug text-black hover:opacity-60 transition ease-in-out duration-350 transform hover:scale-110 focus:outline-none bg-green-400 rounded-md mr-3">
				{btnLabel}
		</Link>
	</Fragment>
)
ErrorDisplayButton.propTypes = {
	btnLabel: PropTypes.string.isRequired,
}
