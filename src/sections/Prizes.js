export const Prizes = () => {
    return (
        <section id="prizes" className="container">
            <h2>Categories &amp; Prizes</h2>
            <p>You can win multiple categories to win even bigger prizes! The total prize pool is <strong>over £2000!</strong></p>
            <ul>
                <li>
                    <h3>Software &mdash; £600</h3>
                    <p>Awarded to the project which has the best use of software.</p>
                </li>
                <li>
                    <h3>Electronics/Embedded System &mdash; £600</h3>
                    <p><strong>Sponsored by XMOS</strong></p>
                    <p>Awarded to the best Electronics project, or project utilising embedded systems. We have Raspberry Pi Picos available which you can keep if you use them in your project.</p>
                </li>
                <li>
                    <h3>WebML &mdash; £600</h3>
                    <p><strong>Sponsored by Google TensorFlow.js</strong></p>
                    <p>Awarded to the project best utilising TensorFlow.js to implement WebML in their apps. This can be on the front-end in the browser, or server-side using node.js.</p>
                    <p>If your project is particularly impressive, you might even be featured on Google's official TensorFlow JS show!</p>
                    <p>Getting started with TensorFlow.js is easy! Here are some resources to help you get started:</p>
                    <ul>
                        <li><a href="https://www.tensorflow.org/js">TensorFlow.js Official Website</a></li>
                        <li><a href="https://js.tensorflow.org/api/latest/">TensorFlow.js API</a></li>
                        <li><a href="https://www.youtube.com/watch?v=hk-709L3RK8">Workshop Recording</a></li>
                        <li><a href="https://codelabs.developers.google.com/codelabs/tensorflowjs-object-detection">Written version of Workshop</a></li>
                        <li><a href="https://goo.gle/learn-tfjs">Online Course</a></li>
                        <li>Python to TensorFlow.js command line converter <a href="https://www.tensorflow.org/js/guide/conversion">docs</a> & <a href="https://github.com/tensorflow/tfjs/tree/master/tfjs-converter">GitHub</a>.</li>
                    </ul>
                    <p>You may also be interested in browsing some pre-made models:</p>
                    <ul>
                        <li>Officially maintained TensorFlow.js team premade models:
                            <ul>
                                <li><a href="https://www.tensorflow.org/js/models">https://www.tensorflow.org/js/models</a></li>
                                <li><a href="https://github.com/tensorflow/tfjs-models">https://github.com/tensorflow/tfjs-models</a></li>
                            </ul>
                        </li>
                        <li><a href="https://tfhub.dev/s?deployment-format=tfjs">Tensorflow Hub for raw models</a>. Not all will be compatible with JS or will need conversion.</li>
                    </ul>
                </li>
                <li>
                    <h3>People's Choice &mdash; £300</h3>
                    <p>We let the people decide! The project with most votes wins!</p>
                </li>
            </ul>
        </section>
    );
}
