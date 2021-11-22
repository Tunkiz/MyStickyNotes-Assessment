import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text1, text2, text3, text4, date, handleDeleteNote }) => {
return (
		<div className='note'>
			<form>
			<label id ='mydata'>Assignee:</label><label >{text1}</label>
			<hr/>
			<label id ='mydata'>Priority:</label><label>{text2}</label>
				<hr/>
			<label id ='mydata'>Task:</label><label>{text3}</label>
			<hr/>
			<label id ='mydata'>Complete:</label><label></label><label>[{text4}]</label>
			<hr/>
			</form>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;
