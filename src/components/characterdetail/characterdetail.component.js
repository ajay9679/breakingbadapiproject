import React from 'react';
import './characterdetail.styles.scss';

const CharacterDetail = ({id, name, birthday, occupation, img, status, nickname, portrayed, appearance}) => {
	return <div className='content'>
		<div className='character'>
			<img src={img} alt='api images' className='character__image' />
			<div className='character__details'>
				<h3>{name}</h3>
				<div className='character__birthday'>DOB: {birthday}</div>
				<div className='character__occupation'>Occupation: {occupation}</div>
				<div className='character__status'>Status: {status ? status : 'N/A'}</div>
				<div className='character__nickname'>Nickname: {nickname ? nickname : 'N/A'}</div>
				<div className='character__portrayed'>Portrayed By: {portrayed ? portrayed : 'N/A'}</div>
				<div className='character__apperance'>Appearance: {appearance.map(appear => `Season_${appear} `)}</div>
			</div>
		</div>
	</div>
};

export default CharacterDetail;
