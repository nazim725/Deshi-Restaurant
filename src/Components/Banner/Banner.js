import React from 'react';
import './Banner.css'
import banner from '../../Image/bannerbackground.png'
import { FormControl, InputGroup,Button} from 'react-bootstrap';


const Banner = () => {
    return (
        <div className="banner">

            <img src={banner} alt=""  height="300" width="100%"/>

            <div className="search-field">
                <h2 className="text-center ms-5">Best Food Waiting for Your</h2>
               {/* <div  className="mx-auto w-50">
               <InputGroup className="mb-3 input ">
                <FormControl
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                Search
                </Button>
            </InputGroup>
               </div> */}
            </div>

        
            
        </div>
    );
};

export default Banner;