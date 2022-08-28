import React from 'react'
import './doglist.css'
import Dog from '../dog/dog'

function Doglist({ dogs, searchstring }) {


    return (
        <div className='doglist'>

            {searchstring ?

                Object.keys(dogs).map(function (breed) {

                    for (var a in searchstring.split(",")) {
                        console.log("Can I see this in loop", a)
                        if (breed == searchstring.split(",")[a]) {
                            return <Dog key={breed} breed={breed} />
                        }
                    }
                }) :

                Object.keys(dogs).map((breed) => {
                    return <Dog key={breed} breed={breed} />
                })



            }


        </div>
    )
}

export default Doglist