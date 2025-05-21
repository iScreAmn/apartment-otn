import { GrPrevious } from "react-icons/gr";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} custom-prev-arrow`} style={{ ...style }} onClick={onClick}>
      <GrPrevious />
    </div>
  );
};

export default CustomPrevArrow;