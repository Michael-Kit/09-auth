import { RingLoader } from 'react-spinners';
import css from './Home.module.css';

const Loader = () => (
  <RingLoader
    size="100px"
    color="#0dfd8dff"
    className={css.loader}
    speedMultiplier={3}
  />
);

export default Loader;
