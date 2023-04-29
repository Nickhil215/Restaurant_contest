function getMenu(){
    return fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
        console.log('Menu List', data);
        return data;
      })
      .catch(error => {
        console.error("Unable to fetch data from url Menu ", error);
      });
  }
  
  function TakeOrder(menu) {

    // const menu=menu;

    return new Promise(resolve => {
      setTimeout(() => {
        // Choose 3 burgers randomly and add to order object
        const order = {
          Order: [
            menu[Math.floor(Math.random() * menu.length)],
            menu[Math.floor(Math.random() * menu.length)],
            menu[Math.floor(Math.random() * menu.length)]
          ]
        };
        resolve(order);
      }, 2500);
    });
  }
  
  function orderPrep(){
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = {
          order_status: true,
          paid: false
        };
        resolve(orderStatus);
      }, 1500);
    });
  }
  
  function payOrder(){
    return new Promise(resolve => {
      setTimeout(() => {
        const payStatus = {
          order_status: true,
          paid: true
        };
        resolve(payStatus);
      }, 1000);
    });
  }
  
  function thankyouFnc(){
    alert("thankyou for eating with us today!");
  }
  
  function handle_orders(){
    getMenu()
      .then((menu) => {
        return TakeOrder(menu);
      })
      .then(order => {
        console.log("Order", order);
        return orderPrep();
      })
      .then(orderStatus => {
        console.log("Order status", orderStatus);
        return payOrder();
      })
      .then(orderStatus => {
        console.log("Payment status", orderStatus);
        if(orderStatus.paid){
          thankyouFnc();
        }
      })
      .catch(error => {
        console.error("Error in the order process", error);
      });
  }
  
  handle_orders();
  