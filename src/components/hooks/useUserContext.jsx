import React, { Children, useState } from 'react';

export const useUserContext = () => {
	const userContext = React.useContext();
    const [product, setProduct] = useState([])
	return (
		<userContext.Provider value={product}>
			{Children}
		</userContext.Provider>
	);
};
