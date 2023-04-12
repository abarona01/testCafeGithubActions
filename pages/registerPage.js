const {Selector} = require('testcafe');

function select(Selector){
    return Selector(Selector).with({boundTestRun:testController})
}

exports.RegisterPage ={
    GenderButton: function(){
        return select('#gender-male');
    
    },
    FirstName: function(){
        return select('input#FirstName');
    
    },
    LastName: function(){
        return select('#LastName');
    
    },
    DateOfBirthDate: function(){
        return select("select[name='DateOfBirthDay']");
    
    },
    MonthOfBirth: function(){
        return select("select[name='DateOfBirthMonth']");
    
    },
    YearOfBirth: function(){
        return select("select[name='DateOfBirthYear']");
    
    },
    Email: function(){
        return select('#Email');
    
    },
    Password: function(){
        return select('#Password');

    
    },
    ConfirmPassword: function(){
        return select('#confirmPassword');

    
    },
    RegisterButton: function(){
        return select('#register-button.button-1.register-next-step-button');

    
    },
    Successfulmessage: function(){
        return select('div.result').withText('Your registration completed');

    
    },
    ListOption : function(){
        return select('option');
    }
   
}
