import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class BlogGrid extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
		<div className="ltn__blog-area ltn__blog-item-3-normal mb-100 go-top">
			<div className="container">
			<div className="row">

				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link to="/blog-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">

					<h3 className="ltn__blog-title"><Link to="/blog-details">Villa Flower Aras'ta neden kalmalıyım ?</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />05.05.2022</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link to="/blog-details">Daha Fazla</Link>
						</div>
					</div>
					</div>
				</div>
				</div>

				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link to="/blog-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">

					<h3 className="ltn__blog-title"><Link to="/blog-details">Villa Flower Aras'ta neden kalmalıyım ?</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />05.05.2022</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link to="/blog-details">Daha Fazla</Link>
						</div>
					</div>
					</div>
				</div>
				</div>


				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link to="/blog-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">

					<h3 className="ltn__blog-title"><Link to="/blog-details">Villa Flower Aras'ta neden kalmalıyım ?</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />05.05.2022</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link to="/blog-details">Daha Fazla</Link>
						</div>
					</div>
					</div>
				</div>
				</div>


				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link to="/blog-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">

					<h3 className="ltn__blog-title"><Link to="/blog-details">Villa Flower Aras'ta neden kalmalıyım ?</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />05.05.2022</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link to="/blog-details">Daha Fazla</Link>
						</div>
					</div>
					</div>
				</div>
				</div>

				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link to="/blog-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">

					<h3 className="ltn__blog-title"><Link to="/blog-details">Villa Flower Aras'ta neden kalmalıyım ?</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />05.05.2022</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link to="/blog-details">Daha Fazla</Link>
						</div>
					</div>
					</div>
				</div>
				</div>

				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link to="/blog-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">

					<h3 className="ltn__blog-title"><Link to="/blog-details">Villa Flower Aras'ta neden kalmalıyım ?</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />05.05.2022</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link to="/blog-details">Daha Fazla</Link>
						</div>
					</div>
					</div>
				</div>
				</div>

			</div>
			<div className="row">
				<div className="col-lg-12">
				<div className="ltn__pagination-area text-center">
					<div className="ltn__pagination">
					<ul>
						<li><Link to="#"><i className="fas fa-angle-double-left" /></Link></li>
						<li><Link to="#">1</Link></li>
						<li className="active"><Link to="#">2</Link></li>
						<li><Link to="#">3</Link></li>
						<li><Link to="#">...</Link></li>
						<li><Link to="#">10</Link></li>
						<li><Link to="#"><i className="fas fa-angle-double-right" /></Link></li>
					</ul>
					</div>
				</div>
				</div>
			</div>
			</div>
		</div>

    )
  }
}

export default BlogGrid;
