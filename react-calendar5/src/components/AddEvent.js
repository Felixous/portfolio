import React, { useState } from 'react';
import useInput from '../hooks/useInput';

const AddEvent = ({ onSubmitAddEvent }) => {
	const [ text, setText, onChangeEventText ] = useInput('');
	const [ year, setYear, onChangeEventYear ] = useInput('');
	const [ month, setMonth, onChangeEventMonth ] = useInput('');
	const [ date, setDate, onChangeEventDate ] = useInput('');

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('제출하기 클릭');
		onSubmitAddEvent(text, Number(year), Number(month), Number(date));
		setText('');
		setYear('');
		setMonth('');
		setDate('');
	}

	return (
		<div>
			<div className="inner-frame">

				<form onSubmit={onSubmit}>
					<ul className="form-list">
						<li>
							<label htmlFor="event-text">이벤트 텍스트</label>
							<br />
							<input name="event-text" value={text} onChange={onChangeEventText} />
						</li>
						<li>
							<label htmlFor="event-year">이벤트 년도</label>
							<br />
							<input name="event-year" value={year} onChange={onChangeEventYear} />
						</li>
						<li>
							<label htmlFor="event-month">이벤트 월</label>
							<br />
							<input name="event-month" value={month} onChange={onChangeEventMonth} />
						</li>
						<li>
							<label htmlFor="event-date">이벤트 일</label>
							<br />
							<input name="event-date" value={date} onChange={onChangeEventDate} />
						</li>
					</ul>
					<button type="submit">제출하기</button>
				</form>

			</div>
		</div>
	);
};

export default AddEvent;