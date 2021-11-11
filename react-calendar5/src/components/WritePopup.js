import React, { useEffect, useRef, useState } from 'react';
import { getLastDateOfMonth, getShortMonthName, getMonthFromShortName, hideWritePopup, showWritePopup } from '../resources/js/ui';

const WritePopup = ({ events, categories, addEvent }) => {

	useEffect(() => {
		showWritePopup();
	}, [])

	const [ text, setText ] = useState('');
	const [ year, setYear ] = useState(new Date().getFullYear());
	const [ month, setMonth ] = useState(new Date().getMonth() + 1);
	const [ date, setDate ] = useState(new Date().getDate());
	const [ selectedRadio, setSelectedRadio ] = useState(categories[0].name);

	const submitBtn = useRef();
	const clearBtn = useRef();
	const textInput = useRef();
	
	const onChangeText = (e) => {
		setText(e.target.value);
		if (e.target.value.length > 0) {
			clearBtn.current.classList.add('is-active');
		} else {
			clearBtn.current.classList.remove('is-active');
		}
	}

	const onChangeYear = (e) => {
		setYear(Number(e.target.value));
	}

	const onChangeMonth = (e) => {
		setMonth(getMonthFromShortName(e.target.value));
		setDate(1);
	}

	const onChangeDate = (e) => {
		setDate(Number(e.target.value));
	}

	const onClickSave = () => {
		if (text.length === 0) return;
		console.dir(submitBtn.current)
		submitBtn.current.click();
		hideWritePopup();
		setText('');
		setYear(new Date().getFullYear());
		setMonth(new Date().getMonth() + 1);
		setDate(new Date().getDate());
	}
	
	const onClickCancel = () => {
		hideWritePopup();
	}

	const dotMaker = () => {
		const item = categories.find((v) => v.name === selectedRadio);
		return <span className={'dot ' + item.color}></span>;
	}

	const yearOptionMaker = () => {
		let thisYear = year;
		let startYear = thisYear - 5;
		let endYear = thisYear + 5;
		let options = [];

		for (let i = startYear; i < endYear; i++) {
			options.push(<option key={''+i}>{i}</option>);
		}

		return options;
	}

	const monthOptionMaker = () => {
		let options = [];

		for (let i=1; i<=12; i++) {
			let name = getShortMonthName(i);
			options.push(<option key={name}>{name}</option>);
		}

		return options;
	}

	const dateOptionMaker = () => {
		let options = [];

		for (let i=1; i<=getLastDateOfMonth(year, month); i++) {
			options.push(<option key={i}>{i}</option>);
		}
		
		return options;
	}

	const radioMaker = () => {
		let radios = [];
		categories.map((item, index) => {
			radios.push(
				<div key={'category-'+item.name} className="radio-box">
					<input 
						type="radio" 
						className="event-category"
						name="category" 
						id={'category-'+item.name} 
						value={item.name} 
						checked={selectedRadio === item.name} 
						onChange={onChangeRadio}
					/>
					<label htmlFor={'category-'+item.name} className={item.color}>
						<span className="txt">{item.name}</span>
					</label>
				</div>
			)
		})
		return radios;
	}

	const onChangeRadio = (e) => {
		setSelectedRadio(e.target.value);
	}

	const textClear = () => {
		setText('');
		textInput.current.focus();
	}

	const onSubmit = (e) => {
		e.preventDefault();
		let newEvent = {
			id: Math.max.apply(Math, events.map(function(o) { return o.id; })) + 1,
			year: year,
			month: month,
			date: date,
			text: text
		}
		addEvent(newEvent);
	}

	return (
		<div className="write-popup">
			<div className="popup-layout">

				<div className="header">
					<button type="button" className="btn btn-cancel" onClick={onClickCancel}>Cancel</button>
					<strong>New Event</strong>
					<button type="button" className="btn btn-save" onClick={onClickSave}>Save</button>
				</div>
				<div className="main">
					<form onSubmit={onSubmit}>
						<ul className="form-list">
							<li>
								<div className="input-box">
									<input ref={textInput} name="text" className="event-text" value={text} placeholder="What is your event?" onChange={onChangeText} autoComplete="off" />
									<button ref={clearBtn} type="button" className="btn btn-clear" onClick={textClear}></button>
									{dotMaker()}
								</div>
							</li>
							<li className="selects">
								<select className="event-year" onChange={onChangeYear} value={year}>
									{yearOptionMaker()}
								</select>
								<span className="bar"></span>
								<select className="event-month" onChange={onChangeMonth} value={getShortMonthName(month)}>
									{monthOptionMaker()}
								</select>
								<span className="bar"></span>
								<select className="event-date" onChange={onChangeDate} value={date}>
									{dateOptionMaker()}
								</select>
							</li>
							<li className="categories">
								{radioMaker()}
							</li>
						</ul>
						<button ref={submitBtn} type="submit" className="display-none">제출하기</button>
					</form>
				</div>

			</div>
		</div>
	);
};

export default WritePopup;