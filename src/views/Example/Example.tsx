import {useEffect, useRef, useState} from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";



const Example = () => {
    const [isVisible, setVisible] = useState(true);
    const { unityProvider } = useUnityContext({
        loaderUrl: "/data/Snake.loader.js",
        dataUrl: "/data/Snake.data.br",
        frameworkUrl: "/data/Snake.framework.js.br",
        codeUrl: "/data/Snake.wasm.br",
    });


    const renderContent = () => {
        return <Unity unityProvider={unityProvider} style={{width: '100%', height: '100%'}}/>;
    };


    return <div style={{width: '100%', height: '100%', margin: '0 auto'}}>

        {renderContent()}
    </div>;
};

export default Example;




