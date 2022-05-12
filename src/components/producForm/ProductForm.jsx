import React from 'react'
import './productForm.css'

const ProductForm = () => {
  return (
    <div className="main">
      <div className="rightForm">
          <div className="DateAdnTime">
            <label htmlFor="DateTime" className='DateTimeLabel'>تاریخ و ساعت:</label>
            <input type="datetime-local" name="" id="DateTime"  />
          </div>
          <div className="ReceiptNumber">
            <input type="number" id='recievtionID' placeholder='شماره قبض پذیرش'/>
          </div>
          <div className="personInformation">
            <input type="text" id='nameLastNameINFO' placeholder='نام و نام خانوادگی'/>
            <input type="text" id='phoneNumber' placeholder='شماره تماس'/>
            <input type="text" id='state' placeholder='استان'/>
            <input type="text" id='city' placeholder='شهرستان'/>
            <textarea type="text" id='address' placeholder='آدرس'/>
          </div>
          <div className="deviceFaildAndPicture">
            <textarea type="text"  id='deviceFailedDescription' placeholder='عیب به اظهار مشتری:'/>
            <div className='failedBTNParent'>
              <button className="failedBTN"><i className="fa fa-camera" aria-hidden="true"></i></button>
              <span>اضافه کردن عکس در صورت لزوم</span>
            </div>
          </div>
          <div className="passwordAndEmail"></div>
          <div className="recieveType"></div>

      </div>
      <div className="middleForm">
        وسط
      </div>
      <div className="leftForm">
        چپ
      </div>
    </div>
  )
}

export default ProductForm