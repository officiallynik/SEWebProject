import { Button, Grid } from '@material-ui/core';
import { Facebook, GitHub, LinkedIn } from '@material-ui/icons';
import React from 'react';

import styles from '../../styles/Footer.module.css';
import { container } from '../dashboard/styles/globalstyles';

export default function Footer(props) {
	return (
		<footer className={styles.sitefooter}>
			<div style={container}>
				<Grid container spacing={2}>
					<Grid item sm={12} md={4} style={{display: "flex", justifyContent: "center", width: "100%"}}>
						<h6>Kisan Seva</h6>
					</Grid>

					<Grid sm={12} md={4} style={{display: "flex", width: "100%", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
						<h6>Team</h6>
						<ul style={{listStyle: "none"}}>
							<li>
								<a href="https://github.com/officiallynik">
									<div style={{display: "flex", paddingBottom: "10px"}}>
										<GitHub />
										<div style={{paddingLeft: "5px"}}>
											Nikhil M (CS18B041)
										</div>
									</div>
								</a>
							</li>
							<li>
								<a href="https://github.com/sherlock2505">
									<div style={{display: "flex", paddingBottom: "10px"}}>
										<GitHub />
										<div style={{paddingLeft: "5px"}}>
											Deep Maheshwari (CS18B008)
										</div>
									</div>
								</a>
							</li> 
							<li>
								<a href="https://github.com/kirtikjangale">
									<div style={{display: "flex", paddingBottom: "10px"}}>
										<GitHub />
										<div style={{paddingLeft: "5px"}}>
											Kirtik Jangale (CS18B017)
										</div>
									</div>
								</a>
							</li> 
							<li>
								<a href="https://github.com/StrAnGe-7805">
									<div style={{display: "flex", paddingBottom: "10px"}}>
										<GitHub />
										<div style={{paddingLeft: "5px"}}>
											Jawahar Sai Nathani (CS18B023)
										</div>
									</div>
								</a>
							</li> 
							<li>
								<a href="https://github.com/hemant394">
									<div style={{display: "flex", paddingBottom: "10px"}}>
										<GitHub />
										<div style={{paddingLeft: "5px"}}>
											Hemant (CS18B014)
										</div>
									</div>
								</a>
							</li>  
						</ul>
					</Grid>

					<Grid sm={12} md={4} style={{display: "flex", width: "100%", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
						<h6>Social</h6>
						<ul style={{listStyle: "none"}}>
							<li>
								<a href="https://github.com/officiallynik/SEWebProject">
									<div style={{display: "flex", paddingBottom: "10px"}}>
										<GitHub />
										<div style={{paddingLeft: "5px"}}>
											Frontend
										</div>
									</div>
								</a>
							</li> 
							<li>
								<a href="https://github.com/Sherlock2505/SE_WebApp_Backend">
									<div style={{display: "flex", paddingBottom: "10px"}}>
										<GitHub />
										<div style={{paddingLeft: "5px"}}>
											Backend
										</div>
									</div>
								</a>
							</li> 
							<li>
								<a href="#">
									<div style={{display: "flex", paddingBottom: "10px"}}>
										<Facebook />
										<div style={{paddingLeft: "5px"}}>
											Facebook
										</div>
									</div>
								</a>
							</li>
							<li>
								<a href="#">
									<div style={{display: "flex", paddingBottom: "10px"}}>
										<LinkedIn />
										<div style={{paddingLeft: "5px"}}>
											LinkedIn
										</div>
									</div>
								</a>
							</li>  
						</ul>
					</Grid>
				</Grid>
				<hr />
			</div>
			<div style={container}>
				<div className="row">
					<div className="col-md-8 col-sm-6 col-xs-12">
						<p className={styles.copyrighttext}>Copyright &copy; 2020 All Rights Reserved by
         					<a href="#"> Kisan Seva</a>.
            			</p>
					</div>
				</div>
			</div>
		</footer>
	);
}