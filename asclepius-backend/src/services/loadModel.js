const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/model-bucket-6/model/model.json');
}
module.exports = loadModel;