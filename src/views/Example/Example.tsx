import {useEffect, useRef, useState} from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import Button from "../../components/Button";



const Example = () => {
    const [isVisible, setVisible] = useState(true);
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/data/Snake.loader.js",
        dataUrl: "/data/Snake.data.br",
        frameworkUrl: "/data/Snake.framework.js.br",
        codeUrl: "/data/Snake.wasm.br",
    });


    const send = () => {
        sendMessage("snake_0", "SpawnEnemies", 999); // 调用send函数
    }

    const renderContent = () => {
        return <Unity unityProvider={unityProvider} style={{width: '100%', height: '100%'}}/>;
    };


    return <div style={{width: '100%', height: '100%', margin: '0 auto'}}>

        {renderContent()}

        <Button onClick={send}>Set PrevScroe</Button>
    </div>;
};

export default Example;




