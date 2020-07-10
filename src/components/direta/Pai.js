import React, {Fragment} from 'react';

import Filho from './Filho';

export default props => {
	let x = 13;
	let y = 1000;
	return (
		<Fragment>
			<Filho a={x} b={y} />
			<Filho a={y} b={x} />
		</Fragment>
	);
};
