(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart')
    })

})();

// add items to card
(function(){

    const cartbtn = document.querySelectorAll('.container1');

    cartbtn.forEach(function(btn){
btn.addEventListener('click',function(event){
   // console.log(event.target);
   
   if(event.target.parentElement.classList.contains('container1'))
   {
       let fullpath=event.target.parentElement.previousElementSibling.firstChild.nextSibling.src;
       let pos = 22;
       let partpath=fullpath.slice(22);

       //console.log(partpath);
       const item = {};
       item.img = `img-cart/${partpath}`;
       let name=event.target.parentElement.children[0].textContent;
       item.name=name;
       

       let price=event.target.parentElement.children[1].textContent;
       let finalprice=price.slice(2).trim();
       item.price=finalprice;

       //console.log(item);

       
       //console.log(name);
      // console.log(item);

      const cartitem = document.createElement('div');
      cartitem.classList.add(
          "cart-item",
          "d-flex",
          "justify-content-between",
          "text-capitalize",
          "my-3"
          );

      cartitem.innerHTML =`
      
        <img src="${item.img}" class="img-fluid rounded-circle" width="50px" height="50px" id="item-img" alt="">
        <div class="item-text">
  
          <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
          <span>$</span>
          <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
          
        </div>
        <a href="#" id='cart-item-remove' class="cart-item-remove">
          <i class="fas fa-trash"></i>
        </a>
      </div>
      `;

      const cart = document.getElementById("cart");
      const total = document.querySelector(".cart-total-container");
      cart.insertBefore(cartitem,total);

      alert("item added to the cart");
      showTotals();
   
    }

});

    });

    function showTotals()
    {
        const total = [];
        const items = document.querySelectorAll(".cart-item-price");
        items.forEach(function(item){
            total.push(parseFloat(item.textContent));
        });
        //console.log(total);

        const totalMoney = total.reduce(function(total,item){
            total += item;
            return total;

        });

        document.getElementById("cart-total").textContent=totalMoney;
        document.querySelector(".item-total").textContent=totalMoney;
        document.getElementById("item-count").textContent=total.length;
    }

})();