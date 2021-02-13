const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log("Hello");

    // Interpolated
console.log("Hello I am not an %s string!", 'empty');

    // Styled
    // console.log('%c I am some great text', 'font-size: 50px; background: #BADA55');

    // warning!
    console.warn('Oh NOOOOOOOO!');

    // Error :|
    console.error('Oh error!')

    // Info
    console.info('Scotland has 421 words for “snow”')

    // Testing
    console.assert(1 === 2, "That is wrong!");

    // clearing
    console.clear();

    // Viewing DOM Elements
    const p = document.querySelector('p');
    console.log(p);
    // to open the element up - dropdown
    console.dir(p);
 

    // Grouping together
    dogs.forEach(dog => {
      // console.grouCollapsed('${dog.name}'); 
      console.group(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is $${dog.age * 7} dof years old.`);
      console.groupEnd(`${dog.name}`);
    })

    // counting
    console.count('Eve');
    console.count('Eve');
    console.count('Eve');
    console.count('Ves');
    console.count('Eve');
    console.count('Ves');
    console.count('Eve');


  // table 
  console.table(dogs);
