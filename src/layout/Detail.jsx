import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Topic from '../components/Topic'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase'
import Lightbox from '../components/Lightbox'
import img from '../asset/image.jpg'

const Detail = () => {
    const [open, setOpen] = useState(false)

    const onClickHandler = () => {
        setOpen(true)
    }

    return (
        <>
            {open && <Lightbox setOpen={setOpen} />}
            <div className='container'>
                <Navbar />
            </div>
            <Showcase />
            <div className="container">
                <h1>Fifteen Restaurant & Bar</h1>
                <p>53 Broadway, Brooklyn, NY 1129</p>
                <div className='detail__grid'>
                    <div className='detail__content'>
                        <div className="detail__description">
                            <h3>Description</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis unde aut culpa quibusdam perspiciatis porro expedita nisi ipsam dolor, aspernatur vel fuga magnam alias cum est minima quasi totam repudiandae commodi facere iure itaque ducimus ut. Animi quaerat corporis ab aut cumque velit ipsam sequi. Quibusdam similique suscipit soluta aperiam!</p>
                        </div>
                        <div className="detail__feature">
                            <h3>Feature</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis unde aut culpa quibusdam perspiciatis porro expedita nisi ipsam dolor, aspernatur vel fuga magnam alias cum est minima quasi totam repudiandae commodi facere iure itaque ducimus ut. Animi quaerat corporis ab aut cumque velit ipsam sequi. Quibusdam similique suscipit soluta aperiam!</p>
                        </div>
                        <div className="detail__gallery">
                            <h3>Gallery</h3>
                            <div className="detail__gallery__grid">
                                {Array.apply(null,Array(6)).map((_,i)=>(
                                    <img src={img} alt="gallery" key={i} onClick={onClickHandler} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Topic />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Detail