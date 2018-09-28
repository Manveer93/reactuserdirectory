import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Welcome from './start/1st';

ReactDOM.render(<Welcome/>, document.getElementById('root'));
registerServiceWorker();
