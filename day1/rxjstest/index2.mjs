import { from, of, merge } from "rxjs";
import {  map,  } from 'rxjs/operators';

var data1 = [1,2,3,4,5];
var data2 = [1,2,3,4,5];
const sub1$ = from(data1);
const sub2$ = from(data2);

// sub1$.subscribe(console.log)
// sub2$.subscribe(console.log)

var sub3$ = merge(
  sub1$.pipe(
    map(a => a +"first1")
  ), 
  sub2$.pipe(
    map(a => a +"second2")
  )
)
sub3$.subscribe(console.log)