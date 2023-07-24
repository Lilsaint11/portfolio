import { motion, useMotionValue, useTransform, } from "framer-motion"
import { useState } from "react";
import { Link } from "react-router-dom";

const Framer2 = () => {
    const [isOpen, setIsOpen] = useState(true)
    const variants = {
        open: { opacity: 1, y: 0,
        transition: {
            duration:1,
            when:"beforeChildren",
            staggerChildren: 1
        } },
        closed: { opacity: 0, y: "-100%" },
      }
      const childVariants = {
        open: { opacity: 1, y: 0, },
        closed: { opacity: 0, y: "-100%" },
      }
    const x = useMotionValue(0)
    const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
  )
    return ( 
        <motion.div
         className="container two"
         initial={{opacity:0}}
         animate={{opacity:1,transition:{duration:2,delay:0.5}}}
         exit={{x:'-100vw',transition:{ease:'easeInOut'}}}
        >
             <motion.nav
             className="box"
                initial={"closed"}
                animate={"open"}
                variants={variants}
                >
                <motion.button onClick={() => setIsOpen(isOpen => !isOpen)} variants={childVariants} >toggle</motion.button>
                <motion.p style={{ "color":"white" }} variants={childVariants}>solo</motion.p>
            </motion.nav>
            <motion.div style={{ background }}>
            <motion.div
            className="box"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                style={{ x }}
            >
            </motion.div>
            </motion.div>
            <Link to="/"><button>page 1</button></Link>
        </motion.div>
        
     );
}
 
export default Framer2;