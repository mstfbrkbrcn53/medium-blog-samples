import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
}

export default function HeadComponent() {
	return (
		<Breadcrumbs aria-label="breadcrumb">
			<Link color="inherit" href="/" onClick={handleClick}>
				Organization
			</Link>
			<Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
				Level1
			</Link>
			<Typography color="textPrimary">Level1-Level1</Typography>
		</Breadcrumbs>
	);
}