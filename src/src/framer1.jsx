import { motion} from "framer-motion"
import { Link } from "react-router-dom";

const Framer1 = () => {
    return( 
        <motion.div 
         className="container one"
         initial={{opacity:0}}
         animate={{opacity:1,transition:{duration:2,delay:0.5}}}
         exit={{x:'-100vw',transition:{ease:'easeInOut'}}}
        >
            <motion.div
                className="box"
                drag
                dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            />
            <motion.div
                className="box"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            />
            <Link to="./page2"><button>page 2</button></Link> 
        </motion.div>
        
     );
}
 
export default Framer1;