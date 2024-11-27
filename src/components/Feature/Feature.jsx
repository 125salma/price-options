
import PropTypes from 'prop-types'
import { TiTick } from "react-icons/ti";


const Feature = ({feature}) => {

    return (
        <div>
            <p className='flex items-center'><TiTick className='text-green-500 mr-2' /> {feature}</p>
        </div>
    );
};
Feature.propTypes ={
    feature:PropTypes.string
}

export default Feature;