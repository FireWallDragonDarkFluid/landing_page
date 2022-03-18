import React from 'react'
import Topic from './Topic';
import {BsGithub} from 'react-icons/bs';
import img from '../asset/image.jpg'

const Front = () => {
  return (
    <section className='front'>
        <div className="front__grid">
            <div className='front__articles'>
                <h1>Recent Work</h1>
                <div className='front__article'>
                    <div className='img__container'>
                        <img src={img} alt="front-article" />
                        <div className='badge'>
                            <div></div> <p>Lifestyle</p>
                        </div>
                    </div>
                    <h4>12 worst types of business accounts you follow on Twitter</h4>
                    <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to</p>
                    <div className="author">
                        <img src={img} alt="author" /> 
                        <p>by Samuel</p>
                        <p>Jan 22, 2022</p>
                    </div>
                </div>
                <div className='front__article'>
                    <div className='img__container'>
                        <img src={img} alt="front-article" />
                        <div className='badge'>
                            <div></div> <p>Lifestyle</p>
                        </div>
                    </div>
                    <h4>12 worst types of business accounts you follow on Twitter</h4>
                    <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to</p>
                    <div className="author">
                        <img src={img} alt="author" /> 
                        <p>by Samuel</p>
                        <p>Jan 22, 2022</p>
                    </div>
                </div>
                <div className='front__article'>
                    <div className='img__container'>
                        <img src={img} alt="front-article" />
                        <div className='badge'>
                            <div></div> <p>Lifestyle</p>
                        </div>
                    </div>
                    <h4>12 worst types of business accounts you follow on Twitter</h4>
                    <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to</p>
                    <div className="author">
                        <img src={img} alt="author" /> 
                        <p>by Samuel</p>
                        <p>Jan 22, 2022</p>
                    </div>
                </div>
                <div className='front__article'>
                    <div className='img__container'>
                        <img src={img} alt="front-article" />
                        <div className='badge'>
                            <div></div> <p>Lifestyle</p>
                        </div>
                    </div>
                    <h4>12 worst types of business accounts you follow on Twitter</h4>
                    <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to</p>
                    <div className="author">
                        <img src={img} alt="author" /> 
                        <p>by Samuel</p>
                        <p>Jan 22, 2022</p>
                    </div>
                </div>

            </div>
            <div className='front__classified'>
                <div className='classified__icon'>
                    <BsGithub />
                    <p>My Github</p>
                </div>
                <Topic />
            </div>
        </div>
    </section>
  )
}

export default Front