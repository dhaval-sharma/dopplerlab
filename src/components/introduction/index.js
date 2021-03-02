import React from 'react'
import bookImage from '../../assets/images/book.png'

const Introduction = () => {
    return (
        <div id="introduction" className="tabcontent">
            <div className="row fill-height">
                <div className="col-md-6 fill-height book_area">
                    <img src={bookImage} alt={'Loading Book'} />
                </div>
                <div className="col-md-6 right-block">
                    <h1>WHAT IS DOPPLER EFFECT?</h1>
                    <p>
                        Doppler Effect refers to the change in wave frequency during the
                        relative motion between a wave source and its observer.
                        It was discovered by Christian Johann Doppler who described it as the
                        process of increase or decrease of starlight that depends on the
                        relative movement of the star.
                    </p>
                    <p>
                        The Doppler Effect in Astronomy
                        <br />
                        <br />
                        The Doppler effect is of intense interest to astronomers who use the
                        information about the shift in frequency of electromagnetic waves produced by
                        moving stars in our galaxy and beyond in order to derive information about those stars and
                        galaxies. The belief that the universe is expanding is based in part upon observations of
                        electromagnetic waves emitted by stars in distant galaxies. Furthermore, specific
                        information about stars within galaxies can be determined by application of the Doppler
                        effect.
                        <br />
                        <br />
                        Galaxies are clusters of stars that typically rotate about some center of mass point.
                        Electromagnetic radiation emitted by such stars in a distant galaxy would appear to be
                        shifted downward in frequency (a red shift) if the star is rotating in its cluster in a
                        direction that is away from the Earth. On the other hand, there is an upward shift in
                        frequency (a blue shift) of such observed radiation if the star is rotating in a direction
                        that is towards the Earth.
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Introduction;