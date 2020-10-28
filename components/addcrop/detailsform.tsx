import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const DetailsForm = (props) => {
	const handleFieldChange = (e, field) => {
		props.setCropDetails((prevState) => {
			return {
				...prevState,
				[field]: e.target.value
			}
		})
	} 

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Crop Detail
      		</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						variant="outlined"
						required
						id="cropName"
						name="cropName"
						label="Crop Name"
						fullWidth
						onChange={(e) => handleFieldChange(e, "name")}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						variant="outlined"
						required
						id="msp"
						name="msp"
						label="Expected Price (Rs.) per Kg"
						type="number"
						fullWidth
						onChange={(e) => handleFieldChange(e, "MSP")}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						variant="outlined"
						required
						id="quantity"
						name="quantity"
						label="Estimated Quantity (Kgs)"
						fullWidth
						onChange={(e) => handleFieldChange(e, "quantity")}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl required fullWidth>
						<InputLabel variant="outlined" id="demo-simple-select-required-label">Crop Type</InputLabel>
						<Select
							labelId="demo-simple-select-required-label"
							id="demo-simple-select-required"
							variant="outlined"
							label="Crop Type"
							onChange={(e) => props.setCropDetails((prevState) => {
								return {
									...prevState,
									type: ['rabi', 'kharif', 'vegetable', 'herbal', 'fruit/flower'][(+e.target.value/10) -1]
								}
							})}
						>
							<MenuItem value={10}>Rabi</MenuItem>
							<MenuItem value={20}>Kharif</MenuItem>
							<MenuItem value={30}>Vegetable</MenuItem>
							<MenuItem value={40}>Herbal</MenuItem>
							<MenuItem value={50}>Fruits/Flowers</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						variant="outlined"
						required
						id="variety"
						name="variety"
						label="Variety"
						fullWidth
						onChange={(e) => handleFieldChange(e, "variety")}
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default DetailsForm;