'use client';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Caurasel = () => {
  return (
    <AwesomeSlider
      bullets={false}
      play={true}
      cancelOnInteraction={false}
      interval={6000}
      mobileTouch={true}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </AwesomeSlider>
  );
};
export default Caurasel;
