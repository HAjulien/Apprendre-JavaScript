const promise1 = new Promise((resolve, reject) => {
  let a = 1 + 1;

  if (a == 2)
    resolve(console.log("success"), a++, console.log("test2"), console.log(a));
  else {
    reject(console.log("failed"));
  }
});

promise1
  .then((message) => {
    message;
  })
  .catch((message) => {
    message;
  });

//-------------------------------------------------------------------------------------------------------------------------------------

const promise2 = new Promise((resolve, reject) => {
  let b = 1 + 3;

  if (b == 4) resolve("success");
  else {
    reject(console.log("failed"));
  }
});

promise2
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

//---------------------------------------------------------------------------------------------------------------------------------

const firstPromise = new Promise((resolve, reject) => {
  resolve(console.log("the first message"));
});

const secondPromise = new Promise((resolve, reject) => {
  resolve(console.log("2nd message"));
});

const lastPromise = new Promise((resolve, reject) => {
  resolve(console.log("last message"));
});

Promise.all([firstPromise, secondPromise, lastPromise]).then((message) => {
  message;
});

//---------------------------------------------------------------------------------------------------------------------------------

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`making request to ${location}`);
    if (location === "google") {
      resolve("Google say hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra information + ${response}`);
  });
}

async function doWork(location) {
  try {
    const response = await makeRequest(location);
    console.log("response received");
    const processResponse = await processRequest(response);
    console.log(processResponse);
  } catch (error) {
    console.log(error);
  }
}

//doWork("facebook");
//doWork("google");

//--------------------------------------------------------------------------------------------------------------------

let isShopOpen = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen === true) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is close"));
    }
  });
}

async function commande() {
  try {
    await time(1000);
    console.log("taking the first command after 1 seconde");
    await time(3000);
    console.log("taking the 2nd command after 3 secondes");
    await time(2000);
    console.log("taking the last command after 2 secondes");
  } catch (error) {
    console.log(error);
    // alert(error)
  } finally {
    console.log("end of the day");
  }
}

//commande();

//------------------Await boucle----------------------------------------------------------------------------

function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
  });
}

(async () => {
  console.log("start");

  const fruits = ["banana", "Strawberry", "Apple"];

  /* await a la suite, l'un apres l'autre

    for(const fruit of fruits) {
        await sleep();
        console.log(fruit);
    }

    await asynchrone en parallele non bloquant

    forEach ne fonxtionne pas car il ne renvoie rien void
    fruits.forEach( async()=> {
        await sleep()
        console.log(fruit);
    })
    */

  const sleepyFruits = fruits.map(async (fruit) => {
    await sleep();
    console.log(fruit);
  });

  //console.log(sleepyFruits);

  await Promise.all(sleepyFruits);

  console.log("End");
})();
