import Framer1 from './framer1'
import Framer2 from './framer2'
import { Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation()
    return ( 
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={ <Framer1 />} />
                <Route  path="/page2" element={ <Framer2 />} />
            </Routes> 
        </AnimatePresence>
     );
}
 
export default AnimatedRoutes;