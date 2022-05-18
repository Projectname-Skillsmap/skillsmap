import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { delay, mergeMap, Subject, tap } from "rxjs";
import curtain__style from "./curtain.module.css";
export const startAnimation$ = new Subject<number>();
const navigationEnd$ = new Subject<string>();

interface Animation {
  className: string;
  duration: number;
}

const Curtain = () => {
  const [animation, setState] = useState<Animation>({
    className: curtain__style.container,
    duration: 500,
  });
  const page = useRouter().query.level as string;

  useEffect(() => {
    navigationEnd$.next(page);
  }, [page]);

  useEffect(() => {
    startAnimation$
      .pipe(
        tap((time) =>
          setState({
            className: `${curtain__style.container} ${curtain__style.in}`,
            duration: time,
          })
        ),
        mergeMap((time) =>
          navigationEnd$.pipe(
            tap(() =>
              setState({
                className: `${curtain__style.container} ${curtain__style.out}`,
                duration: time,
              })
            ),
            delay(time),
            tap(() =>
              setState({
                className: curtain__style.container,
                duration: time,
              })
            )
          )
        )
      )
      .subscribe();
  }, []);
  return (
    <div
      className={animation.className}
      style={{
        transition: `all ${animation.duration}ms cubic-bezier(0.165, 0.84, 0.44, 1)`,
      }}></div>
  );
};

export default Curtain;
