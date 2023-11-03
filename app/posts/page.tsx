//dihalaman ini disebutnya server side tetapi kita mengcombine dengan client side, contohnya seperti dibagian ViewUserButton

import ViewUserButton from "../components/UserButton";
import styles from "./postPage.module.css"

const   Posts = () => {
    return (
        <>
            <div className={styles.bgRed}>POSTINGAN PAGE</div>
            <ViewUserButton/> 
        </>
        )
}

export default Posts;