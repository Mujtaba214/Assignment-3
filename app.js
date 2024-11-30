let a = 5;

let exp1 =
  ((4 + 5 && "abc") || false + "test") * (a-- || --a) ||
  (false && ++a + 1) * "end";
// Output is NaN because we can't multiply boolean values with a string

let exp2 =
  (10 * (("foo" && 5 + ++a) || "bar") && false + "test") || (0 && true);
// Output is falsetest

let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
// Output is NaNresult

let exp4 = "hello" + (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
// Output is hello7

let exp5 = true || ((0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
// Output is true

let exp6 = (++a + "abc" && 4 * 2 + 3) || (0 + 1 && 3 * "hello") || a--;
// Output is 11

let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
// Output is 9

let exp8 = (0 + 1 && true + 0) || ((false + "test") * 4 && 3 + 2) || "value";
// Output is 1

let exp9 = 3 * "abc" + (true + 1) || (++a + "test" && 3 + "result") || null;
// Output is 3result

let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
// Output is start

let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
// Output is 20

let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
// Output is result

let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
// Output is falsetest

let exp14 = (false + "abc") * 2 || ((--a + 1) * "start" + 3 && 4) || "end";
// Output is end

let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
// Output is NaNresult

let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
// Output is null

let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
// Output is 4

let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
// Output is 0

let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
// Output is foo

let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
// Output is end5

let exp21 = (5 * (true + ++a) && "test" + false) || 7 * (true + 2) + "value";
// Output is testfalse

let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
// Output is test

let exp23 = (false && 2) || ((a++ + 1) * "end" && "start") || (4 * 5 && "result");
// Output is result

let exp24 = 3 + 2 * "test" || ((false + a--) * "hello" && "world" + 1) || 2;
// Output is 2

let exp25 = ((3 + 4) * (false || a--) && 5) || ("start" + 1 + "test" && 0);
// Output is 5

let exp26 = ("hello" && 3 * 2 + (a++ + 1)) || (false + true) * "result" + "end";
// Output is 12

let exp27 = (3 * "test" + (true + 2) && (false || "value")) || "start" + a++;
// Output is start5

let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
// Output is world

let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
// Output is NaNresult

let exp30 = (true + 3) * "test" || (1 * 5 && false + "value" + "end") || a--;
// Output is falsevalueend

let exp31 = 3 + "end" || (2 * "test" && ++a + true) || "start" + 1;
// Output is 3end

let exp32 = (0 + 3) * (true + false) || (5 * "hello" + 2 && false + "test");
// Output is 3

let exp33 = (2 + 3 && "end" + a++) || ((false + "test") * 4 && 5);
// Output is end5

let exp34 = "hello" + 4 * (false + a--) || (3 && "start" + 1) || true + "test";
// Output is hello20

let exp35 = ("start" && (a-- || "test") * 4 + 5 && false + "end") || 2;
// Output is falseend

let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
// Output is 8

let exp37 = ("hello" && 2 + "test") || (++a + 3 && true + "value" + 1);
// Output is 2test

let exp38 = (5 * (a-- || "test") && 6 * "result") || 2 + "end";
// Output is 2end

let exp39 = ("start" && (false + 1) * 2) || (3 + 4 * "hello" + 5 && 0);
// Output is 2

let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
// Output is NaN

let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
// Output is hello

let exp42 = 1 + 2 * "end" || (false + 3 && "result" * 4 + a++);
// Output is NaN

let exp43 = (false && a--) || (4 * (3 + 2) && "start" + 5);
// Output is start5

let exp44 = (3 + 2 * (true + 5) && "value" + 1) || ++a + 2 + "test";
// Output is value1

let exp45 = ((false || 1) + "test" && 5 + 3 * a--) || "end" + 2;
// Output is 20

let exp46 = (2 * a-- + 4 && "test") || (3 + "hello" && (false + 1) * 5);
// Output is test

let exp47 = (0 + "result" && (3 + 1) * 2) || (false + a--) * "end";
// Output is 8

let exp48 = ((false || 1) * "test" && 4) || (true + 2) * "hello" + a--;
// Output is NaN

let exp49 = (2 * 3 + "result" && 4 * (a-- + 1)) || "start" + 2 + "end";
// Output is 24

let exp50 = (32 && true - ++a && " ") || "true"; 
// it is solved as (32 && -5 && " ") = " " - truthy value , that's why :
// Output is " "

let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
// Output is 42

let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
// Output is NaN

let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
// Output is startend

let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
// Output is NaN

let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
// Output is startNaN

let exp56 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
// Output is 24test

let exp57 = 3 * "test" + 1 || (++a && a--) * "result" || "value";
// Output is value

let exp58 = (a-- + "start") * "result" || false + 2 + "end" + 3;
// Output is 2end3

let exp59 = 5 * (a-- + 3) * "test" || (false && "start") + 2;
// Output is 2

let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
// Output is NaN

let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
// Output is 36result

let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
// Output is startNaN

let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
// Output is valueNaN

let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
// Output is startfalse

let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
// Output is valueNaN

let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
// Output is NaNresult

let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
// Output is startNaN

let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
// Output is 12result

let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
// Output is NaN

let exp70 = (a-- + 2) * "result" || (false && "end") + 3;
// Output is 3

let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
// Output is test16

let exp72 = 3 * (a-- + "value") || (false + 2) * "test";
// Output is NaN

let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
// Output is NaNstart

let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
// Output is NaNstart

let exp75 = 3 * "test" + (a-- + "start") || (false + 1) * "result";
// Output is NaN5start
