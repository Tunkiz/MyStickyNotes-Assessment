import { useState } from 'react';

const AddNote = ({ handleAddNote,my}) => {
	const [assignee, setNoteText] = useState('');
	const [priority, setPriority] = useState('');
	const [Task, setTask] = useState('');
	const [Complete, setComplete] = useState('');
	const characterLimit = 300;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};
	const handleChange1 = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setPriority(event.target.value);
		}
	};
	const handleChange2 = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setTask(event.target.value);
		}
	};
	const handleChange3 = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setComplete(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (assignee.trim().length > 0 && priority.trim().length > 0
		 && Task.trim().length > 0 &&(Complete.trim().length == 0 || Complete ==='x')) {
			window.location.reload(true)
			handleAddNote(assignee,priority,Task,Complete);
			setNoteText('');
			setPriority('');
			setTask('');
			setComplete('');
			console.log("Hello");
		}
	};
	
	function clickBody() {
		document.getElementById('hide').style.display = 'block';
	}
	document.body.addEventListener("click", clickBody)
	
	return (
		<div style ={{display:'none'}} id='hide' className='note new'>
			<form>
			<label id ='mydata'>Assignee:</label><input
				type='text'
				value={assignee}
				onChange={handleChange}
			></input>
			<hr/>
			<label id ='mydata'>Priority:</label><input
				type='text'
				
				value={priority}
				onChange={handleChange1}
				></input>
				<hr/>
			<label id ='mydata'>Task:</label><input
				type='text'
				
				value={Task}
				onChange={handleChange2}
			></input>
			<hr/>
			<label id ='mydata'>Complete:</label><input
				type='text'
				maxlength = '1'
				value={Complete}
				placeholder ='[x]'
				onChange={handleChange3}
			></input>
			<hr/>
			</form>
			<div className='note-footer'>
				<small>
					{characterLimit - assignee.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
