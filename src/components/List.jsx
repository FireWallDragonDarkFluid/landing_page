import React from 'react'
import Badge from './Badge'
import Author from './Author'
import Topic from './Topic'
import img from '../asset/image.jpg'

const List = () => {
  return (
    <div className='list'>
        <div className='list__articles'>
        {Array.apply(null,Array(5)).map((_,i)=>(
            <div className="list__article" key={i}>
                <img className='list__article-img' src={img} alt="list-article" />
                <div className='list__content'>
                    <Badge />
                    <h3>The pros and cons of business agency</h3>
                    <p className='list__text'>Pleasure and so read the was hope entire first decided the so must have as on was want up of I will rival in came this touched got a physics to travelling so all especially refinement monstrous desk they was arrange the overall helplessly out of particularly ill are purer Person she control of to beginnings view looked eyes Than continues its and because</p>
                    <Author />
                </div>
            </div>   
        ))}
        </div>
        <div className='list__topics'>
            <Topic />
        </div>
    </div>
  )
}

export default List