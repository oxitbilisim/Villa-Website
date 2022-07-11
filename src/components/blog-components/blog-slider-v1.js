import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

class BlogSlider extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = this.props.customClass ? this.props.customClass :''
    let sectionClass = this.props.sectionClass ? this.props.sectionClass :''
    return (
      <div className={ "ltn__blog-area pt-115--- pb-70 go-top "+ sectionClass}>
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-12">
		        <div className="section-title-area ltn__section-title-2--- text-center">
		          <h6 className={"section-subtitle ltn__secondary-color "+customClass}>Bloglar</h6>
		          <h1 className="section-title">Güncel Yazılar</h1>
		        </div>
		      </div>
		    </div>
		    <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">

		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/blog-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            <div className="ltn__blog-meta">
		              <ul>

		                <li className="ltn__blog-tags">
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Kalkan</Link>
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Antalya</Link>
		                </li>
		              </ul>
		            </div>
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

				   <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/blog-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            <div className="ltn__blog-meta">
		              <ul>

		                <li className="ltn__blog-tags">
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Kalkan</Link>
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Antalya</Link>
		                </li>
		              </ul>
		            </div>
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

				   <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/blog-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            <div className="ltn__blog-meta">
		              <ul>

		                <li className="ltn__blog-tags">
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Kalkan</Link>
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Antalya</Link>
		                </li>
		              </ul>
		            </div>
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

				   <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/blog-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            <div className="ltn__blog-meta">
		              <ul>

		                <li className="ltn__blog-tags">
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Kalkan</Link>
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Antalya</Link>
		                </li>
		              </ul>
		            </div>
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
		  </div>
		</div>
    )
  }
}

export default BlogSlider;
