import { from, of, withLatestFrom } from "rxjs";
import {  map, take, switchMap ,tap} from 'rxjs/operators';

var data1 = [1,2,3,4,5];
var data2 = [1,2,3,4,5];
const sub1$ = from(data1).pipe(
  tap(console.log("pipe1"))
);
const sub2$ = from(data2).pipe(
  tap(console.log("pipe2"))
);

// sub1$.subscribe(console.log)
// sub2$.subscribe(console.log)

var sub3$ = sub1$.pipe(
  withLatestFrom(sub2$),
    switchMap(a => a)
  
)
sub3$.subscribe(console.log)