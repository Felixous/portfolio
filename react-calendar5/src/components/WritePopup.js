import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getLastDateOfMonth, getShortMonthName, getMonthFromShortName, hideWritePopup, showWritePopup } from '../resources/js/ui';

const WritePopup = ({ selected, categories, addEvent, updateEvent }) => {

	// console.log('=======================================================');
	// console.log('쓰기팝업 실행!! >>> ', selected);

	let mode = !selected.event ? 'create' : 'update';

	const [ year, setYear ] = useState(selected.year);
	const [ month, setMonth ] = useState(selected.month);
	const [ date, setDate ] = useState(selected.date);
	const [ event, setEvent ] = useState(selected.event);
	const [ text, setText ] = useState('');
	const [ category, setCategory ] = useState('home'); // 'home', 'friends', 'works', 'etc'
	const [ repeat, setRepeat ] = useState('none'); // '', 'monthly', 'yearly'

	const submitBtn = useRef();
	const clearBtn = useRef();
	const textInput = useRef();

	useEffect(() => {
		// console.log('유즈이펙트 selected.event >>> ', selected.event);

		if (mode === 'create') {
			// console.log('크리에이트 모드인 경우');
			setYear(selected.year);
			setMonth(selected.month);
			setDate(selected.date);
			setText('');
			setCategory('home');
			setRepeat('none');
		}
		if (mode === 'update') {
			// console.log('업데이트 모드인 경우');
			setYear(selected.event.year);
			setMonth(selected.event.month);
			setDate(selected.event.date);
			setText(selected.event.text);
			setCategory(selected.event.category);
			setRepeat(selected.event.repeat);
		}
	}, [selected]);

	const onChangeText = (e) => {
		// console.log('온체인지텍스트!!!!!!');
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
		hideWritePopup();
		submitBtn.current.click();
	}
	
	const onClickCancel = () => {
		hideWritePopup();
	}

	const dotMaker = () => {
		const item = categories.find((v) => v.name === category);
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

	const dateOptionMaker = useCallback(() => {
		let options = [];

		for (let i=1; i<=getLastDateOfMonth(year, month); i++) {
			options.push(<option key={i}>{i}</option>);
		}
		
		return options;
	}, [year, month, date]);

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
						checked={category === item.name} 
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
		setCategory(e.target.value);
	}

	const textClear = () => {
		setText('');
		textInput.current.focus();
	}

	const onSubmit = (e) => {
		e.preventDefault();
		let newEvent;
		if (mode === 'create') {
			newEvent = {
				id: null, // id는 reducer에서 처리
				year: year,
				month: month,
				date: date,
				text: text,
				category: category,
				repeat: repeat
			}
			addEvent(newEvent);
		} else if (mode === 'update') {
			newEvent = {
				id: selected.event.id, // id는 reducer에서 처리
				year: year,
				month: month,
				date: date,
				text: text,
				category: category,
				repeat: repeat
			}
			updateEvent(newEvent);
		}
	}

	const onChangeRepeat = (e) => {
		setRepeat(e.target.value);
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
							<li className="repeats">
								<ul className="toggle-list">
									<li>
										<input type="radio" id="repeat-none" name="repeat" value="none" checked={repeat === 'none'} onChange={onChangeRepeat} />
										<label htmlFor="repeat-none">None</label>
									</li>
									<li>
										<input type="radio" id="repeat-monthly" name="repeat" value="monthly" checked={repeat === 'monthly'} onChange={onChangeRepeat} />
										<label htmlFor="repeat-monthly">Monthly</label>
									</li>
									<li>
										<input type="radio" id="repeat-yearly" name="repeat" value="yearly" checked={repeat === 'yearly'} onChange={onChangeRepeat} />
										<label htmlFor="repeat-yearly">Yearly</label>
									</li>
								</ul>
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