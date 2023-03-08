import React, {useRef} from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';

const Searchbar = () => {
  const locationRef = useRef("")
  const distanceRef = useRef(0)
  const maxGroupSizeRef = useRef(0)


  const searchhandler = () => {
    const location = locationRef.current.value
    const distance = distanceRef.current.value
    const maxGroupSize = maxGroupSizeRef.current
  }




  return <Col lg="12">
    <div className="search__bar">
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span>
                  <i class="ri-map-pin-line"></i>
                </span>
                <div>
                  <h6>Location</h6>
                  <input type="text" placeholder='Where are you going ?' />
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span>
                <i class="ri-map-pin-time-line"></i>
                </span>
                <div>
                  <h6>Distance</h6>
                  <input type="number" placeholder='Distance k/m' />
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-last'>
                <span>
                <i class="ri-group-line"></i>
                </span>
                <div>
                  <h6>Number of peaple</h6>
                  <input type="number" placeholder='0' />
                </div>
            </FormGroup>
            <span className="search__icon" type="submit">
            <i class="ri-search-line"></i>
            </span>
        </Form>
    </div>
  </Col>
}

export default Searchbar;