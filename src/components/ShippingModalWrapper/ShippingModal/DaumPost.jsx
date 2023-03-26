import REACT, { useState } from 'react';
import DaumPostCode from 'react-daum-postcode';
import { shippingState } from '../../../@store/cartListState';
import { useRecoilState } from 'recoil';

const DaumPost = ({ setIsShowShipping }) => {
  const [shipping, setShipping] = useRecoilState(shippingState);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setShipping(fullAddress);
    setIsShowShipping(false);
  };
  return (
    <div>
      <DaumPostCode
        onComplete={handleComplete}
        style={{
          display: 'block',
          width: '400px',
          height: '480px',
        }}
      />
    </div>
  );
};
export default DaumPost;
