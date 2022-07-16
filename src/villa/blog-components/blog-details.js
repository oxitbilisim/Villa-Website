import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments';
import Sidebar from './sidebar';
class BlogDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return (
		<div className="ltn__page-details-area ltn__blog-details-area mb-120">
			<div className="container">
			<div className="row">
				<div className="col-lg-8">
				<div className="ltn__blog-details-wrap">
					<div className="ltn__page-details-inner ltn__blog-details-inner">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-category">
							<Link to="/shop">Kalkan</Link>
						</li>
						</ul>
					</div>
					<h2 className="ltn__blog-title">Villa FLower Aras'ta neden kalmayalım ?
					</h2>
					<div className="ltn__blog-meta">
						<ul>

						<li className="ltn__blog-date">
							<i className="far fa-calendar-alt" />05.05.2022
						</li>

						</ul>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
					<img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="Image" />
					<h2>A cleansing hot shower or bath</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </p>
					<hr />
					<h2>Setting the mood with incense</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </p>
					<hr />
					<h2>Setting the mood with incense</h2>
					<div className="list-item-with-icon-2">
						<ul>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li>
						</ul>
					</div>


					</div>
					{/* blog-tags-social-media */}

					<hr />
					{/* related-post */}
					<div className="related-post-area mb-50">
					<h4 className="title-2">Önerilen Bloglar</h4>
					<div className="row">
						<div className="col-md-6">
						{/* Blog Item */}
						<div className="ltn__blog-item ltn__blog-item-6">
							<div className="ltn__blog-img">
							<Link to="/blog-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="Image" /></Link>
							</div>
							<div className="ltn__blog-brief">
							<div className="ltn__blog-meta">
								<ul>
								<li className="ltn__blog-date ltn__secondary-color">
									<i className="far fa-calendar-alt" />05.05.2022
								</li>
								</ul>
							</div>
							<h3 className="ltn__blog-title"><Link to="/blog-details">Villa FLower Aras'ta neden kalmayalım ?</Link></h3>
							<p>Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing.</p>
							</div>
						</div>
						</div>

						<div className="col-md-6">
						{/* Blog Item */}
						<div className="ltn__blog-item ltn__blog-item-6">
							<div className="ltn__blog-img">
							<Link to="/blog-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="Image" /></Link>
							</div>
							<div className="ltn__blog-brief">
							<div className="ltn__blog-meta">
								<ul>
								<li className="ltn__blog-date ltn__secondary-color">
									<i className="far fa-calendar-alt" />05.05.2022
								</li>
								</ul>
							</div>
							<h3 className="ltn__blog-title"><Link to="/blog-details">Villa FLower Aras'ta neden kalmayalım ?</Link></h3>
							<p>Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing.</p>
							</div>
						</div>
						</div>


					</div>
					</div>

				</div>
				</div>
				<Sidebar/>
			</div>
			</div>
		</div>
    )
  }
}

export default BlogDetails;
