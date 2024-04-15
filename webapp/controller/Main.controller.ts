import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import * as tf from '@tensorflow/tfjs'

/**
 * @namespace flxrsc.sample.tensorflow.controller
 */
export default class Main extends BaseController {
	public sayHello(): void {
		try {		
			const model = tf.sequential();
			model.add(tf.layers.dense({units: 1, inputShape: [1]}));
			MessageBox.show("TF Loaded");
		} catch(e: { message: string }) {
			MessageBox.show("Error: " + e.message);
		}
	}
}
