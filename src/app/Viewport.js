import { Scene } from "airr-react";
import MainScene, { viewName as MainSceneViewName } from "./MainScene.js";

export default class Viewport extends Scene {
    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            activeViewName: MainSceneViewName,
            name: "viewport",
            animation: "overlay",
            views: [
                {
                    type: MainScene,
                    props: {
                        name: MainSceneViewName,
                        handleViewportScenePush: this.handleViewportScenePush,
                        handleViewportViewPop: this.handleViewportViewPop
                    }
                }
            ],
            stackMode: true
        };
    }

    handleViewportViewPop = () => {
        this.popView();
    };

    handleViewportScenePush = sceneConfig => {
        this.changeView(sceneConfig);
    };
}
