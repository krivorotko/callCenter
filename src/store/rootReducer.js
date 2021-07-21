import shifts from './shifts/reducer';
import chats from './chat/reducer';
import metrics from './metrics/reducer';
import auth from './auth/reducer';

const rootReducer = {
	shifts,
	chats,
	metrics,
	auth,
};

export default rootReducer;
