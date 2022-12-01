import React from 'react'
import './styles.scss'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


import blogImage1 from './images/blog1.jpg'
import blogImage2 from './images/blog2.jpg'
import blogImage3 from './images/blog3.jpg'
import blogImage4 from './images/blog4.jpg'

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <p className='blog-introduction'>Lorem ipsum dolor sit amet. Eum ratione soluta non reprehenderit consequatur vel veniam quia non obcaecati vitae qui labore aspernatur. Nam totam cupiditate et voluptates temporibus sit mollitia alias non optio soluta eos eligendi autem.</p>
      <div className='blog'>

        <a href='/actualites/article' className="blog-card" target='_blank' >
          <div className="blog-card--image">
            <img src={blogImage1} alt="Tattoo" />
          </div>
          <h1 className="blog-card--title">Be yourself</h1>
          <p>Lorem ipsum dolor sit amet. Eum ratione soluta non reprehenderit consequatur vel veniam quia non obcaecati vitae qui labore aspernatur. Nam totam cupiditate et voluptates temporibus sit mollitia alias non optio soluta eos eligendi autem. Non voluptatem quia est cumque amet et exercitationem quia ut excepturi exercitationem et deleniti fugit. A animi nulla non ipsa porro et culpa consectetur</p>
        </a>

        <a href='blank' className="blog-card" target='_blank' >
          <div className="blog-card--image">
            <img src={blogImage2} alt="Tattoo" />
          </div>
          <h1 className="blog-card--title">Dites le avec sagesse</h1>
          <p>Lorem ipsum dolor sit amet. Eum ratione soluta non reprehenderit consequatur vel veniam quia non obcaecati vitae qui labore aspernatur. Nam totam cupiditate et voluptates temporibus sit mollitia alias non optio soluta eos eligendi autem. Non voluptatem quia est cumque amet et exercitationem quia ut excepturi exercitationem et deleniti fugit. A animi nulla non ipsa porro et culpa consectetur</p>
        </a>


        <a href='blank' className="blog-card" target='_blank' >
          <div className="blog-card--image">
            <img src={blogImage3} alt="Tattoo" />
          </div>
          <h1 className="blog-card--title">Dépassez-vous !</h1>
          <p>Lorem ipsum dolor sit amet. Eum ratione soluta non reprehenderit consequatur vel veniam quia non obcaecati vitae qui labore aspernatur. Nam totam cupiditate et voluptates temporibus sit mollitia alias non optio soluta eos eligendi autem. Non voluptatem quia est cumque amet et exercitationem quia ut excepturi exercitationem et deleniti fugit. A animi nulla non ipsa porro et culpa consectetur</p>
        </a>

        <a href='blank' className="blog-card" target='_blank' >
          <div className="blog-card--image">
            <img src={blogImage4} alt="Tattoo" />
          </div>
          <h1 className="blog-card--title">L'art du tatouage</h1>
          <p>Lorem ipsum dolor sit amet. Eum ratione soluta non reprehenderit consequatur vel veniam quia non obcaecati vitae qui labore aspernatur. Nam totam cupiditate et voluptates temporibus sit mollitia alias non optio soluta eos eligendi autem. Non voluptatem quia est cumque amet et exercitationem quia ut excepturi exercitationem et deleniti fugit. A animi nulla non ipsa porro et culpa consectetur</p>
        </a>
      </div>

      <div className="blog-pagination">
        <button className="blog-pagination-button-left"><FaArrowAltCircleLeft /></button>
        <div className="blog-pagination-button-number">
          <button className="blog-pagination-button-number-1">1</button>
          <button className="blog-pagination-button-number-2">2</button>
          <button className="blog-pagination-button-number-3">3</button>
        </div>
        <button className="blog-pagination-button-right"><FaArrowAltCircleRight /></button>
      </div>
    </div>
  )
}

export default Blog