import { configureStore } from '@reduxjs/toolkit';
import userAlmacen from './slices/userReducer';

export default configureStore({
	reducer: {
		userAlmacen,
	},
});
