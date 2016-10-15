module PanoramaVRSample {


    /** @private */
    export class PanoramaVRSample {

        constructor() {
            Laya3D.init(0, 0,true);
            Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
            Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
            Laya.Stat.show();

            var scene = Laya.stage.addChild(new Laya.VRScene()) as Laya.VRScene;

            var camera = new Laya.VRCamera(0.03, 0, 0, 0.1, 100);
            camera = (scene.addChild(camera)) as Laya.VRCamera;

            camera.addComponent(VRCameraMoveScript);
            this.loadScene(scene, camera);
        }

        private loadScene(scene: Laya.BaseScene, camera: Laya.VRCamera): void {

            var mesh = scene.addChild(new Laya.MeshSprite3D(new Laya.SphereMesh(1, 20, 20))) as Laya.MeshSprite3D;

            var material = new Laya.StandardMaterial();
            material.renderMode = Laya.BaseMaterial.RENDERMODE_OPAQUEDOUBLEFACE;
            mesh.meshRender.sharedMaterial = material;

            Laya.loader.load("../../res/threeDimen/panorama/panorama.jpg", Laya.Handler.create(null, function (texture: Laya.Texture): void {
                (texture.bitmap as Laya.WebGLImage).mipmap = true;
                 (texture.bitmap as Laya.WebGLImage).enableMerageInAtlas = false;
                material.diffuseTexture = texture;
            }));
        }
    }
}
new PanoramaVRSample.PanoramaVRSample();