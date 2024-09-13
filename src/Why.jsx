import React from 'react'
import w1 from './assets/images/w1.png'
import w2 from './assets/images/w2.png'
import w3 from './assets/images/w3.png'
import w4 from './assets/images/w4.png'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/bootstrap.css'
import { Link } from 'react-router-dom'

function Why() {
  return (
    <><section className="why_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Why Choose <span>Us</span>
          </h2>
        </div>
        <div className="why_container">
          <div className="box">
            <div className="img-box">
              <img src={w1} alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Expert Management
              </h5>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src={w2} alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Secure Investment
              </h5>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src={w3} alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Instant Trading
              </h5>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src={w4} alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Happy Customers
              </h5>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
              </p>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <Link to="">
            Read More
          </Link>
        </div>
      </div>
    </section></>
  )
}

export default Why