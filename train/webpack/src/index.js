import counter from "./components/counter/counter.js";
import logger from "./logger.js";

logger("hello from index");

const myCount = counter();

myCount.increment(2);

myCount.render();
