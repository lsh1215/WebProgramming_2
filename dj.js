let a = 1;
function fn() {
  let b = 2;
  console.log(a + b);
  function fn2() {
    let c = 3;
    console.log(a + b + c);
    function fn3() {
      let d = 4;
      console.log(a + b + c + d);
    }
    fn3();
  }
  fn2();
}
fn();
