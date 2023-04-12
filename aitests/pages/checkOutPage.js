import { Selector, t } from "testcafe";

class CheckoutPage{
    constructor(){
        this.countryList = Selector("Select[id='BillingNewAddress")
        this.cityTtxt = Selector("input[id='BillingNewAddress_City")
        this.addressTxt = Selector("Select[id='BillingNewAddress")
        this.zipTxt = Selector("input[id='BillingNewAddress_City")
        this.phoneTxt = Selector("Select[id='BillingNewAddress")
        this.continueBtn = Selector("input[id='BillingNewAddress_City")
        this.nextDayOption = Selector("Select[id='BillingNewAddress")
        this.nextShippingBtn = Selector("input[id='BillingNewAddress_City")
        this.nextPaymentBtn = Selector("input[id='BillingNewAddress_City")
        this.nextConfirmBtn = Selector("Select[id='BillingNewAddress")
        this.confirmOrderBtn = Selector("input[id='BillingNewAddress_City")
        this.orderConfirmationMessage = Selector("Select[id='BillingNewAddress")
        this.viewOrderDetailsLink = Selector("input[id='BillingNewAddress_City")
    }
    }
