import React from 'react';
import './pagination.styles.scss'
import {Link} from 'react-router-dom';

const Pagination = ({characterPerPage, totalCharacters, paginate}) => {
	const pageNumbers = [];
	for(let i=1; i<=Math.ceil(totalCharacters/characterPerPage); i++) pageNumbers.push(i);

	return <nav aria-label="Page navigation example">
		<ul className="pagination justify-content-center">
			{
				pageNumbers.map(number => <li key={number} className='page-item' ><Link to={`page=${number}`} onClick={() => paginate(number)} className='page-link'>{number}</Link></li>)
			}
		</ul>
	</nav>
};

export default Pagination;
