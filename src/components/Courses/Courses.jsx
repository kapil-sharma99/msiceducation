import React from 'react'
import Card from '../../Common/Card';
import CBSE from '../../assets/images/CBSE.jpeg'
import BBA from '../../assets/images/BBA.jpeg'
import BCOM from '../../assets/images/BCOM.jpeg'
import MCOM from '../../assets/images/MCOM.jpeg'
import CHSE from '../../assets/images/CHSE2.png'
import CACS from '../../assets/images/CACS.jpeg'
import IMB from '../../assets/images/IMB.jpeg'
import GST from '../../assets/images/GST.jpeg'
import TALLY from '../../assets/images/tally.png'

const Courses = () => {
  return (
    <>
    <div className="my-5">
      <h1 className="text-center course"><strong className="highlighted">Courses we offer</strong></h1>
    </div>
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-sm-12 col-lg-10 mx-auto">
          <div className="row gy-4">
              <Card title="CBSE 11-12" img={CBSE} content="Economics and Accounts"/>
              <Card title="CHSE" img={CHSE} content="Odisha State board +2 1st and 2nd year"/>
              <Card title="BBA" img={BBA} content="Bachelor of Business Administration"/>
              <Card title="B.COM" img={BCOM} content="Bachelor of Commerce"/>
              <Card title="M.COM" img={MCOM} content="Master of Commerce"/>
              <Card title="CA, CS, ICWAI" img={CACS} content="CA Foundation, CS Foundation, CMA foundation"/>
              <Card title="IMBA" img={IMB} content="International Master's Degree in Buisness Administration"/>
              <Card title="GST" img={GST} content="Goods and Services Tax training"/>
              <Card title="Tally ERP 9.0" img={TALLY} content="Tally Enterprises Resources Planning"/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Courses;
