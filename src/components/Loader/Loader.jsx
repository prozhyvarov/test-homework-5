import { BallTriangle } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <BallTriangle
        height={70}
        width={70}
        radius={5}
        color="#efa51b"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
