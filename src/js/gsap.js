import gsap from "gsap";
import { TimelineMax } from "gsap/all";
import TextPlugin from "gsap/TextPlugin";
import { allert } from "../js/splash.js";

const DIR = "kali@linux:~/Desktop/hack/$  ";
const FIRST = "python hack.py";
const CAT = "cat message.txt";
const SECOND = "running on http://192.435.26.46:8080/";
const MSG =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat voluptatem culpa iusto ducimus voluptas illo? Similique eligendi accusamus enim, distinctio quis voluptatem amet, nemo aut eveniet reprehenderit possimus itaque quod ipsa libero ut tempora sunt repellendus fugiat nulla numquam? Velit porro quos ratione deserunt quasi? Quaerat vel provident assumenda?";
const CONNECT = "initiating connection...";
const IPV4 = "connecting to IPv4 Address: 192.168.67.246";

const first = () => {
  return gsap.to(".txt-2", {
    duration: 1.2,
    text: FIRST,
    ease: "Linear.easeOut",
  });
};

const dir1 = () => {
  return gsap.to(".txt-3", {
    duration: 0.1,
    text: DIR,
    ease: "none",
  });
};

const second = () => {
  return gsap.to(".txt-4", {
    duration: 1.2,
    text: SECOND,
    ease: "Linear.easeOut",
  });
};

const dir2 = () => {
  return gsap.to(".txt-5", {
    duration: 0.1,
    text: DIR,
    ease: "none",
  });
};

const third = () => {
  return gsap.to(".txt-6", {
    duration: 1.2,
    text: CAT,
    ease: "Linear.easeOut",
  });
};

const fourth = () => {
  return gsap.to(".txt-7", {
    duration: 2.2,
    text: MSG,
    ease: "Linear.easeOut",
  });
};

const dir3 = () => {
  return gsap.to(".txt-8", {
    duration: 0.1,
    text: DIR,
    ease: "none",
  });
};

const fifth = () => {
  return gsap.to(".txt-9", {
    duration: 2.2,
    text: CONNECT,
    ease: "Linear.easeOut",
  });
};

const dir4 = () => {
  return gsap.to(".txt-10", {
    duration: 0.1,
    text: DIR,
    ease: "none",
  });
};

const sixth = () => {
  return gsap.to(".txt-11", {
    duration: 2.2,
    text: IPV4,
    ease: "Linear.easeOut",
  });
};

export function run() {
  gsap.registerPlugin(TextPlugin);
  new TimelineMax({ repeat: -1, repeatDelay: 1 })
    .add("txt-1")
    .add(first, "txt-1+=0.5")
    .add(dir1, ".txt-2+=1.4")
    .add(second, ".txt-3+=0.5")
    .add(dir2, ".txt-4+=1.4")
    .add(third, "txt-5+=0.5")
    .add(fourth, ".txt-6+=1.5")
    .add(dir3, ".txt-7+=2.5")
    .add(fifth, ".txt-8+=0.5")
    .add(dir4, ".txt-9+=2.5")
    .add(sixth, ".txt-10+=0.5")
    .add(allert, ".txt-11+=3");
}
