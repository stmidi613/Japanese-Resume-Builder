import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobilePhone } from '@fortawesome/free-solid-svg-icons';
import './button.css';

interface Props {
  mobileButtonText: string;
}

const MobileButton:React.FC<Props> = ({mobileButtonText}) => {
  return (
    <>
        <button className="inline-flex button-animation text-white text-left font-bold drop-shadow-md hover:drop-shadow-none text-xs w-20 rounded-md py-2">
            <FontAwesomeIcon icon={faMobilePhone} className="text-white float-left px-1 w-8 h-8" />
            {mobileButtonText}
        </button>
    </>
  )
}

export default MobileButton;