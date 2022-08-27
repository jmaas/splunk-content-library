require([
        'jquery',
        'splunkjs/mvc',
        'splunkjs/mvc/simplexml/ready!'
    ], function ($, mvc) {
    function submit_btn() {
                var submittedTokens = mvc.Components.get('submitted');
                var defaultTokens = mvc.Components.get('default');

                var input1 = $("#sx_input1").val();
                var input2 = $("#sx_input2").val();
                
                submittedTokens.set("sx_input1", input1);
                submittedTokens.set("sx_input2", input2);

                if (submittedTokens && defaultTokens) {
                        submittedTokens.set(defaultTokens.toJSON());
        	}
            }
    $("#sx_button").on("click", function (){
        submit_btn();
    });
   });
