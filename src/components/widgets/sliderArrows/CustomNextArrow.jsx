import { GrFormNext } from 'react-icons/gr';

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} custom-next-arrow`} style={{ ...style }} onClick={onClick}>
      <GrFormNext />
    </div>
  );
};

export default CustomNextArrow;