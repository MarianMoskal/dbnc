import opt1 from '../../images/option1.png';
import opt2 from '../../images/option2.png';

export default function Task3() {
  const recipe = '';

  switch (recipe) {
    case 'SPANISH':
      //  fudge = SPANISH_FUDGE;
      //  amt = base * fudge;
      //  sugar = 2 * bottom(amt) + top(amt) * 1.17;
      break;
    
    case 'ENGLISH':
      //  fudge = ENGLISH_FUDGE;
      //  amt = base * fudge;
      //  sugar = 2 * bottom(amt) + top(amt) * 1.17;
      break;
    
    case 'FRENCH':
      //  fudge = FRENCH_FUDGE;
      //  amt = base * fudge;
      //  sugar = 2 * bottom(amt) + top(amt) * 1.17;
      //  chocolate = 7;
      break;
  
    default:
      //  fudge = 1;
      //  amt = base;
      //  sugar = 2 * bottom(amt) + top(amt) * 1.17;
      break;
  }

  // if((recipe != 'SPANISH') && (recipe != 'ENGLISH') && (recipe != 'FRENCH')){
  //   fudge = 1;
  //   amt = base;
  //   sugar = 2 * bottom(amt) + top(amt) * 1.17;
  //   return
  //   }
  // if (recipe == 'SPANISH') {
  //   fudge = SPANISH_FUDGE;
  //   amt = base * fudge;
  //   sugar = 2 * bottom(amt) + top(amt) * 1.17;
  //   return
  //   } 
  // if (recipe == 'ENGLISH'){
  //   fudge = ENGLISH_FUDGE;
  //   amt = base * fudge;
  //   sugar = 2 * bottom(amt) + top(amt) * 1.17;
  //   return
  //   }
  // if (recipe == 'FRENCH') {
  //   fudge = FRENCH_FUDGE;
  //   amt = base * fudge;
  //   sugar = 2 * bottom(amt) + top(amt) * 1.17;
  //   chocolate = 7;
  //   return
  // }


  return (
    <div style={{ display: 'flex', justifyContent: 'space-around'}}>
      <img src={opt1} alt="option1" width='500'/>
      <img src={opt2} alt="option2" width='500'/>
    </div>
  )
}



// (3/5)
// Refactor the code below. By refactor we mean that you should reorganize the code to reduce the unnecessary complexity, and improve readability. In this process you should not modify the way the code functions. Do not create functions or new constants, simply refactor the code.

// if (recipe == 'SPANISH') {
//    fudge = SPANISH_FUDGE;
//    amt = base * SPANISH_FUDGE;
//    sugar = 2 * bottom(amt) + top(amt) * 1.17;
// } else if ((recipe == 'FRENCH') || (recipe == 'ENGLISH')) {
//    fudge = (recipe == 'FRENCH') ? FRENCH_FUDGE : ENGLISH_FUDGE;
//    amt = base * fudge;
//    sugar = 2 * bottom(amt) + top(amt) * 1.17;
//    if (recipe == 'FRENCH') {
//        chocolate = 7;
//    }
// } else {
//    fudge = 1;
//    amt = base;
//    sugar = 2 * bottom(amt) + top(amt) * 1.17;
// }
