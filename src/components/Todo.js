import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
	const [ modal, setmodal ] = useState(false);

	function deleteHandler() {
		setmodal(true);
	}
	function closeModalHandler() {
		setmodal(false);
	}

	return (
		<div className='card'>
			<h2>{props.text}</h2>
			<div className='actions'>
				<button className='btn' onClick={deleteHandler}>
					Delete
				</button>
			</div>
			{/*This is how React controls the display of the modal. This particular situation, it is dependent on the useEffect hook. You can also use a ternary operator. */}
			{modal && (
				<Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
			)}
			{modal && <Backdrop onCancel={closeModalHandler} />}
		</div>
	);
}

export default Todo;
