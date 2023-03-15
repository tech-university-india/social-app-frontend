import React, { useState } from 'react';
import makeAnimated from 'react-select/animated';
import { PropTypes } from 'prop-types';
import Select from 'react-select';
import { nameOptions } from '../../constants/mockData';

import './TaggingModal.css';
const TaggingModal = (props) => {

	const OptionsSelected = props.taggedPeople.map((item) => {
		return { value: item, label: item };
	});
	const animatedComponents = makeAnimated();
	const [nowSelected, setNowSelected] = useState();

	const handleInputChange = (e) => {
		setNowSelected(
			e.map((item) => item.value)
		);
	};
	const handleDoneClick = () => {
		props.setTaggedPeople(nowSelected);
		props.setShowModal(false);
	};

	return (
		<div className='tagging-modal'>
			<div className='tagging-modal-container'>
				<div className='tagging-modal-header'>
					<h1>Tag People</h1>
					<span onClick={() => props.setShowModal(false)}><img src='/assets/Icons/c-remove.svg' /></span>
				</div>
				<div className='tagging-modal-body'>
					<Select closeMenuOnSelect={false}
						components={animatedComponents}
						isMulti
						defaultValue={OptionsSelected}
						options={nameOptions}
						onChange={handleInputChange}
					/>
				</div>
				<div className='tagging-modal-buttons'>
					<button onClick={handleDoneClick}>Done</button>
				</div>
			</div>
		</div>


	);
};

export default TaggingModal;

TaggingModal.propTypes = {
	setShowModal: PropTypes.func.isRequired,
	setTaggedPeople: PropTypes.func.isRequired,
	taggedPeople: PropTypes.array.isRequired
};