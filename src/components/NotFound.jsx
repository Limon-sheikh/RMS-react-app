import Lottie from "lottie-react";
import AnimationNotFound from "../Animation/NotFound.json";

const NotFound = () => {
    return (
        <div id="lottyAnimation">
            <Lottie className="w-[100%] h-[100vh]" animationData={AnimationNotFound}></Lottie>
        </div>
    );
};

export default NotFound;