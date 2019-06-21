import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Button,Modal,Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
//import PieChart from "react-svg-piechart"

const DashBoard = React.createClass({
	
	getInitialState: function(){
		return {
			index: 0,
			direction: null,
			popupShow:false,
			purchase:false,
			productUpdate:false,
			open :true,
			recentProductUpdate:false,
		}
	},
	
	handleSelect(selectedIndex, e) {
		this.setState({
			index: selectedIndex,
			direction: e.direction
		});
	},
	modalShow(){
		this.setState({
			popupShow:true,
		})
	},
	close(){
		this.setState({
			popupShow:false,productUpdate:false,
			recentProductUpdate:false,
		})
	},
	showPuches(){
		this.setState({
			purchase:!this.state.purchase,
		})
	},
	
	productModal(){
		
		this.setState({
			productUpdate:true,
		})
	},
	productModalShow(){
		this.setState({
			recentProductUpdate:true,
		})
	},

		
	render: function() {

	const tooltip = (
		<Tooltip id="tooltip" className="tool_tip">Download</Tooltip>
	);
	
	return (
		<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
		 <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad dash_backg"></div> 
			<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 fix_width no-pad">
				<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 dash_top_border">
					<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad main_content1">
						<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
							<h4 className="top_wish">Good afternoon, Pat</h4>
						</div>
						<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad features ul_mobile_view">
							
							<li className="col-md-4 col-sm-6 col-lg-4 com_pad_top mob_view">
							{/* <div className="com_back_li com_hover" onClick={this.productModalShow}> */}
								<div className="com_back_li com_hover" onClick={this.props.leftMenuClick.bind(this,'productUpdates')}> 
									<div className="com_icon updates"></div>
									<div className="com_width">
										<div className="text_right">5</div>
										<span className="below_content">Recent Updates</span>
										<span className="below_content spl_text">last 30 days</span>
									</div>
								</div>	
							</li>
							
							<li className="col-md-4 col-sm-6 col-lg-4 com_pad_top mob_view">
								<a href="http://172.99.67.90/url/#/" target="blank">
								<div className="com_back_li com_hover top_box_height">
									<div className="com_icon support_case"></div>
									<div className="text_right">4</div>
									<span className="below_content">Open Support Cases</span>
								</div>	
								</a>
							</li>
							
							
						</ul>
					</div>
				</div>
				
				
				<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
					<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad main_content1">
						<div className="col-xs-12 col-md-8 col-sm-12 col-lg-8 no-pad">
							<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top new_contents trcently_purchase">Recently purchased products</div>
							<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top new_contents">
								<div className="col-xs-12 no-pad boxShadow">
								<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li sub_li1 border_top_rad ext_padding">
								{/* <ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul ext_padding1">
										<li className="col-xs-2 col-sm-1 no-pad">
											<span className="autoCad"></span>
										</li>
										<li className="col-xs-9 col-sm-10 no-pad">
											<span className="autoCad_txt_media new_autoCad_txt">AutoCAD</span>
											<span className="newPurchaseDate">Dec 17, 2017</span>
										</li>
										<li className="col-xs-1 no-pad">
											<OverlayTrigger placement="top" overlay={tooltip}>
												<span className="download_purchase"></span>
											</OverlayTrigger>
										</li>
								</ul> */}
								
									<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul ext_padding1">
										
										
										
										<li className="col-xs-11 col-sm-11 no-pad">
											<span className="mayaLt"></span>
											<div className="com_txt_right">
												<span className="autoCad_txt_media new_autoCad_txt">3ds Max</span>
												<span className="newPurchaseDate">Dec 17, 2017</span>
											</div>
										</li>
										{/* <li className="col-xs-1 no-pad">
											<OverlayTrigger placement="top" overlay={tooltip}>
												<span className="download_purchase"></span>
											</OverlayTrigger>
										</li> */}
									</ul>
								
								</li>
								
								<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li ext_padding">
									<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul ext_padding1">
									{/* <li className="col-xs-2 col-sm-1 no-pad">
											<span className="aecc"></span>
									</li> */}
										<li className="col-xs-11 col-sm-11 no-pad">
											<span className="autoCad"></span>
											<div className="com_txt_right">
												<span className="autoCad_txt_media new_autoCad_txt">AutoCAD</span>
												<span className="newPurchaseDate">Dec 17, 2017</span>
											</div>
										</li>
										
										
										{/* <li className="col-xs-1 no-pad">
											<OverlayTrigger placement="top" overlay={tooltip}>
												<span className="download_purchase"></span>
											</OverlayTrigger>
										</li> */}
									</ul>
								</li>
	
								<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li border_bottom_rad ext_padding">
									<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul ext_padding1">
									
										{/* <li className="col-xs-2 col-sm-1 no-pad">
												<span className="mayaLt"></span>
										</li> */}
										
										
										<li className="col-xs-11 col-sm-11 no-pad">
											<span className="aecc"></span>
											<div className="com_txt_right">
												<span className="autoCad_txt_media new_autoCad_txt">Architecture Engineering & Construction Collection</span>
												<span className="newPurchaseDate">Dec 17, 2017</span>
											</div>
										</li>
										{/* <li className="col-xs-1 no-pad">
											<OverlayTrigger placement="top" overlay={tooltip}>
												<span className="download_purchase"></span>
											</OverlayTrigger>
										</li> */}
									</ul>
								</li>
								
								<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li border_bottom_rad ext_padding3 view_down1">
									<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul ext_padding2">
										<li className="col-xs-12 col-sm-12 no-pad">
											<div className="view_down_div">
											<button type="button" className="view_down" onClick={this.props.leftMenuClick.bind(this,'allProducts')}>View and download</button>	
											</div>
										</li>
									</ul>
								</li>
								
								
								
								
								
								</div>
								
								{/* <div className="view_purchase">
									<span className="media_marg_bot" onClick={this.props.leftMenuClick.bind(this,'allProducts')}>See all purchased products</span>
								</div> */}
								
							</ul>
							
							
							
							<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top new_contents trcently_purchase">What's new in Autodesk Account</div>
							
							<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12  no-pad  btn_grp desktop_view">
								<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad div_hov">
									
									<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top li_bg par_hov ">
										<div className="col-xs-12 no-pad boxShadow bottom_back">
										
										<div className="com_back_li1 com_back_li1_left">
											<div className="com_back_li11">
												<div className="know_auto">Get to know your Autodesk Account</div>
												{/* <div className="normal_txt">Take a video tour</div> */}
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad btn_grp administrator_png">
												<img src="images/video.png" className="video_png" onClick={this.modalShow}/>
												{/* <div className="administrator" onClick={this.modalShow}></div>  */}
												</div>
											</div>
										</div>
										
										<div className="com_back_li1 com_back_li1_right">
											<div className="com_back_li11 no_border11 com_back_li11_border">
												<div className="know_auto">Take a quick look at the new features</div>
												{/*<div className="normal_txt">Nov 2017</div>*/}
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad new_contents new_contents1">
													<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li sub_li1">
													<a href="http://172.99.67.90/url/#/" target="blank">Sort users by role or status</a></li>
													<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li">
													<a href="http://172.99.67.90/url/#/" target="blank">Set down preference</a></li>
													<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li">
													<a href="http://172.99.67.90/url/#/" target="blank">Product view for user management</a></li>
													{/* <div className="normal_txt">Oct 2017</div> */}
													<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li">
													<a href="http://172.99.67.90/url/#/" target="blank">Product view for user management</a></li>
												</ul>
											</div>
										</div>
										</div>
										<div className="view_purchase">
											<span className="marg_bot"><a href="http://172.99.67.90/url/#/" target="blank" className="view_text">See all new features</a></span>
										</div>
										
										
									</li>

									<li className="col-xs-12 col-md-6 col-sm-12 col-lg-6 com_pad_top li_bg par_hov">
									{/* <div className="com_back_li1">
											<div className="know_auto">Take a quick look at the new features</div>
											<div className="normal_txt">Nov 2017</div>
											<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad new_contents new_contents1">
												<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li sub_li1">
												<a href="aaa" target="blank">Sort users by role or status</a></li>
												<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li">
												<a href="aaa" target="blank">Set download preference</a></li>
												<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li">
												<a href="aaa" target="blank">Product view for user management</a></li>
												<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li">
												<a href="aaa" target="blank">Product view for user management</a></li>
												<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li sub_li1 sub_li2">
												<a href="aaa" target="blank" className="view_text">View all new features</a></li>
											</ul>
									</div> */}
									</li>
									
								</div>
							</ul>
							
						</div>
						
						<Modal className="admin_modal" show={this.state.popupShow} onHide={this.close} bsSize="large" aria-labelledby="contained-modal-title-lg">
						<div className="close_modal" onClick={this.close}></div>
						<Modal.Body className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no_pad administrator_pop_png">
						 <div className="administrator_tour"></div> 
						</Modal.Body>
						</Modal>
						
						{/*==========Recent product update Modal Popup start here=========*/}
						
						<Modal className="admin_modal" show={this.state.recentProductUpdate} onHide={this.close} bsSize="large" aria-labelledby="contained-modal-title-lg">
							{/* <div className="close_modal" onClick={this.close}></div> */}
							
							<Modal.Header closeButton className="col-xs-12 col-md-12 col-sm-12 col-lg-12 modal_header">
								<Modal.Title>Product Updates</Modal.Title>
							</Modal.Header>
							
							<Modal.Body className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no_pad modal_body">
								
								<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top new_contents new_pop_contents">
								<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li sub_li1">
								<Accordion  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_update">
									
									<Panel eventKey="1" className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading"  
									header={
										<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
											<li className="col-xs-7 no-pad purchaseDate3">
												<span className="left_arrow"></span>
												<span className="autoCad marg_left"></span>
												<span className="autoCad_txt">AutoCAD</span>
												<span className="purchaseDate purchaseDate1">Dec 17, 2017</span>
											</li>
											
											<li className="col-xs-4 no-pad purchaseDate2">
												<span className="purchaseDate">Dec 17, 2017</span>
											</li>
											
											<li className="col-xs-1 no-pad">
												 <OverlayTrigger placement="top" overlay={tooltip}>
													<span className="download_purchase"></span>
												</OverlayTrigger>	
												
											</li>
										</ul>
										}>
										
										<div className="panel_body_updates col-xs-12 col-md-12 col-sm-12 col-lg-12">
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
												<span className="left_label">Version :</span>
												<span>2018</span>
											</div>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
												<span className="left_label">Size :</span>
												<span>400mb</span>
											</div>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
												<span className="left_label">Type :</span>
												<span>Hotfix</span>
											</div>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad marg_top">
												This component enables you to use sync functionality from your local computer, and includes a desktop folder location. Autodesk 360 desktop enables you to connect your Autodesk product with Autodesk 360 cloud services, and optionally allows you to synchronize your Autodesk 360 documents with your local computer. By using Autodesk 360 desktop, you provide Autodesk with information about the documents and folders you submit to Autodesk 360. 
												View release notes 
												MAX 
												3ds Max 2018.3 Update Dec 15, 2017 
												Fusion 2018.9.1 Hotfix 
												Nov 31, 2017 
												View older updates 
											</div>

										</div>
									</Panel>
									
									<Panel eventKey="2" className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading"  
									header={
										<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
											
											<li className="col-xs-7 no-pad purchaseDate3">
												<span className="left_arrow"></span>
												<span className="autoCad marg_left"></span>
												<span className="autoCad_txt">AutoCAD</span>
												<span className="purchaseDate purchaseDate1">Dec 17, 2017</span>
											</li>
											
											<li className="col-xs-4 no-pad purchaseDate2">
												<span className="purchaseDate">Dec 17, 2017</span>
											</li>
											
											<li className="col-xs-1 no-pad">
												 <OverlayTrigger placement="top" overlay={tooltip}>
													<span className="download_purchase"></span>
												</OverlayTrigger>	
											</li>
										</ul>
										}>
										
										<div className="panel_body_updates col-xs-12 col-md-12 col-sm-12 col-lg-12">
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
												<span className="left_label">Version :</span>
												<span>2018</span>
											</div>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
												<span className="left_label">Size :</span>
												<span>400mb</span>
											</div>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
												<span className="left_label">Type :</span>
												<span>Hotfix</span>
											</div>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad marg_top">
												This component enables you to use sync functionality from your local computer, and includes a desktop folder location. Autodesk 360 desktop enables you to connect your Autodesk product with Autodesk 360 cloud services, and optionally allows you to synchronize your Autodesk 360 documents with your local computer. By using Autodesk 360 desktop, you provide Autodesk with information about the documents and folders you submit to Autodesk 360. 
												View release notes 
												MAX 
												3ds Max 2018.3 Update Dec 15, 2017 
												Fusion 2018.9.1 Hotfix 
												Nov 31, 2017 
												View older updates 
											</div>

										</div>
									</Panel>
									
									<Panel eventKey="3" className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading"  
									header={
										<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
											<li className="col-xs-7 no-pad purchaseDate3">
												<span className="left_arrow"></span>
												<span className="aecc marg_left"></span>
												<span className="autoCad_txt autoCad_txt_media autoCad_txt1">Architecture Engineering & Construction Collection</span>
												<span className="purchaseDate purchaseDate1 purchaseDate2">Dec 17, 2017</span>
											</li>
											
											<li className="col-xs-4 no-pad purchaseDate2">
												<span className="purchaseDate">Dec 17, 2017</span>
											</li>
											
											<li className="col-xs-1 no-pad">
												<OverlayTrigger placement="top" overlay={tooltip}>
													<span className="download_purchase"></span>
												</OverlayTrigger>
											</li>
										</ul>
									}>
										
										<div className="panel_body_updates col-xs-12 col-md-12 col-sm-12 col-lg-12">
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
												<span className="left_label">Version :</span>
												<span>2018</span>
											</div>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
												<span className="left_label">Size :</span>
												<span>400mb</span>
											</div>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
												<span className="left_label">Type :</span>
												<span>Hotfix</span>
											</div>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad marg_top">
												This component enables you to use sync functionality from your local computer, and includes a desktop folder location. Autodesk 360 desktop enables you to connect your Autodesk product with Autodesk 360 cloud services, and optionally allows you to synchronize your Autodesk 360 documents with your local computer. By using Autodesk 360 desktop, you provide Autodesk with information about the documents and folders you submit to Autodesk 360. 
												View release notes 
												MAX 
												3ds Max 2018.3 Update Dec 15, 2017 
												Fusion 2018.9.1 Hotfix 
												Nov 31, 2017 
												View older updates 
											</div>

										</div>
									</Panel>
									
									
									{/* <Panel eventKey="4" className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading"  
									header={
										<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
											<li className="col-xs-7 no-pad purchaseDate3">
												<span className="left_arrow"></span>
												<span className="autoCad marg_left"></span>
												<span className="autoCad_txt">AutoCAD</span>
												<span className="purchaseDate purchaseDate1">Dec 17, 2017</span>
											</li>
											
											<li className="col-xs-4 no-pad purchaseDate2">
												<span className="purchaseDate">Dec 17, 2017</span>
											</li>
											
											<li className="col-xs-1 no-pad">
												 <OverlayTrigger placement="top" overlay={tooltip}>
													<span className="download_purchase"></span>
												</OverlayTrigger>	
											</li>
										</ul>
										}>
										
										<div className="panel_body_updates col-xs-12 col-md-12 col-sm-12 col-lg-12">
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
												<span className="left_label">Version :</span>
												<span>2018</span>
											</div>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
												<span className="left_label">Size :</span>
												<span>400mb</span>
											</div>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
												<span className="left_label">Type :</span>
												<span>Hotfix</span>
											</div>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad marg_top">
												This component enables you to use sync functionality from your local computer, and includes a desktop folder location. Autodesk 360 desktop enables you to connect your Autodesk product with Autodesk 360 cloud services, and optionally allows you to synchronize your Autodesk 360 documents with your local computer. By using Autodesk 360 desktop, you provide Autodesk with information about the documents and folders you submit to Autodesk 360. 
												View release notes 
												MAX 
												3ds Max 2018.3 Update Dec 15, 2017 
												Fusion 2018.9.1 Hotfix 
												Nov 31, 2017 
												View older updates 
											</div>

										</div>
									</Panel> */}
									
									
									<Panel eventKey="5" className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading"  
										header={
											<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
												<li className="col-xs-7 no-pad purchaseDate3">
													<span className="left_arrow"></span>
													<span className="aecc marg_left"></span>
													<span className="autoCad_txt autoCad_txt_media autoCad_txt1">Architecture Engineering & Construction Collection</span>
													<span className="purchaseDate purchaseDate1 purchaseDate2">Dec 17, 2017</span>
												</li>
												
												<li className="col-xs-4 no-pad purchaseDate2">
													<span className="purchaseDate">Dec 17, 2017</span>
												</li>
												
												<li className="col-xs-1 no-pad">
													<OverlayTrigger placement="top" overlay={tooltip}>
														<span className="download_purchase"></span>
													</OverlayTrigger>
												</li>
											</ul>
										}>
										
										<div className="panel_body_updates col-xs-12 col-md-12 col-sm-12 col-lg-12">
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
												<span className="left_label">Version :</span>
												<span>2018</span>
											</div>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
												<span className="left_label">Size :</span>
												<span>400mb</span>
											</div>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
												<span className="left_label">Type :</span>
												<span>Hotfix</span>
											</div>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad marg_top">
												This component enables you to use sync functionality from your local computer, and includes a desktop folder location. Autodesk 360 desktop enables you to connect your Autodesk product with Autodesk 360 cloud services, and optionally allows you to synchronize your Autodesk 360 documents with your local computer. By using Autodesk 360 desktop, you provide Autodesk with information about the documents and folders you submit to Autodesk 360. 
												View release notes 
												MAX 
												3ds Max 2018.3 Update Dec 15, 2017 
												Fusion 2018.9.1 Hotfix 
												Nov 31, 2017 
												View older updates 
											</div>

										</div>
									</Panel>
									
								</Accordion>
								</li>
							</ul>	
							</Modal.Body>
							
							<Modal.Footer className="col-xs-12 col-md-12 col-sm-12 col-lg-12 modal_footer">
								<Modal.Title onClick={this.props.leftMenuClick.bind(this,'productUpdates')}>View older updates</Modal.Title>
							</Modal.Footer>
							
						</Modal> 
						{/*==========Recent product update Modal Popup end here==========*/}
						
						<div className="col-xs-12 col-md-4 col-sm-12 col-lg-4 no-pad top_images1">
							<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 support_box com_box">
								<li className="new_header sub_li3"><h2>Help & Support</h2></li>
								
								<PanelGroup className="help_support">
									
									<Panel expanded={this.state.open} className="help_support_heading" collapsible header="">
										<div className="panel_body_contents col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
										<div className="col-xs-12 no-pad">
										Let us help you select a topic and find the right support agent</div>
											<a href="https://knowledge.autodesk.com/contact-support" target="blank">
												<div className="col-xs-12 no-pad ask_ava">
													<span className="ask_text">Contact support</span>
													{/* <span className="ask_ava_img"></span> */}
												</div>
											</a>
										</div>
										
									</Panel>
									
									<Panel  expanded={this.state.open} className="help_support_heading" collapsible header="">
										<div className="panel_body_contents col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
											<div className="col-xs-12 no-pad">Ask AVA a question, & they'll provide a solution or point to helpful content.</div>
											<a href="https://ava.autodesk.com/" target="blank">
												<div className="col-xs-12 no-pad ask_ava">
													<span className="ask_text">Ask AVA(Autodesk Virtual Agent)</span>
													{/*<span className="ask_ava_img"></span>*/}
												</div>
											</a>
										</div>
									</Panel>
									
									<Panel expanded={this.state.open} className="help_support_heading" collapsible header="">
										<div className="panel_body_contents col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
										<div className="col-xs-12 no-pad">Find tutorials, documentation, troubleshooting articles and more.</div>
											<a href="https://knowledge.autodesk.com/support" target="blank">
												<div className="col-xs-12 no-pad ask_ava">
													<span className="ask_text">Support & Learning</span>
													{/*<span className="ask_ava_img"></span>*/}
												</div>
											</a>
										</div>
									</Panel>
								</PanelGroup>
							</ul>
							
							
						</div>
					</div>
				</div>
				
			</div>	
		</div>
		
		)
	}
});

module.exports = DashBoard;