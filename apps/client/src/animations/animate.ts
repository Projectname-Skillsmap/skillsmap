interface Animation {
  animate: Function;
  duration: number;
}

const animate = async (...animations: (Animation | null)[]) => {
  for await (const animation of animations) {
    if (animation) {
      animation.animate();
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, animation.duration);
      });
    }
  }
};

export default animate;
