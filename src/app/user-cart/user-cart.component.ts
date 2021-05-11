import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})

export class UserCartComponent implements OnInit {

  data:string;
  cost:number = 0;

  itemlist:Array<string> = [];
  pricelist:Array<string> = [];



  constructor(private route: Router) { }

  ngOnInit(): void {
    this.cartList();
  }

  cartList()
  {
    Object.keys(sessionStorage).forEach( (item) => 
    {
      if( item != "role" && item != "token")
      {
        let d1 = sessionStorage.getItem(item);
        this.data = item;
        if(d1 != null)
        {
          this.cost += parseInt(d1);
          this.itemlist.push(item);
          this.pricelist.push(d1);
        }
      }
    });
  }

  placeOrder()
  {
    alert("Your order has been placed. Thankyou for shopping");
    this.route.navigate(["Home"]);
    Object.keys(sessionStorage).forEach( (item) => 
    {
      if( item != "role" && item != "token")
      {
        sessionStorage.removeItem(item);
      }
    });
  }

}
