import React from 'react';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function FavoritesSidebar() {
	const favoriteList = useSelector((state) => state.favorites.favorites);

	return (
		<aside className="r-sidebar d-flex flex-column pt-3">
			<section className="card mb-3 p-3 asideCard">
				<h5 className="mt-3 fs-6 fw-semibold">Jobs marked as favorites</h5>
				{console.log(favoriteList)}
				{favoriteList &&
					favoriteList.map((favJob) => {
						return (
							<>
								<div key={favJob._id} className="m-2">
									<h5>{favJob.title}</h5>
									<p className="text-secondary mb-2">{favJob.company_name}</p>
									<Badge className="me-2">{favJob.category}</Badge>
								</div>
								<hr />
							</>
						);
					})}
			</section>
		</aside>
	);
}

export default FavoritesSidebar;
